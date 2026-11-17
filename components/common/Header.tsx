"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CompanyData, HeaderData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { buttonClass } from "@/components/ui/buttonStyles";
import { sectionId, useActiveSection } from "@/components/ui/useActiveSection";

export const Header = ({ data, company }: { data?: HeaderData; company: CompanyData }) => {
  const [ids] = useState(() => data?.navLinks.map((link) => sectionId(link.url)) ?? []);
  const { active, scrolled } = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!data) return null;

  /** The logo scrolls back to the top and drops any "#section" from the address bar, without reloading the page */
  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    window.scrollTo({ top: 0 });
    if (window.location.hash) history.pushState(null, "", window.location.pathname + window.location.search);
  };

  // at the top of the page the header is the design's tall white bar; once the page scrolls it gets compact with a shadow
  const compact = scrolled || open;

  return (
    <header className={`sticky top-0 z-40 bg-[var(--color-white)] transition-shadow duration-300 ${compact ? "shadow-[0_0.5rem_1.75rem_-0.75rem_var(--color-shadow-header)]" : ""}`}>
      <div
        className={`flex items-center gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:gap-0 lg:pl-[2.375rem] lg:pr-[1.25rem] ${
          compact ? "h-[4.5rem] lg:h-[6.5rem]" : "h-[4.5rem] sm:h-[5.5rem] lg:h-[10.9375rem]"
        }`}
      >
        <Link href={data.logoUrl} onClick={goHome} aria-label={data.homeLabel} className="shrink-0">
          {/* with no logo image set, the company name stands in for it (an empty src would make the browser re-fetch the page) */}
          {company.logo ? (
            <Image
              src={company.logo}
              alt={company.logoAlt}
              width={company.logoWidth}
              height={company.logoHeight}
              preload
              quality={90}
              sizes="(min-width: 1024px) 17vw, 150px"
              className={`h-auto transition-[width] duration-300 ${compact ? "w-[7.5rem] lg:w-[11.5rem]" : "w-[7.5rem] sm:w-[9.5rem] lg:w-[20.1875rem]"}`}
            />
          ) : (
            <span className="font-display text-2xl text-[var(--color-heading)] lg:text-[2.5rem]">{company.name}</span>
          )}
        </Link>

        <span aria-hidden="true" className={`ml-[3rem] hidden w-[0.125rem] bg-[var(--color-divider-nav)] transition-[height] duration-300 lg:block ${compact ? "h-[3rem]" : "h-[3.625rem]"}`} />

        {/* menu and button sit a little below the middle of the bar, level with the logo's lettering (as in the design) */}
        <div className={`flex flex-1 items-center gap-3 transition-[margin] duration-300 lg:gap-0 ${compact ? "" : "lg:mt-[2.125rem]"}`}>
          <nav aria-label={data.mainNavLabel} className="ml-[2.4375rem] hidden items-center gap-[1.125rem] lg:flex">
            {data.navLinks.map((link) => {
              const current = sectionId(link.url) === active;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  aria-current={current ? "location" : undefined}
                  className={`relative whitespace-nowrap px-[0.875rem] font-nav text-[1.6rem] leading-none transition-colors after:absolute after:inset-x-0 after:top-[calc(100%+1.0625rem)] after:h-[0.1875rem] after:rounded-full after:bg-current after:transition-transform ${
                    current ? "text-[var(--color-primary)] after:scale-x-100" : "text-[var(--color-nav)] after:scale-x-0 hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <a
            href={data.buttonUrl}
            className={`${buttonClass} ml-auto h-11 gap-2 rounded-lg bg-[var(--color-button-light)] px-4 font-nav text-base shadow-[0_0.5rem_1.25rem_-0.75rem_var(--color-shadow-button)] max-sm:hidden lg:h-[3.875rem] lg:w-[14.5rem] lg:gap-[0.875rem] lg:rounded-[0.75rem] lg:px-0 lg:text-[1.6rem]`}
          >
            <Icon name={data.buttonIcon} className="size-5 lg:size-[1.6875rem]" strokeWidth={2} />
            {data.buttonText}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? data.closeMenuLabel : data.openMenuLabel}
            className="ml-auto grid size-11 place-items-center rounded-lg border border-[var(--color-border)] text-[var(--color-heading)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] sm:ml-0 lg:hidden"
          >
            <Icon name={open ? "LuX" : "LuMenu"} className="size-6" />
          </button>
        </div>
      </div>

      {/* phones and tablets: the page behind the open menu is dimmed, a tap on it closes the menu */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 top-[4.5rem] -z-10 bg-[var(--color-black-60)] transition-opacity duration-500 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <nav
        id="mobile-menu"
        aria-label={data.mobileNavLabel}
        // when open it is a panel only as tall as its links, and scrolls if they do not fit on the screen
        className={`absolute inset-x-0 top-full grid max-h-[calc(100dvh-4.5rem)] overflow-hidden border-t border-[var(--color-bg-tile)] bg-[var(--color-white)] transition-[grid-template-rows,opacity] duration-500 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-y-auto">
          <ul className="flex flex-col px-4 py-3 sm:px-6">
            {data.navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-[var(--color-bg-tile)] py-3.5 font-nav text-lg transition-colors hover:text-[var(--color-primary)] ${
                    sectionId(link.url) === active ? "text-[var(--color-primary)]" : "text-[var(--color-nav)]"
                  }`}
                >
                  {link.label}
                  <Icon name="LuChevronRight" className="size-4 text-[var(--color-primary)]" strokeWidth={2.2} />
                </a>
              </li>
            ))}
            <li className="pb-2 pt-5 sm:hidden">
              <a href={data.buttonUrl} onClick={() => setOpen(false)} className={`${buttonClass} h-12 w-full gap-2 rounded-lg bg-[var(--color-button-light)] font-nav text-base`}>
                <Icon name={data.buttonIcon} className="size-5" strokeWidth={2} />
                {data.buttonText}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
