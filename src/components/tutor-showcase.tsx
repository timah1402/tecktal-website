"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Reveal } from "./reveal";
import {
  ChatIcon,
  SolverIcon,
  VisualizeIcon,
  QuestionsIcon,
  ResearchIcon,
  LearningIcon,
  KnowledgeIcon,
} from "./tutor-icons";

const FEATURES = [
  { id: "chat", Icon: ChatIcon, color: "var(--color-brand-blue)", tint: "rgba(11,93,166,0.12)", image: "/assets/tutor/tutor-home.png" },
  { id: "solver", Icon: SolverIcon, color: "var(--color-brand-green)", tint: "rgba(14,158,52,0.12)", image: "/assets/tutor/tutor-solver.png" },
  { id: "visualize", Icon: VisualizeIcon, color: "var(--color-brand-orange)", tint: "rgba(232,82,30,0.12)", image: "/assets/tutor/tutor-visualize.png" },
  { id: "research", Icon: ResearchIcon, color: "var(--color-brand-blue)", tint: "rgba(11,93,166,0.12)", image: "/assets/tutor/tutor-research.png" },
  { id: "questions", Icon: QuestionsIcon, color: "var(--color-brand-amber)", tint: "rgba(242,166,12,0.14)", image: "/assets/tutor/tutor-questions.png" },
  { id: "learning", Icon: LearningIcon, color: "var(--color-brand-green)", tint: "rgba(14,158,52,0.12)", image: "/assets/tutor/tutor-learning.png" },
  { id: "knowledge", Icon: KnowledgeIcon, color: "var(--color-brand-blue)", tint: "rgba(11,93,166,0.12)", image: "/assets/tutor/tutor-knowledge.png" },
] as const;

export function TutorShowcase() {
  const t = useTranslations("Tutor");
  const [active, setActive] = useState(0);
  const feature = FEATURES[active];

  return (
    <section className="relative py-7.5 pb-10" id="tutor">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-7.5">
          <h2 className="max-w-[620px] font-display text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.04] tracking-[-0.02em]">
            {t("sectionTitle")}
          </h2>
          <p className="max-w-[360px] text-[17px] text-muted">{t("sectionSubtitle")}</p>
        </Reveal>

        <Reveal as="div" className="grid grid-cols-1 gap-3 min-[941px]:grid-cols-[340px_1fr] min-[941px]:items-start min-[941px]:gap-6">
          <div className="grid grid-cols-1 gap-1.5 min-[941px]:max-h-[640px] min-[941px]:overflow-y-auto min-[941px]:pr-1.5">
            {FEATURES.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-3.5 rounded-2xl border px-4 py-3.5 text-left transition-colors ${
                    isActive
                      ? "border-line bg-white shadow-[0_14px_30px_-20px_rgba(20,23,26,0.4)]"
                      : "border-transparent hover:bg-paper-3"
                  }`}
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl" style={{ background: item.tint, color: item.color }}>
                    <item.Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15px] font-semibold leading-tight">{t(`features.${item.id}.name`)}</span>
                    <span className="mt-0.5 block truncate text-[13px] text-muted">{t(`features.${item.id}.tag`)}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-[20px] border border-black/6 bg-white shadow-[0_28px_50px_-22px_rgba(20,23,26,0.4)]">
            <div className="flex h-9 items-center gap-1.75 border-b border-[#e6e6e0] bg-[#f1f1ee] px-4">
              <i className="inline-block h-2.5 w-2.5 rounded-full bg-[#cdcdc6]" />
              <i className="inline-block h-2.5 w-2.5 rounded-full bg-[#cdcdc6]" />
              <i className="inline-block h-2.5 w-2.5 rounded-full bg-[#cdcdc6]" />
            </div>
            <div className="relative aspect-16/9 w-full bg-white">
              <Image
                key={feature.image}
                src={feature.image}
                alt={t(`features.${feature.id}.name`)}
                fill
                sizes="(min-width: 941px) 60vw, 100vw"
                className="object-cover object-top"
                priority={active === 0}
              />
            </div>
            <div className="p-7 sm:p-8.5">
              <span
                className="inline-flex items-center gap-2.25 rounded-full px-3.5 py-1.75 font-display text-[13px] font-semibold uppercase tracking-[0.04em] text-white"
                style={{ background: feature.color }}
              >
                {t(`features.${feature.id}.tag`)}
              </span>
              <h3 className="mt-4 font-display text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.1] tracking-[-0.02em]">
                {t(`features.${feature.id}.name`)}
              </h3>
              <p className="mt-3 max-w-[560px] text-[16px] text-ink-2">{t(`features.${feature.id}.description`)}</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {[0, 1].map((idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14.5px] text-ink-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full" style={{ background: feature.color }} />
                    {t(`features.${feature.id}.highlights.${idx}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
