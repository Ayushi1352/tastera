import type { Metadata } from "next";
import { Lato, Montserrat, Outfit, Playfair_Display, Roboto } from "next/font/google";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData, RootVariables } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], fallback: ["Arial", "sans-serif"], variable: "--font-roboto" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700"], fallback: ["Arial", "sans-serif"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], fallback: ["Georgia", "serif"], variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"], fallback: ["Arial", "sans-serif"], variable: "--font-outfit" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], fallback: ["Arial", "sans-serif"], variable: "--font-lato" });

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;
const headerData = sectionData.Header?.variants?.RestaurantHeader1;

const rootVariables: RootVariables = {
  "--font-primary": commonData.theme.fonts.primary,
  "--font-heading": commonData.theme.fonts.heading,
  "--font-display": commonData.theme.fonts.display,
  "--font-accent": commonData.theme.fonts.accent,
  "--font-nav": commonData.theme.fonts.nav,
};

export const metadata: Metadata = {
  title: commonData.metadata.title,
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={rootVariables}
      data-scroll-behavior="smooth"
      // Root font size: 16px, and from 1024px up it follows the 1920px design (1rem = 1/120 of the screen, at most 16px),
      // so a 1920px screen shows the design pixel for pixel and 1024px shows exactly the same layout, only smaller.
      // Every size on the page is in rem, so it all scales together.
      // Header and footer links scroll smoothly to their section on this one page. Everything clickable gets the pointer.
      className={`${roboto.variable} ${montserrat.variable} ${playfair.variable} ${outfit.variable} ${lato.variable} h-full text-[16px] lg:text-[length:min(16px,calc(100vw/120))] scroll-smooth antialiased [&_:where(a[href],button:not(:disabled),select,summary,[role=button])]:cursor-pointer motion-reduce:scroll-auto motion-reduce:[&_*]:!duration-[0.01ms]`}
    >
      <body className="min-h-full bg-[var(--color-bg-backdrop)] font-sans text-[var(--color-text)] selection:bg-[var(--color-primary)] selection:text-[var(--color-white)]">
        {/*
          The whole site sits in one frame, at most 1920px wide and centred. Up to 1920px it fills the screen, so
          nothing changes; on wider screens or when the browser is zoomed out the page stays in the middle.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[120rem] flex-col overflow-x-clip bg-[var(--color-bg-main)]">
          <Header data={headerData} company={commonData.company} />
          {children}
          <ScrollReveal />
          <Footer data={commonData.Footer} company={commonData.company} />
        </div>
      </body>
    </html>
  );
}
