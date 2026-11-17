"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { TestimonialItem, TestimonialsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";

const AUTOPLAY_MS = 6000;

const Card = ({ item, rating, ratingLabel, featured }: { item: TestimonialItem; rating: number; ratingLabel: string; featured: boolean }) => (
  <blockquote
    className={`flex h-full flex-col rounded-[1.625rem] bg-[var(--color-white)] px-6 pb-8 pt-7 transition-shadow duration-500 lg:px-[2.9375rem] lg:pb-[2.4375rem] lg:pt-[2.1875rem] ${
      featured ? "border-2 border-[var(--color-primary)] shadow-[0_1rem_2.5rem_-1.25rem_var(--color-shadow-card)]" : "shadow-[0_0.75rem_2.25rem_-1rem_var(--color-shadow-soft)]"
    }`}
  >
    <Icon name="RiDoubleQuotesL" className="-ml-[0.3rem] size-12 text-[var(--color-primary-strong)] lg:-ml-[0.55rem] lg:-mt-[0.95rem] lg:size-[4.75rem]" />
    <p className="mt-3 flex-1 font-accent text-lg leading-relaxed text-[var(--color-text-dark)] lg:-mt-[0.35rem] lg:text-[1.8028rem] lg:leading-[2.4688rem]">{item.quote}</p>
    <span aria-hidden="true" className="mt-6 block h-1 w-[5.25rem] bg-[var(--color-primary-strong)] lg:mt-[1.85rem] lg:h-[0.25rem]" />
    <footer className="mt-6 flex items-center gap-5 lg:mt-[2.6875rem] lg:gap-[2.1875rem]">
      <span className="relative size-20 shrink-0 overflow-hidden rounded-full lg:size-[9.0625rem]">
        <Image src={item.image} alt="" fill quality={90} sizes="(min-width: 1024px) 145px, 80px" className="object-cover" />
      </span>
      <span>
        <cite className="block font-heading text-lg font-bold not-italic leading-tight text-[var(--color-heading)] lg:text-[1.6293rem] lg:leading-none">{item.name}</cite>
        <span className="mt-1 block font-accent text-base text-[var(--color-text-dark)] lg:mt-[0.9rem] lg:text-[1.6314rem] lg:leading-none">{item.role}</span>
        <span role="img" aria-label={ratingLabel} className="mt-2 flex gap-1.5 text-[var(--color-primary-strong)] lg:mt-[1.4rem] lg:gap-[0.5625rem]">
          {Array.from({ length: rating }, (_, n) => (
            <Icon key={n} name="FaStar" className="size-4 lg:size-[1.4375rem]" />
          ))}
        </span>
      </span>
    </footer>
  </blockquote>
);

const ArrowButton = ({ label, icon, onClick, className }: { label: string; icon: string; onClick: () => void; className: string }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className={`grid size-11 shrink-0 place-items-center rounded-full bg-[var(--color-bg-arrow)] text-[var(--color-white)] shadow-[0_0.5rem_1rem_-0.5rem_var(--color-black-60)] transition-colors hover:bg-[var(--color-primary)] lg:absolute lg:top-[13.125rem] lg:size-[3.5625rem] ${className}`}
  >
    <Icon name={icon} className="size-5 lg:size-[1.6rem]" strokeWidth={2.4} />
  </button>
);

/**
 * Each dot features one review in the middle (orange border). Desktop shows it between its neighbours (three cards),
 * phones and tablets show only the featured card. Moves on by itself and waits while the visitor hovers it.
 */
export const TestimonialSlider = ({ data }: { data: TestimonialsData }) => {
  const { items } = data;
  const [index, setIndex] = useState(Math.min(data.startIndex, items.length - 1));
  const [paused, setPaused] = useState(false);
  const at = (offset: number) => items[(index + offset + items.length) % items.length];
  const ratingLabel = fill(data.ratingLabel, { rating: data.rating });
  const go = (delta: number) => setIndex((current) => (current + delta + items.length) % items.length);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % items.length), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, items.length]);

  const fade = "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-5 starting:opacity-0";

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative">
      <div className="mx-auto grid max-w-[36rem] items-center gap-[2.3125rem] lg:max-w-none lg:grid-cols-[32.75rem_34.5rem_32.75rem] lg:pl-[7.8125rem]" aria-live="polite">
        {[-1, 0, 1].map((offset) => {
          const item = at(offset);
          return (
            // keyed by review, so a card that changes fades in
            <div key={`${offset}-${item.id}`} className={`${offset === 0 ? "" : "max-lg:hidden"} ${fade}`}>
              <Card item={item} rating={data.rating} ratingLabel={ratingLabel} featured={offset === 0} />
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 lg:mt-[2.3125rem] lg:gap-0">
        <ArrowButton label={data.previousLabel} icon="LuChevronLeft" onClick={() => go(-1)} className="lg:left-[2.0625rem]" />
        <div className="flex items-center gap-[0.875rem]">
          {items.map((item, n) => (
            <button
              key={item.id}
              type="button"
              aria-label={fill(data.showLabel, { name: item.name })}
              aria-current={n === index}
              onClick={() => setIndex(n)}
              className={`rounded-full transition-colors ${n === index ? "size-[1.25rem] bg-[var(--color-primary-strong)]" : "size-[1.0625rem] bg-[var(--color-dot)] hover:bg-[var(--color-primary)]"}`}
            />
          ))}
        </div>
        <ArrowButton label={data.nextLabel} icon="LuChevronRight" onClick={() => go(1)} className="lg:right-[2rem]" />
      </div>
    </div>
  );
};
