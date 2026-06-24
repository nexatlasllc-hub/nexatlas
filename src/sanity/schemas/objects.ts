import { defineField, defineType } from 'sanity';

// Supported content locales (mirror of src/i18n/config.ts).
// Add a language here and it becomes editable in the Studio everywhere.
export const contentLocales = [
  { id: 'uz', title: 'Uzbek' },
  { id: 'ru', title: 'Russian' },
  { id: 'en', title: 'English' },
  { id: 'tr', title: 'Turkish' },
  { id: 'ar', title: 'Arabic' },
  { id: 'de', title: 'German' },
  { id: 'fr', title: 'French' },
  { id: 'es', title: 'Spanish' },
  { id: 'it', title: 'Italian' },
  { id: 'zh', title: 'Chinese' },
  { id: 'ja', title: 'Japanese' },
  { id: 'ko', title: 'Korean' },
  { id: 'hi', title: 'Hindi' },
  { id: 'pt', title: 'Portuguese' },
  { id: 'fa', title: 'Persian' },
];

// A localized single-line string (one field per locale).
export const localeString = defineType({
  name: 'localeString',
  title: 'Localized string',
  type: 'object',
  fieldsets: [{ name: 'translations', title: 'Translations', options: { collapsible: true } }],
  fields: contentLocales.map(({ id, title }) =>
    defineField({
      name: id,
      title,
      type: 'string',
      fieldset: id === 'uz' ? undefined : 'translations',
    }),
  ),
});

// A localized multi-line text.
export const localeText = defineType({
  name: 'localeText',
  title: 'Localized text',
  type: 'object',
  fieldsets: [{ name: 'translations', title: 'Translations', options: { collapsible: true } }],
  fields: contentLocales.map(({ id, title }) =>
    defineField({
      name: id,
      title,
      type: 'text',
      rows: 3,
      fieldset: id === 'uz' ? undefined : 'translations',
    }),
  ),
});

// Rich text block content.
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block content',
  type: 'array',
  of: [
    { type: 'block' },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    },
  ],
});

// Localized rich text (one block array per locale).
export const localeBlock = defineType({
  name: 'localeBlock',
  title: 'Localized rich text',
  type: 'object',
  fieldsets: [{ name: 'translations', title: 'Translations', options: { collapsible: true } }],
  fields: contentLocales.map(({ id, title }) =>
    defineField({
      name: id,
      title,
      type: 'blockContent',
      fieldset: id === 'uz' ? undefined : 'translations',
    }),
  ),
});

// Reusable SEO object.
export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({ name: 'metaTitle', title: 'Meta title', type: 'localeString' }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'localeText' }),
    defineField({ name: 'ogImage', title: 'Social share image', type: 'image' }),
    defineField({ name: 'noIndex', title: 'Hide from search engines', type: 'boolean' }),
  ],
});
