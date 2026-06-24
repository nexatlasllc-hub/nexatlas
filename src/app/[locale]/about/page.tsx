import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { StatsStrip } from '@/components/TrustBar';
import CtaBand from '@/components/CtaBand';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return buildMetadata({
    locale: params.locale,
    title: 'About Nexatlas',
    description:
      'Nexatlas is a licensed, Uzbekistan-based tour operator crafting premium inbound journeys across the Silk Road.',
    path: 'about',
  });
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const tn = await getTranslations('nav');

  return (
    <>
      <PageHeader
        eyebrow={tn('about')}
        title="A local company with a world-class standard"
        subtitle="We are Nexatlas — born on the Silk Road, building the leading travel brand in Central Asia."
        image="/images/bukhara.jpg"
        breadcrumbs={[{ label: tn('home'), href: '/' }, { label: tn('about') }]}
      />

      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-ink/75">
            <h2 className="heading-display text-3xl">Our story</h2>
            <p>
              Nexatlas was founded on a simple conviction: that Uzbekistan deserves to be experienced
              at the level of the world’s great destinations. For too long, travelers to the Silk Road
              had to choose between impersonal mass tours and the uncertainty of arranging everything
              alone. We built Nexatlas to offer a third way — the warmth and insight of a local team,
              delivered with the polish, reliability and design of an international travel brand.
            </p>
            <p>
              As a licensed, Uzbekistan-based tour operator, we live where we work. Our designers grew
              up among these monuments, eat at these family tables, and know which guide will make a
              child’s eyes light up and which rooftop catches the best sunset over the minarets. That
              firsthand knowledge is something no catalog can replicate, and it is the foundation of
              every journey we create.
            </p>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink/75">
            <h2 className="heading-display text-3xl">What we believe</h2>
            <p>
              We believe travel should be tailor-made, never templated — designed around your pace,
              your interests and your budget, whether that means a refined mid-range journey or an
              uncompromising luxury experience. We believe in transparency: clear inclusions, honest
              advice, and a single dedicated designer accountable to you from first message to safe
              return home.
            </p>
            <p>
              And we believe in the long view. Today our focus is Uzbekistan and the Silk Road.
              Tomorrow, Nexatlas will guide travelers across all of Central Asia and the Caucasus —
              Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Azerbaijan and Georgia — with the same
              local depth and global standard you experience with us today.
            </p>
          </div>
        </div>
      </section>

      <StatsStrip />
      <CtaBand />
    </>
  );
}
