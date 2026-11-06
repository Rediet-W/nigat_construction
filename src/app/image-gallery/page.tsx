import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ImageGallerySection } from "@/features/gallery/sections/ImageGallerySection";

export const metadata: Metadata = { title: "Image Gallery" };

export default function ImageGalleryPage() {
  return (
    <>
      <PageHeader title="Image gallery" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "Image gallery" }]} />
      <ImageGallerySection />
    </>
  );
}
