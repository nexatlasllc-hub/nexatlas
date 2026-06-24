import { type SchemaTypeDefinition } from 'sanity';
import { localeString, localeText, localeBlock, blockContent, seo } from './objects';
import {
  country,
  theme,
  destination,
  tour,
  testimonial,
  author,
  post,
  siteSettings,
} from './documents';

export const schemaTypes: SchemaTypeDefinition[] = [
  // objects
  localeString,
  localeText,
  localeBlock,
  blockContent,
  seo,
  // documents
  country,
  theme,
  destination,
  tour,
  testimonial,
  author,
  post,
  siteSettings,
];
