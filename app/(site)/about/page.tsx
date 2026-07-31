import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Timiebi Nicholas Kosu — Senior Frontend Engineer and UI/UX Designer specialized in Next.js, React, and performance engineering.",
};

export default function AboutPage() {
  return <AboutSection />;
}
