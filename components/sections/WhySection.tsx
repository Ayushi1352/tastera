import Image from "next/image";
import type { FeatureItem, WhyData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionSpace } from "@/components/ui/sectionSpace";
import { Icon } from "@/components/ui/Icon";

/** Icon tile on the left, title and text on the right */
const Feature = ({ item, delay, className = "" }: { item: FeatureItem; delay: number; className?: string }) => (
  <li data-reveal data-reveal-delay={delay} className={`flex items-start gap-5 lg:gap-[2rem] ${className}`}>
    <span className="grid size-24 shrink-0 place-items-center rounded-2xl bg-[var(--color-bg-tile)] lg:mt-[0.625rem] lg:h-[8.5625rem] lg:w-[9.125rem] lg:rounded-[1.125rem]">
      <Icon name={item.icon} className="size-14 text-[var(--color-primary)] lg:size-[5.25rem]" strokeWidth={1.6} />
    </span>
    <div>
      <h3 className="font-heading text-xl font-bold leading-tight text-[var(--color-heading)] lg:text-[2.231rem] lg:leading-none">{item.title}</h3>
      <p className="mt-2 font-accent text-base leading-relaxed text-[var(--color-text)] lg:mt-[1.15rem] lg:max-w-[var(--text-w)] lg:text-[1.5956rem] lg:leading-[2.125rem]">{item.text}</p>
    </div>
  </li>
);

/** Thin grey rule with a short orange piece, between the two points of a column */
const Divider = () => (
  <li aria-hidden="true" className="relative hidden h-[0.3125rem] w-[13.875rem] lg:ml-[11.0625rem] lg:mt-[3.975rem] lg:block">
    <span className="absolute inset-x-0 top-1/2 h-[0.1875rem] -translate-y-1/2 bg-[var(--color-border-light)]" />
    <span className="absolute inset-y-0 left-[4.375rem] w-[4.375rem] bg-[var(--color-primary-strong)]" />
  </li>
);

/** Title; two points either side of a photo in an orange arch frame */
export const WhySection = ({ data }: { data?: WhyData }) => {
  if (!data) return null;
  const half = Math.ceil(data.features.length / 2);
  const columns = [data.features.slice(0, half), data.features.slice(half)];

  return (
    <section id={data.id} className={`scroll-mt-[4.5rem] bg-[var(--color-bg-main)] lg:scroll-mt-[6.5rem] ${sectionSpace}`}>
      <SectionHeading
        label={data.label}
        titleTop={data.titleTop}
        titleAccent={data.titleAccent}
        description={data.description}
        labelClass="lg:text-[1.8516rem]"
        lineClass="w-12 lg:w-[6.125rem]"
        titleClass="lg:mt-[1.1813rem] lg:text-[3.8531rem]"
        descriptionClass="font-accent lg:mt-[1.1125rem] lg:text-[1.8647rem] lg:leading-[2.5625rem]"
      />

      <div className="mx-auto mt-10 grid max-w-2xl gap-10 px-4 sm:px-6 lg:mt-[1.1688rem] lg:max-w-none lg:grid-cols-[37.8125rem_34.25rem_1fr] lg:gap-0 lg:pl-[4.625rem] lg:pr-0">
        {/* the photo sits in the middle on desktop, under the points on phones and tablets */}
        <div data-reveal className="mx-auto w-full max-w-[22rem] rounded-t-full border-[0.1875rem] border-[var(--color-primary)] px-[0.5rem] pt-[0.6875rem] pb-[0.5rem] max-lg:order-last lg:col-start-2 lg:row-start-1 lg:h-[37.6875rem] lg:max-w-none lg:border-[0.25rem] lg:px-[0.5rem] lg:pb-[0.5625rem] lg:pt-[0.625rem]">
          <div className="relative aspect-[523/577] overflow-hidden rounded-b-[0.625rem] rounded-t-full lg:aspect-auto lg:h-full">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 28vw, 22rem" className="object-cover" />
          </div>
        </div>

        {columns.map((items, column) => (
          <ul
            key={column}
            // the left column's text is narrower, so the line breaks match the design
            style={{ "--text-w": column === 0 ? "24rem" : "25rem" } as React.CSSProperties}
            className={`grid gap-8 lg:block lg:pt-[5.2688rem] lg:row-start-1 ${column === 0 ? "lg:col-start-1" : "lg:col-start-3 lg:pl-[3.75rem]"}`}
          >
            {items.map((item, index) => (
              <FeatureGroup key={item.id} item={item} index={index} delay={(column * 2 + index) * 90} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

/** One point, with the divider before every point but the first */
const FeatureGroup = ({ item, index, delay }: { item: FeatureItem; index: number; delay: number }) => (
  <>
    {index > 0 && <Divider />}
    <Feature item={item} delay={delay} className={index > 0 ? "lg:mt-[4.3313rem]" : ""} />
  </>
);
