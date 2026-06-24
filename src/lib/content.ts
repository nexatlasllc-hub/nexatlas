import type { Locale } from '@/i18n/config';
import { defaultLocale } from '@/i18n/config';
import type { LocaleField } from './types';
import {
  countries,
  destinations,
  tours,
  testimonials,
  posts,
} from './data';

// Resolve a localized field with a sensible fallback chain:
// requested locale → English → Uzbek (default) → first available.
export function pickLocale(field: LocaleField | undefined, locale: string): string {
  if (!field) return '';
  return (
    field[locale as Locale] ||
    field.en ||
    field[defaultLocale] ||
    Object.values(field)[0] ||
    ''
  );
}

// ── Content access layer ──────────────────────────────────────────────────
// Today these read from local seed data. When Sanity is connected, swap the
// bodies to `client.fetch(...)` with the queries in src/sanity/queries.ts —
// the component contracts (shapes) stay identical, so no UI changes needed.

export function getLiveCountries() {
  return countries.filter((c) => c.status === 'live');
}

export function getAllCountries() {
  return countries;
}

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export function getDestinations(countrySlug?: string) {
  return destinations.filter((d) => !countrySlug || d.countrySlug === countrySlug);
}

export function getFeaturedDestinations() {
  return destinations.filter((d) => d.featured);
}

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function getTours(filter?: { country?: string; theme?: string }) {
  return tours.filter((t) => {
    if (filter?.country && t.countrySlug !== filter.country) return false;
    if (filter?.theme && !t.themes.includes(filter.theme as never)) return false;
    return true;
  });
}

export function getFeaturedTours() {
  return tours.filter((t) => t.featured);
}

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export function getRelatedTours(slug: string, limit = 3) {
  const current = getTour(slug);
  if (!current) return tours.slice(0, limit);
  return tours
    .filter((t) => t.slug !== slug && t.themes.some((th) => current.themes.includes(th)))
    .slice(0, limit);
}

export function getTestimonials() {
  return testimonials;
}

export function getPosts() {
  return posts;
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
