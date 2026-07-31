/**
 * Typography tokens — use these so mono scale + tracking stay aligned.
 *
 * Font stack (loaded in app/layout.tsx):
 * - Plus Jakarta Sans → body, UI, buttons (`font-sans` on <body>)
 * - Syne → headlines & display (`font-display`) — geometric contrast to Plus Jakarta Sans body
 * - JetBrains Mono → labels, meta, tags (`font-mono` via utilities below)
 */

/** Section index / field label (highlight) */
export const eyebrowHighlight =
  "font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-highlight";

/** Section index when muted */
export const eyebrowMuted =
  "font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-muted";

/** © line, legal — uppercase mono, no semibold */
export const monoLegal = "font-mono text-[10px] uppercase tracking-[0.24em] text-muted";

/** Tiny colophon (sentence case) */
export const monoFine = "font-mono text-[10px] text-muted";

/** Availability and other secondary meta */
export const monoCaption = "font-mono text-[11px] leading-relaxed text-muted";

/** Uppercase mono link (e.g. About in hero) */
export const monoLink =
  "font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-muted";

/** Tag / chip text */
export const monoTag = "font-mono text-xs tracking-normal text-foreground/90";

/** Project year · role row */
export const projectMetaRow =
  "flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-muted";

/** Hero H1 — fluid type down to ~320px wide viewports */
export const heroTitle =
  "font-display text-[clamp(2.25rem,6.5vw+0.1rem,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground";

/** Body intro under hero title */
export const bodyLead = "text-base leading-[1.7] sm:text-lg lg:text-[1.125rem]";

/** Section description (sans) */
export const sectionDescription =
  "w-full max-w-none text-pretty text-sm leading-relaxed text-muted sm:max-w-md lg:max-w-lg md:text-right md:text-[0.9375rem] lg:text-[1rem]";
