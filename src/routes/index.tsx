import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Advantages } from "@/components/Advantages";
import { Services } from "@/components/Services";
import { RouteSection } from "@/components/RouteSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { OperationsGallery } from "@/components/OperationsGallery";
import { Calculator } from "@/components/Calculator";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

const TITLE = "Z89КАРГО — Доставка грузов из Китая в Россию и СНГ";
const DESCRIPTION =
  "Профессиональная российская транспортная компания. Склады в Гуанчжоу, Фошане, Иу и Урумчи. Магазин и офис: Бухта «Юг», Москва. Доставка по России, Беларуси, Казахстану, Кыргызстану и Узбекистану.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <RouteSection />
        <HowItWorks />
        <Benefits />
        <OperationsGallery />
        <Calculator />
        <Contacts />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
