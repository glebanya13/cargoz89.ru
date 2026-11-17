import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

export function Calculator() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="calculator" className="relative bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Заявка</p>
          <h2 className="section-title mt-4">Рассчитайте стоимость доставки</h2>
          <p className="mt-5 text-muted-foreground">
            Заполните форму — менеджер свяжется с вами и подготовит расчет.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <form
            onSubmit={onSubmit}
            className="rounded-sm border border-gold/30 bg-background/70 p-6 shadow-[var(--shadow-gold)] sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Имя" name="name" placeholder="Как к вам обращаться" required />
              <Field
                label="Телефон"
                name="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
              />
              <Field label="Город отправления" name="from" placeholder="Гуанчжоу" />
              <Field label="Город доставки" name="to" placeholder="Москва" />
              <Field label="Тип груза" name="cargo" placeholder="Например, электроника" />
              <Field label="Вес, кг" name="weight" placeholder="500" />
              <Field label="Объем, м³" name="volume" placeholder="2.5" />
              <label className="block">
                <span className="mb-2 block font-display text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Способ доставки
                </span>
                <select name="mode" className="gold-input" defaultValue="">
                  <option value="" disabled>
                    Выберите вариант
                  </option>
                  <option value="air">Авиа</option>
                  <option value="auto">Авто</option>
                  <option value="sea">Море</option>
                  <option value="rail">Ж/Д</option>
                </select>
              </label>
            </div>

            <button type="submit" className="btn-gold mt-8 w-full">
              {sent ? "Заявка отправлена" : "Получить расчет"}
            </button>

            <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
              {sent
                ? "Спасибо! Мы свяжемся с вами в ближайшее время."
                : "Оставляя заявку, вы соглашаетесь на обработку персональных данных."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-display text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      <input
        className="gold-input"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}
