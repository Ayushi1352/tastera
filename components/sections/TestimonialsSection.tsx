import type { TestimonialsData } from "@/types/templates.types";
import { ChefHatArt } from "@/components/ui/LineArt";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { sectionSpace } from "@/components/ui/sectionSpace";

/** Light grey band: centred title, then three review cards with arrows and dots */
export const TestimonialsSection = ({ data }: { data?: TestimonialsData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative isolate scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-soft)] lg:scroll-mt-[6.5rem] ${sectionSpace}`}>
      {/* faint chef's hat drawing beside the title */}
      <ChefHatArt className="pointer-events-none absolute left-[100.75rem] top-[7.6875rem] -z-10 hidden w-[16.875rem] text-[var(--color-deco-line)] lg:block" />
      <SectionHeading
        label={data.label}
        titleTop={data.titleTop}
        titleAccent={data.titleAccent}
        description={data.description}
        labelClass="text-lg lg:text-[1.9671rem]"
        lineClass="w-12 lg:w-[7.125rem]"
        titleClass="lg:mt-[1.2563rem] lg:text-[3.9629rem]"
        descriptionClass="font-accent lg:mt-[1.0875rem] lg:text-[1.8755rem] lg:leading-[2.5625rem]"
      />
      <div className="mt-10 px-4 sm:px-6 lg:mt-[3.975rem] lg:px-0">
        <TestimonialSlider data={data} />
      </div>
    </section>
  );
};
