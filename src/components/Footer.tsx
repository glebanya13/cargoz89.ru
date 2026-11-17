import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const LINKS = [
  { label: "О компании", to: "/", hash: "about" },
  { label: "Услуги", to: "/", hash: "services" },
  { label: "Чаи и сувениры", to: "/chai" },
  { label: "Преимущества", to: "/", hash: "benefits" },
  { label: "Контакты", to: "/", hash: "contacts" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo className="text-2xl" />
          <p className="mt-3 text-sm text-muted-foreground">Ваш надежный партнер в логистике</p>
        </div>

        <nav className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={"hash" in link ? link.hash : undefined}
              className="font-display text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold-bright"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href="tel:+79258926777"
            className="font-display text-sm font-semibold tracking-[0.06em] hover:text-gold-bright"
          >
            +7 (925) 892-67-77
          </a>
          <a
            href="tel:+79098042666"
            className="font-display text-sm font-semibold tracking-[0.06em] hover:text-gold-bright"
          >
            +7 (909) 804-26-66
          </a>
          <a
            href="mailto:cargoz89@yandex.ru"
            className="text-sm text-muted-foreground hover:text-gold-bright"
          >
            CARGOZ89@YANDEX.RU
          </a>
        </div>

        <div className="lg:text-right">
          <p className="font-display text-xs uppercase leading-relaxed tracking-[0.22em] text-gold/90">
            Россия • Беларусь
            <br />
            Казахстан • Кыргызстан
            <br />
            Узбекистан и другие страны
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-5 lg:px-8">
        <span className="gold-hairline block" />
        <p className="mt-6 text-center text-xs tracking-[0.2em] text-muted-foreground">
          © 2026 Z89КАРГО
        </p>
      </div>
    </footer>
  );
}
