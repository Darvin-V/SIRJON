/**
 * @file StatusBadge.jsx
 * @description Accessible Safety Status Badge with color-blind dot/icon from Stitch spec.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Icon } from './Icon.jsx';

export function StatusBadge({
  variant = 'info', // 'pass' | 'warning' | 'error' | 'info' | 'neutral'
  label,
  icon,
  pulse = false,
  size = 'md', // 'sm' | 'md'
}) {
  const { theme, isDarkMode } = useApp();

  const config = {
    pass: {
      bg: isDarkMode ? '#064E3B' : '#ECFDF5',
      text: isDarkMode ? '#6EE7B7' : '#047857',
      dot: isDarkMode ? '#6EE7B7' : '#10B981',
      defaultIcon: 'check_circle',
    },
    warning: {
      bg: isDarkMode ? '#78350F' : '#FFFBEB',
      text: isDarkMode ? '#FCD34D' : '#B45309',
      dot: isDarkMode ? '#FCD34D' : '#F59E0B',
      defaultIcon: 'warning',
    },
    error: {
      bg: isDarkMode ? '#7F1D1D' : '#FEF2F2',
      text: isDarkMode ? '#FCA5A5' : '#B91C1C',
      dot: isDarkMode ? '#FCA5A5' : '#EF4444',
      defaultIcon: 'error',
    },
    info: {
      bg: isDarkMode ? `${theme.primary}25` : `${theme.primary}15`,
      text: theme.primary,
      dot: theme.primary,
      defaultIcon: 'info',
    },
    neutral: {
      bg: theme.surfaceContainerHigh,
      text: theme.onSurfaceVariant,
      dot: theme.outline,
      defaultIcon: 'circle',
    },
  }[variant] || {
    bg: theme.surfaceContainer,
    text: theme.onSurface,
    dot: theme.primary,
    defaultIcon: 'info',
  };

  const isSmall = size === 'sm';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? 4 : 6,
        padding: isSmall ? '2px 8px' : '4px 10px',
        height: isSmall ? 22 : 28,
        borderRadius: 9999,
        backgroundColor: config.bg,
        color: config.text,
        fontFamily: "'Inter', sans-serif",
        fontSize: isSmall ? 10 : 12,
        fontWeight: 700,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}
    >
      {pulse ? (
        <span
          style={{
            width: isSmall ? 5 : 6,
            height: isSmall ? 5 : 6,
            borderRadius: '50%',
            backgroundColor: config.dot,
            animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
      ) : icon ? (
        <Icon name={icon} size={isSmall ? 12 : 14} color={config.text} fill />
      ) : (
        <span
          style={{
            width: isSmall ? 5 : 6,
            height: isSmall ? 5 : 6,
            borderRadius: '50%',
            backgroundColor: config.dot,
          }}
        />
      )}
      <span>{label}</span>
    </span>
  );
}
