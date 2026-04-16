import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projectsGridShell } from "@/lib/layout";
import { projects } from "@/lib/projects";
import { routes } from "@/lib/routes";
import Link from "next/link";

type FeaturedWorkProps = {
  /** Tighter heading + no subcopy — for the home page after hero. */
  variant?: "default" | "home";
};

export function FeaturedWork({ variant = "default" }: FeaturedWorkProps) {
  const featured = projects.slice(0, 2);
  const isHome = variant === "home";

  return (
    <section
      className={`min-w-0 ${isHome ? "mt-16 pb-12 sm:mt-20 sm:pb-16 md:mt-28 md:pb-20 lg:mt-32 lg:pb-24" : "mt-20 sm:mt-24 md:mt-32 lg:mt-40"}`}
      aria-labelledby="featured-work-heading"
    >
      <FadeIn>
        <SectionHeading
          index="Work"
          title="Recent projects"
          titleId="featured-work-heading"
          compact={isHome}
          description={
            isHome
              ? undefined
              : "Shipped work with enough context to be useful — full list on Work."
          }
        />
      </FadeIn>

      <div className={projectsGridShell}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
          {featured.map((project, i) => (
            <FadeIn key={project.href} className="h-full min-h-0 min-w-0" delay={0.05 + i * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className={isHome ? "mt-9" : "mt-10"} delay={0.14}>
          <Link
            href={routes.work}
            className="group inline-flex cursor-pointer items-center gap-2 border-b border-transparent font-mono text-sm font-medium text-foreground pb-0.5 transition-colors hover:border-highlight hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
          >
            All work
            <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
