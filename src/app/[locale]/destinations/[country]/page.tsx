import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import DestinationCard from '@/components/DestinationCard';
import CtaBand from '@/components/CtaBand';
import { getAllCountries, getCountry, getDestinations, pickLocale } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import { locales, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllCountries().map((c) => ({ locale, country: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; country: string };
}): Promise<Metadata> {
  const country = getCountry(params.country);
  if (!country) return {};
  const name = pickLocale(country.name, params.locale);
  return buildMetadata({
    locale: params.locale,
    title: `${name} Travel Guide & Tours`,
    description: pickLocale(country.tagline, params.locale) || `Discover ${name} with Nexatlas.`,
    path: `destinations/${params.country}`,
  });
}

export default async function CountryPage({
  params: { locale, country: countrySlug },
}: {
  params: { locale: string; country: string };
}) {
  setRequestLocale(locale);
  const country = getCountry(countrySlug);
  if (!country) notFound();

  const tn = await getTranslations('nav');
  const name = pickLocale(country.name, locale);
  const dest = getDestinations(countrySlug);

  return (
    <>
      <PageHeader
        eyebrow={tn('destinations')}
        title={name}
        subtitle={pickLocale(country.tagline, locale)}
        image="/images/bukhara.jpg"
        breadcrumbs={[
          { label: tn('home'), href: '/' },
          { label: tn('destinations'), href: '/destinations' },
          { label: name },
        ]}
      />

      <section className="section">
        <div className="container-px">
          {dest.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dest.map((d, i) => (
                <DestinationCard key={d.slug} destination={d} locale={locale} priority={i === 0} />
              ))}
            </div>
          ) : (
            <p className="max-w-2xl text-lg text-ink/65">
              {name} is coming soon to Nexatlas as we expand across Central Asia and the Caucasus.
            </p>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
