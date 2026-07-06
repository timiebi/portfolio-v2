import type { Project } from "@/lib/projects";
import { monoTag, projectMetaRow } from "@/lib/typography";
import Image from "next/image";

type Props = {
  project: Project;
  priority?: boolean;
};

function externalLinkProps(href: string) {
  if (!href.startsWith("http")) return {};
  return { target: "_blank" as const, rel: "noopener noreferrer" };
}

function Visual({
  visual,
  title,
  image,
  priority = false,
}: {
  visual: string;
  title: string;
  image?: string;
  priority?: boolean;
}) {
  const initial = title
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (image) {
    /* Parent must be `relative` with min-height; `fill` needs a non-zero box — not `flex-1` without flex parent */
    return (
      <div className="absolute inset-0 isolate overflow-hidden bg-surface dark:bg-surface-elevated">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/35 via-transparent to-foreground/3 dark:from-background/50"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div
      className={`relative isolate flex min-h-0 flex-1 items-end justify-end overflow-hidden bg-gradient-to-br ${visual} p-4 sm:p-5`}
    >
      <span
        className="relative font-display text-4xl leading-none text-foreground/10 sm:text-5xl"
        aria-hidden
      >
        {initial}
      </span>
    </div>
  );
}

export function ProjectCard({ project, priority = false }: Props) {
  const meta = (
    <div className={projectMetaRow}>
      <span className="text-highlight">{project.year}</span>
      <span className="text-border" aria-hidden>
        ·
      </span>
      <span>{project.role}</span>
    </div>
  );

  const textBlock = (
    <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
      {meta}
      <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-foreground transition-colors group-hover:text-highlight sm:text-xl">
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      <ul className="flex flex-wrap gap-2 pt-1" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li key={tag}>
            <span
              className={`inline-flex rounded-full border border-border bg-surface px-2.5 py-0.5 dark:bg-surface-elevated ${monoTag}`}
            >
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  const shell =
    "group relative flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-highlight/45 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_20%,transparent),0_20px_40px_-24px_color-mix(in_oklab,var(--highlight)_25%,transparent)] dark:bg-surface-elevated/90 dark:hover:border-highlight/45 dark:hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_25%,transparent),0_24px_48px_-28px_rgba(0,0,0,0.65)] [contain:layout]";

  const focus =
    "block h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight";

  if (project.layout === "horizontal") {
    return (
      <article className={`@container ${shell}`}>
        <a
          href={project.href}
          className={`${focus} flex min-h-0 flex-1 flex-col @min-[34rem]:flex-row @min-[34rem]:items-stretch`}
          {...externalLinkProps(project.href)}
        >
          <div className="relative flex min-h-[140px] flex-[1.05] flex-col sm:min-h-[160px] @min-[34rem]:min-h-[180px]">
            <Visual visual={project.visual} title={project.title} image={project.image} priority={priority} />
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center border-t border-border @min-[34rem]:border-l @min-[34rem]:border-t-0">
            {textBlock}
          </div>
        </a>
      </article>
    );
  }

  const isFeatured = project.layout === "featured";

  return (
    <article className={shell}>
      <a
        href={project.href}
        className={`${focus} flex min-h-0 flex-1 flex-col`}
        {...externalLinkProps(project.href)}
      >
        <div
          className={`relative w-full flex-shrink-0 ${isFeatured ? "min-h-[140px] sm:min-h-[160px]" : "min-h-[112px] sm:min-h-[128px]"}`}
        >
          <Visual visual={project.visual} title={project.title} image={project.image} priority={priority} />
        </div>
        {textBlock}
      </a>
    </article>
  );
}
