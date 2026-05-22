'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage, type Lang } from '@/context/LanguageContext';
import { SpainFlag, UKFlag, GermanyFlag, FranceFlag } from './FlagIcons';

const LANGUAGES: { code: Lang; label: string; Flag: React.FC<{ className?: string }> }[] = [
    { code: 'es', label: 'Español', Flag: SpainFlag },
    { code: 'en', label: 'English', Flag: UKFlag },
    { code: 'de', label: 'Deutsch', Flag: GermanyFlag },
    { code: 'fr', label: 'Français', Flag: FranceFlag },
];

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const active = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (
                !menuRef.current?.contains(e.target as Node) &&
                !buttonRef.current?.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [open]);

    // Keyboard navigation: Esc / ArrowDown / ArrowUp
    useEffect(() => {
        if (!open) return;
        const el = menuRef.current;
        if (!el) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false);
                buttonRef.current?.focus();
                return;
            }
            const items = Array.from(
                el.querySelectorAll<HTMLElement>('button[role="menuitem"]')
            );
            if (!items.length) return;
            const idx = items.findIndex((i) => i === document.activeElement);
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                items[(idx + 1) % items.length].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                items[(idx - 1 + items.length) % items.length].focus();
            }
        };
        el.addEventListener('keydown', handler);
        return () => el.removeEventListener('keydown', handler);
    }, [open]);

    return (
        <div className="cs-lang-switcher">
            <button
                ref={buttonRef}
                type="button"
                className="cs-lang-btn"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label={`${active.label} — cambiar idioma`}
            >
                <active.Flag className="cs-lang-flag" />
                <span className="cs-lang-code">{lang.toUpperCase()}</span>
                <svg
                    className={`cs-lang-chevron${open ? ' cs-lang-chevron--open' : ''}`}
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
                    ref={menuRef}
                    role="menu"
                    className="cs-lang-menu"
                    aria-label="Idioma / Language"
                >
                    {LANGUAGES.map(({ code, label, Flag }) => {
                        const isActive = code === lang;
                        return (
                            <button
                                key={code}
                                type="button"
                                role="menuitem"
                                onClick={() => {
                                    setLang(code);
                                    setOpen(false);
                                }}
                                className={`cs-lang-option${isActive ? ' cs-lang-option--active' : ''}`}
                            >
                                <Flag className="cs-lang-flag" />
                                <span>{label}</span>
                                {isActive && (
                                    <svg
                                        className="cs-lang-check"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
