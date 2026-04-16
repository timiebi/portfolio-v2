import { FadeIn } from "@/components/fade-in";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import { bodyLead, eyebrowHighlight, heroTitle, monoCaption } from "@/lib/typography";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-w-0 pt-3 sm:pt-4 md:pt-8 lg:pt-10" aria-labelledby="hero-heading">
      <FadeIn>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <p className={eyebrowHighlight}>{site.role}</p>
          <p className={monoCaption}>{site.availability}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.06}>
        <h1 id="hero-heading" className={`max-w-[min(100%,42rem)] ${heroTitle}`}>
          {site.name}
        </h1>
        <div
          className={`mt-6 max-w-xl space-y-4 text-pretty sm:mt-7 md:mt-8 md:space-y-4`}
        >
          {site.heroBio.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? `${bodyLead} font-medium text-foreground`
                  : `${bodyLead} text-muted`
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.12}>
        <div className="mt-12 flex flex-col gap-8 border-t border-border/70 pt-10 sm:mt-14 sm:flex-row sm:items-center sm:justify-end sm:pt-12 dark:border-border/55">
          <div className="flex w-full flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:w-auto sm:justify-end">
            <Link
              href={routes.work}
              className="inline-flex h-12 min-h-11 w-full cursor-pointer touch-manipulation items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight min-[400px]:w-auto sm:h-11"
            >
              Work
            </Link>
            <Link
              href={routes.contact}
              className="inline-flex h-12 min-h-11 w-full cursor-pointer touch-manipulation items-center justify-center rounded-full border border-border bg-surface px-7 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-highlight/35 hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight dark:bg-surface-elevated/80 min-[400px]:w-auto sm:h-11"
            >
              Contact
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
