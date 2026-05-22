'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'es' | 'en' | 'de' | 'fr';

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'es',
    setLang: () => { },
});

const SUPPORTED_LANGS: Lang[] = ['es', 'en', 'de', 'fr'];

function detectBrowserLang(): Lang {
    if (typeof navigator === 'undefined') return 'es';
    const code = (navigator.language || 'es').slice(0, 2).toLowerCase() as Lang;
    return SUPPORTED_LANGS.includes(code) ? code : 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>('es');

    useEffect(() => {
        const stored = localStorage.getItem('cs_lang') as Lang | null;
        setLangState(
            stored && SUPPORTED_LANGS.includes(stored)
                ? stored
                : detectBrowserLang()
        );
    }, []);

    const setLang = (next: Lang) => {
        setLangState(next);
        localStorage.setItem('cs_lang', next);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
