import Image from "next/image";
import type { FaqData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { sectionSpace } from "@/components/ui/sectionSpace";

/** Centred title; the dish photo with a thin orange outline on the left, the questions on the right */
export const FaqSection = ({ data }: { data?: FaqData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative isolate scroll-mt-[4.5rem] bg-[var(--color-bg-main)] lg:scroll-mt-[6.5rem] ${sectionSpace}`}>
      {/* faint basil leaves in the bottom right corner */}
      <Image
        src={data.decoImage.src}
        alt=""
        width={data.decoImage.width}
        height={data.decoImage.height}
        sizes="224px"
        className="pointer-events-none absolute left-[106rem] bottom-[1.3125rem] -z-10 hidden w-[14rem] lg:block"
      />
      <SectionHeading
        label={data.label}
        titleTop={data.titleTop}
        titleAccent={data.titleAccent}
        description={data.description}
        labelClass="text-base lg:text-[1.6816rem]"
        lineClass="w-12 lg:w-[13.0625rem]"
        titleClass="lg:mt-[0.9438rem] lg:text-[3.8858rem]"
        descriptionClass="font-accent text-[var(--color-text-dark)] lg:mt-[1.0563rem] lg:text-[1.769rem] lg:leading-[2.5625rem]"
      />

      <div className="mx-auto mt-12 grid max-w-2xl gap-12 px-4 sm:px-6 lg:mt-[3.45rem] lg:max-w-none lg:grid-cols-[32.375rem_70.25rem] lg:gap-[3.75rem] lg:pl-[6.875rem] lg:pr-0">
        <div data-reveal className="relative mx-auto w-full max-w-[32.375rem] pl-3 lg:max-w-none lg:pl-0">
          <svg aria-hidden="true" viewBox="0 0 532 615" className="pointer-events-none absolute left-0 top-[-0.75rem] h-[calc(100%+1.5rem)] w-[calc(100%+0.9375rem)] -translate-x-[0.9375rem] overflow-visible text-[var(--color-primary)] max-lg:hidden" preserveAspectRatio="none">
            <path d="M110 1.5H70A68.5 68.5 0 0 0 1.5 70V545A68.5 68.5 0 0 0 70 613.5H475" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
          <div className="relative aspect-[518/590] overflow-hidden rounded-[2rem] lg:rounded-[3.125rem]">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 27vw, 518px" className="object-cover" />
          </div>
        </div>
        <div className="lg:pt-[0.375rem]">
          <FaqAccordion items={data.items} />
        </div>
      </div>
    </section>
  );
};
