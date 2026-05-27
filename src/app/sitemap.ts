import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const BASE = 'https://cuatrosotas.cojauny.com';
const PATHS: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/legal/support', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/legal/privacy', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/legal/terms', priority: 0.5, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PATHS.flatMap(({ path, priority, changeFrequency }) =>
    routing.locales.map((locale) => {
      const suffix = path === '/' ? '' : path;
      const languages: Record<string, string> = {};
      for (const alt of routing.locales) languages[alt] = `${BASE}/${alt}${suffix}`;
      languages['x-default'] = `${BASE}/${routing.defaultLocale}${suffix}`;
      return {
        url: `${BASE}/${locale}${suffix}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages },
      };
    })
  );
}
