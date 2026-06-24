import { defineField, defineType } from 'sanity';

// ── COUNTRY ──────────────────────────────────────────────────────────────
// First-class taxonomy. Adding Kazakhstan/Georgia/etc. = create a country doc
// and attach destinations + tours. No code or architecture changes required.
export const country = defineType({
  name: 'country',
  title: 'Country',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'localeString', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name.en' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'localeString' }),
    defineField({ name: 'intro', title: 'Introduction', type: 'localeBlock' }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['live', 'coming-soon'], layout: 'radio' },
      initialValue: 'coming-soon',
    }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: { select: { title: 'name.en', subtitle: 'status' } },
});

// ── THEME / EXPERIENCE ───────────────────────────────────────────────────
export const theme = defineType({
  name: 'theme',
  title: 'Theme / Experience',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localeString', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.en' }, validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'localeText' }),
    defineField({ name: 'icon', title: 'Icon key', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
  ],
  preview: { select: { title: 'title.en' } },
});

// ── DESTINATION ──────────────────────────────────────────────────────────
export const destination = defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'localeString', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name.en' }, validation: (r) => r.required() }),
    defineField({ name: 'country', title: 'Country', type: 'reference', to: [{ type: 'country' }], validation: (r) => r.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'localeString' }),
    defineField({ name: 'excerpt', title: 'Short description', type: 'localeText' }),
    defineField({ name: 'body', title: 'Full description', type: 'localeBlock' }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'highlights', title: 'Top sights', type: 'array', of: [{ type: 'localeString' }] }),
    defineField({ name: 'bestTime', title: 'Best time to visit', type: 'localeString' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: { select: { title: 'name.en', media: 'heroImage' } },
});

// ── TOUR ─────────────────────────────────────────────────────────────────
export const tour = defineType({
  name: 'tour',
  title: 'Tour',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localeString', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.en' }, validation: (r) => r.required() }),
    defineField({ name: 'country', title: 'Country', type: 'reference', to: [{ type: 'country' }], validation: (r) => r.required() }),
    defineField({ name: 'themes', title: 'Themes', type: 'array', of: [{ type: 'reference', to: [{ type: 'theme' }] }] }),
    defineField({ name: 'destinations', title: 'Destinations covered', type: 'array', of: [{ type: 'reference', to: [{ type: 'destination' }] }] }),
    defineField({ name: 'summary', title: 'Summary', type: 'localeText' }),
    defineField({ name: 'overview', title: 'Overview', type: 'localeBlock' }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'durationDays', title: 'Duration (days)', type: 'number', validation: (r) => r.required().min(1) }),
    defineField({ name: 'priceFrom', title: 'Price from (USD)', type: 'number' }),
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: { list: ['mid-range', 'luxury'], layout: 'radio' },
      initialValue: 'mid-range',
    }),
    defineField({ name: 'bestFor', title: 'Best for', type: 'localeString' }),
    defineField({ name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'localeString' }] }),
    defineField({
      name: 'itinerary',
      title: 'Day-by-day itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day', type: 'number' },
            { name: 'title', title: 'Title', type: 'localeString' },
            { name: 'description', title: 'Description', type: 'localeText' },
          ],
          preview: { select: { title: 'title.en', subtitle: 'day' } },
        },
      ],
    }),
    defineField({ name: 'included', title: "What's included", type: 'array', of: [{ type: 'localeString' }] }),
    defineField({ name: 'excluded', title: 'Not included', type: 'array', of: [{ type: 'localeString' }] }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: { select: { title: 'title.en', subtitle: 'tier', media: 'heroImage' } },
});

// ── TESTIMONIAL ──────────────────────────────────────────────────────────
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'author', title: 'Author', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'origin', title: 'Country', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'localeText', validation: (r) => r.required() }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number', initialValue: 5 }),
    defineField({ name: 'tour', title: 'Tour taken', type: 'reference', to: [{ type: 'tour' }] }),
    defineField({ name: 'avatar', title: 'Photo', type: 'image' }),
  ],
  preview: { select: { title: 'author', subtitle: 'origin' } },
});

// ── AUTHOR ───────────────────────────────────────────────────────────────
export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Role', type: 'localeString' }),
    defineField({ name: 'bio', title: 'Bio', type: 'localeText' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image' }),
  ],
  preview: { select: { title: 'name' } },
});

// ── JOURNAL POST ─────────────────────────────────────────────────────────
export const post = defineType({
  name: 'post',
  title: 'Journal post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localeString', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.en' }, validation: (r) => r.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'localeText' }),
    defineField({ name: 'body', title: 'Body', type: 'localeBlock' }),
    defineField({ name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({ name: 'country', title: 'Related country', type: 'reference', to: [{ type: 'country' }] }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: { select: { title: 'title.en', media: 'coverImage' } },
});

// ── SITE SETTINGS (singleton) ────────────────────────────────────────────
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({ name: 'companyName', title: 'Company name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'localeString' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'localeString' }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url' },
        { name: 'facebook', type: 'url' },
        { name: 'youtube', type: 'url' },
        { name: 'tripadvisor', type: 'url' },
      ],
    }),
  ],
  preview: { select: { title: 'companyName' } },
});
