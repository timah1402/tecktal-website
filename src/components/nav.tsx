import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";

export function Nav() {
  const t = useTranslations("Nav");
  const links = [
    { href: "#approach", label: t("approach") },
    { href: "#tutor", label: t("tutor") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/82 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-[74px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link href="/#top" className="flex items-center gap-3">
          <Image src="/assets/tecktal-mark.png" alt="TECKTAL logo" width={34} height={34} className="h-[34px] w-auto" />
          <span className="font-display text-[21px] font-bold tracking-[0.02em]">TECKTAL</span>
        </Link>
        <div className="flex items-center gap-7">
          <nav className="hidden items-center gap-[34px] min-[941px]:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
