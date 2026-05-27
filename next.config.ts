import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
    async redirects() {
        return [
            // Permanent redirects: old routes → new /legal/* structure
            { source: '/:locale/privacy', destination: '/:locale/legal/privacy', permanent: true },
            { source: '/:locale/terms', destination: '/:locale/legal/terms', permanent: true },
            { source: '/:locale/support', destination: '/:locale/legal/support', permanent: true },
        ];
    },
};

export default withNextIntl(nextConfig);
