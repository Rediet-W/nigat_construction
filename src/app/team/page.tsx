import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { TeamGrid } from "@/features/team/sections/TeamGrid";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Our team" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "Team" }]} />
      <TeamGrid />
    </>
  );
}
