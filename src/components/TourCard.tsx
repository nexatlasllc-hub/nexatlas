import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import SmartImage from './SmartImage';
import { pickLocale } from '@/lib/content';
import type { Tour } from '@/lib/types';

export default function TourCard({ tour, locale }: { tour: Tour; locale: string }) {
  const t = useTranslations('common');
  const title = pickLocale(tour.title, locale);
  const summary = pickLocale(tour.summary, locale);
  const bestFor = pickLocale(tour.bestFor, locale);

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="card-hover group flex flex-col overflow-hidden rounded-xl2 bg-white shadow-soft"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <SmartImage
          src={tour.image}
          alt={title}
          label={title}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          {tour.tier === 'luxury' && (
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
              Luxury
            </span>
          )}
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-midnight">
            {tour.durationDays} {t('days')}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-midnight">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink/65">{summary}</p>
        <p className="mt-3 text-xs uppercase tracking-wide text-ink/45">{bestFor}</p>

        <div className="mt-4 flex items-end justify-between border-t border-midnight/10 pt-4">
          <div>
            <span className="text-xs text-ink/50">{t('from')}</span>
            <p className="font-display text-xl font-semibold text-midnight">
              ${tour.priceFrom.toLocaleString()}
            </p>
            <span className="text-xs text-ink/50">{t('perPerson')}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
            {t('viewTour')}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
