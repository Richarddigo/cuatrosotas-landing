'use client';

import { useTranslations } from 'next-intl';
import { useLanguage } from '@/context/LanguageContext';
import { LegalLayout } from '@/components/LegalLayout';

export default function CookiesPage() {
    const { lang } = useLanguage();
    const cookiesT = useTranslations('cookies');
    const legalCommonT = useTranslations('legalCommon');
    const es = lang === 'es';
    const de = lang === 'de';
    const fr = lang === 'fr';

    return (
        <LegalLayout
            title={cookiesT('title')}
            subtitle={cookiesT('subtitle')}
            backLabel={legalCommonT('back')}
            updatedLabel={cookiesT('updated')}
        >
            <main id="main-content">
                <section className="section">
                    <div className="container">
                        {es && (
                            <>
                                <div className="card">
                                    <h2>1. ¿Qué son las cookies?</h2>
                                    <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo para recordar información y mejorar tu experiencia de navegación.</p>
                                </div>
                                <div className="card">
                                    <h2>2. Cookies que usamos</h2>
                                    <h3>Cookies esenciales</h3>
                                    <p>Necesarias para el funcionamiento básico de la web. No requieren consentimiento.</p>
                                    <h3>Cookies de analítica</h3>
                                    <p>Usamos <strong>Vercel Analytics</strong> con un enfoque sin cookies que deriva información agregada sin almacenar identificadores personales. No requiere consentimiento.</p>
                                    <h3>Identificadores de publicidad (solo en la app)</h3>
                                    <p>En la aplicación móvil, con tu consentimiento, podemos usar identificadores de publicidad del dispositivo para personalizar anuncios. Puedes gestionar este acceso desde los ajustes de tu dispositivo.</p>
                                </div>
                                <div className="card">
                                    <h2>3. Tu control</h2>
                                    <p>Puedes gestionar tus preferencias de cookies en cualquier momento desde el banner de cookies o desde la configuración de tu dispositivo. Ten en cuenta que bloquear las cookies esenciales puede afectar al funcionamiento de la web.</p>
                                </div>
                                <div className="card">
                                    <h2>4. Contacto</h2>
                                    <p>Para cualquier consulta sobre nuestra política de cookies, escríbenos a <a href="mailto:support@cojauny.com" className="text-accent hover:underline">support@cojauny.com</a>.</p>
                                </div>
                            </>
                        )}
                        {!es && !de && !fr && (
                            <>
                                <div className="card">
                                    <h2>1. What are cookies?</h2>
                                    <p>Cookies are small text files that websites store on your device to remember information and improve your browsing experience.</p>
                                </div>
                                <div className="card">
                                    <h2>2. Cookies we use</h2>
                                    <h3>Essential cookies</h3>
                                    <p>Required for basic website functionality. They do not require consent.</p>
                                    <h3>Analytics</h3>
                                    <p>We use <strong>Vercel Analytics</strong> with a cookieless approach that derives aggregated insights without storing personal identifiers. No consent is required.</p>
                                    <h3>Advertising identifiers (app only)</h3>
                                    <p>In the mobile app, with your consent, we may use device advertising identifiers for ad personalisation. You can manage this access from your device settings.</p>
                                </div>
                                <div className="card">
                                    <h2>3. Your control</h2>
                                    <p>You can manage your cookie preferences at any time via the cookie banner or your device settings. Note that blocking essential cookies may affect website functionality.</p>
                                </div>
                                <div className="card">
                                    <h2>4. Contact</h2>
                                    <p>For any questions about our cookie policy, write to us at <a href="mailto:support@cojauny.com" className="text-accent hover:underline">support@cojauny.com</a>.</p>
                                </div>
                            </>
                        )}
                        {de && (
                            <>
                                <div className="card">
                                    <h2>1. Was sind Cookies?</h2>
                                    <p>Cookies sind kleine Textdateien, die Websites auf Ihrem Gerät speichern, um Informationen zu merken und Ihr Nutzungserlebnis zu verbessern.</p>
                                </div>
                                <div className="card">
                                    <h2>2. Von uns verwendete Cookies</h2>
                                    <h3>Essenzielle Cookies</h3>
                                    <p>Für die grundlegende Funktionalität der Website erforderlich. Kein Einverständnis nötig.</p>
                                    <h3>Analyse</h3>
                                    <p>Wir nutzen <strong>Vercel Analytics</strong> ohne Cookies, das aggregierte Erkenntnisse ohne persönliche Identifikatoren gewinnt. Kein Einverständnis erforderlich.</p>
                                    <h3>Werbe-IDs (nur in der App)</h3>
                                    <p>In der mobilen App können wir mit Ihrer Einwilligung Geräte-Werbe-IDs zur Anzeigenpersonalisierung verwenden. Diese können Sie in den Geräteeinstellungen verwalten.</p>
                                </div>
                                <div className="card">
                                    <h2>3. Ihre Kontrolle</h2>
                                    <p>Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Banner oder Ihre Geräteeinstellungen verwalten.</p>
                                </div>
                                <div className="card">
                                    <h2>4. Kontakt</h2>
                                    <p>Bei Fragen zu unserer Cookie-Richtlinie schreiben Sie uns an <a href="mailto:support@cojauny.com" className="text-accent hover:underline">support@cojauny.com</a>.</p>
                                </div>
                            </>
                        )}
                        {fr && (
                            <>
                                <div className="card">
                                    <h2>1. Que sont les cookies ?</h2>
                                    <p>Les cookies sont de petits fichiers texte que les sites web stockent sur votre appareil pour mémoriser des informations et améliorer votre expérience de navigation.</p>
                                </div>
                                <div className="card">
                                    <h2>2. Cookies que nous utilisons</h2>
                                    <h3>Cookies essentiels</h3>
                                    <p>Nécessaires au fonctionnement de base du site. Ils ne nécessitent pas de consentement.</p>
                                    <h3>Analyse</h3>
                                    <p>Nous utilisons <strong>Vercel Analytics</strong> sans cookies, qui dérive des informations agrégées sans stocker d&apos;identifiants personnels. Aucun consentement n&apos;est requis.</p>
                                    <h3>Identifiants publicitaires (application uniquement)</h3>
                                    <p>Dans l&apos;application mobile, avec votre consentement, nous pouvons utiliser les identifiants publicitaires de l&apos;appareil. Vous pouvez gérer cet accès depuis les paramètres de votre appareil.</p>
                                </div>
                                <div className="card">
                                    <h2>3. Votre contrôle</h2>
                                    <p>Vous pouvez gérer vos préférences de cookies à tout moment via la bannière ou les paramètres de votre appareil.</p>
                                </div>
                                <div className="card">
                                    <h2>4. Contact</h2>
                                    <p>Pour toute question sur notre politique de cookies, écrivez-nous à <a href="mailto:support@cojauny.com" className="text-accent hover:underline">support@cojauny.com</a>.</p>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </main>
        </LegalLayout>
    );
}
