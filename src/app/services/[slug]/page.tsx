import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ServiceDetails } from "@/features/services/sections/ServiceDetails";
import { getDictionary } from "@/i18n/server";
import { getService } from "@/lib/cms/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getService((await params).slug);
  if (!service) return {};
  return { title: service.metaTitle || service.title, description: service.metaDescription || service.description };
}

export default async function ServicePage({ params }: Props) {
  const [t, service] = await Promise.all([getDictionary(), getService((await params).slug)]);
  if (!service) notFound();
  return (
    <>
      <PageHeader
        title={service.title}
        breadcrumbs={[
          { label: t.common.home, href: ROUTES.home },
          { label: t.pages.serviceDetails.parent, href: ROUTES.services },
          { label: service.title },
        ]}
      />
      <ServiceDetails service={service} />
    </>
  );
}
