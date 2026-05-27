'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Footer() {
    const navT = useTranslations('nav');
    const footerT = useTranslations('footer');

    const navLinks = [
        { href: '/' as const, label: navT('home') },
        { href: '/legal/support' as const, label: navT('support') },
    ];

    const legalLinks = [
        { href: '/legal/privacy' as const, label: navT('privacy') },
        { href: '/legal/terms' as const, label: navT('terms') },
    ];

    const columnHeading = 'mb-4 text-xs font-semibold uppercase tracking-widest text-accent';
    const bodyText = 'text-sm leading-relaxed text-muted';
    const linkBase = 'text-sm !text-muted transition-colors hover:!text-text';

    return (
        <footer className="mt-auto border-t border-[rgba(255,255,255,0.06)] bg-bg">
            <div className="mx-auto max-w-[1180px] px-[100px] py-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/logo.png" alt="Cuatro Sotas" width={28} height={28} className="h-7 w-auto" />
                            <span className="text-base font-bold text-text">{navT('siteTitle')}</span>
                        </Link>
                        <p className={`${bodyText} max-w-[18ch]`}>{footerT('tagline')}</p>
                    </div>

                    <div>
                        <p className={columnHeading}>{footerT('connect')}</p>
                        <p className={bodyText}>{footerT('ecosystemDesc')}</p>
                    </div>

                    <div>
                        <p className={columnHeading}>{footerT('navigate')}</p>
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className={linkBase}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <p className={columnHeading}>{footerT('legal')}</p>
                        <nav className="flex flex-col gap-2">
                            {legalLinks.map((link) => (
                                <Link key={link.href} href={link.href} className={linkBase}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <p className={columnHeading}>{footerT('language')}</p>
                        <LanguageSwitcher dropdownDirection="up" />
                    </div>
                </div>

                <div
                    className="flex flex-col items-center justify-between gap-3 border-t border-[rgba(255,255,255,0.06)] sm:flex-row"
                    style={{ marginTop: '3rem', paddingTop: '2rem' }}
                >
                    <p className="text-xs text-muted" style={{ marginBottom: 0 }}>{footerT('rights')}</p>
                    <p className="text-xs text-muted" style={{ marginBottom: 0 }}>{footerT('madeIn')}</p>
                </div>
            </div>
        </footer>
    );
}
