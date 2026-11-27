import type { Service, ServiceCategory } from "@/types";

/** Per-item translations keyed by the item's `id` in src/constants. Missing entries fall back to English. */
type Overrides<T> = Readonly<Record<string, Partial<T>>>;

export interface ContentOverrides {
  services: Overrides<Pick<Service, "title">>;
  categories: Overrides<Pick<ServiceCategory, "title" | "summary" | "description">>;
}

interface PageText {
  /** Banner heading. */
  title: string;
  /** Last breadcrumb item. */
  crumb: string;
}

interface TitledText {
  title: string;
  text: string;
}

/**
 * English UI text. This file defines the shape every other language must match
 * (see am.ts) — add a key here first, then translate it there.
 *
 * Copy marked DRAFT was written by the web team from what we know about Nigat;
 * it must be approved (or rewritten) by Nigat before launch.
 */
export const en = {
  meta: {
    description:
      "Nigat Fanawi Construction delivers interior finishing, floor and wall works, joinery and renovation for homes, offices and commercial spaces in Addis Ababa, Ethiopia.",
    /** Browser-tab titles, one per route. */
    titles: {
      about: "About Us",
      contact: "Contact Us",
      services: "Our Services",
      notFound: "Page Not Found",
    },
  },
  /** Inner-page banners and breadcrumbs. */
  pages: {
    about: { title: "About us", crumb: "About Us" } as PageText,
    contact: { title: "Contact us", crumb: "Contact Us" } as PageText,
    services: { title: "Our services", crumb: "Services" } as PageText,
    notFound: { title: "Page not found", crumb: "404 Error Page" } as PageText,
  },
  common: {
    language: "Language",
    home: "Home",
    breadcrumb: "Breadcrumb",
    getQuote: "Get a Quote",
    requestQuote: "Request a Quote",
    toggleMenu: "Toggle menu",
    backToTop: "Back to top",
    learnMore: "Learn more",
    allServices: "All services",
    address: "Addis Ababa",
    /** Ethiopian clock 3:00–11:00 = 9:00 AM–5:00 PM international time. */
    hours: "9:00 AM – 5:00 PM",
    copyright: "Copyright © 2026 Nigat Fanawi Trading PLC. All Rights Reserved.",
  },
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact Us",
  },
  footer: {
    quickLinks: "Quick Links",
    ourServices: "Our Services",
  },
  group: {
    tagline: "Nigat Fanawi Trading PLC — one parent company, three sectors.",
    youAreHere: "You are here",
    sectors: "Nigat Group sectors",
  },
  form: {
    name: "Your name",
    phone: "Phone number",
    service: "Service needed",
    generalEnquiry: "General enquiry / not sure yet",
    message: "Tell us about your project (location, size, timing)",
    send: "Send Request",
    sending: "Sending…",
    honeypot: "Leave this field empty",
    errors: {
      name: "Please enter your name.",
      phone: "Please enter a valid phone number, e.g. 0911 234 567.",
      message: "Please write a short message (at least 10 characters).",
    },
    sent: "Thank you! We have received your request and will call you back.",
    notConfigured: "Online requests are not switched on yet. Please call us or message us on Telegram or WhatsApp.",
    failed: "Your request could not be sent. Please try again, or call us directly.",
  },
  contact: {
    subtitle: "Contact Us",
    title: "Let's talk about your project",
    description:
      "Call us, message us on Telegram or WhatsApp, or send the form. We usually reply within one working day.",
    phoneLabel: "Call us",
    emailLabel: "Email us",
    formTitle: "Request a quote",
  },
  map: {
    subtitle: "Visit Our Office",
    title: "Visit our office in Addis Ababa",
    description: "Please call before you come so the right person is there to meet you.",
    iframeTitle: "Our office location on Google Maps",
  },
  /** Home hero. DRAFT headline in Nigat's voice. */
  hero: {
    subtitle: "Nigat Fanawi Construction · Addis Ababa",
    title: "Finishing and building works, done properly",
    description:
      "From ceilings and tiling to cladding, joinery and full renovations, our crews deliver clean, durable work and keep you informed from the first visit to handover.",
    secondaryCta: "Our Services",
  },
  /** Home "about" intro. DRAFT. */
  intro: {
    subtitle: "About Nigat",
    title: "A local team for finishing and fit-out works",
    description:
      "Nigat Fanawi Construction is the construction arm of Nigat Fanawi Trading PLC. We take on interior finishing, floor and wall works, joinery and renovation for homes, offices and commercial spaces.",
    points: [
      "Homes, offices, shops and commercial buildings.",
      "One team from the first site visit to handover.",
    ],
    moreAbout: "More About Us",
  },
  servicesShowcase: {
    subtitle: "Our Services",
    title: "What we build and finish",
    description: "Four areas of work, each handled by our own crews. Choose one to see what it includes.",
  },
  servicesPage: {
    intro: "Ceilings, floors, walls, joinery and renovation, handled by one team.",
    subtitle: "What We Do",
    title: "Four areas of work, one team",
    includes: "Includes",
  },
  /** "How we work" strip. DRAFT: confirm each step matches how Nigat actually works. */
  process: {
    subtitle: "How We Work",
    title: "Three simple steps",
    steps: [
      { title: "Consult", text: "Call or message us. We visit the site, listen to what you need and take measurements." },
      { title: "Plan & quote", text: "You receive a clear scope, timeline and price to approve before any work starts." },
      { title: "Build & hand over", text: "Our crew does the work, keeps the site tidy and walks you through the finished space." },
    ] as TitledText[],
  },
  categoryPage: {
    includedTitle: "What this service includes",
    otherTitle: "Other services",
  },
  /** Closing contact band on every page. */
  contactBand: {
    subtitle: "Get a Quote",
    title: "Tell us about your project",
    description:
      "Call us, message us on Telegram or WhatsApp, or send the short form and we will call you back within one working day.",
    callUs: "Call us",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    hoursLabel: "Working hours",
  },
  /** About page story. DRAFT until Nigat sends the founding story and milestones. */
  story: {
    subtitle: "Our Story",
    title: "Built in Addis Ababa",
    paragraphs: [
      "Nigat Fanawi Construction is part of Nigat Fanawi Trading PLC, an Ethiopian company working in construction, vehicle importing and export trade.",
      "Our construction team focuses on the finishing and fit-out works that turn a structure into a space people can use: ceilings, floors, walls, joinery and renovation.",
    ],
    timelineLabel: "Milestones",
  },
  /** About page Mission / Vision / Values. DRAFT: written for Nigat Construction, to approve. */
  missionVision: {
    subtitle: "What Drives Us",
    title: "Our mission, vision and values",
    mission: "Mission",
    missionText:
      "To deliver finishing and building works in Ethiopia that are well made, safe and on time, with clear pricing and honest communication from the first visit to handover.",
    vision: "Vision",
    visionText: "To be the finishing and fit-out contractor that homeowners and businesses in Ethiopia recommend first.",
    values: "Values",
    valueList: [
      { title: "Quality", text: "We do the work properly the first time." },
      { title: "Honesty", text: "Clear quotes and straight answers." },
      { title: "Safety", text: "Safe sites for our crews and your people." },
      { title: "Reliability", text: "We keep our word on time and scope." },
    ] as TitledText[],
  },
  notFound: {
    title: "Oops! Page not found",
    description: "The page you are looking for does not exist.",
    back: "Back To Homepage",
  },
  /** English is the source text in src/constants, so nothing to override. */
  content: { services: {}, categories: {} } as ContentOverrides,
};

export type Dictionary = typeof en;
