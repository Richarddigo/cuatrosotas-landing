import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalLayout } from '@/components/LegalLayout';
import { SHOW_PREMIUM_PUBLIC_INFO } from '@/lib/publicationFlags';
import type { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

interface Props { params: Promise<{ locale: Locale }> }

export default async function PrivacyPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const privacyT = await getTranslations({ locale, namespace: 'privacy' });
    const legalCommonT = await getTranslations({ locale, namespace: 'legalCommon' });
    const t = await getTranslations({ locale, namespace: 'privacyContent' });

    return (
        <LegalLayout
            title={privacyT('title')}
            subtitle={privacyT('subtitle')}
            backLabel={legalCommonT('back')}
            updatedLabel={privacyT('updated')}
        >
            <main id="main-content">
                {/* â”€â”€ SECTIONS 1-3 â”€â”€ */}
                <section className="section">
                    <div className="container">
                        <div className="card">
                            <h2>{t('s1Title')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t('s1Desc') }} />
                            <div className="highlight">
                                <p><span aria-hidden="true">âš ï¸</span> {t('s1Warning')}</p>
                            </div>
                        </div>
                        <div className="card">
                            <h2>{t('s2Title')}</h2>
                            <h3>{t('s2AccountTitle')}</h3>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: t('s2AccountEmail') }} />
                                <li dangerouslySetInnerHTML={{ __html: t('s2AccountName') }} />
                                <li dangerouslySetInnerHTML={{ __html: t('s2AccountPhoto') }} />
                            </ul>
                            <h3>{t('s2GameTitle')}</h3>
                            <ul>
                                <li>{t('s2GameStats')}</li>
                                <li>{t('s2GameHistory')}</li>
                            </ul>
                            <h3>{t('s2TechTitle')}</h3>
                            <ul>
                                <li>{t('s2TechDevice')}</li>
                                <li>{t('s2TechAds')}</li>
                                <li>{t('s2TechDiag')}</li>
                                <li>{t('s2TechAnalytics')}</li>
                            </ul>
                            {SHOW_PREMIUM_PUBLIC_INFO && (
                                <>
                                    <h3>{t('s2PremiumTitle')}</h3>
                                    <ul>
                                        <li>{t('s2PremiumLevel')}</li>
                                        <li>{t('s2PremiumHistory')}</li>
                                        <li dangerouslySetInnerHTML={{ __html: t('s2PremiumPayment') }} />
                                    </ul>
                                </>
                            )}
                        </div>
                        <div className="card">
                            <h2>{t('s3Title')}</h2>
                            <div className="table-scroll">
                                <table>
                                    <thead><tr><th>{t('s3Col1')}</th><th>{t('s3Col2')}</th></tr></thead>
                                    <tbody>
                                        <tr><td>{t('s3Row1Purpose')}</td><td>{t('s3Row1Basis')}</td></tr>
                                        <tr><td>{t('s3Row2Purpose')}</td><td>{t('s3Row2Basis')}</td></tr>
                                        <tr><td>{t('s3Row3Purpose')}</td><td>{t('s3Row3Basis')}</td></tr>
                                        {SHOW_PREMIUM_PUBLIC_INFO && <tr><td>{t('s3Row4Purpose')}</td><td>{t('s3Row4Basis')}</td></tr>}
                                        <tr><td>{t('s3Row5Purpose')}</td><td>{t('s3Row5Basis')}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* â”€â”€ SECTIONS 4-5 â”€â”€ */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="card">
                            <h2>{t('s4Title')}</h2>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: t('s4FirebaseLi') }} />
                                <li dangerouslySetInnerHTML={{ __html: t('s4AdmobLi') }} />
                                {SHOW_PREMIUM_PUBLIC_INFO && <li dangerouslySetInnerHTML={{ __html: t('s4StoreLi') }} />}
                            </ul>
                            <p>{t('s4TrackingIntro')}</p>
                        </div>
                        {SHOW_PREMIUM_PUBLIC_INFO && (
                            <div className="card">
                                <h2>{t('s5Title')}</h2>
                                <p dangerouslySetInnerHTML={{ __html: t('s5Intro') }} />
                                <ul>
                                    <li>{t('s5Renew')}</li>
                                    <li>{t('s5Cancel')}</li>
                                    <li>{t('s5Store')}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </section>

                {/* â”€â”€ SECTIONS 6-8 â”€â”€ */}
                <section className="section">
                    <div className="container">
                        <div className="card">
                            <h2>{t('s6Title')}</h2>
                            <p>{t('s6Intro')}</p>
                            <ul>
                                <li><span aria-hidden="true">ðŸ“‹</span> <span dangerouslySetInnerHTML={{ __html: t('s6Access') }} /></li>
                                <li><span aria-hidden="true">âœï¸</span> <span dangerouslySetInnerHTML={{ __html: t('s6Rectify') }} /></li>
                                <li><span aria-hidden="true">ðŸ—‘ï¸</span> <span dangerouslySetInnerHTML={{ __html: t('s6Erase') }} /></li>
                                <li><span aria-hidden="true">ðŸ“¦</span> <span dangerouslySetInnerHTML={{ __html: t('s6Portability') }} /></li>
                                <li><span aria-hidden="true">ðŸš«</span> <span dangerouslySetInnerHTML={{ __html: t('s6Object') }} /></li>
                                <li><span aria-hidden="true">â¸ï¸</span> <span dangerouslySetInnerHTML={{ __html: t('s6Restrict') }} /></li>
                            </ul>
                            <p dangerouslySetInnerHTML={{ __html: t('s6Contact') }} />
                        </div>
                        <div className="card">
                            <h2>{t('s7Title')}</h2>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: t('s7Account') }} />
                                {SHOW_PREMIUM_PUBLIC_INFO && <li dangerouslySetInnerHTML={{ __html: t('s7Sub') }} />}
                                <li dangerouslySetInnerHTML={{ __html: t('s7Diag') }} />
                                <li dangerouslySetInnerHTML={{ __html: t('s7Delete') }} />
                            </ul>
                        </div>
                        <div className="card">
                            <h2>{t('s8Title')}</h2>
                            <ul>
                                <li><span aria-hidden="true">ðŸ”’</span> {t('s8Https')}</li>
                                <li><span aria-hidden="true">ðŸ”</span> {t('s8Auth')}</li>
                                <li><span aria-hidden="true">ðŸ›¡ï¸</span> {t('s8Firestore')}</li>
                            </ul>
                            <p>{t('s8Disclaimer')}</p>
                        </div>
                    </div>
                </section>

                {/* â”€â”€ SECTIONS 9-10 â”€â”€ */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="card">
                            <h2>{t('s9Title')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t('s9Desc') }} />
                        </div>
                        <div className="card">
                            <h2>{t('s10Title')}</h2>
                            <p>{t('s10Desc')}</p>
                        </div>
                    </div>
                </section>
            </main>
        </LegalLayout>
    );
}
