"use client";

import { ReactNode, useEffect, useRef } from "react";

export function SectionShell({
  id,
  children,
  className = "",
  minH = "min-h-screen",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  minH?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            window.dispatchEvent(new CustomEvent("section:active", { detail: id }));
          }
        }
      },
      { rootMargin: "-30% 0px -69% 0px" } // Triggers when section crosses the top 30% of the viewport
    );
    io.observe(el);
    return () => io.disconnect();
  }, [id]);

  return (
    <section id={id} ref={ref} className={`relative w-full ${minH} ${className}`}>
      {children}
    </section>
  );
}
