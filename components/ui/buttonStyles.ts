/** Orange button shared by the header, hero and booking form: turns a deeper orange on hover (a fading layer, so the colour changes smoothly); it stays visible on the dark hero and the dark booking panel */
export const buttonClass =
  "group relative isolate inline-flex items-center justify-center overflow-hidden text-[var(--color-white)] transition-transform duration-300 before:absolute before:inset-0 before:-z-10 before:bg-[var(--color-button-hover)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-0.5 hover:before:opacity-100";
/** arrow inside a button that slides right on hover */
export const buttonArrow = "shrink-0 transition-transform duration-300 group-hover:translate-x-1";
