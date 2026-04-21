/**
 * Simple Icons CDN with official brand hex (see https://simpleicons.org/).
 * Fallback for unknown slugs keeps icons visible on any background.
 */
const BRAND_HEX: Record<string, string> = {
  nextdotjs: "000000",
  nestjs: "E0234E",
  python: "3776AB",
  typescript: "3178C6",
  /** React “classic” blue reads on light + dark */
  react: "149ECA",
  reactnative: "61DAFB",
  tailwindcss: "06B6D4",
  nodedotjs: "339933",
  git: "F05032",
  storybook: "FF4785",
  googlechrome: "4285F4",
  w3c: "005A9C",
  vitest: "6E9F18",
  /** Postgres icon — used for Neon-hosted Postgres in the stack rail */
  postgresql: "4169E1",
  render: "46E3B7",
  /** AI-in-the-loop shipping — Copilot is the stable Simple Icons glyph for this row */
  githubcopilot: "2F81F7",
};

export function stackIconSrc(slug: string) {
  // Simple Icons does not expose a dedicated `reactnative` slug.
  const normalizedSlug = slug === "reactnative" ? "react" : slug;
  const hex = BRAND_HEX[normalizedSlug] ?? "525252";
  return `https://cdn.simpleicons.org/${normalizedSlug}/${hex}`;
}
