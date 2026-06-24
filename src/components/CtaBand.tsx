import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function CtaBand() {
  const t = useTranslations('inquiry');
  return (
    <section className="relative overflow-hidden bg-midnight">
      <div className="tile-fallback absolute inset-0 opacity-40" aria-hidden />
      <div className="container-px relative py-20 text-center">
        <p className="eyebrow !text-gold-light">{t('eyebrow')}</p>
        <h2 className="heading-display mx-auto mt-3 max-w-2xl text-3xl !text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">{t('subtitle')}</p>
        <Link href="/plan-your-trip" className="btn-primary mt-8">
          {t('submit')}
        </Link>
      </div>
    </section>
  );
}
