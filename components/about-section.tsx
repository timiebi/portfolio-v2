import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { SiteBio } from "@/components/site-bio";
import { expertise } from "@/lib/expertise";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import { stackIconSrc } from "@/lib/stack-icons";
import { bodyLead, buttonLabel, eyebrowHighlight } from "@/lib/typography";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="min-w-0" aria-labelledby="about-heading">
      <FadeIn>
        <SectionHeading
          index=""
          title="About"
          titleId="about-heading"
          description={site.role}
        />
      </FadeIn>

      <div className="grid min-w-0 items-start gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-7" delay={0.05}>
          <div className={`${bodyLead} space-y-5 text-pretty text-muted`}>
            <SiteBio />
          </div>

          <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex h-12 min-h-12 w-full cursor-pointer touch-manipulation items-center justify-center gap-2.5 rounded-full bg-foreground px-7 ${buttonLabel} text-background transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight min-[400px]:w-auto`}
            >
              <span>Download CV</span>
              <ArrowUpRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              href={routes.contact}
              className={`group inline-flex h-12 min-h-12 w-full cursor-pointer touch-manipulation items-center justify-center gap-2.5 rounded-full border border-border bg-background px-7 ${buttonLabel} text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-foreground/25 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight min-[400px]:w-auto`}
            >
              <span>Get in touch</span>
            </Link>
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-5" delay={0.1}>
          <div className="min-w-0 rounded-2xl border border-border bg-surface p-5 lg:sticky lg:top-28 dark:bg-surface-elevated sm:rounded-3xl sm:p-7">
            <p className={eyebrowHighlight}>Stack & practice</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {expertise.map((item) => (
                <li key={item.label}>
                  <span className="inline-flex items-center gap-2 rounded-md border border-border/90 bg-background/70 px-3 py-1.5 text-sm tracking-[-0.01em] text-foreground dark:bg-background/25">
                    {item.slug ? (
                      <img
                        src={stackIconSrc(item.slug)}
                        alt=""
                        width={16}
                        height={16}
                        decoding="async"
                        className="shrink-0"
                      />
                    ) : null}
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
