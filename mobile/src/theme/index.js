/**
 * @file index.js
 * @description Central theme export for AR-SAFE Mobile.
 * Strict JavaScript only - no TypeScript syntax.
 */

import { LIGHT_THEME, DARK_THEME } from './colors.js';
import { TYPOGRAPHY, FONTS } from './typography.js';
import { SPACING, RADIUS, SHADOWS } from './spacing.js';

export {
  LIGHT_THEME,
  DARK_THEME,
  TYPOGRAPHY,
  FONTS,
  SPACING,
  RADIUS,
  SHADOWS,
};

export function getTheme(isDarkMode = true) {
  return isDarkMode ? DARK_THEME : LIGHT_THEME;
}
