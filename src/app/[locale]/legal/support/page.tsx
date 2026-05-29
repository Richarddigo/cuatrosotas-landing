import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { LegalLayout } from '@/components/LegalLayout';
import { SHOW_PREMIUM_PUBLIC_INFO } from '@/lib/publicationFlags';
import type { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

interface Props { params: Promise<{ locale: Locale }> }

export default async function SupportPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const supportT = await getTranslations({ locale, namespace: 'support' });
    const legalCommonT = await getTranslations({ locale, namespace: 'legalCommon' });
    const t = await getTranslations({ locale, namespace: 'supportContent' });

    return (
        <LegalLayout
            title={supportT('contactTitle')}
            subtitle={supportT('contactDesc')}
            backLabel={legalCommonT('back')}
        >
            <main id="main-content">
                {/* â”€â”€ CANALES DE CONTACTO â”€â”€ */}
                <section className="section" aria-labelledby="contact-channels">
                    <div className="container">
                        <div className="contact-channels-grid">
                            <div className="contact-channel">
                                <span className="icon" aria-hidden="true">ðŸ”§</span>
                                <strong>{supportT('techSupport')}</strong>
                                <a href="mailto:support@cojauny.com">support@cojauny.com</a>
                            </div>
                            <div className="contact-channel">
                                <span className="icon" aria-hidden="true">ðŸ’¡</span>
                                <strong>{supportT('suggestions')}</strong>
                                <a href="mailto:cojauny@cojauny.com">cojauny@cojauny.com</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* â”€â”€ TIEMPOS DE RESPUESTA â”€â”€ */}
                <section className="section bg-light" aria-labelledby="times-title">
                    <div className="container">
                        <h2 id="times-title" className="section-title">
                            {supportT('responseTimes')}
                        </h2>
                        <div className="modes-grid">
                            <div className="mode-card">
                                <span className="mode-icon" aria-hidden="true">ðŸ”§</span>
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
                                <span className="mode-icon" aria-hidden="true">ðŸ”’</span>
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
                                <span className="mode-icon" aria-hidden="true">ðŸ’¡</span>
                                <div>
                                    <h3>{supportT('suggestionsTime')}</h3>
                                    <p>{supportT('suggestionsDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* â”€â”€ FAQ: JUEGO â”€â”€ */}
                <section className="section" aria-labelledby="faq-game-title">
                    <div className="container">
                        <h2 id="faq-game-title" className="section-title">
                            {supportT('faqGameTitle')}
                        </h2>
                        <div className="faq-item">
                            <h3>{t('faq1Q')}</h3>
                            <p>{t('faq1A')}</p>
                        </div>
                        <div className="faq-item">
                            <h3>{t('faq2Q')}</h3>
                            <p dangerouslySetInnerHTML={{ __html: t('faq2A') }} />
                        </div>
                        <div className="faq-item">
                            <h3>{t('faq3Q')}</h3>
                            <p>{t('faq3A')}</p>
                        </div>
                        <div className="faq-item">
                            <h3>{t('faq4Q')}</h3>
                            <p dangerouslySetInnerHTML={{ __html: t('faq4A') }} />
                        </div>
                        <div className="faq-item">
                            <h3>{t('faq5Q')}</h3>
                            <p>{t('faq5A')}</p>
                        </div>
                        <div className="faq-item">
                            <h3>{t('faq6Q')}</h3>
                            <p>{t('faq6A')}</p>
                        </div>
                    </div>
                </section>

                {SHOW_PREMIUM_PUBLIC_INFO && (
                    <section className="section bg-light" aria-labelledby="faq-account-title">
                        <div className="container">
                            <h2 id="faq-account-title" className="section-title">
                                {supportT('faqAccountTitle')}
                            </h2>
                            <div className="faq-item">
                                <h3>{t('acct1Q')}</h3>
                                <p dangerouslySetInnerHTML={{ __html: t('acct1A') }} />
                            </div>
                            <div className="faq-item">
                                <h3>{t('acct2Q')}</h3>
                                <p dangerouslySetInnerHTML={{ __html: t('acct2A') }} />
                            </div>
                            <div className="faq-item">
                                <h3>{t('acct3Q')}</h3>
                                <p>{t('acct3A')}</p>
                            </div>
                            <div className="faq-item">
                                <h3>{t('acct4Q')}</h3>
                                <p dangerouslySetInnerHTML={{ __html: t('acct4A') }} />
                            </div>
                        </div>
                    </section>
                )}

                {/* â”€â”€ FAQ: PRIVACIDAD â”€â”€ */}
                <section className="section" aria-labelledby="faq-privacy-title">
                    <div className="container">
                        <h2 id="faq-privacy-title" className="section-title">
                            {supportT('faqPrivacyTitle')}
                        </h2>
                        <div className="faq-item">
                            <h3>{t('priv1Q')}</h3>
                            <p dangerouslySetInnerHTML={{ __html: t('priv1A') }} />
                        </div>
                        <div className="faq-item">
                            <h3>{t('priv2Q')}</h3>
                            <p>
                                {t.rich('priv2A', {
                                    link: (chunks) => <Link href="/legal/privacy">{chunks}</Link>
                                })}
                            </p>
                        </div>
                        <div className="faq-item">
                            <h3>{t('priv3Q')}</h3>
                            <p>
                                {t.rich('priv3A', {
                                    link: (chunks) => <Link href="/legal/privacy">{chunks}</Link>
                                })}
                            </p>
                        </div>
                    </div>
                </section>

                {/* â”€â”€ DOCUMENTOS LEGALES â”€â”€ */}
                <section className="section bg-light" aria-labelledby="legal-docs-title">
                    <div className="container">
                        <h2 id="legal-docs-title" className="section-title">
                            {supportT('legalDocsTitle')}
                        </h2>
                        <div className="legal-docs-grid">
                            <Link href="/legal/privacy" className="legal-doc-card">
                                <span className="icon" aria-hidden="true">ðŸ”’</span>
                                <div>
                                    <strong>{supportT('privacyTitle')}</strong>
                                    <p>{supportT('privacyDesc')}</p>
                                </div>
                            </Link>
                            <Link href="/legal/terms" className="legal-doc-card">
                                <span className="icon" aria-hidden="true">ðŸ“‹</span>
                                <div>
                                    <strong>{supportT('termsTitle')}</strong>
                                    <p>{SHOW_PREMIUM_PUBLIC_INFO ? supportT('termsDesc') : t('termsDescNoLink')}</p>
                                </div>
                            </Link>
                            <Link href="/legal/cookies" className="legal-doc-card">
                                <span className="icon" aria-hidden="true">ðŸª</span>
                                <div>
                                    <strong>{supportT('cookiesTitle')}</strong>
                                    <p>{supportT('cookiesDesc')}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </LegalLayout>
    );
}
