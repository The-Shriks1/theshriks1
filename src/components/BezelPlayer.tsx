"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
function PlayIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function RestartIcon() {
  return (
    <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
      <path d="M3.5 11c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5c-2.07 0-3.95-.84-5.3-2.2L3.5 14v4.5M3.5 11h5.5" />
    </svg>
  );
}

function VolumeMuteIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
  );
}

function VolumeHighIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </svg>
  );
}

const PLAYLIST = [
  {
    id: "01",
    name: "Venture Launch",
    src: "/videos/1-video.mp4",
    type: "MP4 · 1080P",
    duration: "2:02",
    status: "LAUNCHED · 22 FEB",
    link: "https://www.instagram.com/reel/DVEICBcjfW-/",
    captions: [
      { time: 0, text: "[SYS] LOADING SIGNAL 01: VENTURE DEPLOYMENT PROTOCOLS" },
      { time: 4, text: "[COM-1] THE SHRIKS: MISSION DIRECTIVE INITIATED ON FEB 22" },
      { time: 8, text: "[SYS] DETECTING DUAL COMMAND CORE STRUCTURE" },
      { time: 12, text: "[COM-2] ALIGNING CHANNELS. INITIALIZING ENGINES" },
      { time: 16, text: "[COM-1] WE ENGINEER WHAT OTHERS WILL NOT" },
      { time: 20, text: "[SYS] SYSTEM SIGNAL: ACTIVE AND ONLINE" }
    ]
  },
  {
    id: "02",
    name: "LokiAI Announcement",
    src: "/videos/2-video.mp4",
    type: "MP4 · 1080P",
    duration: "0:48",
    status: "TRAILER · 18 JUN",
    link: "https://www.instagram.com/reel/DZuxLsINqJl/",
    captions: [
      { time: 0, text: "[SYS] LOADING SIGNAL 02: VESSEL I ANNOUNCEMENT" },
      { time: 4, text: "[COM-1] PRODUCT DISPATCH DEPLOYED: LOKIAI TRAILER" },
      { time: 8, text: "[SYS] TARGET: EDGE AI AND DISTRIBUTED DEPLOYMENT" },
      { time: 12, text: "[COM-2] MOBIUS AGENT SYSTEM COMING TO HANGAR ONE" },
      { time: 16, text: "[SYS] STATUS: UNDER ACTIVE CONVOLUTION" }
    ]
  },
  {
    id: "03",
    name: "I Didn't Know The Shriks Can Do That",
    src: "/videos/3-video.mov",
    type: "MOV · 4K",
    duration: "0:25",
    status: "SERIES I · 28 JUN",
    link: "https://www.instagram.com/reel/DaGO1FDtzyD/",
    captions: [
      { time: 0, text: "[SYS] LOADING SIGNAL 03: CONTENT INGESTION PROTOCOLS" },
      { time: 3, text: "[COM-2] SERIES PREMIERE: 'I DIDN'T KNOW THE SHRIKS CAN DO THAT'" },
      { time: 7.5, text: "[COM-1] FOCUSING ON TRANSPARENT CRAFT AND ENGINEERING DEVIATION" },
      { time: 12, text: "[SYS] TRANSMITTING ON STANDING CHANNEL 04" },
      { time: 16, text: "[SYS] CONTENT PIPELINES NOMINAL // STREAM CLEAR" }
    ]
  }
];

export function BezelPlayer() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentCaption, setCurrentCaption] = useState("");
  const [glitch, setGlitch] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const selectedVideo = PLAYLIST[selectedIdx];

  // Initial autoplay on scroll into view
  useEffect(() => {
    if (isInView && !isPlaying && currentTime === 0) {
      setIsPlaying(true);
      setShowTitle(true);
      if (videoRef.current) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      }
      const titleTimer = setTimeout(() => setShowTitle(false), 4500);
      return () => clearTimeout(titleTimer);
    }
  }, [isInView]);

  // Sync state when playlist index changes
  useEffect(() => {
    setGlitch(true);
    setShowTitle(true);
    const glitchTimer = setTimeout(() => setGlitch(false), 300);
    const titleTimer = setTimeout(() => setShowTitle(false), 4500);

    const video = videoRef.current;
    if (video) {
      video.load();
      if (isPlaying) {
        video.play().catch(() => setIsPlaying(false));
      }
    }
    return () => {
      clearTimeout(glitchTimer);
      clearTimeout(titleTimer);
    };
  }, [selectedIdx]);

  // Sync captions and metadata on time update
  useEffect(() => {
    if (!selectedVideo.captions) {
      setCurrentCaption("");
      return;
    }
    const match = [...selectedVideo.captions]
      .reverse()
      .find((c) => currentTime >= c.time);
    setCurrentCaption(match ? match.text : "");
  }, [currentTime, selectedVideo]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const seekTime = parseFloat(e.target.value);
    video.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setCurrentTime(0);
    if (!isPlaying) {
      video.play().then(() => setIsPlaying(true));
    }
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const ms = Math.floor((time % 1) * 100);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${ms.toString().padStart(2, "0")}`;
  };

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-8">
      {/* 21:9 VIDEO WITH CRT BEZEL */}
      <div className="w-full flex flex-col items-center">
        {/* Outer CRT Bezel */}
        <div className="relative w-full border border-rule/70 rounded-[32px] p-5 md:p-7 bg-[#0b0b0b] shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_24px_rgba(255,255,255,0.03)] border-b-[6px] border-b-rule-strong/40">
          
          {/* Inner concentric bezel frame */}
          <div className="relative border border-rule-strong/60 rounded-[20px] p-2 bg-[#060606] shadow-[inset_0_0_12px_rgba(0,0,0,0.9)]">
            
            {/* Screen container with aspect-[21/9] */}
            <div className="relative overflow-hidden rounded-[14px] bg-black aspect-[21/9] scanlines group shadow-[inset_0_0_40px_rgba(0,0,0,1)]">
              {/* Glass Glare shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10 opacity-70" />
              
              {/* CRT Phosphor Glow */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none z-10" />

              <video
                ref={videoRef}
                src={selectedVideo.src}
                playsInline
                autoPlay
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={handlePlayPause}
                onEnded={handleNext}
                className={`w-full h-full object-cover pointer-events-auto cursor-pointer transition-all duration-300 ${
                  glitch ? "opacity-20 scale-95 blur-sm" : "opacity-85 grayscale contrast-[1.08] brightness-[0.88]"
                }`}
              />

              {/* Fading Title overlay */}
              <AnimatePresence>
                {showTitle && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 1 }}
                    className="absolute top-3 left-4 md:top-6 md:left-8 z-30 pointer-events-none"
                  >
                    <div className="caps text-signal text-[12px] sm:text-[18px] md:text-[24px] tracking-wide font-medium drop-shadow-md">
                      {selectedVideo.name}
                    </div>
                    <div className="mono text-signal/70 text-[8px] md:text-[10px] tracking-[0.2em] mt-1 drop-shadow-md">
                      {selectedVideo.status}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating NEXT VIDEO button */}
              <div className="absolute right-6 top-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="mono caps text-[10px] text-white/80 hover:text-white bg-obsidian/60 hover:bg-obsidian/90 px-4 py-2 border border-rule/50 rounded backdrop-blur-md flex items-center gap-2 transition-all shadow-lg"
                >
                  NEXT VIDEO <NextIcon />
                </button>
              </div>

              {/* Subtitles Overlay */}
              <AnimatePresence>
                {currentCaption && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-2 md:bottom-5 inset-x-4 md:inset-x-8 flex justify-center pointer-events-none z-20"
                  >
                    <span className="mono text-[8px] sm:text-[10px] md:text-[11px] caps tracking-[0.12em] sm:tracking-[0.18em] text-signal bg-obsidian/85 px-2 py-1 md:px-4 md:py-2 border border-rule rounded-sm backdrop-blur-md shadow-lg text-center max-w-[90%] border-l-2 border-l-signal/60">
                      {currentCaption}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Play state overlay when paused */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none z-10"
                  >
                    <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] border border-rule px-4 py-2 bg-obsidian/70 backdrop-blur-sm rounded pointer-events-none">
                      [ PAUSE ] click screen to resume
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Lower Bezel Panel: LED Indicator, Text Label, Dial Buttons */}
          <div className="mt-4 flex items-center justify-between px-3">
            {/* Display Model Name */}
            <div className="mono caps text-[9px] text-signal/30 tracking-[0.2em]">
              THE SHRIKS // DISPLAY-V5 // 21:9 WIDE
            </div>

            {/* LED Status Light */}
            <div className="flex items-center gap-2">
              <span className="mono text-[9px] text-signal/25 caps tracking-wider">SIG STAT</span>
              <span className={`w-2 h-2 rounded-full shadow-[0_0_6px_rgba(42,138,90,0.8)] transition-all duration-300 ${
                isPlaying ? "bg-loki-glow animate-pulse" : "bg-signal/30"
              }`} />
            </div>
          </div>
        </div>

        {/* Video Controls Panel */}
        <div className="w-full mt-4 bg-[#0a0a0a] border border-rule rounded-xl p-4 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            
            {/* Buttons Row (centered on mobile, normal on desktop) */}
            <div className="flex items-center justify-center sm:justify-start gap-4">
              {/* Play/Pause Button */}
              <button
                onClick={handlePlayPause}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-rule hover:border-signal/50 text-signal/80 hover:text-signal bg-obsidian transition-colors text-xs"
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>

              {/* Restart Button */}
              <button
                onClick={handleRestart}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-rule hover:border-signal/50 text-signal/80 hover:text-signal bg-obsidian transition-colors text-xs"
                title="Restart"
              >
                <RestartIcon />
              </button>

              {/* Next Video Button */}
              <button
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-rule hover:border-signal/50 text-signal/80 hover:text-signal bg-obsidian transition-colors text-xs"
                title="Next Video"
              >
                <NextIcon />
              </button>

              {/* Mobile Volume Toggle */}
              <button
                onClick={handleMuteToggle}
                className="w-10 h-10 sm:hidden flex items-center justify-center rounded-lg border border-rule hover:border-signal/50 text-signal/80 hover:text-signal bg-obsidian transition-colors text-xs"
              >
                {isMuted ? <VolumeMuteIcon /> : <VolumeHighIcon />}
              </button>
            </div>

            {/* Progress Slider (takes full width on mobile, fills remaining space on desktop) */}
            <div className="flex-1 flex items-center gap-3">
              <span className="mono text-[10px] text-signal/50 tabular-nums shrink-0">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1 bg-rule rounded-lg appearance-none cursor-pointer accent-signal hover:accent-signal/80"
                style={{
                  background: `linear-gradient(to right, rgba(242, 242, 242, 0.4) 0%, rgba(242, 242, 242, 0.4) ${(currentTime / (duration || 100)) * 100}%, rgba(242, 242, 242, 0.08) ${(currentTime / (duration || 100)) * 100}%, rgba(242, 242, 242, 0.08) 100%)`
                }}
              />
              <span className="mono text-[10px] text-signal/50 tabular-nums shrink-0">{formatTime(duration)}</span>
            </div>

            {/* Desktop Volume Toggle */}
            <button
              onClick={handleMuteToggle}
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-lg border border-rule hover:border-signal/50 text-signal/80 hover:text-signal bg-obsidian transition-colors text-xs shrink-0"
            >
              {isMuted ? <VolumeMuteIcon /> : <VolumeHighIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* TECHNICAL PLAYLIST & TELEMETRY */}
      <div className="w-full grid md:grid-cols-2 gap-6">
        {/* Playlist selection */}
        <div className="border border-rule rounded-xl bg-[#0a0a0a] p-5">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">SELECT BROADCAST CHANNEL</div>
          
          <div className="flex flex-col gap-3">
            {PLAYLIST.map((video, idx) => {
              const active = idx === selectedIdx;
              return (
                <button
                  key={video.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-4 border rounded-lg transition-all duration-300 flex flex-col gap-1 relative overflow-hidden ${
                    active
                      ? "border-signal/40 bg-obsidian/75 shadow-lg"
                      : "border-rule bg-transparent hover:border-rule-strong hover:bg-obsidian/20"
                  }`}
                >
                  {/* Subtle active highlight bar */}
                  {active && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-signal/60" />
                  )}
                  <div className="flex justify-between items-baseline">
                    <span className="mono caps text-[9px] text-signal/30">SIG {video.id}</span>
                    <span className="mono text-[9px] text-signal/40">{video.type}</span>
                  </div>
                  <div className="caps text-[14px] font-medium text-signal mt-1">
                    {video.name}
                  </div>
                  <div className="flex justify-between items-center mt-2 mono text-[9px] text-signal/40">
                    <span>{video.status}</span>
                    <span>{video.duration}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Technical Telemetry Dashboard */}
        <div className="border border-rule rounded-xl bg-[#0a0a0a] p-5 mono">
          <div className="caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">CONSOLE STATE</div>
          
          <div className="space-y-3 text-[11px] text-signal/60">
            <div className="flex justify-between border-b border-rule pb-2">
              <span className="text-signal/30">BITRATE</span>
              <span className="text-signal/80 tabular-nums">12.4 Mbps (avg)</span>
            </div>
            <div className="flex justify-between border-b border-rule pb-2">
              <span className="text-signal/30">FRAME RATE</span>
              <span className="text-signal/80 tabular-nums">24.00 fps</span>
            </div>
            <div className="flex justify-between border-b border-rule pb-2">
              <span className="text-signal/30">DIMENSIONS</span>
              <span className="text-signal/80 tabular-nums">
                {selectedVideo.type.includes("4K") ? "3840 x 1632 (4K Cinematic)" : "1920 x 816 (1080P Cinematic)"}
              </span>
            </div>
            {selectedVideo.link && (
              <div className="flex justify-between border-b border-rule pb-2 items-center">
                <span className="text-signal/30">EXTERNAL LINK</span>
                <a
                  href={selectedVideo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-signal/80 hover:text-signal hover:underline flex items-center gap-1"
                >
                  INSTAGRAM REEL ↗
                </a>
              </div>
            )}
            <div className="flex justify-between border-b border-rule pb-2">
              <span className="text-signal/30">AUDIO RENDER</span>
              <span className="text-signal/80">{isMuted ? "MUTED [BY DEFAULT]" : "STEREO // 48kHz"}</span>
            </div>
            <div className="flex justify-between border-b border-rule pb-2">
              <span className="text-signal/30">TIMECODE</span>
              <span className="text-signal/80 tabular-nums">{formatTime(currentTime)}</span>
            </div>
            <div className="flex justify-between border-b border-rule pb-2">
              <span className="text-signal/30">BUFFER STATE</span>
              <span className="text-signal/80 text-loki-glow animate-pulse">OPTIMIZED</span>
            </div>
          </div>

          {/* Simple Decorative Spectrum Visualizer */}
          <div className="mt-6 border border-rule rounded-lg p-3 bg-obsidian h-12 flex items-center justify-between gap-1 overflow-hidden">
            {Array.from({ length: 24 }).map((_, i) => {
              // Create dynamic variations if playing
              const heightValue = isPlaying 
                ? [20, 60, 40, 90, 30, 80, 50, 70][(i + Math.floor(currentTime * 3)) % 8] 
                : 15;
              return (
                <motion.div
                  key={i}
                  animate={{ height: `${heightValue}%` }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                  className="w-1 bg-signal/30 rounded-t-sm"
                  style={{ minHeight: "2px" }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
