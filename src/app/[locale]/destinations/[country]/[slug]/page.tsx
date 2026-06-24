import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SmartImage from '@/components/SmartImage';
import PageHeader from '@/components/PageHeader';
import TourCard from '@/components/TourCard';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import {
  getCountry,
  getDestination,
  getDestinations,
  getTours,
  pickLocale,
} from '@/lib/content';
import { buildMetadata, attractionJsonLd, breadcrumbJsonLd, SITE_URL } from '@/lib/seo';
import { locales, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDestinations().map((d) => ({ locale, country: d.countrySlug, slug: d.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const d = getDestination(params.slug);
  if (!d) return {};
  return buildMetadata({
    locale: params.locale,
    title: `${pickLocale(d.name, params.locale)} — ${pickLocale(d.tagline, params.locale)}`,
    description: pickLocale(d.excerpt, params.locale),
    path: `destinations/${d.countrySlug}/${d.slug}`,
    image: d.image,
  });
}

export default async function DestinationDetail({
  params: { locale, country: countrySlug, slug },
}: {
  params: { locale: string; country: string; slug: string };
}) {
  setRequestLocale(locale);
  const d = getDestination(slug);
  if (!d || d.countrySlug !== countrySlug) notFound();

  const t = await getTranslations('common');
  const tt = await getTranslations('tours');
  const tn = await getTranslations('nav');
  const country = getCountry(countrySlug);
  const countryName = pickLocale(country?.name, locale);
  const name = pickLocale(d.name, locale);
  const url = `${SITE_URL}/${locale}/destinations/${countrySlug}/${slug}`;

  const relatedTours = getTours({ country: countrySlug }).slice(0, 3);
  const others = getDestinations(countrySlug).filter((x) => x.slug !== slug);

  return (
    <>
      <JsonLd
        data={[
          attractionJsonLd({ name, description: pickLocale(d.excerpt, locale), image: d.image, url }),
          breadcrumbJsonLd([
            { name: tn('home'), url: `${SITE_URL}/${locale}` },
            { name: tn('destinations'), url: `${SITE_URL}/${locale}/destinations` },
            { name: countryName, url: `${SITE_URL}/${locale}/destinations/${countrySlug}` },
            { name, url },
          ]),
        ]}
      />

      <PageHeader
        eyebrow={pickLocale(d.tagline, locale)}
        title={name}
        image={d.image}
        breadcrumbs={[
          { label: tn('home'), href: '/' },
          { label: tn('destinations'), href: '/destinations' },
          { label: countryName, href: `/destinations/${countrySlug}` },
          { label: name },
        ]}
      />

      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-[1.7fr_1fr]">
          <div>
            <p className="font-display text-xl leading-relaxed text-midnight">
              {pickLocale(d.excerpt, locale)}
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
              <p>{pickLocale(d.body, locale)}</p>
            </div>
          </div>

          <aside className="h-fit rounded-xl2 border border-midnight/10 bg-sand p-6">
            <h2 className="font-display text-lg font-semibold text-midnight">{tt('highlights')}</h2>
            <ul className="mt-4 space-y-2.5">
              {d.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/75">
                  <span className="mt-1 text-gold" aria-hidden>◆</span>
                  {pickLocale(h, locale)}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-midnight/10 pt-4">
              <p className="text-xs uppercase tracking-wide text-ink/50">Best time to visit</p>
              <p className="mt-1 font-medium text-midnight">{pickLocale(d.bestTime, locale)}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Related tours */}
      {relatedTours.length > 0 && (
        <section className="section bg-sand">
          <div className="container-px">
            <h2 className="heading-display text-2xl sm:text-3xl">{tt('title')}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other destinations */}
      {others.length > 0 && (
        <section className="section">
          <div className="container-px">
            <h2 className="heading-display text-2xl sm:text-3xl">More in {countryName}</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {others.map((o) => (
                <a
                  key={o.slug}
                  href={`/${locale}/destinations/${countrySlug}/${o.slug}`}
                  className="card-hover group relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <SmartImage src={o.image} alt={pickLocale(o.name, locale)} label={pickLocale(o.name, locale)} sizes="25vw" />
                  <div className="absolute inset-0 bg-ink/40 transition group-hover:bg-ink/20" />
                  <span className="absolute inset-x-0 bottom-0 p-3 font-display text-lg font-semibold text-white">
                    {pickLocale(o.name, locale)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
