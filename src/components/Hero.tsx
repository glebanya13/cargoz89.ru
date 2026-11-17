import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";
import { Flag } from "./Flag";

const DOTS = [
  { left: "12%", top: "30%", delay: "0s" },
  { left: "24%", top: "68%", delay: "1.2s" },
  { left: "78%", top: "26%", delay: "0.6s" },
  { left: "88%", top: "62%", delay: "2s" },
  { left: "46%", top: "18%", delay: "1.6s" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16"
    >
      <img
        src={heroImage}
        alt="Доставка грузов из Китая в Россию, Казахстан и страны СНГ"
        width={1600}
        height={1008}
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--background)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {DOTS.map((dot, i) => (
        <span
          key={i}
          className="absolute size-1.5 rounded-full bg-gold"
          style={{
            left: dot.left,
            top: dot.top,
            animation: `float-dot 7s ease-in-out ${dot.delay} infinite`,
          }}
        />
      ))}

      <div className="relative mx-auto w-full max-w-5xl px-5 text-center lg:px-8">
        <div className="relative mx-auto mb-8 flex size-44 items-center justify-center sm:size-56">
          <span
            className="absolute inset-0 rounded-full border border-gold/35"
            style={{ animation: "slow-spin 26s linear infinite" }}
          />
          <span
            className="absolute inset-4 rounded-full border border-dashed border-gold/25"
            style={{ animation: "slow-spin 40s linear infinite reverse" }}
          />
          <span
            className="absolute inset-8 rounded-full bg-gold/10 blur-2xl"
            style={{ animation: "gold-pulse 6s ease-in-out infinite" }}
          />
          <div className="relative">
            <div className="font-display text-5xl font-extrabold tracking-[0.04em] text-gold-gradient sm:text-6xl">
              Z89
            </div>
            <div className="font-display text-2xl font-bold tracking-[0.28em] text-gold/90 sm:text-3xl">
              КАРГО
            </div>
          </div>
        </div>

        <div className="mx-auto mb-8 flex max-w-lg items-center justify-center gap-5 sm:gap-6">
          <Flag variant="cn" size="xl" />
          <span className="gold-hairline flex-1" />
          <span className="size-2 rounded-full bg-gold" />
          <span className="gold-hairline flex-1" />
          <Flag variant="ru" size="xl" />
        </div>

        <h1 className="section-title text-balance">
          Доставка любых грузов <span className="text-gold-gradient">из Китая в Россию</span>
        </h1>

        <p className="mt-5 font-display text-sm uppercase tracking-[0.34em] text-gold sm:text-base">
          Авиа • Авто • Море • Ж/Д
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          Профессиональная российская транспортная компания. Охват: Россия, Беларусь, Казахстан,
          Кыргызстан, Узбекистан и другие страны. Склады в Гуанчжоу, Фошане, Иу и Урумчи — доставка
          по России и СНГ.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#calculator" className="btn-gold w-full sm:w-auto">
            Рассчитать стоимость доставки
          </a>
          <a href="#contacts" className="btn-outline-gold w-full sm:w-auto">
            Связаться с менеджером
          </a>
        </div>

        <p className="mt-10 font-display text-[0.65rem] tracking-[0.4em] text-muted-foreground">
          НАДЕЖНО • БЫСТРО • ВЫГОДНО
        </p>
      </div>

      <a
        href="#about"
        aria-label="Прокрутить вниз"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/60 transition-colors hover:text-gold"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}
