import { SERVICE_CATEGORIES, SERVICES } from "@/constants/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Bilingual, Service, ServiceCategory } from "@/types";

/** Applies per-id translations from a dictionary over the English items in src/constants. */
export function localize<T extends { id: string }>(
  items: readonly T[],
  overrides: Readonly<Record<string, Partial<NoInfer<T>>>>,
): T[] {
  return items.map((item) => ({ ...item, ...overrides[item.id] }));
}

/** Picks the visitor's language from text kept as `{ en, am }`. */
export function pick(text: Bilingual, locale: Locale): string {
  return text[locale];
}

/** Service categories with their included services, in the dictionary's language. */
export function localizedCategories(dict: Dictionary): (ServiceCategory & { services: Service[] })[] {
  const services = localize(SERVICES, dict.content.services);
  return localize(SERVICE_CATEGORIES, dict.content.categories).map((category) => ({
    ...category,
    services: category.serviceIds
      .map((id) => services.find((service) => service.id === id))
      .filter((service): service is Service => service !== undefined),
  }));
}
