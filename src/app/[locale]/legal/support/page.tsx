'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { LegalLayout } from '@/components/LegalLayout';
import { SHOW_PREMIUM_PUBLIC_INFO } from '@/lib/publicationFlags';

export default function SupportPage() {
    const { lang } = useLanguage();
    const supportT = useTranslations('support');
    const legalCommonT = useTranslations('legalCommon');
    const es = lang === 'es';

    return (
        <LegalLayout
            title={supportT('contactTitle')}
            subtitle={supportT('contactDesc')}
            backLabel={legalCommonT('back')}
        >
            <main id="main-content">
                {/* ── CANALES DE CONTACTO ── */}
                <section className="section" aria-labelledby="contact-channels">
                    <div className="container">
                        <div className="contact-channels-grid">
                            <div className="contact-channel">
                                <span className="icon" aria-hidden="true">🔧</span>
                                <strong>{supportT('techSupport')}</strong>
                                <a href="mailto:support@cojauny.com">support@cojauny.com</a>
                            </div>
                            <div className="contact-channel">
                                <span className="icon" aria-hidden="true">💡</span>
                                <strong>{supportT('suggestions')}</strong>
                                <a href="mailto:cojauny@cojauny.com">cojauny@cojauny.com</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TIEMPOS DE RESPUESTA ── */}
                <section className="section bg-light" aria-labelledby="times-title">
                    <div className="container">
                        <h2 id="times-title" className="section-title">
                            {supportT('responseTimes')}
                        </h2>
                        <div className="modes-grid">
                            <div className="mode-card">
                                <span className="mode-icon" aria-hidden="true">🔧</span>
                                <div>
                                    <h3>{supportT('techSupportTime')}</h3>
                                    <p>
                                        {supportT.rich('techSupportDesc', {
                                            strong: (chunks) => <strong>{chunks}</strong>
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="mode-card">
                                <span className="mode-icon" aria-hidden="true">🔒</span>
                                <div>
                                    <h3>{supportT('gdprTime')}</h3>
                                    <p>
                                        {supportT.rich('gdprDesc', {
                                            strong: (chunks) => <strong>{chunks}</strong>
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="mode-card">
                                <span className="mode-icon" aria-hidden="true">💡</span>
                                <div>
                                    <h3>{supportT('suggestionsTime')}</h3>
                                    <p>{supportT('suggestionsDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FAQ: JUEGO ── */}
                <section className="section" aria-labelledby="faq-game-title">
                    <div className="container">
                        <h2 id="faq-game-title" className="section-title">
                            {supportT('faqGameTitle')}
                        </h2>

                        {es ? (
                            <>
                                <div className="faq-item">
                                    <h3>¿Qué es Cuatro Sotas?</h3>
                                    <p>Un juego de cartas para móvil basado en el Guiñote tradicional español. La mecánica especial: si consigues reunir las cuatro sotas (Oros, Copas, Espadas y Bastos) en tu mano, ¡ganas la partida al instante! De lo contrario, el primero en ganar 5 rondas gana el juego.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>¿Necesito internet para jugar?</h3>
                                    <p><strong>VS IA:</strong> No necesitas internet.<br /><strong>Multijugador local:</strong> No (usa Bluetooth/Wi-Fi directo).<br /><strong>Multijugador online:</strong> Sí, requiere conexión.<br /><strong>Estadísticas y cuenta:</strong> Requieren internet para sincronizar.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>¿Cuánto vale cada carta?</h3>
                                    <p>Sota = 0 pts, As = 1, Dos = 2 … Siete = 7, Caballo = 11, Rey = 12. El objetivo es tener la menor puntuación posible en mano al cantar Sota.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>¿Cuándo puedo cantar SOTA?</h3>
                                    <p>Solo después de que <strong>ambos jugadores</strong> hayan completado al menos <strong>2 turnos</strong> en la ronda. Al cantar, tu rival recibe un último turno antes de que se comparen las manos.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>¿Qué pasa si se agota el mazo?</h3>
                                    <p>La pila de descarte (excepto la carta superior) se baraja automáticamente formando un nuevo mazo. El juego continúa sin interrupción.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>¿Cuántos dispositivos pueden jugar local?</h3>
                                    <p>Exactamente 2 dispositivos. El multijugador local usa Google Nearby Connections (alcance recomendado: menos de 30 m). Ambos dispositivos deben tener Bluetooth y Wi-Fi activos con los permisos concedidos.</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="faq-item">
                                    <h3>What is Cuatro Sotas?</h3>
                                    <p>A mobile card game based on the traditional Spanish Guiñote. The special mechanic: if you collect all four Jacks (Coins, Cups, Swords, and Clubs) in your hand, you win the match instantly! Otherwise, the first to win 5 rounds wins.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>Do I need internet to play?</h3>
                                    <p><strong>VS AI:</strong> No internet needed.<br /><strong>Local multiplayer:</strong> No (uses Bluetooth/Wi-Fi direct).<br /><strong>Online multiplayer:</strong> Yes, requires a connection.<br /><strong>Stats and account:</strong> Require internet to sync.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>How much is each card worth?</h3>
                                    <p>Jack = 0 pts, Ace = 1, Two = 2 … Seven = 7, Knight = 11, King = 12. The goal is the lowest score in hand when calling Sota.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>When can I call SOTA?</h3>
                                    <p>Only after <strong>both players</strong> have completed at least <strong>2 turns</strong> in the round. When called, your opponent gets one final turn before hands are compared.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>What happens when the deck runs out?</h3>
                                    <p>The discard pile (except the top card) is automatically reshuffled to form a new deck. The game continues without interruption.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>How many devices can play locally?</h3>
                                    <p>Exactly 2 devices. Local multiplayer uses Google Nearby Connections (recommended range: under 30 m). Both devices must have Bluetooth and Wi-Fi enabled with permissions granted.</p>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {SHOW_PREMIUM_PUBLIC_INFO && (
                    <section className="section bg-light" aria-labelledby="faq-account-title">
                        <div className="container">
                            <h2 id="faq-account-title" className="section-title">
                                {supportT('faqAccountTitle')}
                            </h2>

                            {es ? (
                                <>
                                    <div className="faq-item">
                                        <h3>¿Cómo restauro mi suscripción Premium?</h3>
                                        <p>Ve a la pantalla Premium dentro de la app y pulsa <strong>Restaurar compras</strong>. Usa la misma cuenta de Google con la que realizaste la compra original.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h3>¿Cómo cancelo mi suscripción?</h3>
                                        <p><strong>Android:</strong> Google Play → tu perfil → Pagos y suscripciones → Suscripciones → Cuatro Sotas → Cancelar.<br /><strong>iOS:</strong> Ajustes → tu nombre → Suscripciones → Cuatro Sotas → Cancelar suscripción.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h3>Cambié de teléfono, ¿pierdo mis datos?</h3>
                                        <p>No. Inicia sesión con la misma cuenta de Google y todo tu progreso, estadísticas y suscripción Premium se restaurarán automáticamente.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h3>¿Cómo solicito un reembolso?</h3>
                                        <p>Los reembolsos los gestiona la tienda donde compraste: <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener">Google Play</a> o <a href="https://support.apple.com/es-es/HT204084" target="_blank" rel="noopener">Apple App Store</a>.</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="faq-item">
                                        <h3>How do I restore my Premium subscription?</h3>
                                        <p>Go to the Premium screen in the app and tap <strong>Restore purchases</strong>. Make sure you&apos;re using the same Google account as the original purchase.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h3>How do I cancel my subscription?</h3>
                                        <p><strong>Android:</strong> Google Play → your profile → Payments &amp; subscriptions → Subscriptions → Cuatro Sotas → Cancel.<br /><strong>iOS:</strong> Settings → your name → Subscriptions → Cuatro Sotas → Cancel subscription.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h3>I changed phones. Do I lose my data?</h3>
                                        <p>No. Sign in with the same Google account and all your progress, statistics, and Premium subscription will be restored automatically.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h3>How do I request a refund?</h3>
                                        <p>Refunds are handled by the store where you purchased: <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener">Google Play</a> or <a href="https://support.apple.com/es-es/HT204084" target="_blank" rel="noopener">Apple App Store</a>.</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                )}

                {/* ── FAQ: PRIVACIDAD ── */}
                <section className="section" aria-labelledby="faq-privacy-title">
                    <div className="container">
                        <h2 id="faq-privacy-title" className="section-title">
                            {supportT('faqPrivacyTitle')}
                        </h2>

                        {es ? (
                            <>
                                <div className="faq-item">
                                    <h3>¿Cómo elimino mi cuenta y mis datos?</h3>
                                    <p>Envía un email a <a href="mailto:support@cojauny.com">support@cojauny.com</a> con el asunto <em>&quot;Solicitud de eliminación de cuenta&quot;</em> e indica el email de tu cuenta. Procesamos todas las solicitudes en un máximo de 30 días.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>¿Venden mis datos?</h3>
                                    <p>No. Nunca vendemos datos personales a terceros. Consulta nuestra <Link href="/legal/privacy">Política de Privacidad</Link> para más detalles.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>¿Qué datos recoge la app?</h3>
                                    <p>Correo electrónico y nombre (de Google Sign-In), estadísticas de juego y datos técnicos para mejorar la app. Los usuarios gratuitos también generan datos de publicidad (con consentimiento). Consulta la <Link href="/legal/privacy">Política de Privacidad</Link> completa.</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="faq-item">
                                    <h3>How do I delete my account and data?</h3>
                                    <p>Send an email to <a href="mailto:support@cojauny.com">support@cojauny.com</a> with the subject <em>&quot;Account deletion request&quot;</em> and include your account email. We process all requests within 30 days.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>Do you sell my data?</h3>
                                    <p>No. We never sell personal data to third parties. See our <Link href="/legal/privacy">Privacy Policy</Link> for full details.</p>
                                </div>
                                <div className="faq-item">
                                    <h3>What data does the app collect?</h3>
                                    <p>Email and name (from Google Sign-In), game statistics, and technical data to improve the app. Free users also generate advertising data (with consent). See the full <Link href="/legal/privacy">Privacy Policy</Link>.</p>
                                </div>
                            </>
                        )}

                        <div className="mt-8">
                            <h2 className="section-title">{supportT('legalDocs')}</h2>
                            <div className="links-grid">
                                <Link href="/legal/privacy" className="link-card">
                                    <span className="icon" aria-hidden="true">🔒</span>
                                    <h3>{supportT('privacyPolicyTitle')}</h3>
                                    <p>{supportT('privacyPolicyDesc')}</p>
                                </Link>
                                <Link href="/legal/terms" className="link-card">
                                    <span className="icon" aria-hidden="true">📄</span>
                                    <h3>{supportT('termsTitle')}</h3>
                                    <p>{SHOW_PREMIUM_PUBLIC_INFO ? supportT('termsDesc') : (es ? 'Condiciones de uso del servicio.' : 'Service terms of use.')}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </LegalLayout>
    );
}
