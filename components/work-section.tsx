import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projectsGridShell } from "@/lib/layout";
import { projects } from "@/lib/projects";

export type WorkSectionProps = {
  kicker?: string;
  title?: string;
  description?: string;
  titleId?: string;
};

export function WorkSection({
  kicker = "Archive",
  title = "Work",
  titleId = "work-heading",
  description = "Personal projects and production work — from data layer and APIs through polished UI.",
}: WorkSectionProps) {
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

      <div className={projectsGridShell}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.href} className="h-full min-h-0 min-w-0" delay={0.04 + i * 0.04}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
