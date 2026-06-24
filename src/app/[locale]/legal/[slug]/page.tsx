import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { buildMetadata } from '@/lib/seo';
import { locales, type Locale } from '@/i18n/config';

const legal: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'Nexatlas ("NEXATLAS" MCHJ) respects your privacy. This policy explains what information we collect when you submit a travel inquiry or contact us, and how we use it.',
      'We collect only the details you provide — such as your name, email, phone, country of residence and travel preferences — and use them solely to prepare your personalized travel proposal and communicate with you about your trip.',
      'We do not sell your personal data. We share it only with the vetted partners (guides, hotels, transport providers) required to deliver the services you request, and only to the extent necessary.',
      'You may request access to, correction of, or deletion of your personal data at any time by emailing hello@nexatlas.uz.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    body: [
      'These terms govern the use of the Nexatlas website and the travel planning services we provide. By submitting an inquiry you agree to be contacted by our team regarding your trip.',
      'All itineraries and prices shown are indicative starting points. Final pricing is confirmed in a written proposal and depends on dates, group size, accommodation tier and availability.',
      'A booking is only confirmed once a deposit is received and written confirmation is issued by Nexatlas. Cancellation and refund terms are provided with each proposal.',
      'Nexatlas acts as a licensed tour operator and arranges services with carefully selected local partners. Travelers are responsible for valid travel documents and appropriate travel insurance.',
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    body: [
      'Our website uses a minimal set of cookies to function correctly and to understand how visitors use the site so we can improve it.',
      'Essential cookies remember your language preference and enable core features. Analytics cookies, if enabled, help us measure traffic and page performance in aggregate.',
      'You can control or delete cookies through your browser settings. Disabling essential cookies may affect how the site works.',
    ],
  },
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(legal).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const page = legal[params.slug];
  if (!page) return {};
  return buildMetadata({
    locale: params.locale,
    title: page.title,
    description: `${page.title} for Nexatlas.`,
    path: `legal/${params.slug}`,
  });
}

export default async function LegalPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const page = legal[slug];
  if (!page) notFound();
  const tn = await getTranslations('nav');

  return (
    <>
      <PageHeader
        title={page.title}
        image="/images/bukhara.jpg"
        breadcrumbs={[{ label: tn('home'), href: '/' }, { label: page.title }]}
      />
      <article className="section">
        <div className="container-px max-w-3xl space-y-5 text-base leading-relaxed text-ink/75">
          {page.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="pt-4 text-sm text-ink/50">Last updated: {new Date().toLocaleDateString('en', { year: 'numeric', month: 'long' })}</p>
        </div>
      </article>
    </>
  );
}
