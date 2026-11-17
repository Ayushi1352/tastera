import Image from "next/image";
import type { MenusData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionSpace } from "@/components/ui/sectionSpace";

/** Centred title, then four dish cards in a row (photo, name, short orange rule, description) */
export const MenusSection = ({ data }: { data?: MenusData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`scroll-mt-[4.5rem] bg-[var(--color-bg-main)] lg:scroll-mt-[6.5rem] ${sectionSpace}`}>
      <SectionHeading
        label={data.label}
        titleTop={data.titleTop}
        titleAccent={data.titleAccent}
        description={data.description}
        descriptionClass="font-sans text-[var(--color-text-muted)] lg:mt-[1.2438rem] lg:text-[1.9198rem] lg:leading-[2.8125rem]"
      />

      <ul className="mx-auto mt-10 grid max-w-2xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:mt-[3.1375rem] lg:max-w-none lg:grid-cols-4 lg:gap-[1.5rem] lg:px-[2.0625rem]">
        {data.items.map((item, index) => (
          <li
            key={item.id}
            data-reveal
            data-reveal-delay={index * 90}
            className="group rounded-[1.25rem] bg-[var(--color-white)] p-[0.375rem] shadow-[0_0.625rem_1.75rem_-0.5rem_var(--color-shadow-card)] transition-transform duration-500 hover:-translate-y-1 lg:rounded-[1.375rem]"
          >
            <div className="relative aspect-[433/261] overflow-hidden rounded-[0.875rem]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 92vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="px-5 pb-7 pt-5 lg:px-[2rem] lg:pb-[2.2688rem] lg:pt-[1.3rem]">
              <h3 className="font-heading text-xl font-bold leading-tight text-[var(--color-heading)] lg:text-[1.6465rem] lg:leading-none">{item.title}</h3>
              <span aria-hidden="true" className="mt-4 block h-1 w-16 bg-[var(--color-primary)] lg:mt-[1.4625rem] lg:h-[0.3125rem] lg:w-[5rem]" />
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--color-text-muted)] lg:mt-[0.79rem] lg:text-[1.3125rem] lg:leading-[1.875rem]">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
