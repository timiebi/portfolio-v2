import type { Metadata } from "next";
import { WorkSection } from "@/components/work-section";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Project archive — commerce, design systems, data-heavy interfaces, and integrated services by Timiebi Nicholas Kosu.",
};

export default function WorkPage() {
  return (
    <WorkSection
      kicker="Selected"
      title="Work"
      description="Written like an internal brief: what shipped, the architectural choices, and the technical challenges solved."
    />
  );
}
