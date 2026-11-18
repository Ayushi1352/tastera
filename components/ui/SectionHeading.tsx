/*
  Sizes on this page are taken from the 1920px design: 1 design pixel = 1/16 rem.
  From 1024px up the root font is 1/120 of the screen (16px at 1920px), so the whole design scales with the screen.
*/

type EyebrowProps = {
  label: string;
  /** "both": a line on each side (centred headings); "after": one line after the label */
  lines?: "both" | "after";
  /** size of this section's label */
  className?: string;
  /** length of the lines (and their distance from the label) */
  lineClass?: string;
};

/** Small orange uppercase label between thin orange lines, above the section titles */
export const Eyebrow = ({ label, lines = "both", className = "", lineClass = "w-12 lg:w-[7.9375rem]" }: EyebrowProps) => {
  // the label always stays on one line; on very narrow phones the lines get shorter instead
  const line = <span aria-hidden="true" className={`h-[0.125rem] min-w-4 shrink rounded-full bg-current lg:h-[0.1875rem] ${lineClass}`} />;

  return (
    <p className={`flex items-center gap-3 font-heading font-bold uppercase leading-none text-[var(--color-primary)] lg:gap-[2.0625rem] ${lines === "both" ? "justify-center" : ""} ${className}`}>
      {lines === "both" && line}
      <span className="whitespace-nowrap">{label}</span>
      {line}
    </p>
  );
};

/** Bold sans title; the accent words in the brand orange */
export const titleClass = "font-heading font-bold leading-[1.15] tracking-[-0.005em] text-[var(--color-heading)] lg:leading-none";

/**
  Phone and tablet size of every section title (the desktop size comes from each section).
  It shrinks with narrow phones (24px at 300px, full 34px from ~425px) and the lines are balanced,
  so no title takes more than two lines on any phone or tablet.
*/
export const titleSizeClass = "text-[clamp(1.5rem,8vw,2.125rem)] text-balance sm:text-[2.75rem]";

type HeadingProps = {
  label: string;
  titleTop: string;
  titleAccent: string;
  description?: string;
  /** desktop label size and its lines (the design draws them a little differently in every section; phones and tablets use one size) */
  labelClass?: string;
  lineClass?: string;
  /** desktop title size and its distance from the label */
  titleClass?: string;
  /** font, size, line height and distance of the text under the title */
  descriptionClass?: string;
  className?: string;
};

/** Centred section intro: label between lines, two-colour title, one or two lines of text */
export const SectionHeading = ({
  label,
  titleTop,
  titleAccent,
  description,
  labelClass = "lg:text-[2.0406rem]",
  lineClass,
  titleClass: sizeClass = "lg:mt-[1.6125rem] lg:text-[4.225rem]",
  descriptionClass = "font-accent lg:mt-[1.1rem] lg:text-[1.8647rem] lg:leading-[2.5625rem]",
  className = "",
}: HeadingProps) => (
  <div data-reveal className={`px-4 text-center sm:px-6 lg:px-0 ${className}`}>
    <Eyebrow label={label} className={`text-base sm:text-lg ${labelClass}`} lineClass={lineClass} />
    <h2 className={`mt-3 ${titleSizeClass} ${titleClass} ${sizeClass}`}>
      {titleTop} <span className="text-[var(--color-primary)]">{titleAccent}</span>
    </h2>
    {description && (
      // the design breaks the longer intros into two lines; phones and tablets wrap them freely
      <p className={`mx-auto mt-3 max-w-[48rem] text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:max-w-none lg:whitespace-pre-line ${descriptionClass}`}>
        {description}
      </p>
    )}
  </div>
);
