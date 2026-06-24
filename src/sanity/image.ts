import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId, sanityConfigured } from './env';

const builder = sanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null;

// Generates optimized, responsive image URLs from a Sanity image reference.
export function urlForImage(source: Image) {
  if (!builder) return null;
  return builder.image(source).auto('format').fit('max');
}
