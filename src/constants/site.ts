import type { Stat } from "@/types";

export const SITE = {
  name: "Nigat Fanawi Construction",
  legalName: "Nigat Fanawi Trading PLC",
  /** Used for absolute URLs in metadata; override with NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nigat-construction.vercel.app",
  logo: "/images/logo.png",
} as const;

/**
 * CONFIRM WITH NIGAT: phone numbers, email, address and hours.
 * The email is a Gmail address; switch to a company-domain address when one exists.
 */
export const CONTACT_INFO = {
  phone: { label: "0995 888 882", href: "tel:+251995888882" },
  altPhone: { label: "0995 888 883", href: "tel:+251995888883" },
  email: { label: "nigatfanawi33@gmail.com", href: "mailto:nigatfanawi33@gmail.com" },
  /** Opens a Telegram chat with the main phone number. Replace with t.me/<username> once confirmed. */
  telegram: "https://t.me/+251995888882",
  whatsapp: "https://wa.me/251995888882",
} as const;

/**
 * Figures shown on the home page. Leave empty until Nigat has confirmed each
 * number; the stats row is hidden while this list is empty.
 * Example: { value: "2018", label: { en: "Founded in Addis Ababa", am: "በአዲስ አበባ የተመሠረተበት" } }
 */
export const VERIFIED_STATS: readonly Stat[] = [];

/**
 * Office pin on the Contact page map — edit these to move it.
 * Get coordinates in Google Maps by right-clicking the spot and clicking the
 * numbers at the top of the menu (they are copied as "latitude, longitude").
 * Current spot: plus code 2Q8M+2M5, Addis Ababa.
 */
export const MAP_COORDINATES = "9.014864295642704,38.78461402130691";
/** 1 = whole world, 21 = single building. */
export const MAP_ZOOM = 17;

/** Embeddable Google Maps URL for MAP_COORDINATES. */
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_COORDINATES}&z=${MAP_ZOOM}&output=embed`;
