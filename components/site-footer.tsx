"use client";

import { SiteLogo } from "@/components/site-logo";
import { siteShell } from "@/lib/layout";
import { mainNav } from "@/lib/routes";
import { site } from "@/lib/site";
import { brandMark, eyebrowHighlight, monoLegal } from "@/lib/typography";
import { useLenis } from "lenis/react";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const lenis = useLenis();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className={`flex flex-col gap-10 py-12 sm:gap-12 sm:py-16 lg:flex-row lg:items-start lg:justify-between lg:gap-16 ${siteShell}`}>
        <div className="space-y-4">
          <div className="flex min-w-0 flex-wrap items-center gap-3 sm:gap-4">
            <SiteLogo variant="footer" />
            <p className={`min-w-0 max-w-full ${brandMark} text-white`}>
              {site.name}
            </p>
          </div>
          <p className="max-w-sm text-sm leading-[1.65] tracking-[-0.01em] text-zinc-400">{site.role}</p>
          <p className={`${monoLegal} text-zinc-500`}>© {year}</p>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
          <nav aria-label="Site">
            <p className={eyebrowHighlight}>Site</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm tracking-[-0.01em]">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className={eyebrowHighlight}>Online</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm tracking-[-0.01em]">
              <li>
                <a
                  href={site.social.github}
                  className="cursor-pointer text-zinc-400 transition-colors hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  className="cursor-pointer text-zinc-400 transition-colors hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          onClick={handleScrollToTop}
          aria-label="Back to top"
          className="group ml-auto flex h-12 w-12 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-all duration-300 hover:border-highlight/50 hover:bg-white/5 hover:text-highlight hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight lg:ml-0 lg:self-end"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
            aria-hidden
          >
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
