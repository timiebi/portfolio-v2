import { SiteLogo } from "@/components/site-logo";
import { siteShell } from "@/lib/layout";
import { mainNav, routes } from "@/lib/routes";
import { site } from "@/lib/site";
import { eyebrowHighlight, monoLegal } from "@/lib/typography";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className={`flex flex-col gap-10 py-12 sm:gap-12 sm:py-16 lg:flex-row lg:items-start lg:justify-between lg:gap-16 ${siteShell}`}>
        <div className="space-y-4">
          <div className="flex min-w-0 flex-wrap items-center gap-3 sm:gap-4">
            <SiteLogo variant="footer" />
            <p className="min-w-0 max-w-full font-display text-base font-semibold tracking-[-0.02em] text-foreground sm:text-lg">
              {site.name}
            </p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">{site.role}</p>
          <p className={monoLegal}>© {year}</p>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
          <nav aria-label="Site">
            <p className={eyebrowHighlight}>Site</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href={routes.home}
                  className="cursor-pointer text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                >
                  Home
                </Link>
              </li>
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className={eyebrowHighlight}>Online</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href={site.social.github}
                  className="cursor-pointer text-muted transition-colors hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  className="cursor-pointer text-muted transition-colors hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Link
          href={routes.home}
          className={`inline-flex cursor-pointer items-center gap-2 self-start transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight lg:self-end ${eyebrowHighlight}`}
        >
          Top
          <span aria-hidden>↑</span>
        </Link>
      </div>
    </footer>
  );
}
