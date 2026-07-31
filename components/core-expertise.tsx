"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { monoTag, eyebrowHighlight } from "@/lib/typography";

type SkillCardProps = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
};

function SkillCard({ title, subtitle, description, tags, gradient }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-highlight/45 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_20%,transparent),0_20px_40px_-24px_color-mix(in_oklab,var(--highlight)_25%,transparent)] dark:bg-surface-elevated/90 dark:hover:border-highlight/45 dark:hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--highlight)_25%,transparent),0_24px_48px_-28px_rgba(0,0,0,0.65)]">
      {/* Background ambient gradient flare on card hover */}
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-20 dark:group-hover:opacity-15 bg-gradient-to-br ${gradient} blur-xl`}
        aria-hidden
      />

      <span className={eyebrowHighlight}>{subtitle}</span>
      <h3 className="mt-2.5 font-display text-lg font-semibold tracking-[-0.02em] text-foreground sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {description}
      </p>
      
      <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Expertise technologies">
        {tags.map((tag) => (
          <li key={tag}>
            <span className={`inline-flex rounded-md border border-border/80 bg-surface px-2 py-0.5 text-[11px] font-medium dark:bg-surface-elevated/60 ${monoTag}`}>
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CoreExpertise() {
  return (
    <section className="min-w-0" aria-labelledby="expertise-heading">
      <FadeIn>
        <SectionHeading
          index="Expertise"
          title="Technical pillars"
          titleId="expertise-heading"
          description="Crafting premium digital experiences requires a strict balance of design fidelity, engineering rigor, and execution speed."
        />
      </FadeIn>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn delay={0.05} className="h-full">
          <SkillCard
            subtitle="Design Systems & Interaction"
            title="UI / UX Engineering"
            description="Developing fluid, accessible interfaces. Creating semantic component libraries using Tailwind, Radix, and Framer Motion, adhering to WAI-ARIA standards for screen-reader and keyboard compatibility."
            tags={["React", "Next.js", "Tailwind CSS", "Framer Motion", "Storybook", "A11y"]}
            gradient="from-cyan-500 via-teal-600 to-emerald-500"
          />
        </FadeIn>
        
        <FadeIn delay={0.1} className="h-full">
          <SkillCard
            subtitle="State & Mechanics"
            title="Performance & Scaling"
            description="Auditing critical rendering paths, optimizing scripts, and orchestrating bundle splits. Ensuring smooth animation timelines, zero layout shifts (CLS), and fast Interactivity (INP)."
            tags={["TypeScript", "React 19", "Vite", "TanStack Query", "Lenis", "Core Web Vitals"]}
            gradient="from-amber-500 via-orange-600 to-rose-600"
          />
        </FadeIn>

        <FadeIn delay={0.15} className="h-full">
          <SkillCard
            subtitle="Secure Slices & Execution"
            title="Fullstack Integration"
            description="Building vertical slices from database layers through server logic to UI. Handling structured transaction emails (Resend API), serverless datastores (Neon Postgres), and robust client-server state sync."
            tags={["Node.js", "NestJS", "Prisma", "PostgreSQL", "Resend API", "CI/CD"]}
            gradient="from-indigo-500 via-purple-600 to-pink-600"
          />
        </FadeIn>
      </div>
    </section>
  );
}
