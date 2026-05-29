import { Link } from '@/i18n/navigation';
import type { ReactNode } from 'react';

/**
 * LegalLayout — aligned with cojauny-studio's LegalLayout structure.
 * Provides consistent header, back link, and content wrapper for all legal pages.
 */
export function LegalLayout({
    title,
    subtitle,
    backLabel,
    updatedLabel,
    children,
}: {
    title: string;
    subtitle: string;
    backLabel: string;
    updatedLabel?: string;
    children: ReactNode;
}) {
    return (
        <div className="bg-bg min-h-screen pt-20 pb-16">
            <div className="container-studio max-w-[740px]">
                <Link
                    href="/"
                    className="focus-ring inline-flex items-center gap-1.5 text-sm text-muted no-underline mb-10 rounded transition-colors hover:text-text"
                >
                    {backLabel}
                </Link>

                <div className="mb-10">
                    <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-accent">
                        Legal
                    </span>
                    <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-text mt-2 tracking-[-0.02em] leading-[1.15]">
                        {title}
                    </h1>
                    <p className="mt-3 text-muted text-sm">
                        {subtitle}
                    </p>
                    {updatedLabel && (
                        <span className="inline-block mt-3 bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.6)] text-[0.78rem] px-3 py-1 rounded-[20px]">
                            {updatedLabel}
                        </span>
                    )}
                    <div className="mt-6 h-px bg-[var(--border)]" />
                </div>

                <div className="legal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}
