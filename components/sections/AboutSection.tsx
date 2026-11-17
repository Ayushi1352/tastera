import Image from "next/image";
import type { AboutData, FeatureItem } from "@/types/templates.types";
import { sectionSpace } from "@/components/ui/sectionSpace";

/** Icon tile, thin divider, then title and text (the two points under the About text) */
const Feature = ({ item }: { item: FeatureItem }) => (
  <li className="flex items-center gap-5 lg:gap-[2.5625rem]">
    <span className="grid size-24 shrink-0 place-items-center rounded-2xl bg-[var(--color-bg-tile)] lg:h-[8.1875rem] lg:w-[8.5rem] lg:rounded-[1rem]">
      <Image src={item.icon.src} alt="" width={item.icon.width} height={item.icon.height} sizes="110px" className="h-auto w-[4.75rem] lg:w-[var(--icon-w)]" style={{ "--icon-w": `${item.icon.width / 16}rem` } as React.CSSProperties} />
    </span>
    <span aria-hidden="true" className="hidden h-[7.125rem] w-[0.1875rem] shrink-0 bg-[var(--color-divider)] sm:block" />
    <div>
      <h3 className="font-heading text-xl font-bold leading-tight text-[var(--color-heading)] lg:text-[2rem] lg:leading-none">{item.title}</h3>
      <p className="mt-1.5 text-base leading-relaxed text-[var(--color-text-soft)] lg:mt-[0.5625rem] lg:max-w-[33.5rem] lg:text-[1.58rem] lg:leading-[2.1875rem]">{item.text}</p>
    </div>
  </li>
);

/** Label badge, two-line title, text and two points on the left; the dish in a white photo frame on the right */
export const AboutSection = ({ data }: { data?: AboutData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative isolate scroll-mt-[4.5rem] bg-[var(--color-bg-main)] lg:scroll-mt-[6.5rem] ${sectionSpace}`}>
      <div className="mx-auto grid max-w-2xl gap-12 px-4 sm:px-6 lg:max-w-none lg:grid-cols-[52.625rem_57rem] lg:gap-0 lg:pl-[5.6875rem] lg:pr-0">
        <div data-reveal>
          <p className="flex items-center gap-[1.125rem]">
            <span className="inline-grid h-10 place-items-center rounded-md bg-[var(--color-badge)] px-4 font-heading text-sm font-bold uppercase text-[var(--color-white)] lg:h-[3.375rem] lg:w-[10.875rem] lg:rounded-[0.375rem] lg:px-0 lg:text-[1.4125rem]">
              {data.label}
            </span>
            <span aria-hidden="true" className="h-[0.1875rem] w-16 bg-[var(--color-primary)] lg:h-[0.25rem] lg:w-[6.875rem]" />
          </p>
          <h2 className="mt-5 font-heading text-[2.375rem] font-bold leading-[1.12] text-[var(--color-heading)] sm:text-5xl lg:mt-[1.5188rem] lg:text-[4.2712rem] lg:leading-[4.75rem]">
            {data.titleTop} <span className="block text-[var(--color-primary)]">{data.titleAccent}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-text-soft)] sm:text-lg lg:mt-[2.0438rem] lg:max-w-[49.5rem] lg:text-[1.6015rem] lg:leading-[2.3125rem]">{data.description}</p>
          <ul className="mt-8 grid gap-6 lg:mt-[2.125rem] lg:gap-[2.125rem]">
            {data.features.map((item) => (
              <Feature key={item.id} item={item} />
            ))}
          </ul>
        </div>

        <div data-reveal className="relative bg-[var(--color-white)] p-2.5 shadow-[0_0.75rem_2rem_-0.5rem_var(--color-shadow-photo)] lg:ml-[-0.0625rem] lg:mt-[0.625rem] lg:h-[43.25rem] lg:w-[57rem] lg:p-[0.875rem]">
          {/* faint chef's hat drawing peeking out behind the photo frame */}
          <Image
            src={data.decoImage.src}
            alt=""
            width={data.decoImage.width}
            height={data.decoImage.height}
            sizes="170px"
            className="pointer-events-none absolute -left-[11.4375rem] -top-[5.1875rem] -z-10 hidden w-[10.5rem] lg:block"
          />
          <div className="relative aspect-[885/665] w-full">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 47vw, (min-width: 672px) 640px, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
