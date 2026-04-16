import type { Metadata } from "next";
import { FeaturedWork } from "@/components/featured-work";
import { HeroSection } from "@/components/hero-section";
import { HomeRail } from "@/components/home-rail";

export const metadata: Metadata = {
  title: "Timiebi Nicholas Kosu",
  description:
    "Timiebi Nicholas Kosu — software engineer (frontend-focused). React, TypeScript, clean UI, fullstack on Neon and Render. Open to collaborate.",
};

export default function HomePage() {
  return (
    <div className="relative min-w-0 w-full lg:pe-[15rem] xl:pe-[16rem] 2xl:pe-[17rem]">
      <HomeRail />
      <HeroSection />
      <FeaturedWork variant="home" />
    </div>
  );
}
