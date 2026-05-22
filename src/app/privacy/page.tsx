'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t, privacyTranslations } from '@/i18n/translations';

export default function PrivacyPage() {
    const { lang } = useLanguage();
    const es = lang === 'es';

    return (
        <main id="main-content">
            {/* ── INTRO BANNER ── */}
            <section className="page-intro">
                <div className="container">
                    <h2>{t(privacyTranslations.title, lang)}</h2>
                    <p>{t(privacyTranslations.subtitle, lang)}</p>
                    <span className="page-date">{t(privacyTranslations.updated, lang)}</span>
                </div>
            </section>

            {/* ── SECCIONES 1-3 ── */}
            <section className="section">
                <div className="container">
                    {es ? (
                        <>
                            <div className="card">
                                <h2>1. Introducción</h2>
                                <p>Bienvenido a <strong>Cuatro Sotas</strong>, desarrollada por <strong>Cojauny</strong>. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información personal de conformidad con el Reglamento General de Protección de Datos (RGPD) y la normativa española aplicable.</p>
                                <div className="highlight">
                                    <p><span aria-hidden="true">⚠️</span> Al utilizar la App, aceptas la recopilación y uso de información de acuerdo con esta política.</p>
                                </div>
                            </div>
                            <div className="card">
                                <h2>2. Información que recopilamos</h2>
                                <h3>2.1 Información de cuenta</h3>
                                <ul>
                                    <li><strong>Correo electrónico:</strong> para identificar tu cuenta</li>
                                    <li><strong>Nombre de perfil:</strong> para mostrar en rankings</li>
                                    <li><strong>Foto de perfil:</strong> opcional, para personalización</li>
                                </ul>
                                <h3>2.2 Datos de juego</h3>
                                <ul>
                                    <li>Estadísticas de partidas (victorias, derrotas, puntuación)</li>
                                    <li>Historial de partidas y preferencias de configuración</li>
                                </ul>
                                <h3>2.3 Información técnica</h3>
                                <ul>
                                    <li>Tipo de dispositivo y sistema operativo</li>
                                    <li>Identificadores de publicidad (solo usuarios no premium, con consentimiento)</li>
                                    <li>Datos de diagnóstico y errores de la aplicación</li>
                                    <li>Datos de uso agregados recopilados mediante Firebase Analytics</li>
                                </ul>
                                <h3>2.4 Compras y suscripciones Premium</h3>
                                <ul>
                                    <li>Nivel de suscripción (Bronce, Plata, Oro, Legendaria) y fecha de expiración</li>
                                    <li>Historial de compras de consumibles</li>
                                    <li><strong>No almacenamos datos de pago</strong> — el procesamiento lo realiza Google Play o Apple App Store</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h2>3. Cómo usamos tu información</h2>
                                <table>
                                    <thead><tr><th>Propósito</th><th>Base legal</th></tr></thead>
                                    <tbody>
                                        <tr><td>Proporcionar acceso a la App</td><td>Ejecución del contrato</td></tr>
                                        <tr><td>Guardar progreso y estadísticas</td><td>Interés legítimo</td></tr>
                                        <tr><td>Mostrar anuncios (usuarios no premium)</td><td>Consentimiento</td></tr>
                                        <tr><td>Procesar suscripciones y beneficios premium</td><td>Ejecución del contrato</td></tr>
                                        <tr><td>Análisis de uso y mejora de la App</td><td>Interés legítimo</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="card">
                                <h2>1. Data Controller</h2>
                                <p>Controller: <strong>Cojauny</strong>. Contact: <a href="mailto:support@cojauny.com">support@cojauny.com</a>. Country: Spain.</p>
                                <div className="highlight">
                                    <p><span aria-hidden="true">⚠️</span> By using the App, you confirm you have read this privacy policy.</p>
                                </div>
                            </div>
                            <div className="card">
                                <h2>2. Data We Collect</h2>
                                <ul>
                                    <li>Usage and diagnostics data (app events, errors, performance)</li>
                                    <li>Device or advertising identifiers (when ads are enabled, with consent)</li>
                                    <li>In-app purchase and subscription data (handled by App Store / Play Store)</li>
                                    <li>Account data when you sign in with Google (identifier, display name, email)</li>
                                    <li>Preferences and settings (language, sound, game settings)</li>
                                    <li>Game statistics (wins, losses, score, round history)</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h2>3. How We Use Your Data</h2>
                                <table>
                                    <thead><tr><th>Purpose</th><th>Legal Basis</th></tr></thead>
                                    <tbody>
                                        <tr><td>Provide and maintain the service</td><td>Contract performance</td></tr>
                                        <tr><td>Save progress and statistics</td><td>Legitimate interest</td></tr>
                                        <tr><td>Display ads (free users)</td><td>Consent</td></tr>
                                        <tr><td>Manage subscriptions and Premium benefits</td><td>Contract performance</td></tr>
                                        <tr><td>Analytics and product improvement</td><td>Legitimate interest</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* ── SECCIONES 4-5 ── */}
            <section className="section bg-light">
                <div className="container">
                    {es ? (
                        <>
                            <div className="card">
                                <h2>4. Servicios de terceros</h2>
                                <p>La App utiliza los siguientes servicios externos:</p>
                                <ul>
                                    <li><strong>Firebase (Google):</strong> Autenticación, base de datos en la nube y análisis de uso. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Política de privacidad de Firebase</a></li>
                                    <li><strong>Google AdMob:</strong> Publicidad personalizada para usuarios no premium. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de privacidad de Google</a></li>
                                    <li><strong>Google Play / Apple App Store:</strong> Procesamiento seguro de compras y suscripciones</li>
                                </ul>
                                <h3>Cookies y tecnologías de seguimiento</h3>
                                <p>La App utiliza Firebase Analytics para recopilar datos de uso de forma agregada y anónima. Los usuarios no premium que consientan podrán recibir anuncios personalizados mediante Google AdMob.</p>
                            </div>
                            <div className="card">
                                <h2>5. Suscripciones Premium</h2>
                                <p>Ofrecemos cuatro niveles: <strong>Bronce</strong>, <strong>Plata</strong>, <strong>Oro</strong> y <strong>Legendaria</strong>.</p>
                                <ul>
                                    <li>Las suscripciones se renuevan automáticamente al final de cada periodo</li>
                                    <li>Puedes cancelar en cualquier momento desde Google Play o App Store</li>
                                    <li>Almacenamos tu nivel de suscripción y fecha de expiración para proporcionarte los beneficios</li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="card">
                                <h2>4. Third-Party Services</h2>
                                <ul>
                                    <li><strong>Firebase (Google):</strong> Authentication, cloud database, analytics. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase Privacy Policy</a></li>
                                    <li><strong>Google AdMob:</strong> Personalised advertising for free users. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a> · <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener">AdMob data</a></li>
                                    <li><strong>Google Play / Apple App Store:</strong> Secure purchase and subscription processing</li>
                                </ul>
                                <p>These providers may collect data under their own policies. Where applicable, you can manage consent in the App&apos;s privacy settings.</p>
                            </div>
                            <div className="card">
                                <h2>5. Premium Subscriptions</h2>
                                <p>We offer four tiers: <strong>Bronze</strong>, <strong>Silver</strong>, <strong>Gold</strong> and <strong>Legendary</strong>.</p>
                                <ul>
                                    <li>Subscriptions renew automatically at the end of each period</li>
                                    <li>You can cancel at any time from Google Play or App Store</li>
                                    <li>We store your subscription tier and expiry date to provide the corresponding benefits</li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* ── SECCIONES 6-8 ── */}
            <section className="section">
                <div className="container">
                    {es ? (
                        <>
                            <div className="card">
                                <h2>6. Tus derechos</h2>
                                <p>Conforme al RGPD, tienes derecho a:</p>
                                <ul>
                                    <li><span aria-hidden="true">📋</span> <strong>Acceso:</strong> solicitar una copia de tus datos personales</li>
                                    <li><span aria-hidden="true">✏️</span> <strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
                                    <li><span aria-hidden="true">🗑️</span> <strong>Supresión:</strong> solicitar la eliminación de tus datos</li>
                                    <li><span aria-hidden="true">📦</span> <strong>Portabilidad:</strong> recibir tus datos en formato legible</li>
                                    <li><span aria-hidden="true">🚫</span> <strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo</li>
                                    <li><span aria-hidden="true">⏸️</span> <strong>Limitación:</strong> solicitar la restricción del tratamiento</li>
                                </ul>
                                <p>Para ejercer cualquiera de estos derechos: <a href="mailto:support@cojauny.com">support@cojauny.com</a>. Respondemos en un plazo máximo de 30 días.</p>
                            </div>
                            <div className="card">
                                <h2>7. Retención de datos</h2>
                                <ul>
                                    <li><strong>Datos de cuenta y juego:</strong> mientras tu cuenta permanezca activa</li>
                                    <li><strong>Datos de suscripción:</strong> durante la vigencia del contrato y hasta 3 años después para cumplimiento fiscal</li>
                                    <li><strong>Datos de diagnóstico:</strong> máximo 90 días desde su recopilación</li>
                                    <li><strong>Tras eliminar tu cuenta:</strong> eliminación completa en un plazo máximo de 30 días, salvo obligación legal</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h2>8. Seguridad</h2>
                                <ul>
                                    <li><span aria-hidden="true">🔒</span> Comunicaciones cifradas mediante HTTPS/TLS</li>
                                    <li><span aria-hidden="true">🔐</span> Autenticación segura a través de Google Sign-In</li>
                                    <li><span aria-hidden="true">🛡️</span> Reglas de seguridad en base de datos Firestore</li>
                                </ul>
                                <p>Aunque aplicamos medidas técnicas y organizativas adecuadas, ningún sistema es completamente seguro. En caso de brecha de seguridad, te notificaremos conforme al RGPD.</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="card">
                                <h2>6. Your Rights</h2>
                                <p>Under GDPR, you have the right to:</p>
                                <ul>
                                    <li><strong>Access:</strong> request a copy of your personal data</li>
                                    <li><strong>Rectification:</strong> correct inaccurate or incomplete data</li>
                                    <li><strong>Erasure:</strong> request deletion of your data</li>
                                    <li><strong>Portability:</strong> receive your data in a structured, readable format</li>
                                    <li><strong>Objection:</strong> object to processing based on legitimate interest</li>
                                    <li><strong>Restriction:</strong> request restriction of processing</li>
                                </ul>
                                <p>To exercise these rights: <a href="mailto:support@cojauny.com">support@cojauny.com</a>. We respond within 30 days. You may also file a complaint with the AEPD: <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>.</p>
                            </div>
                            <div className="card">
                                <h2>7. Data Retention</h2>
                                <ul>
                                    <li><strong>Account and game data:</strong> while your account remains active</li>
                                    <li><strong>Subscription data:</strong> during the contract and up to 3 years after for fiscal compliance</li>
                                    <li><strong>Diagnostics data:</strong> maximum 90 days from collection</li>
                                    <li><strong>After account deletion:</strong> complete deletion within 30 days, except where legally required</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h2>8. Security</h2>
                                <ul>
                                    <li><span aria-hidden="true">🔒</span> Encrypted communications via HTTPS/TLS</li>
                                    <li><span aria-hidden="true">🔐</span> Secure authentication via Google Sign-In</li>
                                    <li><span aria-hidden="true">🛡️</span> Firestore security rules</li>
                                </ul>
                                <p>We apply reasonable technical and organisational measures. No system is completely secure. In the event of a security breach, we will notify you as required by GDPR.</p>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* ── SECCIONES 9-10 ── */}
            <section className="section bg-light">
                <div className="container">
                    {es ? (
                        <>
                            <div className="card">
                                <h2>9. Menores de edad</h2>
                                <p>Esta App <strong>no está dirigida a menores de 13 años</strong>. Si detectamos que hemos recopilado datos de un menor sin el consentimiento parental adecuado, los eliminaremos inmediatamente.</p>
                            </div>
                            <div className="card">
                                <h2>10. Cambios en esta política</h2>
                                <p>Podemos actualizar esta política ocasionalmente. Te notificaremos cualquier cambio significativo mediante una notificación en la App o por correo electrónico. La fecha de &quot;Última actualización&quot; siempre refleja la versión vigente.</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="card">
                                <h2>9. Children</h2>
                                <p>The App is <strong>not directed to children under 13</strong> (or under 16 in some EU member states). If we become aware that we have collected data from a minor without appropriate parental consent, we will delete it immediately.</p>
                            </div>
                            <div className="card">
                                <h2>10. Changes to This Policy</h2>
                                <p>We may update this policy occasionally. We will notify you of significant changes via an in-app notification or email. The effective date at the top always reflects the current version.</p>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}
