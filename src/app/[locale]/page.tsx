import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Hero from '@/components/Hero';
import TrustBar, { StatsStrip } from '@/components/TrustBar';
import SectionHeading from '@/components/SectionHeading';
import DestinationCard from '@/components/DestinationCard';
import TourPackageCard from '@/components/TourPackageCard';
import ExperienceTiles from '@/components/ExperienceTiles';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import JournalGrid from '@/components/JournalGrid';
import CtaBand from '@/components/CtaBand';
import { getFeaturedDestinations, getFeaturedTours, getPosts } from '@/lib/content';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const td = useTranslations('destinations');
  const tt = useTranslations('tours');
  const tj = useTranslations('journal');
  const tc = useTranslations('common');

  const destinations = getFeaturedDestinations();
  const tours = getFeaturedTours();
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <TrustBar />

      {/* Featured destinations */}
      <section className="section">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow={td('eyebrow')}
              title={td('title')}
              subtitle={td('subtitle')}
              align="left"
            />
            <Link href="/destinations" className="btn-outline">{td('cta')}</Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <DestinationCard key={d.slug} destination={d} locale={locale} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured tours */}
      <section className="section bg-sand">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow={tt('eyebrow')}
              title={tt('title')}
              subtitle={tt('subtitle')}
              align="left"
            />
            <Link href="/tours" className="btn-outline">{tt('cta')}</Link>
          </div>
          <div className="mt-12 flex flex-col gap-5">
            {tours.map((tour) => (
              <TourPackageCard key={tour.slug} tour={tour} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <ExperienceTiles />
      <WhyUs />
      <StatsStrip />
      <Testimonials locale={locale} />

      {/* Journal preview */}
      <section className="section">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow={tj('eyebrow')}
              title={tj('title')}
              subtitle={tj('subtitle')}
              align="left"
            />
            <Link href="/travel-guide" className="btn-outline">{tc('viewAll')}</Link>
          </div>
          <div className="mt-12">
            <JournalGrid posts={posts} locale={locale} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
