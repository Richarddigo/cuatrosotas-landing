import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalLayout } from '@/components/LegalLayout';
import { SHOW_PREMIUM_PUBLIC_INFO } from '@/lib/publicationFlags';
import type { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

interface Props { params: Promise<{ locale: Locale }> }

export default async function TermsPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const termsT = await getTranslations({ locale, namespace: 'terms' });
    const legalCommonT = await getTranslations({ locale, namespace: 'legalCommon' });
    const t = await getTranslations({ locale, namespace: 'termsContent' });

    return (
        <LegalLayout
            title={termsT('title')}
            subtitle={termsT('subtitle')}
            backLabel={legalCommonT('back')}
            updatedLabel={termsT('updated')}
        >
            <main id="main-content">
                {/* â”€â”€ SECTIONS 1-3 â”€â”€ */}
                <section className="section">
                    <div className="container">
                        <div className="card">
                            <h2>{t('s1Title')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t('s1Desc') }} />
                        </div>
                        <div className="card">
                            <h2>{t('s2Title')}</h2>
                            <p>{t('s2Intro')}</p>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: t('s2AIMode') }} />
                                <li dangerouslySetInnerHTML={{ __html: t('s2LocalMP') }} />
                                <li dangerouslySetInnerHTML={{ __html: t('s2OnlineMP') }} />
                                <li dangerouslySetInnerHTML={{ __html: t('s2Stats') }} />
                                {SHOW_PREMIUM_PUBLIC_INFO && <li dangerouslySetInnerHTML={{ __html: t('s2Premium') }} />}
                            </ul>
                        </div>
                        <div className="card">
                            <h2>{t('s3Title')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t('s3Intro') }} />
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: t('s3Age') }} />
                                <li>{t('s3Security')}</li>
                                <li>{t('s3Transfer')}</li>
                                <li>{t('s3NoFraud')}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {SHOW_PREMIUM_PUBLIC_INFO && (
                    <section className="section bg-light">
                        <div className="container">
                            <div className="card">
                                <h2>{t('s4Title')}</h2>
                                <p>{t('s4Intro')}</p>
                                <div className="table-scroll">
                                    <table>
                                        <thead><tr><th>{t('s4ColTier')}</th><th>{t('s4ColPrice')}</th><th>{t('s4ColDiscount')}</th></tr></thead>
                                        <tbody>
                                            <tr><td>Bronze / Bronce</td><td>â‚¬2.29</td><td>â€”</td></tr>
                                            <tr><td>Silver / Plata</td><td>â‚¬4.49</td><td>~2 %</td></tr>
                                            <tr><td>Gold / Oro</td><td>â‚¬8.99</td><td>~2 %</td></tr>
                                            <tr><td>Legendary / Legendaria</td><td>â‚¬17.49</td><td>~4 %</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <ul>
                                    <li dangerouslySetInnerHTML={{ __html: t('s4Renew') }} />
                                    <li>{t('s4Billing')}</li>
                                    <li>{t('s4Cancel')}</li>
                                    <li>{t('s4Refund')}</li>
                                    <li>{t('s4PriceVar')}</li>
                                    <li>{t('s4PriceChange')}</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                )}

                {/* â”€â”€ SECTIONS 5-9 â”€â”€ */}
                <section className="section">
                    <div className="container">
                        <div className="card">
                            <h2>{t('s5Title')}</h2>
                            <p>{t('s5Intro')}</p>
                            <ul>
                                <li>{t('s5Cheat')}</li>
                                <li>{t('s5Data')}</li>
                                <li>{t('s5Server')}</li>
                                <li>{t('s5Commercial')}</li>
                            </ul>
                            <p>{t('s5Sanction')}</p>
                        </div>
                        <div className="card">
                            <h2>{t('s6Title')}</h2>
                            <p>{t('s6Desc')}</p>
                            <p>{t('s6License')}</p>
                        </div>
                        <div className="card">
                            <h2>{t('s7Title')}</h2>
                            <p>{t('s7Intro')}</p>
                            <ul>
                                <li>{t('s7Interruptions')}</li>
                                <li>{t('s7DataLoss')}</li>
                                <li>{t('s7Indirect')}</li>
                            </ul>
                            <p>{t('s7Law')}</p>
                        </div>
                        <div className="card">
                            <h2>{t('s8Title')}</h2>
                            <p>{t('s8Desc')}</p>
                        </div>
                        <div className="card">
                            <h2>{t('s9Title')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t('s9Desc') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('s9Contact') }} />
                        </div>
                    </div>
                </section>
            </main>
        </LegalLayout>
    );
}
