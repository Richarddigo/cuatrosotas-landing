'use client';

import { useEffect } from 'react';
import { Link } from '@/i18n/navigation';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main
            id="main-content"
            className="container-studio section-padding"
            style={{ textAlign: 'center' }}
        >
            <div
                style={{
                    fontSize: '4rem',
                    fontWeight: 900,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                }}
                aria-hidden="true"
            >
                ⚠
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem' }}>
                Something went wrong
            </h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                An unexpected error occurred. Try again or return home.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                    onClick={reset}
                    className="focus-ring"
                    style={{
                        padding: '0.625rem 1.5rem',
                        background: 'var(--accent)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 'var(--radius)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'opacity var(--transition)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="focus-ring"
                    style={{
                        padding: '0.625rem 1.5rem',
                        background: 'rgba(255,255,255,0.06)',
                        color: 'var(--text)',
                        borderRadius: 'var(--radius)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                        transition: 'background var(--transition)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                    onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                >
                    ← Go home
                </Link>
            </div>
        </main>
    );
}
