import { useTranslations } from "next-intl";
import { ParallaxAccent } from "./parallax-accent";
import { Reveal } from "./reveal";

export function Manifesto() {
  const t = useTranslations("Manifesto");

  return (
    <section className="relative py-26">
      <ParallaxAccent
        shape="ring"
        factor={0.12}
        style={{ color: "var(--color-brand-green)", width: 90, height: 90, top: 50, right: "8%", opacity: 0.4 }}
      />
      <ParallaxAccent
        shape="sq"
        factor={-0.1}
        style={{ background: "var(--color-brand-blue)", width: 14, height: 14, bottom: 70, left: "10%", opacity: 0.4 }}
      />
      <Reveal className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
        <span className="inline-flex items-center justify-center gap-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-muted before:block before:h-[2px] before:w-[22px] before:bg-current before:content-['']">
          {t("kicker")}
        </span>
        <h2 className="mt-[18px] font-display text-[clamp(30px,4vw,50px)] font-semibold leading-[1.04] tracking-[-0.02em]">
          {t("titleLine1Start")} <span className="text-brand-amber">{t("titleLine1Highlight")}</span>
          <br />
          {t("titleLine2Start")} <span className="text-brand-green">{t("titleLine2Highlight")}</span>
        </h2>
        <p className="mx-auto mt-6.5 max-w-[720px] text-[19px] text-ink-2">{t("body")}</p>
      </Reveal>
    </section>
  );
}
