"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.removeAttribute("data-reveal-state"));
      return;
    }

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.setAttribute("data-reveal-state", "visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.92) {
        el.setAttribute("data-reveal-state", "pending");
        observer.observe(el);
      } else {
        el.removeAttribute("data-reveal-state");
      }
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
