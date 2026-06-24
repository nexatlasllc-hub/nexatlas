import { useTranslations } from 'next-intl';

export default function TrustBar() {
  const t = useTranslations('trust');
  const items = [
    { icon: '◆', label: t('licensed') },
    { icon: '★', label: t('rating') },
    { icon: '⌁', label: t('support') },
    { icon: '✦', label: t('tailorMade') },
  ];
  return (
    <div className="border-y border-midnight/10 bg-white">
      <div className="container-px grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-center gap-2.5 text-center">
            <span className="text-gold" aria-hidden>{item.icon}</span>
            <span className="text-sm font-medium text-midnight/80">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatsStrip() {
  const t = useTranslations('trust');
  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ];
  return (
    <section className="bg-midnight">
      <div className="container-px grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="font-display text-4xl font-semibold text-gold lg:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-white/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
