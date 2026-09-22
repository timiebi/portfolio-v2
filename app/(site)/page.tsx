import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { HeroSection } from "@/components/hero-section";
import { articles } from "@/lib/articles";
import { routes } from "@/lib/routes";
import { eyebrowMuted, monoCaption, textLink } from "@/lib/typography";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Timiebi Nicholas Kosu — Senior Frontend Engineer",
  description:
    "Timiebi Nicholas Kosu — Senior Frontend Engineer. Building accessible, responsive, high-performance interfaces with Next.js, React, TypeScript, and clean UI/UX animations.",
};

export default function HomePage() {
  const resendArticle = articles.find((article) =>
    article.href.includes("how-i-replaced-gmailapp-with-resend"),
  );
  const latestArticles = [
    articles[0],
    articles[1],
    resendArticle ?? articles[2],
  ];

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
      <HeroSection />

      <section id="explore" className="scroll-mt-24 space-y-6 sm:space-y-8" aria-labelledby="latest-writing-heading">
        <FadeIn>
          <h2
            id="latest-writing-heading"
            className={eyebrowMuted}
          >
            Recent Writing
          </h2>
        </FadeIn>

        <div className="divide-y divide-border/50">
          {latestArticles.map((article, i) => (
            <FadeIn key={article.href} delay={0.06 + i * 0.06}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-4 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="text-[0.9375rem] font-medium leading-[1.5] tracking-[-0.015em] text-foreground transition-colors group-hover:text-highlight sm:max-w-[78%] sm:text-base">
                  {article.title}
                </span>
                <span className={`${monoCaption} shrink-0 sm:text-right`}>
                  {article.date}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.18} className="pt-2">
          <Link
            href={routes.insights}
            className={`group inline-flex items-center gap-1.5 ${textLink} text-foreground transition-colors hover:text-foreground/70`}
          >
            <span>All insights</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
