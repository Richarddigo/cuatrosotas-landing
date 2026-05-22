import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cuatrosotas.cojauny.com';
  return [
    { url: `${base}/`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/support`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/terms`,   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
  ];
}
