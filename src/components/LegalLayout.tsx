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
        <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '4rem' }}>
            <div className="container-studio" style={{ maxWidth: '740px' }}>
                <Link
                    href="/"
                    className="focus-ring"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        marginBottom: '2.5rem',
                        transition: 'color var(--transition)',
                        borderRadius: '4px',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                    {backLabel}
                </Link>

                <div style={{ marginBottom: '2.5rem' }}>
                    <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                    }}>
                        Legal
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                        fontWeight: 800,
                        color: 'var(--text)',
                        marginTop: '0.5rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                    }}>
                        {title}
                    </h1>
                    <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        {subtitle}
                    </p>
                    {updatedLabel && (
                        <span style={{
                            display: 'inline-block',
                            marginTop: '0.75rem',
                            background: 'rgba(255,255,255,0.06)',
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.78rem',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                        }}>
                            {updatedLabel}
                        </span>
                    )}
                    <div style={{ marginTop: '1.5rem', height: '1px', background: 'var(--border)' }} />
                </div>

                <div className="legal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}
