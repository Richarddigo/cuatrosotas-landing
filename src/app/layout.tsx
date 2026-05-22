import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LangSync from '@/components/LangSync';

const BASE_URL = 'https://cuatrosotas.cojauny.com';

export const metadata: Metadata = {
  title: {
    template: '%s — Cuatro Sotas',
    default: 'Cuatro Sotas — El auténtico juego de cartas español',
  },
  description:
    'Cuatro Sotas es el auténtico Guiñote español para móvil. Juega contra la IA, con amigos o compite online. Reúne las cuatro sotas y gana al instante.',
  icons: { icon: '/logo.png' },
  openGraph: {
    title: 'Cuatro Sotas — El auténtico juego de cartas español',
    description:
      'Guiñote español para móvil: vs IA, multijugador local y online, ranking global y suscripción Premium.',
    type: 'website',
    url: `${BASE_URL}/`,
    images: [{ url: `${BASE_URL}/logo.png` }],
  },
  alternates: {
    canonical: `${BASE_URL}/`,
    languages: {
      'es': `${BASE_URL}/`,
      'en': `${BASE_URL}/`,
      'de': `${BASE_URL}/`,
      'fr': `${BASE_URL}/`,
      'x-default': `${BASE_URL}/`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <LanguageProvider>
          {/* Syncs <html lang="…"> with active locale client-side */}
          <LangSync />
          <a className="skip-link" href="#main-content">
            Saltar al contenido
          </a>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
