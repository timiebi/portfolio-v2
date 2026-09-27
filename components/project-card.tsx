import type { Project } from "@/lib/projects";
import Image from "next/image";

type Props = {
  project: Project;
  priority?: boolean;
};

function externalLinkProps(href: string) {
  if (!href.startsWith("http")) return {};
  return { target: "_blank" as const, rel: "noopener noreferrer" };
}

export function ProjectCard({ project, priority = false }: Props) {
  const width = project.imageWidth ?? 1600;
  const height = project.imageHeight ?? 900;

  return (
    <article className="group relative isolate overflow-hidden rounded-[9px] bg-[#091521]">
      <a
        href={project.href}
        className="relative block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
        {...externalLinkProps(project.href)}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={width}
            height={height}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
            priority={priority}
          />
        ) : (
          <div
            className={`aspect-video w-full bg-gradient-to-br ${project.visual}`}
            aria-hidden
          />
        )}

        <span
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(0,0,0,0.1)_10%,rgba(0,0,0,0.78)_80%)] opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 z-20 px-6 py-5 opacity-0 translate-y-[10%] transition-[opacity,transform] duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:px-8 sm:py-6">
          <h3 className="text-[1.35rem] font-extrabold leading-tight text-white sm:text-[1.67rem]">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[0.9375rem] leading-snug text-[#d5d5d5]">
            {project.description}
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag}>
                <span className="inline-flex rounded-full bg-[#696869] px-2.5 py-1 text-[11px] font-medium capitalize text-white">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </a>
    </article>
  );
}
