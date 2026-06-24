import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Testimonials from '@/components/Testimonials';
import { StatsStrip } from '@/components/TrustBar';
import CtaBand from '@/components/CtaBand';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'testimonials' });
  return buildMetadata({
    locale: params.locale,
    title: 'Traveler Reviews',
    description: t('subtitle'),
    path: 'reviews',
  });
}

export default async function ReviewsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('testimonials');
  const tn = await getTranslations('nav');
  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/khiva.jpg"
        breadcrumbs={[{ label: tn('home'), href: '/' }, { label: tn('reviews') }]}
      />
      <StatsStrip />
      <Testimonials locale={locale} />
      <CtaBand />
    </>
  );
}
