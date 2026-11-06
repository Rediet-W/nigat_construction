import type { Service } from "@/types";
import { ROUTES } from "@/constants/routes";

export const SERVICES: readonly Service[] = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    description: "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-1.jpg",
    href: ROUTES.serviceDetails
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    description: "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-2.jpg",
    href: ROUTES.serviceDetails
  },
  {
    id: "industrial-construction",
    title: "Industrial Construction",
    description: "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-3.jpg",
    href: ROUTES.serviceDetails
  },
  {
    id: "industrial-construction-2",
    title: "Industrial Construction",
    description: "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-4.jpg",
    href: ROUTES.serviceDetails
  },
  {
    id: "building-renovation",
    title: "Building Renovation",
    description: "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-5.jpg",
    href: ROUTES.serviceDetails
  },
  {
    id: "home-remodeling",
    title: "Home Remodeling",
    description: "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-6.jpg",
    href: ROUTES.serviceDetails
  },
  {
    id: "structural-engineering",
    title: "Structural Engineering",
    description: "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-7.jpg",
    href: ROUTES.serviceDetails
  },
  {
    id: "site-development",
    title: "Site Development",
    description: "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-4.jpg",
    href: ROUTES.serviceDetails
  }
];
