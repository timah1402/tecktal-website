import { useTranslations } from "next-intl";
import { ParallaxAccent } from "./parallax-accent";
import { Reveal } from "./reveal";

const STEP_KICKERS = ["01 — IMPORT", "02 — PRACTICE", "03 — TRACK"];
const STEP_DELAYS: (string | undefined)[] = [undefined, ".08s", ".16s"];

export function Approach() {
  const t = useTranslations("Approach");
  const steps = STEP_KICKERS.map((n, i) => ({
    n,
    title: t(`steps.${i}.title`),
    body: t(`steps.${i}.body`),
    delay: STEP_DELAYS[i],
  }));

  return (
    <section className="relative overflow-hidden bg-ink py-25 text-white" id="approach">
      <ParallaxAccent
        shape="ring"
        factor={0.14}
        style={{ color: "rgba(242,166,12,0.5)", width: 160, height: 160, top: 40, right: -30 }}
      />
      <ParallaxAccent
        shape="dot"
        factor={-0.12}
        style={{ color: "rgba(232,82,30,0.6)", width: 16, height: 16, bottom: 80, left: "8%" }}
      />
      <div className="relative z-1 mx-auto max-w-300 px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white/60 before:block before:h-0.5 before:w-5.5 before:bg-current before:content-['']">
            {t("kicker")}
          </span>
          <h2 className="mt-4.5 max-w-190 font-display text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.04] tracking-[-0.02em]">
            {t("titleStart")} <em className="text-brand-amber not-italic">{t("titleHighlight")}</em> {t("titleEnd")}
          </h2>
        </Reveal>
        <div className="relative z-2 mt-14 grid grid-cols-1 gap-6.5 min-[941px]:grid-cols-3">
          {steps.map((step) => (
            <Reveal
              key={step.n}
              className="rounded-[18px] border border-white/10 bg-white/4.5 p-7.5"
              delay={step.delay}
            >
              <div className="font-display text-sm font-semibold tracking-widest text-brand-amber">{step.n}</div>
              <h4 className="mt-3.5 text-xl font-semibold tracking-[-0.02em]">{step.title}</h4>
              <p className="mt-2.5 text-[15px] text-white/66">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
