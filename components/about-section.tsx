import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { SiteBio } from "@/components/site-bio";
import { expertise } from "@/lib/expertise";
import { site } from "@/lib/site";
import { stackIconSrc } from "@/lib/stack-icons";
import { bodyCopy, eyebrowHighlight } from "@/lib/typography";

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
          <div className={`${bodyCopy} space-y-6 text-muted`}>
            <SiteBio />
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-6" delay={0.1}>
          <div className="min-w-0 rounded-2xl border border-border bg-surface p-5 dark:bg-surface-elevated sm:rounded-3xl sm:p-7 md:p-8">
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
