import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import JournalGrid from '@/components/JournalGrid';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { getPost, getPosts, pickLocale } from '@/lib/content';
import { buildMetadata, articleJsonLd, breadcrumbJsonLd, SITE_URL } from '@/lib/seo';
import { locales, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getPosts().map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    locale: params.locale,
    title: pickLocale(post.title, params.locale),
    description: pickLocale(post.excerpt, params.locale),
    path: `travel-guide/${params.slug}`,
    image: post.image,
  });
}

export default async function PostPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const post = getPost(slug);
  if (!post) notFound();

  const tn = await getTranslations('nav');
  const title = pickLocale(post.title, locale);
  const url = `${SITE_URL}/${locale}/travel-guide/${slug}`;
  const more = getPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            headline: title,
            description: pickLocale(post.excerpt, locale),
            image: post.image,
            datePublished: post.publishedAt,
            author: post.author,
            url,
          }),
          breadcrumbJsonLd([
            { name: tn('home'), url: `${SITE_URL}/${locale}` },
            { name: tn('travelGuide'), url: `${SITE_URL}/${locale}/travel-guide` },
            { name: title, url },
          ]),
        ]}
      />

      <PageHeader
        eyebrow={post.category}
        title={title}
        image={post.image}
        breadcrumbs={[
          { label: tn('home'), href: '/' },
          { label: tn('travelGuide'), href: '/travel-guide' },
          { label: title },
        ]}
      />

      <article className="section">
        <div className="container-px max-w-3xl">
          <p className="text-sm text-ink/50">
            {post.author} · {new Date(post.publishedAt).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="mt-6 font-display text-xl leading-relaxed text-midnight">
            {pickLocale(post.excerpt, locale)}
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/75">
            <p>{pickLocale(post.body, locale)}</p>
          </div>
        </div>
      </article>

      <section className="section bg-sand">
        <div className="container-px">
          <h2 className="heading-display mb-10 text-2xl sm:text-3xl">More from the guide</h2>
          <JournalGrid posts={more} locale={locale} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
