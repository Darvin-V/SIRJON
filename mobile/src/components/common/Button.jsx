/**
 * @file Button.jsx
 * @description Gloved-finger compliant button (min 48-52px height) from Stitch spec.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Icon } from './Icon.jsx';

export function Button({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'danger' | 'ghost'
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  size = 'lg', // 'md' | 'lg'
  style = {},
  className = '',
}) {
  const { theme, isDarkMode } = useApp();
  const [isPressed, setIsPressed] = useState(false);

  const height = size === 'md' ? 44 : 52;

  let bg = theme.primary;
  let text = theme.onPrimary;
  let border = 'none';

  if (variant === 'secondary') {
    bg = theme.surfaceContainer;
    text = theme.onSurface;
    border = `1px solid ${theme.outlineVariant}60`;
  } else if (variant === 'danger') {
    bg = isDarkMode ? '#EF4444' : '#BA1A1A';
    text = '#FFFFFF';
    border = 'none';
  } else if (variant === 'ghost') {
    bg = 'transparent';
    text = theme.primary;
    border = 'none';
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        height,
        minHeight: 48,
        width: fullWidth ? '100%' : 'auto',
        padding: '0 20px',
        borderRadius: 12,
        backgroundColor: bg,
        color: text,
        border,
        fontFamily: "'Inter', sans-serif",
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: '0.01em',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transform: isPressed && !disabled ? 'scale(0.98)' : 'scale(1)',
        transition: 'transform 0.1s ease, background-color 0.15s ease',
        boxShadow: variant === 'primary' || variant === 'danger' ? '0 2px 8px rgba(0, 0, 0, 0.18)' : 'none',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        ...style,
      }}
    >
      {icon && <Icon name={icon} size={20} color={text} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={20} color={text} />}
    </button>
  );
}
