'use client';

import { useLocale } from 'next-intl';
import type { ReactNode } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

export type Lang = Locale;

interface LanguageAPI {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

/**
 * Backwards-compatible wrapper over next-intl locale routing.
 * - `lang` is read from next-intl's `useLocale()` (URL-driven).
 * - `setLang(next)` navigates to the same path under a different locale prefix.
 */
export function useLanguage(): LanguageAPI {
    const lang = useLocale() as Lang;
    const router = useRouter();
    const pathname = usePathname();

    return {
        lang,
        setLang: (next: Lang) => {
            router.replace(pathname, { locale: next });
        },
    };
}

/**
 * No-op provider kept for backwards compatibility with existing imports.
 * Locale context is provided by NextIntlClientProvider in [locale]/layout.tsx.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
