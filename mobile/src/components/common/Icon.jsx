/**
 * @file Icon.jsx
 * @description Standard industrial icon component supporting Material Symbols.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';

export function Icon({ name, size = 20, color, fill = false, className = '', style = {} }) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{
        fontSize: typeof size === 'number' ? `${size}px` : size,
        color: color || 'inherit',
        fontVariationSettings: fill ? "'FILL' 1" : "'FILL' 0",
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
