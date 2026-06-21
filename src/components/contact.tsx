import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";
import { ContactForm } from "./contact-form";

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <section className="px-0 pb-27.5 pt-7.5" id="contact">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal
          className="relative grid grid-cols-1 items-center gap-13.5 overflow-hidden rounded-[28px] p-10 text-white min-[941px]:grid-cols-2 min-[941px]:p-15 sm:p-14"
          style={
            {
              background: `radial-gradient(80% 130% at 10% 0%, rgba(242,166,12,0.20), transparent 50%),
                radial-gradient(80% 130% at 92% 8%, rgba(232,82,30,0.18), transparent 50%),
                radial-gradient(90% 150% at 50% 120%, rgba(11,93,166,0.20), transparent 55%),
                var(--color-ink)`,
            } as React.CSSProperties
          }
        >
          <div>
            <span className="flex items-center gap-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white/60 before:block before:h-0.5 before:w-5.5 before:bg-current before:content-['']">
              {t("kicker")}
            </span>
            <h2 className="mt-4 max-w-[460px] font-display text-[clamp(30px,4vw,50px)] font-semibold leading-[1.04] tracking-[-0.02em]">
              {t("title")}
            </h2>
            <div className="mt-7.5 grid gap-4.5">
              <div className="flex items-center gap-3.5">
                <div className="grid h-10 w-10 flex-none place-items-center rounded-[11px] border border-white/14 bg-white/8">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} className="h-4.5 w-4.5 stroke-brand-amber">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <b className="block font-display text-base font-semibold">hello@tecktal.com</b>
                  <span className="text-sm text-white/60">{t("emailNote")}</span>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="grid h-10 w-10 flex-none place-items-center rounded-[11px] border border-white/14 bg-white/8">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} className="h-4.5 w-4.5 stroke-brand-amber">
                    <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <b className="block font-display text-base font-semibold">{t("locationLabel")}</b>
                  <span className="text-sm text-white/60">{t("locationNote")}</span>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
