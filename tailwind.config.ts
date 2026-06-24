import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — Silk Road / Uzbek tilework inspired
        midnight: {
          DEFAULT: '#1B2A4A',
          50: '#EEF1F7',
          100: '#D5DCEA',
          600: '#243a63',
          900: '#101a2f',
        },
        gold: {
          DEFAULT: '#C8A04B',
          light: '#D9B976',
          dark: '#A6822F',
        },
        sand: {
          DEFAULT: '#F5F1E8',
          dark: '#E8E0CF',
        },
        ink: '#14110E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(20, 17, 14, 0.18)',
        soft: '0 2px 12px -4px rgba(20, 17, 14, 0.12)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
