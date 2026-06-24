import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import SmartImage from './SmartImage';
import { pickLocale } from '@/lib/content';
import type { Destination } from '@/lib/types';

export default function DestinationCard({
  destination,
  locale,
  priority = false,
}: {
  destination: Destination;
  locale: string;
  priority?: boolean;
}) {
  const t = useTranslations('common');
  const name = pickLocale(destination.name, locale);
  const tagline = pickLocale(destination.tagline, locale);
  const excerpt = pickLocale(destination.excerpt, locale);

  return (
    <Link
      href={`/destinations/${destination.countrySlug}/${destination.slug}`}
      className="card-hover group block overflow-hidden rounded-xl2 bg-white shadow-soft"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <SmartImage
          src={destination.image}
          alt={name}
          label={name}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-xs font-medium uppercase tracking-widest text-gold-light">{tagline}</p>
          <h3 className="mt-1 font-display text-2xl font-semibold">{name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/80">{excerpt}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light">
            {t('exploreDestination')}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
