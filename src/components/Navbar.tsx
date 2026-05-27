'use client';

import { createPortal } from 'react-dom';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import {
    NAVIGATION_CONTRACT,
    emitMobileMenuTelemetry,
    type MobileMenuTelemetryReason,
} from '@/lib/navigationContract';
import { useMenuPortal } from '@/hooks/useMenuPortal';
import { useMobileMenuA11y } from '@/hooks/useMobileMenuA11y';

const NAV_LINKS = [
    { href: '/', key: 'home' },
    { href: '/legal/support', key: 'support' },
    { href: '/legal/privacy', key: 'privacy' },
    { href: '/legal/terms', key: 'terms' },
] as const;

export default function Navbar() {
    const pathname = usePathname();
    const t = useTranslations('nav');
    const locale = useLocale();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const desktopLinks = NAV_LINKS.filter((item) => item.href !== '/');

    const openButtonRef = useRef<HTMLButtonElement | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const portalEl = useMenuPortal();
    const isHydrated = useSyncExternalStore(
        () => () => { },
        () => true,
        () => false,
    );

    useMobileMenuA11y(
        {
            open: mobileOpen,
            menuRef,
            openerRef: openButtonRef,
            closerRef: closeButtonRef,
            portalEl,
            onEscapeClose: () => emitMobileMenuTelemetry('close', 'escape'),
        },
        setMobileOpen,
    );

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler, { passive: true });
        handler();
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const openMobileMenu = () => {
        emitMobileMenuTelemetry('open', 'open-button');
        setMobileOpen(true);
    };

    const closeMobileMenu = (reason: MobileMenuTelemetryReason) => {
        emitMobileMenuTelemetry('close', reason);
        setMobileOpen(false);
    };

    const labels: Record<string, string> = {
        home: t('home'),
        support: t('support'),
        privacy: t('privacy'),
        terms: t('terms'),
    };

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    const swipeHandlers = {
        onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => {
            (e.currentTarget as unknown as { _touchStartX: number })._touchStartX = e.touches?.[0]?.clientX ?? 0;
        },
        onTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => {
            const startX = (e.currentTarget as unknown as { _touchStartX?: number })._touchStartX ?? 0;
            const endX = e.changedTouches?.[0]?.clientX ?? 0;
            if (endX - startX > 50) closeMobileMenu('swipe');
        },
    };

    const desktopLinkClass = (active: boolean) => (
        `eco-nav-link group relative whitespace-nowrap text-sm font-medium leading-5 transition-all duration-200 ${active
            ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.55)]'
            : 'text-white/85 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.55)]'
        }`
    );

    const desktopUnderlineClass = (active: boolean) => (
        `pointer-events-none absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--accent)] transition-all duration-200 ${active
            ? 'scale-x-100 opacity-100'
            : 'scale-x-50 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
        }`
    );

    const mobileLinkClass = (active: boolean) => (
        `eco-mobile-link group relative block w-full text-right text-sm font-medium leading-5 transition-colors ${active
            ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.55)]'
            : 'text-white/85 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.55)]'
        }`
    );

    const mobileUnderlineClass = (active: boolean) => (
        `pointer-events-none absolute bottom-1 right-4 h-0.5 w-4 rounded-full bg-[var(--accent)] transition-all duration-200 ${active
            ? 'scale-x-100 opacity-100'
            : 'scale-x-50 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
        }`
    );

    const headerStateClass = scrolled
        ? 'border-b border-white/10 bg-bg/95 shadow-xl shadow-black/40 backdrop-blur-xl'
        : 'bg-transparent';

    return (
        <>
            <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerStateClass}`} role="banner">
                <nav className="container-studio eco-header-container eco-header-shell flex items-center justify-between" aria-label={t('mainNavAria')}>
                    <div className="flex lg:flex-1">
                        <a href={`/${locale}`} className="group eco-logo-link flex items-center gap-2 sm:gap-3" aria-label={t('brandHomeAria')}>
                            <Image
                                src="/logo.png"
                                alt="Cuatro Sotas"
                                width={32}
                                height={32}
                                loading="eager"
                                className="h-7 w-auto rounded-md transition-all duration-200 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.55)] min-[900px]:h-8"
                            />
                            <span className="hidden min-[380px]:inline text-base font-bold text-white transition-all duration-200 group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.55)] min-[900px]:text-lg">
                                {t('siteTitle')}
                            </span>
                        </a>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            ref={openButtonRef}
                            type="button"
                            className="focus-ring eco-icon-btn inline-flex items-center justify-center text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
                            onClick={openMobileMenu}
                            aria-label={t('openMenu')}
                            aria-expanded={mobileOpen}
                            aria-controls="__menu_portal"
                        >
                            <span className="sr-only">{t('openMenu')}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:flex-nowrap lg:items-center lg:gap-x-1 xl:gap-x-2">
                        {desktopLinks.map(({ href, key }) => {
                            const active = isActive(href);
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={desktopLinkClass(active)}
                                    {...(active ? { 'aria-current': 'page' as const } : {})}
                                >
                                    {labels[key]}
                                    <span className={desktopUnderlineClass(active)} aria-hidden="true" />
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-4">
                        <LanguageSwitcher />
                    </div>
                </nav>
            </header>

            {isHydrated && portalEl && createPortal(
                <div
                    className={`fixed inset-0 z-[9999] flex justify-end transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible pointer-events-none'}`}
                    aria-modal="true"
                    role="dialog"
                    aria-hidden={!mobileOpen}
                >
                    <div
                        className={`flex-1 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
                        role="button"
                        tabIndex={0}
                        onClick={() => closeMobileMenu('overlay')}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                                e.preventDefault();
                                closeMobileMenu('overlay');
                            }
                        }}
                        {...swipeHandlers}
                    />
                    <div
                        ref={menuRef}
                        className={`eco-mobile-panel relative flex h-full max-h-screen max-w-[95vw] flex-col overflow-y-auto bg-bg transition-transform duration-300 sm:ring-1 sm:ring-white/10 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
                        style={{ width: `${NAVIGATION_CONTRACT.mobileMenuPanelWidthPx}px` }}
                        {...swipeHandlers}
                    >
                        <div className="flex items-center justify-end">
                            <button
                                ref={closeButtonRef}
                                type="button"
                                className="focus-ring eco-icon-btn text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
                                onClick={() => closeMobileMenu('close-button')}
                                aria-label={t('closeMenu')}
                            >
                                <span className="sr-only">{t('closeMenu')}</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flex flex-1 flex-col justify-start">
                            <nav className="eco-mobile-links flex flex-col items-end gap-1" aria-label={t('mainMenuAria')}>
                                {NAV_LINKS.map(({ href, key }) => {
                                    const active = isActive(href);
                                    return (
                                        <Link
                                            key={href}
                                            href={href}
                                            className={mobileLinkClass(active)}
                                            onClick={() => closeMobileMenu('nav-link')}
                                            {...(active ? { 'aria-current': 'page' as const } : {})}
                                        >
                                            {labels[key]}
                                            <span className={mobileUnderlineClass(active)} aria-hidden="true" />
                                        </Link>
                                    );
                                })}
                            </nav>
                            <div className="eco-mobile-lang flex w-full flex-col items-end">
                                <div className="flex w-full justify-end sm:hidden">
                                    <LanguageSwitcher fullWidth onSelect={() => closeMobileMenu('nav-link')} />
                                </div>
                                <div className="hidden sm:block">
                                    <LanguageSwitcher onSelect={() => closeMobileMenu('nav-link')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                portalEl,
            )}
        </>
    );
}
