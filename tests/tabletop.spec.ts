import { test, expect } from '@playwright/test';

test('four original cards can be explored with pointer and keyboard', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('CuatroSotas.');
    const cards = page.getByRole('group', { name: 'Pick a Jack. Meet its suit.' });
    await expect(cards.getByRole('button')).toHaveCount(4);
    await expect(cards.getByRole('button', { name: 'Coins', exact: true })).toHaveAttribute('aria-pressed', 'true');
    await cards.getByRole('button', { name: 'Cups', exact: true }).click();
    await expect(page.locator('.suit-description')).toContainText('Cups');
    const swords = cards.getByRole('button', { name: 'Swords', exact: true });
    await swords.focus();
    await page.keyboard.press('Enter');
    await expect(swords).toHaveAttribute('aria-pressed', 'true');
    await expect(cards.getByRole('button', { pressed: true })).toHaveCount(1);
    await expect(page.locator('.table-disclaimer')).toHaveText('Illustrated deck · not a playable match');
    await page.getByRole('link', { name: 'Discover the twist' }).click();
    await expect(page).toHaveURL(/#the-play$/);
    expect(errors).toEqual([]);
});

for (const [locale, path, heading] of [
    ['en', '/', 'The hand that changes everything'],
    ['es', '/es', 'La jugada que lo cambia todo'],
    ['de', '/de', 'Die Hand, die alles verändert'],
    ['fr', '/fr', 'La main qui change tout'],
]) {
    test(locale + ': localized home, support and legal routes remain usable', async ({ page }) => {
        await page.goto(path);
        await expect(page.locator('html')).toHaveAttribute('lang', locale);
        await expect(page.getByRole('heading', { name: heading, exact: true })).toBeVisible();
        await expect(page.locator('main a[href="#"]')).toHaveCount(0);
        await expect(page.locator('.store-status span')).toHaveCount(2);
        await expect(page.locator('main').getByRole('heading', { name: /Premium|Abonnement/ })).toHaveCount(0);
        const prefix = locale === 'en' ? '' : '/' + locale;
        for (const legal of ['support', 'privacy', 'terms', 'cookies']) {
            const response = await page.goto(prefix + '/legal/' + legal);
            expect(response?.status()).toBe(200);
            await expect(page.locator('main, .legal-content').first()).toBeVisible();
            await expect(page.locator('body')).not.toContainText(/MISSING_MESSAGE|support\.legalDocsTitle/);
        }
    });
}

test('mobile navigation, language selection and FAQ preserve keyboard controls', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const opener = page.getByRole('button', { name: 'Open menu', exact: true });
    await opener.click();
    const menu = page.getByRole('dialog', { name: 'Main menu', exact: true });
    await expect(menu).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
    await expect(opener).toBeFocused();
    await opener.click();
    await menu.getByRole('button', { name: /Selected language:/ }).click();
    await menu.getByRole('menuitem', { name: /Español/ }).click();
    await expect(page).toHaveURL(/\/es$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    const question = page.locator('.faq-question').first();
    await question.click();
    await expect(question).toHaveAttribute('aria-expanded', 'true');
    const answer = page.locator('#' + await question.getAttribute('aria-controls'));
    await expect(answer).toBeVisible();
    await question.press('Enter');
    await expect(question).toHaveAttribute('aria-expanded', 'false');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('analytics waits for consent and preferences allow rejection again', async ({ page }) => {
    let analyticsLoads = 0;
    await page.route('**/_vercel/insights/script.js', async route => {
        analyticsLoads++;
        await route.fulfill({ contentType: 'application/javascript', body: '' });
    });
    await page.goto('/');
    const notice = page.getByRole('dialog', { name: 'Cookie consent' });
    await expect(notice).toBeVisible();
    expect(analyticsLoads).toBe(0);
    await notice.getByRole('button', { name: 'Essentials only' }).click();
    await expect(notice).toBeHidden();
    await page.reload();
    await expect(notice).toBeHidden();
    expect(analyticsLoads).toBe(0);
    await page.getByRole('button', { name: 'Cookie preferences' }).click();
    await expect(notice).toBeVisible();
    await notice.getByRole('button', { name: /Accept/ }).click();
    await expect.poll(() => analyticsLoads).toBe(1);
    await page.evaluate(() => { localStorage.removeItem('cuatrosotas-consent'); window.dispatchEvent(new StorageEvent('storage', { key: 'cuatrosotas-consent', newValue: null })); });
    await expect(notice).toBeVisible();
    await notice.getByRole('button', { name: /Accept/ }).click();
    await page.evaluate(() => { localStorage.setItem('cuatrosotas-consent', 'invalid'); window.dispatchEvent(new StorageEvent('storage', { key: 'cuatrosotas-consent', newValue: 'invalid' })); });
    await expect(notice).toBeVisible();
    await notice.getByRole('button', { name: 'Essentials only' }).click();
    await page.getByRole('button', { name: 'Cookie preferences' }).click();
    await notice.getByRole('button', { name: 'Essentials only' }).click();
    await page.reload();
    await expect(notice).toBeHidden();
    expect(analyticsLoads).toBe(1);
});

test('consent still works when browser storage is unavailable', async ({ page }) => {
    await page.addInitScript(() => {
        Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Storage blocked', 'SecurityError'); } });
    });
    await page.goto('/');
    const notice = page.getByRole('dialog', { name: 'Cookie consent' });
    await notice.getByRole('button', { name: 'Essentials only' }).click();
    await expect(notice).toBeHidden();
    await page.getByRole('button', { name: 'Cookie preferences' }).click();
    await expect(notice).toBeVisible();
});

test('desktop and mobile composition respects reduced motion and fits the viewport', async ({ page }, testInfo) => {
    await page.goto('/es');
    await page.screenshot({ path: testInfo.outputPath('desktop-first-visit.png') });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: testInfo.outputPath('mobile-first-visit.png') });
    await page.getByRole('dialog', { name: /cookies/i }).getByRole('button', { name: 'Solo necesarias' }).click();
    await expect(page.locator('.table-card-button').first()).toHaveCSS('transition-duration', '0s');
    for (const [name, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]] as const) {
        await page.setViewportSize({ width, height });
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({ path: testInfo.outputPath(name + '.png') });
        const overflow = await page.evaluate(() => Array.from(document.querySelectorAll('body *')).map(el => ({ tag: el.tagName, cls: el.className, left: el.getBoundingClientRect().left, right: el.getBoundingClientRect().right })).filter(el => el.right > innerWidth + 1 || el.left < -1).slice(0, 15));
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), JSON.stringify(overflow)).toBe(true);
        if (name === 'desktop') await page.screenshot({ path: testInfo.outputPath('full-page.png'), fullPage: true });
    }
});

test('a failed write cannot restore consent after revocation in the interface', async ({ page }) => {
    await page.route('**/_vercel/insights/script.js', route => route.fulfill({ contentType: 'application/javascript', body: '' }));
    await page.goto('/');
    const notice = page.getByRole('dialog', { name: 'Cookie consent' });
    await notice.getByRole('button', { name: 'Accept all' }).click();
    await expect(notice).toBeHidden();
    await page.evaluate(() => {
        Storage.prototype.setItem = () => { throw new DOMException('Read only', 'QuotaExceededError'); };
        Storage.prototype.removeItem = () => { throw new DOMException('Read only', 'SecurityError'); };
    });
    await page.getByRole('button', { name: 'Cookie preferences' }).click();
    await expect(notice).toBeVisible();
    await notice.getByRole('button', { name: 'Essentials only' }).click();
    await expect(notice).toBeHidden();
    expect(await page.evaluate(() => localStorage.getItem('cuatrosotas-consent'))).toBe('accepted');
    await page.getByRole('button', { name: 'Cookie preferences' }).click();
    await expect(notice).toBeVisible();
});
