"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay > 0) {
      el.style.setProperty("--reveal-delay", `${delay}ms`);
    }

    if (staggerChildren > 0) {
      const kids = el.children;
      for (let i = 0; i < kids.length; i++) {
        (kids[i] as HTMLElement).style.setProperty(
          "--stagger",
          `${delay + i * staggerChildren}ms`
        );
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, staggerChildren]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
