import Image from 'next/image';
import { Link } from '@/i18n/routing';

// Official Nexatlas logo. White version over dark/transparent headers,
// full-color version on light backgrounds. Files live in /public/images.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="block leading-none"
      aria-label="Nexatlas — Your Gateway to Uzbekistan & Central Asia"
    >
      <Image
        src={light ? '/images/logo-white.png' : '/images/logo.png'}
        alt="Nexatlas"
        width={245}
        height={240}
        priority
        className="h-16 w-auto lg:h-20"
      />
    </Link>
  );
}
