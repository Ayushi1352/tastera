"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import type { GalleryData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";

/*
  Desktop collage of the design: a tall photo, two rows of two in the middle (each row split a little differently),
  then a tall photo. The class of each photo, in the order of templates.json.
*/
const tiles = [
  "lg:row-span-2 lg:h-[36.625rem] lg:w-[32.3125rem]",
  "lg:h-[18.3125rem] lg:w-[27.75rem]",
  "lg:h-[18.3125rem] lg:w-[25.875rem]",
  "lg:h-[17.5625rem] lg:w-[27.25rem]",
  "lg:h-[17.5625rem] lg:w-[26.375rem]",
  "lg:row-span-2 lg:h-[36.625rem] lg:w-[25.375rem]",
];

const ViewerButton = ({ label, className, onClick, children }: { label: string; className: string; onClick: () => void; children: ReactNode }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className={`absolute grid size-11 place-items-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] backdrop-blur transition-colors hover:bg-[var(--color-primary)] ${className}`}
  >
    {children}
  </button>
);

/** The photo collage; each photo opens in a full-screen viewer */
export const GalleryGrid = ({ data }: { data: GalleryData }) => {
  const { items } = data;
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const show = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const step = (delta: number) => setIndex((i) => (i === null ? i : (i + delta + items.length) % items.length));
  const item = index === null ? null : items[index];

  const tile = (i: number) => {
    const photo = items[i];
    if (!photo) return null;
    return (
      <button
        key={photo.id}
        type="button"
        onClick={() => show(i)}
        aria-label={fill(data.openLabel, { title: photo.title })}
        data-reveal
        data-reveal-delay={i * 70}
        className={`group relative aspect-[4/3] shrink-0 cursor-zoom-in overflow-hidden rounded-2xl bg-[var(--color-bg-hero)] lg:aspect-auto lg:rounded-[1.375rem] ${tiles[i] ?? ""}`}
      >
        <Image quality={90} src={photo.image} alt="" fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
        <span className="absolute inset-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[var(--color-black-70)] via-transparent to-transparent p-3 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 lg:p-[1.25rem]">
          <span className="font-heading text-sm font-bold text-[var(--color-white)] max-sm:hidden lg:text-[1.375rem]">{photo.title}</span>
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-white)] max-sm:ml-auto lg:size-[2.75rem]">
            <Icon name="LuPlus" className="size-[1.125rem] lg:size-[1.375rem]" strokeWidth={2.4} />
          </span>
        </span>
      </button>
    );
  };

  return (
    <>
      {/* phones and tablets: a simple grid; desktop: tall photo, middle block of two rows, tall photo */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:flex lg:gap-[0.875rem]">
        {tile(0)}
        <div className="contents lg:flex lg:flex-col lg:gap-[0.8125rem]">
          <div className="contents lg:flex lg:gap-[0.9375rem]">
            {tile(1)}
            {tile(2)}
          </div>
          <div className="contents lg:flex lg:gap-[0.9375rem]">
            {tile(3)}
            {tile(4)}
          </div>
        </div>
        <div className="contents lg:block lg:pl-[0.0625rem]">{tile(5)}</div>
      </div>

      <dialog
        ref={dialog}
        aria-label={data.viewerLabel}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="m-auto h-[min(85dvh,56.25rem)] w-[calc(100%-2rem)] max-w-5xl bg-transparent p-0 backdrop:bg-[var(--color-black-85)] open:transition-[opacity,transform] open:duration-500 open:ease-[cubic-bezier(0.22,1,0.36,1)] open:starting:translate-y-5 open:starting:opacity-0"
      >
        {item && index !== null && (
          <figure className="relative flex h-full flex-col">
            <div className="relative flex-1">
              <Image quality={90} src={item.image} alt={item.title} fill sizes="100vw" className="object-contain" />
            </div>
            <figcaption className="pt-4 text-center font-heading text-xl font-bold text-[var(--color-white)]">
              {item.title}
              <span className="ml-3 font-sans text-xs font-normal text-[var(--color-white-60)]">
                {index + 1} / {items.length}
              </span>
            </figcaption>
            <ViewerButton label={data.closeLabel} className="right-2 top-2" onClick={() => dialog.current?.close()}>
              <Icon name="LuX" className="size-5" />
            </ViewerButton>
            <ViewerButton label={data.previousLabel} className="left-2 top-1/2 -translate-y-1/2" onClick={() => step(-1)}>
              <Icon name="LuChevronLeft" className="size-5" strokeWidth={2.2} />
            </ViewerButton>
            <ViewerButton label={data.nextLabel} className="right-2 top-1/2 -translate-y-1/2" onClick={() => step(1)}>
              <Icon name="LuChevronRight" className="size-5" strokeWidth={2.2} />
            </ViewerButton>
          </figure>
        )}
      </dialog>
    </>
  );
};
