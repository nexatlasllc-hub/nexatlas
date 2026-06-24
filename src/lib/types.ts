import type { Locale } from '@/i18n/config';

// A localized value: a string per locale. Missing locales fall back (see pickLocale).
export type LocaleField = Partial<Record<Locale, string>>;

export type Tier = 'mid-range' | 'luxury';
export type ThemeKey =
  | 'cultural'
  | 'silk-road'
  | 'private'
  | 'family'
  | 'luxury'
  | 'business';

export interface Country {
  slug: string;
  name: LocaleField;
  status: 'live' | 'coming-soon';
  tagline?: LocaleField;
}

export interface Destination {
  slug: string;
  countrySlug: string;
  name: LocaleField;
  tagline: LocaleField;
  excerpt: LocaleField;
  body: LocaleField;
  image: string;
  highlights: LocaleField[];
  bestTime: LocaleField;
  featured: boolean;
}

export interface ItineraryDay {
  day: number;
  title: LocaleField;
  description: LocaleField;
}

export interface Tour {
  slug: string;
  countrySlug: string;
  title: LocaleField;
  summary: LocaleField;
  image: string;
  themes: ThemeKey[];
  durationDays: number;
  priceFrom: number;
  tier: Tier;
  bestFor: LocaleField;
  highlights: LocaleField[];
  itinerary: ItineraryDay[];
  included: LocaleField[];
  excluded: LocaleField[];
  featured: boolean;
}

export interface Testimonial {
  author: string;
  origin: string;
  quote: LocaleField;
  rating: number;
  tourTitle?: string;
}

export interface Post {
  slug: string;
  title: LocaleField;
  excerpt: LocaleField;
  body: LocaleField;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
}
