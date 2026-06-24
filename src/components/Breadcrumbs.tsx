import { Link } from '@/i18n/routing';

export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink/55">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-gold-dark">{item.label}</Link>
            ) : (
              <span className="text-midnight">{item.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden className="text-ink/30">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
