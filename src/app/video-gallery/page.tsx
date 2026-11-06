import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { VideoGallerySection } from "@/features/gallery/sections/VideoGallerySection";

export const metadata: Metadata = { title: "Video Gallery" };

export default function VideoGalleryPage() {
  return (
    <>
      <PageHeader title="Video gallery" breadcrumbs={[{ label: "Home", href: ROUTES.home }, { label: "Video gallery" }]} />
      <VideoGallerySection />
    </>
  );
}
