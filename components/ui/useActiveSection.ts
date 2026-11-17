"use client";

import { useEffect, useState } from "react";

/** id of the landing page section a link points to ("#about" → "about") */
export const sectionId = (url: string) => url.replace(/^#/, "");

/**
 * Keeps track of the section at the middle of the screen, so its link is shown as the current one.
 * The current link is the last menu section whose top has passed the middle of the screen.
 */
export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const middle = window.innerHeight * 0.5;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= middle) current = id;
      }
      setActive(current);
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return { active, scrolled };
};
