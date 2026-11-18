import Image from "next/image";
import type { CompanyData, ContactData, ContactFormData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { CutleryArt } from "@/components/ui/LineArt";
import { ReservationForm } from "@/components/sections/ReservationForm";
import { sectionSpace } from "@/components/ui/sectionSpace";

type Props = {
  data?: ContactData;
  form?: ContactFormData;
  company: CompanyData;
};

/** Centred title; contact details beside an orange bar, the dining-room photo, then the dark booking panel */
export const ContactSection = ({ data, form, company }: Props) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative isolate scroll-mt-[4.5rem] bg-[var(--color-bg-main)] lg:scroll-mt-[6.5rem] ${sectionSpace}`}>
      {/* faint fork and knife drawing beside the title */}
      <CutleryArt className="pointer-events-none absolute left-[106rem] top-[5.3375rem] -z-10 hidden w-[9rem] text-[var(--color-deco-line)] lg:block" />
      <SectionHeading
        label={data.label}
        titleTop={data.titleTop}
        titleAccent={data.titleAccent}
        description={data.description}
        labelClass="text-base lg:text-[1.7491rem]"
        lineClass="w-10 lg:w-[6.5625rem]"
        titleClass="lg:mt-[1.025rem] lg:text-[3.7428rem]"
        descriptionClass="font-accent text-[var(--color-text-dark)] lg:mt-[0.8063rem] lg:text-[1.7471rem] lg:leading-[2.5625rem]"
      />

      <div id={data.formId} className="mx-auto mt-12 grid max-w-2xl scroll-mt-[4.5rem] gap-12 px-4 sm:px-6 lg:mt-[3.0125rem] lg:h-[38.375rem] lg:max-w-none lg:scroll-mt-[8rem] lg:grid-cols-[31.0625rem_29.5625rem_52.25rem] lg:gap-0 lg:pl-[3.75rem] lg:pr-0">
        {/* contact details */}
        <div data-reveal className="relative pl-6 lg:pl-[3.1875rem] lg:pt-[0.975rem]">
          <span aria-hidden="true" className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-1 bg-[var(--color-primary-strong)] lg:top-[1.375rem] lg:h-[32.3125rem] lg:w-[0.375rem]" />
          <h3 className="font-heading text-3xl font-bold leading-tight text-[var(--color-heading)] lg:text-[2.9rem] lg:leading-none">{data.infoTitle}</h3>
          <span aria-hidden="true" className="mt-4 block h-1 w-16 bg-[var(--color-primary-strong)] lg:mt-[1.875rem] lg:h-[0.375rem] lg:w-[5rem]" />
          <p className="mt-4 max-w-md font-accent text-base leading-relaxed text-[var(--color-text-dark)] lg:mt-[1.0938rem] lg:max-w-[25.5rem] lg:text-[1.557rem] lg:leading-[2.0938rem]">{data.infoText}</p>
          <ul className="mt-6 grid gap-5 lg:mt-[1.6875rem] lg:gap-[1.5rem]">
            {company.contactItems.map((item) => {
              const external = item.url.startsWith("http");
              return (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex w-fit items-center gap-4 lg:gap-[1.9375rem]"
                  >
                    <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-bg-answer)] to-[var(--color-bg-peach)] text-[var(--color-primary-strong)] transition-colors group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-primary)] group-hover:text-[var(--color-white)] lg:h-[5.25rem] lg:w-[5.5rem] lg:rounded-[0.875rem]">
                      <Icon name={item.icon} className="size-6 lg:size-[2.5rem]" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block font-heading text-lg font-bold text-[var(--color-heading)] lg:text-[1.5346rem] lg:leading-[1.875rem]">{item.title}</span>
                      <span className="block font-accent text-base leading-snug text-[var(--color-text-dark)] transition-colors group-hover:text-[var(--color-primary)] lg:text-[1.375rem] lg:leading-[1.75rem]">
                        {item.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* dining-room photo with a thin orange outline along its top, right side and bottom */}
        <div data-reveal className="relative z-10 max-lg:mx-auto max-lg:w-full max-lg:max-w-[29.5625rem]">
          <div className="relative aspect-[473/602] overflow-hidden rounded-br-[4.375rem] rounded-tl-[6.625rem] lg:aspect-auto lg:h-[37.625rem]">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 25vw, 473px" className="object-cover" />
          </div>
          <svg aria-hidden="true" viewBox="0 0 485 614" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-[-0.0625rem] h-[calc(100%+0.75rem)] w-[calc(100%+0.75rem)] overflow-visible text-[var(--color-primary)]">
            <path d="M104 1.5H482.5V532.5a80 80 0 0 1-80 80H0" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>

        {/* booking panel: the dining room, blurred and darkened, behind the form */}
        <div data-reveal className="relative isolate overflow-hidden rounded-3xl px-5 pb-8 pt-7 text-[var(--color-white)] sm:px-8 lg:-ml-[3rem] lg:mt-[0.4375rem] lg:h-[36.25rem] lg:rounded-l-none lg:rounded-r-[2.5rem] lg:pb-0 lg:pl-[6.75rem] lg:pr-0 lg:pt-[2.25rem]">
          <Image src={data.image} alt="" fill sizes="50vw" quality={40} className="-z-20 scale-125 object-cover blur-[1.25rem]" />
          <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-black-70)] to-[var(--color-black-85)]" />

          <div className="flex items-center gap-4 lg:ml-[0.9375rem] lg:gap-0">
            <Icon name={data.formIcon} className="size-14 shrink-0 text-[var(--color-primary)] lg:size-[6.5rem]" />
            <span aria-hidden="true" className="hidden h-[5.625rem] w-[0.125rem] shrink-0 bg-[var(--color-white-60)] sm:block lg:ml-[1rem]" />
            <div className="lg:ml-[1.875rem]">
              <h3 className="font-heading text-2xl font-bold leading-tight lg:text-[2.5594rem] lg:leading-none">{data.formTitle}</h3>
              <p className="mt-1 font-accent text-sm text-[var(--color-white-90)] lg:mt-[0.875rem] lg:text-[1.2595rem] lg:leading-none">{data.formText}</p>
            </div>
          </div>
          <ReservationForm data={form} />
        </div>
      </div>
    </section>
  );
};
