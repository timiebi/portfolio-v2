/**
 * Type system
 *
 * Space Grotesk → display (`font-display`)
 * IBM Plex Sans → body, UI, labels (`font-sans`; `font-mono` maps here too)
 * Caveat → annotations (`font-hand`)
 *
 * Scale: 11 / 12 / 14 / 16 / 17–18 / 20 / 24 / 40 / 80
 * Large display tightens. Small caps open. Body sits slightly tight (−0.011em).
 */

const labelUpper =
  "font-mono text-[11px] font-medium uppercase tracking-[0.16em]";

/** Section kicker — highlight */
export const eyebrowHighlight = `${labelUpper} text-highlight`;

/** Section kicker / quiet label */
export const eyebrowMuted = `${labelUpper} text-muted`;

/** Footer legal, copyright */
export const monoLegal = "font-mono text-[11px] uppercase tracking-[0.16em] text-muted";

/** Quiet sentence-case meta */
export const monoFine = "font-mono text-[11px] leading-normal text-muted";

/** Secondary meta, dates in lists */
export const monoCaption =
  "font-mono text-[12px] leading-[1.5] tracking-[0.01em] text-muted";

/** Uppercase inline link */
export const monoLink = `${labelUpper} text-muted`;

/** Chips / tags */
export const monoTag =
  "font-mono text-[11px] font-medium tracking-[0.02em] text-foreground/90";

/** Project year · role */
export const projectMetaRow = `flex flex-wrap items-center gap-x-3 gap-y-1 ${labelUpper} text-muted`;

/** Hero name — 80px cap, all-caps in the component */
export const heroTitle =
  "font-display text-[clamp(2.05rem,7.2vw+0.45rem,5rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-balance text-foreground";

/** Page / section H2 */
export const sectionTitle =
  "font-display text-[clamp(1.5rem,2.4vw+0.9rem,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance text-foreground";

/** Card / article title */
export const cardTitle =
  "font-display text-[1.125rem] font-semibold leading-[1.22] tracking-[-0.025em] text-pretty text-foreground sm:text-[1.25rem]";

/** Featured card title */
export const cardTitleLg =
  "font-display text-[1.25rem] font-semibold leading-[1.18] tracking-[-0.028em] text-pretty text-foreground sm:text-[1.5rem]";

/** Header wordmark */
export const brandMark =
  "font-display text-[1.0625rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.125rem]";

/** Hero / about lead */
export const bodyLead =
  "text-[1.0625rem] leading-[1.7] tracking-[-0.011em] text-pretty sm:text-lg sm:leading-[1.68]";

/** Default paragraph */
export const bodyCopy = "text-base leading-[1.7] tracking-[-0.011em] text-pretty";

/** Supporting copy */
export const bodySmall =
  "text-sm leading-[1.65] tracking-[-0.01em] text-pretty text-muted";

/** Primary nav */
export const navLink = "text-[0.9375rem] font-medium tracking-[-0.01em]";

/** Buttons */
export const buttonLabel = "text-sm font-semibold tracking-[-0.01em]";

/** Text links (All insights, All work) */
export const textLink = "text-sm font-medium tracking-[-0.01em]";

/** Section heading supporting line */
export const sectionDescription =
  "w-full max-w-none text-pretty text-sm leading-[1.65] tracking-[-0.01em] text-muted sm:max-w-md md:text-[0.9375rem] lg:max-w-lg lg:text-base lg:leading-[1.65]";
