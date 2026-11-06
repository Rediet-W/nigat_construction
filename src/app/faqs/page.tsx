import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { FaqsPageSection } from "@/features/faqs/sections/FaqsPageSection";

export const metadata: Metadata = { title: "FAQs" };

export default function FaqsPage() {
  return (
    <>
      <PageHeader title="Frequently asked questions" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "FAQ's" }]} />
      <FaqsPageSection />
    </>
  );
}
