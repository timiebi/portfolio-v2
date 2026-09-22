export const routes = {
  home: "/",
  work: "/work",
  insights: "/insights",
  about: "/about",
  contact: "/contact",
} as const;

export const mainNav = [
  { href: routes.home, label: "Home" },
  { href: routes.work, label: "Project" },
  { href: routes.insights, label: "Insights" },
  { href: routes.about, label: "About" },
  { href: routes.contact, label: "Contact" },
] as const;
