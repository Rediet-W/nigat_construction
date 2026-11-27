import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { MissionVision } from "@/features/about/sections/MissionVision";
import { OurStory } from "@/features/about/sections/OurStory";
import { ContactBand } from "@/features/contact/sections/ContactBand";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("about");

/** About: short banner → our story → mission / vision / values → contact band. */
export default async function AboutPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader
        title={t.pages.about.title}
        breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.about.crumb }]}
      />
      <OurStory />
      <MissionVision />
      <ContactBand />
    </>
  );
}
