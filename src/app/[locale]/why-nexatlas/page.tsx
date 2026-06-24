import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import WhyUs from '@/components/WhyUs';
import { StatsStrip } from '@/components/TrustBar';
import Testimonials from '@/components/Testimonials';
import CtaBand from '@/components/CtaBand';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'why' });
  return buildMetadata({
    locale: params.locale,
    title: 'Why Travel with Nexatlas',
    description: t('subtitle'),
    path: 'why-nexatlas',
  });
}

export default async function WhyPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('why');
  const tn = await getTranslations('nav');
  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/tour-luxury.jpg"
        breadcrumbs={[{ label: tn('home'), href: '/' }, { label: tn('whyUs') }]}
      />
      <WhyUs />
      <StatsStrip />
      <Testimonials locale={locale} />
      <CtaBand />
    </>
  );
}
