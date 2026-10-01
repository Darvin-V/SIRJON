---
name: AR-SAFE Industrial Operations
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002114'
  on-tertiary-container: '#069669'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  title-eyebrow:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
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
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  metric-dial:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: -0.03em
  pill-tag:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '800'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system translates the high-stakes, field-tested ergonomics of an industrial augmented reality safety suite into a robust, dense, desktop administrative control center. Designed for safety directors, compliance officers, site plant engineers, and operational dispatchers, the aesthetic balances mission-critical industrial clarity with precise, modern engineering polish.

The design movement combines **Corporate / Modern utilitarianism** with **tactile safety compliance cues**:
- **Rugged Engineering Precision**: Unambiguous visual indicators, crisp micro-borders, and high-visibility status tokens derived from physical OSHA industrial signage and field HUD overlays.
- **Mission-Critical Legibility**: Visual hierarchies are structured around rapid scanning: numeric metrics, worker IDs, synchronization pipelines, and station badges take immediate precedence.
- **Fail-Safe Trust**: Offline states, local SQLite package synchronization, cryptographic verification tokens, and compliance scores leverage physical alert metaphors (amber cautionary enclosures, verified emerald compliance rings, and deep slate containment modules).

## Colors

The color palette is calibrated directly from industrial telemetry hardware and the mobile field assessment interface. It operates on high semantic distinction:

- **Primary Canvas & Shell (`#0F172A`, `#1E293B`)**: Deep industrial slate used for sidebar infrastructure, primary brand framing, high-emphasis text, and active node shells.
- **Active Telemetry Azure (`#0284C7`, `#0EA5E9`)**: Technical signal blue utilized for active data synchronization, pipeline states, interactive controls, and focal highlight links.
- **OSHA Compliance Emerald (`#059669`, `#10B981`)**: The affirmative certification tone used for verified compliance indicators (`PASS`), radial progress scoring rings, checkmark pills, and score breakdown blocks (`#D1FAE5` surface with `#065F46` label).
- **Industrial Safety Amber (`#D97706`, `#F59E0B`)**: Alert container tone for degraded, offline, or pending-sync states. Surfaces leverage `#FEF3C7` with crisp `#FDE68A` framing and deep `#92400E` typographic urgency.
- **Neutral Framework (`#F8FAFC`, `#FFFFFF`, `#E2E8F0`, `#CBD5E1`, `#64748B`)**: Clean slate canvas `#F8FAFC` provides the foundational workspace, pure white `#FFFFFF` elevates modular cards, and sharp 1px structural outlines (`#E2E8F0`) maintain structural isolation between data points.

## Typography

The typographic hierarchy prioritizes rapid industrial parsing and spatial balance across heavy desktop tables and audit cards.

- **Eyebrow Headers**: Uppercase, heavily tracked (e.g., `title-eyebrow` with `letter-spacing: 0.08em`) labels like `ASSESSMENT EVALUATION`, `SIMULATE SYNC PIPELINE`, and `RULE CHECKS (4 OF 5 PASSED)` anchor card segments.
- **Metrics & Worker Identity**: High-contrast pairing of worker names (weight 700) against alphanumeric monospaced IDs (`WK-4092`, `#REC-9844-OF`) rendered via `label-code` for rapid machine verification.
- **Dial & Gauge Typography**: Large numeric values (`metric-dial`) with tight fractional metadata (`/100` in weight 600, 11px) positioned inside radial compliance meters.

## Layout & Spacing

Desktop administration leverages an adaptive multi-pane workstation layout configured on a flexible 12-column grid.

- **Global Navigation Architecture**: A fixed 260px left sidebar anchor houses system nodes, plant sector switchers, and certification queues. The top operational chrome bar spans 64px in height, hosting live sync heartbeat status, node latency, and administrative emergency controls.
- **Dashboard Workspace Rhythm**: Primary workspace content uses a responsive 12-column layout with 24px gutters (`gutter`) and 32px safe outer padding (`margin`). 
- **Component Padding Scale**: Cards and data modules strictly employ `space-lg` (24px) for master container padding and `space-md` (16px) for nested telemetry rows (such as rule checks and sync status strips). Dense inspection tables compress row padding to `space-sm` (8px vertical) for maximum line efficiency.

## Elevation & Depth

To maintain visual discipline appropriate for plant control rooms, this design system avoids heavy shadows, instead employing **tonal layering**, **structured 1px containment borders**, and **tactile status highlights**:

- **Tier 0 (Root Slate Floor)**: Pure background `#F8FAFC` providing crisp visual isolation for white cards.
- **Tier 1 (Surface Canvas)**: Pure white `#FFFFFF` card modules with a solid `1px solid #E2E8F0` border. Shadows are ultra-subtle ambient spreads (`0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)`).
- **Tier 2 (Interactive Modules & Panels)**: Hovered assessment records, flyout drawers, and modal sheets elevate using `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)` with a fortified border `#CBD5E1`.
- **Status Banners (Alert Elevation)**: Offline and sync notification banners utilize tinted container fills (e.g. Amber `#FEF3C7`) bordered by an accented 3px left industrial safety notch in solid `#D97706` to indicate physical urgency without relying on elevation shifts.

## Shapes

The interface balances industrial structural rigidity with accessible human factors:

- **Primary Cards & Containers**: Defined at `roundedness: 2` (12px to 16px radius), matching the tactile mobile assessment cards and maintaining soft yet precise containment boundaries.
- **Pills, Badges & Interactive Buttons**: Complete pill radii (`rounded-full` / 9999px) are strictly enforced for status indicators (`PASS`, `OFFLINE`, `SYNCING`), avatar enclosures, and primary trigger actions.
- **Telemetry Chips & Progress Trackers**: Inner evaluation strips and rule check items use 8px (`rounded-md`) corner radii to nest cleanly inside master parent cards.

## Components

### Buttons & Pipeline Switchers
- **Primary Operational Action**: Solid navy `#0F172A` with `#FFFFFF` text, 40px height, `rounded-lg`, font weight 600. Includes left-anchored SVG telemetry icons. Hover shifts to `#1E293B`.
- **Secondary / Ghost Action**: `#FFFFFF` background with 1px border `#CBD5E1` and slate text `#334155`.
- **Pipeline State Switcher**: Modular tabbed grouping container (`#F1F5F9`) housing pill toggle buttons:
  - *Syncing*: `#EFF6FF` pill, `#0284C7` text, dynamic rotating sync glyph.
  - *Success*: `#ECFDF5` pill, `#059669` text, verified checkmark.
  - *Pending*: `#FFFBEB` pill, `#D97706` text, queue antenna glyph.

### Status Pills & Badges
- **Compliance PASS Badge**: Pill container with `#059669` fill, white `#FFFFFF` text, `font-size: 11px`, `font-weight: 800`, containing an embedded encircled checkmark icon.
- **Offline Safety Badge**: Warm amber container `#FEF3C7` with `#92400E` text and a locked shield icon.
- **Metric Score Badge**: Compact `rounded-md` pill `#D1FAE5` with `#065F46` bold text (e.g., `25/25`).

### Safety Compliance Gauge
- **Radial Score Meter**: Circular SVG progress gauge (100px diameter on desktop viewports) with a light slate `#E2E8F0` track and an active `#059669` stroke (stroke width: 8px). Centered metric display with `28px` bold numeric score (`85`) atop `11px` slate-500 denominator (`/100`).

### Safety Alert Panels
- **Encrypted Local Storage Notice**: Rich warm amber module (`background: #FFFBEB; border: 1px solid #FDE68A`) containing a dark rounded safety shield badge (`#FDE68A` background, `#78350F` shield mark), uppercase bold title (`TRAINING COMPLETED OFFLINE`), and monospaced record identifier (`#REC-9844-OF`).

### Rule Check Evaluation Rows
- **Evaluation Item**: Full-width container (`#F8FAFC` surface, `#E2E8F0` border, `rounded-lg`) featuring an emerald checkmark circular badge, two-line vertical descriptive text (Primary Rule Name in `#0F172A` bold; Secondary Observation in `#64748B`), and an inline green score badge (`25/25`) right-aligned.

### Data Tables & OSHA Audit Grid
- **Audit Grid**: Desktop tabular list of workers, certifications, shifts, and sync nodes. Alternating row background `#FFFFFF` and `#F8FAFC`, active sorting indicators, monospace IDs, and zero-latency filtering by station ID and compliance status.