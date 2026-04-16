import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";
import { eyebrowHighlight } from "@/lib/typography";

type ContactSectionProps = {
  kicker?: string;
  title?: string;
  description?: string;
};

export function ContactSection({
  kicker = "Contact",
  title = "Say what you need.",
  description = "Brief context beats a polished pitch. I read everything; I reply when there is a real fit.",
}: ContactSectionProps) {
  return (
    <section className="min-w-0" aria-labelledby="contact-heading">
      <FadeIn>
        <SectionHeading
          index={kicker}
          title={title}
          titleId="contact-heading"
          description={description}
        />
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="relative min-w-0 overflow-hidden rounded-2xl border border-border bg-surface p-6 dark:bg-surface-elevated sm:rounded-3xl sm:p-10 md:p-14">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-80 dark:hidden"
            style={{
              background:
                "radial-gradient(circle at center, color-mix(in oklab, var(--highlight) 22%, transparent) 0%, transparent 65%)",
            }}
          />
          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="min-w-0 max-w-lg space-y-5">
              <p className={eyebrowHighlight}>Email</p>
              <div className="min-w-0 max-w-full overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-block cursor-pointer whitespace-nowrap font-display text-[clamp(1.125rem,4.5vw+0.5rem,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-foreground transition-colors hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight"
                >
                  {site.email}
                </a>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                For recruiting, attach the role, stack, and whether the team is remote or hybrid.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 min-[400px]:w-auto min-[400px]:flex-row min-[400px]:flex-wrap md:flex-col md:items-stretch">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 min-h-11 w-full cursor-pointer touch-manipulation items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-highlight/45 hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight min-[400px]:w-auto min-[400px]:min-w-[9.5rem] sm:h-11"
              >
                GitHub
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 min-h-11 w-full cursor-pointer touch-manipulation items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-highlight/45 hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight min-[400px]:w-auto min-[400px]:min-w-[9.5rem] sm:h-11"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
