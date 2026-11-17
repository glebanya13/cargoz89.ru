import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, MapPin } from "lucide-react";

import teaImage from "@/assets/tea-hero.png";
import souvenirsImage from "@/assets/souvenirs-hero.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Reveal } from "@/components/Reveal";

const TITLE = "Z89КАРГО — Чаи и сувенирная продукция";
const DESCRIPTION =
  "Китайский чай и сувенирная продукция в Москве. Основные позиции и скачиваемые прайс-листы Excel.";

const TEAS = [
  { name: "Пуэр Шу классический", note: "выдержанный, мягкий вкус" },
  { name: "Пуэр Шен", note: "диск 357 г" },
  { name: "Улун Те Гуань Инь", note: "цветочный аромат" },
  { name: "Улун Да Хун Пао", note: "насыщенный вкус" },
  { name: "Зелёный Лунцзин", note: "сезонный сбор" },
  { name: "Жасминовый Моли Хуа Ча", note: "ароматизированный" },
  { name: "Белый Бай Хао Инь Чжень", note: "ограниченная партия" },
  { name: "Красный Дянь Хун", note: "ежедневный чай" },
];

const SOUVENIRS = [
  { name: "Чайные наборы и керамика", note: "габаи, пиалы, чайники" },
  { name: "Шёлковые платки", note: "подарочное оформление" },
  { name: "Лаковые шкатулки", note: "декор и хранение" },
  { name: "Веера ручной росписи", note: "сувенир из Китая" },
  { name: "Каллиграфические наборы", note: "под заказ" },
  { name: "Подарочная упаковка чая", note: "для розницы и опта" },
];

export const Route = createFileRoute("/chai")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ChaiPage,
});

function ChaiPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--gold)_12%,transparent),transparent_55%)]" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow">Каталог</p>
              <h1 className="section-title mt-4 max-w-3xl text-balance">
                Чаи и <span className="text-gold-gradient">сувенирная продукция</span>
              </h1>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                Основные позиции уже доступны в Москве. Полный ассортимент и актуальные цены — в
                прайс-листах Excel.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#tea" className="btn-gold">
                  Чай
                </a>
                <a href="#souvenirs" className="btn-outline-gold">
                  Сувениры
                </a>
                <Link to="/" hash="contacts" className="btn-outline-gold">
                  Связаться
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <CatalogBlock
          id="tea"
          eyebrow="Чай"
          title="Китайский чай"
          text="Показываем основные сорта. Полный перечень позиций и цены — в прайс-листе."
          image={teaImage}
          imageAlt="Ассортимент китайского чая"
          items={TEAS}
          priceHref="/price-lists/price-tea.csv"
          priceLabel="Скачать прайс-лист чая (Excel)"
        />

        <CatalogBlock
          id="souvenirs"
          eyebrow="Сувениры"
          title="Сувенирная продукция"
          text="Подарочные и сувенирные товары из Китая. Есть офлайн-точка в Москве — можно посмотреть и забрать лично."
          image={souvenirsImage}
          imageAlt="Сувенирная продукция из Китая"
          items={SOUVENIRS}
          priceHref="/price-lists/price-souvenirs.csv"
          priceLabel="Скачать прайс-лист сувениров (Excel)"
          offline
          tone="surface"
        />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

function CatalogBlock({
  id,
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  items,
  priceHref,
  priceLabel,
  offline,
  tone,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  items: { name: string; note: string }[];
  priceHref: string;
  priceLabel: string;
  offline?: boolean;
  tone?: "surface";
}) {
  return (
    <section
      id={id}
      className={`relative py-20 lg:py-28 ${tone === "surface" ? "bg-surface/40" : ""}`}
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src={image}
              alt={imageAlt}
              width={1600}
              height={900}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="mt-5 text-muted-foreground">{text}</p>

          {offline && (
            <div className="mt-6 flex items-start gap-3 border border-gold/30 bg-background/60 px-4 py-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
              <p className="text-sm text-foreground/90">
                Офлайн-точка в Москве — сувениры можно посмотреть и приобрести на месте.
              </p>
            </div>
          )}

          <ul className="mt-8 space-y-3">
            {items.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-4 border-b border-border pb-3"
              >
                <span className="font-display text-sm font-semibold uppercase tracking-[0.08em]">
                  {item.name}
                </span>
                <span className="shrink-0 text-xs text-muted-foreground">{item.note}</span>
              </li>
            ))}
          </ul>

          <a href={priceHref} download className="btn-gold mt-10 inline-flex w-full sm:w-auto">
            <Download className="size-4" />
            {priceLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
