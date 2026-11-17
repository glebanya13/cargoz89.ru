import air from "@/assets/service-air.jpg";
import truck from "@/assets/service-truck.jpg";
import sea from "@/assets/service-sea.jpg";
import rail from "@/assets/service-rail.jpg";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    title: "Авиа",
    text: "Пекин → Москва за 5–7 дней. Быстрая доставка грузов и персональные перевозки.",
    image: air,
  },
  {
    title: "Авто",
    text: "Маршрут через Казахстан с доставкой до адреса в России и странах СНГ.",
    image: truck,
  },
  {
    title: "Море",
    text: "Экономичная перевозка крупных партий: мебель, стройматериалы, оборудование.",
    image: sea,
  },
  {
    title: "Ж/Д",
    text: "Оптимальный баланс стоимости и скорости для регулярных поставок.",
    image: rail,
  },
];

const CARGO_TYPES = [
  "Продукты питания",
  "Мебель",
  "Посуда",
  "Деревянные полы",
  "Инструменты",
  "Игрушки",
  "Шляпы и сумки",
  "Косметика",
  "Аксессуары для телефонов",
  "Лампы",
  "Ткани",
  "Стройматериалы",
  "Канцтовары",
  "Одежда",
  "Электромобили",
  "Мотоциклы",
  "Оборудование",
];

export function Services() {
  return (
    <section id="services" className="relative bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Услуги</p>
          <h2 className="section-title mt-4">Виды доставки</h2>
          <p className="mt-5 text-muted-foreground">
            Выбираем оптимальный способ перевозки под ваш груз, бюджет и сроки. Все онлайн-покупки
            можно отправить.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 110} as="article">
              <div className="group h-full overflow-hidden rounded-sm border border-border transition-all duration-500 hover:border-gold hover:shadow-[var(--shadow-gold)]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={928}
                    height={720}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-[0.2em] text-gold-gradient">
                    {service.title}
                  </h3>
                  <span className="gold-hairline my-4 block" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 text-center">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-gold">
            Что перевозим
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {CARGO_TYPES.map((item) => (
              <span
                key={item}
                className="border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <a href="#calculator" className="btn-gold">
            Рассчитать стоимость доставки
          </a>
        </Reveal>
      </div>
    </section>
  );
}
