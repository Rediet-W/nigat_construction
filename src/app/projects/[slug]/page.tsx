import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ProjectDetails } from "@/features/projects/sections/ProjectDetails";
import { getDictionary } from "@/i18n/server";
import { getProject } from "@/lib/cms/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject((await params).slug);
  if (!project) return {};
  return { title: project.metaTitle || project.title, description: project.metaDescription || project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const [t, project] = await Promise.all([getDictionary(), getProject((await params).slug)]);
  if (!project) notFound();
  return (
    <>
      <PageHeader
        title={project.title}
        breadcrumbs={[
          { label: t.common.home, href: ROUTES.home },
          { label: t.pages.projectDetails.parent, href: ROUTES.projects },
          { label: project.title },
        ]}
      />
      <ProjectDetails project={project} />
    </>
  );
}
