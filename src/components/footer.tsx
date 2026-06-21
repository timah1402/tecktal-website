import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");

  const columns = [
    {
      title: t("columns.features"),
      links: [
        { href: "/#tutor", label: t("links.smartSolver") },
        { href: "/#tutor", label: t("links.voiceTutor") },
        { href: "/#tutor", label: t("links.deepResearch") },
        { href: "/#tutor", label: t("links.guidedLearning") },
      ],
    },
    {
      title: t("columns.company"),
      links: [
        { href: "/#approach", label: t("links.approach") },
        { href: "/#contact", label: t("links.contact") },
      ],
    },
    {
      title: t("columns.getInTouch"),
      links: [
        { href: "/#contact", label: t("links.contactUs") },
        { href: "/#contact", label: "hello@tecktal.com" },
      ],
    },
  ];

  return (
    <footer className="border-t border-line py-13.5 pb-15">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-between gap-10 px-5 sm:px-8">
        <div>
          <Link href="/#top" className="flex items-center gap-3">
            <Image src="/assets/tecktal-mark.png" alt="TECKTAL" width={30} height={30} className="h-7.5 w-auto" />
            <span className="font-display text-xl font-bold">TECKTAL</span>
          </Link>
          <p className="mt-4 max-w-[280px] text-sm text-muted">{t("tagline")}</p>
        </div>
        <div className="flex flex-wrap gap-17.5">
          {columns.map((column) => (
            <div key={column.title}>
              <h5 className="mb-3.5 font-display text-[13px] tracking-widest uppercase text-muted">{column.title}</h5>
              {column.links.map((link, i) => (
                <Link
                  key={`${column.title}-${i}`}
                  href={link.href}
                  className="mb-2.5 block text-[15px] text-ink-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-11.5 flex max-w-[1200px] flex-wrap justify-between gap-2.5 border-t border-line px-5 pt-6 text-sm text-muted sm:px-8">
        <span>{t("copyright")}</span>
        <span>{t("location")}</span>
      </div>
    </footer>
  );
}
