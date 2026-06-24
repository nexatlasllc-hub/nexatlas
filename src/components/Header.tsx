'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { key: 'destinations', href: '/destinations' },
  { key: 'tours', href: '/tours' },
  { key: 'experiences', href: '/experiences' },
  { key: 'travelGuide', href: '/travel-guide' },
  { key: 'whyUs', href: '/why-nexatlas' },
  { key: 'about', href: '/about' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Transparent over hero on the homepage until scrolled.
  const isHome = pathname === '/';
  const transparent = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent ? 'bg-transparent' : 'bg-white/95 shadow-soft backdrop-blur'
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between lg:h-20">
        <Logo light={transparent} />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`link-underline text-sm font-medium transition ${
                transparent ? 'text-white/90 hover:text-white' : 'text-midnight/80 hover:text-midnight'
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher light={transparent} />
          <Link href="/plan-your-trip" className="hidden btn-primary sm:inline-flex">
            {t('planTrip')}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden ${transparent ? 'text-white' : 'text-midnight'}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-midnight/10 bg-white lg:hidden">
          <nav className="container-px flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="border-b border-midnight/5 py-3 text-midnight/90"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link href="/plan-your-trip" className="btn-primary mt-4">
              {t('planTrip')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
