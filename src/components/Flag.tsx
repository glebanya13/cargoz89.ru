type FlagProps = {
  variant: "cn" | "ru";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

/** Fixed pixel sizes (3:2). */
const SIZES: Record<NonNullable<FlagProps["size"]>, { w: number; h: number }> = {
  sm: { w: 54, h: 36 },
  md: { w: 72, h: 48 },
  lg: { w: 96, h: 64 },
  xl: { w: 120, h: 80 },
};

const SRC = {
  cn: "/flags/cn.svg",
  ru: "/flags/ru.svg",
} as const;

const LABEL = {
  cn: "Китай",
  ru: "Россия",
} as const;

export function Flag({ variant, className = "", size = "md" }: FlagProps) {
  const { w, h } = SIZES[size];

  return (
    <span
      className={`relative shrink-0 overflow-hidden border-2 border-gold/60 shadow-[0_0_16px_-4px_var(--gold)] ${className || "inline-block"}`}
      style={{ width: w, height: h, borderRadius: 10 }}
      aria-label={LABEL[variant]}
      role="img"
    >
      <img
        src={SRC[variant]}
        alt=""
        width={w}
        height={h}
        className="block size-full object-cover"
        draggable={false}
      />
    </span>
  );
}
