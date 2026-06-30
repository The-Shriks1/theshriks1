"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

type SoundCtx = {
  on: boolean;
  toggle: () => void;
};

const Ctx = createContext<SoundCtx>({ on: false, toggle: () => {} });

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio("/audio/bed.mp3");
    a.loop = true;
    a.volume = 0.18;
    a.preload = "none";
    audioRef.current = a;
    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (on) {
      void a.play().catch(() => setOn(false));
    } else {
      a.pause();
    }
  }, [on]);

  return <Ctx.Provider value={{ on, toggle: () => setOn((v) => !v) }}>{children}</Ctx.Provider>;
}

export function useSound() {
  return useContext(Ctx);
}
