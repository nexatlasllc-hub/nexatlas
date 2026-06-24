import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import SectionHeading from './SectionHeading';
import { themeDefs } from '@/lib/data';

const meta: Record<string, { icon: string }> = {
  cultural: { icon: '🏛' },
  'silk-road': { icon: '🐫' },
  private: { icon: '✦' },
  family: { icon: '👨‍👩‍👧' },
  luxury: { icon: '◆' },
  business: { icon: '💼' },
};

export default function ExperienceTiles() {
  const t = useTranslations('experiences');
  const tt = useTranslations('themes');
  const themeKeyMap: Record<string, string> = {
    cultural: 'cultural',
    'silk-road': 'silkRoad',
    private: 'private',
    family: 'family',
    luxury: 'luxury',
    business: 'business',
  };

  return (
    <section className="section">
      <div className="container-px">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {themeDefs.map((th) => (
            <Link
              key={th.key}
              href={`/tours/${th.key}`}
              className="card-hover group flex items-center gap-4 rounded-xl2 border border-midnight/10 bg-white p-6 shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-2xl" aria-hidden>
                {meta[th.key]?.icon}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-midnight">
                  {tt(themeKeyMap[th.key])}
                </h3>
                <span className="text-sm text-gold-dark">
                  <span className="link-underline">Explore →</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
