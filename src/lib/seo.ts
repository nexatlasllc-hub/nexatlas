import type { Metadata } from 'next';
import { locales, localeMeta, type Locale } from '@/i18n/config';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://nexatlas.uz';
export const SITE_NAME = 'Nexatlas';

// Build hreflang alternates for a given path (without locale prefix).
export function buildAlternates(pathWithoutLocale: string) {
  const clean = pathWithoutLocale.replace(/^\/+/, '');
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeMeta[l].hreflang] = `${SITE_URL}/${l}${clean ? `/${clean}` : ''}`;
  }
  languages['x-default'] = `${SITE_URL}/en${clean ? `/${clean}` : ''}`;
  return languages;
}

interface MetaInput {
  locale: Locale;
  title: string;
  description: string;
  path?: string; // path without locale prefix, e.g. "tours/classic-silk-road"
  image?: string;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = '',
  image,
}: MetaInput): Metadata {
  const clean = path.replace(/^\/+/, '');
  const canonical = `${SITE_URL}/${locale}${clean ? `/${clean}` : ''}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: buildAlternates(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale,
      type: 'website',
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
  };
}

// ── JSON-LD structured data builders ──────────────────────────────────────

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Premium inbound tour operator specializing in Uzbekistan and Silk Road journeys.',
    areaServed: 'Uzbekistan',
    knowsLanguage: locales.map((l) => l),
    sameAs: [] as string[],
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function tripJsonLd(input: {
  name: string;
  description: string;
  image?: string;
  price?: number;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: input.name,
    description: input.description,
    image: input.image,
    url: input.url,
    provider: { '@type': 'TravelAgency', name: SITE_NAME, url: SITE_URL },
    ...(input.price
      ? {
          offers: {
            '@type': 'Offer',
            price: input.price,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  };
}

export function attractionJsonLd(input: {
  name: string;
  description: string;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: input.name,
    description: input.description,
    image: input.image,
    url: input.url,
    address: { '@type': 'PostalAddress', addressCountry: 'UZ' },
  };
}

export function articleJsonLd(input: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  author: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    image: input.image,
    datePublished: input.datePublished,
    author: { '@type': 'Organization', name: input.author },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: input.url,
  };
}
