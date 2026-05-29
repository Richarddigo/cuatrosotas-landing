'use client';

import dynamic from 'next/dynamic';

// Deferred client-only mount: the banner only renders after hydration when
// the consent state is unknown. Skipping SSR removes its hydration cost from
// the critical path and prevents layout shift caused by post-hydration mount.
const CookieBanner = dynamic(() => import('./CookieBanner'), {
    ssr: false,
    loading: () => null,
});

export default function CookieBannerLazy() {
    return <CookieBanner />;
}
