/**
 * @file spacing.js
 * @description Layout, touch targets, and spacing rules from Stitch DESIGN.md.
 * Strict JavaScript only - no TypeScript syntax.
 */

export const SPACING = {
  xs: 4,     // 0.25rem - Micro gaps between status badges and icon indicators
  sm: 8,     // 0.5rem - Inner vertical padding, list item gaps
  md: 16,    // 1.0rem - Standard component internal padding, card gaps
  lg: 24,    // 1.5rem - Sectional separation within inspection cards
  xl: 40,    // 2.5rem - Major modal sheet padding, workflow transitions

  // Outer margins
  marginMobile: 16,
  marginTablet: 24,

  // Touch target minimum for gloved industrial interaction
  touchTargetMin: 48,
  primaryButtonHeight: 52,
};

export const RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const SHADOWS = {
  sm: '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)',
  md: '0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
  lg: '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.05)',
  hud: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
};
