"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function StickyNav({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        el.classList.add("nav-scrolled");
      } else {
        el.classList.remove("nav-scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={ref} className="sticky-nav">
      {children}
    </header>
  );
}
