import { useState } from "react";
import { Check, Copy, Mail, MapPin, MessageCircle, Phone, Send, Store } from "lucide-react";
import { Reveal } from "./Reveal";

const CHINA_ADDRESS = `收货地址：广东省佛山市南海区里水镇旗峰大道2号全顺祥物流基地6-1号仓库
Z89国际物流库房
电话：151 7469 6989`;

const PHONES = [
  { tel: "+79258926777", display: "+7 (925) 892-67-77", wa: "79258926777" },
  { tel: "+79098042666", display: "+7 (909) 804-26-66", wa: "79098042666" },
] as const;

export function Contacts() {
  return (
    <section id="contacts" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Контакты</p>
          <h2 className="section-title mt-4">Свяжитесь с нами</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PHONES.map((phone, i) => (
            <Reveal key={phone.tel} delay={i * 100}>
              <div className="panel flex h-full flex-col gap-5 rounded-sm p-8">
                <span className="flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Phone className="size-5" strokeWidth={1.3} />
                </span>
                <a
                  href={`tel:${phone.tel}`}
                  className="font-display text-xl font-bold tracking-[0.04em] transition-colors hover:text-gold-bright sm:text-2xl"
                >
                  {phone.display}
                </a>
                <div className="mt-auto grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <a
                    href={`https://wa.me/${phone.wa}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline-gold w-full min-w-0 !px-2 !py-3 !text-[0.65rem]"
                  >
                    <MessageCircle className="size-3.5 shrink-0" /> WhatsApp
                  </a>
                  <a
                    href={`https://t.me/+${phone.wa}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline-gold w-full min-w-0 !px-2 !py-3 !text-[0.65rem]"
                  >
                    <Send className="size-3.5 shrink-0" /> Telegram
                  </a>
                  <a
                    href={`tel:${phone.tel}`}
                    className="btn-gold w-full min-w-0 !px-2 !py-3 !text-[0.65rem]"
                  >
                    <Phone className="size-3.5 shrink-0" /> Позвонить
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-8">
          <a
            href="mailto:cargoz89@yandex.ru"
            className="panel flex items-center gap-5 rounded-sm p-6 sm:p-8"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
              <Mail className="size-5" strokeWidth={1.3} />
            </span>
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-[0.06em]">
                CARGOZ89@YANDEX.RU
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Почта для связи</p>
            </div>
          </a>
        </Reveal>

        <Reveal delay={240} className="mt-8">
          <div className="panel rounded-sm p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Store className="size-5" strokeWidth={1.3} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="eyebrow">Магазин и офис</p>
                <h3 className="mt-3 font-display text-xl font-bold tracking-[0.06em] text-gold-gradient sm:text-2xl">
                  Бухта «Юг»
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  Москва, МКАД 32-й км, вл. 4, 23 линия, павильон 11
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Адрес магазина и офиса в Москве
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={280} className="mt-8">
          <div className="panel rounded-sm p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                <MapPin className="size-5" strokeWidth={1.3} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="eyebrow">Адрес в Китае</p>
                <h3 className="mt-3 font-display text-xl font-bold tracking-[0.06em] text-gold-gradient sm:text-2xl">
                  Z89国际物流库房
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  广东省佛山市南海区里水镇旗峰大道2号全顺祥物流基地6-1号仓库
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Фошань, Наньхай, Лишуй — склад Z89 International Logistics
                </p>
                <a
                  href="tel:+8615174696989"
                  className="mt-5 inline-flex items-center gap-2 font-display text-lg font-bold tracking-[0.04em] text-foreground transition-colors hover:text-gold-bright"
                >
                  <Phone className="size-4 text-gold" strokeWidth={1.5} />
                  151 7469 6989
                </a>
                <div className="mt-6">
                  <CopyAddressButton text={CHINA_ADDRESS} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={320} className="mt-12 text-center">
          <p className="font-display text-[0.65rem] tracking-[0.4em] text-muted-foreground">
            ВАШ НАДЕЖНЫЙ ПАРТНЕР В ЛОГИСТИКЕ
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CopyAddressButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" onClick={onCopy} className="btn-outline-gold w-full sm:w-auto">
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? "Скопировано" : "Скопировать адрес склада"}
    </button>
  );
}
