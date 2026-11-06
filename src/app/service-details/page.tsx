import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ServiceDetails } from "@/features/services/sections/ServiceDetails";

export const metadata: Metadata = { title: "Residential Construction" };

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeader
        title="Residential construction"
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "Services", href: ROUTES.services },
          { label: "Residential construction" },
        ]}
      />
      <ServiceDetails />
    </>
  );
}
