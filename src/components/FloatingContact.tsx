import { Phone } from "lucide-react";

export function FloatingContact() {
  return (
    <a
      href="tel:+79258926777"
      aria-label="Позвонить в Z89КАРГО"
      className="btn-gold fixed bottom-5 right-5 z-40 !rounded-full !p-4 lg:hidden"
    >
      <Phone className="size-5" />
    </a>
  );
}
