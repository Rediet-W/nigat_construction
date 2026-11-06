import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { CoreValueSection } from "@/components/sections/CoreValueSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { IntroVideoSection } from "@/components/sections/IntroVideoSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ROUTES } from "@/constants/routes";
import { ServicesGrid } from "@/features/services/sections/ServicesGrid";

export const metadata: Metadata = { title: "Our Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our services" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "services" }]} />
      <ServicesGrid />
      <ApproachSection />
      <CoreValueSection />
      <IntroVideoSection />
      <ExpertiseSection className="service-our-expertise" />
      <FaqSection />
      <TestimonialsSection />
    </>
  );
}
