import { Inter, Space_Grotesk } from "next/font/google";

/**
 * Two-family system:
 * - Space Grotesk → headings / display (`--font-space-grotesk`, `font-display`)
 * - Inter → body, UI, labels, dates (`--font-inter`, `font-sans` and `font-mono`)
 *
 * `font-mono` is mapped to Inter on purpose so existing label/meta classes
 * do not introduce a third family.
 */
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${inter.variable} ${spaceGrotesk.variable}`;
