import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
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
