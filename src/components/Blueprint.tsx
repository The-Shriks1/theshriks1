"use client";

import { ReactNode } from "react";

/** Side gutter showing the section number vertically with a hairline running the full height. */
export function SectionGutter({ index, codename }: { index: string; codename: string }) {
  return (
    <div
      aria-hidden
      className="absolute left-2 md:left-5 top-0 bottom-0 hidden md:flex flex-col items-center justify-between text-signal/40 mono caps text-[9px] tracking-[0.3em] pointer-events-none select-none z-10"
    >
      <div className="rotate-180 [writing-mode:vertical-rl] pt-10">{index}</div>
      <div className="w-px flex-1 bg-rule my-6" />
      <div className="rotate-180 [writing-mode:vertical-rl] pb-10">{codename}</div>
    </div>
  );
}

export function BlueprintCorners({ inset = 24 }: { inset?: number }) {
  const arm = 14;
  const style = { inset } as React.CSSProperties;
  return (
    <div className="pointer-events-none absolute z-10 text-signal/30" style={style}>
      <span className="absolute top-0 left-0">
        <span className="absolute -top-px left-0 w-[14px] h-px bg-current" />
        <span className="absolute top-0 -left-px h-[14px] w-px bg-current" />
      </span>
      <span className="absolute top-0 right-0">
        <span className="absolute -top-px right-0 w-[14px] h-px bg-current" />
        <span className="absolute top-0 -right-px h-[14px] w-px bg-current" />
      </span>
      <span className="absolute bottom-0 left-0">
        <span className="absolute -bottom-px left-0 w-[14px] h-px bg-current" />
        <span className="absolute bottom-0 -left-px h-[14px] w-px bg-current" />
      </span>
      <span className="absolute bottom-0 right-0">
        <span className="absolute -bottom-px right-0 w-[14px] h-px bg-current" />
        <span className="absolute bottom-0 -right-px h-[14px] w-px bg-current" />
      </span>
      <span style={{ width: arm, height: arm }} />
    </div>
  );
}

export function RuleLabel({ left, right }: { left: string; right?: string }) {
  return (
    <div className="flex items-baseline justify-between mono caps text-[10px] text-signal/45 border-t border-rule pt-3">
      <span>{left}</span>
      {right && <span>{right}</span>}
    </div>
  );
}

export function Annotation({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="mono caps text-[10px] text-signal/40 tabular-nums shrink-0 pt-[2px]">({n})</span>
      <span className="text-signal/70 leading-relaxed text-[15px]">{children}</span>
    </div>
  );
}

export function GridShell({ children }: { children: ReactNode }) {
  return <div className="relative max-w-[1320px] mx-auto px-6 md:px-16 lg:px-24">{children}</div>;
}
