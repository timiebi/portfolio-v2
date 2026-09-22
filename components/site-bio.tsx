import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import Link from "next/link";

const inlineLink =
  "font-medium text-foreground underline decoration-foreground/20 underline-offset-[0.2em] transition-colors hover:text-highlight hover:decoration-highlight";

export function SiteBio() {
  return (
    <>
      <p>
        I&apos;m a software engineer with over 5 years of experience, passionate about
        building meaningful products and solving interesting problems. Most of what I
        ship — and break — lives on my{" "}
        <a
          href={site.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className={inlineLink}
        >
          GitHub
        </a>
        .
      </p>
      <p>
        Away from the screen, you&apos;ll usually find me on a football pitch, chasing
        the ball with the same instinct and quick decision-making I bring to a hard
        bug. When I&apos;m not playing, there&apos;s music running in the background —
        Afrobeats, hip-hop, jazz, house music, whatever the day calls for.
      </p>
      <p>
        I also write, over on{" "}
        <Link href={routes.insights} className={inlineLink}>
          Insights
        </Link>{" "}
        — part technical notes to my future self, part thoughts on building things that
        last.
      </p>
    </>
  );
}
