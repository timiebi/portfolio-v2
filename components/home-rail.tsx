"use client";

import type { HomeTickerItem, HomeTickerKind } from "@/lib/site";
import { homeTicker } from "@/lib/site";
import { stackIconSrc } from "@/lib/stack-icons";
import { monoCaption } from "@/lib/typography";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";

const kindTone: Record<HomeTickerKind, string> = {
  Project: "text-highlight/55",
  News: "text-muted",
  Stack: "text-foreground/40",
  Note: "text-muted/80",
};

function StackIcon({ slug }: { slug: string }) {
  return (
    <img
      src={stackIconSrc(slug)}
      alt=""
      width={22}
      height={22}
      decoding="async"
      className="h-[22px] w-[22px] shrink-0"
    />
  );
}

function TickerRow({ item }: { item: HomeTickerItem }) {
  const kindClass = kindTone[item.kind];

  if (item.kind === "Stack") {
    const inner = (
      <span className="flex items-center justify-end gap-2.5">
        <span className="min-w-0 text-pretty text-foreground/50 transition-colors duration-200 group-hover:text-highlight">
          {item.name}
        </span>
        <StackIcon slug={item.iconSlug} />
      </span>
    );

    const body = item.href ? (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group pointer-events-auto block cursor-pointer ${monoCaption}`}
      >
        {inner}
      </a>
    ) : (
      <div className={monoCaption}>{inner}</div>
    );

    return (
      <div className="py-5 first:pt-2">
        <p className={`font-mono text-[9px] font-semibold uppercase tracking-[0.22em] ${kindClass}`}>
          Stack
        </p>
        <div className="mt-2">{body}</div>
      </div>
    );
  }

  const body = item.href ? (
    <Link
      href={item.href}
      className={`pointer-events-auto block cursor-pointer text-pretty text-foreground/50 transition-colors duration-200 hover:text-highlight focus-visible:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight ${monoCaption}`}
    >
      {item.text}
    </Link>
  ) : (
    <p className={`text-pretty text-foreground/45 ${monoCaption}`}>{item.text}</p>
  );

  return (
    <div className="py-5 first:pt-2">
      <p className={`font-mono text-[9px] font-semibold uppercase tracking-[0.22em] ${kindClass}`}>
        {item.kind}
      </p>
      <div className="mt-2">{body}</div>
    </div>
  );
}

function TickerBlock({
  items,
  keyPrefix,
}: {
  items: readonly HomeTickerItem[];
  keyPrefix: string;
}) {
  return (
    <div className="text-right">
      {items.map((item, i) => (
        <TickerRow key={`${keyPrefix}-${i}`} item={item} />
      ))}
    </div>
  );
}

export function HomeRail() {
  const reduce = useReducedMotion();
  const items = homeTicker.items;

  return (
    <aside
      aria-label="Projects, stack, and updates"
      className="pointer-events-none fixed right-4 top-1/2 z-10 hidden w-[min(13.25rem,calc(100vw-2rem))] max-w-[13.25rem] -translate-y-1/2 lg:block xl:right-5 2xl:right-6"
    >
      <div className="home-ticker-wrap pointer-events-auto pl-2">
        <p className="sr-only">
          Rotating highlights: projects, tools, and short notes. Hover to pause.
        </p>

        {reduce ? (
          <div className="home-ticker-mask home-ticker-panel max-h-[min(36rem,72vh)] overflow-y-auto overscroll-contain [scrollbar-width:thin]">
            <TickerBlock items={items} keyPrefix="static" />
          </div>
        ) : (
          <div className="home-ticker-panel relative h-[min(36rem,72vh)] overflow-hidden">
            <div className="home-ticker-mask h-full overflow-hidden">
              <div className="home-ticker-track">
                <TickerBlock items={items} keyPrefix="a" />
                <div aria-hidden="true">
                  <TickerBlock items={items} keyPrefix="b" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
