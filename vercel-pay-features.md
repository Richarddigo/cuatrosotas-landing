# Vercel Pay / Paid Features Audit — cuatrosotas-landing

## Current Status: Zero paid dependencies

This project has no paid or third-party billing dependencies beyond free CDN resources.
It is a pure Next.js static site — ideal for Vercel Hobby.

---

## Service Inventory

| Service | Plan / Tier | Monthly Cost | Vercel Hobby Compatible? | Notes |
|---|---|---|---|---|
| **Vercel Hosting** | Hobby (free) | $0 | ✅ Yes | No server-side functions, static export candidate |
| **Google Fonts** | Free CDN | $0 | ✅ Yes | Loaded via `@import` in globals.css |
| **Font Awesome** | Free CDN | $0 | ✅ Yes | `cdnjs.cloudflare.com` — icons on home page |
| **Google Sign-In** (in-app) | Free | $0 | ✅ Yes | Mobile app only, not web |

---

## Vercel Hobby Plan Notes

### Static vs SSR
- The project has no API routes, no server-side logic, and no data fetching.
- It can be deployed as a fully static site (`output: 'export'` in `next.config.ts`).
- **Recommendation**: Add `output: 'export'` to `next.config.ts` to deploy as a true static site,
  which avoids any Vercel function usage and maximises CDN caching.

### Language Switching
- Language preference is stored in `localStorage` — fully client-side, no server involvement.
- This is fully compatible with static export and Vercel Hobby.

### Bandwidth
- Vercel Hobby: **100 GB bandwidth/month** — easily sufficient for a game landing page.

### Custom Domain
- `cuatrosotas.cojauny.com` can be connected to Vercel Hobby via CNAME at no cost.

---

## Recommended `next.config.ts` Addition

```ts
const nextConfig: NextConfig = {
  output: 'export',       // Pure static site — no server functions needed
  images: {
    unoptimized: true,    // Required for static export
  },
};
```

---

## Environment Variables Required on Vercel

None — this project requires no environment variables.

---

## Future Paid Considerations

If the project adds a backend (e.g. for a leaderboard or newsletter):
- **Supabase Free Tier**: 500 MB DB, 2 GB transfer — suitable for game stats
- **Resend Free Tier**: 3,000 emails/month — suitable for newsletter
- **Upstash Redis Free Tier**: 10,000 commands/day — suitable for rate limiting
