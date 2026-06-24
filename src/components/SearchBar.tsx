'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';

// Booking/Trivago-style search bar shown over the hero. It's a friendly
// entry point: every option routes the visitor to the tours catalogue,
// where the real filtering happens.
export default function SearchBar() {
  const t = useTranslations('common');
  const router = useRouter();
  const go = () => router.push('/tours');

  const field =
    'flex flex-col justify-center rounded-xl bg-white px-4 py-2.5 text-left';

  return (
    <div className="mt-8 grid max-w-4xl gap-2 rounded-2xl bg-white/95 p-2 shadow-card backdrop-blur sm:grid-cols-2 lg:grid-cols-[1.6fr_1.2fr_1.2fr_auto]">
      <button type="button" onClick={go} className={field}>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/50">
          {t('searchDestination')}
        </span>
        <span className="flex items-center gap-2 font-semibold text-midnight">
          <span aria-hidden className="text-gold-dark">📍</span> Uzbekistan
        </span>
      </button>
      <button type="button" onClick={go} className={field}>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/50">
          {t('searchDates')}
        </span>
        <span className="flex items-center gap-2 font-semibold text-midnight">
          <span aria-hidden className="text-gold-dark">📅</span> {t('searchDatesValue')}
        </span>
      </button>
      <button type="button" onClick={go} className={field}>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/50">
          {t('searchTravelers')}
        </span>
        <span className="flex items-center gap-2 font-semibold text-midnight">
          <span aria-hidden className="text-gold-dark">👥</span> {t('searchTravelersValue')}
        </span>
      </button>
      <button
        type="button"
        onClick={go}
        className="rounded-xl bg-gold px-7 py-3.5 text-base font-bold text-ink transition hover:bg-gold-dark hover:text-white"
      >
        {t('searchButton')}
      </button>
    </div>
  );
}
