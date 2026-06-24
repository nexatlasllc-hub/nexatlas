import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Logo from './Logo';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-white/80">
      <div className="container-px section grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            {t('about')}
          </p>
          <p className="mt-4 text-sm text-white/60">
            "NEXATLAS" MCHJ · Uzbekistan
            <br />
            hello@nexatlas.uz
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t('explore')}
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/destinations" className="hover:text-gold">{tn('destinations')}</Link></li>
            <li><Link href="/tours" className="hover:text-gold">{tn('tours')}</Link></li>
            <li><Link href="/experiences" className="hover:text-gold">{tn('experiences')}</Link></li>
            <li><Link href="/travel-guide" className="hover:text-gold">{tn('travelGuide')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t('company')}
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-gold">{tn('about')}</Link></li>
            <li><Link href="/why-nexatlas" className="hover:text-gold">{tn('whyUs')}</Link></li>
            <li><Link href="/reviews" className="hover:text-gold">{tn('reviews')}</Link></li>
            <li><Link href="/contact" className="hover:text-gold">{tn('contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t('newsletterTitle')}
          </h3>
          <p className="mb-4 text-sm text-white/65">{t('newsletterBody')}</p>
          <form className="flex gap-2" action="#" method="post">
            <input
              type="email"
              required
              placeholder={t('emailPlaceholder')}
              aria-label={t('emailPlaceholder')}
              className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-primary whitespace-nowrap px-5 py-2.5">
              {t('subscribe')}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>© {year} Nexatlas. {t('rights')}</p>
          <div className="flex gap-5">
            <Link href="/legal/privacy" className="hover:text-gold">{t('privacy')}</Link>
            <Link href="/legal/terms" className="hover:text-gold">{t('terms')}</Link>
            <Link href="/legal/cookies" className="hover:text-gold">{t('cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
