/**
 * Cuatro Sotas — Centralised translations
 *
 * Aligned with cojauny-landing language system: es / en / de / fr
 * Keys are grouped by page/component for maintainability.
 */

import type { Lang } from '@/context/LanguageContext';

// ─── Utility type ────────────────────────────────────────────────────────────
export type T4<V = string> = Record<Lang, V>;

/** Look up a value for the active language with English fallback. */
export function t<V = string>(dict: T4<V>, lang: Lang): V {
    return dict[lang] ?? dict['en'];
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
export const navTranslations = {
    siteTitle: { es: 'Cuatro Sotas', en: 'Four Jacks', de: 'Vier Buben', fr: 'Quatre Valets' },
    siteTagline: { es: 'El auténtico juego de cartas español', en: 'The authentic Spanish card game', de: 'Das authentische spanische Kartenspiel', fr: 'Le jeu de cartes espagnol authentique' },
    home: { es: 'Inicio', en: 'Home', de: 'Start', fr: 'Accueil' },
    support: { es: 'Soporte', en: 'Support', de: 'Support', fr: 'Support' },
    privacy: { es: 'Privacidad', en: 'Privacy', de: 'Datenschutz', fr: 'Confidentialité' },
    terms: { es: 'Términos', en: 'Terms', de: 'Nutzungsbedingungen', fr: 'Conditions' },
    langAriaLabel: { es: 'Idioma seleccionado: Español. Pulsa para cambiar.', en: 'Selected language: English. Click to change.', de: 'Ausgewählte Sprache: Deutsch. Zum Ändern klicken.', fr: 'Langue sélectionnée : Français. Cliquez pour changer.' },
    langLabel: { es: '🇪🇸 ES', en: '🇬🇧 EN', de: '🇩🇪 DE', fr: '🇫🇷 FR' },
    brandHomeAria: { es: 'Cuatro Sotas — Inicio', en: 'Cuatro Sotas — Home', de: 'Cuatro Sotas — Start', fr: 'Cuatro Sotas — Accueil' },
    mainNavAria: { es: 'Navegación principal', en: 'Main navigation', de: 'Hauptnavigation', fr: 'Navigation principale' },
    mainMenuAria: { es: 'Menú principal', en: 'Main menu', de: 'Hauptmenü', fr: 'Menu principal' },
    openMenu: { es: 'Abrir menú', en: 'Open menu', de: 'Menü öffnen', fr: 'Ouvrir le menu' },
    closeMenu: { es: 'Cerrar menú', en: 'Close menu', de: 'Menü schließen', fr: 'Fermer le menu' },
};

// ─── Footer ──────────────────────────────────────────────────────────────────
export const footerTranslations = {
    rights: { es: '© 2026 Cojauny. Todos los derechos reservados.', en: '© 2026 Cojauny. All rights reserved.', de: '© 2026 Cojauny. Alle Rechte vorbehalten.', fr: '© 2026 Cojauny. Tous droits réservés.' },
    madeWith: { es: 'Desarrollado con ❤️ en España', en: 'Made with ❤️ in Spain', de: 'Mit ❤️ in Spanien entwickelt', fr: 'Développé avec ❤️ en Espagne' },
    tagline: { es: 'El auténtico juego de cartas español', en: 'The authentic Spanish card game', de: 'Das authentische spanische Kartenspiel', fr: 'Le jeu de cartes espagnol authentique' },
    navigate: { es: 'Navegar', en: 'Navigate', de: 'Navigation', fr: 'Navigation' },
    legal: { es: 'Legal', en: 'Legal', de: 'Rechtliches', fr: 'Légal' },
    connect: { es: 'Ecosistema', en: 'Ecosystem', de: 'Ökosystem', fr: 'Écosystème' },
    ecosystemDesc: { es: 'Cuatro Sotas forma parte del ecosistema Cojauny.', en: 'Cuatro Sotas is part of the Cojauny ecosystem.', de: 'Cuatro Sotas ist Teil des Cojauny-Ökosystems.', fr: 'Cuatro Sotas fait partie de l\'écosystème Cojauny.' },
};

// ─── Home page ───────────────────────────────────────────────────────────────
export const homeTranslations = {
    // Hero
    tagline: { es: 'El Guiñote más emocionante que jamás has jugado', en: 'The most exciting Guiñote you\'ll ever play', de: 'Das aufregendste Guiñote, das du je gespielt hast', fr: 'Le Guiñote le plus palpitant que vous ayez jamais joué' },
    heroTitle: { es: 'Reúne las cuatro sotas.\nGana al instante.', en: 'Collect all four Jacks.\nWin instantly.', de: 'Sammle alle vier Buben.\nGewinne sofort.', fr: 'Réunis les quatre valets.\nGagne instantanément.' },
    heroDesc: { es: 'La variante definitiva del clásico Guiñote español. Baraja de 40 cartas, estrategia pura y una mecánica única: consigue las cuatro sotas en la mano y la partida acaba ahí.', en: 'The definitive variant of the classic Spanish Guiñote. A 40-card deck, pure strategy and one unique mechanic: get all four Jacks in your hand and the game ends right there.', de: 'Die ultimative Variante des klassischen spanischen Guiñote. Ein 40-Karten-Deck, pure Strategie und eine einzigartige Mechanik: Bekomme alle vier Buben auf die Hand und das Spiel endet sofort.', fr: 'La variante ultime du classique espagnol Guiñote. Un jeu de 40 cartes, une stratégie pure et une mécanique unique : réunis les quatre valets dans ta main et la partie se termine là.' },
    comingSoonGoogle: { es: 'Próximamente en Google Play', en: 'Coming Soon on Google Play', de: 'Demnächst im Google Play', fr: 'Bientôt sur Google Play' },
    comingSoonApple: { es: 'Próximamente en App Store', en: 'Coming Soon on App Store', de: 'Demnächst im App Store', fr: 'Bientôt sur l\'App Store' },

    // Special mechanic section
    mechanicTitle: { es: '¿Qué hace especial a Cuatro Sotas?', en: 'What makes Cuatro Sotas special?', de: 'Was macht Cuatro Sotas besonders?', fr: 'Qu\'est-ce qui rend Cuatro Sotas spécial ?' },
    mechanicDesc: { es: 'es una variante del Guiñote tradicional español con una mecánica única: el jugador con la menor puntuación en la mano puede cantar Sota para cerrar la ronda, pero si en cualquier momento reúnes las cuatro sotas —la de Oros, Copas, Espadas y Bastos— ganas la partida completa de forma instantánea.', en: '(Four Jacks) is a variant of the traditional Spanish Guiñote with a unique mechanic: the player with the lowest-scoring hand can call Sota to close the round, but if at any moment you collect all four Jacks — Coins, Cups, Swords and Clubs — you instantly win the entire match.', de: '(Vier Buben) ist eine Variante des traditionellen spanischen Guiñote mit einer einzigartigen Mechanik: Der Spieler mit der niedrigsten Handpunktzahl kann Sota rufen, um die Runde zu beenden, aber wenn du jemals alle vier Buben sammelst — Münzen, Kelche, Schwerter und Stäbe — gewinnst du das gesamte Spiel sofort.', fr: '(Quatre Valets) est une variante du Guiñote espagnol traditionnel avec une mécanique unique : le joueur avec la main la plus basse peut appeler Sota pour clore la manche, mais si à tout moment tu réunis les quatre valets — Pièces, Coupes, Épées et Bâtons — tu remportes instantanément toute la partie.' },
    instantWinTitle: { es: 'Victoria instantánea:', en: 'Instant victory:', de: 'Sofortsieg:', fr: 'Victoire instantanée :' },
    instantWinDesc: { es: 'Si consigues las 4 sotas en mano, ganas la partida al instante con un bonus de −50 puntos para ti y +50 puntos para tu rival.', en: 'Collect all 4 Jacks in your hand and you win the match instantly with a −50 point bonus for you and +50 points for your opponent.', de: 'Sammle alle 4 Buben auf die Hand und du gewinnst das Spiel sofort mit einem Bonus von −50 Punkten für dich und +50 Punkten für deinen Gegner.', fr: 'Réunis les 4 valets dans ta main et tu remportes la partie instantanément avec un bonus de −50 points pour toi et +50 points pour ton adversaire.' },
    deckTitle: { es: 'La baraja española de 40 cartas', en: 'The authentic 40-card Spanish deck', de: 'Das authentische 40-Karten-spanische Deck', fr: 'Le jeu de 40 cartes espagnol authentique' },
    deckDesc: { es: 'El juego usa la baraja española auténtica —sin 8 ni 9, como marca la tradición— con cuatro palos y sus cuatro sotas:', en: 'The game uses a traditional Spanish deck — no 8s or 9s, as tradition demands — with four suits and their four Jacks:', de: 'Das Spiel verwendet ein traditionelles spanisches Kartenspiel — keine 8en oder 9en, wie die Tradition es verlangt — mit vier Farben und ihren vier Buben:', fr: 'Le jeu utilise un jeu de cartes espagnol traditionnel — sans 8 ni 9, comme le veut la tradition — avec quatre couleurs et leurs quatre valets :' },

    // Game modes
    modesTitle: { es: 'Modos de juego', en: 'Game Modes', de: 'Spielmodi', fr: 'Modes de jeu' },

    // How to play
    rulesTitle: { es: 'Cómo se juega', en: 'How to Play', de: 'Spielanleitung', fr: 'Comment jouer' },
    cardValuesTitle: { es: 'Valor de las cartas', en: 'Card Values', de: 'Kartenwerte', fr: 'Valeur des cartes' },
    cardValuesDesc: { es: 'El objetivo es tener la menor puntuación posible. Las sotas valen 0: son las mejores cartas que puedes tener.', en: 'The goal is to have the lowest score possible. Jacks are worth 0 — the best cards you can hold.', de: 'Das Ziel ist es, die niedrigst mögliche Punktzahl zu haben. Buben sind 0 wert — die besten Karten, die du halten kannst.', fr: 'L\'objectif est d\'avoir le score le plus bas possible. Les valets valent 0 — les meilleures cartes que tu puisses avoir.' },

    // Premium
    premiumTitle: { es: 'Suscripción Premium', en: 'Premium Subscription', de: 'Premium-Abonnement', fr: 'Abonnement Premium' },
    premiumDesc: { es: 'Desbloquea todo el potencial de Cuatro Sotas. Cuatro niveles con beneficios progresivos, sin compromisos.', en: 'Unlock the full potential of Cuatro Sotas. Four tiers with progressive benefits, no commitment.', de: 'Schöpfe das volle Potenzial von Cuatro Sotas aus. Vier Stufen mit progressiven Vorteilen, ohne Verpflichtung.', fr: 'Libère tout le potentiel de Cuatro Sotas. Quatre niveaux avec des avantages progressifs, sans engagement.' },
    premiumRenew: { es: 'Las suscripciones se renuevan automáticamente. Cancela en cualquier momento desde Google Play o App Store.', en: 'Subscriptions renew automatically. Cancel anytime from Google Play or App Store.', de: 'Abonnements verlängern sich automatisch. Jederzeit über Google Play oder App Store kündbar.', fr: 'Les abonnements se renouvellent automatiquement. Annulez à tout moment via Google Play ou l\'App Store.' },

    // Stats & Ranking
    statsTitle: { es: 'Estadísticas y ranking global', en: 'Statistics & Global Rankings', de: 'Statistiken & globale Ranglisten', fr: 'Statistiques & classements mondiaux' },
    statsDesc: { es: 'Cada partida suma a tu historial. Tu puntuación acumulada determina tu posición en el ranking mundial: cuanto más negativa, mejor jugador eres.', en: 'Every match adds to your history. Your accumulated score determines your world ranking position: the more negative, the better player you are.', de: 'Jedes Spiel trägt zu deiner Geschichte bei. Deine akkumulierte Punktzahl bestimmt deine Weltranglistenposition: Je negativer, desto besser bist du.', fr: 'Chaque partie s\'ajoute à ton historique. Ton score accumulé détermine ta position dans le classement mondial : plus il est négatif, meilleur joueur tu es.' },

    // Info section
    infoTitle: { es: 'Información y soporte', en: 'Information & Support', de: 'Information & Support', fr: 'Informations & support' },
    infoSupport: { es: 'Preguntas frecuentes y contacto con nuestro equipo', en: 'Frequently asked questions and contact our team', de: 'Häufig gestellte Fragen und Kontakt mit unserem Team', fr: 'Questions fréquentes et contact avec notre équipe' },
    infoPrivacy: { es: 'Cómo recopilamos y protegemos tus datos (RGPD)', en: 'How we collect and protect your data (GDPR)', de: 'Wie wir deine Daten erfassen und schützen (DSGVO)', fr: 'Comment nous collectons et protégeons vos données (RGPD)' },
    infoTerms: { es: 'Condiciones de uso y de la suscripción Premium', en: 'Usage conditions and Premium subscription terms', de: 'Nutzungsbedingungen und Premium-Abonnementbedingungen', fr: 'Conditions d\'utilisation et termes de l\'abonnement Premium' },
};

// ─── Support page ────────────────────────────────────────────────────────────
export const supportTranslations = {
    contactTitle: { es: 'Canales de contacto', en: 'Contact Channels', de: 'Kontaktkanäle', fr: 'Canaux de contact' },
    contactDesc: { es: 'Estamos aquí para ayudarte. Escríbenos al canal que corresponda a tu consulta.', en: "We're here to help. Write to the channel that matches your enquiry.", de: 'Wir sind hier, um dir zu helfen. Schreib uns an den Kanal, der zu deiner Anfrage passt.', fr: 'Nous sommes ici pour vous aider. Écrivez-nous sur le canal correspondant à votre demande.' },
    techSupport: { es: 'Soporte técnico y Privacidad', en: 'Technical Support & Privacy', de: 'Technischer Support & Datenschutz', fr: 'Support technique & Confidentialité' },
    suggestions: { es: 'Sugerencias y Colaboraciones', en: 'Suggestions & Collaborations', de: 'Vorschläge & Kooperationen', fr: 'Suggestions & Collaborations' },
    responseTimes: { es: 'Tiempos de respuesta', en: 'Response Times', de: 'Antwortzeiten', fr: 'Délais de réponse' },
    techSupportTime: { es: 'Soporte técnico', en: 'Technical support', de: 'Technischer Support', fr: 'Support technique' },
    techSupportDesc: { es: <>Respondemos en <strong>24–48 horas laborables</strong> a todas las incidencias técnicas.</>, en: <>We respond within <strong>24–48 business hours</strong> to all technical issues.</>, de: <>Wir antworten innerhalb von <strong>24–48 Geschäftsstunden</strong> auf alle technischen Probleme.</>, fr: <>Nous répondons dans les <strong>24–48 heures ouvrables</strong> à tous les problèmes techniques.</> },
    gdprTime: { es: 'Solicitudes RGPD', en: 'GDPR requests', de: 'DSGVO-Anfragen', fr: 'Demandes RGPD' },
    gdprDesc: { es: <>Las solicitudes de ejercicio de derechos se procesan en un <strong>máximo de 30 días</strong>.</>, en: <>Data rights requests are processed within a <strong>maximum of 30 days</strong>.</>, de: <>Datenrechtsanfragen werden innerhalb von <strong>maximal 30 Tagen</strong> bearbeitet.</>, fr: <>Les demandes d'exercice de droits sont traitées dans un <strong>délai maximum de 30 jours</strong>.</> },
    suggestionsTime: { es: 'Sugerencias', en: 'Suggestions', de: 'Vorschläge', fr: 'Suggestions' },
    suggestionsDesc: { es: 'Las leemos todas y las tenemos en cuenta para las próximas versiones de la app.', en: 'We read them all and consider them for upcoming versions of the app.', de: 'Wir lesen sie alle und berücksichtigen sie für kommende App-Versionen.', fr: 'Nous les lisons toutes et les prenons en compte pour les prochaines versions de l\'application.' },
    faqGameTitle: { es: 'Preguntas frecuentes — El juego', en: 'FAQ — The game', de: 'FAQ — Das Spiel', fr: 'FAQ — Le jeu' },
    faqAccountTitle: { es: 'Preguntas frecuentes — Cuenta y Premium', en: 'FAQ — Account & Premium', de: 'FAQ — Konto & Premium', fr: 'FAQ — Compte & Premium' },
    faqPrivacyTitle: { es: 'Preguntas frecuentes — Privacidad', en: 'FAQ — Privacy', de: 'FAQ — Datenschutz', fr: 'FAQ — Confidentialité' },
    legalDocs: { es: 'Documentos legales', en: 'Legal Documents', de: 'Rechtliche Dokumente', fr: 'Documents légaux' },
    privacyPolicyTitle: { es: 'Política de Privacidad', en: 'Privacy Policy', de: 'Datenschutzerklärung', fr: 'Politique de Confidentialité' },
    privacyPolicyDesc: { es: 'Cómo gestionamos tus datos (RGPD)', en: 'How we manage your data (GDPR)', de: 'Wie wir deine Daten verwalten (DSGVO)', fr: 'Comment nous gérons vos données (RGPD)' },
    termsTitle: { es: 'Términos de Servicio', en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: 'Conditions d\'utilisation' },
    termsDesc: { es: 'Condiciones de uso y Premium', en: 'Usage conditions and Premium terms', de: 'Nutzungsbedingungen und Premium', fr: 'Conditions d\'utilisation et Premium' },
};

// ─── Privacy page ─────────────────────────────────────────────────────────────
export const privacyTranslations = {
    title: { es: 'Política de Privacidad', en: 'Privacy Policy', de: 'Datenschutzerklärung', fr: 'Politique de Confidentialité' },
    subtitle: { es: 'Información transparente sobre cómo recopilamos, usamos y protegemos tus datos personales, conforme al RGPD.', en: 'Transparent information about how we collect, use and protect your personal data, in compliance with GDPR.', de: 'Transparente Informationen darüber, wie wir deine personenbezogenen Daten im Einklang mit der DSGVO erheben, verwenden und schützen.', fr: 'Informations transparentes sur la façon dont nous collectons, utilisons et protégeons vos données personnelles, conformément au RGPD.' },
    updated: { es: 'Última actualización: 10 de abril de 2026', en: 'Last updated: April 10, 2026', de: 'Letzte Aktualisierung: 10. April 2026', fr: 'Dernière mise à jour : 10 avril 2026' },
};

// ─── Terms page ───────────────────────────────────────────────────────────────
export const termsTranslations = {
    title: { es: 'Términos de Servicio', en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: 'Conditions d\'utilisation' },
    subtitle: { es: 'Condiciones de uso de la aplicación y de los servicios de suscripción Premium.', en: 'Conditions of use of the application and Premium subscription services.', de: 'Nutzungsbedingungen der Anwendung und der Premium-Abonnementdienste.', fr: 'Conditions d\'utilisation de l\'application et des services d\'abonnement Premium.' },
    updated: { es: 'Última actualización: 10 de abril de 2026', en: 'Last updated: April 10, 2026', de: 'Letzte Aktualisierung: 10. April 2026', fr: 'Dernière mise à jour : 10 avril 2026' },
};

// ─── 404 page ─────────────────────────────────────────────────────────────────
export const notFoundTranslations = {
    title: { es: 'Página no encontrada', en: 'Page not found', de: 'Seite nicht gefunden', fr: 'Page introuvable' },
    desc: { es: 'Volvamos al inicio.', en: "Let's go back home.", de: 'Lass uns zur Startseite gehen.', fr: 'Retournons à l\'accueil.' },
    cta: { es: '← Volver al inicio', en: '← Back to home', de: '← Zurück zur Startseite', fr: '← Retour à l\'accueil' },
};
