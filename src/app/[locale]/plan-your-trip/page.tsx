import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import InquiryForm from '@/components/InquiryForm';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'inquiry' });
  return buildMetadata({
    locale: params.locale,
    title: t('title'),
    description: t('subtitle'),
    path: 'plan-your-trip',
  });
}

export default async function PlanYourTripPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('inquiry');
  const tw = await getTranslations('why');
  const tn = await getTranslations('nav');

  const assurances = [tw('point1Title'), tw('point2Title'), tw('point3Title'), tw('point4Title')];

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/samarkand.jpg"
        breadcrumbs={[{ label: tn('home'), href: '/' }, { label: tn('planTrip') }]}
      />
      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <aside>
            <h2 className="heading-display text-2xl">{tw('title')}</h2>
            <ul className="mt-6 space-y-4">
              {assurances.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-ink/75">
                  <span className="mt-1 text-gold" aria-hidden>✦</span>
                  <span className="font-medium text-midnight">{a}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl2 bg-sand p-6">
              <p className="text-sm text-ink/70">
                Prefer to talk? Email{' '}
                <a href="mailto:hello@nexatlas.uz" className="font-semibold text-gold-dark">
                  hello@nexatlas.uz
                </a>{' '}
                — a real travel designer, not a bot, will reply within 24 hours.
              </p>
            </div>
          </aside>
          <div className="rounded-xl2 border border-midnight/10 bg-white p-6 shadow-soft sm:p-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
