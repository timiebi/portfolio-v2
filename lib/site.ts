/** Right-rail ticker kinds */
export type HomeTickerKind = "Project" | "News" | "Stack" | "Note";

type ProjectNewsNote = {
  kind: "Project" | "News" | "Note";
  text: string;
  href?: string;
};

export type HomeTickerStackRow = {
  kind: "Stack";
  /** Short label next to the logo */
  name: string;
  /** Simple Icons slug, e.g. `react`, `typescript` */
  iconSlug: string;
  href?: string;
};

export type HomeTickerItem = ProjectNewsNote | HomeTickerStackRow;

export const homeTicker = {
  /** One block is duplicated in the UI for a seamless loop */
  items: [
    {
      kind: "Project",
      text: "Retail commerce — storefront, cart, and account hardening",
      href: "/work",
    },
    {
      kind: "Project",
      text: "Design system — tokens, Storybook, a11y checks in CI",
      href: "/work",
    },
    {
      kind: "Stack",
      name: "TypeScript",
      iconSlug: "typescript",
      href: "https://www.typescriptlang.org",
    },
    {
      kind: "Stack",
      name: "React",
      iconSlug: "react",
      href: "https://react.dev",
    },
    {
      kind: "Stack",
      name: "React Native",
      iconSlug: "reactnative",
      href: "https://reactnative.dev",
    },
    {
      kind: "Stack",
      name: "Tailwind CSS",
      iconSlug: "tailwindcss",
      href: "https://tailwindcss.com",
    },
    {
      kind: "Stack",
      name: "Node.js",
      iconSlug: "nodedotjs",
      href: "https://nodejs.org",
    },
    {
      kind: "Stack",
      name: "Neon",
      iconSlug: "postgresql",
      href: "https://neon.tech",
    },
    {
      kind: "Stack",
      name: "Render",
      iconSlug: "render",
      href: "https://render.com",
    },
    {
      kind: "Stack",
      name: "GitHub Copilot",
      iconSlug: "githubcopilot",
      href: "https://github.com/features/copilot",
    },
    {
      kind: "Stack",
      name: "Git",
      iconSlug: "git",
      href: "https://git-scm.com",
    },
    {
      kind: "News",
      text: "Open to collaborate",
    },
    {
      kind: "Note",
      text: "Async-first · comfortable collaborating across time zones",
    },
    {
      kind: "Project",
      text: "Ops dashboard — dense tables, sockets, offline edges",
      href: "/work",
    },
  ],
} as const satisfies { items: readonly HomeTickerItem[] };

export const site = {
  /** Full name — used in hero & footer */
  name: "Timiebi Nicholas Kosu",
  /** Shorter line for the sticky header on small screens */
  nameShort: "Timiebi Kosu",
  role: "Software Engineer",
  /** Hero body — under the name */
  heroBio: [
    "I build production-ready web applications with React and TypeScript, focused on clean UI, performance, and usability.",
    "I've shipped fullstack applications—from database to frontend—deployed on Neon and Render, used in real-world scenarios.",
  ] as const,
  /** About page section heading (under kicker) */
  aboutSection: {
    title: "Clean UI, real deployments",
    summary:
      "React and TypeScript for production interfaces; fullstack slices from database to UI on Neon and Render.",
  },
  email: "kosutimiebinicholas@gmail.com",
  availability: "Open to Remote Roles",
  social: {
    github: "https://github.com/timiebikosu",
    linkedin: "https://www.linkedin.com/in/nicholas-kosu",
  },
} as const;
