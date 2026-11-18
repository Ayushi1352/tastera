/**
 * Hand-drawn style line drawings used as background decoration (hero, About, Testimonials, Contact, FAQ).
 * They draw in `currentColor`, so each place sets the colour and size with classes.
 */
type ArtProps = { className?: string };

const base = {
  "aria-hidden": true,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Chef's hat: puffed crown with an inner sketch line, banded brim and two loose strokes down the sides */
export const ChefHatArt = ({ className }: ArtProps) => (
  <svg viewBox="0 0 160 120" className={className} {...base}>
    <path strokeWidth="3.5" d="M42 88C14 90 4 64 24 50C24 26 52 8 80 14C94 17 104 25 108 34C122 24 150 30 152 50C154 66 142 76 128 80" />
    <path strokeWidth="2.5" d="M46 42C54 24 74 16 94 20M110 38C124 32 142 38 144 52" />
    <path strokeWidth="3.5" d="M44 88Q86 74 130 88" />
    <path strokeWidth="2.5" d="M84 96Q108 92 132 96M90 104Q110 101 128 103" />
    <path strokeWidth="3" d="M38 82L46 116M126 72L131 100" />
  </svg>
);

/** Fork and knife side by side, both leaning slightly right */
export const CutleryArt = ({ className }: ArtProps) => (
  <svg viewBox="0 0 144 190" className={className} {...base} strokeWidth="2.5">
    <path
      vectorEffect="non-scaling-stroke"
      transform="translate(30 8) rotate(15)"
      d="M0 4a3 3 0 0 1 6 0V40h5V4a3 3 0 0 1 6 0V40h5V4a3 3 0 0 1 6 0V40h5V4a3 3 0 0 1 6 0V50q0 14-13 20V160a6.5 6.5 0 0 1-13 0V70Q0 64 0 50Z"
    />
    <path vectorEffect="non-scaling-stroke" transform="translate(95 4) rotate(15)" d="M3 95V20Q3 0 15 1Q24 3 22 30L20 95ZM5 100H19V165a7 7 0 0 1-14 0Z" />
  </svg>
);

/** A sprig of basil: four leaves with midribs and a few veins on a curved stem */
export const BasilArt = ({ className }: ArtProps) => (
  <svg viewBox="0 0 224 236" className={className} {...base} strokeWidth="2">
    <g>
      {/* stem */}
      <path vectorEffect="non-scaling-stroke" d="M110 152Q100 190 80 226" />
      {/* large leaf, up and right */}
      <path vectorEffect="non-scaling-stroke" d="M110 150Q118 62 200 40Q192 122 110 150Z" />
      <path vectorEffect="non-scaling-stroke" d="M112 147Q150 100 197 44M140 112L134 86M156 94L152 70M172 74L170 56M134 120L160 116M152 100L176 94" />
      {/* leaf to the left */}
      <path vectorEffect="non-scaling-stroke" d="M105 150Q62 88 20 110Q54 168 105 150Z" />
      <path vectorEffect="non-scaling-stroke" d="M103 148Q62 124 24 111M80 136L74 116M58 126L50 110M78 137L70 152M56 127L46 140" />
      {/* leaf down and right */}
      <path vectorEffect="non-scaling-stroke" d="M112 156Q176 160 170 216Q118 206 112 156Z" />
      <path vectorEffect="non-scaling-stroke" d="M114 158Q146 182 168 213M136 175L152 172M150 192L164 188M134 176L130 192M148 194L144 206" />
      {/* small leaf in the middle */}
      <path vectorEffect="non-scaling-stroke" d="M108 148Q80 102 96 70Q122 106 108 148Z" />
      <path vectorEffect="non-scaling-stroke" d="M107 145Q100 110 97 74" />
    </g>
  </svg>
);
