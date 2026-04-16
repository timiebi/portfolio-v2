import { eyebrowHighlight, sectionDescription } from "@/lib/typography";

type Props = {
  index: string;
  title: string;
  description?: string;
  /** For `aria-labelledby` on the parent section */
  titleId?: string;
  /** Tighter spacing for stacked home sections */
  compact?: boolean;
};

export function SectionHeading({ index, title, description, titleId, compact }: Props) {
  const shell = compact
    ? "mb-10 flex flex-col gap-4 border-b border-border/60 pb-8 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-8 md:pb-10"
    : "mb-12 flex flex-col gap-5 border-b border-border/80 pb-10 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-10 md:pb-12";

  return (
    <div className={`min-w-0 ${shell}`}>
      <div className="min-w-0 max-w-2xl space-y-3">
        <p className={eyebrowHighlight}>{index}</p>
        <h2
          id={titleId}
          className="font-display text-[clamp(1.45rem,4.2vw+0.5rem,2.75rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-foreground"
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className={sectionDescription}>{description}</p>
      ) : null}
    </div>
  );
}
