# PERFORMANCE BASELINE

## Methodology
Baseline was captured using Chrome DevTools Performance panel under a simulated 60Hz environment.

## Metrics Before Optimization
- **Average Frame Time:** ~24ms (Target: <16.7ms)
- **p95 Frame Time:** ~45ms
- **Long Tasks:** Multiple tasks > 50ms during scroll, primarily due to React hydration, continuous layout calculations from observers, and unpaused 3D renders.
- **Draw Calls:** Ranges from 150 to 300+ in sections with active WebGL canvases.
- **Triangles:** ~150k - 500k depending on the active model.
- **Video Playback:** Offscreen videos continue decoding, consuming CPU/GPU bandwidth.
- **Layout Shifts:** Minor layout shifts observed during zoom changes.

## Bottlenecks Identified
1. **Unpaused Offscreen Work:** WebGL canvases, videos, and animation loops run continuously even when not visible.
2. **Duplicate Loops:** Multiple `requestAnimationFrame` loops from Framer Motion, Lenis, and custom components fighting for main-thread time.
3. **Viewport Resizing:** Unstable usage of `100vw`/`100vh` causing layout thrashing on zoom.

## Action Plan
- Implement `CinematicRuntimeProvider` to track active sections.
- Pause offscreen WebGL and Video playback.
- Address zoom and layout stability by swapping `vh`/`vw` for `svh`/`svw` where appropriate.
