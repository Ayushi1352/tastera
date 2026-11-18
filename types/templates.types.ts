import type { CSSProperties } from "react";

export interface ThemeFonts {
  primary: string;
  heading: string;
  display: string;
  accent: string;
  nav: string;
}

/** CSS variables set on <html> in app/layout.tsx */
export type RootVariables = CSSProperties & {
  "--font-primary": string;
  "--font-heading": string;
  "--font-display": string;
  "--font-accent": string;
  "--font-nav": string;
};

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
  lang: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface ContactItem {
  id: string;
  icon: string;
  title: string;
  lines: string[];
  url: string;
}

export interface CompanyData {
  name: string;
  logo: string;
  /** the white version of the logo, for the dark footer (same proportions) */
  logoLight: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  contactItems: ContactItem[];
}

export interface SocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface FooterData {
  description: string;
  quickLinksTitle: string;
  quickLinks: LinkItem[];
  usefulLinksTitle: string;
  usefulLinks: LinkItem[];
  contactTitle: string;
  /** which company contact details the footer lists, in this order */
  contactIds: string[];
  socialTitle: string;
  socialLinks: SocialLink[];
  copyrightText: string;
}

export interface HeaderData {
  logoUrl: string;
  homeLabel: string;
  navLinks: LinkItem[];
  buttonText: string;
  buttonIcon: string;
  buttonUrl: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

/** Title in two colours: dark words, then the orange words */
export interface SectionTitle {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  /** react-icons name, listed in components/ui/Icon.tsx */
  icon: string;
  title: string;
  text: string;
}

export interface HeroData {
  id: string;
  kicker: string;
  titleTop: string;
  titleAccent: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
  imageAlt: string;
}

export interface AboutData extends SectionTitle {
  features: FeatureItem[];
  image: string;
  imageAlt: string;
}

export interface MenuItem {
  id: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}

export interface MenusData extends SectionTitle {
  items: MenuItem[];
}

export interface WhyData extends SectionTitle {
  features: FeatureItem[];
  image: string;
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export interface GalleryData extends SectionTitle {
  items: GalleryItem[];
  viewerLabel: string;
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface TestimonialsData extends SectionTitle {
  rating: number;
  ratingLabel: string;
  previousLabel: string;
  nextLabel: string;
  showLabel: string;
  startIndex: number;
  items: TestimonialItem[];
}

export interface ContactData extends SectionTitle {
  infoTitle: string;
  infoText: string;
  image: string;
  imageAlt: string;
  /** id of the booking panel, the target of every "Book a Table" button */
  formId: string;
  formTitle: string;
  formText: string;
  /** react-icons name, listed in components/ui/Icon.tsx */
  formIcon: string;
}

export interface FormField {
  placeholder: string;
  icon: string;
}

export interface ContactFormData {
  fields: {
    name: FormField;
    phone: FormField;
    email: FormField;
    date: FormField;
    time: FormField;
    guests: FormField;
  };
  timeOptions: string[];
  guestOptions: string[];
  button: string;
  sending: string;
  successTitle: string;
  success: string;
  closeLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData extends SectionTitle {
  image: string;
  imageAlt: string;
  items: FaqItem[];
}

interface Variants<T> {
  variants: Record<string, T>;
}

export interface TemplateComponent {
  key: string;
  component: string;
}

export interface RestaurantTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    company: CompanyData;
    Footer: FooterData;
  };
  categories: {
    Restaurant: {
      sections: {
        Header?: Variants<HeaderData>;
        Hero?: Variants<HeroData>;
        About?: Variants<AboutData>;
        Menus?: Variants<MenusData>;
        Why?: Variants<WhyData>;
        Gallery?: Variants<GalleryData>;
        Testimonials?: Variants<TestimonialsData>;
        Contact?: Variants<ContactData>;
        ContactForm?: Variants<ContactFormData>;
        Faq?: Variants<FaqData>;
      };
      templateComponents: {
        [template: string]: {
          shared: Record<string, string>;
          pages: Record<string, { components: TemplateComponent[] }>;
        };
      };
    };
  };
}
