'use client';

import { useEffect } from 'react';
import { Link } from '@/i18n/navigation';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main
            id="main-content"
            className="container-studio section-padding text-center"
        >
            <div
                className="text-[4rem] font-black text-accent leading-none mb-6"
                aria-hidden="true"
            >
                ⚠
            </div>
            <h1 className="text-2xl font-bold text-text mb-3">
                Something went wrong
            </h1>
            <p className="text-muted mb-8">
                An unexpected error occurred. Try again or return home.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
                <button
                    onClick={reset}
                    className="focus-ring px-6 py-2.5 bg-accent text-white border-none rounded-[var(--radius)] font-semibold text-[0.9rem] cursor-pointer transition-opacity hover:opacity-85"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="focus-ring inline-flex items-center px-6 py-2.5 bg-[rgba(255,255,255,0.06)] text-text rounded-[var(--radius)] font-semibold text-[0.9rem] no-underline transition-colors hover:bg-[rgba(255,255,255,0.1)]"
                >
                    ← Go home
                </Link>
            </div>
        </main>
    );
}
