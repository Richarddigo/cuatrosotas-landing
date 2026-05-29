import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalLayout } from '@/components/LegalLayout';
import type { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

interface Props { params: Promise<{ locale: Locale }> }

export default async function CookiesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const cookiesT = await getTranslations({ locale, namespace: 'cookies' });
    const legalCommonT = await getTranslations({ locale, namespace: 'legalCommon' });

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
                        <div className="card">
                            <h2>{cookiesT('s1Title')}</h2>
                            <p>{cookiesT('s1Desc')}</p>
                        </div>
                        <div className="card">
                            <h2>{cookiesT('s2Title')}</h2>
                            <h3>{cookiesT('s2EssentialTitle')}</h3>
                            <p>{cookiesT('s2EssentialDesc')}</p>
                            <h3>{cookiesT('s2AnalyticsTitle')}</h3>
                            <p dangerouslySetInnerHTML={{ __html: cookiesT('s2AnalyticsDesc') }} />
                            <h3>{cookiesT('s2AdsTitle')}</h3>
                            <p>{cookiesT('s2AdsDesc')}</p>
                        </div>
                        <div className="card">
                            <h2>{cookiesT('s3Title')}</h2>
                            <p>{cookiesT('s3Desc')}</p>
                        </div>
                        <div className="card">
                            <h2>{cookiesT('s4Title')}</h2>
                            <p>
                                {cookiesT.rich('s4Desc', {
                                    link: (chunks) => (
                                        <a href="mailto:support@cojauny.com" className="text-accent hover:underline">
                                            {chunks}
                                        </a>
                                    )
                                })}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </LegalLayout>
    );
}
