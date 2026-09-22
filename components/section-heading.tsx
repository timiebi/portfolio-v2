import { eyebrowHighlight, sectionDescription, sectionTitle } from "@/lib/typography";

type Props = {
  index: string;
  title: string;
  description?: string;
  /** For `aria-labelledby` on the parent section */
  titleId?: string;
  /** Tighter spacing for stacked home sections */
  compact?: boolean;
  align?: "start" | "center";
};

export function SectionHeading({
  index,
  title,
  description,
  titleId,
  compact,
  align = "start",
}: Props) {
  const centered = align === "center";
  const shell = compact
    ? centered
      ? "mb-10 flex flex-col items-center gap-4 border-b border-border/60 pb-8 text-center md:mb-12 md:pb-10"
      : "mb-10 flex flex-col gap-4 border-b border-border/60 pb-8 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-8 md:pb-10"
    : centered
      ? "mb-12 flex flex-col items-center gap-5 border-b border-border/80 pb-10 text-center md:mb-16 md:pb-12"
      : "mb-12 flex flex-col gap-5 border-b border-border/80 pb-10 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-10 md:pb-12";

  return (
    <div className={`min-w-0 ${shell}`}>
      <div className={`min-w-0 space-y-3 ${centered ? "max-w-3xl" : "max-w-2xl"}`}>
        <p className={eyebrowHighlight}>{index}</p>
        <h2
          id={titleId}
          className={sectionTitle}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className={`${sectionDescription} ${centered ? "md:text-center" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
