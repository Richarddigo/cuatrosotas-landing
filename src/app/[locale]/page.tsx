import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Lang } from '@/context/LanguageContext';
import { SHOW_PREMIUM_PUBLIC_INFO } from '@/lib/publicationFlags';
import FaqAccordion from '@/components/FaqAccordion';
import GameTable from '@/components/GameTable';
import { SuitMark, type SpanishSuit } from '@/components/CardArt';

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

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as Lang;
  const es = lang === 'es';
  const homeT = await getTranslations({ locale, namespace: 'home' });
  const tableT = await getTranslations({ locale, namespace: 'tabletop' });
  const navT = await getTranslations({ locale, namespace: 'nav' });
  const supportT = await getTranslations({ locale, namespace: 'support' });

  return (
    <main id="main-content" className="tabletop-page">
      <section className="tabletop-hero" aria-labelledby="hero-title">
        <div className="hero-topline"><span>{tableT('eyebrow')}</span><span aria-hidden="true">EST. CUATRO SOTAS</span></div>
        <div className="hero-composition">
          <div className="hero-copy">
            <h1 id="hero-title">Cuatro<span>Sotas<i>.</i></span></h1>
            <p className="hero-promise">{homeT('heroTitle').replace('\n', ' ')}</p>
            <p className="hero-description">{homeT('heroDesc')}</p>
            <div className="tabletop-actions">
              <a className="tabletop-button" href="#the-play">{tableT('discover')} <span aria-hidden="true">↗</span></a>
              <a className="tabletop-text-link" href="#rules">{tableT('rules')} <span aria-hidden="true">↓</span></a>
            </div>
            <div className="store-status" aria-label={homeT('comingSoonGoogle') + '. ' + homeT('comingSoonApple')}>
              <span>{homeT('comingSoonGoogle')}</span><span>{homeT('comingSoonApple')}</span>
            </div>
          </div>
          <GameTable />
        </div>
        <div className="table-facts"><span>{tableT('deck40')}</span><span>{tableT('onlyFour')}</span><span>{tableT('pointsZero')}</span></div>
      </section>
      <div className="hand-note"><p>{tableT('handNote')}</p><SuitMark suit="coins" /></div>

      {/* ── LA MECÁNICA ESPECIAL ── */}
      <section className="section mechanic-section" id="the-play" aria-labelledby="mechanic-title">
        <div className="container">
          <span className="chapter-label">01 / CUATRO SOTAS</span>
          <h2 id="mechanic-title" className="section-title">{tableT('chapterOne')}</h2>
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
            {(['coins', 'cups', 'swords', 'clubs'] as SpanishSuit[]).map(suit => (
              <div key={suit} className={'suit-card sota-' + suit}>
                <span className="suit-icon"><SuitMark suit={suit} /></span>
                <span className="suit-name">{tableT(suit)}</span>
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
      <section className="section rules-section" id="rules" aria-labelledby="rules-title">
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

      {/* ── CÓMO FUNCIONA UN TURNO ── */}
      <section className="section bg-light" aria-labelledby="turn-title">
        <div className="container">
          <h2 id="turn-title" className="section-title">{homeT('howToPlayTitle')}</h2>
          <p className="mx-auto mb-6 max-w-[580px] text-center">{homeT('howToPlayDesc')}</p>
          <div className="turn-steps">
            <div className="turn-step">
              <div className="turn-step-num" aria-hidden="true">1</div>
              <div className="turn-step-body">
                <h3>{homeT('step1Title')}</h3>
                <p>{homeT('step1Desc')}</p>
              </div>
            </div>
            <div className="turn-step">
              <div className="turn-step-num" aria-hidden="true">2</div>
              <div className="turn-step-body">
                <h3>{homeT('step2Title')}</h3>
                <p>{homeT('step2Desc')}</p>
              </div>
            </div>
            <div className="turn-step">
              <div className="turn-step-num" aria-hidden="true">3</div>
              <div className="turn-step-body">
                <h3>{homeT('step3Title')}</h3>
                <p>{homeT('step3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPONENTE IA ── */}
      <section className="section" aria-labelledby="ai-title">
        <div className="container">
          <h2 id="ai-title" className="section-title">{homeT('aiTitle')}</h2>
          <p className="mx-auto mb-6 max-w-[580px] text-center">{homeT('aiDesc')}</p>
          <div className="ai-cards">
            <div className="ai-card">
              <span className="ai-card-badge ai-badge-easy">{homeT('aiEasyBadge')}</span>
              <h3>{homeT('aiEasyName')}</h3>
              <p>{homeT('aiEasyDesc')}</p>
            </div>
            <div className="ai-card">
              <span className="ai-card-badge ai-badge-medium">{homeT('aiMediumBadge')}</span>
              <h3>{homeT('aiMediumName')}</h3>
              <p>{homeT('aiMediumDesc')}</p>
            </div>
            <div className="ai-card">
              <span className="ai-card-badge ai-badge-hard">{homeT('aiHardBadge')}</span>
              <h3>{homeT('aiHardName')}</h3>
              <p>{homeT('aiHardDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGROS ── */}
      <section className="section bg-light" aria-labelledby="achievements-title">
        <div className="container">
          <h2 id="achievements-title" className="section-title">{homeT('achievementsTitle')}</h2>
          <p className="mx-auto mb-6 max-w-[580px] text-center">{homeT('achievementsDesc')}</p>
          <div className="achievement-grid">
            <div className="achievement-card">
              <span className="achievement-icon" aria-hidden="true">👑</span>
              <span className="achievement-rarity rarity-legendary">Legendary</span>
              <h3>{es ? 'Cuatro Sotas' : 'Four Jacks'}</h3>
              <p>{homeT('achievementFourSotasDesc')}</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon" aria-hidden="true">🔥</span>
              <span className="achievement-rarity rarity-epic">Epic</span>
              <h3>{es ? 'Remontada' : 'Comeback'}</h3>
              <p>{homeT('achievementComebackDesc')}</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon" aria-hidden="true">⚡</span>
              <span className="achievement-rarity rarity-rare">Rare</span>
              <h3>{es ? 'Partida Perfecta' : 'Perfect Match'}</h3>
              <p>{homeT('achievementPerfectDesc')}</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon" aria-hidden="true">🏆</span>
              <span className="achievement-rarity rarity-epic">Epic</span>
              <h3>250 {es ? 'victorias' : 'wins'}</h3>
              <p>{homeT('achievementWins250Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title" className="section-title">{homeT('faqTitle')}</h2>
          <FaqAccordion />
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