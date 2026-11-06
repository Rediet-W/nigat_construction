import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { CoreValueSection } from "@/components/sections/CoreValueSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { IntroVideoSection } from "@/components/sections/IntroVideoSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About us" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "About Us" }]} />
      <AboutUsSection />
      <ApproachSection />
      <CoreValueSection />
      <IntroVideoSection />
      <TeamSection className="about-our-team" />
      <ExpertiseSection />
      <FaqSection />
      <TestimonialsSection />
    </>
  );
}
