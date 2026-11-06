import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { CoreValueSection } from "@/components/sections/CoreValueSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { IntroVideoSection } from "@/components/sections/IntroVideoSection";
import { ROUTES } from "@/constants/routes";
import { TestimonialsGrid } from "@/features/testimonials/sections/TestimonialsGrid";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader title="Testimonials" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "Testimonials" }]} />
      <TestimonialsGrid />
      <ApproachSection />
      <CoreValueSection />
      <IntroVideoSection />
      <ExpertiseSection className="service-our-expertise" />
      <FaqSection />
      <CtaSection className="testimonial-cta-section" />
    </>
  );
}
