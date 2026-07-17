"use client";

import { useEffect, useState } from "react";
import { PAGES, SITE } from "@/lib/content";
import { useSound } from "./Sound";
import { motion, useScroll, useTransform } from "framer-motion";

function useClock() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function HUD() {
  const [activeId, setActiveId] = useState<string>("arrival");
  useEffect(() => {
    function onActive(e: Event) {
      setActiveId((e as CustomEvent<string>).detail);
    }
    window.addEventListener("section:active", onActive as EventListener);
    return () => window.removeEventListener("section:active", onActive as EventListener);
  }, []);

  const meta = PAGES[activeId] ?? { index: "—", codename: "UNCHARTED", status: "—" };
  const t = useClock();
  const { on, toggle } = useSound();
  const time = t.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.9, 0.98], [1, 0]);

  return (
    <motion.div style={{ opacity }} className="pointer-events-none">
      <div className="fixed bottom-5 left-5 z-40 mono caps text-[10px] text-signal/70 select-none pointer-events-auto">
        <div className="flex items-baseline gap-2">
          <span className="text-signal/40">SEC</span>
          <span className="text-signal text-[14px]">{meta.index}</span>
          <span className="text-signal/40">/</span>
          <span className="text-signal">{meta.codename}</span>
        </div>
        <div className="text-signal/40 mt-1">{meta.status}</div>
      </div>

      <div className="fixed bottom-5 right-5 z-40 mono caps text-[10px] text-signal/70 select-none flex items-center gap-3 pointer-events-auto">
        <span suppressHydrationWarning className="tabular-nums text-signal">{time}</span>
        <span className="hidden sm:inline text-signal/40">UTC</span>
        <span className="text-signal/30">·</span>
        <button onClick={toggle} aria-pressed={on} aria-label="Toggle ambient sound" className="hover:text-signal transition-colors pointer-events-auto">
          SOUND {on ? "ON" : "OFF"}
        </button>
        <span className="hidden sm:inline text-signal/30">·</span>
        <span className="hidden sm:inline text-signal/40">{SITE.version}</span>
      </div>
    </motion.div>
  );
}
