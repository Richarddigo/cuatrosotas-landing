'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t, navTranslations } from '@/i18n/translations';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_LINKS = [
    { href: '/', key: 'home' },
    { href: '/support', key: 'support' },
    { href: '/privacy', key: 'privacy' },
    { href: '/terms', key: 'terms' },
] as const;

export default function Navbar() {
    const pathname = usePathname();
    const { lang } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler, { passive: true });
        handler();
        return () => window.removeEventListener('scroll', handler);
    }, []);

    // Close mobile menu on route change
    useEffect(() => setMobileOpen(false), [pathname]);

    const labels: Record<string, string> = {
        home: t(navTranslations.home, lang),
        support: t(navTranslations.support, lang),
        privacy: t(navTranslations.privacy, lang),
        terms: t(navTranslations.terms, lang),
    };

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <header
            className={`cs-header${scrolled ? ' cs-header--scrolled' : ''}`}
            role="banner"
        >
            <div className="cs-nav-inner">
                {/* Brand */}
                <Link href="/" className="cs-brand" aria-label={t(navTranslations.brandHomeAria, lang)}>
                    <Image
                        src="/logo.png"
                        alt=""
                        width={40}
                        height={40}
                        className="cs-brand-logo"
                    />
                    <span className="cs-brand-text">
                        <span className="cs-brand-name">{t(navTranslations.siteTitle, lang)}</span>
                        <span className="cs-brand-tagline">{t(navTranslations.siteTagline, lang)}</span>
                    </span>
                </Link>

                {/* Desktop navigation */}
                <nav
                    className="cs-nav-links"
                    aria-label={t(navTranslations.mainNavAria, lang)}
                >
                    {NAV_LINKS.map(({ href, key }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`cs-nav-link${isActive(href) ? ' cs-nav-link--active' : ''}`}
                            {...(isActive(href) ? { 'aria-current': 'page' as const } : {})}
                        >
                            {labels[key]}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="cs-nav-actions">
                    <LanguageSwitcher />

                    {/* Hamburger (mobile only) */}
                    <button
                        type="button"
                        className="cs-hamburger"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-expanded={mobileOpen}
                        aria-controls="cs-mobile-menu"
                        aria-label={mobileOpen ? t(navTranslations.closeMenu, lang) : t(navTranslations.openMenu, lang)}
                    >
                        <span className={`cs-hb-line${mobileOpen ? ' open' : ''}`} />
                        <span className={`cs-hb-line${mobileOpen ? ' open' : ''}`} />
                        <span className={`cs-hb-line${mobileOpen ? ' open' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                id="cs-mobile-menu"
                className={`cs-mobile-menu${mobileOpen ? ' cs-mobile-menu--open' : ''}`}
                aria-hidden={!mobileOpen}
            >
                <nav aria-label={t(navTranslations.mainMenuAria, lang)}>
                    {NAV_LINKS.map(({ href, key }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`cs-mobile-link${isActive(href) ? ' cs-mobile-link--active' : ''}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {labels[key]}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
