import type { Metadata } from "next";

import { HomePage } from "@/features/home/HomePage";

export const metadata: Metadata = { title: "Home - Slider" };

export default function HomeSliderPage() {
  return <HomePage heroVariant="slider" />;
}
