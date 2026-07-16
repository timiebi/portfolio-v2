"use client";

import { SiteLogo } from "@/components/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteShell } from "@/lib/layout";
import { mainNav, routes } from "@/lib/routes";
import { site } from "@/lib/site";
import { eyebrowHighlight } from "@/lib/typography";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 pt-[env(safe-area-inset-top)] dark:bg-background/92">
      <div
        className={`flex min-h-16 items-center justify-between gap-3 sm:min-h-18 sm:gap-4 ${siteShell}`}
      >
        <Link
          href={routes.home}
          className="group/logo flex min-w-0 max-w-[min(100%,15rem)] shrink cursor-pointer items-center gap-2.5 font-display text-sm font-semibold tracking-[-0.02em] text-foreground min-[400px]:max-w-[min(100%,18rem)] min-[400px]:gap-3 sm:max-w-[min(100%,22rem)] sm:text-[0.9375rem] md:max-w-none"
        >
          <SiteLogo className="shrink-0 transition-transform duration-300 ease-out group-hover/logo:scale-105" />
          <span className="truncate sm:hidden">{site.nameShort}</span>
          <span className="hidden truncate sm:inline">{site.name}</span>
        </Link>

        <div className="flex min-w-0 shrink items-center justify-end gap-1.5 sm:gap-3">
          <ThemeToggle />

          {/* Desktop Navigation Menu (md and above) */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-px rounded-full border border-border/80 bg-surface p-px dark:bg-surface-elevated">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href} className="shrink-0">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`inline-flex min-h-9 cursor-pointer items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight ${
                        active
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted hover:bg-background/80 hover:text-foreground dark:hover:bg-background/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Navigation Trigger (Hamburger) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-surface text-foreground transition-colors hover:bg-background/80 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight dark:bg-surface-elevated/80 dark:hover:bg-background/10 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            <div className="relative flex h-4 w-4 flex-col justify-between">
              <span
                className={`h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "scale-0 opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 top-[calc(4rem+env(safe-area-inset-top))] z-40 flex flex-col border-t border-border/55 bg-background/96 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl dark:bg-background/96 sm:top-[calc(4.5rem+env(safe-area-inset-top))] md:hidden"
          >
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
              <nav aria-label="Mobile Navigation" className="flex flex-col gap-6 pt-6">
                <ul className="flex flex-col gap-5">
                  {mainNav.map((item, i) => {
                    const active = pathname === item.href;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={`font-display text-4xl font-semibold tracking-[-0.03em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight ${
                            active ? "text-highlight" : "text-foreground hover:text-highlight"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Direct email and socials */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: mainNav.length * 0.08,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="space-y-6 border-t border-border/60 pt-6"
              >
                <div className="space-y-1.5">
                  <p className={eyebrowHighlight}>Direct Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="block font-sans text-lg font-medium text-foreground transition-colors hover:text-highlight break-all"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="flex gap-4">
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:bg-surface-elevated hover:text-highlight"
                    aria-label="GitHub"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:bg-surface-elevated hover:text-highlight"
                    aria-label="LinkedIn"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

