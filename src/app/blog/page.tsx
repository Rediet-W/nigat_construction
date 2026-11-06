import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { BlogGrid } from "@/features/blog/sections/BlogGrid";

export const metadata: Metadata = { title: "Our Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Our blog" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "blog" }]} />
      <BlogGrid />
    </>
  );
}
