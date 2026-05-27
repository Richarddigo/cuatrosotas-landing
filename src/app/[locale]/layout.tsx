import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { SHOW_PREMIUM_PUBLIC_INFO } from '@/lib/publicationFlags';

export const viewport: Viewport = {
    themeColor: '#0C1120',
    width: 'device-width',
    initialScale: 1,
};

const BASE_URL = 'https://cuatrosotas.cojauny.com';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

const OG_LOCALES: Record<string, string> = {
    es: 'es_ES',
    en: 'en_US',
    de: 'de_DE',
    fr: 'fr_FR',
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const languages: Record<string, string> = {};
    for (const alt of routing.locales) languages[alt] = `${BASE_URL}/${alt}`;
    languages['x-default'] = `${BASE_URL}/${routing.defaultLocale}`;

    return {
        metadataBase: new URL(BASE_URL),
        title: {
            template: '%s — Cuatro Sotas',
            default: 'Cuatro Sotas — El auténtico juego de cartas español',
        },
        description:
            'Cuatro Sotas es el auténtico Guiñote español para móvil. Juega contra la IA, con amigos o compite online. Reúne las cuatro sotas y gana al instante.',
        keywords: ['cuatro sotas', 'guiñote', 'juego cartas español', 'card game', 'Kartenspiel', 'jeu de cartes', 'cojauny'],
        authors: [{ name: 'Cojauny Studio', url: 'https://studio.cojauny.com' }],
        creator: 'Cojauny Studio',
        publisher: 'Cojauny Studio',
        category: 'games',
        manifest: '/manifest.json',
        icons: { icon: '/favicon.ico', apple: '/logo.png' },
        robots: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
        openGraph: {
            title: 'Cuatro Sotas — El auténtico juego de cartas español',
            description:
                SHOW_PREMIUM_PUBLIC_INFO
                    ? 'Guiñote español para móvil: vs IA, multijugador local y online, ranking global y suscripción Premium.'
                    : 'Guiñote español para móvil: vs IA, multijugador local y online, con ranking global.',
            type: 'website',
            siteName: 'Cuatro Sotas',
            url: `${BASE_URL}/${locale}`,
            locale: OG_LOCALES[locale] ?? 'es_ES',
            alternateLocale: Object.values(OG_LOCALES).filter((l) => l !== (OG_LOCALES[locale] ?? 'es_ES')),
            images: [{ url: `${BASE_URL}/logo.png`, width: 512, height: 512, alt: 'Cuatro Sotas' }],
        },
        alternates: {
            canonical: `${BASE_URL}/${locale}`,
            languages,
        },
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages({ locale });
    const commonT = await getTranslations({ locale, namespace: 'common' });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Cuatro Sotas',
                        applicationCategory: 'GameApplication',
                        operatingSystem: 'Android, iOS',
                        url: BASE_URL,
                        inLanguage: locale,
                        description: 'El auténtico juego de cartas español Guiñote para móvil.',
                        ...(SHOW_PREMIUM_PUBLIC_INFO ? { offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } : {}),
                        publisher: { '@type': 'Organization', name: 'Cojauny Studio', url: 'https://studio.cojauny.com' },
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        name: 'Cuatro Sotas',
                        url: `${BASE_URL}/${locale}`,
                        inLanguage: locale,
                        publisher: { '@type': 'Organization', name: 'Cojauny Studio' },
                    }),
                }}
            />
            <NextIntlClientProvider locale={locale} messages={messages}>
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                    style={{ color: 'var(--accent)' }}
                >
                    {commonT('skipToMainContent')}
                </a>
                <Navbar />
                {children}
                <Footer />
                <CookieBanner />
            </NextIntlClientProvider>
            <Analytics />
        </>
    );
}
