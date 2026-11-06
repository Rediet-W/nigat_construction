import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { NotFoundSection } from "@/features/errors/sections/NotFoundSection";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page Not Found" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "404 Error Page" }]} />
      <NotFoundSection />
    </>
  );
}
