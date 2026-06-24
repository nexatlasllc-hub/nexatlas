export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`heading-display text-3xl sm:text-4xl lg:text-[2.6rem] ${light ? '!text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/75' : 'text-ink/65'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
