import SmartImage from './SmartImage';
import Breadcrumbs from './Breadcrumbs';

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative flex min-h-[48vh] items-end pt-16">
      <div className="absolute inset-0">
        <SmartImage src={image} alt={title} label={title} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/40" />
      </div>
      <div className="container-px relative pb-12 text-white">
        {breadcrumbs && (
          <div className="mb-4 [&_*]:!text-white/70 [&_a:hover]:!text-gold-light [&_span.text-midnight]:!text-white">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && <p className="eyebrow !text-gold-light">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
