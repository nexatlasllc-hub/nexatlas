# Nexatlas.uz

**Discover Uzbekistan Beyond Expectations** — a premium, multilingual inbound tourism platform for Uzbekistan and the Silk Road, built for Central Asia + Caucasus expansion.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Sanity CMS · next-intl (15 locales, RTL)**.

## Quick start

```bash
npm install
cp .env.example .env.local   # add your Sanity project id when ready
npm run dev                  # http://localhost:3000  → redirects to /uz
```

The site is **fully functional out of the box**: it renders real Uzbekistan content from `src/lib/data.ts`. When you connect Sanity, the same data shapes are served from the CMS — no UI changes needed.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run typecheck` — TypeScript check

## Architecture

```
src/
├── app/[locale]/          Localized routes (home, destinations, tours, guide, etc.)
│   ├── sitemap.ts          Multilingual sitemap + hreflang
│   └── robots.ts
├── components/             Reusable UI (Header, Hero, cards, InquiryForm, JSON-LD…)
├── i18n/                   15-locale config, routing, RTL (config.ts is the single source)
├── lib/                    Content access layer, types, SEO + schema.org helpers
└── sanity/                 CMS schemas, client, GROQ queries
messages/                   UI strings (uz, ru, en complete; others fall back to en)
```

### Key design decisions

- **Country-scoped content model.** `country` is a first-class type; destinations and tours reference it. Adding Kazakhstan/Kyrgyzstan/Tajikistan/Turkmenistan/Azerbaijan/Georgia is **content only** — no architecture change.
- **15 locales, default Uzbek**, with RTL for Arabic and Persian. UI is fully localized in uz/ru/en; the other 12 are wired with an English fallback chain and ready for professional translation.
- **SEO-first.** SSG, per-page metadata, canonical + hreflang, XML sitemap, robots, and JSON-LD (TravelAgency, TouristAttraction, TouristTrip, Article, BreadcrumbList).
- **Image system.** `SmartImage` renders optimized `next/image` and degrades gracefully to an on-brand treatment if a photo is missing — production photography drops into Sanity or `/public`.

## Connecting Sanity (CMS)

1. Create a project at sanity.io and set `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`.
2. Schemas live in `src/sanity/schemas` and the Studio config in `sanity.config.ts`. Run the Studio with the Sanity CLI (`npx sanity dev`) or deploy it separately.
3. Switch the bodies in `src/lib/content.ts` from local data to `client.fetch(...)` using the queries in `src/sanity/queries.ts`. Component contracts are identical.

## Roadmap

Phase 2: full content population + professional translation + GA4/CRM. Phase 3: booking, hotels, flights, visa, eSIM, insurance modules. Phase 4: multi-country expansion (content only).

See `PLAN.md` for the full strategy (sitemap, content, SEO, UI/UX).
