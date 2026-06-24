import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ToursExplorer from '@/components/ToursExplorer';
import CtaBand from '@/components/CtaBand';
import { getTours } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'tours' });
  return buildMetadata({
    locale: params.locale,
    title: 'Uzbekistan Tours & Silk Road Journeys',
    description: t('subtitle'),
    path: 'tours',
  });
}

export default async function ToursPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('tours');
  const tn = await getTranslations('nav');
  const tours = getTours();

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/tour-luxury.jpg"
        breadcrumbs={[{ label: tn('home'), href: '/' }, { label: tn('tours') }]}
      />
      <section className="section">
        <div className="container-px">
          <ToursExplorer tours={tours} locale={locale} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
