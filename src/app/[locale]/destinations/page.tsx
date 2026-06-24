import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import DestinationCard from '@/components/DestinationCard';
import CtaBand from '@/components/CtaBand';
import { getAllCountries, getDestinations, pickLocale } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'destinations' });
  return buildMetadata({
    locale: params.locale,
    title: `${t('title')} — Uzbekistan & Central Asia`,
    description: t('subtitle'),
    path: 'destinations',
  });
}

export default async function DestinationsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('destinations');
  const tn = await getTranslations('nav');
  const countries = getAllCountries();

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/khiva.jpg"
        breadcrumbs={[{ label: tn('home'), href: '/' }, { label: tn('destinations') }]}
      />

      {countries.map((country) => {
        const dest = getDestinations(country.slug);
        const name = pickLocale(country.name, locale);
        return (
          <section key={country.slug} className="section">
            <div className="container-px">
              <div className="mb-8 flex items-center gap-3">
                <h2 className="heading-display text-2xl sm:text-3xl">{name}</h2>
                {country.status === 'coming-soon' && (
                  <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    Coming soon
                  </span>
                )}
              </div>

              {dest.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {dest.map((d) => (
                    <DestinationCard key={d.slug} destination={d} locale={locale} />
                  ))}
                </div>
              ) : (
                <p className="max-w-2xl text-ink/60">
                  {name} joins our collection as we expand across Central Asia and the Caucasus.
                  Register your interest and we will be the first to design your journey.
                </p>
              )}
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
