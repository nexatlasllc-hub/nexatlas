// Central i18n configuration for Nexatlas.uz
// Adding a language = add one entry here. Architecture supports unlimited locales.

export type Locale = (typeof locales)[number];

export const locales = [
  'uz', // Uzbek 🇺🇿 (default)
  'en', // English 🇺🇸
  'ru', // Russian 🇷🇺
  'tr', // Turkish 🇹🇷
  'ar', // Arabic 🇸🇦 (RTL)
  'de', // German 🇩🇪
  'fr', // French 🇫🇷
  'es', // Spanish 🇪🇸
  'it', // Italian 🇮🇹
  'zh', // Chinese 🇨🇳
  'ja', // Japanese 🇯🇵
  'ko', // Korean 🇰🇷
  'hi', // Hindi 🇮🇳
  'pt', // Portuguese 🇵🇹
  'fa', // Persian 🇮🇷 (RTL)
] as const;

export const defaultLocale: Locale = 'uz';

// Right-to-left languages
export const rtlLocales: Locale[] = ['ar', 'fa'];

export function isRtl(locale: string): boolean {
  return rtlLocales.includes(locale as Locale);
}

export function dir(locale: string): 'rtl' | 'ltr' {
  return isRtl(locale) ? 'rtl' : 'ltr';
}

export interface LocaleMeta {
  code: Locale;
  label: string; // native name
  english: string;
  flag: string;
  // BCP-47 hreflang value
  hreflang: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  uz: { code: 'uz', label: "O'zbekcha", english: 'Uzbek', flag: '🇺🇿', hreflang: 'uz' },
  ru: { code: 'ru', label: 'Русский', english: 'Russian', flag: '🇷🇺', hreflang: 'ru' },
  en: { code: 'en', label: 'English', english: 'English', flag: '🇺🇸', hreflang: 'en' },
  tr: { code: 'tr', label: 'Türkçe', english: 'Turkish', flag: '🇹🇷', hreflang: 'tr' },
  ar: { code: 'ar', label: 'العربية', english: 'Arabic', flag: '🇸🇦', hreflang: 'ar' },
  de: { code: 'de', label: 'Deutsch', english: 'German', flag: '🇩🇪', hreflang: 'de' },
  fr: { code: 'fr', label: 'Français', english: 'French', flag: '🇫🇷', hreflang: 'fr' },
  es: { code: 'es', label: 'Español', english: 'Spanish', flag: '🇪🇸', hreflang: 'es' },
  it: { code: 'it', label: 'Italiano', english: 'Italian', flag: '🇮🇹', hreflang: 'it' },
  zh: { code: 'zh', label: '中文', english: 'Chinese', flag: '🇨🇳', hreflang: 'zh' },
  ja: { code: 'ja', label: '日本語', english: 'Japanese', flag: '🇯🇵', hreflang: 'ja' },
  ko: { code: 'ko', label: '한국어', english: 'Korean', flag: '🇰🇷', hreflang: 'ko' },
  hi: { code: 'hi', label: 'हिन्दी', english: 'Hindi', flag: '🇮🇳', hreflang: 'hi' },
  pt: { code: 'pt', label: 'Português', english: 'Portuguese', flag: '🇵🇹', hreflang: 'pt' },
  fa: { code: 'fa', label: 'فارسی', english: 'Persian', flag: '🇮🇷', hreflang: 'fa' },
};
