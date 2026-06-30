"use client";

import { ReactNode, useRef, useState, useEffect } from "react";

/**
 * Full-bleed looping background video hero.
 */
export function PlayableHero({
  src,
  poster,
  topLeft,
  topRight,
  bottomLeft,
  children,
}: {
  src: string;
  poster?: string;
  topLeft?: ReactNode;
  topRight?: ReactNode;
  bottomLeft?: ReactNode;
  children: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Try to play with sound immediately if allowed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {
        // If autoplay with sound is blocked, fallback to muted autoplay
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      // In case video is paused due to previous blocking, ensure it plays
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <section className="relative w-full h-[92vh] overflow-hidden bg-obsidian">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(1) contrast(1.05) brightness(0.82)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/55 via-obsidian/15 to-obsidian pointer-events-none" />

      {/* status row */}
      <div className="absolute top-24 inset-x-8 md:inset-x-16 flex items-baseline justify-between mono caps text-[10px] text-signal/65 pointer-events-none z-20">
        {topLeft}
        <div className="hidden md:block text-center text-signal/55">{topRight}</div>
        {bottomLeft}
      </div>

      {/* center overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 z-10">
        {children}
      </div>

      {/* Sound toggle button */}
      <button
        onClick={toggleSound}
        className="absolute bottom-16 right-8 md:right-16 z-20 flex items-center gap-3 mono caps text-[10px] text-signal/50 hover:text-signal transition-colors border border-signal/20 hover:border-signal/40 px-4 py-2"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-current opacity-70" />
        {isMuted ? "SOUND OFF" : "SOUND ON"}
      </button>
    </section>
  );
}
