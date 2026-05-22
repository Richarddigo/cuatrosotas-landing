'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage, type Lang } from '@/context/LanguageContext';
import { t, navTranslations } from '@/i18n/translations';

const LANGS: { code: Lang; flag: string; short: string }[] = [
    { code: 'es', flag: '🇪🇸', short: 'ES' },
    { code: 'en', flag: '🇬🇧', short: 'EN' },
    { code: 'de', flag: '🇩🇪', short: 'DE' },
    { code: 'fr', flag: '🇫🇷', short: 'FR' },
];

export default function Navbar() {
    const pathname = usePathname();
    const { lang, setLang } = useLanguage();

    const navLinks = [
        { href: '/', label: t(navTranslations.home, lang) },
        { href: '/support', label: t(navTranslations.support, lang) },
        { href: '/privacy', label: t(navTranslations.privacy, lang) },
        { href: '/terms', label: t(navTranslations.terms, lang) },
    ];

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <nav aria-label={lang === 'es' ? 'Navegación principal' : 'Main navigation'}>
            <div className="nav-container">
                <div className="nav-left">
                    <Image
                        src="/logo.png"
                        alt="Cuatro Sotas"
                        className="logo"
                        width={48}
                        height={48}
                    />
                    <div className="header-text">
                        <h1>{t(navTranslations.siteTitle, lang)}</h1>
                        <p>{t(navTranslations.siteTagline, lang)}</p>
                    </div>
                </div>

                <div className="nav-center">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            {...(isActive(link.href) ? { 'aria-current': 'page' as const } : {})}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="nav-right">
                    <div className="lang-switcher" role="group" aria-label={lang === 'es' ? 'Seleccionar idioma' : 'Select language'}>
                        {LANGS.map(({ code, flag, short }) => (
                            <button
                                key={code}
                                onClick={() => setLang(code)}
                                aria-pressed={lang === code}
                                className={lang === code ? 'lang-btn active' : 'lang-btn'}
                                aria-label={`${flag} ${short}`}
                                title={code.toUpperCase()}
                            >
                                <span aria-hidden="true">{flag}</span>
                                <span className="lang-code">{short}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
