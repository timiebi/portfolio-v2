import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { expertise } from "@/lib/expertise";
import { site } from "@/lib/site";
import { stackIconSrc } from "@/lib/stack-icons";
import { eyebrowHighlight } from "@/lib/typography";

type AboutSectionProps = {
  kicker?: string;
  title?: string;
  description?: string;
};

export function AboutSection({
  kicker = "About",
  title = site.aboutSection.title,
  description = site.aboutSection.summary,
}: AboutSectionProps) {
  return (
    <section className="min-w-0" aria-labelledby="about-heading">
      <FadeIn>
        <SectionHeading
          index={kicker}
          title={title}
          titleId="about-heading"
          description={description}
        />
      </FadeIn>

      <div className="grid min-w-0 gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-6" delay={0.05}>
          <div className="space-y-6 text-base leading-[1.75] text-muted sm:text-[1.0625rem]">
            {site.heroBio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-6" delay={0.1}>
          <div className="min-w-0 rounded-2xl border border-border bg-surface p-5 dark:bg-surface-elevated sm:rounded-3xl sm:p-7 md:p-8">
            <p className={eyebrowHighlight}>Stack & practice</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {expertise.map((item) => (
                <li key={item.label}>
                  <span className="inline-flex items-center gap-2 rounded-md border border-border/90 bg-background/70 px-3 py-1.5 text-sm text-foreground dark:bg-background/25">
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
