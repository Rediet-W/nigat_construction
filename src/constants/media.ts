/**
 * Every photo and video on the site, in one place.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ STOCK = a template photo that must be replaced with Nigat's own photo     │
 * │ (Ethiopian crews, real projects). Drop the new file in public/images and  │
 * │ change the path here; nothing else needs to change.                       │
 * │ Videos stay `null` until Nigat sends footage: the page then shows the     │
 * │ photo instead, so no demo video from the template is ever loaded.         │
 * └──────────────────────────────────────────────────────────────────────────┘
 */
export const MEDIA = {
  /** Home hero background photo (STOCK). */
  heroImage: "/images/hero-bg-image.jpg",
  /** Home hero loop: muted MP4, 10–15 s, under ~3 MB. e.g. "/videos/home-hero.mp4" */
  heroVideo: null as string | null,

  /** Inner-page banner photo (STOCK). */
  pageHeaderImage: "/images/page-header-bg.jpg",
  /** Services page banner loop: muted MP4, 10–15 s, under ~3 MB. */
  servicesVideo: null as string | null,

  /** Home intro and About "Our story" photo (STOCK). */
  aboutImage: "/images/about-us-image-1.jpg",
  /** About "Mission / Vision / Values" photo (STOCK). */
  missionImage: "/images/core-value-image.jpg",

  /** One photo per service category, see constants/services.ts (STOCK). */
  services: {
    "interior-finishing": "/images/service-image-1.jpg",
    "floors-and-walls": "/images/service-image-2.jpg",
    "joinery-glass-metal": "/images/service-image-4.jpg",
    "renovation-building-services": "/images/service-image-3.jpg",
  },
} as const;
