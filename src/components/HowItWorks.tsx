import { Reveal } from "./Reveal";

const STEPS = [
  { num: "01", title: "Заявка", text: "Вы оставляете заявку и рассказываете о грузе." },
  { num: "02", title: "Расчет", text: "Рассчитываем стоимость и подбираем оптимальный маршрут." },
  { num: "03", title: "Перевозка", text: "Организуем забор и перевозку груза." },
  { num: "04", title: "Доставка", text: "Доставляем груз до нужного адреса." },
];

export function HowItWorks() {
  return (
    <section id="process" className="relative bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Процесс</p>
          <h2 className="section-title mt-4">Как мы работаем</h2>
        </Reveal>

        <div className="relative mt-16">
          <span className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:hidden" />
          <div className="hidden lg:block">
            <span className="gold-hairline absolute inset-x-0 top-10 block" />
          </div>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 130} as="li">
                <div className="relative pl-14 lg:pl-0">
                  <span className="absolute left-0 top-0 flex size-9 items-center justify-center rounded-full border border-gold/50 bg-background text-[0.65rem] font-bold text-gold lg:relative lg:mb-6 lg:size-5 lg:border-0 lg:bg-transparent lg:p-0 lg:text-transparent">
                    <span className="lg:hidden">{step.num}</span>
                    <span className="hidden size-3 rounded-full bg-gold shadow-[0_0_18px_var(--gold)] lg:block" />
                  </span>
                  <p className="font-display text-4xl font-extrabold text-gold-gradient lg:text-5xl">
                    {step.num}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-[0.14em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
