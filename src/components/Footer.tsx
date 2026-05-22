'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t, footerTranslations } from '@/i18n/translations';

export default function Footer() {
    const { lang } = useLanguage();

    return (
        <footer>
            <p>{t(footerTranslations.rights, lang)}</p>
            <p>{t(footerTranslations.madeWith, lang)}</p>
        </footer>
    );
}
