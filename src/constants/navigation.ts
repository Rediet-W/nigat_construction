import type { NavItem, SocialLink } from "@/types";
import { ROUTES } from "@/constants/routes";

/** Main menu, identical in every page of the original template. */
export const MAIN_NAVIGATION: readonly NavItem[] = [
  // {
  //   label: "Home",
  //   href: ROUTES.home,
  //   children: [
  //     { label: "Home - Main", href: ROUTES.home },
  //     { label: "Home - Video", href: ROUTES.homeVideo },
  //     { label: "Home - Slider", href: ROUTES.homeSlider },
  //   ],
  // },
  { label: "About Us", href: ROUTES.about },
  { label: "Services", href: ROUTES.services },
  { label: "Blog", href: ROUTES.blog },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Service Details", href: ROUTES.serviceDetails },
      { label: "Blog Details", href: ROUTES.blogDetails },
      { label: "Our Projects", href: ROUTES.projects },
      { label: "Project Details", href: ROUTES.projectDetails },
      // { label: "Our Team", href: ROUTES.team },
      // { label: "Team Details", href: ROUTES.teamDetails },
      { label: "Testimonials", href: ROUTES.testimonials },
      { label: "Image Gallery", href: ROUTES.imageGallery },
      { label: "Video Gallery", href: ROUTES.videoGallery },
      { label: "FAQs", href: ROUTES.faqs },
      { label: "404", href: ROUTES.notFound },
    ],
  },
  { label: "Contact Us", href: ROUTES.contact },
];

export const FOOTER_QUICK_LINKS: readonly NavItem[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About Us", href: ROUTES.about },
  { label: "Our Services", href: ROUTES.services },
  { label: "Our Projects", href: ROUTES.projects },
  { label: "Contact Us", href: ROUTES.contact },
];

export const FOOTER_SERVICE_LINKS: readonly NavItem[] = [
  { label: "Gypsum Board Ceiling & Partition Works", href: ROUTES.serviceDetails },
  { label: "Porcelain & Ceramic Tile Works", href: ROUTES.serviceDetails },
  { label: "Wall Cladding Systems", href: ROUTES.serviceDetails },
  { label: "Custom Furnishing & Joinery Works", href: ROUTES.serviceDetails },
  { label: "Acoustic Renovation & Soundproofing Works", href: ROUTES.serviceDetails },
];

/** Official company social media profiles. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "TikTok", href: "https://www.tiktok.com/@nigat.fanawi", icon: "fa-brands fa-tiktok" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nigatfanawi", icon: "fa-brands fa-linkedin-in" },
  { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61596065924984", icon: "fa-brands fa-facebook-f" },
];
