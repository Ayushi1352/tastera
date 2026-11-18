import Image from "next/image";
import type { HeroData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { buttonArrow, buttonClass } from "@/components/ui/buttonStyles";
import { ChefHatArt } from "@/components/ui/LineArt";

/** Line drawings over the dark side of the photo (desktop only): an orange chef's hat above the kicker, and a fork and knife leaning in from the left edge */
const HeroDecor = () => (
  <>
    <ChefHatArt className="pointer-events-none absolute left-[6.5625rem] top-[5.875rem] -z-10 hidden w-[9.625rem] text-[var(--color-hero-accent)] opacity-75 lg:block" />
    <svg
      aria-hidden="true"
      viewBox="0 0 120 420"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
      className="pointer-events-none absolute left-0 top-[20rem] -z-10 hidden h-[26.25rem] w-[7.5rem] text-[var(--color-white)] opacity-35 lg:block"
    >
      {/* fork: four tines, neck, handle */}
      <path vectorEffect="non-scaling-stroke" transform="translate(14 0) rotate(21) scale(1.4)" d="M0 6a4 4 0 0 1 8 0V70h6V6a4 4 0 0 1 8 0V70h6V6a4 4 0 0 1 8 0V70h6V6a4 4 0 0 1 8 0V86q0 22-16 30V300a6 6 0 0 1-12 0V116Q0 108 0 86Z" />
      {/* knife: rounded tip, blade edge, handle */}
      <path vectorEffect="non-scaling-stroke" transform="translate(84 152) rotate(21) scale(1.4)" d="M2 150V22Q2 0 16 1Q26 3 24 34L22 150ZM5 156H21V340a8 8 0 0 1-16 0Z" />
    </svg>
  </>
);

/** Dark slate banner: spaced-out kicker, big serif headline, orange rule, subtitle and button on the left; the plated dish fills the right */
export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate flex min-h-[36rem] scroll-mt-[4.5rem] items-center overflow-hidden bg-[var(--color-bg-hero)] sm:min-h-[40rem] lg:block lg:h-[56.625rem] lg:min-h-0 lg:scroll-mt-[6.5rem]">
      <Image
        src={data.image}
        alt={data.imageAlt}
        fill
        preload
        quality={90}
        sizes="(min-width: 1920px) 1920px, 100vw"
        className="-z-20 object-cover object-[78%_center] lg:object-right"
      />
      <HeroDecor />
      {/* phones and tablets: the dish sits behind the text, so a dark fade keeps the headline readable */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-black-85)] via-[var(--color-black-60)] to-[var(--color-black-40)] lg:hidden" />

      <div className="w-full px-4 py-16 sm:px-6 lg:px-0 lg:py-0 lg:pl-[10.5rem] lg:pt-[13.1375rem]">
        <p className="font-heading text-xs font-medium uppercase leading-none tracking-[0.45em] text-[var(--color-white)] sm:text-base lg:text-[1.875rem] lg:tracking-[0.546em]">{data.kicker}</p>
        <h1 className="mt-4 font-display font-bold uppercase leading-none lg:mt-[0.2938rem]">
          <span className="block text-[clamp(2.5rem,13.5vw,3.25rem)] text-[var(--color-white)] sm:text-[4.75rem] lg:text-[7.5625rem]">{data.titleTop}</span>
          <span className="mt-1 block text-[clamp(3.25rem,17.5vw,4.25rem)] text-[var(--color-hero-accent)] sm:text-[6rem] lg:-mt-[1.1938rem] lg:text-[9.6875rem]">{data.titleAccent}</span>
        </h1>
        <span aria-hidden="true" className="mt-5 block h-[0.3125rem] w-20 bg-[var(--color-hero-accent)] lg:mt-[1.7rem] lg:h-[0.4375rem] lg:w-[7.9375rem]" />
        <p className="mt-6 font-heading text-xs font-medium uppercase leading-none tracking-[0.35em] text-[var(--color-white)] sm:text-sm lg:mt-[2.4375rem] lg:text-[1.5625rem] lg:tracking-[0.415em]">{data.subtitle}</p>
        <a
          href={data.buttonUrl}
          className={`${buttonClass} mt-8 h-14 gap-5 rounded-[0.1875rem] bg-[var(--color-hero-button)] px-7 font-heading text-base font-semibold uppercase lg:mt-[3.3125rem] lg:h-[4.5625rem] lg:w-[20.5rem] lg:gap-[2.3rem] lg:px-0 lg:text-[1.4375rem]`}
        >
          {data.buttonText}
          <Icon name="LuMoveRight" className={`${buttonArrow} size-9 lg:size-[3.0625rem]`} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
};
