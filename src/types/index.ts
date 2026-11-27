/** Shared domain types for the site's content collections. */

import type { Dictionary } from "@/i18n/dictionaries/en";

export type NavLabelKey = keyof Dictionary["nav"];

/** Text written in both site languages, for data kept outside the dictionaries. */
export interface Bilingual {
  en: string;
  am: string;
}

export interface Service {
  id: string;
  title: string;
}

export interface ServiceCategory {
  /** Also the URL slug: /services/<id>. */
  id: string;
  title: string;
  /** One line, shown on cards. */
  summary: string;
  /** A short paragraph, shown on the services page and the category page. */
  description: string;
  image: string;
  /** Ids from SERVICES, shown as tags. */
  serviceIds: readonly string[];
}

export interface Stat {
  value: string;
  label: Bilingual;
}

export interface Milestone {
  year: string;
  text: Bilingual;
  image?: string;
}

export interface NavItem {
  /** Key into the `nav` section of the i18n dictionaries (src/i18n/dictionaries). */
  labelKey: NavLabelKey;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
