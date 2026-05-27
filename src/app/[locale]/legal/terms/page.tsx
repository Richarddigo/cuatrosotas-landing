'use client';

import { useTranslations } from 'next-intl';
import { useLanguage } from '@/context/LanguageContext';
import { LegalLayout } from '@/components/LegalLayout';
import { SHOW_PREMIUM_PUBLIC_INFO } from '@/lib/publicationFlags';

export default function TermsPage() {
    const { lang } = useLanguage();
    const termsT = useTranslations('terms');
    const legalCommonT = useTranslations('legalCommon');
    const es = lang === 'es';

    return (
        <LegalLayout
            title={termsT('title')}
            subtitle={SHOW_PREMIUM_PUBLIC_INFO ? termsT('subtitle') : (es ? 'Condiciones de uso de la aplicación.' : 'Application terms of use.')}
            backLabel={legalCommonT('back')}
            updatedLabel={termsT('updated')}
        >
            <main id="main-content">
                {/* ── SECCIONES 1-3 ── */}
                <section className="section">
                    <div className="container">
                        {es ? (
                            <>
                                <div className="card">
                                    <h2>1. Aceptación de los términos</h2>
                                    <p>Al descargar, instalar o usar la aplicación <strong>Cuatro Sotas</strong> (en adelante, &quot;la App&quot;), aceptas los presentes Términos de Servicio. Si no estás de acuerdo con alguna parte, no podrás usar la App.</p>
                                </div>
                                <div className="card">
                                    <h2>2. Descripción del servicio</h2>
                                    <p>Cuatro Sotas es un videojuego de cartas para dispositivos móviles (Android e iOS) que incluye:</p>
                                    <ul>
                                        <li><strong>Modo VS IA:</strong> partidas contra inteligencia artificial (sin conexión)</li>
                                        <li><strong>Multijugador local (P2P):</strong> partidas mediante Bluetooth/Wi-Fi directo</li>
                                        <li><strong>Multijugador online:</strong> partidas en tiempo real a través de servidores Firebase</li>
                                        <li><strong>Estadísticas y ranking:</strong> seguimiento de tu progreso y comparativa global</li>
                                        {SHOW_PREMIUM_PUBLIC_INFO && <li><strong>Suscripciones Premium:</strong> cuatro niveles con ventajas adicionales</li>}
                                    </ul>
                                </div>
                                <div className="card">
                                    <h2>3. Cuenta de usuario</h2>
                                    <p>Para acceder a las funciones online y guardar tu progreso necesitas autenticarte mediante <strong>Google Sign-In</strong>. Requisitos:</p>
                                    <ul>
                                        <li>Debes tener al menos <strong>13 años</strong> (o la edad mínima legal en tu país)</li>
                                        <li>Eres responsable de mantener la seguridad de tu cuenta</li>
                                        <li>No puedes transferir tu cuenta a terceros</li>
                                        <li>Te comprometes a no usar la App para fines ilegales o fraudulentos</li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="card">
                                    <h2>1. Acceptance of Terms</h2>
                                    <p>By downloading, installing, or using <strong>Cuatro Sotas</strong> (the &quot;App&quot;), you accept these Terms of Service. If you do not agree, you may not use the App.</p>
                                </div>
                                <div className="card">
                                    <h2>2. Service Description</h2>
                                    <p>Cuatro Sotas is a mobile card game (Android &amp; iOS) that includes:</p>
                                    <ul>
                                        <li><strong>VS AI mode:</strong> matches against artificial intelligence (offline)</li>
                                        <li><strong>Local multiplayer (P2P):</strong> matches via Bluetooth/Wi-Fi direct</li>
                                        <li><strong>Online multiplayer:</strong> real-time matches over Firebase servers</li>
                                        <li><strong>Statistics &amp; ranking:</strong> progress tracking and global comparison</li>
                                        {SHOW_PREMIUM_PUBLIC_INFO && <li><strong>Premium subscriptions:</strong> four tiers with additional benefits</li>}
                                    </ul>
                                </div>
                                <div className="card">
                                    <h2>3. User Account</h2>
                                    <p>To access online features and save progress you must sign in via <strong>Google Sign-In</strong>. Requirements:</p>
                                    <ul>
                                        <li>You must be at least <strong>13 years old</strong> (or the minimum age in your country)</li>
                                        <li>You are responsible for maintaining the security of your account</li>
                                        <li>You may not transfer your account to others</li>
                                        <li>You agree not to use the App for illegal or fraudulent purposes</li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {SHOW_PREMIUM_PUBLIC_INFO && (
                    <section className="section bg-light">
                        <div className="container">
                            {es ? (
                                <div className="card">
                                    <h2>4. Suscripciones Premium</h2>
                                    <p>Ofrecemos cuatro niveles de suscripción, con los siguientes precios aproximados:</p>
                                    <div className="table-scroll">
                                        <table>
                                            <thead><tr><th>Nivel</th><th>Precio/mes</th><th>Descuento aprox.</th></tr></thead>
                                            <tbody>
                                                <tr><td>Bronce</td><td>2,29 €</td><td>—</td></tr>
                                                <tr><td>Plata</td><td>4,49 €</td><td>~2 %</td></tr>
                                                <tr><td>Oro</td><td>8,99 €</td><td>~2 %</td></tr>
                                                <tr><td>Legendaria</td><td>17,49 €</td><td>~4 %</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <ul>
                                        <li>Las suscripciones se <strong>renuevan automáticamente</strong> al final de cada periodo</li>
                                        <li>El cobro se realiza a través de tu cuenta de Google Play o App Store</li>
                                        <li>Puedes cancelar en cualquier momento; continuarás teniendo acceso hasta el final del periodo en curso</li>
                                        <li>Los reembolsos se gestionan según las políticas de Google Play o Apple App Store respectivamente</li>
                                        <li>Los precios pueden variar según el país y la tienda aplicable</li>
                                        <li>Cojauny se reserva el derecho a modificar precios con previo aviso de 30 días</li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="card">
                                    <h2>4. Premium Subscriptions</h2>
                                    <p>We offer four subscription tiers at the following approximate prices:</p>
                                    <div className="table-scroll">
                                        <table>
                                            <thead><tr><th>Tier</th><th>Price/month</th><th>Approx. saving</th></tr></thead>
                                            <tbody>
                                                <tr><td>Bronze</td><td>€2.29</td><td>—</td></tr>
                                                <tr><td>Silver</td><td>€4.49</td><td>~2 %</td></tr>
                                                <tr><td>Gold</td><td>€8.99</td><td>~2 %</td></tr>
                                                <tr><td>Legendary</td><td>€17.49</td><td>~4 %</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <ul>
                                        <li>Subscriptions <strong>auto-renew</strong> at the end of each billing period</li>
                                        <li>Payment is charged through your Google Play or App Store account</li>
                                        <li>You can cancel at any time; access continues until the end of the current period</li>
                                        <li>Refunds are subject to Google Play or Apple App Store policies</li>
                                        <li>Prices may vary by country and applicable store</li>
                                        <li>Cojauny reserves the right to change prices with 30 days&apos; prior notice</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* ── SECCIONES 5-9 ── */}
                <section className="section">
                    <div className="container">
                        {es ? (
                            <>
                                <div className="card">
                                    <h2>5. Conducta del usuario</h2>
                                    <p>Está prohibido:</p>
                                    <ul>
                                        <li>Hacer trampas, usar bots o explotar vulnerabilidades del juego</li>
                                        <li>Intentar acceder a datos de otros usuarios</li>
                                        <li>Interferir en el funcionamiento de los servidores</li>
                                        <li>Usar la App con fines comerciales sin autorización expresa</li>
                                    </ul>
                                    <p>El incumplimiento puede resultar en la suspensión o eliminación permanente de tu cuenta.</p>
                                </div>
                                <div className="card">
                                    <h2>6. Propiedad intelectual</h2>
                                    <p>Todo el contenido de la App (código, gráficos, sonidos, diseño, marca) es propiedad de Cojauny o sus licenciantes. No puedes reproducir, distribuir o crear obras derivadas sin autorización escrita.</p>
                                    <p>Se concede una licencia limitada, no exclusiva y no transferible para uso personal de la App.</p>
                                </div>
                                <div className="card">
                                    <h2>7. Limitación de responsabilidad</h2>
                                    <p>Cojauny no es responsable de:</p>
                                    <ul>
                                        <li>Interrupciones del servicio por mantenimiento o causas técnicas</li>
                                        <li>Pérdida de datos debida a fallos del dispositivo</li>
                                        <li>Daños indirectos o lucro cesante</li>
                                    </ul>
                                    <p>En la medida permitida por la legislación española aplicable.</p>
                                </div>
                                <div className="card">
                                    <h2>8. Modificaciones del servicio</h2>
                                    <p>Cojauny puede modificar, suspender o descontinuar la App o cualquier función en cualquier momento, con o sin previo aviso. Para cambios significativos en los términos, te notificaremos con 30 días de antelación.</p>
                                </div>
                                <div className="card">
                                    <h2>9. Ley aplicable</h2>
                                    <p>Estos términos se rigen por la legislación española. Cualquier disputa se resolverá en los tribunales de <strong>Madrid</strong>, salvo que la normativa de consumidores de tu país establezca otra jurisdicción.</p>
                                    <p>Contacto: <a href="mailto:support@cojauny.com">support@cojauny.com</a></p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="card">
                                    <h2>5. Prohibited Conduct</h2>
                                    <ul>
                                        <li>Cheating, using bots, or exploiting game vulnerabilities</li>
                                        <li>Attempting to access other users&apos; data</li>
                                        <li>Interfering with server operations</li>
                                        <li>Using the App for commercial purposes without written authorisation</li>
                                    </ul>
                                    <p>Violations may result in suspension or permanent deletion of your account.</p>
                                </div>
                                <div className="card">
                                    <h2>6. Intellectual Property</h2>
                                    <p>All content in the App (code, graphics, sounds, design, brand) is owned by Cojauny or its licensors. You may not reproduce, distribute, or create derivative works without written permission.</p>
                                    <p>A limited, non-exclusive, non-transferable licence is granted for personal use of the App.</p>
                                </div>
                                <div className="card">
                                    <h2>7. Limitation of Liability</h2>
                                    <p>Cojauny is not liable for:</p>
                                    <ul>
                                        <li>Service interruptions due to maintenance or technical issues</li>
                                        <li>Data loss due to device failure</li>
                                        <li>Indirect damages or loss of profits</li>
                                    </ul>
                                    <p>To the extent permitted by applicable Spanish law.</p>
                                </div>
                                <div className="card">
                                    <h2>8. Service Modifications</h2>
                                    <p>Cojauny may modify, suspend, or discontinue the App or any feature at any time, with or without notice. For significant changes to these terms, we will give 30 days&apos; prior notice.</p>
                                </div>
                                <div className="card">
                                    <h2>9. Applicable Law</h2>
                                    <p>These terms are governed by Spanish law. Any dispute shall be resolved in the courts of <strong>Madrid</strong>, unless consumer protection laws in your country provide otherwise.</p>
                                    <p>Contact: <a href="mailto:support@cojauny.com">support@cojauny.com</a></p>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </main>
        </LegalLayout>
    );
}
