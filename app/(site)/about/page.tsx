import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Timiebi Nicholas Kosu — Fullstack Developer building with React and TypeScript, shipping fullstack on Neon and Render.",
};

export default function AboutPage() {
  return <AboutSection />;
}
