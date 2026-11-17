import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "О компании", to: "/", hash: "about" },
  { label: "Услуги", to: "/", hash: "services" },
  { label: "Направления", to: "/", hash: "route" },
  { label: "Чаи и сувениры", to: "/chai" },
  { label: "Контакты", to: "/", hash: "contacts" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/92 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link to="/" className="flex flex-col gap-1">
          <Logo className="text-xl lg:text-2xl" />
          <span className="hidden text-[0.6rem] tracking-[0.35em] text-muted-foreground sm:block">
            НАДЕЖНО • БЫСТРО • ВЫГОДНО
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={"hash" in item ? item.hash : undefined}
              className="font-display text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-gold-bright"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+79258926777"
            className="font-display text-sm font-semibold tracking-[0.08em] text-foreground transition-colors hover:text-gold-bright"
          >
            +7 (925) 892-67-77
          </a>
          <Link to="/" hash="calculator" className="btn-gold !px-6 !py-3 !text-[0.7rem]">
            Рассчитать доставку
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+79258926777"
            aria-label="Позвонить"
            className="flex size-10 items-center justify-center rounded-sm border border-border text-gold"
          >
            <Phone className="size-4" />
          </a>
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-sm border border-border text-gold xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/98 px-5 py-6 xl:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={"hash" in item ? item.hash : undefined}
                onClick={() => setOpen(false)}
                className="font-display text-sm uppercase tracking-[0.16em] text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/"
            hash="calculator"
            onClick={() => setOpen(false)}
            className="btn-gold mt-6 w-full"
          >
            Рассчитать доставку
          </Link>
        </div>
      )}
    </header>
  );
}
