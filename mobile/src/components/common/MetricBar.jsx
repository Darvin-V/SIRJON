/**
 * @file MetricBar.jsx
 * @description Segmented metric progress bar from Stitch Worker Dashboard.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';

export function MetricBar({ value = 0, max = 100, color, height = 10 }) {
  const { theme } = useApp();
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const barColor = color || theme.primary;

  return (
    <div
      style={{
        width: '100%',
        height,
        borderRadius: 9999,
        backgroundColor: theme.surfaceContainerHighest,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: barColor,
          borderRadius: 9999,
          transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
}
