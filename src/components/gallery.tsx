"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

const SLIDE_SOURCES = [
  "/assets/tutor/tutor-home.png",
  "/assets/tutor/tutor-solver.png",
  "/assets/tutor/tutor-visualize.png",
  "/assets/tutor/tutor-research.png",
  "/assets/tutor/tutor-learning.png",
  "/assets/tutor/tutor-questions.png",
];

const INTERVAL_MS = 4500;

export function Gallery() {
  const t = useTranslations("Gallery");
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slides = SLIDE_SOURCES.map((src, i) => ({ src, alt: t(`slides.${i}`) }));

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDE_SOURCES.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active]);

  function goTo(index: number) {
    setActive(index);
  }

  return (
    <section className="relative left-1/2 ml-[-50vw] w-screen overflow-hidden bg-gallery-base py-20 sm:py-26" id="gallery">
      <div
        aria-hidden
        className="absolute inset-0 z-1 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 12% 20%, rgba(11,93,166,0.35), transparent 60%), radial-gradient(55% 50% at 90% 85%, rgba(232,82,30,0.28), transparent 60%), radial-gradient(40% 40% at 80% 10%, rgba(14,158,52,0.22), transparent 60%)",
        }}
      />
      <div className="relative z-2 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 sm:px-8 min-[941px]:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white/72 before:block before:h-0.5 before:w-5.5 before:bg-current before:content-['']">
            {t("kicker")}
          </span>
          <h2 className="mt-3.5 max-w-130 font-display text-[clamp(30px,4.2vw,54px)] font-semibold leading-[1.04] tracking-[-0.02em] text-white">
            {t("title")}
          </h2>
          <p className="mt-3.5 max-w-110 text-lg text-white/78">{t("subtitle")}</p>
          <div className="mt-6.5 flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={t("slideLabel", { number: i + 1 })}
                onClick={() => goTo(i)}
                className={`h-1 w-7.5 rounded-sm border-none p-0 transition-colors duration-400 ease-in-out ${i === active ? "bg-brand-amber" : "bg-white/30"}`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal as="div" className="relative aspect-16/9 w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#f1f1ee] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-x-0 top-0 z-2 flex h-9 items-center gap-1.75 border-b border-[#e6e6e0] bg-[#f1f1ee] px-4">
            <i className="inline-block h-2.5 w-2.5 rounded-full bg-[#cdcdc6]" />
            <i className="inline-block h-2.5 w-2.5 rounded-full bg-[#cdcdc6]" />
            <i className="inline-block h-2.5 w-2.5 rounded-full bg-[#cdcdc6]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 top-9 bg-white">
            {slides.map((slide, i) => (
              <div key={slide.src} className={`absolute inset-0 transition-opacity duration-1600 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}>
                <Image src={slide.src} alt={slide.alt} fill sizes="(min-width: 941px) 60vw, 100vw" className="object-cover object-top" priority={i === 0} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
