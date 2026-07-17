"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

type SoundCtx = {
  on: boolean;
  toggle: () => void;
};

const Ctx = createContext<SoundCtx>({ on: false, toggle: () => {} });

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState(false);
  const audio1Ref = useRef<HTMLVideoElement | null>(null); // Intro Space Ship
  const audio2Ref = useRef<HTMLAudioElement | null>(null); // Continuous Ambient
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onAppLoaded = () => {
      setOn(true); // Auto-start background music when loader finishes
    };
    window.addEventListener("appLoaded", onAppLoaded);
    return () => {
      window.removeEventListener("appLoaded", onAppLoaded);
    };
  }, []);

  const updateVolumes = (scrollVal: number) => {
    const a1 = audio1Ref.current;
    const a2 = audio2Ref.current;

    if (typeof scrollVal !== "number" || isNaN(scrollVal)) {
      scrollVal = 0;
    }

    // Audio 1: Intro spaceship (fades out as user scrolls down)
    if (a1) {
      let vol1 = 1.0 - (scrollVal / 0.15);
      if (vol1 < 0) vol1 = 0;
      if (vol1 > 1) vol1 = 1;
      a1.volume = vol1 * 1.0; 
    }

    // Audio 2: Ambient background (plays steadily from the start, fades out at footer)
    if (a2) {
      let vol2 = 1.0;
      if (scrollVal > 0.9) {
        vol2 = 1.0 - ((scrollVal - 0.9) / 0.08); 
      }
      
      if (vol2 < 0) vol2 = 0;
      if (vol2 > 1) vol2 = 1;
      
      // Safety check for NaN to prevent DOM exceptions
      if (!isNaN(vol2)) {
        a2.volume = vol2 * 0.45; // Max 45% volume for ambient so it's not overpowering
      }
    }
  };

  useEffect(() => {
    if (on) {
      // Force volume to 0.0 scroll state (top of page) when turning on. 
      // Do not trust scrollYProgress.get() here because if the page just expanded from 100vh, 
      // the scroll physics might still be stuck at 1.0, causing 0 volume until the user scrolls!
      updateVolumes(0);
    }
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (on) updateVolumes(latest);
    });
    return () => unsubscribe();
  }, [on, scrollYProgress]);

  useEffect(() => {
    const a1 = audio1Ref.current;
    const a2 = audio2Ref.current;
    if (!a1 || !a2) return;

    if (!on) {
      a1.pause();
      a2.pause();
      return;
    }

    let unlocked = false;

    const tryPlay = () => {
      if (unlocked || !on) return;
      
      const p1 = a1.play();
      const p2 = a2.play();

      if (p1 !== undefined) {
        p1.then(() => {
          unlocked = true;
          // Clean up aggressive listeners once unlocked
          window.removeEventListener("pointerdown", tryPlay);
          window.removeEventListener("keydown", tryPlay);
          window.removeEventListener("wheel", tryPlay);
          window.removeEventListener("touchstart", tryPlay);
        }).catch((e) => {
          // Browser blocked autoplay, keep listeners active to catch next physical interaction
        });
      }
    };

    // Aggressively attempt to unlock audio on literally any microscopic physical interaction
    window.addEventListener("pointerdown", tryPlay);
    window.addEventListener("keydown", tryPlay);
    window.addEventListener("wheel", tryPlay);
    window.addEventListener("touchstart", tryPlay);

    // Initial attempt (Will succeed instantly if user previously interacted)
    a1.currentTime = 0;
    tryPlay();

    return () => {
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("keydown", tryPlay);
      window.removeEventListener("wheel", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
  }, [on]);

  return (
    <Ctx.Provider value={{ on, toggle: () => setOn((v) => !v) }}>
      {/* Hidden media elements for audio processing */}
      <video ref={audio1Ref} src="/sounds/Spaceshipsound.mov" loop playsInline style={{ display: "none" }} preload="auto" />
      <audio ref={audio2Ref} src="/sounds/ambient.mp3" loop preload="auto" />
      {children}
    </Ctx.Provider>
  );
}

export function useSound() {
  return useContext(Ctx);
}
