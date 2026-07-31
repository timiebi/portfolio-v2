export type Article = {
  title: string;
  description: string;
  href: string;
  date: string;
  readTime: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    title: "The Biggest Problem in African Tech Isn't Talent. It's Proximity.",
    description:
      "Geography shapes what problems we solve. While tech talent clusters in major cities building urban middle-class solutions (ride-hailing, food delivery), the critical infrastructure needs of rural and informal markets are left neglected.",
    href: "https://timiebi.hashnode.dev/the-biggest-problem-in-african-tech-isn-t-talent-it-s-proximity",
    date: "July 30, 2026",
    readTime: "5 min read",
    tags: ["Product Design", "AI", "Startup Culture", "Africa"],
  },
  {
    title: "What Africa Actually Needs From Tech in 2026 — And What We Keep Getting Wrong",
    description:
      "A critical critique of the ecosystem's hyper-focus on Fintech and B2B SaaS. We need digital healthcare infrastructure, NLP for native African languages, and systems designed for the informal economy that supports 85% of sub-Saharan Africa.",
    href: "https://timiebi.hashnode.dev/what-africa-actually-needs-from-tech-in-2026-and-what-we-keep-getting-wrong",
    date: "July 29, 2026",
    readTime: "6 min read",
    tags: ["Ecosystem", "Healthcare", "NLP", "Informal Economy"],
  },
  {
    title: "How I Replaced GmailApp with Resend in Google Apps Script -(And Why You Should Too)",
    description:
      "A technical walkthrough detailing how to replace Google Apps Script's built-in GmailApp with Resend's API via UrlFetchApp to prevent personal email leaks and ensure high deliverability from your custom domain.",
    href: "https://timiebi.hashnode.dev/how-i-replaced-gmailapp-with-resend-in-google-apps-script-and-why-you-should-too",
    date: "July 28, 2026",
    readTime: "10 min read",
    tags: ["Google Apps Script", "Resend", "API Integration", "JavaScript"],
  },
];
