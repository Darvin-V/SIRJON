/**
 * @file typography.js
 * @description Typography styles and font configurations from Stitch DESIGN.md.
 * Strict JavaScript only - no TypeScript syntax.
 */

export const FONTS = {
  headline: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
};

export const TYPOGRAPHY = {
  displayLg: {
    fontFamily: FONTS.headline,
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: '700',
    letterSpacing: '-0.02em',
  },
  displayLgMobile: {
    fontFamily: FONTS.headline,
    fontSize: '30px',
    lineHeight: '38px',
    fontWeight: '700',
    letterSpacing: '-0.02em',
  },
  headlineLg: {
    fontFamily: FONTS.headline,
    fontSize: '28px',
    lineHeight: '36px',
    fontWeight: '600',
    letterSpacing: '-0.01em',
  },
  headlineMd: {
    fontFamily: FONTS.headline,
    fontSize: '22px',
    lineHeight: '28px',
    fontWeight: '600',
    letterSpacing: '-0.01em',
  },
  headlineSm: {
    fontFamily: FONTS.headline,
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '600',
  },
  bodyLg: {
    fontFamily: FONTS.body,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
  },
  bodyMd: {
    fontFamily: FONTS.body,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
  },
  bodySm: {
    fontFamily: FONTS.body,
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: '400',
  },
  labelLg: {
    fontFamily: FONTS.body,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '600',
    letterSpacing: '0.01em',
  },
  labelMd: {
    fontFamily: FONTS.body,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '600',
    letterSpacing: '0.02em',
  },
  labelSm: {
    fontFamily: FONTS.body,
    fontSize: '11px',
    lineHeight: '14px',
    fontWeight: '700',
    letterSpacing: '0.04em',
  },
};
