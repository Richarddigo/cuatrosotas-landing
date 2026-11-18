'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';

/** Root layouts persist across client navigation; keep screen-reader language current. */
export default function LocaleDocumentLanguage() {
    const locale = useLocale();
    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);
    return null;
}
