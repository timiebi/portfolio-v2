import { CustomCursor } from "@/components/custom-cursor";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Montserrat, Syne } from "next/font/google";
import "./globals.css";

/** Body & UI sans — geometric, highly legible, works in product and portfolio contexts */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/** Meta, labels, tags — distinctive dev monospace */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

/** Display & headings — Syne: geometric, high-impact (distinct from Montserrat body) */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Timiebi Nicholas Kosu — Software engineer (frontend-focused)",
    template: "%s · Timiebi Nicholas Kosu",
  },
  description:
    "Timiebi Nicholas Kosu — software engineer, frontend-focused. Production-ready web apps with React and TypeScript; fullstack delivery on Neon and Render.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${jetbrainsMono.variable} ${syne.variable} h-full`}
    >
      <body className="bg-grid-faint relative min-h-full min-w-0 overflow-x-hidden bg-background pb-[env(safe-area-inset-bottom)] text-foreground font-sans antialiased [text-size-adjust:100%]">
        <ThemeProvider>
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
