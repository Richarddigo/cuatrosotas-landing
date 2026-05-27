import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Fallback redirect for / when the proxy hasn't run (e.g. dev mode, static export)
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
