'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { locales, localeMeta } from '@/i18n/config';

export default function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const t = useTranslations('common');
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const current = localeMeta[locale as keyof typeof localeMeta];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('selectLanguage')}
        aria-expanded={open}
        className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
          light
            ? 'border-white/40 text-white hover:bg-white/10'
            : 'border-midnight/15 text-midnight hover:border-midnight/40'
        }`}
      >
        <span aria-hidden>{current?.flag}</span>
        <span className="hidden sm:inline">{current?.code.toUpperCase()}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden className="opacity-60">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 max-h-80 w-52 overflow-y-auto rounded-xl border border-midnight/10 bg-white p-1.5 shadow-card">
          {locales.map((l) => {
            const m = localeMeta[l];
            const active = l === locale;
            return (
              <button
                key={l}
                onClick={() => {
                  router.replace(pathname, { locale: l });
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                  active ? 'bg-sand text-midnight' : 'text-ink/80 hover:bg-sand/60'
                }`}
              >
                <span aria-hidden className="text-base">{m.flag}</span>
                <span className="font-medium">{m.label}</span>
                <span className="ml-auto text-xs text-ink/40">{m.english}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
