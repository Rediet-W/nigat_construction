/** Shapes returned by the Nigat CMS REST API (Strapi 5, flat documents). Only fields the site reads. */

export interface CmsMedia {
  url: string;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
}

interface CmsDocument {
  id: number;
  documentId: string;
  locale: string;
}

export interface CmsSeo {
  metaTitle: string | null;
  metaDescription: string | null;
  ogImage?: CmsMedia | null;
  noIndex: boolean | null;
}

export interface CmsFeature {
  title: string;
  description: string | null;
}

export interface CmsStat {
  value: string;
  label: string;
}

export interface CmsLink {
  label: string;
  href: string;
}

export interface CmsSocialLink {
  platform: "Facebook" | "Instagram" | "LinkedIn" | "Telegram" | "TikTok" | "WhatsApp" | "X" | "YouTube";
  url: string;
}

export interface CmsSiteSetting extends CmsDocument {
  name: string;
  shortName: string | null;
  legalName: string | null;
  description: string | null;
  established: number | null;
  logo: CmsMedia | null;
  logoDark: CmsMedia | null;
  contact: {
    phone: string | null;
    phoneAlt: string | null;
    email: string | null;
    address: string | null;
    hours: string | null;
    mapUrl: string | null;
  } | null;
  socialLinks: CmsSocialLink[];
  seo: CmsSeo | null;
}

export interface CmsHomePage extends CmsDocument {
  heroBadge: string | null;
  heroTitle: string;
  heroSubtitle: string | null;
  heroSlides: { label: string | null; image: CmsMedia | null; video: CmsMedia | null }[];
  heroSlideDuration: number | null;
  primaryCta: CmsLink | null;
  secondaryCta: CmsLink | null;
  highlights: CmsFeature[];
  stats: CmsStat[];
  seo: CmsSeo | null;
}

export interface CmsAboutPage extends CmsDocument {
  introTitle: string | null;
  introLead: string | null;
  body: string | null;
  mainImage: CmsMedia | null;
  topics: (CmsFeature & { image: CmsMedia | null; imageAlt: string | null })[];
  principles: CmsFeature[];
  mission: string | null;
  vision: string | null;
  stats: CmsStat[];
  seo: CmsSeo | null;
}

export interface CmsService extends CmsDocument {
  title: string;
  slug: string;
  image: CmsMedia | null;
  excerpt: string | null;
  overview?: string | null;
  highlights?: { text: string }[];
  processSteps?: CmsFeature[];
  order: number | null;
  seo?: CmsSeo | null;
}

export interface CmsProject extends CmsDocument {
  title: string;
  slug: string;
  category: string | null;
  status: "completed" | "ongoing" | "planned" | null;
  cover: CmsMedia | null;
  gallery?: CmsMedia[] | null;
  summary: string | null;
  description?: string | null;
  client: string | null;
  location: string | null;
  area: string | null;
  completedYear: number | null;
  featured: boolean | null;
  order: number | null;
  seo?: CmsSeo | null;
}

export interface CmsTeamMember extends CmsDocument {
  name: string;
  slug: string;
  role: string | null;
  photo: CmsMedia | null;
  bio?: string | null;
  email: string | null;
  phone: string | null;
  socialLinks?: CmsSocialLink[];
  order: number | null;
}

export interface CmsTestimonial extends CmsDocument {
  quote: string;
  author: string;
  role: string | null;
  photo: CmsMedia | null;
  order: number | null;
}

export interface CmsFaqGroup extends CmsDocument {
  title: string;
  anchor: string | null;
  items: { question: string; answer: string }[];
  order: number | null;
}

export interface CmsGalleryItem extends CmsDocument {
  type: "image" | "video";
  media: CmsMedia | null;
  videoUrl: string | null;
  alt: string | null;
  caption: string | null;
  category: string | null;
  order: number | null;
}

export interface CmsBlogPost extends CmsDocument {
  title: string;
  slug: string;
  cover: CmsMedia | null;
  excerpt: string | null;
  content?: string | null;
  author: string | null;
  category: string | null;
  publishedDate: string | null;
  seo?: CmsSeo | null;
}
