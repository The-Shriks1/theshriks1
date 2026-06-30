"use client";

/**
 * Architectural callout — a label connected to a target by a hairline.
 * Use inline to annotate a number, a glyph, a section heading.
 */
export function Annotation({
  label,
  align = "right",
  width = 140,
  children,
}: {
  label: string;
  align?: "left" | "right";
  width?: number;
  children?: React.ReactNode;
}) {
  const isRight = align === "right";
  return (
    <span className="relative inline-flex items-center">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className={`hidden md:flex items-center ${isRight ? "left-full ml-3" : "right-full mr-3"} absolute top-1/2 -translate-y-1/2`}
        style={{ width }}
      >
        <span className={`flex-1 h-px bg-signal/40 ${isRight ? "" : "order-2"}`} />
        <span className={`mono caps text-[9px] text-signal/50 whitespace-nowrap ${isRight ? "ml-2" : "mr-2"}`}>{label}</span>
      </span>
    </span>
  );
}
