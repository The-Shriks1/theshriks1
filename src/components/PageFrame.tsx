import { ReactNode } from "react";

export function PageFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={`relative w-full min-h-screen grain ${className}`}>
      {/* deep vignette — keeps the obsidian field reading as true black at the edges */}
      <div
        className="pointer-events-none fixed inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {children}
    </main>
  );
}
