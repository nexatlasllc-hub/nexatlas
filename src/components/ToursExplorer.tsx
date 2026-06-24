'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import TourCard from './TourCard';
import { themeDefs } from '@/lib/data';
import type { Tour, ThemeKey } from '@/lib/types';

const themeKeyMap: Record<ThemeKey, string> = {
  cultural: 'cultural',
  'silk-road': 'silkRoad',
  private: 'private',
  family: 'family',
  luxury: 'luxury',
  business: 'business',
};

export default function ToursExplorer({
  tours,
  locale,
  initialTheme,
}: {
  tours: Tour[];
  locale: string;
  initialTheme?: ThemeKey;
}) {
  const tt = useTranslations('tours');
  const tth = useTranslations('themes');
  const [active, setActive] = useState<ThemeKey | 'all'>(initialTheme ?? 'all');

  const filtered = active === 'all' ? tours : tours.filter((t) => t.themes.includes(active));

  const chip = (isActive: boolean) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-midnight text-white'
        : 'border border-midnight/15 text-ink/70 hover:border-midnight/40'
    }`;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setActive('all')} className={chip(active === 'all')}>
          {tt('filterAll')}
        </button>
        {themeDefs.map((th) => (
          <button
            key={th.key}
            onClick={() => setActive(th.key)}
            className={chip(active === th.key)}
          >
            {tth(themeKeyMap[th.key])}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tour) => (
          <TourCard key={tour.slug} tour={tour} locale={locale} />
        ))}
      </div>
    </div>
  );
}
