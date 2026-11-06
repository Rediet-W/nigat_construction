import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ProjectDetails } from "@/features/projects/sections/ProjectDetails";

export const metadata: Metadata = { title: "Modern Family Villa" };

export default function ProjectDetailsPage() {
  return (
    <>
      <PageHeader
        title="Modern family villa"
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "Projects", href: ROUTES.projects },
          { label: "Modern Family Villa" },
        ]}
      />
      <ProjectDetails />
    </>
  );
}
