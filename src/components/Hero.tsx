import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import SmartImage from './SmartImage';
import SearchBar from './SearchBar';

export default function Hero() {
  const t = useTranslations('hero');
  return (
    <section className="relative flex min-h-[92vh] items-center">
      <div className="absolute inset-0">
        <SmartImage
          src="/images/samarkand.jpg"
          alt="The Registan, Samarkand, Uzbekistan"
          label="Samarkand · Uzbekistan"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/40" />
      </div>

      <div className="container-px relative pt-24">
        <div className="max-w-2xl text-white">
          <p className="eyebrow !text-gold-light">{t('eyebrow')}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {t('subtitle')}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/plan-your-trip" className="btn-primary">{t('primaryCta')}</Link>
            <Link href="/tours" className="btn-secondary">{t('secondaryCta')}</Link>
          </div>
        </div>
        <SearchBar />
      </div>
    </section>
  );
}
