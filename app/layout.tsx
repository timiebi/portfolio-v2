import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { fontVariables } from "@/lib/fonts";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Timiebi Nicholas Kosu — Senior Frontend Engineer",
    template: "%s · Timiebi Nicholas Kosu",
  },
  description:
    "Timiebi Nicholas Kosu — Senior Frontend Engineer & UI/UX Designer. Specializing in high-performance Next.js, React applications, custom animations, accessibility, and pixel-perfect design systems.",
  keywords: [
    "Timiebi Nicholas Kosu",
    "Senior Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Designer",
    "Web Performance Engineer",
    "Accessibility Specialist",
    "TypeScript",
  ],
  authors: [{ name: "Timiebi Nicholas Kosu" }],
  creator: "Timiebi Nicholas Kosu",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Timiebi Nicholas Kosu — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in Next.js, React, and web performance. Custom interaction design, responsive layouts, and zero-overhead performance optimization.",
    siteName: "Timiebi Nicholas Kosu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timiebi Nicholas Kosu — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in Next.js, React, and web performance. Custom interaction design, responsive layouts, and zero-overhead performance optimization.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      className={`${fontVariables} h-full`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.simpleicons.org" />
      </head>
      <body className="relative min-h-full min-w-0 overflow-x-hidden bg-background pb-[env(safe-area-inset-bottom)] text-foreground font-sans antialiased [text-size-adjust:100%]">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
