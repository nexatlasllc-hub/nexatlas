import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';
import { getTestimonials, pickLocale } from '@/lib/content';

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${n} out of 5`}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} aria-hidden>★</span>
      ))}
    </div>
  );
}

export default function Testimonials({ locale }: { locale: string }) {
  const t = useTranslations('testimonials');
  const items = getTestimonials();

  return (
    <section className="section bg-sand">
      <div className="container-px">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-xl2 bg-white p-6 shadow-soft"
            >
              <Stars n={item.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                “{pickLocale(item.quote, locale)}”
              </blockquote>
              <figcaption className="mt-5 border-t border-midnight/10 pt-4">
                <p className="font-semibold text-midnight">{item.author}</p>
                <p className="text-xs text-ink/50">{item.origin}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
