import Image from "next/image";
import type { CompanyData, FooterData, LinkItem } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

const heading = "font-heading text-[1.5rem] font-bold leading-tight text-[var(--color-white)] lg:text-[1.915rem] lg:leading-none";
const underline = "mt-3 block h-[0.3125rem] w-[5rem] bg-[var(--color-footer-accent)] lg:mt-[1.275rem] lg:h-[0.375rem]";
const divider = "hidden w-[0.125rem] bg-[var(--color-divider-footer)] lg:mt-[8.1875rem] lg:block lg:h-[17.5rem]";

const LinkList = ({ title, links }: { title: string; links: LinkItem[] }) => (
  <nav aria-label={title}>
    <h2 className={heading}>{title}</h2>
    <span aria-hidden="true" className={underline} />
    <ul className="mt-4 grid gap-2 lg:mt-[1.1438rem] lg:gap-0">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.url}
            className="group inline-flex items-center gap-3 text-base text-[var(--color-text-footer)] transition-colors hover:text-[var(--color-footer-accent)] lg:h-[3.4375rem] lg:gap-[1.25rem] lg:pl-[0.4375rem] lg:text-[1.4958rem]"
          >
            <Icon name="LuChevronRight" className="size-4 text-[var(--color-footer-accent)] transition-transform group-hover:translate-x-0.5 lg:size-[1.4375rem]" strokeWidth={3} />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

// Logo, text and social links; quick links; useful links; contact details; then the copyright line.
export const Footer = async ({ data, company }: { data?: FooterData; company: CompanyData }) => {
  if (!data) return null;
  // the footer lists some of the company contact details (the same ones as the contact section), in its own order
  const contactItems = data.contactIds.flatMap((id) => company.contactItems.filter((item) => item.id === id));
  const copyright = fill(data.copyrightText, { year: await currentYear() });

  return (
    <footer className="bg-gradient-to-b from-[var(--color-bg-footer-top)] to-[var(--color-bg-footer)] to-[23%] text-[var(--color-white)]">
      <div className="grid gap-10 px-4 pb-10 pt-12 sm:grid-cols-2 sm:px-6 lg:h-[32.1875rem] lg:grid-cols-[29.5625rem_0.125rem_20.25rem_0.125rem_21.6875rem_0.125rem_1fr] lg:gap-0 lg:p-0 lg:pl-[10.1875rem]">
        {/* brand */}
        <div className="lg:pt-[5.1875rem]">
          {company.logoLight ? (
            <Image src={company.logoLight} alt={company.logoAlt} width={company.logoWidth} height={company.logoHeight} quality={90} sizes="(min-width: 1024px) 18vw, 220px" className="h-auto w-[13.75rem] lg:ml-[0.3125rem] lg:w-[21.5625rem]" />
          ) : (
            <p className="font-display text-3xl lg:ml-[0.3125rem] lg:text-[3rem]">{company.name}</p>
          )}
          <p className="mt-4 max-w-sm text-base leading-relaxed text-[var(--color-text-footer)] lg:mt-[1.5375rem] lg:max-w-[25rem] lg:text-[1.4696rem] lg:leading-[2.125rem]">{data.description}</p>
          <ul aria-label={data.socialTitle} className="mt-6 flex gap-3 lg:mt-[1.4625rem] lg:gap-[1.1875rem]">
            {data.socialLinks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-full border-2 border-[var(--color-white)] transition-colors duration-300 hover:border-[var(--color-footer-accent)] hover:bg-[var(--color-footer-accent)] lg:size-[3.3125rem] lg:border-[0.125rem]"
                >
                  <Icon name={social.icon} className="size-[1.1rem] lg:size-[1.5rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <span aria-hidden="true" className={divider} />
        <div className="lg:pl-[3.875rem] lg:pt-[7.875rem]">
          <LinkList title={data.quickLinksTitle} links={data.quickLinks} />
        </div>

        <span aria-hidden="true" className={divider} />
        <div className="lg:pl-[3.625rem] lg:pt-[7.875rem]">
          <LinkList title={data.usefulLinksTitle} links={data.usefulLinks} />
        </div>

        <span aria-hidden="true" className={divider} />
        {/* contact details */}
        <div className="lg:pl-[3.8125rem] lg:pt-[7.875rem]">
          <h2 className={heading}>{data.contactTitle}</h2>
          <span aria-hidden="true" className={underline} />
          <ul className="mt-5 grid gap-4 lg:ml-[0.5625rem] lg:mt-[2.3125rem] lg:gap-[1.4375rem]">
            {contactItems.map((item) => {
              const external = item.url.startsWith("http");
              return (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={`${item.title}: ${item.lines.join(" ")}`}
                    className="group flex items-center gap-4 text-base text-[var(--color-text-footer)] transition-colors hover:text-[var(--color-white)] lg:gap-[1.75rem] lg:text-[1.4594rem] lg:leading-[2.0625rem]"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[var(--color-footer-tile)] text-[var(--color-white)] transition-colors group-hover:bg-[var(--color-footer-accent)] lg:h-[3.5625rem] lg:w-[3.75rem] lg:rounded-[0.5rem]">
                      <Icon name={item.icon} className="size-5 lg:size-[1.875rem]" strokeWidth={1.8} />
                    </span>
                    <span>
                      {item.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mx-4 border-t-2 border-[var(--color-white-60)] pb-6 pt-5 sm:mx-6 lg:mx-[5.9375rem] lg:w-[108.125rem] lg:border-t-[0.125rem] lg:pb-[4.1625rem] lg:pt-[1.925rem]">
        <p className="text-sm text-[var(--color-white)] lg:text-[1.5388rem] lg:leading-none">{copyright}</p>
      </div>
    </footer>
  );
};
