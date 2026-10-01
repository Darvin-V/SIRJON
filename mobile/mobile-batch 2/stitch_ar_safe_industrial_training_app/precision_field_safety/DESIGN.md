---
name: Precision Field Safety
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f4850'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets field technicians, industrial safety inspectors, site supervisors, and augmented-reality operations teams who operate in physically demanding, high-risk environments. 

The aesthetic is ultra-clean, modern, and human-engineered—deliberately eschewing dystopian "cyberpunk" or over-rendered AI/sci-fi tropes like gratuitous circuit lines, fake HUD scanlines, or neon chromatic aberration. Instead, it balances high-legibility industrial ergonomics with the crisp, structured refinement of modern Swiss design and mission-critical software.

The emotional signature is dependable, calm, authoritative, and laser-focused:
- **Clarity over ornament:** Information hierarchy is immediate and unmistakable under glaring sunlight, dim machinery shafts, or rain-splattered protective shields.
- **Physical ergonomics:** Designed specifically for one-handed thumb navigation and gloved-finger operation, pairing generous 48–56px tap targets with distinct tactile feedback states.
- **Engineered trust:** Data states are explicit. Safety compliance, hazard alerts, and sensor metrics are delivered with zero ambiguity.

## Colors

The color palette is built around high-contrast safety signaling and clear functional separation:

- **Primary (`#0284C7` - Precision Safety Cyan/Blue):** Communicates calibrated precision, tracking telemetry, and active AR overlays. In Dark Mode, this shifts to `#38BDF8` to preserve luminance contrast against deep slate backing.
- **Secondary (`#F59E0B` - Safety Amber/Orange):** Reserved strictly for warnings, caution thresholds, pending maintenance flags, and safety advisories.
- **Tertiary (`#10B981` - Verified Safe Emerald):** Dedicated to verified clearances, completed safety checks, calibrated hardware states, and passing ratings.
- **Danger Alert (`#EF4444` - Emergency Red):** Absolute stop, structural hazard, or PPE non-compliance alert.

### Light Mode Foundations
- **Canvas Base:** `#F8FAFC` (Slate 50)
- **Surface Layer 1:** `#FFFFFF`
- **Surface Layer 2 (Raised):** `#F1F5F9` (Slate 100)
- **Borders & Dividers:** `#E2E8F0` (Slate 200)
- **Typography Primary:** `#0F172A` (Slate 900)
- **Typography Secondary:** `#475569` (Slate 600)

### Dark Mode Foundations
- **Canvas Base:** `#090D16` (Deep Obsidian Slate)
- **Surface Layer 1:** `#0F172A` (Slate 900)
- **Surface Layer 2 (Raised):** `#1E293B` (Slate 800)
- **Borders & Dividers:** `#334155` (Slate 700)
- **Typography Primary:** `#F8FAFC` (Slate 50)
- **Typography Secondary:** `#94A3B8` (Slate 400)

## Typography

The typography pairings unify human approachability with machine-tool legibility:

- **Headlines (`Plus Jakarta Sans`):** Selected for its clear geometry, open counters, and high apexes. It projects modern technical competence without appearing sterile or militaristic.
- **Body & Labels (`Inter`):** Engineered for dense telemetry, status panels, tabular checklists, and inspection notes. Its tall x-height maintains razor-sharp legibility at rapid glances on vibrating vehicles or moving field walks.

### Tabular Numbers & Metrics
All quantitative values—such as pressure gauges, decibel meters, inspection timers, and telemetry readouts—must utilize tabular numbers (`font-variant-numeric: tabular-nums; font-feature-settings: "tnum" 1`) to eliminate visual jitter during real-time AR telemetry streaming.

## Layout & Spacing

The layout is grounded in a 4px baseline sub-grid with an 8px architectural rhythm.

### Ergonomics & Form Factors
- **Mobile First (Phone / Rugged Handhelds):** 4-column fluid layout with `16px` outer margins. Every interactive control is anchored toward the bottom 60% of the display to enable thumb-driven execution while wearing safety gear. Minimum interactive touch target boundary is strictly `48×48px` (ideally `56px` for primary confirmation triggers).
- **Tablet / Mounted In-Cab Displays:** 8-column layout with `24px` margins and gutters. Adapts to split views: inspection checklist on the left, live camera/AR spatial map on the right.
- **Desktop / Workstation Web Console:** 12-column layout with max content container width of `1440px` and `48px` margins.

### Spacing Tokens
- `space-xs` (4px): Micro gaps between status badges and icon indicators.
- `space-sm` (8px): Form input inner vertical padding, spacing between stacked list items.
- `space-md` (16px): Standard component internal padding, card gaps.
- `space-lg` (24px): Sectional separation within inspection cards, gap between functional toolbars.
- `space-xl` (40px): Major modal sheet padding, workflow step transitions.

## Elevation & Depth

Visual hierarchy uses calibrated surface contrast rather than thick visual noise:

### Surface Levels
- **Level 0 (Canvas Base):** Recessed canvas. `#F8FAFC` in Light Mode, `#090D16` in Dark Mode.
- **Level 1 (Cards & Modules):** Surface layer with a 1px micro-border (`#E2E8F0` Light / `#334155` Dark). Shadow is ultra-diffused: `0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)`.
- **Level 2 (Popovers, Active Tools, Quick Drawers):** `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)`. Dark Mode elevates surface lightness to `#1E293B` and adds a top inner rim highlight (`1px inset 0 1px 0 rgba(255, 255, 255, 0.08)`).
- **Level 3 (Modal Alerts & Emergency Overrides):** `0 20px 25px -5px rgba(15, 23, 42, 0.15), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`.

### AR HUD Floating Overlays
When viewing through active camera or AR views, cards switch to a high-density, dark frosted glass scrim: `rgba(15, 23, 42, 0.88)` with `backdrop-filter: blur(16px)` and a crisp `1px solid rgba(255, 255, 255, 0.15)` stroke to ensure text passes WCAG AAA contrast regardless of behind-camera environmental textures.

## Shapes

The design system employs Level 2 (Rounded) geometry, engineered to soften the harshness of industrial hardware while maintaining structural rigidity:

- **Base Radius (8px / `0.5rem`):** Applied to form fields, nested micro-chips, action toggles, and data tables.
- **Card Radius (12–16px / `rounded-lg` to `rounded-xl`):** Applied to inspection containers, spatial diagnostic modules, and bottom sheets.
- **Full Pill (`9999px`):** Reserved exclusively for safety status indicators (e.g., `PASS`, `FAIL`, `INSPECTION REQUIRED`), segmented filter switches, and quick-filter category chips.

## Components

### Buttons
- **Primary Action (Inspect / Confirm / Log Incident):** Height `52px` (minimum `48px`). Solid `#0284C7` (Light) or `#38BDF8` with dark text (Dark). Text is `label-lg`, center-aligned, with an optional leading icon. Active state features a distinct downscale (`scale(0.98)`) and high-contrast focus ring (`3px solid rgba(2, 132, 199, 0.4)`).
- **Secondary / Utility Button:** Subtle background `#F1F5F9` (Light) or `#1E293B` (Dark) with a 1px border.
- **Emergency Stop / Critical Hazard Button:** Solid `#EF4444` with white bold typography, full-width thumb trigger with haptic click reinforcement.

### Safety Status Chips & Badges
- **Shape & Sizing:** Height `28px`, full pill radius. 
- **Emerald Pass:** `#ECFDF5` background with `#047857` text (Light), `#064E3B` background with `#6EE7B7` text (Dark).
- **Amber Warning:** `#FFFBEB` background with `#B45309` text (Light), `#78350F` background with `#FCD34D` text (Dark).
- **Red Critical:** `#FEF2F2` background with `#B91C1C` text (Light), `#7F1D1D` background with `#FCA5A5` text (Dark).
- Badges always prepend a high-visibility SVG dot or structural icon for color-blind accessibility.

### Cards & Telemetry Containers
- Flat backgrounds with subtle structural borders (`1px solid`).
- Headers feature a standardized layout: Equipment ID and category on the left, clear status pill on the right.
- High vertical breathing room (`padding: 16px` to `20px`) prevents accidental tap overlaps when reviewing dense checklists.

### Input Fields & Controls
- **Inputs:** Height `52px` to accommodate gloved interaction. Clean border `#CBD5E1` transitioning to a `#0284C7` focus border with a 3px soft outer ring. Placeholder text uses high-contrast Slate 400.
- **Checkboxes & Radios:** Scaled to `24×24px` with a `48×48px` tap bounding box. Active checkmark is bold (`3px` stroke) for instant verification in high-glare environments.
- **Steppers & Increments:** Dual large `48px` square buttons flanking the numeric readouts to simplify step adjustments without opening keyboard dialogs.

### Specialized Component: Spatial Inspection Reticle
- Centered AR alignment target using a non-intrusive 1.5px cyan hairline frame with corner brackets.
- Distance and angle telemetry labels float directly beneath the reticle in `label-sm` with a semi-opaque background scrim to guarantee reading accuracy across diverse lighting environments.