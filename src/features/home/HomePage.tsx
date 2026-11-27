import { ContactBand } from "@/features/contact/sections/ContactBand";
import { HeroSection } from "@/features/home/sections/HeroSection";
import { IntroSection } from "@/features/home/sections/IntroSection";
import { ServicesShowcase } from "@/features/home/sections/ServicesShowcase";

/**
 * Home: Hero → short intro → core services → contact band → footer.
 * A "Selected projects" section goes between services and the contact band
 * once Nigat sends real projects with photos.
 */
export function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesShowcase />
      <ContactBand />
    </>
  );
}
