"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Star {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

export function HyperspaceLoader({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [status, setStatus] = useState<"jumping" | "flashing" | "complete">("jumping");
  const requestRef = useRef<number | null>(null);
  const speedRef = useRef(0.2);
  const targetSpeedRef = useRef(0.2);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [needsClick, setNeedsClick] = useState(false);
  const needsClickRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    let stretchTimer: NodeJS.Timeout;
    let jumpTimer: NodeJS.Timeout;
    let flashTimer: NodeJS.Timeout;
    let completeTimer: NodeJS.Timeout;
    let animationStarted = false;

    const startAnimation = () => {
      if (animationStarted) return;

      // Attempt autoplay
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Autoplay succeeded! Start visuals.
          animationStarted = true;
          setNeedsClick(false);
          stretchTimer = setTimeout(() => { targetSpeedRef.current = 60; }, 1800);
          jumpTimer = setTimeout(() => { targetSpeedRef.current = 1500; }, 2650);
          flashTimer = setTimeout(() => { setStatus("flashing"); }, 3200);
          completeTimer = setTimeout(() => { setStatus("complete"); onComplete(); }, 4500);
        }).catch((e) => {
          console.warn("Autoplay blocked by browser:", e);
          // Require click to start sound and visuals
          setNeedsClick(true);
          needsClickRef.current = true;
        });
      }
    };

    // Wait for video/audio to buffer to prevent latency desync
    if (video.readyState >= 3) {
      startAnimation();
    } else {
      video.addEventListener("canplaythrough", startAnimation, { once: true });
      setTimeout(startAnimation, 2000);
    }

    const handleUserClick = () => {
      if (needsClickRef.current && video.paused) {
        setNeedsClick(false);
        needsClickRef.current = false;
        animationStarted = true;
        video.play().catch(() => {});
        stretchTimer = setTimeout(() => { targetSpeedRef.current = 60; }, 1800);
        jumpTimer = setTimeout(() => { targetSpeedRef.current = 1500; }, 2650);
        flashTimer = setTimeout(() => { setStatus("flashing"); }, 3200);
        completeTimer = setTimeout(() => { setStatus("complete"); onComplete(); }, 4500);
      } else if (video.paused && animationStarted) {
        video.play().catch(() => {}); // fallback if they click mid-animation
      }
    };
    window.addEventListener("pointerdown", handleUserClick);
    window.addEventListener("click", handleUserClick);
    
    // Attach the handler to the window object so it can be called directly from the React element
    (window as any).__hyperspaceUserClick = handleUserClick;

    return () => {
      window.removeEventListener("pointerdown", handleUserClick);
      window.removeEventListener("click", handleUserClick);
      video.removeEventListener("canplaythrough", startAnimation);
      delete (window as any).__hyperspaceUserClick;
      clearTimeout(stretchTimer);
      clearTimeout(jumpTimer);
      clearTimeout(flashTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const starCount = 4500; // Whole galaxy filled
    const layers: Star[][] = [[], [], []];
    const fov = 160;

    for (let i = 0; i < starCount; i++) {
      const rand = Math.random();
      let l = 0;
      if (rand > 0.85) l = 2; // 15% foreground
      else if (rand > 0.4) l = 1; // 45% mid
      
      layers[l].push({
        x: (Math.random() - 0.5) * width * 3.0,
        y: (Math.random() - 0.5) * height * 3.0,
        z: Math.random() * 2000,
        px: 0,
        py: 0,
      });
    }

    const render = () => {
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05;

      // Lower minimum alpha to allow trails to smear intensely during jump
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.max(0.015, 0.4 - speedRef.current * 0.005)})`;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Render 3 distinct depth layers for extreme parallax detailing
      for (let l = 0; l < 3; l++) {
        ctx.beginPath();
        
        if (l === 0) { // Distant: dim, thin, slow
          ctx.strokeStyle = speedRef.current > 50 ? "rgba(140, 140, 140, 0.4)" : "rgba(80, 80, 80, 0.3)";
          ctx.lineWidth = Math.min(1.5, 0.5 + speedRef.current * 0.001);
        } else if (l === 1) { // Mid: medium
          ctx.strokeStyle = speedRef.current > 50 ? "rgba(220, 220, 220, 0.7)" : "rgba(160, 160, 160, 0.5)";
          ctx.lineWidth = Math.min(2.5, 1.0 + speedRef.current * 0.002);
        } else { // Foreground: bright, thick, fast
          ctx.strokeStyle = speedRef.current > 50 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.9)";
          ctx.lineWidth = Math.min(4.5, 1.5 + speedRef.current * 0.005);
        }

        const layerSpeedMultiplier = l === 0 ? 0.2 : l === 1 ? 0.6 : 1.2;
        const currentSpeed = speedRef.current * layerSpeedMultiplier;

        const stars = layers[l];
        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          
          star.z -= currentSpeed;

          if (star.z <= 0) {
            star.z = 2000;
            star.x = (Math.random() - 0.5) * width * 3.0;
            star.y = (Math.random() - 0.5) * height * 3.0;
            star.px = 0;
            star.py = 0;
          }

          const sx = (star.x / star.z) * fov + cx;
          const sy = (star.y / star.z) * fov + cy;

          if (star.px !== 0 && star.py !== 0 && sx > 0 && sx < width && sy > 0 && sy < height) {
            ctx.moveTo(star.px, star.py);
            ctx.lineTo(sx, sy);
          }

          star.px = sx;
          star.py = sy;
        }
        ctx.stroke();
      }

      // Overdrive Core Glow Blowout during max speed
      if (speedRef.current > 200) {
        const glowSize = Math.min(width, (speedRef.current - 200) * 1.5);
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowSize);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, speedRef.current * 0.0008)})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      requestRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {status !== "complete" && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-black overflow-hidden pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Use hidden video tag to support .mov audio decoding in Chrome/Edge */}
          <video ref={videoRef} src="/sounds/HyperDrive.mov" style={{ display: "none" }} preload="auto" />

          {/* Warp Canvas Background */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Autoplay Blocked UI */}
          <AnimatePresence>
            {needsClick && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  if ((window as any).__hyperspaceUserClick) {
                    (window as any).__hyperspaceUserClick();
                  }
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-auto z-[100000] cursor-pointer"
              >
                <div className="mono text-white text-[12px] tracking-[0.3em] uppercase bg-black/50 px-8 py-4 border border-white/20 animate-pulse pointer-events-none text-center">
                  Tap to enter The Shriks Universe via Hyperdrive
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cinematic Flash Overlay */}
          <AnimatePresence>
            {status === "flashing" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white z-[999999]"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
