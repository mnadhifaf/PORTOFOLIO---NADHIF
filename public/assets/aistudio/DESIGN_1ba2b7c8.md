---
name: Studio Viewport
colors:
  surface: '#f9f9ff'
  surface-dim: '#d9d9df'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f9'
  surface-container: '#ededf3'
  surface-container-high: '#e8e8ed'
  surface-container-highest: '#e2e2e8'
  on-surface: '#1a1c20'
  on-surface-variant: '#434656'
  inverse-surface: '#2f3035'
  inverse-on-surface: '#f0f0f6'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ee7'
  primary: '#0043c8'
  on-primary: '#ffffff'
  primary-container: '#0057ff'
  on-primary-container: '#e5e8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#874780'
  on-secondary: '#ffffff'
  secondary-container: '#fdb0f1'
  on-secondary-container: '#7b3d75'
  tertiary: '#972800'
  on-tertiary: '#ffffff'
  tertiary-container: '#c13600'
  on-tertiary-container: '#ffe3db'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#001550'
  on-primary-fixed-variant: '#003ab2'
  secondary-fixed: '#ffd7f5'
  secondary-fixed-dim: '#faaeee'
  on-secondary-fixed: '#380038'
  on-secondary-fixed-variant: '#6c3067'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb59f'
  on-tertiary-fixed: '#3a0a00'
  on-tertiary-fixed-variant: '#862300'
  background: '#f9f9ff'
  on-background: '#1a1c20'
  surface-variant: '#e2e2e8'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 96px
    letterSpacing: 0.02em
  display-xl-mobile:
    fontFamily: Anton
    fontSize: 52px
    fontWeight: '400'
    lineHeight: 54px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  script-accent:
    fontFamily: Caveat
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  telemetry-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  telemetry-sub:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 2rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the tension between precise technical tooling and tactile, expressive creative direction. Designed for creative technologists, 3D artists, and spatial designers, it bridges software production environments (CAD viewports, node graphs, rendering suites) and physical art studio ephemera.

The aesthetic fuses **Digital Brutalism** and **Tactile Skeuomorphism** within a high-contrast editorial framework:
- **Studio Canvas:** An expansive, physical-feeling drafting table textured with blueprint gridlines and soft perimeter vignettes.
- **Floating Workspaces:** Dark-mode floating software viewports, inspection HUDs, and layer stacks hovering in isometric and orthographic space over an off-white plane.
- **Expressive Notation:** Rapid, hand-annotated director remarks juxtaposed against ultra-condensed architectural headers and monospace telemetry data.

## Colors

The palette operates on sharp spatial contrast: an expansive warm-neutral drafting surface supporting deep, dense software viewports and sharp spectral accents.

### Core Canvas & Surfaces
- **Canvas Base (`#F8F9FA`):** The ambient studio table substrate.
- **Pure Canvas (`#FFFFFF`):** Card faces, paper callouts, and inset previews.
- **Grid Lines (`rgba(15, 17, 21, 0.055)`):** 32px blueprint technical coordinate intersections.
- **Ink Primary (`#0F1115`):** Structural typographic ink, heavy rules, and vector crosshairs.
- **Ink Soft (`rgba(15, 17, 21, 0.65)`): Secondary descriptions, scale meters, and dimensional labels.

### Floating Hardware & Panels
- **Panel Dark (`#16181D`):** Floating inspector panels, tool docks, and viewport frames.
- **Panel Header (`#1F232B`):** Title bars and nested tool groupings.
- **Panel Border (`rgba(255, 255, 255, 0.12)`): Crisp structural dividers inside dark viewports.
- **Window Controls:** Standardized macOS terminal pips: Close (`#FF5F56`), Minimize (`#FFBD2E`), and Expand (`#27C93F`).

### Accents & Signifiers
- **Electric Cobalt (`#0057FF`):** Selection bounding boxes, active transform handles, primary actions, and expressive script annotations.
- **Cobalt Glow (`rgba(0, 87, 255, 0.28)`): Ambient field emission for selected floating 3D nodes.
- **Pastel Pink Frame (`#F4A8E8`):** Secondary selection state, camera frustum frames, and secondary viewport borders.

## Typography

The typographic hierarchy enforces a high-density, multi-layered editorial style:
- **Anton (Display & Headlines):** Set strictly in uppercase with compact tracking. Delivers authoritative framing reminiscent of exhibition catalogues and industrial machinery stamping.
- **Plus Jakarta Sans (Body & System UI):** Balances geometric legibility with modern humanist proportions for multi-line project descriptions, property inspectors, and parameter trees.
- **Caveat (Expressive Script):** Reserved exclusively for human art-direction callouts, quick editorial markup, directional arrows, and informal sticky notes. Always styled in Electric Cobalt (`#0057FF`) with a slight clockwise or counter-clockwise rotation (-2deg to 4deg).
- **JetBrains Mono (Telemetry & Engine Readouts):** Drives matrix coordinates, spatial dimensioning, frame rate counters, keyboard shortcut combinations, and layer indices.

## Layout & Spacing

The canvas is constructed on a permanent 32px by 32px technical matrix rendered via `--grid-line`. Floating modules snap to this coordinate field.

### Grid & Composition
- **Desktop (1024px+):** A 12-column fluid system overlaid onto the base matrix. The layout embraces intentional asymmetry: floating software windows break out of column constraints using absolute coordinate offsets to mimic overlapping CAD toolbars.
- **Tablet (768px - 1023px):** 8-column layout. Floating panels collapse into stacked, tabbed containers while retaining isometric preview badges.
- **Mobile (<768px):** 4-column single-stream stack. Dark floating windows shift to edge-to-edge docked drawers with fixed top status headers.

### Spatial Rhythms
- Canvas outer margin anchors at `margin` (48px) on desktop to preserve the visible perimeter drafting vignette.
- Panel internal padding strictly uses `space-md` (16px) for headers and `space-sm` (8px) for compact telemetry grids.

## Elevation & Depth

Visual depth is achieved through physical elevation tiers rather than standard web dropshadows:

1. **Ground Tier (Canvas Table):** `#F8F9FA` with 32px grid lines and a soft radial vignette (`radial-gradient(circle at 50% 50%, transparent 60%, rgba(15, 17, 21, 0.04) 100%)`).
2. **Layer 1 (Bounding Boxes & Telemetry Overlays):** 1px vector lines with zero blur, styled in `#0057FF` or `#F4A8E8`. Handles sit at corner intersections with 6px inverted crosshair marks.
3. **Layer 2 (Floating Dark Software Viewports):** Deep, structural floating windows using `#16181D` backgrounds, crisp 1px borders (`rgba(255, 255, 255, 0.12)`), and high-mass ambient shadows: `0 24px 48px -12px rgba(15, 17, 21, 0.35), 0 4px 12px -2px rgba(15, 17, 21, 0.12)`.
4. **Layer 3 (Hovering 3D Nodes & Badges):** Squircle badges suspended above viewports with vibrant directional illumination: `0 12px 28px -4px rgba(0, 87, 255, 0.28)`.

## Shapes

The design system operates with geometric precision punctuated by intentional squircles:
- **Floating Software Windows:** Defined by a consistent 0.5rem (`roundedness: 2`) border radius, honoring native OS application windows without feeling bubbly.
- **Hardware Window Pips:** 12px true circles for window controls.
- **Vector Nodes & 3D Badges:** Continuous-curvature squircles (`rounded-lg: 1rem`) producing a soft, tactile, high-tech handheld aesthetic.
- **Technical Transform Handles & Crosshairs:** Absolutely sharp (0px) squares (8x8px) anchoring selection frames and matrix scale anchors.

## Components

### Floating macOS Software Windows
- **Header:** Height 38px, filled with `#1F232B`, bordered bottom with 1px `rgba(255, 255, 255, 0.12)`. Left-aligned trio of window dots (Close `#FF5F56`, Min `#FFBD2E`, Expand `#27C93F`) spaced 8px apart. Centered title in `telemetry-code` text (`rgba(255, 255, 255, 0.7)`).
- **Body Canvas:** Matte `#16181D` surface with inset shadows and interactive 3D model viewport or node-based wireframe.

### Transform Bounding Boxes
- Surrounds active 3D assets and portfolio preview frames.
- Continuous 1px border in `#0057FF` or `#F4A8E8`.
- 8x8px sharp selection nodes centered on corners and edge midpoints with white center fills and 1.5px solid cobalt outlines.
- Floating dimension tag (e.g., `W: 1080px  H: 1920px  Z: 0.00`) attached to the bottom edge using `telemetry-sub` on an `#0F1115` background chip.

### Buttons & Interaction Triggers
- **Primary Studio Action:** `#0057FF` solid fill, `#FFFFFF` text in `Plus Jakarta Sans` semi-bold (14px). Flat, no shadow, snappy 100ms color transition to `#0045CC` on hover.
- **Secondary Tool Trigger:** `#1F232B` fill with 1px `rgba(255, 255, 255, 0.15)` border, text in `#FFFFFF`. Hover reveals an inner glow tinted with `--accent-glow`.
- **Ghost Crosshair Button:** Transparent button bounded by L-shaped corner brackets. Monospace captioning.

### Telemetry Cards & HUD Badges
- Floating informational chips presenting render time, poly count, camera focal length, and layer indices.
- Surface: `#16181D` with 80% opacity and 12px backdrop blur.
- Typography: Key-value rows in `JetBrains Mono`. Keys styled in `rgba(255, 255, 255, 0.45)`, values in `#0057FF` or `#FFFFFF`.

### Layer & Asset Control Lists
- Compact row height (32px).
- Leading icon indicating node type (Mesh, Camera, Light, Spline) in 14px monochrome.
- Hover reveals quick-action eye (visibility toggle) and lock icons. Active row styled with a 2px left border accent in `#0057FF` and background highlight `rgba(255, 255, 255, 0.04)`.

### Director Annotation Callouts
- Handwritten notes rendered in `Caveat` script (`#0057FF`).
- Accompanied by hand-drawn SVG vector arrows pointing from the annotation to relevant bounding box vertices or UI details.