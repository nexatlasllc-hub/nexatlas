import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { SITE_URL, buildAlternates } from '@/lib/seo';
import { getAllCountries, getDestinations, getTours, getPosts } from '@/lib/content';
import { themeDefs } from '@/lib/data';

// Multilingual sitemap with hreflang alternates for every route.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    'destinations',
    'tours',
    'experiences',
    'travel-guide',
    'about',
    'why-nexatlas',
    'reviews',
    'contact',
    'plan-your-trip',
    'legal/privacy',
    'legal/terms',
    'legal/cookies',
  ];

  const dynamicPaths = [
    ...getAllCountries().map((c) => `destinations/${c.slug}`),
    ...getDestinations().map((d) => `destinations/${d.countrySlug}/${d.slug}`),
    ...themeDefs.map((t) => `tours/${t.key}`),
    ...getTours().map((t) => `tours/${t.slug}`),
    ...getPosts().map((p) => `travel-guide/${p.slug}`),
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

  return allPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path ? `/${path}` : ''}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.7,
      alternates: { languages: buildAlternates(path) },
    })),
  );
}
