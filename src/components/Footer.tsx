import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcherLazy';

export default async function Footer() {
    const navT = await getTranslations('nav');
    const footerT = await getTranslations('footer');

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
                            <Image src="/logo.png" alt="Cuatro Sotas" width={28} height={28} className="h-7 w-7" />
                            <span className="text-base font-bold text-text">{navT('siteTitle')}</span>
                        </Link>
                        <p className={`${bodyText} max-w-[18ch]`}>{footerT('tagline')}</p>
                    </div>

                    <div>
                        <p className={columnHeading}>{footerT('connect')}</p>
                        <div className="mb-3 flex flex-col gap-2">
                            <a
                                href="https://cojauny.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-text bg-[rgba(28,35,54,0.9)] border border-[rgba(91,123,255,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(91,123,255,0.25)]"
                            >
                                <span>Cojauny</span>
                                <svg className="h-3 w-3 opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="https://studio.cojauny.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-text bg-[rgba(28,35,54,0.9)] border border-[rgba(91,123,255,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(91,123,255,0.25)]"
                            >
                                <span>Cojauny Studio</span>
                                <svg className="h-3 w-3 opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
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
                    className="mt-12 pt-8 flex flex-col items-center justify-between gap-3 border-t border-[rgba(255,255,255,0.06)] sm:flex-row"
                >
                    <p className="mb-0 text-xs text-muted">{footerT('rights')}</p>
                    <p className="mb-0 text-xs text-muted">{footerT('madeIn')}</p>
                </div>
            </div>
        </footer>
    );
}
