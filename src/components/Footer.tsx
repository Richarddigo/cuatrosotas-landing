'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { t, footerTranslations, navTranslations } from '@/i18n/translations';

export default function Footer() {
    const { lang } = useLanguage();

    const navLinks = [
        { href: '/', label: t(navTranslations.home, lang) },
        { href: '/support', label: t(navTranslations.support, lang) },
    ];

    const legalLinks = [
        { href: '/privacy', label: t(navTranslations.privacy, lang) },
        { href: '/terms', label: t(navTranslations.terms, lang) },
    ];

    return (
        <footer style={{ background: 'var(--green-dark)', borderTop: '2px solid var(--gold-dark)', marginTop: 'auto' }}>
            <div style={{ maxWidth: '1180px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 3rem)' }}>
                {/* 3-column grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem' }}>

                    {/* Col 1: Brand */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Image
                                src="/icons/icon-192.png"
                                alt="Cuatro Sotas"
                                width={36}
                                height={36}
                                style={{ borderRadius: '8px' }}
                            />
                            <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1rem' }}>
                                {t(navTranslations.siteTitle, lang)}
                            </span>
                        </div>
                        <p style={{ color: 'rgba(245,245,220,0.7)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '22ch' }}>
                            {t(footerTranslations.tagline, lang)}
                        </p>
                        <p style={{ color: 'rgba(245,245,220,0.5)', fontSize: '0.75rem' }}>
                            {t(footerTranslations.madeWith, lang)}
                        </p>
                    </div>

                    {/* Col 2: Navigate */}
                    <div>
                        <p style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
                            {t(footerTranslations.navigate, lang)}
                        </p>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{ color: 'rgba(245,245,220,0.7)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 200ms' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,220,0.7)')}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Col 3: Legal */}
                    <div>
                        <p style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
                            {t(footerTranslations.legal, lang)}
                        </p>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {legalLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{ color: 'rgba(245,245,220,0.7)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 200ms' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,220,0.7)')}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Col 4: Ecosystem */}
                    <div>
                        <p style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
                            {t(footerTranslations.connect, lang)}
                        </p>
                        <p style={{ color: 'rgba(245,245,220,0.7)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                            {t(footerTranslations.ecosystemDesc, lang)}
                        </p>
                        <a
                            href="https://studio.cojauny.com"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'var(--accent)', fontSize: '0.875rem', textDecoration: 'none' }}
                        >
                            studio.cojauny.com ↗
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(184,134,11,0.2)', display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: 'rgba(245,245,220,0.5)', fontSize: '0.75rem' }}>
                        {t(footerTranslations.rights, lang)}
                    </p>
                </div>
            </div>
        </footer>
    );
}

