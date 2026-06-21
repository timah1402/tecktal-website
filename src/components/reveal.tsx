"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: string;
  style?: CSSProperties;
};

export function Reveal({ children, as: Tag = "div", className = "", delay, style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
      } ${className}`}
      style={delay ? { ...style, transitionDelay: delay } : style}
    >
      {children}
    </Tag>
  );
}
