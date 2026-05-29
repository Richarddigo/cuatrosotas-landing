import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,

    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['next-intl'],
    },

    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        minimumCacheTTL: 31536000,
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
    },

    async redirects() {
        return [
            // Permanent redirects: old routes → new /legal/* structure
            // English (no locale prefix with as-needed)
            { source: '/privacy', destination: '/legal/privacy', permanent: true },
            { source: '/terms', destination: '/legal/terms', permanent: true },
            { source: '/support', destination: '/legal/support', permanent: true },
            // Non-default locales (de, es, fr) with prefix
            { source: '/:locale(de|es|fr)/privacy', destination: '/:locale/legal/privacy', permanent: true },
            { source: '/:locale(de|es|fr)/terms', destination: '/:locale/legal/terms', permanent: true },
            { source: '/:locale(de|es|fr)/support', destination: '/:locale/legal/support', permanent: true },
        ];
    },
};

export default withNextIntl(nextConfig);
