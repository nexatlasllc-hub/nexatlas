import { groq } from 'next-sanity';

// GROQ queries. Localized fields are resolved client-side via pickLocale()
// so we fetch the whole localeString/localeText object.

export const featuredDestinationsQuery = groq`
  *[_type == "destination" && featured == true] | order(order asc) {
    _id, name, slug, tagline, excerpt, heroImage,
    "country": country->{ name, slug, status }
  }
`;

export const allDestinationsQuery = groq`
  *[_type == "destination"] | order(order asc) {
    _id, name, slug, tagline, excerpt, heroImage,
    "country": country->{ name, slug, status }
  }
`;

export const destinationBySlugQuery = groq`
  *[_type == "destination" && slug.current == $slug][0]{
    ..., "country": country->{ name, slug }
  }
`;

export const featuredToursQuery = groq`
  *[_type == "tour" && featured == true] | order(order asc) {
    _id, title, slug, summary, heroImage, durationDays, priceFrom, tier, bestFor,
    "country": country->{ name, slug },
    "themes": themes[]->{ title, slug }
  }
`;

export const allToursQuery = groq`
  *[_type == "tour"] | order(order asc) {
    _id, title, slug, summary, heroImage, durationDays, priceFrom, tier, bestFor,
    "country": country->{ name, slug },
    "themes": themes[]->{ title, slug }
  }
`;

export const tourBySlugQuery = groq`
  *[_type == "tour" && slug.current == $slug][0]{
    ...,
    "country": country->{ name, slug },
    "themes": themes[]->{ title, slug },
    "destinations": destinations[]->{ name, slug }
  }
`;

export const themesQuery = groq`*[_type == "theme"] | order(order asc)`;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc)`;

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, excerpt, coverImage, category, publishedAt,
    "author": author->{ name }
  }
`;

export const countriesQuery = groq`*[_type == "country"] | order(order asc)`;
