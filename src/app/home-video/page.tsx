import type { Metadata } from "next";

import { HomePage } from "@/features/home/HomePage";

export const metadata: Metadata = { title: "Home - Video" };

export default function HomeVideoPage() {
  return <HomePage heroVariant="video" />;
}
