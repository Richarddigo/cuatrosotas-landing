'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FaqAccordion() {
    const homeT = useTranslations('home');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="faq-list" role="list">
            {([1, 2, 3, 4, 5] as const).map(n => (
                <div key={n} className="faq-item" role="listitem">
                    <button
                        className="faq-question"
                        onClick={() => setOpenFaq(openFaq === n ? null : n)}
                        aria-expanded={openFaq === n}
                        aria-controls={`faq-answer-${n}`}
                    >
                        {homeT(`faq${n}Q` as Parameters<typeof homeT>[0])}
                        <svg className={`faq-chevron${openFaq === n ? ' faq-chevron--open' : ''}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {openFaq === n && (
                        <div id={`faq-answer-${n}`} className="faq-answer faq-answer--open">
                            <p>{homeT(`faq${n}A` as Parameters<typeof homeT>[0])}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
