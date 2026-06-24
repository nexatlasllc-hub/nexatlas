import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';

export default function WhyUs() {
  const t = useTranslations('why');
  const points = [
    { icon: '🧭', title: t('point1Title'), body: t('point1Body') },
    { icon: '✎', title: t('point2Title'), body: t('point2Body') },
    { icon: '🛡', title: t('point3Title'), body: t('point3Body') },
    { icon: '✦', title: t('point4Title'), body: t('point4Body') },
  ];
  return (
    <section className="section">
      <div className="container-px">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sand text-2xl" aria-hidden>
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-midnight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
