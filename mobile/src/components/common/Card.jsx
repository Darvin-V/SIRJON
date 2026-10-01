/**
 * @file Card.jsx
 * @description Surface Level 1 & Level 2 card container from Stitch spec.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';

export function Card({
  children,
  level = 1, // 1: base card, 2: raised card / dialog, 0: lowest
  onClick,
  style = {},
  className = '',
}) {
  const { theme, isDarkMode } = useApp();

  const bg = level === 0
    ? theme.surfaceLowest
    : level === 2
    ? theme.surfaceHigh
    : theme.surfaceContainer;

  const borderColor = isDarkMode ? 'rgba(51, 65, 85, 0.7)' : 'rgba(226, 232, 240, 0.9)';

  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: bg,
        borderRadius: 16,
        border: `1px solid ${borderColor}`,
        padding: 16,
        boxShadow: isDarkMode
          ? '0 2px 6px rgba(0, 0, 0, 0.35)'
          : '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
