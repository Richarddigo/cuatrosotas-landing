'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { t, notFoundTranslations } from '@/i18n/translations';

export default function NotFound() {
    const { lang } = useLanguage();

    return (
        <main id="main-content" className="not-found">
            <div className="container" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
                <div className="error-code">404</div>
                <h1>{t(notFoundTranslations.title, lang)}</h1>
                <p>{t(notFoundTranslations.desc, lang)}</p>
                <Link href="/" className="btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
                    {t(notFoundTranslations.cta, lang)}
                </Link>
            </div>
        </main>
    );
}
