export type SpanishSuit = 'coins' | 'cups' | 'swords' | 'clubs';

export function SuitMark({ suit }: { suit: SpanishSuit }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            {suit === 'coins' && <><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" /><circle cx="16" cy="16" r="7" stroke="currentColor" /><path d="m16 10 2 4 4 2-4 2-2 4-2-4-4-2 4-2Z" fill="currentColor" /></>}
            {suit === 'cups' && <><path d="M9 5h14v8c0 6-14 6-14 0V5Zm7 13v8m-6 1h12M9 7H5v5c0 3 2 4 6 4m12-9h4v5c0 3-2 4-6 4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></>}
            {suit === 'swords' && <><path d="m16 3 4 6-3 12h-2L12 9l4-6Zm-7 18h14m-7 0v6m-3 1h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M16 5v15" stroke="currentColor" /></>}
            {suit === 'clubs' && <><path d="m13 26 1-17c0-4 7-6 7-2l-2 19-6 2v-2Z" fill="currentColor" /><path d="m14 18-5-5m10 3 6-4m-8-2-5-4" stroke="currentColor" strokeWidth="2" /><path d="m17 10-1 14" stroke="var(--paper)" /></>}
        </svg>
    );
}

/** Original geometric artwork; no third-party card assets or game screenshots. */
export function SotaCard({ suit }: { suit: SpanishSuit }) {
    return (
        <span className={'sota-card sota-' + suit}>
            <span className="card-corner"><b>10</b><SuitMark suit={suit} /></span>
            <svg className="sota-figure" viewBox="0 0 120 190" fill="none" aria-hidden="true">
                <path d="M17 174V83l27-16h32l27 16v91Z" fill="var(--suit-color)" />
                <path d="m44 69 16 18 16-18 10 105H34Z" fill="#e8b25d" />
                <path d="M58 88h4v86h-4z" fill="#f8efdc" />
                <path d="m18 85 25 13-11 44-15-8m86-49-25 13 11 44 15-8" stroke="#f8efdc" strokeWidth="6" />
                <path d="M47 48h26v24L60 84 47 72Z" fill="#d99b73" />
                <path d="M42 27h36v26c0 18-36 18-36 0V27Z" fill="#edbd93" />
                <path d="M39 28c0-24 44-24 44 0l-3 19-8-16-30 9Z" fill="#163e36" />
                <path d="m37 23 8-15 15 6L74 7l10 17Z" fill="var(--suit-color)" stroke="#e8b25d" strokeWidth="3" />
                <path d="m50 45 5 1m11 0 5-1M58 50l-2 7h7m-11 4c5 3 11 3 16-1" stroke="#163e36" strokeWidth="2" strokeLinecap="round" />
                <path d="m27 112 7 7m-9 5 7 7m56-19 7 7m-8 5 7 7" stroke="#e8b25d" strokeWidth="3" />
                <path d="M22 159h76M32 164v10m14-10v10m14-10v10m14-10v10m14-10v10" stroke="#163e36" strokeWidth="2" />
                <circle cx="60" cy="112" r="10" fill="#f8efdc" />
            </svg>
            <span className="card-medallion"><SuitMark suit={suit} /></span>
            <span className="card-corner card-corner-bottom"><b>10</b><SuitMark suit={suit} /></span>
        </span>
    );
}

export function CardEmblem() {
    return <span className="card-emblem" aria-hidden="true"><SuitMark suit="swords" /><SuitMark suit="cups" /></span>;
}
