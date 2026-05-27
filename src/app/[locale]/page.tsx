'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useLanguage } from '@/context/LanguageContext';
import type { Lang } from '@/context/LanguageContext';
import { SHOW_PREMIUM_PUBLIC_INFO } from '@/lib/publicationFlags';

// ── Section data helpers ──────────────────────────────────────────────────────

const GAME_MODES = [
  {
    icon: '🤖',
    title: { es: 'VS Inteligencia Artificial', en: 'VS Artificial Intelligence', de: 'VS Künstliche Intelligenz', fr: 'VS Intelligence Artificielle' },
    desc: { es: 'Practica y mejora tu nivel jugando contra la IA. Perfecto para aprender las reglas o perfeccionar tu estrategia sin presión.', en: 'Practice and improve your skills against the AI. Perfect for learning the rules or refining your strategy without pressure.', de: 'Übe und verbessere dein Niveau gegen die KI. Perfekt zum Erlernen der Regeln oder Verfeinern deiner Strategie ohne Druck.', fr: 'Pratique et améliore ton niveau contre l\'IA. Idéal pour apprendre les règles ou affiner ta stratégie sans pression.' },
  },
  {
    icon: '👥',
    title: { es: 'Multijugador local', en: 'Local Multiplayer', de: 'Lokaler Mehrspieler', fr: 'Multijoueur local' },
    desc: { es: 'Reta a un amigo en la misma habitación usando Bluetooth o Wi-Fi directo. Sin internet, sin latencia, sin excusas.', en: 'Challenge a friend in the same room using Bluetooth or direct Wi-Fi. No internet, no latency, no excuses.', de: 'Fordere einen Freund im selben Raum über Bluetooth oder direktes Wi-Fi heraus. Kein Internet, keine Latenz, keine Ausreden.', fr: 'Défie un ami dans la même pièce via Bluetooth ou Wi-Fi direct. Pas d\'internet, pas de latence, pas d\'excuses.' },
  },
  {
    icon: '🌐',
    title: { es: 'Multijugador online', en: 'Online Multiplayer', de: 'Online-Mehrspieler', fr: 'Multijoueur en ligne' },
    desc: { es: 'Compite en tiempo real contra jugadores de todo el mundo. Sistema de emparejamiento por nivel y ranking global.', en: 'Compete in real-time against players worldwide. Skill-based matchmaking and global ranking.', de: 'Tritt in Echtzeit gegen Spieler aus aller Welt an. Fähigkeitsbasiertes Matchmaking und globale Rangliste.', fr: 'Affronte en temps réel des joueurs du monde entier. Matchmaking par niveau et classement mondial.' },
  },
] as const;

const gameModes = (lang: Lang) => GAME_MODES.map(m => ({ icon: m.icon, title: m.title[lang] ?? m.title.en, desc: m.desc[lang] ?? m.desc.en }));

const premiumTiers = (lang: Lang) => {
  const es = lang === 'es';
  return es
    ? [
      { cls: 'tier-bronze', icon: '🥉', name: 'Bronce', price: '1,99 €/mes · 11,99 €/año', items: ['Sin banners publicitarios', 'Cosméticos exclusivos', 'Distintivo en perfil'] },
      { cls: 'tier-silver', icon: '🥈', name: 'Plata', price: '3,99 €/mes · 23,99 €/año', items: ['Todo lo de Bronce', 'Sin anuncios de ningún tipo', 'Baraja alternativa', 'Emotes y revelación de mano'] },
      { cls: 'tier-gold', icon: '🥇', name: 'Oro', price: '5,99 €/mes · 35,99 €/año', items: ['Todo lo de Plata', 'Función de deshacer', 'Multiplicador ranking ×2', 'Animación SOTA premium', 'Temas de mesa'] },
      { cls: 'tier-legend', icon: '👑', name: 'Legendaria', price: '9,99 €/mes · 59,99 €/año', items: ['Todo lo de Oro', 'Deshacer ×3', 'Multiplicador ranking ×3', 'Repetición de partidas', 'Pack de sonidos exclusivo'] },
    ]
    : [
      { cls: 'tier-bronze', icon: '🥉', name: 'Bronze', price: '€1.99/mo · €11.99/yr', items: ['No banner ads', 'Exclusive cosmetics', 'Premium profile badge'] },
      { cls: 'tier-silver', icon: '🥈', name: 'Silver', price: '€3.99/mo · €23.99/yr', items: ['Everything in Bronze', 'Completely ad-free', 'Alternative deck skin', 'Emotes & hand reveal'] },
      { cls: 'tier-gold', icon: '🥇', name: 'Gold', price: '€5.99/mo · €35.99/yr', items: ['Everything in Silver', 'Undo move feature', 'Ranking multiplier ×2', 'Premium SOTA animation', 'Table themes'] },
      { cls: 'tier-legend', icon: '👑', name: 'Legendary', price: '€9.99/mo · €59.99/yr', items: ['Everything in Gold', 'Undo ×3', 'Ranking multiplier ×3', 'Match replay', 'Exclusive sound pack'] },
    ];
};

const STATS_CARDS = [
  {
    icon: '📊',
    title: { es: 'Historial completo', en: 'Full history', de: 'Vollständiger Verlauf', fr: 'Historique complet' },
    desc: { es: 'Victorias, derrotas, rondas ganadas, partidas con cuatro sotas y mucho más.', en: 'Wins, losses, rounds won, four-Jacks matches and much more.', de: 'Siege, Niederlagen, gewonnene Runden, Vier-Buben-Partien und vieles mehr.', fr: 'Victoires, défaites, manches gagnées, parties des quatre valets et bien plus encore.' },
  },
  {
    icon: '🏆',
    title: { es: 'Ranking mundial', en: 'World ranking', de: 'Weltrangliste', fr: 'Classement mondial' },
    desc: {
      es: SHOW_PREMIUM_PUBLIC_INFO
        ? 'Compite contra jugadores de todo el mundo. Los usuarios Premium tienen multiplicadores de ranking.'
        : 'Compite contra jugadores de todo el mundo y mejora tu posición en el ranking global.',
      en: SHOW_PREMIUM_PUBLIC_INFO
        ? 'Compete against players from around the world. Premium users get ranking multipliers.'
        : 'Compete against players from around the world and improve your global ranking.',
      de: SHOW_PREMIUM_PUBLIC_INFO
        ? 'Tritt gegen Spieler aus aller Welt an. Premium-Nutzer erhalten Ranking-Multiplikatoren.'
        : 'Tritt gegen Spieler aus aller Welt an und verbessere deine Position in der Weltrangliste.',
      fr: SHOW_PREMIUM_PUBLIC_INFO
        ? 'Affronte des joueurs du monde entier. Les utilisateurs Premium bénéficient de multiplicateurs de classement.'
        : 'Affronte des joueurs du monde entier et améliore ta position dans le classement mondial.'
    },
  },
  {
    icon: '☁️',
    title: { es: 'Sincronización', en: 'Cloud sync', de: 'Cloud-Synchronisation', fr: 'Synchronisation cloud' },
    desc: { es: 'Tu cuenta de Google sincroniza el progreso entre dispositivos automáticamente.', en: 'Your Google account automatically syncs your progress across devices.', de: 'Dein Google-Konto synchronisiert deinen Fortschritt automatisch geräteübergreifend.', fr: 'Ton compte Google synchronise automatiquement ta progression sur tous tes appareils.' },
  },
] as const;

const statsCards = (lang: Lang) => STATS_CARDS.map(c => ({ icon: c.icon, title: c.title[lang] ?? c.title.en, desc: c.desc[lang] ?? c.desc.en }));

// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { lang } = useLanguage();
  const homeT = useTranslations('home');
  const navT = useTranslations('nav');
  const supportT = useTranslations('support');
  const es = lang === 'es';

  return (
    <main id="main-content">
      {/* ── HERO ── */}
      <section className="hero" aria-labelledby="hero-title">
        <p className="tagline">{homeT('tagline')}</p>
        <h1 id="hero-title">
          {homeT('heroTitle').split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>
        <p>{homeT('heroDesc')}</p>
        <div className="app-badges">
          <a href="#" className="badge-btn disabled" aria-label={homeT('comingSoonGoogle')}>
            <span aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84 1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
              </svg>
            </span>
            <span>{homeT('comingSoonGoogle')}</span>
          </a>
          <a href="#" className="badge-btn disabled" aria-label={homeT('comingSoonApple')}>
            <span aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </span>
            <span>{homeT('comingSoonApple')}</span>
          </a>
        </div>
      </section>

      {/* ── LA MECÁNICA ESPECIAL ── */}
      <section className="section" aria-labelledby="mechanic-title">
        <div className="container">
          <h2 id="mechanic-title" className="section-title">{homeT('mechanicTitle')}</h2>
          <div className="highlight-box">
            <p>
              <strong>Cuatro Sotas</strong>{' '}
              {homeT('mechanicDesc')}
            </p>
          </div>
          <div className="instant-win">
            <span className="win-icon" aria-hidden="true">⚡</span>
            <div>
              <strong>{homeT('instantWinTitle')}</strong>
              <p>{homeT('instantWinDesc')}</p>
            </div>
          </div>
          <h3 className="mt-8">{homeT('deckTitle')}</h3>
          <p>{homeT('deckDesc')}</p>
          <div className="suits-grid">
            {[
              { icon: '🪙', name: es ? 'Oros' : 'Coins', sub: es ? 'Coins' : 'Oros' },
              { icon: '🏆', name: es ? 'Copas' : 'Cups', sub: es ? 'Cups' : 'Copas' },
              { icon: '⚔️', name: es ? 'Espadas' : 'Swords', sub: es ? 'Swords' : 'Espadas' },
              { icon: '🪵', name: es ? 'Bastos' : 'Clubs', sub: es ? 'Clubs' : 'Bastos' },
            ].map(s => (
              <div key={s.name} className="suit-card">
                <span className="suit-icon" aria-hidden="true">{s.icon}</span>
                <span className="suit-name">{s.name}</span>
                <span className="suit-name-en">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODOS DE JUEGO ── */}
      <section className="section bg-light" aria-labelledby="modes-title">
        <div className="container">
          <h2 id="modes-title" className="section-title">{homeT('modesTitle')}</h2>
          <div className="modes-grid">
            {gameModes(lang).map(mode => (
              <div key={mode.title} className="mode-card">
                <span className="mode-icon" aria-hidden="true">{mode.icon}</span>
                <div>
                  <h3>{mode.title}</h3>
                  <p>{mode.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO SE JUEGA ── */}
      <section className="section" aria-labelledby="rules-title">
        <div className="container">
          <h2 id="rules-title" className="section-title">{homeT('rulesTitle')}</h2>

          {/* Card values */}
          <h3>{homeT('cardValuesTitle')}</h3>
          <p>{homeT('cardValuesDesc')}</p>
          <div className="table-scroll">
            {es ? (
              <table className="card-values-table">
                <thead>
                  <tr><th>Carta</th><th>Puntos</th><th>Consejo</th></tr>
                </thead>
                <tbody>
                  <tr><td>Sota</td><td className="val-zero">0 pts</td><td>¡Guárdala siempre!</td></tr>
                  <tr><td>As</td><td>1 pt</td><td>Excelente</td></tr>
                  <tr><td>Dos</td><td>2 pts</td><td>Muy buena</td></tr>
                  <tr><td>Tres</td><td>3 pts</td><td>Buena</td></tr>
                  <tr><td>Cuatro</td><td>4 pts</td><td>Aceptable</td></tr>
                  <tr><td>Cinco</td><td>5 pts</td><td>Descarta si puedes</td></tr>
                  <tr><td>Seis</td><td>6 pts</td><td>Descarta si puedes</td></tr>
                  <tr><td>Siete</td><td className="val-high">7 pts</td><td>Peligrosa — descarta</td></tr>
                  <tr><td>Caballo</td><td className="val-high">11 pts</td><td>Muy peligrosa</td></tr>
                  <tr><td>Rey</td><td className="val-high">12 pts</td><td>La peor — deshazla cuanto antes</td></tr>
                </tbody>
              </table>
            ) : (
              <table className="card-values-table">
                <thead>
                  <tr><th>Card</th><th>Points</th><th>Tip</th></tr>
                </thead>
                <tbody>
                  <tr><td>Jack (Sota)</td><td className="val-zero">0 pts</td><td>Always keep it!</td></tr>
                  <tr><td>Ace</td><td>1 pt</td><td>Excellent</td></tr>
                  <tr><td>Two</td><td>2 pts</td><td>Very good</td></tr>
                  <tr><td>Three</td><td>3 pts</td><td>Good</td></tr>
                  <tr><td>Four</td><td>4 pts</td><td>Acceptable</td></tr>
                  <tr><td>Five</td><td>5 pts</td><td>Discard if possible</td></tr>
                  <tr><td>Six</td><td>6 pts</td><td>Discard if possible</td></tr>
                  <tr><td>Seven</td><td className="val-high">7 pts</td><td>Dangerous — discard</td></tr>
                  <tr><td>Knight (Caballo)</td><td className="val-high">11 pts</td><td>Very dangerous</td></tr>
                  <tr><td>King (Rey)</td><td className="val-high">12 pts</td><td>Worst — get rid of it fast</td></tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>

      {SHOW_PREMIUM_PUBLIC_INFO && (
        <section className="section bg-light" aria-labelledby="premium-title">
          <div className="container">
            <h2 id="premium-title" className="section-title">{homeT('premiumTitle')}</h2>
            <p className="mx-auto mb-8 max-w-[600px] text-center">
              {homeT('premiumDesc')}
            </p>
            <div className="premium-grid">
              {premiumTiers(lang).map(tier => (
                <div key={tier.name} className={`tier ${tier.cls}`}>
                  <div className="tier-name"><span aria-hidden="true">{tier.icon}</span> {tier.name}</div>
                  <div className="tier-price">{tier.price}</div>
                  <ul>{tier.items.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-[0.85rem]">
              {homeT('premiumRenew')}
            </p>
          </div>
        </section>
      )}

      {/* ── ESTADÍSTICAS Y RANKING ── */}
      <section className="section bg-green" aria-labelledby="stats-title">
        <div className="container">
          <h2 id="stats-title" className="section-title text-white">
            {homeT('statsTitle')}
          </h2>
          <p className="mx-auto mb-6 max-w-[580px] text-center text-white/85">
            {homeT('statsDesc')}
          </p>
          <div className="modes-grid mt-0">
            {statsCards(lang).map(card => (
              <div key={card.title} className="mode-card bg-white/10 text-white">
                <span className="mode-icon" aria-hidden="true">{card.icon}</span>
                <div>
                  <h3 className="text-[var(--gold)]">{card.title}</h3>
                  <p className="text-white/80">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFORMACIÓN Y SOPORTE ── */}
      <section className="section" aria-labelledby="info-title">
        <div className="container">
          <h2 id="info-title" className="section-title">{homeT('infoTitle')}</h2>
          <div className="links-grid">
            <Link href="/legal/support" className="link-card">
              <span className="icon" aria-hidden="true">🛠️</span>
              <h3>{navT('support')}</h3>
              <p>{homeT('infoSupport')}</p>
            </Link>
            <Link href="/legal/privacy" className="link-card">
              <span className="icon" aria-hidden="true">🔒</span>
              <h3>{supportT('privacyPolicyTitle')}</h3>
              <p>{homeT('infoPrivacy')}</p>
            </Link>
            <Link href="/legal/terms" className="link-card">
              <span className="icon" aria-hidden="true">📄</span>
              <h3>{supportT('termsTitle')}</h3>
              <p>
                {SHOW_PREMIUM_PUBLIC_INFO
                  ? homeT('infoTerms')
                  : (es
                    ? 'Condiciones de uso de la aplicación y normas del servicio.'
                    : 'Application terms of use and service rules.')}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}