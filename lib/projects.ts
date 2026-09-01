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

/** Live projects — screenshots in `public/projects/`. */
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
    role: "Startup · fullstack",
    layout: "featured",
    visual: "from-amber-600/25 via-orange-700/15 to-rose-900/20",
    image: "/projects/african-history.png",
  },
  {
    title: "Bamboo Securities",
    description:
      "Institutional-grade asset management. Manage customers, automate trade execution, and monitor growth in real time.",
    href: "https://terminal.bamboosecurities.com/",
    tags: [ "React","vite", "Styled Components", "TypeScript"],
    year: "2024",
    role: "Lead Frontend Engineer",
    layout: "featured",
    visual: "from-cyan-500/20 via-teal-600/15 to-emerald-500/15",
    image: "/projects/bamboo-user.png",
  },
  {
    title: "TidiViews",
    description:
      "TIDIVIEWS mobile is a smartphone-based coastal wave monitoring platform designed to make wave data accessible anywhere in the world.",
    href: "https://tidiviews-website.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Native", "Expo", "postgres"],
    year: "2026",
    role: "Lead Software Engineer",
    layout: "featured",
    visual: "from-cyan-500/20 via-teal-600/15 to-emerald-500/15",
    image: "/projects/tidyviews.png",
  },
  {
    title: "Social Villagers Development Initiative",
    description:
      "Building sustainable, self-reliant communities through education, health, socio-economic empowerment, and the power of young people working together in Nigeria.",
    href: "https://socialvillagers.org/",
    tags: ["Next.js", "TypeScript", "Radix UI", "Framer Motion", "Tailwind CSS", "google"],
    year: "2026",
    role: "Lead Software Engineer",
    layout: "featured",
    visual: "from-cyan-500/20 via-teal-600/15 to-emerald-500/15",
    image: "/projects/villager.png",
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
    image: "/projects/project-management-light.jpg",
  },

];
