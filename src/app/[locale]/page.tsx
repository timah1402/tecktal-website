import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Gallery } from "@/components/gallery";
import { TutorShowcase } from "@/components/tutor-showcase";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <Manifesto />
        <Gallery />
        <TutorShowcase />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
