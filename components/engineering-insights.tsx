"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/articles";
import { eyebrowHighlight, monoTag, projectMetaRow } from "@/lib/typography";

export function EngineeringInsights() {
  const featured = articles[0];
  const secondaries = articles.slice(1);

  return (
    <section className="min-w-0" aria-labelledby="insights-heading">
      <FadeIn>
        <SectionHeading
          index="Writing"
          title="Engineering insights"
          titleId="insights-heading"
          description="Investigating technology infrastructure, local market constraints, and system integrations."
        />
      </FadeIn>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        {/* Featured Article - Big Card */}
        <div className="md:col-span-7 flex flex-col h-full">
          <FadeIn delay={0.05} className="h-full">
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface-elevated/40 p-6 sm:p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-highlight/45 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_20%,transparent),0_20px_40px_-24px_color-mix(in_oklab,var(--highlight)_25%,transparent)] dark:bg-surface-elevated/90 dark:hover:border-highlight/45 dark:hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_25%,transparent),0_24px_48px_-28px_rgba(0,0,0,0.65)]"
            >
              {/* Subtle ambient light flare */}
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-15 bg-radial from-highlight/40 to-transparent blur-xl"
                aria-hidden
              />
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-highlight/10 px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-highlight">
                    ★ Featured
                  </span>
                  <div className={projectMetaRow}>
                    <span>{featured.date}</span>
                    <span className="text-border" aria-hidden>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold leading-[1.2] tracking-[-0.025em] text-foreground transition-colors group-hover:text-highlight sm:text-2xl">
                  {featured.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-muted">
                  {featured.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-5 dark:border-border/40">
                <ul className="flex flex-wrap gap-1.5" aria-label="Article topics">
                  {featured.tags.map((tag) => (
                    <li key={tag}>
                      <span className={`inline-flex rounded-md border border-border/80 bg-surface/50 px-2 py-0.5 text-[10px] font-medium dark:bg-surface-elevated/40 ${monoTag}`}>
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>

                <span className="group-hover:translate-x-1 inline-flex items-center gap-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-highlight transition-transform duration-200">
                  Read <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Secondary Articles Stack */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {secondaries.map((article, i) => (
            <FadeIn key={article.href} delay={0.1 + i * 0.05} className="flex-1">
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface-elevated/45 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-highlight/45 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_20%,transparent),0_20px_40px_-24px_color-mix(in_oklab,var(--highlight)_25%,transparent)] dark:bg-surface-elevated/90 dark:hover:border-highlight/45 dark:hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_25%,transparent),0_24px_48px_-28px_rgba(0,0,0,0.65)]"
              >
                <div className="space-y-3">
                  <div className={projectMetaRow}>
                    <span>{article.date}</span>
                    <span className="text-border" aria-hidden>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display text-base font-semibold leading-[1.25] tracking-[-0.02em] text-foreground transition-colors group-hover:text-highlight sm:text-lg">
                    {article.title}
                  </h3>
                  
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted">
                    {article.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 dark:border-border/40">
                  <ul className="flex flex-wrap gap-1" aria-label="Article topics">
                    {article.tags.slice(0, 2).map((tag) => (
                      <li key={tag}>
                        <span className={`inline-flex rounded-md border border-border/80 bg-surface/50 px-1.5 py-0.5 text-[9px] font-medium dark:bg-surface-elevated/40 ${monoTag}`}>
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <span className="group-hover:translate-x-0.5 inline-flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-highlight transition-transform duration-200">
                    Read <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
