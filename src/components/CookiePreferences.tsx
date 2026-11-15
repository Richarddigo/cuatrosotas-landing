'use client';
import { useTranslations } from 'next-intl';
import { useConsent } from '@/hooks/useConsent';

export default function CookiePreferences() {
    const t = useTranslations('tabletop');
    const { reset } = useConsent();
    return <button type="button" className="cookie-preferences" onClick={reset}>{t('cookiePreferences')}</button>;
}
