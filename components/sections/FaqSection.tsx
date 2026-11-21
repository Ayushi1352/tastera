import Image from "next/image";
import type { FaqData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { sectionSpace } from "@/components/ui/sectionSpace";
import { BasilArt } from "@/components/ui/LineArt";

/** Centred title; the dish photo with a thin orange outline on the left, the questions on the right */
export const FaqSection = ({ data }: { data?: FaqData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative isolate scroll-mt-[4.5rem] bg-[var(--color-bg-main)] lg:scroll-mt-[6.5rem] ${sectionSpace}`}>
      {/* faint basil leaves in the bottom right corner */}
      <BasilArt className="pointer-events-none absolute left-[106rem] bottom-[1.3125rem] -z-10 hidden w-[14rem] text-[var(--color-deco-line)] lg:block" />
      <SectionHeading
        label={data.label}
        titleTop={data.titleTop}
        titleAccent={data.titleAccent}
        description={data.description}
        labelClass="lg:text-[1.6816rem]"
        lineClass="w-12 lg:w-[13.0625rem]"
        titleClass="lg:mt-[0.9438rem] lg:text-[3.8858rem]"
        descriptionClass="font-accent text-[var(--color-text-dark)] lg:mt-[1.0563rem] lg:text-[1.769rem] lg:leading-[2.5625rem]"
      />

      <div className="mx-auto mt-10 grid max-w-2xl gap-12 px-4 sm:px-6 lg:mt-[3.45rem] lg:max-w-none lg:grid-cols-[32.375rem_70.25rem] lg:gap-[3.75rem] lg:pl-[6.875rem] lg:pr-0">
        <div data-reveal className="mx-auto w-full max-w-[32.375rem] p-3 lg:max-w-none lg:p-0">
          <div className="relative">
            {/* thin orange outline an even gap outside the photo on all four sides */}
            <span aria-hidden="true" className="pointer-events-none absolute -inset-3 rounded-[2.75rem] border-[0.1875rem] border-[var(--color-primary)] lg:rounded-[3.875rem]" />
            <div className="relative aspect-[518/590] overflow-hidden rounded-[2rem] lg:rounded-[3.125rem]">
              <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 27vw, 518px" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="lg:pt-[0.375rem]">
          <FaqAccordion items={data.items} />
        </div>
      </div>
    </section>
  );
};
