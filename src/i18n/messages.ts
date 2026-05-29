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
    updated: { es: 'Última actualización: 25 de mayo de 2026', en: 'Last updated: May 25, 2026', de: 'Letzte Aktualisierung: 25. Mai 2026', fr: 'Dernière mise à jour : 25 mai 2026' },
    // Section 1
    s1Title: { es: '1. ¿Qué son las cookies?', en: '1. What are cookies?', de: '1. Was sind Cookies?', fr: '1. Que sont les cookies ?' },
    s1Desc: {
        es: 'Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo para recordar información y mejorar tu experiencia de navegación.',
        en: 'Cookies are small text files that websites store on your device to remember information and improve your browsing experience.',
        de: 'Cookies sind kleine Textdateien, die Websites auf Ihrem Gerät speichern, um Informationen zu merken und Ihr Nutzungserlebnis zu verbessern.',
        fr: 'Les cookies sont de petits fichiers texte que les sites web stockent sur votre appareil pour mémoriser des informations et améliorer votre expérience de navigation.'
    },
    // Section 2
    s2Title: { es: '2. Cookies que usamos', en: '2. Cookies we use', de: '2. Von uns verwendete Cookies', fr: '2. Cookies que nous utilisons' },
    s2EssentialTitle: { es: 'Cookies esenciales', en: 'Essential cookies', de: 'Essenzielle Cookies', fr: 'Cookies essentiels' },
    s2EssentialDesc: {
        es: 'Necesarias para el funcionamiento básico de la web. No requieren consentimiento.',
        en: 'Required for basic website functionality. They do not require consent.',
        de: 'Für die grundlegende Funktionalität der Website erforderlich. Kein Einverständnis nötig.',
        fr: 'Nécessaires au fonctionnement de base du site. Ils ne nécessitent pas de consentement.'
    },
    s2AnalyticsTitle: { es: 'Cookies de analítica', en: 'Analytics', de: 'Analyse', fr: 'Analyse' },
    s2AnalyticsDesc: {
        es: 'Usamos <strong>Vercel Analytics</strong> con un enfoque sin cookies que deriva información agregada sin almacenar identificadores personales. No requiere consentimiento.',
        en: 'We use <strong>Vercel Analytics</strong> with a cookieless approach that derives aggregated insights without storing personal identifiers. No consent is required.',
        de: 'Wir nutzen <strong>Vercel Analytics</strong> ohne Cookies, das aggregierte Erkenntnisse ohne persönliche Identifikatoren gewinnt. Kein Einverständnis erforderlich.',
        fr: 'Nous utilisons <strong>Vercel Analytics</strong> sans cookies, qui dérive des informations agrégées sans stocker d\'identifiants personnels. Aucun consentement n\'est requis.'
    },
    s2AdsTitle: { es: 'Identificadores de publicidad (solo en la app)', en: 'Advertising identifiers (app only)', de: 'Werbe-IDs (nur in der App)', fr: 'Identifiants publicitaires (application uniquement)' },
    s2AdsDesc: {
        es: 'En la aplicación móvil, con tu consentimiento, podemos usar identificadores de publicidad del dispositivo para personalizar anuncios. Puedes gestionar este acceso desde los ajustes de tu dispositivo.',
        en: 'In the mobile app, with your consent, we may use device advertising identifiers for ad personalisation. You can manage this access from your device settings.',
        de: 'In der mobilen App können wir mit Ihrer Einwilligung Geräte-Werbe-IDs zur Anzeigenpersonalisierung verwenden. Diese können Sie in den Geräteeinstellungen verwalten.',
        fr: 'Dans l\'application mobile, avec votre consentement, nous pouvons utiliser les identifiants publicitaires de l\'appareil. Vous pouvez gérer cet accès depuis les paramètres de votre appareil.'
    },
    // Section 3
    s3Title: { es: '3. Tu control', en: '3. Your control', de: '3. Ihre Kontrolle', fr: '3. Votre contrôle' },
    s3Desc: {
        es: 'Puedes gestionar tus preferencias de cookies en cualquier momento desde el banner de cookies o desde la configuración de tu dispositivo. Ten en cuenta que bloquear las cookies esenciales puede afectar al funcionamiento de la web.',
        en: 'You can manage your cookie preferences at any time via the cookie banner or your device settings. Note that blocking essential cookies may affect website functionality.',
        de: 'Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Banner oder Ihre Geräteeinstellungen verwalten.',
        fr: 'Vous pouvez gérer vos préférences de cookies à tout moment via la bannière ou les paramètres de votre appareil.'
    },
    // Section 4
    s4Title: { es: '4. Contacto', en: '4. Contact', de: '4. Kontakt', fr: '4. Contact' },
    s4Desc: {
        es: 'Para cualquier consulta sobre nuestra política de cookies, escríbenos a <link>support@cojauny.com</link>.',
        en: 'For any questions about our cookie policy, write to us at <link>support@cojauny.com</link>.',
        de: 'Bei Fragen zu unserer Cookie-Richtlinie schreiben Sie uns an <link>support@cojauny.com</link>.',
        fr: 'Pour toute question sur notre politique de cookies, écrivez-nous à <link>support@cojauny.com</link>.'
    }
} as const satisfies Record<string, LocalizedValue>;

// ─── Privacy page body content ────────────────────────────────────────────────
const privacyContentTranslations = {
    // Section 1
    s1Title: { es: '1. Introducción', en: '1. Data Controller', de: '1. Verantwortlicher', fr: '1. Responsable du traitement' },
    s1DescEs: {
        es: 'Bienvenido a <strong>Cuatro Sotas</strong>, desarrollada por <strong>Cojauny</strong>. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información personal de conformidad con el Reglamento General de Protección de Datos (RGPD) y la normativa española aplicable.',
        en: 'Bienvenido a <strong>Cuatro Sotas</strong>, desarrollada por <strong>Cojauny</strong>.',
        de: 'Bienvenido a <strong>Cuatro Sotas</strong>, desarrollada por <strong>Cojauny</strong>.',
        fr: 'Bienvenido a <strong>Cuatro Sotas</strong>, desarrollada por <strong>Cojauny</strong>.'
    },
    s1Desc: {
        es: 'Responsable: <strong>Cojauny</strong>. Contacto: <a href="mailto:support@cojauny.com">support@cojauny.com</a>. País: España.',
        en: 'Controller: <strong>Cojauny</strong>. Contact: <a href="mailto:support@cojauny.com">support@cojauny.com</a>. Country: Spain.',
        de: 'Verantwortlicher: <strong>Cojauny</strong>. Kontakt: <a href="mailto:support@cojauny.com">support@cojauny.com</a>. Land: Spanien.',
        fr: 'Responsable : <strong>Cojauny</strong>. Contact : <a href="mailto:support@cojauny.com">support@cojauny.com</a>. Pays : Espagne.'
    },
    s1Warning: {
        es: 'Al utilizar la App, aceptas la recopilación y uso de información de acuerdo con esta política.',
        en: 'By using the App, you confirm you have read this privacy policy.',
        de: 'Mit der Nutzung der App bestätigen Sie, diese Datenschutzerklärung gelesen zu haben.',
        fr: 'En utilisant l\'App, vous confirmez avoir pris connaissance de cette politique de confidentialité.'
    },
    // Section 2
    s2Title: { es: '2. Información que recopilamos', en: '2. Data We Collect', de: '2. Erhobene Daten', fr: '2. Données collectées' },
    s2AccountTitle: { es: '2.1 Información de cuenta', en: '2.1 Account information', de: '2.1 Kontodaten', fr: '2.1 Données de compte' },
    s2AccountEmail: {
        es: '<strong>Correo electrónico:</strong> para identificar tu cuenta',
        en: '<strong>Email:</strong> to identify your account',
        de: '<strong>E-Mail:</strong> zur Kontoidentifikation',
        fr: '<strong>E-mail :</strong> pour identifier votre compte'
    },
    s2AccountName: {
        es: '<strong>Nombre de perfil:</strong> para mostrar en rankings',
        en: '<strong>Display name:</strong> shown in rankings',
        de: '<strong>Anzeigename:</strong> für Ranglisten',
        fr: '<strong>Nom d\'affichage :</strong> affiché dans les classements'
    },
    s2AccountPhoto: {
        es: '<strong>Foto de perfil:</strong> opcional, para personalización',
        en: '<strong>Profile photo:</strong> optional, for personalisation',
        de: '<strong>Profilbild:</strong> optional, zur Personalisierung',
        fr: '<strong>Photo de profil :</strong> optionnelle, pour la personnalisation'
    },
    s2GameTitle: { es: '2.2 Datos de juego', en: '2.2 Game data', de: '2.2 Spieldaten', fr: '2.2 Données de jeu' },
    s2GameStats: {
        es: 'Estadísticas de partidas (victorias, derrotas, puntuación)',
        en: 'Match statistics (wins, losses, score)',
        de: 'Spielstatistiken (Siege, Niederlagen, Punkte)',
        fr: 'Statistiques de parties (victoires, défaites, score)'
    },
    s2GameHistory: {
        es: 'Historial de partidas y preferencias de configuración',
        en: 'Match history and configuration preferences',
        de: 'Spielverlauf und Konfigurationseinstellungen',
        fr: 'Historique des parties et préférences de configuration'
    },
    s2TechTitle: { es: '2.3 Información técnica', en: '2.3 Technical information', de: '2.3 Technische Informationen', fr: '2.3 Informations techniques' },
    s2TechDevice: {
        es: 'Tipo de dispositivo y sistema operativo',
        en: 'Device type and operating system',
        de: 'Gerätetyp und Betriebssystem',
        fr: 'Type d\'appareil et système d\'exploitation'
    },
    s2TechAds: {
        es: 'Identificadores de publicidad (con consentimiento)',
        en: 'Advertising identifiers (with consent)',
        de: 'Werbeidentifikatoren (mit Einwilligung)',
        fr: 'Identifiants publicitaires (avec consentement)'
    },
    s2TechDiag: {
        es: 'Datos de diagnóstico y errores de la aplicación',
        en: 'Diagnostic data and application errors',
        de: 'Diagnosedaten und Anwendungsfehler',
        fr: 'Données de diagnostic et erreurs de l\'application'
    },
    s2TechAnalytics: {
        es: 'Datos de uso agregados recopilados mediante Firebase Analytics',
        en: 'Aggregated usage data collected via Firebase Analytics',
        de: 'Aggregierte Nutzungsdaten über Firebase Analytics',
        fr: 'Données d\'utilisation agrégées via Firebase Analytics'
    },
    s2PremiumTitle: { es: '2.4 Compras y suscripciones Premium', en: '2.4 Purchases and Premium subscriptions', de: '2.4 Käufe und Premium-Abonnements', fr: '2.4 Achats et abonnements Premium' },
    s2PremiumLevel: {
        es: 'Nivel de suscripción (Bronce, Plata, Oro, Legendaria) y fecha de expiración',
        en: 'Subscription tier (Bronze, Silver, Gold, Legendary) and expiry date',
        de: 'Abonnement-Stufe (Bronze, Silber, Gold, Legendär) und Ablaufdatum',
        fr: 'Niveau d\'abonnement (Bronze, Argent, Or, Légendaire) et date d\'expiration'
    },
    s2PremiumHistory: {
        es: 'Historial de compras de consumibles',
        en: 'Consumable purchase history',
        de: 'Kaufhistorie für Verbrauchsgüter',
        fr: 'Historique des achats consommables'
    },
    s2PremiumPayment: {
        es: '<strong>No almacenamos datos de pago</strong> — el procesamiento lo realiza Google Play o Apple App Store',
        en: '<strong>We do not store payment data</strong> — processing is handled by Google Play or Apple App Store',
        de: '<strong>Wir speichern keine Zahlungsdaten</strong> — die Verarbeitung erfolgt durch Google Play oder Apple App Store',
        fr: '<strong>Nous ne stockons pas les données de paiement</strong> — le traitement est assuré par Google Play ou Apple App Store'
    },
    // Section 3
    s3Title: { es: '3. Cómo usamos tu información', en: '3. How We Use Your Data', de: '3. Verwendung Ihrer Daten', fr: '3. Utilisation de vos données' },
    s3Col1: { es: 'Propósito', en: 'Purpose', de: 'Zweck', fr: 'Finalité' },
    s3Col2: { es: 'Base legal', en: 'Legal Basis', de: 'Rechtsgrundlage', fr: 'Base légale' },
    s3Row1Purpose: { es: 'Proporcionar acceso a la App', en: 'Provide and maintain the service', de: 'Dienst bereitstellen und aufrechterhalten', fr: 'Fournir et maintenir le service' },
    s3Row1Basis: { es: 'Ejecución del contrato', en: 'Contract performance', de: 'Vertragserfüllung', fr: 'Exécution du contrat' },
    s3Row2Purpose: { es: 'Guardar progreso y estadísticas', en: 'Save progress and statistics', de: 'Fortschritt und Statistiken speichern', fr: 'Enregistrer la progression et les statistiques' },
    s3Row2Basis: { es: 'Interés legítimo', en: 'Legitimate interest', de: 'Berechtigtes Interesse', fr: 'Intérêt légitime' },
    s3Row3Purpose: { es: 'Mostrar anuncios', en: 'Display ads', de: 'Werbung anzeigen', fr: 'Afficher des publicités' },
    s3Row3Basis: { es: 'Consentimiento', en: 'Consent', de: 'Einwilligung', fr: 'Consentement' },
    s3Row4Purpose: { es: 'Procesar suscripciones y beneficios premium', en: 'Manage subscriptions and Premium benefits', de: 'Abonnements und Premium-Vorteile verwalten', fr: 'Gérer les abonnements et avantages Premium' },
    s3Row4Basis: { es: 'Ejecución del contrato', en: 'Contract performance', de: 'Vertragserfüllung', fr: 'Exécution du contrat' },
    s3Row5Purpose: { es: 'Análisis de uso y mejora de la App', en: 'Analytics and product improvement', de: 'Analyse und Produktverbesserung', fr: 'Analyse et amélioration du produit' },
    s3Row5Basis: { es: 'Interés legítimo', en: 'Legitimate interest', de: 'Berechtigtes Interesse', fr: 'Intérêt légitime' },
    // Section 4
    s4Title: { es: '4. Servicios de terceros', en: '4. Third-Party Services', de: '4. Dienste von Drittanbietern', fr: '4. Services tiers' },
    s4FirebaseLi: {
        es: '<strong>Firebase (Google):</strong> Autenticación, base de datos en la nube y análisis de uso. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Política de privacidad de Firebase</a>',
        en: '<strong>Firebase (Google):</strong> Authentication, cloud database, analytics. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase Privacy Policy</a>',
        de: '<strong>Firebase (Google):</strong> Authentifizierung, Cloud-Datenbank, Analysen. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase Datenschutzerklärung</a>',
        fr: '<strong>Firebase (Google) :</strong> Authentification, base de données cloud, analyses. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Politique de confidentialité Firebase</a>'
    },
    s4AdmobLi: {
        es: '<strong>Google AdMob:</strong> Publicidad personalizada. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de privacidad de Google</a>',
        en: '<strong>Google AdMob:</strong> Personalised advertising for free users. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a> · <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener">AdMob data</a>',
        de: '<strong>Google AdMob:</strong> Personalisierte Werbung für kostenlose Nutzer. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Datenschutzerklärung</a> · <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener">AdMob-Daten</a>',
        fr: '<strong>Google AdMob :</strong> Publicité personnalisée pour les utilisateurs gratuits. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Politique de confidentialité Google</a> · <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener">Données AdMob</a>'
    },
    s4StoreLi: {
        es: '<strong>Google Play / Apple App Store:</strong> Procesamiento seguro de compras y suscripciones',
        en: '<strong>Google Play / Apple App Store:</strong> Secure purchase and subscription processing',
        de: '<strong>Google Play / Apple App Store:</strong> Sichere Kauf- und Abonnementabwicklung',
        fr: '<strong>Google Play / Apple App Store :</strong> Traitement sécurisé des achats et abonnements'
    },
    s4TrackingIntro: {
        es: 'La App utiliza Firebase Analytics para recopilar datos de uso de forma agregada y anónima. Los usuarios que consientan podrán recibir anuncios personalizados mediante Google AdMob.',
        en: 'These providers may collect data under their own policies. Where applicable, you can manage consent in the App\'s privacy settings.',
        de: 'Diese Anbieter können Daten gemäß ihren eigenen Richtlinien erheben. Sie können die Einwilligung ggf. in den Datenschutzeinstellungen der App verwalten.',
        fr: 'Ces fournisseurs peuvent collecter des données selon leurs propres politiques. Le cas échéant, vous pouvez gérer le consentement dans les paramètres de confidentialité de l\'App.'
    },
    s4CookiesTitle: { es: 'Cookies y tecnologías de seguimiento', en: 'Cookies and tracking technologies', de: 'Cookies und Tracking-Technologien', fr: 'Cookies et technologies de suivi' },
    // Section 5
    s5Title: { es: '5. Suscripciones Premium', en: '5. Premium Subscriptions', de: '5. Premium-Abonnements', fr: '5. Abonnements Premium' },
    s5Intro: {
        es: 'Ofrecemos cuatro niveles: <strong>Bronce</strong>, <strong>Plata</strong>, <strong>Oro</strong> y <strong>Legendaria</strong>.',
        en: 'We offer four tiers: <strong>Bronze</strong>, <strong>Silver</strong>, <strong>Gold</strong> and <strong>Legendary</strong>.',
        de: 'Wir bieten vier Stufen an: <strong>Bronze</strong>, <strong>Silber</strong>, <strong>Gold</strong> und <strong>Legendär</strong>.',
        fr: 'Nous proposons quatre niveaux : <strong>Bronze</strong>, <strong>Argent</strong>, <strong>Or</strong> et <strong>Légendaire</strong>.'
    },
    s5Renew: {
        es: 'Las suscripciones se renuevan automáticamente al final de cada periodo',
        en: 'Subscriptions renew automatically at the end of each period',
        de: 'Abonnements verlängern sich automatisch am Ende jedes Zeitraums',
        fr: 'Les abonnements se renouvellent automatiquement à la fin de chaque période'
    },
    s5Cancel: {
        es: 'Puedes cancelar en cualquier momento desde Google Play o App Store',
        en: 'You can cancel at any time from Google Play or App Store',
        de: 'Sie können jederzeit über Google Play oder den App Store kündigen',
        fr: 'Vous pouvez annuler à tout moment via Google Play ou l\'App Store'
    },
    s5Store: {
        es: 'Almacenamos tu nivel de suscripción y fecha de expiración para proporcionarte los beneficios',
        en: 'We store your subscription tier and expiry date to provide the corresponding benefits',
        de: 'Wir speichern Ihre Abonnement-Stufe und das Ablaufdatum, um die entsprechenden Vorteile bereitzustellen',
        fr: 'Nous conservons votre niveau d\'abonnement et la date d\'expiration pour fournir les avantages correspondants'
    },
    // Section 6
    s6Title: { es: '6. Tus derechos', en: '6. Your Rights', de: '6. Ihre Rechte', fr: '6. Vos droits' },
    s6Intro: {
        es: 'Conforme al RGPD, tienes derecho a:',
        en: 'Under GDPR, you have the right to:',
        de: 'Gemäß DSGVO haben Sie das Recht auf:',
        fr: 'En vertu du RGPD, vous avez le droit à :'
    },
    s6Access: { es: '<strong>Acceso:</strong> solicitar una copia de tus datos personales', en: '<strong>Access:</strong> request a copy of your personal data', de: '<strong>Auskunft:</strong> Kopie Ihrer personenbezogenen Daten anfordern', fr: '<strong>Accès :</strong> demander une copie de vos données personnelles' },
    s6Rectify: { es: '<strong>Rectificación:</strong> corregir datos inexactos o incompletos', en: '<strong>Rectification:</strong> correct inaccurate or incomplete data', de: '<strong>Berichtigung:</strong> unrichtige oder unvollständige Daten korrigieren', fr: '<strong>Rectification :</strong> corriger des données inexactes ou incomplètes' },
    s6Erase: { es: '<strong>Supresión:</strong> solicitar la eliminación de tus datos', en: '<strong>Erasure:</strong> request deletion of your data', de: '<strong>Löschung:</strong> Löschung Ihrer Daten beantragen', fr: '<strong>Suppression :</strong> demander la suppression de vos données' },
    s6Portability: { es: '<strong>Portabilidad:</strong> recibir tus datos en formato legible', en: '<strong>Portability:</strong> receive your data in a structured, readable format', de: '<strong>Portabilität:</strong> Daten in einem strukturierten, lesbaren Format erhalten', fr: '<strong>Portabilité :</strong> recevoir vos données dans un format lisible' },
    s6Object: { es: '<strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo', en: '<strong>Objection:</strong> object to processing based on legitimate interest', de: '<strong>Widerspruch:</strong> Verarbeitung aufgrund berechtigten Interesses widersprechen', fr: '<strong>Opposition :</strong> vous opposer au traitement fondé sur l\'intérêt légitime' },
    s6Restrict: { es: '<strong>Limitación:</strong> solicitar la restricción del tratamiento', en: '<strong>Restriction:</strong> request restriction of processing', de: '<strong>Einschränkung:</strong> Einschränkung der Verarbeitung beantragen', fr: '<strong>Limitation :</strong> demander la restriction du traitement' },
    s6Contact: {
        es: 'Para ejercer cualquiera de estos derechos: <a href="mailto:support@cojauny.com">support@cojauny.com</a>. Respondemos en un plazo máximo de 30 días.',
        en: 'To exercise these rights: <a href="mailto:support@cojauny.com">support@cojauny.com</a>. We respond within 30 days. You may also file a complaint with the AEPD: <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>.',
        de: 'Zur Ausübung dieser Rechte: <a href="mailto:support@cojauny.com">support@cojauny.com</a>. Wir antworten innerhalb von 30 Tagen. Sie können auch bei der Datenschutzbehörde Ihres Landes Beschwerde einlegen.',
        fr: 'Pour exercer ces droits : <a href="mailto:support@cojauny.com">support@cojauny.com</a>. Nous répondons dans les 30 jours. Vous pouvez également déposer une plainte auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>.'
    },
    // Section 7
    s7Title: { es: '7. Retención de datos', en: '7. Data Retention', de: '7. Datenspeicherung', fr: '7. Conservation des données' },
    s7Account: {
        es: '<strong>Datos de cuenta y juego:</strong> mientras tu cuenta permanezca activa',
        en: '<strong>Account and game data:</strong> while your account remains active',
        de: '<strong>Konto- und Spieldaten:</strong> solange Ihr Konto aktiv ist',
        fr: '<strong>Données de compte et de jeu :</strong> tant que votre compte reste actif'
    },
    s7Sub: {
        es: '<strong>Datos de suscripción:</strong> durante la vigencia del contrato y hasta 3 años después para cumplimiento fiscal',
        en: '<strong>Subscription data:</strong> during the contract and up to 3 years after for fiscal compliance',
        de: '<strong>Abonnementdaten:</strong> während der Vertragslaufzeit und bis zu 3 Jahre danach für steuerliche Zwecke',
        fr: '<strong>Données d\'abonnement :</strong> pendant la durée du contrat et jusqu\'à 3 ans après pour conformité fiscale'
    },
    s7Diag: {
        es: '<strong>Datos de diagnóstico:</strong> máximo 90 días desde su recopilación',
        en: '<strong>Diagnostics data:</strong> maximum 90 days from collection',
        de: '<strong>Diagnosedaten:</strong> maximal 90 Tage ab Erhebung',
        fr: '<strong>Données de diagnostic :</strong> maximum 90 jours à compter de la collecte'
    },
    s7Delete: {
        es: '<strong>Tras eliminar tu cuenta:</strong> eliminación completa en un plazo máximo de 30 días, salvo obligación legal',
        en: '<strong>After account deletion:</strong> complete deletion within 30 days, except where legally required',
        de: '<strong>Nach Kontolöschung:</strong> vollständige Löschung innerhalb von 30 Tagen, außer gesetzlich vorgeschrieben',
        fr: '<strong>Après suppression du compte :</strong> suppression complète dans les 30 jours, sauf obligation légale'
    },
    // Section 8
    s8Title: { es: '8. Seguridad', en: '8. Security', de: '8. Sicherheit', fr: '8. Sécurité' },
    s8Https: { es: 'Comunicaciones cifradas mediante HTTPS/TLS', en: 'Encrypted communications via HTTPS/TLS', de: 'Verschlüsselte Kommunikation über HTTPS/TLS', fr: 'Communications chiffrées via HTTPS/TLS' },
    s8Auth: { es: 'Autenticación segura a través de Google Sign-In', en: 'Secure authentication via Google Sign-In', de: 'Sichere Authentifizierung über Google Sign-In', fr: 'Authentification sécurisée via Google Sign-In' },
    s8Firestore: { es: 'Reglas de seguridad en base de datos Firestore', en: 'Firestore security rules', de: 'Firestore-Sicherheitsregeln', fr: 'Règles de sécurité Firestore' },
    s8Disclaimer: {
        es: 'Aunque aplicamos medidas técnicas y organizativas adecuadas, ningún sistema es completamente seguro. En caso de brecha de seguridad, te notificaremos conforme al RGPD.',
        en: 'We apply reasonable technical and organisational measures. No system is completely secure. In the event of a security breach, we will notify you as required by GDPR.',
        de: 'Wir treffen angemessene technische und organisatorische Maßnahmen. Kein System ist vollständig sicher. Im Falle einer Datenpanne benachrichtigen wir Sie gemäß DSGVO.',
        fr: 'Nous appliquons des mesures techniques et organisationnelles raisonnables. Aucun système n\'est totalement sécurisé. En cas de violation, nous vous notifierons conformément au RGPD.'
    },
    // Section 9
    s9Title: { es: '9. Menores de edad', en: '9. Children', de: '9. Minderjährige', fr: '9. Mineurs' },
    s9Desc: {
        es: 'Esta App <strong>no está dirigida a menores de 13 años</strong>. Si detectamos que hemos recopilado datos de un menor sin el consentimiento parental adecuado, los eliminaremos inmediatamente.',
        en: 'The App is <strong>not directed to children under 13</strong> (or under 16 in some EU member states). If we become aware that we have collected data from a minor without appropriate parental consent, we will delete it immediately.',
        de: 'Die App richtet sich <strong>nicht an Kinder unter 13 Jahren</strong> (in einigen EU-Mitgliedstaaten unter 16). Sobald wir erfahren, dass wir Daten eines Minderjährigen ohne elterliche Einwilligung erhoben haben, löschen wir diese unverzüglich.',
        fr: 'L\'App n\'est <strong>pas destinée aux enfants de moins de 13 ans</strong> (ou 16 ans dans certains États membres de l\'UE). Si nous apprenons avoir collecté des données d\'un mineur sans consentement parental, nous les supprimerons immédiatement.'
    },
    // Section 10
    s10Title: { es: '10. Cambios en esta política', en: '10. Changes to This Policy', de: '10. Änderungen dieser Richtlinie', fr: '10. Modifications de cette politique' },
    s10Desc: {
        es: 'Podemos actualizar esta política ocasionalmente. Te notificaremos cualquier cambio significativo mediante una notificación en la App o por correo electrónico. La fecha de "Última actualización" siempre refleja la versión vigente.',
        en: 'We may update this policy occasionally. We will notify you of significant changes via an in-app notification or email. The effective date at the top always reflects the current version.',
        de: 'Wir können diese Richtlinie gelegentlich aktualisieren. Über wesentliche Änderungen informieren wir Sie per In-App-Benachrichtigung oder E-Mail. Das Datum oben gibt immer die aktuelle Version an.',
        fr: 'Nous pouvons mettre à jour cette politique occasionnellement. Nous vous informerons des changements importants par notification dans l\'App ou par e-mail. La date en haut reflète toujours la version en vigueur.'
    }
} as const satisfies Record<string, LocalizedValue>;

// ─── Terms page body content ──────────────────────────────────────────────────
const termsContentTranslations = {
    // Section 1
    s1Title: { es: '1. Aceptación de los términos', en: '1. Acceptance of Terms', de: '1. Annahme der Bedingungen', fr: '1. Acceptation des conditions' },
    s1Desc: {
        es: 'Al descargar, instalar o usar la aplicación <strong>Cuatro Sotas</strong> (en adelante, "la App"), aceptas los presentes Términos de Servicio. Si no estás de acuerdo con alguna parte, no podrás usar la App.',
        en: 'By downloading, installing, or using <strong>Cuatro Sotas</strong> (the "App"), you accept these Terms of Service. If you do not agree, you may not use the App.',
        de: 'Durch das Herunterladen, Installieren oder Verwenden von <strong>Cuatro Sotas</strong> (die „App") akzeptieren Sie diese Nutzungsbedingungen. Wenn Sie nicht zustimmen, dürfen Sie die App nicht verwenden.',
        fr: 'En téléchargeant, installant ou utilisant <strong>Cuatro Sotas</strong> (l\'« App »), vous acceptez ces Conditions d\'utilisation. Si vous n\'êtes pas d\'accord, vous ne pouvez pas utiliser l\'App.'
    },
    // Section 2
    s2Title: { es: '2. Descripción del servicio', en: '2. Service Description', de: '2. Dienstbeschreibung', fr: '2. Description du service' },
    s2Intro: {
        es: 'Cuatro Sotas es un videojuego de cartas para dispositivos móviles (Android e iOS) que incluye:',
        en: 'Cuatro Sotas is a mobile card game (Android & iOS) that includes:',
        de: 'Cuatro Sotas ist ein mobiles Kartenspiel (Android & iOS) mit folgenden Funktionen:',
        fr: 'Cuatro Sotas est un jeu de cartes mobile (Android & iOS) qui comprend :'
    },
    s2AIMode: {
        es: '<strong>Modo VS IA:</strong> partidas contra inteligencia artificial (sin conexión)',
        en: '<strong>VS AI mode:</strong> matches against artificial intelligence (offline)',
        de: '<strong>KI-Modus:</strong> Partien gegen künstliche Intelligenz (offline)',
        fr: '<strong>Mode VS IA :</strong> parties contre intelligence artificielle (hors ligne)'
    },
    s2LocalMP: {
        es: '<strong>Multijugador local (P2P):</strong> partidas mediante Bluetooth/Wi-Fi directo',
        en: '<strong>Local multiplayer (P2P):</strong> matches via Bluetooth/Wi-Fi direct',
        de: '<strong>Lokaler Mehrspieler (P2P):</strong> Partien via Bluetooth/Wi-Fi Direkt',
        fr: '<strong>Multijoueur local (P2P) :</strong> parties via Bluetooth/Wi-Fi direct'
    },
    s2OnlineMP: {
        es: '<strong>Multijugador online:</strong> partidas en tiempo real a través de servidores Firebase',
        en: '<strong>Online multiplayer:</strong> real-time matches over Firebase servers',
        de: '<strong>Online-Mehrspieler:</strong> Echtzeit-Partien über Firebase-Server',
        fr: '<strong>Multijoueur en ligne :</strong> parties en temps réel via les serveurs Firebase'
    },
    s2Stats: {
        es: '<strong>Estadísticas y ranking:</strong> seguimiento de tu progreso y comparativa global',
        en: '<strong>Statistics & ranking:</strong> progress tracking and global comparison',
        de: '<strong>Statistiken & Ranking:</strong> Fortschrittsverfolgung und globaler Vergleich',
        fr: '<strong>Statistiques & classement :</strong> suivi de votre progression et comparaison mondiale'
    },
    s2Premium: {
        es: '<strong>Suscripciones Premium:</strong> cuatro niveles con ventajas adicionales',
        en: '<strong>Premium subscriptions:</strong> four tiers with additional benefits',
        de: '<strong>Premium-Abonnements:</strong> vier Stufen mit zusätzlichen Vorteilen',
        fr: '<strong>Abonnements Premium :</strong> quatre niveaux avec des avantages supplémentaires'
    },
    // Section 3
    s3Title: { es: '3. Cuenta de usuario', en: '3. User Account', de: '3. Benutzerkonto', fr: '3. Compte utilisateur' },
    s3Intro: {
        es: 'Para acceder a las funciones online y guardar tu progreso necesitas autenticarte mediante <strong>Google Sign-In</strong>. Requisitos:',
        en: 'To access online features and save progress you must sign in via <strong>Google Sign-In</strong>. Requirements:',
        de: 'Für Online-Funktionen und das Speichern Ihres Fortschritts müssen Sie sich über <strong>Google Sign-In</strong> anmelden. Anforderungen:',
        fr: 'Pour accéder aux fonctions en ligne et sauvegarder votre progression, vous devez vous connecter via <strong>Google Sign-In</strong>. Exigences :'
    },
    s3Age: {
        es: 'Debes tener al menos <strong>13 años</strong> (o la edad mínima legal en tu país)',
        en: 'You must be at least <strong>13 years old</strong> (or the minimum age in your country)',
        de: 'Sie müssen mindestens <strong>13 Jahre alt</strong> sein (oder das gesetzliche Mindestalter in Ihrem Land)',
        fr: 'Vous devez avoir au moins <strong>13 ans</strong> (ou l\'âge minimum légal dans votre pays)'
    },
    s3Security: {
        es: 'Eres responsable de mantener la seguridad de tu cuenta',
        en: 'You are responsible for maintaining the security of your account',
        de: 'Sie sind für die Sicherheit Ihres Kontos verantwortlich',
        fr: 'Vous êtes responsable du maintien de la sécurité de votre compte'
    },
    s3Transfer: {
        es: 'No puedes transferir tu cuenta a terceros',
        en: 'You may not transfer your account to others',
        de: 'Sie dürfen Ihr Konto nicht an Dritte übertragen',
        fr: 'Vous ne pouvez pas transférer votre compte à des tiers'
    },
    s3NoFraud: {
        es: 'Te comprometes a no usar la App para fines ilegales o fraudulentos',
        en: 'You agree not to use the App for illegal or fraudulent purposes',
        de: 'Sie verpflichten sich, die App nicht für illegale oder betrügerische Zwecke zu verwenden',
        fr: 'Vous vous engagez à ne pas utiliser l\'App à des fins illégales ou frauduleuses'
    },
    // Section 4
    s4Title: { es: '4. Suscripciones Premium', en: '4. Premium Subscriptions', de: '4. Premium-Abonnements', fr: '4. Abonnements Premium' },
    s4Intro: {
        es: 'Ofrecemos cuatro niveles de suscripción, con los siguientes precios aproximados:',
        en: 'We offer four subscription tiers at the following approximate prices:',
        de: 'Wir bieten vier Abonnement-Stufen zu folgenden Näherungspreisen:',
        fr: 'Nous proposons quatre niveaux d\'abonnement aux prix indicatifs suivants :'
    },
    s4ColTier: { es: 'Nivel', en: 'Tier', de: 'Stufe', fr: 'Niveau' },
    s4ColPrice: { es: 'Precio/mes', en: 'Price/month', de: 'Preis/Monat', fr: 'Prix/mois' },
    s4ColDiscount: { es: 'Descuento aprox.', en: 'Approx. saving', de: 'Ca. Ersparnis', fr: 'Remise approx.' },
    s4Renew: {
        es: 'Las suscripciones se <strong>renuevan automáticamente</strong> al final de cada periodo',
        en: 'Subscriptions <strong>auto-renew</strong> at the end of each billing period',
        de: 'Abonnements verlängern sich <strong>automatisch</strong> am Ende jedes Abrechnungszeitraums',
        fr: 'Les abonnements se <strong>renouvellent automatiquement</strong> à la fin de chaque période'
    },
    s4Billing: {
        es: 'El cobro se realiza a través de tu cuenta de Google Play o App Store',
        en: 'Payment is charged through your Google Play or App Store account',
        de: 'Die Zahlung erfolgt über Ihr Google Play- oder App Store-Konto',
        fr: 'Le paiement est débité de votre compte Google Play ou App Store'
    },
    s4Cancel: {
        es: 'Puedes cancelar en cualquier momento; continuarás teniendo acceso hasta el final del periodo en curso',
        en: 'You can cancel at any time; access continues until the end of the current period',
        de: 'Sie können jederzeit kündigen; der Zugang läuft bis zum Ende des aktuellen Zeitraums',
        fr: 'Vous pouvez annuler à tout moment ; l\'accès se poursuit jusqu\'à la fin de la période en cours'
    },
    s4Refund: {
        es: 'Los reembolsos se gestionan según las políticas de Google Play o Apple App Store respectivamente',
        en: 'Refunds are subject to Google Play or Apple App Store policies',
        de: 'Rückerstattungen richten sich nach den Richtlinien von Google Play bzw. Apple App Store',
        fr: 'Les remboursements sont soumis aux politiques de Google Play ou Apple App Store'
    },
    s4PriceVar: {
        es: 'Los precios pueden variar según el país y la tienda aplicable',
        en: 'Prices may vary by country and applicable store',
        de: 'Preise können je nach Land und zuständigem Store variieren',
        fr: 'Les prix peuvent varier selon le pays et la boutique applicable'
    },
    s4PriceChange: {
        es: 'Cojauny se reserva el derecho a modificar precios con previo aviso de 30 días',
        en: 'Cojauny reserves the right to change prices with 30 days\' prior notice',
        de: 'Cojauny behält sich das Recht vor, Preise mit 30 Tagen Vorankündigung zu ändern',
        fr: 'Cojauny se réserve le droit de modifier les prix avec un préavis de 30 jours'
    },
    // Section 5
    s5Title: { es: '5. Conducta del usuario', en: '5. Prohibited Conduct', de: '5. Verbotenes Verhalten', fr: '5. Comportements interdits' },
    s5Intro: { es: 'Está prohibido:', en: 'The following are prohibited:', de: 'Verboten ist:', fr: 'Il est interdit de :' },
    s5Cheat: {
        es: 'Hacer trampas, usar bots o explotar vulnerabilidades del juego',
        en: 'Cheating, using bots, or exploiting game vulnerabilities',
        de: 'Schummeln, Bots verwenden oder Spielschwachstellen ausnutzen',
        fr: 'Tricher, utiliser des bots ou exploiter des failles du jeu'
    },
    s5Data: {
        es: 'Intentar acceder a datos de otros usuarios',
        en: 'Attempting to access other users\' data',
        de: 'Versuchen, auf Daten anderer Nutzer zuzugreifen',
        fr: 'Tenter d\'accéder aux données d\'autres utilisateurs'
    },
    s5Server: {
        es: 'Interferir en el funcionamiento de los servidores',
        en: 'Interfering with server operations',
        de: 'Den Serverbetrieb stören',
        fr: 'Interférer avec le fonctionnement des serveurs'
    },
    s5Commercial: {
        es: 'Usar la App con fines comerciales sin autorización expresa',
        en: 'Using the App for commercial purposes without written authorisation',
        de: 'Die App ohne ausdrückliche Genehmigung für kommerzielle Zwecke nutzen',
        fr: 'Utiliser l\'App à des fins commerciales sans autorisation écrite'
    },
    s5Sanction: {
        es: 'El incumplimiento puede resultar en la suspensión o eliminación permanente de tu cuenta.',
        en: 'Violations may result in suspension or permanent deletion of your account.',
        de: 'Verstöße können zur Sperrung oder dauerhaften Löschung Ihres Kontos führen.',
        fr: 'Les violations peuvent entraîner la suspension ou la suppression définitive de votre compte.'
    },
    // Section 6
    s6Title: { es: '6. Propiedad intelectual', en: '6. Intellectual Property', de: '6. Geistiges Eigentum', fr: '6. Propriété intellectuelle' },
    s6Desc: {
        es: 'Todo el contenido de la App (código, gráficos, sonidos, diseño, marca) es propiedad de Cojauny o sus licenciantes. No puedes reproducir, distribuir o crear obras derivadas sin autorización escrita.',
        en: 'All content in the App (code, graphics, sounds, design, brand) is owned by Cojauny or its licensors. You may not reproduce, distribute, or create derivative works without written permission.',
        de: 'Alle Inhalte der App (Code, Grafiken, Sounds, Design, Marke) sind Eigentum von Cojauny oder seinen Lizenzgebern. Sie dürfen ohne schriftliche Genehmigung keine Vervielfältigungen, Vertrieb oder abgeleiteten Werke erstellen.',
        fr: 'Tout le contenu de l\'App (code, graphismes, sons, design, marque) appartient à Cojauny ou ses licenciants. Vous ne pouvez pas reproduire, distribuer ou créer des œuvres dérivées sans autorisation écrite.'
    },
    s6License: {
        es: 'Se concede una licencia limitada, no exclusiva y no transferible para uso personal de la App.',
        en: 'A limited, non-exclusive, non-transferable licence is granted for personal use of the App.',
        de: 'Es wird eine begrenzte, nicht exklusive und nicht übertragbare Lizenz für die persönliche Nutzung der App erteilt.',
        fr: 'Une licence limitée, non exclusive et non transférable est accordée pour un usage personnel de l\'App.'
    },
    // Section 7
    s7Title: { es: '7. Limitación de responsabilidad', en: '7. Limitation of Liability', de: '7. Haftungsbeschränkung', fr: '7. Limitation de responsabilité' },
    s7Intro: { es: 'Cojauny no es responsable de:', en: 'Cojauny is not liable for:', de: 'Cojauny haftet nicht für:', fr: 'Cojauny n\'est pas responsable de :' },
    s7Interruptions: {
        es: 'Interrupciones del servicio por mantenimiento o causas técnicas',
        en: 'Service interruptions due to maintenance or technical issues',
        de: 'Dienstunterbrechungen durch Wartung oder technische Probleme',
        fr: 'Interruptions de service dues à la maintenance ou à des problèmes techniques'
    },
    s7DataLoss: {
        es: 'Pérdida de datos debida a fallos del dispositivo',
        en: 'Data loss due to device failure',
        de: 'Datenverlust durch Geräteausfall',
        fr: 'Perte de données due à une défaillance de l\'appareil'
    },
    s7Indirect: {
        es: 'Daños indirectos o lucro cesante',
        en: 'Indirect damages or loss of profits',
        de: 'Mittelbare Schäden oder entgangene Gewinne',
        fr: 'Dommages indirects ou manque à gagner'
    },
    s7Law: {
        es: 'En la medida permitida por la legislación española aplicable.',
        en: 'To the extent permitted by applicable Spanish law.',
        de: 'Soweit nach geltendem spanischen Recht zulässig.',
        fr: 'Dans la mesure permise par le droit espagnol applicable.'
    },
    // Section 8
    s8Title: { es: '8. Modificaciones del servicio', en: '8. Service Modifications', de: '8. Dienständerungen', fr: '8. Modifications du service' },
    s8Desc: {
        es: 'Cojauny puede modificar, suspender o descontinuar la App o cualquier función en cualquier momento, con o sin previo aviso. Para cambios significativos en los términos, te notificaremos con 30 días de antelación.',
        en: 'Cojauny may modify, suspend, or discontinue the App or any feature at any time, with or without notice. For significant changes to these terms, we will give 30 days\' prior notice.',
        de: 'Cojauny kann die App oder einzelne Funktionen jederzeit ändern, aussetzen oder einstellen, mit oder ohne Ankündigung. Bei wesentlichen Änderungen dieser Bedingungen geben wir 30 Tage Vorankündigung.',
        fr: 'Cojauny peut modifier, suspendre ou interrompre l\'App ou toute fonctionnalité à tout moment, avec ou sans préavis. Pour des changements significatifs des conditions, nous donnerons un préavis de 30 jours.'
    },
    // Section 9
    s9Title: { es: '9. Ley aplicable', en: '9. Applicable Law', de: '9. Anwendbares Recht', fr: '9. Droit applicable' },
    s9Desc: {
        es: 'Estos términos se rigen por la legislación española. Cualquier disputa se resolverá en los tribunales de <strong>Madrid</strong>, salvo que la normativa de consumidores de tu país establezca otra jurisdicción.',
        en: 'These terms are governed by Spanish law. Any dispute shall be resolved in the courts of <strong>Madrid</strong>, unless consumer protection laws in your country provide otherwise.',
        de: 'Diese Bedingungen unterliegen dem spanischen Recht. Streitigkeiten werden vor den Gerichten von <strong>Madrid</strong> beigelegt, sofern das Verbraucherschutzrecht Ihres Landes nichts anderes vorsieht.',
        fr: 'Ces conditions sont régies par le droit espagnol. Tout litige sera résolu devant les tribunaux de <strong>Madrid</strong>, sauf si les lois de protection des consommateurs de votre pays en disposent autrement.'
    },
    s9Contact: {
        es: 'Contacto: <a href="mailto:support@cojauny.com">support@cojauny.com</a>',
        en: 'Contact: <a href="mailto:support@cojauny.com">support@cojauny.com</a>',
        de: 'Kontakt: <a href="mailto:support@cojauny.com">support@cojauny.com</a>',
        fr: 'Contact : <a href="mailto:support@cojauny.com">support@cojauny.com</a>'
    }
} as const satisfies Record<string, LocalizedValue>;

// ─── Support page FAQ body content ────────────────────────────────────────────
const supportContentTranslations = {
    // Game FAQ
    faq1Q: { es: '¿Qué es Cuatro Sotas?', en: 'What is Cuatro Sotas?', de: 'Was ist Cuatro Sotas?', fr: 'Qu\'est-ce que Cuatro Sotas ?' },
    faq1A: {
        es: 'Un juego de cartas para móvil basado en el Guiñote tradicional español. La mecánica especial: si consigues reunir las cuatro sotas (Oros, Copas, Espadas y Bastos) en tu mano, ¡ganas la partida al instante! De lo contrario, el primero en ganar 5 rondas gana el juego.',
        en: 'A mobile card game based on the traditional Spanish Guiñote. The special mechanic: if you collect all four Jacks (Coins, Cups, Swords, and Clubs) in your hand, you win the match instantly! Otherwise, the first to win 5 rounds wins.',
        de: 'Ein mobiles Kartenspiel basierend auf dem traditionellen spanischen Guiñote. Die besondere Mechanik: Wenn Sie alle vier Buben (Münzen, Kelche, Schwerter und Stäbe) in der Hand vereinen, gewinnen Sie die Partie sofort! Sonst gewinnt, wer zuerst 5 Runden gewinnt.',
        fr: 'Un jeu de cartes mobile basé sur le Guiñote espagnol traditionnel. La mécanique spéciale : si vous réunissez les quatre valets (Pièces, Coupes, Épées et Bâtons) en main, vous gagnez la partie instantanément ! Sinon, le premier à gagner 5 manches l\'emporte.'
    },
    faq2Q: { es: '¿Necesito internet para jugar?', en: 'Do I need internet to play?', de: 'Brauche ich Internet zum Spielen?', fr: 'Ai-je besoin d\'internet pour jouer ?' },
    faq2A: {
        es: '<strong>VS IA:</strong> No necesitas internet.<br /><strong>Multijugador local:</strong> No (usa Bluetooth/Wi-Fi directo).<br /><strong>Multijugador online:</strong> Sí, requiere conexión.<br /><strong>Estadísticas y cuenta:</strong> Requieren internet para sincronizar.',
        en: '<strong>VS AI:</strong> No internet needed.<br /><strong>Local multiplayer:</strong> No (uses Bluetooth/Wi-Fi direct).<br /><strong>Online multiplayer:</strong> Yes, requires a connection.<br /><strong>Stats and account:</strong> Require internet to sync.',
        de: '<strong>VS KI:</strong> Kein Internet nötig.<br /><strong>Lokaler Mehrspieler:</strong> Nein (nutzt Bluetooth/Wi-Fi Direkt).<br /><strong>Online-Mehrspieler:</strong> Ja, erfordert eine Verbindung.<br /><strong>Statistiken & Konto:</strong> Benötigen Internet zur Synchronisierung.',
        fr: '<strong>VS IA :</strong> Pas d\'internet nécessaire.<br /><strong>Multijoueur local :</strong> Non (utilise Bluetooth/Wi-Fi direct).<br /><strong>Multijoueur en ligne :</strong> Oui, nécessite une connexion.<br /><strong>Statistiques et compte :</strong> Nécessitent internet pour synchroniser.'
    },
    faq3Q: { es: '¿Cuánto vale cada carta?', en: 'How much is each card worth?', de: 'Wie viel ist jede Karte wert?', fr: 'Combien vaut chaque carte ?' },
    faq3A: {
        es: 'Sota = 0 pts, As = 1, Dos = 2 … Siete = 7, Caballo = 11, Rey = 12. El objetivo es tener la menor puntuación posible en mano al cantar Sota.',
        en: 'Jack = 0 pts, Ace = 1, Two = 2 … Seven = 7, Knight = 11, King = 12. The goal is the lowest score in hand when calling Sota.',
        de: 'Bube = 0 Pkt., As = 1, Zwei = 2 … Sieben = 7, Ritter = 11, König = 12. Ziel ist die niedrigste Handpunktzahl beim SOTA-Rufen.',
        fr: 'Valet = 0 pts, As = 1, Deux = 2 … Sept = 7, Cavalier = 11, Roi = 12. L\'objectif est d\'avoir le score le plus bas en main lors de l\'appel Sota.'
    },
    faq4Q: { es: '¿Cuándo puedo cantar SOTA?', en: 'When can I call SOTA?', de: 'Wann kann ich SOTA rufen?', fr: 'Quand puis-je appeler SOTA ?' },
    faq4A: {
        es: 'Solo después de que <strong>ambos jugadores</strong> hayan completado al menos <strong>2 turnos</strong> en la ronda. Al cantar, tu rival recibe un último turno antes de que se comparen las manos.',
        en: 'Only after <strong>both players</strong> have completed at least <strong>2 turns</strong> in the round. When called, your opponent gets one final turn before hands are compared.',
        de: 'Erst nachdem <strong>beide Spieler</strong> mindestens <strong>2 Züge</strong> in der Runde abgeschlossen haben. Beim Rufen erhält Ihr Gegner einen letzten Zug, bevor die Hände verglichen werden.',
        fr: 'Seulement après que <strong>les deux joueurs</strong> aient effectué au moins <strong>2 tours</strong> dans la manche. Lors de l\'appel, votre adversaire reçoit un dernier tour avant la comparaison des mains.'
    },
    faq5Q: { es: '¿Qué pasa si se agota el mazo?', en: 'What happens when the deck runs out?', de: 'Was passiert, wenn das Deck leer ist?', fr: 'Que se passe-t-il quand le deck est épuisé ?' },
    faq5A: {
        es: 'La pila de descarte (excepto la carta superior) se baraja automáticamente formando un nuevo mazo. El juego continúa sin interrupción.',
        en: 'The discard pile (except the top card) is automatically reshuffled to form a new deck. The game continues without interruption.',
        de: 'Der Abwurfstapel (außer der obersten Karte) wird automatisch neu gemischt, um ein neues Deck zu bilden. Das Spiel läuft ohne Unterbrechung weiter.',
        fr: 'La pile de défausse (sauf la carte du dessus) est automatiquement mélangée pour former un nouveau deck. Le jeu continue sans interruption.'
    },
    faq6Q: { es: '¿Cuántos dispositivos pueden jugar local?', en: 'How many devices can play locally?', de: 'Wie viele Geräte können lokal spielen?', fr: 'Combien d\'appareils peuvent jouer localement ?' },
    faq6A: {
        es: 'Exactamente 2 dispositivos. El multijugador local usa Google Nearby Connections (alcance recomendado: menos de 30 m). Ambos dispositivos deben tener Bluetooth y Wi-Fi activos con los permisos concedidos.',
        en: 'Exactly 2 devices. Local multiplayer uses Google Nearby Connections (recommended range: under 30 m). Both devices must have Bluetooth and Wi-Fi enabled with permissions granted.',
        de: 'Genau 2 Geräte. Der lokale Mehrspieler nutzt Google Nearby Connections (empfohlene Reichweite: unter 30 m). Beide Geräte müssen Bluetooth und Wi-Fi aktiviert haben.',
        fr: 'Exactement 2 appareils. Le multijoueur local utilise Google Nearby Connections (portée recommandée : moins de 30 m). Les deux appareils doivent avoir le Bluetooth et le Wi-Fi activés avec les autorisations accordées.'
    },
    // Account FAQ
    acct1Q: { es: '¿Cómo restauro mi suscripción Premium?', en: 'How do I restore my Premium subscription?', de: 'Wie stelle ich mein Premium-Abonnement wieder her?', fr: 'Comment restaurer mon abonnement Premium ?' },
    acct1A: {
        es: 'Ve a la pantalla Premium dentro de la app y pulsa <strong>Restaurar compras</strong>. Usa la misma cuenta de Google con la que realizaste la compra original.',
        en: 'Go to the Premium screen in the app and tap <strong>Restore purchases</strong>. Make sure you\'re using the same Google account as the original purchase.',
        de: 'Öffnen Sie den Premium-Bereich in der App und tippen Sie auf <strong>Käufe wiederherstellen</strong>. Verwenden Sie dasselbe Google-Konto wie beim ursprünglichen Kauf.',
        fr: 'Accédez à l\'écran Premium dans l\'app et appuyez sur <strong>Restaurer les achats</strong>. Assurez-vous d\'utiliser le même compte Google que lors de l\'achat initial.'
    },
    acct2Q: { es: '¿Cómo cancelo mi suscripción?', en: 'How do I cancel my subscription?', de: 'Wie kündige ich mein Abonnement?', fr: 'Comment annuler mon abonnement ?' },
    acct2A: {
        es: '<strong>Android:</strong> Google Play → tu perfil → Pagos y suscripciones → Suscripciones → Cuatro Sotas → Cancelar.<br /><strong>iOS:</strong> Ajustes → tu nombre → Suscripciones → Cuatro Sotas → Cancelar suscripción.',
        en: '<strong>Android:</strong> Google Play → your profile → Payments & subscriptions → Subscriptions → Cuatro Sotas → Cancel.<br /><strong>iOS:</strong> Settings → your name → Subscriptions → Cuatro Sotas → Cancel subscription.',
        de: '<strong>Android:</strong> Google Play → Ihr Profil → Zahlungen & Abonnements → Abonnements → Cuatro Sotas → Kündigen.<br /><strong>iOS:</strong> Einstellungen → Ihr Name → Abonnements → Cuatro Sotas → Abonnement kündigen.',
        fr: '<strong>Android :</strong> Google Play → votre profil → Paiements et abonnements → Abonnements → Cuatro Sotas → Annuler.<br /><strong>iOS :</strong> Réglages → votre nom → Abonnements → Cuatro Sotas → Annuler l\'abonnement.'
    },
    acct3Q: { es: 'Cambié de teléfono, ¿pierdo mis datos?', en: 'I changed phones. Do I lose my data?', de: 'Ich habe das Handy gewechselt. Verliere ich meine Daten?', fr: 'J\'ai changé de téléphone. Vais-je perdre mes données ?' },
    acct3A: {
        es: 'No. Inicia sesión con la misma cuenta de Google y todo tu progreso, estadísticas y suscripción Premium se restaurarán automáticamente.',
        en: 'No. Sign in with the same Google account and all your progress, statistics, and Premium subscription will be restored automatically.',
        de: 'Nein. Melden Sie sich mit demselben Google-Konto an und Ihr gesamter Fortschritt, Ihre Statistiken und Ihr Premium-Abonnement werden automatisch wiederhergestellt.',
        fr: 'Non. Connectez-vous avec le même compte Google et toute votre progression, vos statistiques et votre abonnement Premium seront restaurés automatiquement.'
    },
    acct4Q: { es: '¿Cómo solicito un reembolso?', en: 'How do I request a refund?', de: 'Wie beantrage ich eine Rückerstattung?', fr: 'Comment demander un remboursement ?' },
    acct4A: {
        es: 'Los reembolsos los gestiona la tienda donde compraste: <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener">Google Play</a> o <a href="https://support.apple.com/es-es/HT204084" target="_blank" rel="noopener">Apple App Store</a>.',
        en: 'Refunds are handled by the store where you purchased: <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener">Google Play</a> or <a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noopener">Apple App Store</a>.',
        de: 'Rückerstattungen werden von dem Store abgewickelt, in dem Sie gekauft haben: <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener">Google Play</a> oder <a href="https://support.apple.com/de-de/HT204084" target="_blank" rel="noopener">Apple App Store</a>.',
        fr: 'Les remboursements sont gérés par la boutique où vous avez acheté : <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener">Google Play</a> ou <a href="https://support.apple.com/fr-fr/HT204084" target="_blank" rel="noopener">Apple App Store</a>.'
    },
    // Privacy FAQ
    priv1Q: { es: '¿Cómo elimino mi cuenta y mis datos?', en: 'How do I delete my account and data?', de: 'Wie lösche ich mein Konto und meine Daten?', fr: 'Comment supprimer mon compte et mes données ?' },
    priv1A: {
        es: 'Envía un email a <a href="mailto:support@cojauny.com">support@cojauny.com</a> con el asunto <em>"Solicitud de eliminación de cuenta"</em> e indica el email de tu cuenta. Procesamos todas las solicitudes en un máximo de 30 días.',
        en: 'Send an email to <a href="mailto:support@cojauny.com">support@cojauny.com</a> with the subject <em>"Account deletion request"</em> and include your account email. We process all requests within 30 days.',
        de: 'Senden Sie eine E-Mail an <a href="mailto:support@cojauny.com">support@cojauny.com</a> mit dem Betreff <em>„Kontolöschungsanfrage"</em> und Ihrer Konto-E-Mail. Wir bearbeiten alle Anfragen innerhalb von 30 Tagen.',
        fr: 'Envoyez un e-mail à <a href="mailto:support@cojauny.com">support@cojauny.com</a> avec l\'objet <em>« Demande de suppression de compte »</em> et indiquez l\'e-mail de votre compte. Nous traitons toutes les demandes dans un délai de 30 jours.'
    },
    priv2Q: { es: '¿Venden mis datos?', en: 'Do you sell my data?', de: 'Verkaufen Sie meine Daten?', fr: 'Vendez-vous mes données ?' },
    priv2A: {
        es: 'No. Nunca vendemos datos personales a terceros. Consulta nuestra <link>Política de Privacidad</link> para más detalles.',
        en: 'No. We never sell personal data to third parties. See our <link>Privacy Policy</link> for full details.',
        de: 'Nein. Wir verkaufen niemals personenbezogene Daten an Dritte. Weitere Einzelheiten finden Sie in unserer <link>Datenschutzerklärung</link>.',
        fr: 'Non. Nous ne vendons jamais de données personnelles à des tiers. Consultez notre <link>Politique de confidentialité</link> pour plus de détails.'
    },
    priv3Q: { es: '¿Qué datos recoge la app?', en: 'What data does the app collect?', de: 'Welche Daten erfasst die App?', fr: 'Quelles données l\'app collecte-t-elle ?' },
    priv3A: {
        es: 'Correo electrónico y nombre (de Google Sign-In), estadísticas de juego y datos técnicos para mejorar la app. Los usuarios gratuitos también generan datos de publicidad (con consentimiento). Consulta la <link>Política de Privacidad</link> completa.',
        en: 'Email and name (from Google Sign-In), game statistics, and technical data to improve the app. Free users also generate advertising data (with consent). See the full <link>Privacy Policy</link>.',
        de: 'E-Mail und Name (aus Google Sign-In), Spielstatistiken und technische Daten zur App-Verbesserung. Kostenlose Nutzer generieren auch Werbedaten (mit Einwilligung). Vollständige <link>Datenschutzerklärung</link> ansehen.',
        fr: 'E-mail et nom (via Google Sign-In), statistiques de jeu et données techniques pour améliorer l\'app. Les utilisateurs gratuits génèrent aussi des données publicitaires (avec consentement). Consultez la <link>Politique de confidentialité</link> complète.'
    },
    termsDescNoLink: {
        es: 'Condiciones de uso del servicio.',
        en: 'Service terms of use.',
        de: 'Nutzungsbedingungen des Dienstes.',
        fr: 'Conditions d\'utilisation du service.'
    }
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
    supportContent: Namespace<typeof supportContentTranslations>;
    legalCommon: Namespace<typeof legalCommonTranslations>;
    privacy: Namespace<typeof privacyTranslations>;
    privacyContent: Namespace<typeof privacyContentTranslations>;
    terms: Namespace<typeof termsTranslations>;
    termsContent: Namespace<typeof termsContentTranslations>;
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
        supportContent: toNamespace(supportContentTranslations, currentLocale),
        legalCommon: toNamespace(legalCommonTranslations, currentLocale),
        privacy: toNamespace(privacyTranslations, currentLocale),
        privacyContent: toNamespace(privacyContentTranslations, currentLocale),
        terms: toNamespace(termsTranslations, currentLocale),
        termsContent: toNamespace(termsContentTranslations, currentLocale),
        notFound: toNamespace(notFoundTranslations, currentLocale),
        cookieBanner: toNamespace(cookieBannerTranslations, currentLocale),
        cookies: toNamespace(cookiesPageTranslations, currentLocale)
    };
}
