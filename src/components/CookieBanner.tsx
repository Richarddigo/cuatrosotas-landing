'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useConsent } from '@/hooks/useConsent';

const CookieBanner = () => {
    const t = useTranslations('cookieBanner');
    const { consent, accept, reject } = useConsent();
    const open = consent === 'unknown';

    // We always render the DOM node (position: fixed) and toggle visibility
    // via classes. This way mounting/unmounting after hydration does not
    // trigger a layout shift attributable to the footer.
    return (
        <div
            className={`cookie-notice ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            role="dialog"
            aria-live="polite"
            aria-label={t('ariaLabel')}
            aria-hidden={!open}
        >
            <p className="mb-4 text-sm text-white/80">{t('message')}</p>
            <div className="flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={accept}
                    className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    tabIndex={open ? 0 : -1}
                >
                    {t('acceptAll')}
                </button>
                <button
                    type="button"
                    onClick={reject}
                    className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    tabIndex={open ? 0 : -1}
                >
                    {t('reject')}
                </button>
                <Link
                    href="/legal/cookies"
                    className="ml-auto text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
                    tabIndex={open ? 0 : -1}
                >
                    {t('moreInfo')}
                </Link>
            </div>
        </div>
    );
};

export default CookieBanner;
