export type ProjectLayout = "featured" | "compact" | "horizontal";

export type Project = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  year: string;
  role: string;
  layout: ProjectLayout;
  /** Tailwind gradient classes for the visual block (fallback when no image) */
  visual: string;
  /** Screenshot or mockup under `public/` e.g. `/projects/commerce.png` */
  image?: string;
};

/** Live projects — screenshots in `public/projects/` (optional `project-management-dark.png` for swaps). */
export const projects: Project[] = [
  {
    title: "African History",
    description:
      "The Living Archive — stories, timelines, cultures, and exhibitions. Next.js on Vercel with a NestJS backend: Prisma on PostgreSQL, JWT auth, Swagger, Cloudinary, and mail. ⌘K search, themes, contributor flows.",
    href: "https://history-archive-nu.vercel.app/",
    tags: [
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "TanStack Query",
    ],
    year: "2025",
    role: "Personal · fullstack",
    layout: "featured",
    visual: "from-amber-600/25 via-orange-700/15 to-rose-900/20",
    image: "/projects/african-history.png",
  },
  {
    title: "AfriStock",
    description:
      "Marketplace for authentic African photography — discovery, uploads, and seller-friendly flows. Next.js with Radix UI, Framer Motion, Recharts, and light/dark themes on Vercel.",
    href: "https://afristock.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "Radix UI", "Framer Motion", "Tailwind CSS"],
    year: "2026",
    role: "Personal · fullstack",
    layout: "featured",
    visual: "from-teal-600/25 via-emerald-800/18 to-amber-500/15",
    image: "/projects/afristock.png",
  },
  {
    title: "Project Management Platform",
    description:
      "Cross-industry project management: workspaces, teams, projects, deadlines, and notifications. Next.js on Vercel, Neon, light/dark UI.",
    href: "https://project-management-neon-ten.vercel.app/",
    tags: ["Next.js", "React", "Neon", "TypeScript", "PWA"],
    year: "2026",
    role: "Personal · fullstack",
    layout: "featured",
    visual: "from-cyan-500/20 via-teal-600/15 to-emerald-500/15",
    image: "/projects/project-management-light.png",
  },
  {
    title: "Bamboo Securities",
    description:
      "Cross-industry project management: workspaces, teams, projects, deadlines, and notifications. Next.js on Vercel, Neon, light/dark UI.",
    href: "https://tenant-staging.bamboosecurities.com",
    tags: [ "React","vite", "Styled Components", "TypeScript"],
    year: "2026",
    role: "Lead Frontend Engineer",
    layout: "featured",
    visual: "from-cyan-500/20 via-teal-600/15 to-emerald-500/15",
    image: "/projects/bamboo-securities-login.png",
  },
];
