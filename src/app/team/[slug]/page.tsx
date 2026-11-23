import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { TeamMemberDetails } from "@/features/team/sections/TeamMemberDetails";
import { getDictionary } from "@/i18n/server";
import { getTeamMember } from "@/lib/cms/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = await getTeamMember((await params).slug);
  if (!member) return {};
  return { title: member.name, description: member.role };
}

export default async function TeamMemberPage({ params }: Props) {
  const [t, member] = await Promise.all([getDictionary(), getTeamMember((await params).slug)]);
  if (!member) notFound();
  return (
    <>
      <PageHeader
        title={member.name}
        breadcrumbs={[
          { label: t.common.home, href: ROUTES.home },
          { label: t.pages.teamDetails.parent, href: ROUTES.team },
          { label: member.name },
        ]}
      />
      <TeamMemberDetails member={member} />
    </>
  );
}
