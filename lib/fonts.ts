import { Caveat, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

/**
 * Type system:
 * - Space Grotesk → headings / display (`--font-space-grotesk`, `font-display`)
 * - IBM Plex Sans → body, UI, labels (`--font-ibm-plex-sans`, `font-sans` and `font-mono`)
 * - Caveat → handwritten annotations (`--font-caveat`, `font-hand`)
 *
 * `font-mono` maps to IBM Plex Sans so label/meta classes stay in the same family.
 */
export const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${ibmPlexSans.variable} ${spaceGrotesk.variable} ${caveat.variable}`;
