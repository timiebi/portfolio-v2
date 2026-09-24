"use client";

import { FadeIn } from "@/components/fade-in";
import { SiteBio } from "@/components/site-bio";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import { bodyLead, buttonLabel, eyebrowMuted, heroTitle } from "@/lib/typography";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";

const heroSocials = [
  { label: "GitHub", href: site.social.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${site.email}`, Icon: EnvelopeIcon },
  { label: "CV", href: site.cv, Icon: FileIcon },
] as const;

export function HeroSection() {
  const lenis = useLenis();

  const scrollToExplore = () => {
    const target = document.getElementById("explore");
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { offset: -24 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-w-0" aria-labelledby="hero-heading">
      <div className="flex min-h-[calc(100svh-4rem)] flex-col sm:min-h-[calc(100svh-4.5rem)]">
        <div className="flex flex-1 flex-col justify-center py-8 sm:py-10">
          <div>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-8 xl:gap-12">
              <FadeIn className="min-w-0 w-full lg:flex-1">
                <nav aria-label="Social profiles" className="mb-5 sm:mb-6">
                  <ul className="flex items-center gap-2.5">
                    {heroSocials.map(({ label, href, Icon }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target={href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                          aria-label={label}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:scale-[1.06] hover:border-foreground/25 hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                        >
                          <Icon />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <h1
                  id="hero-heading"
                  className={`${heroTitle} uppercase`}
                >
                  {site.nameHeadline[0]}
                  <span className="mt-0 block">
                    {site.nameHeadline[1]}
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.1} className="relative mx-auto w-full max-w-[28rem] shrink-0 lg:mx-0 lg:w-[32rem] lg:max-w-[32rem]">
                <PortraitFrame />
              </FadeIn>
            </div>

            <FadeIn>
              <div className={`${bodyLead} mt-10 w-full space-y-4 text-pretty text-muted sm:mt-12 lg:mt-14`}>
                <SiteBio />
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="mt-7 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
                <Link
                  href={routes.work}
                    className={`group inline-flex h-12 min-h-12 w-full cursor-pointer touch-manipulation items-center justify-center gap-2.5 rounded-full bg-foreground px-7 ${buttonLabel} text-background transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight min-[400px]:w-auto`}
                >
                  <span>View Shipped Work</span>
                  <ArrowUpRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href={routes.contact}
                    className={`group inline-flex h-12 min-h-12 w-full cursor-pointer touch-manipulation items-center justify-center gap-2.5 rounded-full border border-border bg-background px-7 ${buttonLabel} text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-foreground/25 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight min-[400px]:w-auto`}
                >
                  <span>Get in touch</span>
                  <MailIcon className="text-muted transition-colors duration-300 group-hover:text-foreground" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.16}>
          <div className="flex justify-end pb-3 sm:pb-4">
            <button
              type="button"
              onClick={scrollToExplore}
              className="group inline-flex shrink-0 cursor-pointer items-center gap-2 text-sm tracking-[-0.01em] text-muted transition-colors hover:text-foreground"
            >
              <span>Scroll to explore</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-transform duration-300 group-hover:translate-y-0.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.08}>
        <div
          id="hero-projects"
          className="flex flex-col gap-4 border-t border-border/50 pt-8 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:pt-10"
        >
          <div className="min-w-0">
            <p className={eyebrowMuted}>
              Projects
            </p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8">
              {site.trusted.map((name) => (
                <li
                  key={name}
                  className="font-display text-lg font-semibold tracking-[-0.03em] text-foreground/35 sm:text-xl"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function PortraitFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] overflow-x-clip sm:max-w-[26rem] lg:ml-auto lg:overflow-visible lg:max-w-[32rem]">
      <div className="relative aspect-[4/5] w-[70%] sm:w-[72%]">
        <div
          className="hero-blob absolute -right-8 -top-10 h-40 w-36 bg-[#d7d5ee] sm:-right-14 sm:h-52 sm:w-48 dark:bg-[#3f3d5c]"
          style={{ borderRadius: "62% 38% 46% 54% / 48% 42% 58% 52%" }}
          aria-hidden
        />
        <div
          className="hero-blob absolute -bottom-10 -left-10 h-44 w-40 bg-[#d9e2ee] sm:-left-14 sm:h-56 sm:w-52 dark:bg-[#2c3644]"
          style={{
            borderRadius: "42% 58% 38% 62% / 52% 44% 56% 48%",
            animationDelay: "-7s",
          }}
          aria-hidden
        />
        <div
          className="hero-blob absolute -right-4 top-[46%] h-16 w-14 bg-[#ece7f5] sm:h-20 sm:w-16 dark:bg-[#4a4458]"
          style={{
            borderRadius: "58% 42% 62% 38% / 44% 56% 44% 56%",
            animationDelay: "-3s",
          }}
          aria-hidden
        />

        <div className="relative z-10 h-full overflow-hidden rounded-[1.75rem] bg-surface shadow-[0_24px_80px_-32px_rgba(15,15,15,0.35)] sm:rounded-[2rem]">
          <Image
            src={site.portrait.src}
            alt={site.portrait.alt}
            fill
            priority
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 80vw"
            className="object-cover object-[50%_18%]"
          />
        </div>

        <div className="absolute bottom-5 right-3 z-20 sm:bottom-6 sm:right-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3.5 py-2 text-xs font-medium text-zinc-800 shadow-lg shadow-black/5 backdrop-blur dark:border-white/10 dark:bg-zinc-900/90 dark:text-zinc-100">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {site.availability}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-2 z-20 hidden w-[7.25rem] rotate-[7deg] text-right sm:block sm:top-4 sm:w-[8.5rem]">
        <p className="font-hand text-left text-[1.2rem] leading-[1.2] text-foreground/70 sm:text-[1.35rem] dark:text-foreground/65">
          Turning ideas into things people can actually use.
        </p>
        <svg
          className="-ml-1 mt-0.5 h-10 w-14 text-foreground/40 sm:h-11 sm:w-16"
          viewBox="0 0 90 48"
          fill="none"
          aria-hidden
        >
          <path
            d="M58 4c-10 12-22 24-40 34"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M28 24c-8 6-14 12-18 20"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
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

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
