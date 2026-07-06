import { FadeIn } from "@/components/fade-in";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import { bodyLead, eyebrowHighlight, heroTitle } from "@/lib/typography";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-w-0 pt-3 sm:pt-4 md:pt-8 lg:pt-10" aria-labelledby="hero-heading">
      <FadeIn>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className={eyebrowHighlight}>{site.role}</p>
          <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-400/5 dark:text-emerald-400 font-mono text-[10px] font-semibold uppercase tracking-wider">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </span>
            {site.availability}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.06}>
        <h1 id="hero-heading" className={`max-w-[min(100%,42rem)] ${heroTitle}`}>
          {site.name}
        </h1>
        <div className="mt-6 max-w-xl space-y-4 text-pretty sm:mt-7 md:mt-8 md:space-y-4">
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

        {/* Fullstack Skills Cards */}
        {/* <div className="mt-10 grid grid-cols-1 gap-4 min-[400px]:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface/30 p-4 dark:bg-surface-elevated/5 backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-highlight/45 hover:bg-surface/40 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_20%,transparent),0_12px_24px_-12px_color-mix(in_oklab,var(--highlight)_15%,transparent)] dark:hover:bg-surface-elevated/10">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-highlight">Architecture</p>
            <p className="mt-1.5 text-[13px] font-semibold text-foreground">Database to UI</p>
            <p className="mt-0.5 text-xs text-muted">MongoDB,PostgreSQL, APIs</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/30 p-4 dark:bg-surface-elevated/5 backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-highlight/45 hover:bg-surface/40 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_20%,transparent),0_12px_24px_-12px_color-mix(in_oklab,var(--highlight)_15%,transparent)] dark:hover:bg-surface-elevated/10">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-highlight">Frontend</p>
            <p className="mt-1.5 text-[13px] font-semibold text-foreground">React & Next.js</p>
            <p className="mt-0.5 text-xs text-muted">TypeScript, Tailwind v4</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/30 p-4 dark:bg-surface-elevated/5 backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-highlight/45 hover:bg-surface/40 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_20%,transparent),0_12px_24px_-12px_color-mix(in_oklab,var(--highlight)_15%,transparent)] dark:hover:bg-surface-elevated/10">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-highlight">Delivery</p>
            <p className="mt-1.5 text-[13px] font-semibold text-foreground">Production Ready</p>
            <p className="mt-0.5 text-xs text-muted">Render, Vercel, CI/CD</p>
          </div>
        </div> */}
      </FadeIn>

      <FadeIn delay={0.12}>
        <div className="mt-12 flex flex-col gap-8 border-t border-border/70 pt-10 sm:mt-14 sm:flex-row sm:items-center sm:justify-end sm:pt-12 dark:border-border/55">
          <div className="flex w-full flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:w-auto sm:justify-end">
            <Link
              href={routes.work}
              className="group inline-flex h-12 min-h-11 w-full cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight min-[400px]:w-auto sm:h-11"
            >
              <span>View Work</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href={routes.contact}
              className="group inline-flex h-12 min-h-11 w-full cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 text-sm font-semibold text-foreground transition-all duration-300 hover:border-highlight/35 hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight dark:bg-surface-elevated/80 min-[400px]:w-auto sm:h-11"
            >
              <span>Get in touch</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-300 text-muted group-hover:text-highlight"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
