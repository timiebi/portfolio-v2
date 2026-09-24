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
      text: "ONLINE",
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
  /** Hero headline — last name first, rendered uppercase */
  nameHeadline: ["Kosu,", "Timiebi Nicholas"] as const,
  /** Shorter line for the sticky header on small screens */
  nameShort: "Timiebi Kosu",
  /** One-word mark in the new header */
  brand: "Timiebi",
  role: "Senior Software Engineer",
  /** Hero body — under the name */
  heroBio: [
    "I'm a software engineer with over 5 years of experience, passionate about building meaningful products and solving interesting problems. Most of what I ship — and break — lives on my GitHub.",
    "Away from the screen, you'll usually find me on a football pitch, chasing the ball with the same instinct and quick decision-making I bring to a hard bug. When I'm not playing, there's music running in the background — Afrobeats, hip-hop, jazz, house music, whatever the day calls for.",
    "I also write, over on Insights — part technical notes to my future self, part thoughts on building things that last.",
  ] as const,
  email: "kosutimiebinicholas@gmail.com",
  availability: "ONLINE",
  portrait: {
    src: "/portrait.jpg",
    alt: "Timiebi Nicholas Kosu",
    width: 769,
    height: 1024,
  },
  /** Wordmarks drawn from shipped work */
  trusted: ["Bamboo", "Gesi", "Siteflow", "TidiViews", "AfriStock", "Villagers"] as const,
  social: {
    github: "https://github.com/timiebi",
    linkedin: "https://www.linkedin.com/in/nicholas-kosu",
  },
  cv: "/timiebi-nicholas-kosu-cv.pdf",
} as const;
