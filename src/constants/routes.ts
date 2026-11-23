/**
 * Every page of the Nigat Fanawi Trading PLC website mapped to an App Router path.
 * (`index.html` and its duplicate `index-2.html` both map to `/`.)
 */
export const ROUTES = {
  home: "/",
  homeSlider: "/home-slider",
  homeVideo: "/home-video",
  about: "/about",
  services: "/services",
  blog: "/blog",
  projects: "/projects",
  team: "/team",
  testimonials: "/testimonials",
  imageGallery: "/image-gallery",
  videoGallery: "/video-gallery",
  faqs: "/faqs",
  contact: "/contact",
  /** Not a real route: renders the app's not-found page, like the original "404" menu link. */
  notFound: "/404",
} as const;

/** Detail pages, one per CMS entry (the slug is set in the CMS). */
export const detailRoute = {
  service: (slug: string) => `${ROUTES.services}/${slug}`,
  project: (slug: string) => `${ROUTES.projects}/${slug}`,
  team: (slug: string) => `${ROUTES.team}/${slug}`,
  post: (slug: string) => `${ROUTES.blog}/${slug}`,
};
