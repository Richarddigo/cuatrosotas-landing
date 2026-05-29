'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
    const t = useTranslations('notFound');

    return (
        <main
            id="main-content"
            className="container-studio section-padding text-center"
        >
            <div
                className="gradient-text text-[clamp(6rem,20vw,10rem)] font-black leading-none mb-6"
                aria-hidden="true"
            >
                404
            </div>
            <h1 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-text mb-3">
                {t('title')}
            </h1>
            <p className="text-muted mb-8">
                {t('desc')}
            </p>
            <Link
                href="/"
                className="focus-ring inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-[var(--radius)] font-semibold text-[0.9rem] no-underline transition-opacity hover:opacity-85"
            >
                {t('cta')}
            </Link>
        </main>
    );
}

