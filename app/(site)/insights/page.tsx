import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/articles";
import { monoTag, projectMetaRow } from "@/lib/typography";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical writing and engineering thoughts on web performance, systems integrations, and software ecosystems by Timiebi Nicholas Kosu.",
};

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-3xl min-w-0">
      <FadeIn>
        <SectionHeading
          index="Writing"
          title="Engineering insights"
          description=""
        />
      </FadeIn>

      <div className="mt-8 space-y-12 sm:mt-12 md:space-y-16">
        {articles.map((article, i) => (
          <FadeIn key={article.href} delay={0.06 * (i + 1)}>
            <article className="group relative space-y-3 border-l-2 border-border/60 pl-5 transition-colors hover:border-highlight focus-within:border-highlight">
              <div className={projectMetaRow}>
                <span>{article.date}</span>
                <span className="text-border" aria-hidden>
                  ·
                </span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-foreground transition-colors group-hover:text-highlight sm:text-xl">
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-hidden focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2"
                >
                  {article.title}
                </a>
              </h3>

              <p className="max-w-2xl text-sm leading-relaxed text-muted">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2" aria-label="Article topics">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex rounded-md border border-border/80 bg-surface px-2 py-0.5 text-[10px] font-medium dark:bg-surface-elevated/40 ${monoTag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
