import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { HeroSection } from "@/components/hero-section";
import { HomeRail } from "@/components/home-rail";
import { articles } from "@/lib/articles";
import { routes } from "@/lib/routes";
import { eyebrowHighlight } from "@/lib/typography";
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
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16 2xl:gap-20">
      {/* Main Content (Spreads left, width bounded by column grid) */}
      <div className="lg:col-span-9 space-y-16 sm:space-y-20 md:space-y-24">
        {/* Typography Hero */}
        <HeroSection />

        {/* Typographic Writing List */}
        <section className="space-y-6 sm:space-y-8" aria-labelledby="latest-writing-heading">
          <FadeIn>
            <h2 id="latest-writing-heading" className={eyebrowHighlight}>
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
                  className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between py-4 transition-colors"
                >
                  <span className="text-[15px] font-medium text-foreground group-hover:text-highlight transition-colors leading-relaxed sm:max-w-[78%]">
                    {article.title}
                  </span>
                  <span className="font-mono text-[10px] text-muted tracking-wider shrink-0 sm:text-right">
                    {article.date}
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.18} className="pt-2">
            <Link
              href={routes.insights}
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-highlight transition-colors hover:text-highlight/80"
            >
              <span>All insights</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
          </FadeIn>
        </section>
      </div>

      {/* Sidebar Scrolling Ticker (HomeRail) */}
      <div className="hidden lg:block lg:col-span-3">
        <HomeRail />
      </div>
    </div>
  );
}
