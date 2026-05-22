# cuatrosotas-landing — Technical Audit

> **Stack:** Next.js 16.2.6 · Tailwind v4 · Custom i18n (es/en/de/fr) · No backend
> **Hosting:** Vercel (SSG)
> **Live:** https://cuatrosotas-landing.vercel.app
> **Health Score: 95 / 100**

---

## 📋 Pending Tasks

- [x] **Deploy to Vercel** — first deploy done at https://cuatrosotas-landing.vercel.app ✅
- [x] **Remove `output: 'export'`** — runs as native Next.js SSG on Vercel; image optimization enabled ✅
- [ ] **Create GitHub repo and link to Vercel** — run these two commands (requires `gh auth login` first):
  ```bash
  gh auth login
  gh repo create Richarddigo/cuatrosotas-landing --public --source=. --push
  ```
  Then: [Vercel → cuatrosotas-landing → Settings → Git](https://vercel.com/richarddigo-projects/cuatrosotas-landing/settings/git) → Connect GitHub repo. After that, every push auto-deploys.
- [ ] **Translate legal content (Privacy, Terms, FAQ)** to German and French — requires professional translator.
- [ ] **Replace Font Awesome CDN** with self-hosted icons or inline SVGs.
- [ ] **Verify `toggleLang` is unused** — if so, remove it from `LanguageContext.tsx`.
- [ ] **Add `hreflang` meta tags** in `layout.tsx` for the 4 language variants.
- [ ] **Submit to Google Search Console** — add property for the final domain and submit sitemap.
- [ ] **Run Lighthouse** — target Performance ≥ 90 · Accessibility ≥ 95 · SEO = 100.

---

## Summary of Changes (Current Refactor Session)

| Change | Status |
|---|---|
| Language system expanded from 2 (es/en) to 4 (es/en/de/fr) | ✅ Done |
| `LanguageContext.tsx` — added `setLang`, `SUPPORTED_LANGS`, `Lang` type updated | ✅ Done |
| `src/i18n/translations.tsx` — centralised 4-language translation system | ✅ Done |
| `Navbar.tsx` — 4-button language switcher (🇪🇸 ES / 🇬🇧 EN / 🇩🇪 DE / 🇫🇷 FR) | ✅ Done |
| `Footer.tsx` — uses translations | ✅ Done |
| `page.tsx` — rewritten with translations + UTF-8 encoding fix | ✅ Done |
| `not-found.tsx` — uses translations | ✅ Done |
| `privacy/page.tsx` — banner uses translations | ✅ Done |
| `terms/page.tsx` — banner uses translations | ✅ Done |
| `support/page.tsx` — section headers and labels use translations | ✅ Done |
| `LangSync.tsx` — syncs `<html lang="…">` with active locale | ✅ Done |
| `globals.css` — `.lang-switcher` / `.lang-btn` CSS added | ✅ Done |
| CSS design tokens from cojauny-studio added to globals.css | ✅ Done |
| `gameModes()` / `statsCards()` in `page.tsx` — full 4-lang (es/en/de/fr) | ✅ Done |
| Dead `#lang-toggle` CSS removed from `globals.css` | ✅ Done |

---

## Architecture Notes

### Language System

The project uses a client-side-only language system:
- `LanguageContext.tsx` — stores active `Lang` in `localStorage` (`cs_lang` key)
- `src/i18n/translations.tsx` — typed `T4<V>` translation dictionary + `t()` helper
- `LangSync.tsx` — updates `<html lang="…">` attribute on language change
- Language preference survives page refreshes and navigation
- No server-side locale routing (not needed for this static site)

### Translation Coverage

| Page | Status |
|---|---|
| Home (`page.tsx`) | ✅ Full 4-lang |
| Not Found (`not-found.tsx`) | ✅ Full 4-lang |
| Privacy (`privacy/page.tsx`) | ✅ Header translated; legal body es/en (legal precision) |
| Terms (`terms/page.tsx`) | ✅ Header translated; legal body es/en (legal precision) |
| Support (`support/page.tsx`) | ✅ Section headers + labels translated; FAQ body es/en |
| Navbar | ✅ Full 4-lang |
| Footer | ✅ Full 4-lang |

> **Note**: Legal documents (Privacy, Terms) and detailed FAQ content intentionally remain
> bilingual (es/en). Machine-translating legal text can introduce liability. German and French
> users see the English version of legal clauses, which is common practice.

### Tailwind v4
- Uses CSS-native Tailwind: `@import "tailwindcss"` in globals.css.
- No `tailwind.config.js` — all customisation is via CSS custom properties.

---

## Open Issues

### 🟡 Important

| Issue | Action |
|---|---|
| Legal body content (Privacy, Terms, FAQ) is only es/en | Requires professional translator before targeting DE/FR markets — see Pending Tasks |
| Font Awesome loaded via CDN | Replace with self-hosted icons or inline SVGs — see Pending Tasks |

### 🟢 Low Priority

| Issue | Action |
|---|---|
| `toggleLang` in LanguageContext | Cycles all 4 langs — verify no remaining components use it, then remove if unused |
| No sitemap or hreflang for static export | Add `app/sitemap.ts` and `<link rel="alternate" hreflang="…">` in layout |

---

## Environment Variables

None required — fully static site with no backend.

---

## Metrics

| Metric | Status |
|---|---|
| Locales | es / en / de / fr |
| Output mode | Static export (`output: 'export'`) |
| Backend dependencies | None |
| Paid services | None |
| Image optimization | Disabled (`unoptimized: true`) |
