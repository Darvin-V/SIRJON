/**
 * @file BottomNav.jsx
 * @description 5-tab ergonomic bottom navigation bar from Stitch exports.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Icon } from './Icon.jsx';

export function BottomNav() {
  const { theme, isDarkMode, currentScreen, navigateTo, activeRole } = useApp();

  const navItems = [
    {
      id: 'dashboard',
      label: 'Home',
      icon: 'dashboard',
      target: activeRole === 'WORKER' ? 'dashboard' : 'site_manager_stations',
      activeScreens: ['dashboard', 'clean_light', 'refined_dark'],
    },
    {
      id: 'modules',
      label: 'Training',
      icon: 'school',
      target: 'modules',
      activeScreens: ['modules', 'module_details', 'ar_setup', 'ar_live', 'assessment_results', 'certificate'],
    },
    {
      id: 'stations',
      label: 'Stations',
      icon: 'precision_manufacturing',
      target: 'site_manager_stations',
      activeScreens: ['site_manager_stations', 'station_anchoring', 'hazard_config', 'ar_preview', 'station_identified'],
    },
    {
      id: 'records',
      label: 'Records',
      icon: 'verified',
      target: 'offline_sync',
      activeScreens: ['offline_sync', 'sync_states', 'manager_sync'],
    },
    {
      id: 'profile',
      label: 'Role / Profile',
      icon: 'badge',
      target: 'role_selection',
      activeScreens: ['role_selection', 'login'],
    },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.94)' : 'rgba(250, 248, 255, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: `1px solid ${theme.outlineVariant}30`,
        boxShadow: isDarkMode ? '0 -2px 12px rgba(0, 0, 0, 0.5)' : '0 -2px 12px rgba(0, 0, 0, 0.05)',
        paddingBottom: 'env(safe-area-inset-bottom, 8px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 60,
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        {navItems.map(item => {
          const isActive = item.activeScreens.includes(currentScreen);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo(item.target)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 56,
                height: 52,
                border: 'none',
                background: 'transparent',
                color: isActive ? theme.primary : theme.onSurfaceVariant,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 28,
                  borderRadius: 14,
                  backgroundColor: isActive ? `${theme.primary}20` : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 2,
                }}
              >
                <Icon
                  name={item.icon}
                  size={22}
                  fill={isActive}
                  color={isActive ? theme.primary : theme.onSurfaceVariant}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? theme.primary : theme.onSurfaceVariant,
                  letterSpacing: '0.02em',
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
