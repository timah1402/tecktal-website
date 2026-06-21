"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ParallaxAccent } from "./parallax-accent";
import { useTilt } from "@/hooks/use-tilt";

const CHIPS = [
  { label: "Smart Solver", color: "bg-brand-orange", className: "top-[9%] left-[14px] [transform:translateZ(80px)]" },
  { label: "Voice Tutor", color: "bg-brand-blue", className: "top-[47%] right-[14px] [transform:translateZ(110px)]" },
  { label: "Deep Research", color: "bg-brand-green", className: "bottom-[10%] left-[14px] [transform:translateZ(95px)]" },
];

export function Hero() {
  const { containerRef, targetRef } = useTilt<HTMLDivElement, HTMLDivElement>(12);
  const t = useTranslations("Hero");

  return (
    <section className="relative px-0 pt-[90px] pb-[76px]" id="top">
      <ParallaxAccent
        shape="ring"
        factor={0.1}
        style={{ color: "var(--color-brand-amber)", width: 120, height: 120, top: 120, left: "4%", opacity: 0.5 }}
      />
      <ParallaxAccent
        shape="sq"
        factor={-0.08}
        style={{ background: "var(--color-brand-orange)", width: 18, height: 18, top: 80, right: "46%", opacity: 0.5 }}
      />
      <ParallaxAccent
        shape="dot"
        factor={0.16}
        style={{ color: "var(--color-brand-blue)", width: 14, height: 14, bottom: 60, left: "42%", opacity: 0.5 }}
      />

      <div className="relative z-2 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-5 sm:px-8 min-[941px]:grid-cols-[1.04fr_0.96fr]">
        <div>
          <span className="inline-flex items-center gap-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-muted before:block before:h-[2px] before:w-[22px] before:bg-current before:content-['']">
            {t("kicker")}
          </span>
          <h1 className="mt-4 font-display text-[clamp(44px,6vw,78px)] font-bold leading-[1.04] tracking-[-0.02em]">
            {t("titleStart")}{" "}
            <span className="bg-[linear-gradient(100deg,var(--color-brand-green)_0%,var(--color-brand-blue)_38%,var(--color-brand-orange)_100%)] bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>
          <p className="mt-6.5 max-w-[540px] text-xl text-ink-2">{t("lead")}</p>
          <div className="mt-8.5 flex flex-wrap gap-3.5">
            <Link
              href="/#tutor"
              className="inline-flex items-center gap-2.25 rounded-full bg-ink px-5 py-3 font-display text-[15px] font-semibold text-white transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(20,23,26,0.18)]"
            >
              {t("cta")} <span className="text-[17px] leading-none">→</span>
            </Link>
          </div>
          <div className="mt-11 flex flex-wrap gap-7.5">
            <div className="flex flex-col gap-0.5">
              <b className="font-display text-[27px] font-semibold">{t("statValue")}</b>
              <span className="text-sm text-muted">{t("statLabel")}</span>
            </div>
          </div>
        </div>

        <div ref={containerRef} className="relative order-first [perspective:1100px] min-[941px]:order-none min-[941px]:max-w-none max-w-[460px] mx-auto w-full">
          <div
            ref={targetRef}
            id="heroTile"
            className="relative grid aspect-square place-items-center rounded-[28px] border border-line bg-white shadow-[0_30px_60px_-30px_rgba(20,23,26,0.22)] transition-transform duration-[250ms] ease-out [transform-style:preserve-3d]"
            style={{
              backgroundImage: `radial-gradient(120% 120% at 18% 14%, rgba(242,166,12,0.14), transparent 46%),
                radial-gradient(120% 120% at 84% 22%, rgba(232,82,30,0.14), transparent 46%),
                radial-gradient(120% 120% at 20% 88%, rgba(11,93,166,0.14), transparent 46%),
                radial-gradient(120% 120% at 86% 86%, rgba(14,158,52,0.13), transparent 46%)`,
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-[28px] opacity-50 [mask-image:radial-gradient(circle_at_50%_50%,#000_30%,transparent_72%)]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <Image
              src="/assets/tecktal-mark.png"
              alt={t("markAlt")}
              width={300}
              height={300}
              className="relative z-1 w-[56%] [transform:translateZ(40px)] drop-shadow-[0_18px_30px_rgba(20,23,26,0.16)]"
            />
            {CHIPS.map((chip) => (
              <div
                key={chip.label}
                className={`absolute z-2 flex items-center gap-2.5 whitespace-nowrap rounded-[14px] border border-line bg-white px-3.75 py-2.75 font-display text-sm font-semibold shadow-[0_16px_30px_-16px_rgba(20,23,26,0.28)] ${chip.className}`}
              >
                <span className={`h-2.25 w-2.25 flex-none rounded-full ${chip.color}`} />
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
