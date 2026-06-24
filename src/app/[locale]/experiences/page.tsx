import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ExperienceTiles from '@/components/ExperienceTiles';
import CtaBand from '@/components/CtaBand';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'experiences' });
  return buildMetadata({
    locale: params.locale,
    title: t('title'),
    description: t('subtitle'),
    path: 'experiences',
  });
}

export default async function ExperiencesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('experiences');
  const tn = await getTranslations('nav');
  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/tour-family.jpg"
        breadcrumbs={[{ label: tn('home'), href: '/' }, { label: tn('experiences') }]}
      />
      <ExperienceTiles />
      <CtaBand />
    </>
  );
}
