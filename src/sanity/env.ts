export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-01';

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';

// When no Sanity project is configured, the app renders from local seed
// content (src/lib/data.ts) so the site is fully functional out of the box.
export const sanityConfigured = Boolean(projectId);
