/**
 * @file formatters.js
 * @description Helper functions for formatted strings, timers, and metrics.
 * Strict JavaScript only - no TypeScript syntax.
 */

/**
 * Formats seconds into MM:SS
 * @param {number} totalSeconds
 * @returns {string}
 */
export function formatTimer(totalSeconds) {
  const mins = Math.floor(Math.max(0, totalSeconds) / 60);
  const secs = Math.max(0, totalSeconds) % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Formats compliance percentage
 * @param {number} score
 * @returns {string}
 */
export function formatPercentage(score) {
  return `${Math.round(score)}%`;
}
