'use client';

import { useMemo, useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useLanguage, type Lang } from '@/context/LanguageContext';
import { SpainFlag, UKFlag, GermanyFlag, FranceFlag } from './FlagIcons';

interface LanguageSwitcherProps {
    dropdownDirection?: 'up' | 'down';
    onSelect?: (nextLang: Lang) => void;
    fullWidth?: boolean;
    label?: string;
}

const LANGUAGES: Array<{ code: Lang; label: string; Flag: React.FC<{ className?: string }>; short: string }> = [
    { code: 'es', label: 'Español', Flag: SpainFlag, short: 'ES' },
    { code: 'en', label: 'English', Flag: UKFlag, short: 'EN' },
    { code: 'de', label: 'Deutsch', Flag: GermanyFlag, short: 'DE' },
    { code: 'fr', label: 'Français', Flag: FranceFlag, short: 'FR' },
];

type TouchTrackingElement = HTMLDivElement & { _touchStartX?: number };

export default function LanguageSwitcher({ dropdownDirection = 'down', onSelect, fullWidth, label }: LanguageSwitcherProps) {
    const { lang, setLang } = useLanguage();
    const t = useTranslations('common');
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const active = useMemo(() => LANGUAGES.find((entry) => entry.code === lang) ?? LANGUAGES[0], [lang]);
    const buttonAriaLabel = label ?? t('languageSwitcherButtonAria', { language: active.label });

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (!menuRef.current) return;
            if (
                !menuRef.current.contains(e.target as Node) &&
                !buttonRef.current?.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [open]);

    // Keyboard support and focus loop
    useEffect(() => {
        if (!open) return;
        const el = menuRef.current;
        if (!el) return;

        const selector = 'button[role="menuitem"]';
        const focusFirst = () => {
            const items = Array.from(el.querySelectorAll<HTMLElement>(selector));
            items[0]?.focus();
        };

        focusFirst();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false);
                buttonRef.current?.focus();
                return;
            }

            const items = Array.from(el.querySelectorAll<HTMLElement>(selector));
            if (!items.length) return;
            const idx = items.findIndex((item) => item === document.activeElement);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                items[(idx + 1 + items.length) % items.length].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                items[(idx - 1 + items.length) % items.length].focus();
            } else if (e.key === 'Tab') {
                const first = items[0];
                const last = items[items.length - 1];
                if (!first || !last) return;
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open]);

    return (
        <div className={fullWidth ? 'relative w-full text-center' : 'relative inline-block text-left'} ref={menuRef}>
            <button
                ref={buttonRef}
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label={buttonAriaLabel}
                className={`${fullWidth ? 'mx-auto' : ''} inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white shadow-soft-glow transition hover:border-brand-200 hover:bg-white/10 focus:outline-none focus-visible:border-brand-200 focus-visible:ring-2 focus-visible:ring-brand-200/50`}
                style={{
                    minHeight: '38px',
                    paddingTop: '8px',
                    paddingRight: '12px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                }}
            >
                <span aria-hidden className="flex items-center">
                    <active.Flag className="h-5 w-5 rounded-sm" />
                </span>
                <span className="inline">{active.label}</span>
                <svg
                    className="h-4 w-4 text-white/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <div
                    role="menu"
                    aria-label={t('languageSwitcherMenuAria')}
                    className={`absolute z-50 left-1/2 w-auto min-w-max -translate-x-1/2 transform overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 p-2 shadow-soft-glow backdrop-blur sm:left-auto sm:right-0 sm:translate-x-0 ${dropdownDirection === 'up' ? 'bottom-full mb-2 origin-bottom-right' : 'mt-2 origin-top-right'}`}
                    style={{ padding: '8px' }}
                    onTouchStart={(e) => {
                        const target = e.currentTarget as TouchTrackingElement;
                        target._touchStartX = e.touches?.[0]?.clientX ?? 0;
                    }}
                    onTouchEnd={(e) => {
                        const target = e.currentTarget as TouchTrackingElement;
                        const touchEndX = e.changedTouches?.[0]?.clientX ?? 0;
                        const touchStartX = target._touchStartX ?? 0;
                        if (touchEndX - touchStartX < -50) {
                            setOpen(false);
                        }
                    }}
                >
                    <div className="max-h-[40vh] overflow-y-auto">
                        {LANGUAGES.map(({ code, label: optionLabel, Flag }) => {
                            const isActive = code === lang;
                            return (
                                <button
                                    key={code}
                                    type="button"
                                    role="menuitem"
                                    onClick={() => {
                                        setLang(code);
                                        onSelect?.(code);
                                        setOpen(false);
                                    }}
                                    className={`group relative flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2 text-left text-sm transition ${isActive
                                        ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.55)]'
                                        : 'text-white/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.55)]'
                                        }`}
                                    style={{
                                        paddingTop: '8px',
                                        paddingRight: '12px',
                                        paddingBottom: '8px',
                                        paddingLeft: '12px',
                                    }}
                                >
                                    <span className="flex items-center gap-3">
                                        <span aria-hidden className="flex h-8 w-8 items-center justify-center">
                                            <Flag className="h-6 w-6 rounded-sm" />
                                        </span>
                                        <span className="font-medium">{optionLabel}</span>
                                    </span>
                                    <span
                                        className={`pointer-events-none absolute bottom-1 right-3 h-0.5 w-4 rounded-full bg-[var(--accent)] transition-all duration-200 ${isActive
                                            ? 'scale-x-100 opacity-100'
                                            : 'scale-x-50 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                                            }`}
                                        aria-hidden
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
