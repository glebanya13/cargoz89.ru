export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-extrabold tracking-[0.06em] leading-none ${className}`}>
      <span className="text-gold-gradient">Z89</span>
      <span className="text-foreground/90">КАРГО</span>
    </span>
  );
}
