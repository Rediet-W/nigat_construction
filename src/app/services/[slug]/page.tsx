import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { SERVICE_CATEGORIES } from "@/constants/services";
import { ContactBand } from "@/features/contact/sections/ContactBand";
import { CategoryDetail } from "@/features/services/sections/CategoryDetail";
import { ProcessSteps } from "@/features/services/sections/ProcessSteps";
import { localizedCategories } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

/** Only the categories in constants/services.ts exist; any other slug is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((category) => ({ slug: category.id }));
}

async function findCategory(slug: string) {
  const dict = await getDictionary();
  const categories = localizedCategories(dict);
  return {
    dict,
    category: categories.find((item) => item.id === slug),
    others: categories.filter((item) => item.id !== slug),
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await findCategory((await params).slug);
  return category ? { title: category.title, description: category.summary } : {};
}

/** One service category: banner → details and included services → how we work → contact band. */
export default async function ServiceCategoryPage({ params }: CategoryPageProps) {
  const { dict, category, others } = await findCategory((await params).slug);
  if (!category) notFound();

  return (
    <>
      <PageHeader
        title={category.title}
        breadcrumbs={[
          { label: dict.common.home, href: ROUTES.home },
          { label: dict.pages.services.crumb, href: ROUTES.services },
          { label: category.title },
        ]}
      />
      <CategoryDetail category={category} others={others} />
      <ProcessSteps />
      <ContactBand defaultService={category.id} />
    </>
  );
}
