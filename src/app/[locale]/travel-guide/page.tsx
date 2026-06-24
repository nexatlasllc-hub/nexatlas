import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import JournalGrid from '@/components/JournalGrid';
import CtaBand from '@/components/CtaBand';
import { getPosts } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'journal' });
  return buildMetadata({
    locale: params.locale,
    title: 'Uzbekistan Travel Guide & Tips',
    description: t('subtitle'),
    path: 'travel-guide',
  });
}

export default async function TravelGuidePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('journal');
  const tn = await getTranslations('nav');
  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/tashkent-2.jpg"
        breadcrumbs={[{ label: tn('home'), href: '/' }, { label: tn('travelGuide') }]}
      />
      <section className="section">
        <div className="container-px">
          <JournalGrid posts={getPosts()} locale={locale} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
