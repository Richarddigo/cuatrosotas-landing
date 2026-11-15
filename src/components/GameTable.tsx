'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SotaCard, type SpanishSuit } from './CardArt';

const suits: SpanishSuit[] = ['coins', 'cups', 'swords', 'clubs'];

export default function GameTable() {
    const t = useTranslations('tabletop');
    const [selected, setSelected] = useState<SpanishSuit>('coins');
    return (
        <div className="game-table" aria-label={t('tableLabel')}>
            <span className="table-north" aria-hidden="true">40 / 4 / 0</span>
            <span className="table-west" aria-hidden="true">CUATRO</span>
            <span className="table-east" aria-hidden="true">SOTAS</span>
            <div className="table-hand" role="group" aria-label={t('chooseSuit')}>
                {suits.map((suit) => (
                    <button key={suit} type="button"
                        className={'table-card-button' + (selected === suit ? ' is-selected' : '')}
                        aria-pressed={selected === suit} aria-label={t(suit)}
                        onClick={() => setSelected(suit)}>
                        <SotaCard suit={suit} />
                    </button>
                ))}
            </div>
            <div className="table-south">
                <span className="table-caption">{t('chooseSuit')}</span>
                <p className="suit-description" aria-live="polite" aria-atomic="true">
                    <strong>{t(selected)}</strong><span>{t('zeroPoints')}</span>
                </p>
                <span className="table-disclaimer">{t('illustration')}</span>
            </div>
        </div>
    );
}
