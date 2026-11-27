import { MEDIA } from "@/constants/media";
import type { Service, ServiceCategory } from "@/types";

/**
 * Every individual service Nigat offers. Shown as tags inside the categories
 * below, never as separate cards. Amharic titles live in
 * i18n/dictionaries/am.ts → content.services.
 */
export const SERVICES: readonly Service[] = [
  { id: "gypsum-board-ceiling-partition-works", title: "Gypsum Board Ceiling & Partition Works" },
  { id: "false-ceiling-decorative-ceiling-systems", title: "False Ceiling & Decorative Ceiling Systems" },
  { id: "painting-decorative-finishing-works", title: "Painting & Decorative Finishing Works" },
  { id: "acoustic-renovation-soundproofing-works", title: "Acoustic Renovation & Soundproofing Works" },
  { id: "reception-areas-feature-walls", title: "Reception Areas & Feature Walls" },
  { id: "porcelain-ceramic-tile-works", title: "Porcelain & Ceramic Tile Works" },
  { id: "epoxy-flooring-systems", title: "Epoxy Flooring Systems" },
  { id: "flooring-solutions", title: "Flooring Solutions" },
  { id: "wall-cladding-systems", title: "Wall Cladding Systems" },
  { id: "hollow-concrete-block-wall-construction", title: "Hollow Concrete Block (HCB) Wall Construction" },
  { id: "custom-furnishing-joinery-works", title: "Custom Furnishing & Joinery Works" },
  { id: "glass-partition-door-systems", title: "Glass Partition & Door Systems" },
  { id: "aluminum-doors-windows", title: "Aluminium Doors & Windows" },
  { id: "metal-installation-works", title: "Metal Installation Works" },
  { id: "shopfitting-commercial-interior-works", title: "Shopfitting & Commercial Interior Works" },
  { id: "renovation-refurbishment-services", title: "Renovation & Refurbishment Services" },
  { id: "electrical-installation-works", title: "Electrical Installation Works" },
  { id: "plumbing-sanitary-installation-works", title: "Plumbing & Sanitary Installation Works" },
  { id: "mep-coordination", title: "Mechanical, Electrical & Plumbing (MEP) Coordination" },
  { id: "design-space-planning-project-management", title: "Design, Space Planning & Project Management" },
  { id: "landscaping-external-beautification-works", title: "Landscaping & External Beautification Works" },
];

/**
 * The headline categories shown on Home and Services, each with its own page
 * at /services/<id>. CONFIRM WITH NIGAT: the final list of categories.
 * Amharic text lives in i18n/dictionaries/am.ts → content.categories.
 */
export const SERVICE_CATEGORIES: readonly ServiceCategory[] = [
  {
    id: "interior-finishing",
    title: "Ceilings & Interior Finishing",
    summary: "Gypsum and decorative ceilings, partitions, painting and acoustic finishes.",
    description:
      "We turn bare structures into finished rooms: gypsum board ceilings and partitions, decorative ceilings, painting and feature walls, and acoustic treatment for offices, meeting rooms and homes.",
    image: MEDIA.services["interior-finishing"],
    serviceIds: [
      "gypsum-board-ceiling-partition-works",
      "false-ceiling-decorative-ceiling-systems",
      "painting-decorative-finishing-works",
      "acoustic-renovation-soundproofing-works",
      "reception-areas-feature-walls",
    ],
  },
  {
    id: "floors-and-walls",
    title: "Floors & Walls",
    summary: "Porcelain and ceramic tiling, epoxy floors, wall cladding and HCB walls.",
    description:
      "Floors and walls take the most wear in any building. We lay porcelain and ceramic tiles, install epoxy and other floor systems, fit interior and exterior wall cladding, and build hollow concrete block walls.",
    image: MEDIA.services["floors-and-walls"],
    serviceIds: [
      "porcelain-ceramic-tile-works",
      "epoxy-flooring-systems",
      "flooring-solutions",
      "wall-cladding-systems",
      "hollow-concrete-block-wall-construction",
    ],
  },
  {
    id: "joinery-glass-metal",
    title: "Joinery, Glass & Metal",
    summary: "Custom furniture, glass partitions, aluminium doors and windows, and shopfitting.",
    description:
      "Made-to-measure work that fits your space: custom furniture and joinery, glass partitions and doors, aluminium doors and windows, metalwork, and complete shop and office fit-outs.",
    image: MEDIA.services["joinery-glass-metal"],
    serviceIds: [
      "custom-furnishing-joinery-works",
      "glass-partition-door-systems",
      "aluminum-doors-windows",
      "metal-installation-works",
      "shopfitting-commercial-interior-works",
    ],
  },
  {
    id: "renovation-building-services",
    title: "Renovation & Building Services",
    summary: "Renovation, electrical and plumbing works, design and project management.",
    description:
      "For larger jobs we manage the whole project: renovation and refurbishment, electrical and plumbing installation, coordination of mechanical, electrical and plumbing trades, space planning, and landscaping outside.",
    image: MEDIA.services["renovation-building-services"],
    serviceIds: [
      "renovation-refurbishment-services",
      "electrical-installation-works",
      "plumbing-sanitary-installation-works",
      "mep-coordination",
      "design-space-planning-project-management",
      "landscaping-external-beautification-works",
    ],
  },
];
