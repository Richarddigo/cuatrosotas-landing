'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';
import type LanguageSwitcherComponent from './LanguageSwitcher';

// Deferred client-only mount. The footer language switcher is below the fold:
// loading it eagerly forces an interactive boundary across the whole footer
// and bloats the initial JS chunk. With ssr:false the placeholder reserves
// the dropdown height (38px) to avoid CLS once it hydrates in.
const LanguageSwitcher = dynamic(() => import('./LanguageSwitcher'), {
    ssr: false,
    loading: () => (
        <div
            aria-hidden="true"
            className="inline-flex h-[38px] w-[140px] rounded-3xl border border-white/10 bg-white/5"
        />
    ),
});

type Props = ComponentProps<typeof LanguageSwitcherComponent>;

export default function LanguageSwitcherLazy(props: Props) {
    return <LanguageSwitcher {...props} />;
}
