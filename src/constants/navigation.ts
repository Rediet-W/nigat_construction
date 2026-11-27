import type { NavItem, SocialLink } from "@/types";
import { ROUTES } from "@/constants/routes";

/** Main menu. Add a Blog link here only once Nigat publishes real posts. */
export const MAIN_NAVIGATION: readonly NavItem[] = [
  { labelKey: "about", href: ROUTES.about },
  { labelKey: "services", href: ROUTES.services },
  { labelKey: "contact", href: ROUTES.contact },
];

export const FOOTER_QUICK_LINKS: readonly NavItem[] = [
  { labelKey: "home", href: ROUTES.home },
  { labelKey: "about", href: ROUTES.about },
  { labelKey: "services", href: ROUTES.services },
  { labelKey: "contact", href: ROUTES.contact },
];

/** Official company social media profiles. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nigat.fanawi",
    icon: "fa-brands fa-tiktok",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nigatfanawi",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61596065924984",
    icon: "fa-brands fa-facebook-f",
  },
];
