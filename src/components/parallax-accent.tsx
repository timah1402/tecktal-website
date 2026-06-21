"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type ParallaxAccentProps = {
  shape: "ring" | "sq" | "dot";
  factor: number;
  style: CSSProperties;
};

const SHAPE_CLASS: Record<ParallaxAccentProps["shape"], string> = {
  ring: "rounded-full border-2 border-current",
  sq: "rounded-[6px]",
  dot: "rounded-full bg-current",
};

export function ParallaxAccent({ shape, factor, style }: ParallaxAccentProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    function update() {
      if (!el) return;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const offset = center - vh / 2;
      el.style.transform = `translate3d(0, ${(-offset * factor).toFixed(1)}px, 0)`;
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [factor]);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`accent absolute z-0 pointer-events-none will-change-transform ${SHAPE_CLASS[shape]}`}
      style={style}
    />
  );
}
