import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      borderColor: {
        DEFAULT: "currentColor",
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        heading: ["var(--font-heading)"],
        display: ["var(--font-display)"],
        accent: ["var(--font-accent)"],
        nav: ["var(--font-nav)"],
      },
    },
  },
  plugins: [
    // Variants built into Tailwind v4 that v3 does not have.
    plugin(({ addVariant }) => {
      addVariant("starting", "@starting-style");
    }),
  ],
};
export default config;
