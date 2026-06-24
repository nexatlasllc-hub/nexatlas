'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { WEB3FORMS_KEY, CONTACT_EMAIL } from '@/lib/site';

const interestKeys = ['cultural', 'silkRoad', 'private', 'family', 'luxury', 'business'] as const;
const budgets = ['< $1,500', '$1,500–3,000', '$3,000–6,000', '$6,000+'];

export default function InquiryForm({ defaultTour }: { defaultTour?: string }) {
  const t = useTranslations('inquiry');
  const tt = useTranslations('themes');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const field =
    'w-full rounded-lg border border-midnight/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30';
  const label = 'mb-1.5 block text-sm font-medium text-midnight';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // No key yet → show success (lead can still be collected once key is added).
    if (!WEB3FORMS_KEY) {
      setStatus('done');
      return;
    }

    setStatus('sending');
    try {
      const fd = new FormData(form);
      fd.append('access_key', WEB3FORMS_KEY);
      fd.append('subject', 'New Nexatlas trip inquiry');
      fd.append('from_name', 'Nexatlas website');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      });
      const data = await res.json();
      setStatus(data.success ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-xl2 border border-gold/30 bg-sand p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-2xl text-gold-dark">
          ✓
        </div>
        <h3 className="font-display text-2xl font-semibold text-midnight">{t('successTitle')}</h3>
        <p className="mt-2 text-ink/70">{t('successBody')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      {/* Honeypot (spam protection) */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      {defaultTour && <input type="hidden" name="tour" value={defaultTour} />}

      <div>
        <label className={label} htmlFor="name">{t('name')}</label>
        <input id="name" name="name" required className={field} autoComplete="name" />
      </div>
      <div>
        <label className={label} htmlFor="email">{t('email')}</label>
        <input id="email" name="email" type="email" required className={field} autoComplete="email" />
      </div>
      <div>
        <label className={label} htmlFor="phone">{t('phone')}</label>
        <input id="phone" name="phone" className={field} autoComplete="tel" />
      </div>
      <div>
        <label className={label} htmlFor="country">{t('country')}</label>
        <input id="country" name="country" className={field} autoComplete="country-name" />
      </div>
      <div>
        <label className={label} htmlFor="travelers">{t('travelers')}</label>
        <input id="travelers" name="travelers" type="number" min={1} defaultValue={2} className={field} />
      </div>
      <div>
        <label className={label} htmlFor="dates">{t('dates')}</label>
        <input id="dates" name="dates" placeholder="e.g. September 2026" className={field} />
      </div>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="budget">{t('budget')}</label>
        <select id="budget" name="budget" className={field}>
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={label}>{t('interests')}</legend>
        <div className="flex flex-wrap gap-2">
          {interestKeys.map((k) => (
            <label
              key={k}
              className="cursor-pointer rounded-full border border-midnight/15 px-4 py-2 text-sm text-ink/75 transition has-[:checked]:border-gold has-[:checked]:bg-gold/10 has-[:checked]:text-midnight"
            >
              <input type="checkbox" name="interests" value={k} className="sr-only" />
              {tt(k)}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="message">{t('message')}</label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
          {status === 'sending' ? '…' : t('submit')}
        </button>
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-600">
            {t('responseNote')} — {CONTACT_EMAIL}
          </p>
        )}
        <p className="mt-3 text-xs text-ink/50">{t('responseNote')}</p>
      </div>
    </form>
  );
}
