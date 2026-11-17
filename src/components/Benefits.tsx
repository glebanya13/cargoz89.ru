import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const BENEFITS = [
  "Склады в Гуанчжоу, Фошане, Иу и Урумчи",
  "Доставка в Россию и страны СНГ",
  "Двойной пакетный налог — выгодная цена",
  "Надёжная линия доставки",
  "Авиа Пекин → Москва за 5–7 дней",
  "Россия, Беларусь, Казахстан, Кыргызстан, Узбекистан, Армения, Таджикистан",
  "Любые товары, включая онлайн-покупки",
  "Персональный менеджер",
];

export function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="eyebrow">Преимущества</p>
          <h2 className="section-title mt-4">Логистика без лишних рисков</h2>
          <ul className="mt-10 space-y-4">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-border pb-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <Check className="size-3.5" strokeWidth={2} />
                </span>
                <span className="text-sm text-foreground/90 sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={180} className="relative flex items-center justify-center">
          <span
            className="absolute size-72 rounded-full border border-gold/30 sm:size-96"
            style={{ animation: "slow-spin 34s linear infinite" }}
          />
          <span
            className="absolute size-56 rounded-full border border-dashed border-gold/25 sm:size-72"
            style={{ animation: "slow-spin 48s linear infinite reverse" }}
          />
          <span
            className="absolute size-48 rounded-full bg-gold/10 blur-3xl sm:size-64"
            style={{ animation: "gold-pulse 7s ease-in-out infinite" }}
          />
          <div className="relative text-center">
            <p className="font-display text-7xl font-extrabold tracking-[0.04em] text-gold-gradient sm:text-8xl">
              Z89
            </p>
            <p className="mt-2 font-display text-xs tracking-[0.35em] text-muted-foreground">
              КАРГО
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
