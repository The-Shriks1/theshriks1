# LAYOUT STABILITY INVENTORY

## Overview
This document logs components with positioning models that may cause layout shifts during zoom, resize, or viewport changes.

## Components

### 1. Global Viewport Constraints
- **Current Model:** Usage of `min-h-screen`, `h-screen`.
- **Known Risk:** Mobile browsers with dynamic navigation bars can cause `100vh` to resize, triggering layout thrashing.
- **Proposed Optimization:** Replace with `min-h-[100svh]` or `h-[100svh]` where appropriate to prevent jumps.

### 2. Video & Canvas Elements
- **Current Model:** Fixed width/height or absolute positioned to fill containers.
- **Known Risk:** May stretch or detach if aspect ratios are not strictly preserved.
- **Proposed Optimization:** Ensure `object-cover` for videos and precise bounding boxes for canvases.

### 3. Absolute Positioned UI (`HUD.tsx`, `Nav.tsx`)
- **Current Model:** `position: fixed` or `position: absolute`.
- **Known Risk:** Overlapping content on zoom.
- **Proposed Optimization:** Use stable containing blocks; avoid raw pixel offsets without boundaries.
