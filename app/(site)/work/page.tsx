import type { Metadata } from "next";
import { WorkSection } from "@/components/work-section";

export const metadata: Metadata = {
  title: "Project",
  description:
    "Project archive — custom interfaces, design systems, and frontend architectures optimized for performance and usability by Timiebi Nicholas Kosu.",
};

export default function WorkPage() {
  return <WorkSection kicker="" title="Project" />;
}
