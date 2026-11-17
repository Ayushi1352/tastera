import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MenusSection } from "@/components/sections/MenusSection";
import { WhySection } from "@/components/sections/WhySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;

/*
  One landing page built from the Tastera design, sections in the design's order.
  Each section's id (templates.json) matches the header and footer links ("#about" → id="about");
  every "Book a Table" button leads to the reservation form.
*/
export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.RestaurantHero1} />
      <AboutSection data={sectionData.About?.variants?.RestaurantAbout1} />
      <MenusSection data={sectionData.Menus?.variants?.RestaurantMenus1} />
      <WhySection data={sectionData.Why?.variants?.RestaurantWhy1} />
      <GallerySection data={sectionData.Gallery?.variants?.RestaurantGallery1} />
      <TestimonialsSection data={sectionData.Testimonials?.variants?.RestaurantTestimonials1} />
      <ContactSection
        data={sectionData.Contact?.variants?.RestaurantContact1}
        form={sectionData.ContactForm?.variants?.RestaurantContactForm1}
        company={commonData.company}
      />
      <FaqSection data={sectionData.Faq?.variants?.RestaurantFaq1} />
    </main>
  );
}
