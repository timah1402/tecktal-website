"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-[11px] border border-white/16 bg-white/6 px-3.75 py-3.25 font-body text-[15px] text-white placeholder:text-white/40 outline-none transition-[border,background] duration-200 focus:border-brand-amber focus:bg-white/9";

export function ContactForm() {
  const t = useTranslations("Contact.form");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("cn") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("ce") as HTMLInputElement).value.trim();
    if (!name || !email) {
      setMessage(t("errorMissing"));
      return;
    }
    setMessage(t("success", { name: name.split(" ")[0] }));
    form.reset();
  }

  return (
    <form
      className="grid gap-4 rounded-[18px] border border-white/12 bg-white/4 p-7.5"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div className="grid gap-1.75">
          <label htmlFor="cn" className="font-display text-[13px] font-semibold tracking-[0.02em] text-white/72">
            {t("nameLabel")}
          </label>
          <input id="cn" name="cn" type="text" placeholder={t("namePlaceholder")} required className={inputClass} />
        </div>
        <div className="grid gap-1.75">
          <label htmlFor="ce" className="font-display text-[13px] font-semibold tracking-[0.02em] text-white/72">
            {t("emailLabel")}
          </label>
          <input id="ce" name="ce" type="email" placeholder={t("emailPlaceholder")} required className={inputClass} />
        </div>
      </div>
      <div className="grid gap-1.75">
        <label htmlFor="co" className="font-display text-[13px] font-semibold tracking-[0.02em] text-white/72">
          {t("orgLabel")}
        </label>
        <input id="co" name="co" type="text" placeholder={t("orgPlaceholder")} className={inputClass} />
      </div>
      <div className="grid gap-1.75">
        <label htmlFor="cm" className="font-display text-[13px] font-semibold tracking-[0.02em] text-white/72">
          {t("messageLabel")}
        </label>
        <textarea
          id="cm"
          name="cm"
          placeholder={t("messagePlaceholder")}
          className={`${inputClass} min-h-24 resize-y`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2.25 rounded-full bg-brand-amber px-5 py-3 font-display text-[15px] font-semibold text-ink transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[0_10px_30px_rgba(242,166,12,0.4)]"
      >
        {t("submit")} <span className="text-[17px] leading-none">→</span>
      </button>
      <div className="min-h-[18px] text-center text-sm font-semibold text-brand-amber">{message}</div>
    </form>
  );
}
