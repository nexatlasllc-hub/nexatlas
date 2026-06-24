import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import SmartImage from './SmartImage';
import { pickLocale } from '@/lib/content';
import type { Tour } from '@/lib/types';

const themeI18nMap: Record<string, string> = {
  cultural: 'cultural',
  'silk-road': 'silkRoad',
  private: 'private',
  family: 'family',
  luxury: 'luxury',
  business: 'business',
};

// Booking/Trivago-style result card: photo · details · price + CTA.
export default function TourPackageCard({ tour, locale }: { tour: Tour; locale: string }) {
  const t = useTranslations('tours');
  const tc = useTranslations('common');
  const tn = useTranslations('nav');
  const tt = useTranslations('themes');

  const title = pickLocale(tour.title, locale);
  const summary = pickLocale(tour.summary, locale);

  return (
    <article className="card-hover grid overflow-hidden rounded-xl2 border border-midnight/10 bg-white shadow-soft md:grid-cols-[260px_1fr_220px]">
      {/* Photo */}
      <Link href={`/tours/${tour.slug}`} className="relative block aspect-[4/3] overflow-hidden md:aspect-auto">
        <SmartImage src={tour.image} alt={title} label={title} sizes="(max-width:768px) 100vw, 260px" />
        {tour.tier === 'luxury' && (
          <span className="absolute left-3 top-3 rounded-md bg-gold px-2.5 py-1 text-xs font-semibold text-ink">
            Luxury
          </span>
        )}
      </Link>

      {/* Details */}
      <div className="border-midnight/10 p-6 md:border-r">
        <Link href={`/tours/${tour.slug}`}>
          <h3 className="font-display text-xl font-semibold text-midnight">{title}</h3>
        </Link>
        <p className="mt-1 text-sm text-ink/55">{tour.durationDays} {tc('days')}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tour.themes.slice(0, 3).map((th) => (
            <span key={th} className="rounded-md bg-sand px-2.5 py-1 text-xs font-medium text-midnight">
              {tt(themeI18nMap[th])}
            </span>
          ))}
        </div>
        <ul className="mt-4 space-y-1.5">
          {tour.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
              <span className="mt-0.5 text-green-600" aria-hidden>✓</span>
              {pickLocale(h, locale)}
            </li>
          ))}
        </ul>
      </div>

      {/* Price + CTA */}
      <div className="flex flex-col items-end justify-between gap-4 p-6">
        <span className="inline-flex items-center gap-1 rounded-lg rounded-bl-none bg-midnight px-2.5 py-1 text-sm font-bold text-white">
          ★ 4.9
        </span>
        <div className="text-right">
          <p className="text-xs text-ink/50">{tc('from')}</p>
          <p className="font-display text-2xl font-semibold text-midnight">
            ${tour.priceFrom.toLocaleString()}
          </p>
          <p className="text-xs text-ink/50">{tc('perPerson')}</p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <Link href="/plan-your-trip" className="btn-primary w-full">{tn('planTrip')}</Link>
          <Link href={`/tours/${tour.slug}`} className="btn-outline w-full">{tc('viewTour')}</Link>
        </div>
      </div>
    </article>
  );
}
