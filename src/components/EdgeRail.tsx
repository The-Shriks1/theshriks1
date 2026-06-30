"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useClock() {
  const [t, setT] = useState("00:00:00");
  useEffect(() => {
    const tick = () => setT(new Date().toISOString().substring(11, 19));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

/** Fills the wide empty margins on large screens with persistent telemetry detail. */
export function EdgeRail() {
  const clock = useClock();
  return (
    <>
      <Rail side="left" clock={clock} top="TRANSMISSION" bottom="TELEMETRY · LIVE" />
      <Rail side="right" clock={clock} top="MOTHERSHIP" bottom="SIGNAL · STABLE" />
    </>
  );
}

function Rail({
  side,
  clock,
  top,
  bottom,
}: {
  side: "left" | "right";
  clock: string;
  top: string;
  bottom: string;
}) {
  const pos = side === "left" ? "left-6" : "right-6";
  return (
    <div
      aria-hidden
      className={`hidden 2xl:flex fixed ${pos} top-6 bottom-6 w-12 flex-col items-center justify-between py-12 z-20 pointer-events-none`}
    >
      <div className="mono text-[8px] tracking-[0.32em] text-signal/30 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
        {top}
      </div>

      <div className="relative w-px flex-1 bg-rule my-8 overflow-hidden">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 -translate-x-1/2 bg-signal/20"
            style={{
              top: `${(i / 8) * 100}%`,
              width: i % 2 === 0 ? "9px" : "4px",
              height: "1px",
            }}
          />
        ))}
        <motion.span
          className="absolute left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-signal/80"
          style={{ boxShadow: "0 0 8px rgba(242,242,242,0.6)" }}
          animate={{ top: ["2%", "98%", "2%"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="mono text-[8px] tracking-[0.2em] text-signal/40 tabular-nums [writing-mode:vertical-rl] rotate-180">
          {clock}
        </div>
        <div className="mono text-[8px] tracking-[0.28em] text-signal/25 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
          {bottom}
        </div>
      </div>
    </div>
  );
}
