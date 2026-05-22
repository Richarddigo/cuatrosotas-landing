'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { t, homeTranslations, navTranslations, supportTranslations } from '@/i18n/translations';
import type { Lang } from '@/context/LanguageContext';

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
    desc: { es: 'Compite contra jugadores de todo el mundo. Los usuarios Premium tienen multiplicadores de ranking.', en: 'Compete against players from around the world. Premium users get ranking multipliers.', de: 'Tritt gegen Spieler aus aller Welt an. Premium-Nutzer erhalten Ranking-Multiplikatoren.', fr: 'Affronte des joueurs du monde entier. Les utilisateurs Premium bénéficient de multiplicateurs de classement.' },
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
  const es = lang === 'es';

  return (
    <main id="main-content">
      {/* ── HERO ── */}
      <section className="hero" aria-labelledby="hero-title">
        <p className="tagline">{t(homeTranslations.tagline, lang)}</p>
        <h2 id="hero-title">
          {t(homeTranslations.heroTitle, lang).split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h2>
        <p>{t(homeTranslations.heroDesc, lang)}</p>
        <div className="app-badges">
          <a href="#" className="badge-btn disabled" aria-label={t(homeTranslations.comingSoonGoogle, lang)}>
            <span aria-hidden="true"><i className="fa-brands fa-android" style={{ fontSize: '40px' }}></i></span>
            <span>{t(homeTranslations.comingSoonGoogle, lang)}</span>
          </a>
          <a href="#" className="badge-btn disabled" aria-label={t(homeTranslations.comingSoonApple, lang)}>
            <span aria-hidden="true"><i className="fa-brands fa-apple" style={{ fontSize: '40px' }}></i></span>
            <span>{t(homeTranslations.comingSoonApple, lang)}</span>
          </a>
        </div>
      </section>

      {/* ── LA MECÁNICA ESPECIAL ── */}
      <section className="section" aria-labelledby="mechanic-title">
        <div className="container">
          <h2 id="mechanic-title" className="section-title">{t(homeTranslations.mechanicTitle, lang)}</h2>
          <div className="highlight-box">
            <p>
              <strong>Cuatro Sotas</strong>{' '}
              {t(homeTranslations.mechanicDesc, lang)}
            </p>
          </div>
          <div className="instant-win">
            <span className="win-icon" aria-hidden="true">⚡</span>
            <div>
              <strong>{t(homeTranslations.instantWinTitle, lang)}</strong>
              <p>{t(homeTranslations.instantWinDesc, lang)}</p>
            </div>
          </div>
          <h3 style={{ marginTop: '2rem' }}>{t(homeTranslations.deckTitle, lang)}</h3>
          <p>{t(homeTranslations.deckDesc, lang)}</p>
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
          <h2 id="modes-title" className="section-title">{t(homeTranslations.modesTitle, lang)}</h2>
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
          <h2 id="rules-title" className="section-title">{t(homeTranslations.rulesTitle, lang)}</h2>

          {/* Card values */}
          <h3>{t(homeTranslations.cardValuesTitle, lang)}</h3>
          <p>{t(homeTranslations.cardValuesDesc, lang)}</p>
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

      {/* ── PREMIUM ── */}
      <section className="section bg-light" aria-labelledby="premium-title">
        <div className="container">
          <h2 id="premium-title" className="section-title">{t(homeTranslations.premiumTitle, lang)}</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t(homeTranslations.premiumDesc, lang)}
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
          <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '.85rem' }}>
            {t(homeTranslations.premiumRenew, lang)}
          </p>
        </div>
      </section>

      {/* ── ESTADÍSTICAS Y RANKING ── */}
      <section className="section bg-green" aria-labelledby="stats-title">
        <div className="container">
          <h2 id="stats-title" className="section-title" style={{ color: 'white' }}>
            {t(homeTranslations.statsTitle, lang)}
          </h2>
          <p style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 1.5rem', color: 'rgba(255,255,255,.85)' }}>
            {t(homeTranslations.statsDesc, lang)}
          </p>
          <div className="modes-grid" style={{ marginTop: 0 }}>
            {statsCards(lang).map(card => (
              <div key={card.title} className="mode-card" style={{ background: 'rgba(255,255,255,.1)', color: 'white' }}>
                <span className="mode-icon" aria-hidden="true">{card.icon}</span>
                <div>
                  <h3 style={{ color: 'var(--gold)' }}>{card.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,.8)' }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFORMACIÓN Y SOPORTE ── */}
      <section className="section" aria-labelledby="info-title">
        <div className="container">
          <h2 id="info-title" className="section-title">{t(homeTranslations.infoTitle, lang)}</h2>
          <div className="links-grid">
            <Link href="/support" className="link-card">
              <span className="icon" aria-hidden="true">🛠️</span>
              <h3>{t(navTranslations.support, lang)}</h3>
              <p>{t(homeTranslations.infoSupport, lang)}</p>
            </Link>
            <Link href="/privacy" className="link-card">
              <span className="icon" aria-hidden="true">🔒</span>
              <h3>{t(supportTranslations.privacyPolicyTitle, lang)}</h3>
              <p>{t(homeTranslations.infoPrivacy, lang)}</p>
            </Link>
            <Link href="/terms" className="link-card">
              <span className="icon" aria-hidden="true">📄</span>
              <h3>{t(supportTranslations.termsTitle, lang)}</h3>
              <p>{t(homeTranslations.infoTerms, lang)}</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}