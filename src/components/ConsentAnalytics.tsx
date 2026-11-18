'use client';
import { Analytics } from '@vercel/analytics/react';
import { hasAnalyticsConsent, useConsent } from '@/hooks/useConsent';

export default function ConsentAnalytics() {
    const { consent } = useConsent();
    return consent === 'accepted' ? <Analytics beforeSend={(event) => hasAnalyticsConsent() ? event : null} /> : null;
}
