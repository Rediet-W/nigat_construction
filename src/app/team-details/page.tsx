import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { TeamMemberDetails } from "@/features/team/sections/TeamMemberDetails";

export const metadata: Metadata = { title: "Michael Anderson" };

export default function TeamDetailsPage() {
  return (
    <>
      <PageHeader
        title="Michael anderson"
        breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "Team", href: ROUTES.team }, { label: "Michael anderson" }]}
      />
      <TeamMemberDetails />
    </>
  );
}
