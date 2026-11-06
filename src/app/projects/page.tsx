import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ProjectsGrid } from "@/features/projects/sections/ProjectsGrid";

export const metadata: Metadata = { title: "Our Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Our projects" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "projects" }]} />
      <ProjectsGrid />
    </>
  );
}
