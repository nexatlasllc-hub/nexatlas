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
  return buildMetadata({
    locale: params.locale,
    title: 'Contact Nexatlas',
    description: 'Get in touch with our Uzbekistan-based travel designers. We reply within 24 hours.',
    path: 'contact',
  });
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const tn = await getTranslations('nav');
  const tc = await getTranslations('common');

  return (
    <>
      <PageHeader
        eyebrow={tc('getInTouch')}
        title={tn('contact')}
        subtitle="Our travel designers are based in Uzbekistan and reply within 24 hours, in your language."
        image="/images/tashkent.jpg"
        breadcrumbs={[{ label: tn('home'), href: '/' }, { label: tn('contact') }]}
      />
      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <aside className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/50">Company</p>
              <p className="mt-1 font-medium text-midnight">"NEXATLAS" MCHJ</p>
              <p className="text-sm text-ink/65">Licensed tour operator · Uzbekistan</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/50">Email</p>
              <a href="mailto:hello@nexatlas.uz" className="mt-1 block font-medium text-gold-dark">
                hello@nexatlas.uz
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/50">WhatsApp</p>
              <p className="mt-1 font-medium text-midnight">Available on request</p>
            </div>
            <div className="rounded-xl2 bg-sand p-6 text-sm text-ink/70">
              We speak Uzbek, Russian and English, with designers covering all of our 15 supported
              languages.
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
