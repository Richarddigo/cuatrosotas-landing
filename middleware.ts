import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
    matcher: [
        // Skip API, _next, _vercel, files with extensions, sitemap/robots
        '/((?!api|_next|_vercel|.*\\..*|sitemap.xml|robots.txt|manifest.json).*)',
    ],
};
