import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import SmartImage from './SmartImage';
import { pickLocale } from '@/lib/content';
import type { Post } from '@/lib/types';

export default function JournalGrid({ posts, locale }: { posts: Post[]; locale: string }) {
  const t = useTranslations('common');
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/travel-guide/${post.slug}`}
          className="card-hover group flex flex-col overflow-hidden rounded-xl2 bg-white shadow-soft"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <SmartImage
              src={post.image}
              alt={pickLocale(post.title, locale)}
              label={post.category}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
              {post.category}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-midnight">
              {pickLocale(post.title, locale)}
            </h3>
            <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink/65">
              {pickLocale(post.excerpt, locale)}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
              {t('readMore')}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
