import type { GalleryData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { sectionSpace } from "@/components/ui/sectionSpace";

/** Centred title, then the photo collage */
export const GallerySection = ({ data }: { data?: GalleryData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`scroll-mt-[4.5rem] bg-[var(--color-bg-main)] lg:scroll-mt-[6.5rem] ${sectionSpace}`}>
      <SectionHeading
        label={data.label}
        titleTop={data.titleTop}
        titleAccent={data.titleAccent}
        description={data.description}
        labelClass="text-lg lg:text-[1.801rem]"
        lineClass="w-12 lg:w-[7.5rem]"
        titleClass="lg:mt-[1.275rem] lg:text-[3.9857rem]"
        descriptionClass="font-accent lg:mt-[1.1688rem] lg:text-[1.8271rem] lg:leading-[2.5625rem]"
      />
      <div className="mt-10 px-4 sm:px-6 lg:mt-[3.8rem] lg:pl-[2.9375rem] lg:pr-0">
        <GalleryGrid data={data} />
      </div>
    </section>
  );
};
