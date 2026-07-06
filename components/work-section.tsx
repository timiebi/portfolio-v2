"use client";

import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projectsGridShell } from "@/lib/layout";
import { Project, projects } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FILTER_CATEGORIES = ["All", "Next.js", "React", "TypeScript", "Fullstack"] as const;
type FilterCategory = typeof FILTER_CATEGORIES[number];

export type WorkSectionProps = {
  kicker?: string;
  title?: string;
  description?: string;
  titleId?: string;
};

const matchesFilter = (project: Project, filter: FilterCategory) => {
  if (filter === "All") return true;
  if (filter === "Fullstack") {
    const fullstackTags = ["postgres", "postgresql", "prisma", "neon", "nestjs"];
    return project.tags.some((tag) => fullstackTags.includes(tag.toLowerCase()));
  }
  return project.tags.some((tag) => tag.toLowerCase() === filter.toLowerCase());
};

export function WorkSection({
  kicker = "Archive",
  title = "Work",
  titleId = "work-heading",
  description = "Personal projects and production work — from data layer and APIs through polished UI.",
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
        />
      </FadeIn>

      {/* Glassmorphic Filter Row */}
      <FadeIn delay={0.05}>
        <div className="mb-10 flex flex-wrap gap-2 pb-2">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = selectedFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedFilter(category)}
                className={`inline-flex h-9 cursor-pointer items-center justify-center rounded-full px-5 text-xs font-semibold tracking-wider transition-all duration-300 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight ${
                  isActive
                    ? "bg-foreground text-background shadow-md"
                    : "border border-border bg-surface/30 text-muted hover:border-highlight/35 hover:text-highlight dark:bg-surface-elevated/5"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </FadeIn>

      {/* Animated Projects Grid */}
      <div className={projectsGridShell}>
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full min-h-0 min-w-0"
              >
                <ProjectCard project={project} priority={i === 0} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
