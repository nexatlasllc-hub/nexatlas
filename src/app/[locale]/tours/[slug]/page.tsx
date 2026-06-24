import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import PageHeader from '@/components/PageHeader';
import ToursExplorer from '@/components/ToursExplorer';
import TourCard from '@/components/TourCard';
import InquiryForm from '@/components/InquiryForm';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { getTour, getTours, getRelatedTours, pickLocale } from '@/lib/content';
import { themeDefs } from '@/lib/data';
import { buildMetadata, tripJsonLd, breadcrumbJsonLd, SITE_URL } from '@/lib/seo';
import { locales, type Locale } from '@/i18n/config';
import type { ThemeKey } from '@/lib/types';

const themeKeys = themeDefs.map((t) => t.key) as ThemeKey[];
const themeI18nMap: Record<string, string> = {
  cultural: 'cultural',
  'silk-road': 'silkRoad',
  private: 'private',
  family: 'family',
  luxury: 'luxury',
  business: 'business',
};

function isTheme(slug: string): slug is ThemeKey {
  return (themeKeys as string[]).includes(slug);
}

export function generateStaticParams() {
  const tourSlugs = getTours().map((t) => t.slug);
  const all = [...themeKeys, ...tourSlugs];
  return locales.flatMap((locale) => all.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  if (isTheme(params.slug)) {
    const t = await getTranslations({ locale: params.locale, namespace: 'themes' });
    const label = t(themeI18nMap[params.slug]);
    return buildMetadata({
      locale: params.locale,
      title: `${label} in Uzbekistan`,
      description: `Browse our ${label.toLowerCase()} across Uzbekistan and the Silk Road.`,
      path: `tours/${params.slug}`,
    });
  }
  const tour = getTour(params.slug);
  if (!tour) return {};
  return buildMetadata({
    locale: params.locale,
    title: pickLocale(tour.title, params.locale),
    description: pickLocale(tour.summary, params.locale),
    path: `tours/${params.slug}`,
    image: tour.image,
  });
}

export default async function TourOrThemePage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const tn = await getTranslations('nav');

  // ── Theme listing branch ──
  if (isTheme(slug)) {
    const th = await getTranslations('themes');
    const label = th(themeI18nMap[slug]);
    return (
      <>
        <PageHeader
          eyebrow={tn('experiences')}
          title={label}
          image="/images/tour-luxury.jpg"
          breadcrumbs={[
            { label: tn('home'), href: '/' },
            { label: tn('tours'), href: '/tours' },
            { label },
          ]}
        />
        <section className="section">
          <div className="container-px">
            <ToursExplorer tours={getTours()} locale={locale} initialTheme={slug} />
          </div>
        </section>
        <CtaBand />
      </>
    );
  }

  // ── Tour detail branch ──
  const tour = getTour(slug);
  if (!tour) notFound();

  const t = await getTranslations('tours');
  const tc = await getTranslations('common');
  const title = pickLocale(tour.title, locale);
  const url = `${SITE_URL}/${locale}/tours/${slug}`;
  const related = getRelatedTours(slug);

  return (
    <>
      <JsonLd
        data={[
          tripJsonLd({
            name: title,
            description: pickLocale(tour.summary, locale),
            image: tour.image,
            price: tour.priceFrom,
            url,
          }),
          breadcrumbJsonLd([
            { name: tn('home'), url: `${SITE_URL}/${locale}` },
            { name: tn('tours'), url: `${SITE_URL}/${locale}/tours` },
            { name: title, url },
          ]),
        ]}
      />

      <PageHeader
        eyebrow={`${tour.durationDays} ${tc('days')} · ${tour.tier === 'luxury' ? 'Luxury' : 'Signature'}`}
        title={title}
        subtitle={pickLocale(tour.summary, locale)}
        image={tour.image}
        breadcrumbs={[
          { label: tn('home'), href: '/' },
          { label: tn('tours'), href: '/tours' },
          { label: title },
        ]}
      />

      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-[1.7fr_1fr]">
          <div>
            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4 rounded-xl2 border border-midnight/10 bg-sand p-6 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/50">{t('duration')}</p>
                <p className="font-display text-lg font-semibold text-midnight">
                  {tour.durationDays} {tc('days')}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/50">{tc('from')}</p>
                <p className="font-display text-lg font-semibold text-midnight">
                  ${tour.priceFrom.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/50">{t('bestFor')}</p>
                <p className="font-medium text-midnight">{pickLocale(tour.bestFor, locale)}</p>
              </div>
            </div>

            {/* Highlights */}
            <h2 className="heading-display mt-10 text-2xl">{t('highlights')}</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {tour.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-ink/75">
                  <span className="mt-1 text-gold" aria-hidden>◆</span>
                  {pickLocale(h, locale)}
                </li>
              ))}
            </ul>

            {/* Itinerary */}
            <h2 className="heading-display mt-12 text-2xl">{t('itinerary')}</h2>
            <div className="mt-5 space-y-3">
              {tour.itinerary.map((day) => (
                <details key={day.day} className="group rounded-xl border border-midnight/10 bg-white p-5 open:shadow-soft">
                  <summary className="flex cursor-pointer items-center gap-3 font-semibold text-midnight marker:content-['']">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-midnight text-sm text-white">
                      {day.day}
                    </span>
                    <span className="flex-1">{pickLocale(day.title, locale)}</span>
                    <span aria-hidden className="text-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pl-12 text-sm leading-relaxed text-ink/70">
                    {pickLocale(day.description, locale)}
                  </p>
                </details>
              ))}
            </div>

            {/* Inclusions */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-midnight">{t('included')}</h3>
                <ul className="mt-3 space-y-2">
                  {tour.included.map((x, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink/75">
                      <span className="mt-0.5 text-green-600" aria-hidden>✓</span>
                      {pickLocale(x, locale)}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-midnight">{t('excluded')}</h3>
                <ul className="mt-3 space-y-2">
                  {tour.excluded.map((x, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink/60">
                      <span className="mt-0.5 text-ink/30" aria-hidden>✕</span>
                      {pickLocale(x, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky inquiry */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-xl2 border border-midnight/10 bg-white p-6 shadow-card">
              <p className="text-sm text-ink/60">{tc('from')}</p>
              <p className="font-display text-3xl font-semibold text-midnight">
                ${tour.priceFrom.toLocaleString()}
                <span className="text-sm font-normal text-ink/50"> / {tc('perPerson')}</span>
              </p>
              <p className="mt-4 text-sm text-ink/65">
                Every Nexatlas journey is fully customizable. Send an inquiry and your dedicated
                travel designer will tailor this itinerary to you — free and with no obligation.
              </p>
              <Link href="/plan-your-trip" className="btn-primary mt-5 w-full">
                {t('inquire')}
              </Link>
              <a href="#tour-inquiry" className="btn-outline mt-3 w-full">
                {tc('getInTouch')}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section bg-sand">
          <div className="container-px">
            <h2 className="heading-display text-2xl sm:text-3xl">{t('cta')}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <TourCard key={r.slug} tour={r} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry form */}
      <section id="tour-inquiry" className="section">
        <div className="container-px max-w-3xl">
          <h2 className="heading-display text-center text-3xl">{t('inquire')}</h2>
          <div className="mt-8">
            <InquiryForm defaultTour={slug} />
          </div>
        </div>
      </section>
    </>
  );
}
