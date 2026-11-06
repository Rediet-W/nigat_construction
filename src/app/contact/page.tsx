import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ContactSection } from "@/features/contact/sections/ContactSection";
import { MapSection } from "@/features/contact/sections/MapSection";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact us" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "Contact Us" }]} />
      <ContactSection />
      <MapSection />
    </>
  );
}
