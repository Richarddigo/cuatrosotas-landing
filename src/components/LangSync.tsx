'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Keeps <html lang="…"> in sync with the active language stored in context.
 * This is client-side only since the language preference is stored in localStorage.
 */
export default function LangSync() {
    const { lang } = useLanguage();

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return null;
}
