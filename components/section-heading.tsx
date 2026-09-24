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
      : "mb-10 flex flex-col gap-4 border-b border-border/60 pb-8 md:mb-12 md:pb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8"
    : centered
      ? "mb-12 flex flex-col items-center gap-5 border-b border-border/80 pb-10 text-center md:mb-16 md:pb-12"
      : "mb-12 flex flex-col gap-5 border-b border-border/80 pb-10 md:mb-16 md:pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10";

  return (
    <div className={`min-w-0 ${shell}`}>
      <div className={`min-w-0 space-y-3 ${centered ? "max-w-3xl" : "max-w-2xl"}`}>
        {index ? <p className={eyebrowHighlight}>{index}</p> : null}
        <h2
          id={titleId}
          className={sectionTitle}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className={`${sectionDescription} ${centered ? "lg:text-center" : "lg:text-right"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
