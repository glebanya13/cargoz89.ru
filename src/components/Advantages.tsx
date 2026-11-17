import { Globe2, PackageCheck, Tag, Warehouse } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Warehouse,
    title: "Склады в Китае",
    text: "Гуанчжоу, Фошань, Иу и Урумчи — принимаем груз и отправляем в Россию и страны СНГ.",
  },
  {
    icon: Tag,
    title: "Выгодная цена",
    text: "Двойной пакетный налог, надёжная линия и прозрачный расчёт стоимости доставки.",
  },
  {
    icon: Globe2,
    title: "Широкий охват",
    text: "Россия, Беларусь, Казахстан, Кыргызстан, Узбекистан и другие страны региона.",
  },
  {
    icon: PackageCheck,
    title: "Любые товары",
    text: "Продукты, мебель, одежда, техника, стройматериалы и товары с онлайн-покупок — отправляем всё.",
  },
];

export function Advantages() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">О компании</p>
          <h2 className="section-title mt-4">
            Почему <span className="text-gold-gradient">Z89КАРГО</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Профессиональная российская транспортная компания. Полный цикл логистики из Китая — от
            склада отправителя до выгрузки у вас.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 110} as="article">
              <div className="panel group h-full rounded-sm p-7">
                <span className="flex size-14 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_24px_-6px_var(--gold)]">
                  <item.icon className="size-6" strokeWidth={1.3} />
                </span>
                <h3 className="mt-6 font-display text-base font-bold uppercase tracking-[0.08em]">
                  {item.title}
                </h3>
                <span className="gold-hairline my-4 block" />
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
