"use client";

import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projectsGridShell } from "@/lib/layout";
import { Project, projects } from "@/lib/projects";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FILTER_CATEGORIES = ["All", "Next.js", "React", "TypeScript", "Fullstack"] as const;
type FilterCategory = typeof FILTER_CATEGORIES[number];

export type WorkSectionProps = {
  kicker?: string;
  title?: string;
  description?: string;
  titleId?: string;
  align?: "start" | "center";
};

const matchesFilter = (project: Project, filter: FilterCategory) => {
  if (filter === "All") return true;
  if (filter === "Fullstack") {
    const fullstackTags = ["postgres", "postgresql", "prisma", "neon", "nestjs", "resend"];
    return project.tags.some((tag) => fullstackTags.includes(tag.toLowerCase()));
  }
  return project.tags.some((tag) => tag.toLowerCase() === filter.toLowerCase());
};

export function WorkSection({
  kicker = "Selected",
  title = "Project",
  titleId = "project-heading",
  description,
  align = "start",
}: WorkSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("All");

  const filteredProjects = projects.filter((project) => matchesFilter(project, selectedFilter));

  return (
    <section className="min-w-0" aria-labelledby={titleId}>
      <FadeIn>
        <SectionHeading
          index={kicker}
          title={title}
          titleId={titleId}
          description={description}
          align={align}
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mb-8 flex flex-wrap items-center gap-1 pb-2 sm:mb-10 sm:gap-2">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = selectedFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedFilter(category)}
                className={`inline-flex h-9 cursor-pointer items-center justify-center rounded-md px-3.5 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight sm:px-4 ${
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <div className={projectsGridShell}>
        <div className="columns-1 gap-6 sm:columns-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 break-inside-avoid"
              >
                <ProjectCard project={project} priority={i < 2} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
