"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  fr: "FR",
  en: "EN",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Nav");

  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-white/60 p-1" aria-label={t("languageLabel")}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={loc === locale}
          className={`rounded-full px-2.75 py-1 font-display text-[13px] font-semibold tracking-[0.04em] transition-colors ${
            loc === locale ? "bg-ink text-white" : "text-ink-2 hover:text-ink"
          }`}
        >
          {LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
