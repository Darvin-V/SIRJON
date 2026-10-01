/**
 * @file Header.jsx
 * @description Standard Top Header bar from Stitch Precision Field Safety.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Icon } from './Icon.jsx';

export function Header({ title, subtitle, showBack = false }) {
  const {
    theme,
    isDarkMode,
    toggleTheme,
    isOffline,
    activeRole,
    currentUser,
    goBack,
    navigateTo,
  } = useApp();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.92)' : 'rgba(250, 248, 255, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${theme.outlineVariant}30`,
        boxShadow: isDarkMode ? '0 1px 8px rgba(0,0,0,0.4)' : '0 1px 8px rgba(0,0,0,0.04)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
          padding: '0 16px',
          gap: 12,
        }}
      >
        {/* Left: Back button or Brand logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          {showBack ? (
            <button
              type="button"
              onClick={goBack}
              aria-label="Back"
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                border: 'none',
                background: theme.surfaceContainer,
                color: theme.onSurface,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <Icon name="arrow_back" size={24} />
            </button>
          ) : (
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                backgroundColor: theme.primary,
                color: theme.onPrimary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 6px rgba(0, 97, 148, 0.3)',
              }}
            >
              <Icon name="view_in_ar" size={22} fill />
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            {title ? (
              <>
                <h1
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: theme.onSurface,
                    lineHeight: '22px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {title}
                </h1>
                {subtitle && (
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      color: theme.onSurfaceVariant,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {subtitle}
                  </span>
                )}
              </>
            ) : (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 16,
                      fontWeight: 800,
                      color: theme.onSurface,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    AR-SAFE
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: 999,
                      backgroundColor: theme.surfaceContainerHighest,
                      color: theme.onSurfaceVariant,
                      textTransform: 'uppercase',
                    }}
                  >
                    {currentUser.plantSector}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: isOffline ? theme.secondary : theme.tertiary,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      color: theme.onSurfaceVariant,
                      fontWeight: 500,
                    }}
                  >
                    {isOffline ? 'Offline / SQLite Local' : 'Online • Cloud Synced'}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: Theme switch + Profile / Role switch */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {/* Light/Dark Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              height: 36,
              padding: '0 10px',
              borderRadius: 10,
              border: `1px solid ${theme.outlineVariant}40`,
              backgroundColor: theme.surfaceContainer,
              color: theme.onSurface,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <span>{isDarkMode ? '🌙' : '☀️'}</span>
            <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>
              {isDarkMode ? 'Dark' : 'Light'}
            </span>
          </button>

          {/* User profile / role badge */}
          <button
            type="button"
            onClick={() => navigateTo('role_selection')}
            title="Switch Operational Role"
            style={{
              height: 36,
              padding: '0 8px',
              borderRadius: 18,
              border: `1px solid ${theme.primaryContainer}50`,
              backgroundColor: activeRole === 'WORKER' ? `${theme.primary}18` : `${theme.secondaryContainer}25`,
              color: activeRole === 'WORKER' ? theme.primary : theme.secondary,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                backgroundColor: theme.primary,
                color: theme.onPrimary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              {activeRole === 'WORKER' ? 'W' : 'M'}
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>
              {activeRole === 'WORKER' ? 'Worker' : 'Manager'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
