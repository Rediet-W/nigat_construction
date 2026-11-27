import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { MEDIA } from "@/constants/media";
import { ENQUIRY_ANCHOR, ROUTES } from "@/constants/routes";
import { ContactBand } from "@/features/contact/sections/ContactBand";
import { ProcessSteps } from "@/features/services/sections/ProcessSteps";
import { ServiceCategories } from "@/features/services/sections/ServiceCategories";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("services");

/** Services: video banner → service categories → how we work → contact band. */
export default async function ServicesPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader
        title={t.pages.services.title}
        breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.services.crumb }]}
        intro={t.servicesPage.intro}
        video={MEDIA.servicesVideo}
      >
        <Link href={`#${ENQUIRY_ANCHOR}`} className="btn-default btn-highlighted">
          {t.common.requestQuote}
        </Link>
      </PageHeader>
      <ServiceCategories />
      <ProcessSteps />
      <ContactBand />
    </>
  );
}
