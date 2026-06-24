import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { defaultLocale, type Locale } from './config';

// Loads UI messages per locale. Locales without a full translation file yet
// fall back to English so the app is always complete (no missing-string errors).
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    // Structured fallback chain: requested → English → Uzbek default
    try {
      messages = (await import(`../../messages/en.json`)).default;
    } catch {
      messages = (await import(`../../messages/${defaultLocale}.json`)).default;
    }
  }

  return { locale, messages };
});
