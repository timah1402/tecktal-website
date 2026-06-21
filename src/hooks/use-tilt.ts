"use client";

import { useEffect, useRef } from "react";

/** Rotates `targetRef` element up to `maxDeg` as the pointer moves over `containerRef`. */
export function useTilt<C extends HTMLElement, T extends HTMLElement>(maxDeg: number) {
  const containerRef = useRef<C | null>(null);
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function onMove(e: MouseEvent) {
      if (!container || !target) return;
      const r = container.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.style.transform = `rotateY(${(px * maxDeg).toFixed(2)}deg) rotateX(${(-py * maxDeg).toFixed(2)}deg)`;
    }
    function onLeave() {
      if (!target) return;
      target.style.transform = "rotateY(0deg) rotateX(0deg)";
    }

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [maxDeg]);

  return { containerRef, targetRef };
}
