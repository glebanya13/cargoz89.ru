import { Plane, Ship, Train, Truck, Warehouse } from "lucide-react";
import { Reveal } from "./Reveal";
import { Flag } from "./Flag";

const WAREHOUSES = ["Гуанчжоу", "Фошань", "Иу", "Урумчи"];
const DESTINATIONS = ["Россия", "Беларусь", "Кыргызстан", "Узбекистан", "Армения", "Таджикистан"];

export function RouteSection() {
  return (
    <section id="route" className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Направление</p>
          <h2 className="section-title mt-4 text-[1.55rem] leading-tight sm:text-4xl">
            Китай <span className="text-gold-gradient">→</span> Россия{" "}
            <span className="text-gold-gradient">/</span> СНГ
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Надёжная линия доставки с двойным пакетным налогом — выгодная цена и стабильные сроки.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 text-left">
              <p className="font-display text-base font-extrabold uppercase tracking-[0.12em] sm:text-2xl sm:tracking-[0.22em]">
                Китай
              </p>
              <p className="mt-1 text-[0.65rem] tracking-[0.14em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
                ОТПРАВЛЕНИЕ
              </p>
            </div>
            <div className="min-w-0 text-right">
              <p className="font-display text-base font-extrabold uppercase tracking-[0.12em] text-gold-gradient sm:text-2xl sm:tracking-[0.22em]">
                Россия
              </p>
              <p className="mt-1 text-[0.65rem] tracking-[0.14em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
                ДОСТАВКА
              </p>
            </div>
          </div>

          {/* HTML-флаги вместо foreignObject — на iOS Safari FO ломает layout */}
          <div className="relative mt-6 sm:mt-10">
            <svg
              viewBox="0 0 800 180"
              className="h-32 w-full overflow-visible sm:h-44"
              role="img"
              aria-label="Маршрут Китай — Россия и СНГ"
            >
              <defs>
                <path id="route-arc" d="M100 140 C 260 30, 540 30, 700 140" fill="none" />
              </defs>

              <use
                href="#route-arc"
                stroke="var(--gold-dark)"
                strokeOpacity="0.35"
                strokeWidth="1.5"
              />
              <use
                href="#route-arc"
                stroke="var(--gold-bright)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="10 14"
                style={{ animation: "route-dash 12s linear infinite" }}
              />

              <circle cx="400" cy="57.5" r="4" fill="var(--gold-bright)" />

              <g>
                <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#route-arc" />
                </animateMotion>
                <circle
                  r="24"
                  fill="var(--background)"
                  stroke="var(--gold)"
                  strokeWidth="2"
                  style={{
                    filter:
                      "drop-shadow(0 0 12px color-mix(in oklab, var(--gold) 55%, transparent))",
                  }}
                />
                <g fill="var(--gold-bright)" transform="scale(0.72)">
                  <path d="M-16 0 L-6 -4 L10 -4 L18 0 L10 4 L-6 4 Z" />
                  <path d="M-2 -4 L-12 -14 L-7 -14 L4 -4 Z" opacity="0.95" />
                  <path d="M-2 4 L-12 14 L-7 14 L4 4 Z" opacity="0.95" />
                  <path d="M8 -2 L16 -9 L19 -7 L12 0 Z" />
                </g>
              </g>
            </svg>

            {/* Флаги по концам дуги (12.5% / 87.5% от viewBox) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-7 sm:bottom-9">
              <div className="absolute bottom-0 -translate-x-1/2" style={{ left: "12.5%" }}>
                <Flag variant="cn" size="sm" className="inline-block sm:hidden" />
                <Flag variant="cn" size="md" className="hidden sm:inline-block" />
              </div>
              <div className="absolute bottom-0 -translate-x-1/2" style={{ left: "87.5%" }}>
                <Flag variant="ru" size="sm" className="inline-block sm:hidden" />
                <Flag variant="ru" size="md" className="hidden sm:inline-block" />
              </div>
            </div>

            <div className="mt-1 flex justify-between px-[8%] font-display text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground sm:mt-2 sm:text-[0.65rem] sm:tracking-[0.18em]">
              <span>Китай</span>
              <span>Россия</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-4 gap-1.5 text-gold sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-12">
            {[
              { icon: Plane, label: "Авиа" },
              { icon: Truck, label: "Авто" },
              { icon: Ship, label: "Море" },
              { icon: Train, label: "Ж/Д" },
            ].map((mode) => (
              <div
                key={mode.label}
                className="flex min-w-0 flex-col items-center gap-1.5 sm:flex-row sm:gap-2"
              >
                <mode.icon className="size-5 shrink-0" strokeWidth={1.3} />
                <span className="font-display text-[0.62rem] uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.22em]">
                  {mode.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220} className="mt-14 sm:mt-16">
          <div className="flex items-center justify-center gap-3 text-gold">
            <Warehouse className="size-5 shrink-0" strokeWidth={1.3} />
            <p className="font-display text-[0.7rem] uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.28em]">
              Склады в Китае
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:mx-auto sm:max-w-xl sm:grid-cols-4">
            {WAREHOUSES.map((city) => (
              <span
                key={city}
                className="border border-gold/35 px-2 py-2.5 text-center font-display text-[0.68rem] uppercase tracking-[0.12em] text-foreground/90 sm:px-3 sm:text-xs sm:tracking-[0.16em]"
              >
                {city}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={280} className="mt-12 text-center">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-gold">География</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {DESTINATIONS.join(" • ")} и другие страны
          </p>
        </Reveal>
      </div>
    </section>
  );
}
