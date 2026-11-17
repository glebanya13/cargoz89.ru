import air from "@/assets/ops-air.jpg";
import port from "@/assets/ops-port.jpg";
import warehouse from "@/assets/ops-warehouse.jpg";
import truckLoad from "@/assets/ops-truck-load.jpg";
import yard from "@/assets/ops-yard.jpg";
import container from "@/assets/ops-container.jpg";
import { Reveal } from "./Reveal";

const PHOTOS = [
  { src: air, alt: "Погрузка авиагруза", label: "Авиа · погрузка" },
  { src: port, alt: "Морской порт и контейнеры", label: "Море · порт" },
  { src: warehouse, alt: "Складской терминал", label: "Склад" },
  { src: truckLoad, alt: "Погрузка на автотранспорт", label: "Авто · погрузка" },
  { src: yard, alt: "Погрузка на складе", label: "Авто · двор" },
  { src: container, alt: "Погрузка контейнера", label: "Контейнер · погрузка" },
];

export function OperationsGallery() {
  return (
    <section id="gallery" className="relative bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Наша работа</p>
          <h2 className="section-title mt-4">Погрузка и логистика</h2>
          <p className="mt-5 text-muted-foreground">
            Реальные кадры с наших складов и маршрутов: авиа, море, авто и хранение груза.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 80} as="figure">
              <div className="group relative overflow-hidden rounded-sm border border-border">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <figcaption className="absolute bottom-3 left-3 font-display text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                  {photo.label}
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
