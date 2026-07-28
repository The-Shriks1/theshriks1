# PERFORMANCE RUNTIME INVENTORY

## Overview
This document tracks all active runtime loops, observers, and continuous operations that affect frame rate.

## Components

### 1. `ArrivalSection` (Video)
- **Type:** Video Playback
- **Trigger:** Scroll Intersection
- **Offscreen status:** Continues playing offscreen (needs fix)
- **Proposed Optimization:** Connect to CinematicRuntimeProvider; `video.pause()` when inactive.

### 2. `BriefingSection` (Multiple Videos)
- **Type:** Video Playback
- **Trigger:** Hover/Active State
- **Offscreen status:** Continues playing offscreen
- **Proposed Optimization:** Only decode active video. Preload metadata for others. Pause all on section exit.

### 3. `AppLayoutWrapper` (Global Canvas)
- **Type:** React Three Fiber Canvas
- **Trigger:** Global Mount
- **Offscreen status:** Always active
- **Proposed Optimization:** Use `frameloop="demand"` or pause `useFrame` callbacks inside Views when not in viewport.

### 4. Framer Motion Scroll Effects (`useScroll`, `useTransform`)
- **Type:** Scroll Event Listener & Animation Loop
- **Trigger:** Window Scroll
- **Offscreen status:** Calculates regardless of visibility.
- **Proposed Optimization:** Consolidate scroll tracking if possible.

### 5. `SectionShell` (Intersection Observer)
- **Type:** Layout Observer
- **Trigger:** Scroll
- **Offscreen status:** Active
- **Proposed Optimization:** Already relatively efficient, but can broadcast `section:active` more robustly through Context instead of window events to avoid global listener buildup.
