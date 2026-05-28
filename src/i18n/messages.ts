import { routing, type Locale } from './routing';

type LocalizedValue<T = string> = Record<Locale, T>;
type Namespace<T extends Record<string, LocalizedValue>> = { [K in keyof T]: string };

const commonTranslations = {
    skipToMainContent: {
        es: 'Saltar al contenido',
        en: 'Skip to main content',
        de: 'Zum Hauptinhalt springen',
        fr: 'Aller au contenu principal'
    },
    languageSwitcherButtonAria: {
        es: 'Idioma seleccionado: {language}. Pulsa para cambiar.',
        en: 'Selected language: {language}. Click to change.',
        de: 'Ausgewählte Sprache: {language}. Zum Ändern klicken.',
        fr: 'Langue sélectionnée : {language}. Cliquez pour changer.'
    },
    languageSwitcherMenuAria: {
        es: 'Selector de idioma',
        en: 'Language selector',
        de: 'Sprachauswahl',
        fr: 'Sélecteur de langue'
    }
} as const satisfies Record<string, LocalizedValue>;

const navTranslations = {
    siteTitle: { es: 'Cuatro Sotas', en: 'Four Jacks', de: 'Vier Buben', fr: 'Quatre Valets' },
    siteTagline: {
        es: 'El auténtico juego de cartas español',
        en: 'The authentic Spanish card game',
        de: 'Das authentische spanische Kartenspiel',
        fr: 'Le jeu de cartes espagnol authentique'
    },
    home: { es: 'Inicio', en: 'Home', de: 'Start', fr: 'Accueil' },
    support: { es: 'Soporte', en: 'Support', de: 'Support', fr: 'Support' },
    privacy: { es: 'Privacidad', en: 'Privacy Policy', de: 'Datenschutz', fr: 'Confidentialité' },
    terms: { es: 'Términos', en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: 'Conditions' },
    brandHomeAria: {
        es: 'Cuatro Sotas - Inicio',
        en: 'Cuatro Sotas - Home',
        de: 'Cuatro Sotas - Start',
        fr: 'Cuatro Sotas - Accueil'
    },
    mainNavAria: {
        es: 'Navegación principal',
        en: 'Main navigation',
        de: 'Hauptnavigation',
        fr: 'Navigation principale'
    },
    mainMenuAria: {
        es: 'Menú principal',
        en: 'Main menu',
        de: 'Hauptmenü',
        fr: 'Menu principal'
    },
    openMenu: { es: 'Abrir menú', en: 'Open menu', de: 'Menü öffnen', fr: 'Ouvrir le menu' },
    closeMenu: { es: 'Cerrar menú', en: 'Close menu', de: 'Menü schließen', fr: 'Fermer le menu' }
} as const satisfies Record<string, LocalizedValue>;

const footerTranslations = {
    rights: {
        es: '© 2026 Cojauny. Todos los derechos reservados.',
        en: '© 2026 Cojauny. All rights reserved.',
        de: '© 2026 Cojauny. Alle Rechte vorbehalten.',
        fr: '© 2026 Cojauny. Tous droits réservés.'
    },
    madeWith: {
        es: 'Desarrollado con <strong>amor</strong> en Europa',
        en: 'Made with <strong>love</strong> in Europe',
        de: 'Mit <strong>Liebe</strong> in Europa entwickelt',
        fr: 'Développé avec <strong>amour</strong> en Europe'
    },
    madeIn: {
        es: 'Hecho en Europa.',
        en: 'Made in Europe.',
        de: 'Hergestellt in Europa.',
        fr: 'Fait en Europe.'
    },
    tagline: {
        es: 'El auténtico juego de cartas español',
        en: 'The authentic Spanish card game',
        de: 'Das authentische spanische Kartenspiel',
        fr: 'Le jeu de cartes espagnol authentique'
    },
    navigate: { es: 'Navegación', en: 'Navigation', de: 'Navigation', fr: 'Navigation' },
    legal: { es: 'Legal', en: 'Legal', de: 'Rechtliches', fr: 'Légal' },
    connect: { es: 'Ecosistema', en: 'Ecosystem', de: 'Ökosystem', fr: 'Écosystème' },
    ecosystemDesc: {
        es: 'Cuatro Sotas forma parte del ecosistema Cojauny.',
        en: 'Cuatro Sotas is part of the Cojauny ecosystem.',
        de: 'Cuatro Sotas ist Teil des Cojauny-Ökosystems.',
        fr: 'Cuatro Sotas fait partie de l\'écosystème Cojauny.'
    },
    language: { es: 'Idioma', en: 'Language', de: 'Sprache', fr: 'Langue' }
} as const satisfies Record<string, LocalizedValue>;

const homeTranslations = {
    tagline: {
        es: 'El Guiñote más emocionante que jamás has jugado',
        en: "The most exciting Guiñote you'll ever play",
        de: 'Das aufregendste Guiñote, das du je gespielt hast',
        fr: 'Le Guiñote le plus palpitant que vous ayez jamais joué'
    },
    heroTitle: {
        es: 'Reúne las cuatro sotas.\nGana al instante.',
        en: 'Collect all four Jacks.\nWin instantly.',
        de: 'Sammle alle vier Buben.\nGewinne sofort.',
        fr: 'Réunis les quatre valets.\nGagne instantanément.'
    },
    heroDesc: {
        es: 'La variante definitiva del clásico Guiñote español. Baraja de 40 cartas, estrategia pura y una mecánica única: consigue las cuatro sotas en la mano y la partida acaba ahí.',
        en: 'The definitive variant of the classic Spanish Guiñote. A 40-card deck, pure strategy and one unique mechanic: get all four Jacks in your hand and the game ends right there.',
        de: 'Die ultimative Variante des klassischen spanischen Guiñote. Ein 40-Karten-Deck, pure Strategie und eine einzigartige Mechanik: Bekomme alle vier Buben auf die Hand und das Spiel endet sofort.',
        fr: 'La variante ultime du classique espagnol Guiñote. Un jeu de 40 cartes, une stratégie pure et une mécanique unique : réunis les quatre valets dans ta main et la partie se termine là.'
    },
    comingSoonGoogle: {
        es: 'Próximamente en Google Play',
        en: 'Coming Soon on Google Play',
        de: 'Demnächst im Google Play',
        fr: 'Bientôt sur Google Play'
    },
    comingSoonApple: {
        es: 'Próximamente en App Store',
        en: 'Coming Soon on App Store',
        de: 'Demnächst im App Store',
        fr: "Bientôt sur l'App Store"
    },
    mechanicTitle: {
        es: '¿Qué hace especial a Cuatro Sotas?',
        en: 'What makes Cuatro Sotas special?',
        de: 'Was macht Cuatro Sotas besonders?',
        fr: "Qu'est-ce qui rend Cuatro Sotas spécial ?"
    },
    mechanicDesc: {
        es: 'es una variante del Guiñote tradicional español con una mecánica única: el jugador con la menor puntuación en la mano puede cantar Sota para cerrar la ronda, pero si en cualquier momento reúnes las cuatro sotas -la de Oros, Copas, Espadas y Bastos- ganas la partida completa de forma instantánea.',
        en: '(Four Jacks) is a variant of the traditional Spanish Guiñote with a unique mechanic: the player with the lowest-scoring hand can call Sota to close the round, but if at any moment you collect all four Jacks - Coins, Cups, Swords and Clubs - you instantly win the entire match.',
        de: '(Vier Buben) ist eine Variante des traditionellen spanischen Guiñote mit einer einzigartigen Mechanik: Der Spieler mit der niedrigsten Handpunktzahl kann Sota rufen, um die Runde zu beenden, aber wenn du jemals alle vier Buben sammelst - Münzen, Kelche, Schwerter und Stäbe - gewinnst du das gesamte Spiel sofort.',
        fr: '(Quatre Valets) est une variante du Guiñote espagnol traditionnel avec une mécanique unique : le joueur avec la main la plus basse peut appeler Sota pour clore la manche, mais si à tout moment tu réunis les quatre valets - Pièces, Coupes, Épées et Bâtons - tu remportes instantanément toute la partie.'
    },
    instantWinTitle: {
        es: 'Victoria instantánea:',
        en: 'Instant victory:',
        de: 'Sofortsieg:',
        fr: 'Victoire instantanée :'
    },
    instantWinDesc: {
        es: 'Si consigues las 4 sotas en mano, ganas la partida al instante con un bonus de -50 puntos para ti y +50 puntos para tu rival.',
        en: 'Collect all 4 Jacks in your hand and you win the match instantly with a -50 point bonus for you and +50 points for your opponent.',
        de: 'Sammle alle 4 Buben auf die Hand und du gewinnst das Spiel sofort mit einem Bonus von -50 Punkten für dich und +50 Punkten für deinen Gegner.',
        fr: 'Réunis les 4 valets dans ta main et tu remportes la partie instantanément avec un bonus de -50 points pour toi et +50 points pour ton adversaire.'
    },
    deckTitle: {
        es: 'La baraja española de 40 cartas',
        en: 'The authentic 40-card Spanish deck',
        de: 'Das authentische 40-Karten-spanische Deck',
        fr: 'Le jeu de 40 cartes espagnol authentique'
    },
    deckDesc: {
        es: 'El juego usa la baraja española auténtica -sin 8 ni 9, como marca la tradición- con cuatro palos y sus cuatro sotas:',
        en: 'The game uses a traditional Spanish deck - no 8s or 9s, as tradition demands - with four suits and their four Jacks:',
        de: 'Das Spiel verwendet ein traditionelles spanisches Kartenspiel - keine 8en oder 9en, wie die Tradition es verlangt - mit vier Farben und ihren vier Buben:',
        fr: 'Le jeu utilise un jeu de cartes espagnol traditionnel - sans 8 ni 9, comme le veut la tradition - avec quatre couleurs et leurs quatre valets :'
    },
    modesTitle: { es: 'Modos de juego', en: 'Game Modes', de: 'Spielmodi', fr: 'Modes de jeu' },
    rulesTitle: { es: 'Cómo se juega', en: 'How to Play', de: 'Spielanleitung', fr: 'Comment jouer' },
    cardValuesTitle: { es: 'Valor de las cartas', en: 'Card Values', de: 'Kartenwerte', fr: 'Valeur des cartes' },
    cardValuesDesc: {
        es: 'El objetivo es tener la menor puntuación posible. Las sotas valen 0: son las mejores cartas que puedes tener.',
        en: 'The goal is to have the lowest score possible. Jacks are worth 0 - the best cards you can hold.',
        de: 'Das Ziel ist es, die niedrigst mögliche Punktzahl zu haben. Buben sind 0 wert - die besten Karten, die du halten kannst.',
        fr: "L'objectif est d'avoir le score le plus bas possible. Les valets valent 0 - les meilleures cartes que tu puisses avoir."
    },
    premiumTitle: { es: 'Suscripción Premium', en: 'Premium Subscription', de: 'Premium-Abonnement', fr: 'Abonnement Premium' },
    premiumDesc: {
        es: 'Desbloquea todo el potencial de Cuatro Sotas. Cuatro niveles con beneficios progresivos, sin compromisos.',
        en: 'Unlock the full potential of Cuatro Sotas. Four tiers with progressive benefits, no commitment.',
        de: 'Schöpfe das volle Potenzial von Cuatro Sotas aus. Vier Stufen mit progressiven Vorteilen, ohne Verpflichtung.',
        fr: 'Libère tout le potentiel de Cuatro Sotas. Quatre niveaux avec des avantages progressifs, sans engagement.'
    },
    premiumRenew: {
        es: 'Las suscripciones se renuevan automáticamente. Cancela en cualquier momento desde Google Play o App Store.',
        en: 'Subscriptions renew automatically. Cancel anytime from Google Play or App Store.',
        de: 'Abonnements verlängern sich automatisch. Jederzeit über Google Play oder App Store kündbar.',
        fr: "Les abonnements se renouvellent automatiquement. Annulez à tout moment via Google Play ou l'App Store."
    },
    statsTitle: {
        es: 'Estadísticas y ranking global',
        en: 'Statistics & Global Rankings',
        de: 'Statistiken & globale Ranglisten',
        fr: 'Statistiques & classements mondiaux'
    },
    statsDesc: {
        es: 'Cada partida suma a tu historial. Tu puntuación acumulada determina tu posición en el ranking mundial: cuanto más negativa, mejor jugador eres.',
        en: 'Every match adds to your history. Your accumulated score determines your world ranking position: the more negative, the better player you are.',
        de: 'Jedes Spiel trägt zu deiner Geschichte bei. Deine akkumulierte Punktzahl bestimmt deine Weltranglistenposition: Je negativer, desto besser bist du.',
        fr: "Chaque partie s'ajoute à ton historique. Ton score accumulé détermine ta position dans le classement mondial : plus il est négatif, meilleur joueur tu es."
    },
    infoTitle: { es: 'Información y soporte', en: 'Information & Support', de: 'Information & Support', fr: 'Informations & support' },
    infoSupport: {
        es: 'Preguntas frecuentes y contacto con nuestro equipo',
        en: 'Frequently asked questions and contact our team',
        de: 'Häufig gestellte Fragen und Kontakt mit unserem Team',
        fr: 'Questions fréquentes et contact avec notre équipe'
    },
    infoPrivacy: {
        es: 'Cómo recopilamos y protegemos tus datos (RGPD)',
        en: 'How we collect and protect your data (GDPR)',
        de: 'Wie wir deine Daten erfassen und schützen (DSGVO)',
        fr: 'Comment nous collectons et protégeons vos données (RGPD)'
    },
    infoTerms: {
        es: 'Condiciones de uso y de la suscripción Premium',
        en: 'Usage conditions and Premium subscription terms',
        de: 'Nutzungsbedingungen und Premium-Abonnementbedingungen',
        fr: "Conditions d'utilisation et termes de l'abonnement Premium"
    },

    // ── How to Play (Turn Steps) ───────────────────────────────────────────
    howToPlayTitle: {
        es: 'Cómo funciona un turno',
        en: 'How a turn works',
        de: 'Wie ein Zug funktioniert',
        fr: 'Comment fonctionne un tour'
    },
    howToPlayDesc: {
        es: 'Cada turno tiene dos fases. La lógica es simple — el equilibrio estratégico no lo es tanto.',
        en: 'Every turn has two phases. The logic is simple — the strategic balance is not.',
        de: 'Jeder Zug hat zwei Phasen. Die Logik ist einfach — das strategische Gleichgewicht nicht.',
        fr: 'Chaque tour a deux phases. La logique est simple — l\'équilibre stratégique ne l\'est pas.'
    },
    step1Title: { es: 'Roba una carta', en: 'Draw a card', de: 'Karte ziehen', fr: 'Piochez une carte' },
    step1Desc: {
        es: 'Roba del mazo (cara oculta) o del descarte (carta superior visible). Tú decides con qué información juegas.',
        en: 'Draw from the deck (face-down) or from the discard pile (top card visible). You choose what information you play with.',
        de: 'Ziehe vom Deck (verdeckt) oder vom Abwurfstapel (oberste Karte sichtbar). Du entscheidest mit welchen Infos du spielst.',
        fr: 'Piochez du deck (face cachée) ou de la défausse (carte du dessus visible). Vous choisissez avec quelles informations jouer.'
    },
    step2Title: { es: 'Intercambia o descarta', en: 'Swap or discard', de: 'Tauschen oder ablegen', fr: 'Échangez ou défaussez' },
    step2Desc: {
        es: 'Intercambia la carta robada con una de tu mano para mejorar tu puntuación, o descártala. Siempre terminas con exactamente 4 cartas.',
        en: 'Swap the drawn card with one in your hand to improve your score, or discard it. You always end with exactly 4 cards.',
        de: 'Tausche die gezogene Karte gegen eine in deiner Hand oder leg sie ab. Du hast immer genau 4 Karten.',
        fr: 'Échangez la carte piochée avec une en main ou défaussez-la. Vous finissez toujours avec exactement 4 cartes.'
    },
    step3Title: { es: '¿Cantas SOTA?', en: 'Call SOTA?', de: 'SOTA rufen?', fr: 'Appelez SOTA ?' },
    step3Desc: {
        es: 'Si crees que tienes menos puntos que tu rival, canta SOTA. Ambos jugadores tienen un turno más, luego se revelan las cartas. El más bajo gana — pero si te equivocas, pierdes la ronda.',
        en: 'If you think you have fewer points than your opponent, call SOTA. Both players get one more turn, then cards are revealed. Lowest score wins — but if you\'re wrong, you lose the round.',
        de: 'Wenn du glaubst weniger Punkte zu haben, rufe SOTA. Beide Spieler bekommen einen weiteren Zug, dann werden Karten aufgedeckt. Niedrigster Score gewinnt — liegst du falsch, verlierst du die Runde.',
        fr: 'Si vous pensez avoir moins de points, appelez SOTA. Les deux joueurs ont un tour de plus, puis les cartes sont révélées. Le score le plus bas gagne — mais si vous avez tort, vous perdez la manche.'
    },

    // ── AI Opponents ──────────────────────────────────────────────────────
    aiTitle: {
        es: 'Un oponente que te desafía de verdad',
        en: 'An opponent that genuinely challenges you',
        de: 'Ein Gegner, der dich wirklich herausfordert',
        fr: 'Un adversaire qui vous défie vraiment'
    },
    aiDesc: {
        es: 'Elige el nivel que encaja con tu ritmo de juego. Desde el modo aprendizaje hasta una IA que recuerda tus cartas.',
        en: 'Choose the level that fits your pace. From learning mode to an AI that remembers your cards.',
        de: 'Wähle das Level passend zu deinem Tempo. Vom Lernmodus bis zu einer KI, die deine Karten kennt.',
        fr: 'Choisissez le niveau qui correspond à votre rythme. Du mode apprentissage à une IA qui mémorise vos cartes.'
    },
    aiEasyName: { es: 'Fácil', en: 'Easy', de: 'Einfach', fr: 'Facile' },
    aiEasyBadge: { es: 'Para aprender', en: 'For learning', de: 'Zum Lernen', fr: 'Pour apprendre' },
    aiEasyDesc: {
        es: 'Comete errores a propósito. Llama SOTA tarde y de forma conservadora. Ideal para aprender las reglas sin presión.',
        en: 'Makes deliberate mistakes. Calls SOTA late and conservatively. Ideal for learning the rules without pressure.',
        de: 'Macht absichtliche Fehler. Ruft SOTA spät und konservativ. Ideal für druckloses Regellernen.',
        fr: 'Fait des erreurs délibérées. Appelle SOTA tardivement. Idéal pour apprendre les règles sans pression.'
    },
    aiMediumName: { es: 'Intermedio', en: 'Intermediate', de: 'Mittel', fr: 'Intermédiaire' },
    aiMediumBadge: { es: 'Equilibrado', en: 'Balanced', de: 'Ausgewogen', fr: 'Équilibré' },
    aiMediumDesc: {
        es: 'Evalúa el promedio de su mano antes de robar. Ajusta el riesgo cuando el mazo escasea. Un reto real.',
        en: 'Evaluates hand average before drawing. Adjusts risk as the deck thins. A genuine challenge.',
        de: 'Bewertet den Handurchschnitt vor dem Ziehen. Passt das Risiko an wenn das Deck dünner wird.',
        fr: 'Évalue la moyenne de sa main avant de piocher. Ajuste le risque quand le deck s\'épuise. Un vrai défi.'
    },
    aiHardName: { es: 'Avanzado', en: 'Advanced', de: 'Fortgeschritten', fr: 'Avancé' },
    aiHardBadge: { es: 'Para expertos', en: 'For experts', de: 'Für Experten', fr: 'Pour les experts' },
    aiHardDesc: {
        es: 'Sistema de memoria de cartas. Llama SOTA agresivamente cuando va perdiendo. El oponente más exigente del juego.',
        en: 'Card memory system. Calls SOTA aggressively when losing. The most demanding opponent in the game.',
        de: 'Kartenspeichersystem. Ruft SOTA aggressiv beim Verlieren. Der anspruchsvollste Gegner im Spiel.',
        fr: 'Système de mémoire des cartes. Appelle SOTA agressivement en perdant. L\'adversaire le plus exigeant du jeu.'
    },

    // ── Achievements Section ──────────────────────────────────────────────
    achievementsTitle: {
        es: 'Logros y progresión',
        en: 'Achievements & Progression',
        de: 'Errungenschaften & Fortschritt',
        fr: 'Succès & Progression'
    },
    achievementsDesc: {
        es: 'Cada partida cuenta. Desbloquea logros desde las primeras victorias hasta hazañas legendarias.',
        en: 'Every match counts. Unlock achievements from your first wins to legendary feats.',
        de: 'Jede Partie zählt. Schalte Errungenschaften von den ersten Siegen bis zu legendären Leistungen frei.',
        fr: 'Chaque partie compte. Débloquez des succès de vos premières victoires à des exploits légendaires.'
    },
    achievementFourSotasDesc: {
        es: 'Gana un partido con las cuatro sotas en la mano.',
        en: 'Win a match with all four Jacks in hand.',
        de: 'Gewinne ein Match mit allen vier Buben in der Hand.',
        fr: 'Gagne un match avec les quatre valets en main.'
    },
    achievementComebackDesc: {
        es: 'Gana un partido estando en desventaja de rondas.',
        en: 'Win a match from behind in rounds.',
        de: 'Gewinne ein Match, obwohl du bei Runden hinten liegst.',
        fr: 'Gagne un match en étant en retard dans les manches.'
    },
    achievementPerfectDesc: {
        es: 'Gana el partido sin perder una sola ronda.',
        en: 'Win the match without losing a single round.',
        de: 'Gewinne das Match ohne eine einzige Runde zu verlieren.',
        fr: 'Gagne le match sans perdre une seule manche.'
    },
    achievementWins250Desc: {
        es: 'Alcanza 250 victorias.',
        en: 'Reach 250 wins.',
        de: 'Erreiche 250 Siege.',
        fr: 'Atteins 250 victoires.'
    },

    // ── FAQ Section ───────────────────────────────────────────────────────
    faqTitle: {
        es: 'Preguntas frecuentes',
        en: 'Frequently Asked Questions',
        de: 'Häufige Fragen',
        fr: 'Questions fréquentes'
    },
    faq1Q: {
        es: '¿Qué es el Guiñote?',
        en: 'What is Guiñote?',
        de: 'Was ist Guiñote?',
        fr: 'Qu\'est-ce que le Guiñote ?'
    },
    faq1A: {
        es: 'El Guiñote es uno de los juegos de cartas tradicionales más populares de España, especialmente en Aragón. Se juega con la baraja española de 40 cartas y el objetivo es tener la menor puntuación posible en la mano. Cuatro Sotas es una variante digital con una mecánica exclusiva: colecciona las cuatro sotas para ganar al instante.',
        en: 'Guiñote is one of the most popular traditional card games in Spain, especially in Aragon. It\'s played with a Spanish 40-card deck and the goal is to have the lowest possible score in hand. Cuatro Sotas is a digital variant with an exclusive mechanic: collect all four Jacks to win instantly.',
        de: 'Guiñote ist eines der beliebtesten traditionellen Kartenspiele Spaniens, besonders in Aragón. Es wird mit einem 40-Karten-Deck gespielt, Ziel ist die niedrigste mögliche Handpunktzahl. Cuatro Sotas ist eine digitale Variante mit einer exklusiven Mechanik: Sammle alle vier Buben für den Sofortsieg.',
        fr: 'Le Guiñote est l\'un des jeux de cartes traditionnels les plus populaires d\'Espagne, surtout en Aragon. Il se joue avec un jeu espagnol de 40 cartes, l\'objectif étant d\'avoir le score le plus bas. Cuatro Sotas est une variante numérique avec une mécanique exclusive : collecte les quatre valets pour gagner instantanément.'
    },
    faq2Q: {
        es: '¿Puedo jugar sin conexión a internet?',
        en: 'Can I play without an internet connection?',
        de: 'Kann ich ohne Internetverbindung spielen?',
        fr: 'Puis-je jouer sans connexion internet ?'
    },
    faq2A: {
        es: 'Sí. El modo contra la IA funciona completamente sin conexión. El multijugador local (Bluetooth y Wi-Fi directo) tampoco requiere internet. Solo el multijugador online necesita conexión.',
        en: 'Yes. AI mode works completely offline. Local multiplayer (Bluetooth and direct Wi-Fi) also requires no internet. Only online multiplayer needs a network connection.',
        de: 'Ja. Der KI-Modus ist vollständig offline. Lokaler Mehrspieler (Bluetooth und direktes Wi-Fi) braucht ebenfalls kein Internet. Nur Online-Mehrspieler benötigt eine Verbindung.',
        fr: 'Oui. Le mode IA fonctionne entièrement hors ligne. Le multijoueur local (Bluetooth et Wi-Fi direct) ne nécessite pas non plus d\'internet. Seul le multijoueur en ligne a besoin d\'une connexion.'
    },
    faq3Q: {
        es: '¿Qué pasa exactamente cuando llamo SOTA?',
        en: 'What exactly happens when I call SOTA?',
        de: 'Was passiert genau, wenn ich SOTA rufe?',
        fr: 'Que se passe-t-il exactement quand j\'appelle SOTA ?'
    },
    faq3A: {
        es: 'La partida entra en fase de último turno. Ambos jugadores tienen un turno más para mejorar su mano. Luego se revelan las cartas: el de menor puntuación gana la ronda. En empate, gana quien NO llamó. Si llamas y el rival tiene menos puntos, pierde la ronda.',
        en: 'The game enters last-turn phase. Both players get one more turn to improve their hand. Then cards are revealed: lowest score wins the round. On a tie, the non-caller wins. If you call and your opponent has fewer points, you lose the round.',
        de: 'Das Spiel tritt in die letzte Zugphase ein. Beide Spieler haben einen weiteren Zug. Dann werden Karten aufgedeckt: der niedrigste Score gewinnt die Runde. Bei Gleichstand gewinnt der Nicht-Rufer. Rufst du und dein Gegner hat weniger Punkte, verlierst du die Runde.',
        fr: 'Le jeu entre en phase de dernier tour. Les deux joueurs ont un tour de plus. Puis les cartes sont révélées : le score le plus bas gagne la manche. En cas d\'égalité, le non-appelant gagne. Si vous appelez et que votre adversaire a moins de points, vous perdez la manche.'
    },
    faq4Q: {
        es: '¿Qué es exactamente la condición de las Cuatro Sotas?',
        en: 'What exactly is the Four Jacks condition?',
        de: 'Was genau ist die Vier-Buben-Bedingung?',
        fr: 'Qu\'est-ce que la condition des Quatre Valets exactement ?'
    },
    faq4A: {
        es: 'Si en cualquier momento tienes las cuatro sotas — la de Oros, Copas, Espadas y Bastos — simultáneamente en la mano, ganas el partido completo de inmediato. Sin importar el marcador de rondas. Esta condición es rara, invaluable y el logro más preciado del juego.',
        en: 'If at any point you hold all four Jacks — Coins, Cups, Swords and Clubs — simultaneously in hand, you instantly win the entire match. Regardless of the round score. This condition is rare, invaluable, and the most prized feat in the game.',
        de: 'Wenn du alle vier Buben — Münzen, Kelche, Schwerter und Stäbe — gleichzeitig in der Hand hast, gewinnst du das gesamte Match sofort. Unabhängig vom Rundenstand. Diese Bedingung ist selten, unschätzbar und die begehrteste Leistung im Spiel.',
        fr: 'Si vous tenez les quatre valets — Pièces, Coupes, Épées et Bâtons — simultanément en main, vous gagnez instantanément le match entier. Quel que soit le score des manches. Cette condition est rare, inestimable et l\'exploit le plus convoité du jeu.'
    },
    faq5Q: {
        es: '¿Cómo funciona el ranking global?',
        en: 'How does the global ranking work?',
        de: 'Wie funktioniert das globale Ranking?',
        fr: 'Comment fonctionne le classement mondial ?'
    },
    faq5A: {
        es: 'El ranking se basa en puntos acumulados entre partidas. Al ganar una ronda, restas tu puntuación de mano (cuanto más negativo, mejor). Al perder, sumas tu puntuación. El jugador con los puntos más negativos lidera el ranking global. Los usuarios Premium tienen multiplicadores de ranking.',
        en: 'The ranking is based on accumulated points across matches. When you win a round, you subtract your hand score (more negative = better). When you lose, you add it. The player with the most negative points leads the global ranking. Premium users have ranking multipliers.',
        de: 'Das Ranking basiert auf kumulierten Punkten über Matches. Beim Rundengewinn subtrahierst du deinen Handscore (negativer = besser). Bei Verlust addierst du ihn. Der negativste Spieler führt das globale Ranking. Premium-Nutzer haben Ranking-Multiplikatoren.',
        fr: 'Le classement est basé sur les points accumulés entre les parties. En gagnant une manche, vous soustrayez votre score de main (plus négatif = mieux). En perdant, vous l\'ajoutez. Le joueur le plus négatif mène le classement mondial. Les utilisateurs Premium ont des multiplicateurs de classement.'
    }
} as const satisfies Record<string, LocalizedValue>;

const supportTranslations = {
    contactTitle: { es: 'Canales de contacto', en: 'Contact Channels', de: 'Kontaktkanäle', fr: 'Canaux de contact' },
    contactDesc: {
        es: 'Estamos aquí para ayudarte. Escríbenos al canal que corresponda a tu consulta.',
        en: "We're here to help. Write to the channel that matches your enquiry.",
        de: 'Wir sind hier, um dir zu helfen. Schreib uns an den Kanal, der zu deiner Anfrage passt.',
        fr: 'Nous sommes ici pour vous aider. Écrivez-nous sur le canal correspondant à votre demande.'
    },
    techSupport: { es: 'Soporte técnico y Privacidad', en: 'Technical Support & Privacy', de: 'Technischer Support & Datenschutz', fr: 'Support technique & Confidentialité' },
    suggestions: { es: 'Sugerencias y Colaboraciones', en: 'Suggestions & Collaborations', de: 'Vorschläge & Kooperationen', fr: 'Suggestions & Collaborations' },
    responseTimes: { es: 'Tiempos de respuesta', en: 'Response Times', de: 'Antwortzeiten', fr: 'Délais de réponse' },
    techSupportTime: { es: 'Soporte técnico', en: 'Technical support', de: 'Technischer Support', fr: 'Support technique' },
    techSupportDesc: {
        es: 'Respondemos en <strong>24-48 horas laborables</strong> a todas las incidencias técnicas.',
        en: 'We respond within <strong>24-48 business hours</strong> to all technical issues.',
        de: 'Wir antworten innerhalb von <strong>24-48 Geschäftsstunden</strong> auf alle technischen Probleme.',
        fr: 'Nous répondons dans les <strong>24-48 heures ouvrables</strong> à tous les problèmes techniques.'
    },
    gdprTime: { es: 'Solicitudes RGPD', en: 'GDPR requests', de: 'DSGVO-Anfragen', fr: 'Demandes RGPD' },
    gdprDesc: {
        es: 'Las solicitudes de ejercicio de derechos se procesan en un <strong>máximo de 30 días</strong>.',
        en: 'Data rights requests are processed within a <strong>maximum of 30 days</strong>.',
        de: 'Datenrechtsanfragen werden innerhalb von <strong>maximal 30 Tagen</strong> bearbeitet.',
        fr: "Les demandes d'exercice de droits sont traitées dans un <strong>délai maximum de 30 jours</strong>."
    },
    suggestionsTime: { es: 'Sugerencias', en: 'Suggestions', de: 'Vorschläge', fr: 'Suggestions' },
    suggestionsDesc: {
        es: 'Las leemos todas y las tenemos en cuenta para las próximas versiones de la app.',
        en: 'We read them all and consider them for upcoming versions of the app.',
        de: 'Wir lesen sie alle und berücksichtigen sie für kommende App-Versionen.',
        fr: "Nous les lisons toutes et les prenons en compte pour les prochaines versions de l'application."
    },
    faqGameTitle: { es: 'Preguntas frecuentes - El juego', en: 'FAQ - The game', de: 'FAQ - Das Spiel', fr: 'FAQ - Le jeu' },
    faqAccountTitle: { es: 'Preguntas frecuentes - Cuenta y Premium', en: 'FAQ - Account & Premium', de: 'FAQ - Konto & Premium', fr: 'FAQ - Compte & Premium' },
    faqPrivacyTitle: { es: 'Preguntas frecuentes - Privacidad', en: 'FAQ - Privacy', de: 'FAQ - Datenschutz', fr: 'FAQ - Confidentialité' },
    legalDocs: { es: 'Documentos legales', en: 'Legal Documents', de: 'Rechtliche Dokumente', fr: 'Documents légaux' },
    privacyPolicyTitle: { es: 'Política de Privacidad', en: 'Privacy Policy', de: 'Datenschutzerklärung', fr: 'Politique de Confidentialité' },
    privacyPolicyDesc: {
        es: 'Cómo gestionamos tus datos (RGPD)',
        en: 'How we manage your data (GDPR)',
        de: 'Wie wir deine Daten verwalten (DSGVO)',
        fr: 'Comment nous gérons vos données (RGPD)'
    },
    termsTitle: { es: 'Términos de Servicio', en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: "Conditions d'utilisation" },
    termsDesc: {
        es: 'Condiciones de uso y Premium',
        en: 'Usage conditions and Premium terms',
        de: 'Nutzungsbedingungen und Premium',
        fr: "Conditions d'utilisation et Premium"
    }
} as const satisfies Record<string, LocalizedValue>;

const legalCommonTranslations = {
    back: { es: '<- Volver al inicio', en: '<- Back to home', de: '<- Zurück zur Startseite', fr: "<- Retour à l'accueil" }
} as const satisfies Record<string, LocalizedValue>;

const privacyTranslations = {
    title: { es: 'Política de Privacidad', en: 'Privacy Policy', de: 'Datenschutzerklärung', fr: 'Politique de Confidentialité' },
    subtitle: {
        es: 'Información transparente sobre cómo recopilamos, usamos y protegemos tus datos personales, conforme al RGPD.',
        en: 'Transparent information about how we collect, use and protect your personal data, in compliance with GDPR.',
        de: 'Transparente Informationen darüber, wie wir deine personenbezogenen Daten im Einklang mit der DSGVO erheben, verwenden und schützen.',
        fr: 'Informations transparentes sur la façon dont nous collectons, utilisons et protégeons vos données personnelles, conformément au RGPD.'
    },
    updated: { es: 'Última actualización: 25 de mayo de 2026', en: 'Last updated: May 25, 2026', de: 'Letzte Aktualisierung: 25. Mai 2026', fr: 'Dernière mise à jour : 25 mai 2026' }
} as const satisfies Record<string, LocalizedValue>;

const termsTranslations = {
    title: { es: 'Términos de Servicio', en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: "Conditions d'utilisation" },
    subtitle: {
        es: 'Condiciones de uso de la aplicación y de los servicios de suscripción Premium.',
        en: 'Conditions of use of the application and Premium subscription services.',
        de: 'Nutzungsbedingungen der Anwendung und der Premium-Abonnementdienste.',
        fr: "Conditions d'utilisation de l'application et des services d'abonnement Premium."
    },
    updated: { es: 'Última actualización: 25 de mayo de 2026', en: 'Last updated: May 25, 2026', de: 'Letzte Aktualisierung: 25. Mai 2026', fr: 'Dernière mise à jour : 25 mai 2026' }
} as const satisfies Record<string, LocalizedValue>;

const notFoundTranslations = {
    title: { es: 'Página no encontrada', en: 'Page not found', de: 'Seite nicht gefunden', fr: 'Page introuvable' },
    desc: { es: 'Volvamos al inicio.', en: "Let's go back home.", de: 'Lass uns zur Startseite gehen.', fr: "Retournons à l'accueil." },
    cta: { es: '<- Volver al inicio', en: '<- Back to home', de: '<- Zurück zur Startseite', fr: "<- Retour à l'accueil" }
} as const satisfies Record<string, LocalizedValue>;

const cookieBannerTranslations = {
    message: {
        es: 'Usamos cookies esenciales y de analítica para mejorar la experiencia en Cuatro Sotas. Puedes aceptarlas o seguir solo con las esenciales.',
        en: 'We use essential and optional analytics cookies to improve your experience in Cuatro Sotas. You can accept them or continue with essentials only.',
        de: 'Wir verwenden essenzielle und optionale Analyse-Cookies für Cuatro Sotas. Sie können diese akzeptieren oder nur mit den essenziellen fortfahren.',
        fr: "Nous utilisons des cookies essentiels et d'analyse pour améliorer votre expérience sur Cuatro Sotas. Vous pouvez les accepter ou continuer avec les essentiels."
    },
    acceptAll: { es: 'Aceptar todas', en: 'Accept all', de: 'Alle akzeptieren', fr: 'Tout accepter' },
    reject: { es: 'Solo necesarias', en: 'Essentials only', de: 'Nur notwendige', fr: 'Nécessaires seulement' },
    moreInfo: { es: 'Más info', en: 'More Info', de: 'Mehr Info', fr: "Plus d'infos" },
    ariaLabel: { es: 'Consentimiento de cookies', en: 'Cookie consent', de: 'Cookie-Einwilligung', fr: 'Consentement aux cookies' }
} as const satisfies Record<string, LocalizedValue>;

const cookiesPageTranslations = {
    title: { es: 'Política de Cookies', en: 'Cookie Policy', de: 'Cookie-Richtlinie', fr: 'Politique de Cookies' },
    subtitle: {
        es: 'Cómo usamos cookies y tecnologías similares en Cuatro Sotas.',
        en: 'How we use cookies and similar technologies in Cuatro Sotas.',
        de: 'Wie wir Cookies und ähnliche Technologien in Cuatro Sotas verwenden.',
        fr: 'Comment nous utilisons les cookies et technologies similaires dans Cuatro Sotas.'
    },
    updated: { es: 'Última actualización: 25 de mayo de 2026', en: 'Last updated: May 25, 2026', de: 'Letzte Aktualisierung: 25. Mai 2026', fr: 'Dernière mise à jour : 25 mai 2026' }
} as const satisfies Record<string, LocalizedValue>;

function toNamespace<T extends Record<string, LocalizedValue>>(translations: T, locale: Locale): Namespace<T> {
    const namespace = {} as Namespace<T>;

    for (const [key, values] of Object.entries(translations) as Array<[keyof T, T[keyof T]]>) {
        namespace[key] = (values[locale] ?? values.en) as Namespace<T>[keyof T];
    }

    return namespace;
}

export interface CuatroSotasMessages {
    common: Namespace<typeof commonTranslations>;
    nav: Namespace<typeof navTranslations>;
    footer: Namespace<typeof footerTranslations>;
    home: Namespace<typeof homeTranslations>;
    support: Namespace<typeof supportTranslations>;
    legalCommon: Namespace<typeof legalCommonTranslations>;
    privacy: Namespace<typeof privacyTranslations>;
    terms: Namespace<typeof termsTranslations>;
    notFound: Namespace<typeof notFoundTranslations>;
    cookieBanner: Namespace<typeof cookieBannerTranslations>;
    cookies: Namespace<typeof cookiesPageTranslations>;
}

function resolveLocale(locale: string): Locale {
    return routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale;
}

export function getLocaleMessages(locale: string): CuatroSotasMessages {
    const currentLocale = resolveLocale(locale);

    return {
        common: toNamespace(commonTranslations, currentLocale),
        nav: toNamespace(navTranslations, currentLocale),
        footer: toNamespace(footerTranslations, currentLocale),
        home: toNamespace(homeTranslations, currentLocale),
        support: toNamespace(supportTranslations, currentLocale),
        legalCommon: toNamespace(legalCommonTranslations, currentLocale),
        privacy: toNamespace(privacyTranslations, currentLocale),
        terms: toNamespace(termsTranslations, currentLocale),
        notFound: toNamespace(notFoundTranslations, currentLocale),
        cookieBanner: toNamespace(cookieBannerTranslations, currentLocale),
        cookies: toNamespace(cookiesPageTranslations, currentLocale)
    };
}
