'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
    const t = useTranslations('notFound');

    return (
        <main
            id="main-content"
            className="container-studio section-padding"
            style={{ textAlign: 'center' }}
        >
            <div
                className="gradient-text"
                style={{
                    fontSize: 'clamp(6rem, 20vw, 10rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                }}
                aria-hidden="true"
            >
                404
            </div>
            <h1 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem' }}>
                {t('title')}
            </h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                {t('desc')}
            </p>
            <Link
                href="/"
                className="focus-ring"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.625rem 1.5rem',
                    background: 'var(--accent)',
                    color: '#fff',
                    borderRadius: 'var(--radius)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'opacity var(--transition)',
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            >
                {t('cta')}
            </Link>
        </main>
    );
}

