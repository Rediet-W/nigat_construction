export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
} as const;

/** Page of one service category, e.g. /services/interior-finishing. */
export function serviceCategoryHref(id: string): string {
  return `${ROUTES.services}/${id}`;
}

/** In-page anchor of the enquiry form in the contact band. */
export const ENQUIRY_ANCHOR = "enquiry";
