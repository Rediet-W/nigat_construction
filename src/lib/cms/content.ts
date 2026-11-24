import "server-only";

import { cache } from "react";

import { detailRoute } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { getLocale } from "@/i18n/server";
import { CMS_SECTOR, CMS_URL, cmsGet, type Query } from "@/lib/cms/client";
import type {
  CmsAboutPage,
  CmsBlogPost,
  CmsFaqGroup,
  CmsGalleryItem,
  CmsHomePage,
  CmsMedia,
  CmsProject,
  CmsService,
  CmsSiteSetting,
  CmsTeamMember,
  CmsTestimonial,
} from "@/lib/cms/types";
import type { FaqItem, GalleryImage, Post, Project, Service, SocialLink, TeamMember, Testimonial } from "@/types";

/*
 * Content for this website, read from the shared Nigat CMS in the visitor's language.
 * Each getter returns the site's own types (src/types) so components don't depend on Strapi.
 */

const bySector = { sector: { $eq: CMS_SECTOR } };
/** Fields for media relations: enough for <Image> and alt text. */
const MEDIA = { fields: ["url", "alternativeText", "width", "height"] };

/** Absolute URL for a CMS file (local uploads are relative; Cloudinary URLs are already absolute). */
export function mediaUrl(media: CmsMedia | null | undefined, fallback = ""): string {
  if (!media?.url) return fallback;
  return /^https?:\/\//.test(media.url) ? media.url : `${CMS_URL}${media.url}`;
}

/** Fetches every page of a collection (the CMS caps a page at 100). */
async function getAll<T>(endpoint: string, model: string, query: Query): Promise<T[]> {
  const items: T[] = [];
  for (let page = 1; ; page++) {
    const res = await cmsGet<T>(endpoint, { ...query, pagination: { page, pageSize: 100 } }, model);
    items.push(...res.data);
    if (!res.meta.pagination || page >= res.meta.pagination.pageCount) return items;
  }
}

async function getOne<T>(endpoint: string, model: string, query: Query): Promise<T | null> {
  const res = await cmsGet<T>(endpoint, { ...query, pagination: { page: 1, pageSize: 1 } }, model);
  return res.data[0] ?? null;
}

// ─── Site-wide ──────────────────────────────────────────────────────────────

export const getSiteSetting = cache(async () =>
  getOne<CmsSiteSetting>("site-settings", "site-setting", {
    locale: await getLocale(),
    filters: bySector,
    populate: { logo: MEDIA, logoDark: MEDIA, contact: true, socialLinks: true, seo: true },
  }),
);

/**
 * Site logo from the CMS site settings ("Logo"; "Logo Dark" for dark backgrounds when set),
 * falling back to the bundled logo so the header never renders empty.
 */
export const getLogoUrl = cache(async (variant: "default" | "dark" = "default"): Promise<string> => {
  const site = await getSiteSetting();
  const logo = variant === "dark" ? (site?.logoDark ?? site?.logo) : site?.logo;
  return mediaUrl(logo, SITE.logo);
});

/** "0995888882" -> "tel:+251995888882" (Ethiopian local numbers drop the leading 0). */
function telHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return `tel:${digits}`;
  if (digits.startsWith("251")) return `tel:+${digits}`;
  return `tel:+251${digits.replace(/^0/, "")}`;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: ContactLink | null;
  altPhone: ContactLink | null;
  email: ContactLink | null;
  address: string;
  hours: string;
  mapUrl: string | null;
}

/** Phones, email, address, hours and map for the header, footer and contact page. */
export const getContactInfo = cache(async (): Promise<ContactInfo> => {
  const c = (await getSiteSetting())?.contact;
  return {
    phone: c?.phone ? { label: c.phone, href: telHref(c.phone) } : null,
    altPhone: c?.phoneAlt ? { label: c.phoneAlt, href: telHref(c.phoneAlt) } : null,
    email: c?.email ? { label: c.email, href: `mailto:${c.email}` } : null,
    address: c?.address ?? "",
    hours: c?.hours ?? "",
    mapUrl: c?.mapUrl ?? null,
  };
});

const SOCIAL_ICONS: Record<string, string> = {
  Facebook: "fa-brands fa-facebook-f",
  Instagram: "fa-brands fa-instagram",
  LinkedIn: "fa-brands fa-linkedin-in",
  Telegram: "fa-brands fa-telegram",
  TikTok: "fa-brands fa-tiktok",
  WhatsApp: "fa-brands fa-whatsapp",
  X: "fa-brands fa-x-twitter",
  YouTube: "fa-brands fa-youtube",
};

export const getSocialLinks = cache(async (): Promise<SocialLink[]> =>
  ((await getSiteSetting())?.socialLinks ?? []).map((s) => ({
    label: s.platform,
    href: s.url,
    icon: SOCIAL_ICONS[s.platform] ?? "fa-solid fa-link",
  })),
);

/** The promo video every "play" button opens: the home page's secondary CTA link. */
export const getPromoVideoUrl = cache(async (): Promise<string> => (await getHomePage())?.secondaryCta?.href ?? "");

export const getHomePage = cache(async () =>
  getOne<CmsHomePage>("home-pages", "home-page", {
    locale: await getLocale(),
    filters: bySector,
    populate: {
      heroSlides: { populate: { image: MEDIA, video: MEDIA } },
      primaryCta: true,
      secondaryCta: true,
      highlights: true,
      stats: true,
      seo: true,
    },
  }),
);

export interface Stat {
  /** Number for <Counter> ("8", "4.9"). */
  value: string;
  /** What follows the number ("+", "%", "k+"). */
  suffix: string;
  label: string;
}

/** "8+" -> { value: "8", suffix: "+" }; a value without a leading number is shown as-is. */
const toStat = (s: { value: string; label: string }): Stat => {
  const m = s.value.trim().match(/^(\d+(?:\.\d+)?)(.*)$/);
  return m ? { value: m[1], suffix: m[2].trim(), label: s.label } : { value: "", suffix: s.value, label: s.label };
};

/**
 * The company's headline numbers (years, projects, engineers), edited once on the CMS about page
 * and shown by every counter on the site.
 */
export const getCompanyStats = cache(async (): Promise<Stat[]> => ((await getAboutPage())?.stats ?? []).map(toStat));

export const getAboutPage = cache(async () =>
  getOne<CmsAboutPage>("about-pages", "about-page", {
    locale: await getLocale(),
    filters: bySector,
    populate: { mainImage: MEDIA, topics: { populate: { image: MEDIA } }, principles: true, stats: true, seo: true },
  }),
);

// ─── Services ───────────────────────────────────────────────────────────────

export interface ServiceDetail extends Service {
  overview: string;
  highlights: string[];
  processSteps: { title: string; description: string }[];
  metaTitle: string | null;
  metaDescription: string | null;
}

const toService = (s: CmsService): Service => ({
  id: s.slug,
  title: s.title,
  description: s.excerpt ?? "",
  image: mediaUrl(s.image),
  href: detailRoute.service(s.slug),
});

export const getServices = cache(async (): Promise<Service[]> => {
  const items = await getAll<CmsService>("services", "service", {
    locale: await getLocale(),
    filters: bySector,
    sort: ["order:asc", "title:asc"],
    fields: ["title", "slug", "excerpt", "order"],
    populate: { image: MEDIA },
  });
  return items.map(toService);
});

export const getService = cache(async (slug: string): Promise<ServiceDetail | null> => {
  const s = await getOne<CmsService>("services", "service", {
    locale: await getLocale(),
    filters: { ...bySector, slug: { $eq: slug } },
    populate: { image: MEDIA, highlights: true, processSteps: true, seo: true },
  });
  if (!s) return null;
  return {
    ...toService(s),
    overview: s.overview ?? "",
    highlights: (s.highlights ?? []).map((h) => h.text),
    processSteps: (s.processSteps ?? []).map((p) => ({ title: p.title, description: p.description ?? "" })),
    metaTitle: s.seo?.metaTitle ?? null,
    metaDescription: s.seo?.metaDescription ?? null,
  };
});

// ─── Projects (Construction only, so no sector filter) ─────────────────────

export interface ProjectDetail extends Project {
  summary: string;
  description: string;
  client: string;
  location: string;
  area: string;
  status: CmsProject["status"];
  completedYear: number | null;
  gallery: string[];
  metaTitle: string | null;
  metaDescription: string | null;
}

const toProject = (p: CmsProject): Project => ({
  id: p.slug,
  title: p.title,
  category: p.category ?? "",
  image: mediaUrl(p.cover),
  href: detailRoute.project(p.slug),
});

/** All projects, or only those marked "featured" (home page). */
export const getProjects = cache(async (featuredOnly = false): Promise<Project[]> => {
  const items = await getAll<CmsProject>("projects", "project", {
    locale: await getLocale(),
    filters: featuredOnly ? { featured: { $eq: true } } : undefined,
    sort: ["order:asc", "title:asc"],
    fields: ["title", "slug", "category", "order", "featured"],
    populate: { cover: MEDIA },
  });
  return items.map(toProject);
});

export const getProject = cache(async (slug: string): Promise<ProjectDetail | null> => {
  const p = await getOne<CmsProject>("projects", "project", {
    locale: await getLocale(),
    filters: { slug: { $eq: slug } },
    populate: { cover: MEDIA, gallery: MEDIA, seo: true },
  });
  if (!p) return null;
  return {
    ...toProject(p),
    summary: p.summary ?? "",
    description: p.description ?? "",
    client: p.client ?? "",
    location: p.location ?? "",
    area: p.area ?? "",
    status: p.status,
    completedYear: p.completedYear,
    gallery: (p.gallery ?? []).map((m) => mediaUrl(m)),
    metaTitle: p.seo?.metaTitle ?? null,
    metaDescription: p.seo?.metaDescription ?? null,
  };
});

// ─── Team ───────────────────────────────────────────────────────────────────

export interface TeamMemberDetail extends TeamMember {
  bio: string;
  email: string | null;
  phone: string | null;
  socialLinks: { platform: string; url: string }[];
}

const toTeamMember = (m: CmsTeamMember): TeamMember => ({
  id: m.slug,
  name: m.name,
  role: m.role ?? "",
  image: mediaUrl(m.photo),
  href: detailRoute.team(m.slug),
});

export const getTeamMembers = cache(async (): Promise<TeamMember[]> => {
  const items = await getAll<CmsTeamMember>("team-members", "team-member", {
    locale: await getLocale(),
    filters: bySector,
    sort: ["order:asc", "name:asc"],
    fields: ["name", "slug", "role", "order"],
    populate: { photo: MEDIA },
  });
  return items.map(toTeamMember);
});

export const getTeamMember = cache(async (slug: string): Promise<TeamMemberDetail | null> => {
  const m = await getOne<CmsTeamMember>("team-members", "team-member", {
    locale: await getLocale(),
    filters: { ...bySector, slug: { $eq: slug } },
    populate: { photo: MEDIA, socialLinks: true },
  });
  if (!m) return null;
  return { ...toTeamMember(m), bio: m.bio ?? "", email: m.email, phone: m.phone, socialLinks: m.socialLinks ?? [] };
});

// ─── Testimonials, FAQs, gallery ────────────────────────────────────────────

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  const locale = await getLocale();
  const items = await getAll<CmsTestimonial>("testimonials", "testimonial", {
    locale,
    filters: bySector,
    sort: ["order:asc"],
    populate: { photo: MEDIA },
  });
  const separator = locale === "am" ? "፣ " : ", ";
  return items.map((t) => ({
    id: t.documentId,
    quote: t.quote,
    author: t.role ? `${t.author}${separator}${t.role}` : t.author,
    image: mediaUrl(t.photo),
  }));
});

export interface FaqGroup {
  /** Stable key (e.g. "general"), used for page anchors. */
  id: string;
  title: string;
  items: FaqItem[];
}

export const getFaqGroups = cache(async (): Promise<FaqGroup[]> => {
  const items = await getAll<CmsFaqGroup>("faq-groups", "faq-group", {
    locale: await getLocale(),
    filters: bySector,
    sort: ["order:asc"],
    populate: { items: true },
  });
  return items.map((g) => ({
    id: g.anchor || g.documentId,
    title: g.title,
    items: g.items.map(({ question, answer }) => ({ question, answer })),
  }));
});

/** One FAQ group's questions (e.g. "general" on the home and detail pages); first group if it's missing. */
export const getFaqItems = cache(async (groupId: string): Promise<FaqItem[]> => {
  const groups = await getFaqGroups();
  return (groups.find((g) => g.id === groupId) ?? groups[0])?.items ?? [];
});

export interface GalleryVideo {
  poster: string;
  alt: string;
  url: string;
}

const galleryItems = cache(async () =>
  getAll<CmsGalleryItem>("gallery-items", "gallery-item", {
    locale: await getLocale(),
    filters: bySector,
    sort: ["order:asc"],
    populate: { media: MEDIA },
  }),
);

export const getGalleryImages = cache(async (): Promise<(GalleryImage & { alt: string })[]> =>
  (await galleryItems())
    .filter((g) => g.type === "image" && g.media)
    .map((g) => ({
      src: mediaUrl(g.media),
      width: g.media?.width ?? 1200,
      height: g.media?.height ?? 800,
      alt: g.alt ?? g.media?.alternativeText ?? "",
    })),
);

export const getGalleryVideos = cache(async (): Promise<GalleryVideo[]> =>
  (await galleryItems())
    .filter((g) => g.type === "video" && g.videoUrl)
    .map((g) => ({ poster: mediaUrl(g.media), alt: g.alt ?? "", url: g.videoUrl! })),
);

// ─── Blog ───────────────────────────────────────────────────────────────────

export interface PostDetail extends Post {
  excerpt: string;
  content: string;
  author: string;
  category: string;
  publishedDate: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
}

const toPost = (p: CmsBlogPost): Post => ({
  id: p.slug,
  title: p.title,
  image: mediaUrl(p.cover),
  href: detailRoute.post(p.slug),
});

export const getPosts = cache(async (): Promise<Post[]> => {
  const items = await getAll<CmsBlogPost>("blog-posts", "blog-post", {
    locale: await getLocale(),
    filters: bySector,
    sort: ["publishedDate:desc", "title:asc"],
    fields: ["title", "slug", "publishedDate"],
    populate: { cover: MEDIA },
  });
  return items.map(toPost);
});

export const getPost = cache(async (slug: string): Promise<PostDetail | null> => {
  const p = await getOne<CmsBlogPost>("blog-posts", "blog-post", {
    locale: await getLocale(),
    filters: { ...bySector, slug: { $eq: slug } },
    populate: { cover: MEDIA, seo: true },
  });
  if (!p) return null;
  return {
    ...toPost(p),
    excerpt: p.excerpt ?? "",
    content: p.content ?? "",
    author: p.author ?? "",
    category: p.category ?? "",
    publishedDate: p.publishedDate,
    metaTitle: p.seo?.metaTitle ?? null,
    metaDescription: p.seo?.metaDescription ?? null,
  };
});
