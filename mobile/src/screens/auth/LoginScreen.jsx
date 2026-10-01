/**
 * @file LoginScreen.jsx
 * @description AR-SAFE Field Technician & Supervisor Login screen.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Card } from '../../components/common/Card.jsx';
import { Button } from '../../components/common/Button.jsx';
import { Icon } from '../../components/common/Icon.jsx';

export function LoginScreen() {
  const { theme, isDarkMode, setActiveRole, navigateTo } = useApp();
  const [selectedUserType, setSelectedUserType] = useState('WORKER');

  function handleLogin() {
    setActiveRole(selectedUserType);
    navigateTo(selectedUserType === 'WORKER' ? 'dashboard' : 'site_manager_stations');
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '24px 16px',
        backgroundColor: theme.background,
        color: theme.onSurface,
      }}
    >
      <div style={{ maxWidth: 440, width: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Brand Lockup */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: theme.primary,
              color: theme.onPrimary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              boxShadow: '0 4px 16px rgba(0, 97, 148, 0.4)',
            }}
          >
            <Icon name="view_in_ar" size={32} fill />
          </div>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 26,
              fontWeight: 800,
              color: theme.onSurface,
              letterSpacing: '-0.02em',
            }}
          >
            AR-SAFE INDUSTRIAL
          </h1>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: theme.primary,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginTop: 4,
            }}
          >
            Precision Field Safety & Simulation
          </span>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: theme.onSurfaceVariant,
              marginTop: 8,
              maxWidth: 320,
            }}
          >
            Site-configurable spatial AR safety drill platform for high-risk industrial facilities.
          </p>
        </div>

        {/* Credential Selection Card */}
        <Card level={1} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Select Operator Credential
          </span>

          {/* Option 1: Worker */}
          <div
            onClick={() => setSelectedUserType('WORKER')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 14,
              borderRadius: 12,
              border: `2px solid ${selectedUserType === 'WORKER' ? theme.primary : theme.outlineVariant + '40'}`,
              backgroundColor: selectedUserType === 'WORKER' ? `${theme.primary}12` : theme.surfaceLow,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: theme.primary,
                  color: theme.onPrimary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name="badge" size={24} fill />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: theme.onSurface }}>
                  Mark Daniels
                </span>
                <span style={{ fontSize: 12, color: theme.onSurfaceVariant }}>
                  WK-4092 • Level 2 Operator
                </span>
              </div>
            </div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: 999,
                backgroundColor: `${theme.primary}20`,
                color: theme.primary,
                textTransform: 'uppercase',
              }}
            >
              Worker Mode
            </span>
          </div>

          {/* Option 2: Site Manager */}
          <div
            onClick={() => setSelectedUserType('SITE_MANAGER')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 14,
              borderRadius: 12,
              border: `2px solid ${selectedUserType === 'SITE_MANAGER' ? theme.secondary : theme.outlineVariant + '40'}`,
              backgroundColor: selectedUserType === 'SITE_MANAGER' ? `${theme.secondary}12` : theme.surfaceLow,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: theme.secondary,
                  color: theme.onSecondary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name="admin_panel_settings" size={24} fill />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: theme.onSurface }}>
                  Sarah Chen
                </span>
                <span style={{ fontSize: 12, color: theme.onSurfaceVariant }}>
                  MGR-1044 • Site Safety Lead
                </span>
              </div>
            </div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: 999,
                backgroundColor: `${theme.secondary}20`,
                color: theme.secondary,
                textTransform: 'uppercase',
              }}
            >
              Manager Mode
            </span>
          </div>

          {/* Location details */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              borderRadius: 8,
              backgroundColor: theme.surfaceLow,
              fontSize: 12,
              color: theme.onSurfaceVariant,
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="location_on" size={16} color={theme.primary} />
              Sector 4 Plant (Dhanbad)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: theme.tertiary, fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: theme.tertiary }} />
              SQLite Synced
            </span>
          </div>

          {/* Action button */}
          <Button
            onClick={handleLogin}
            variant="primary"
            fullWidth
            icon="login"
            style={{ marginTop: 8 }}
          >
            Authenticate & Start Shift
          </Button>
        </Card>

        {/* Offline Disclaimer Banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 14px',
            borderRadius: 8,
            backgroundColor: `${theme.primary}10`,
            border: `1px solid ${theme.primary}25`,
            color: theme.onSurfaceVariant,
            fontSize: 11,
          }}
        >
          <Icon name="verified_user" size={18} color={theme.primary} />
          <span>Local 6DoF AR & Deterministic engine certified for zero-connectivity mining tunnels.</span>
        </div>
      </div>
    </div>
  );
}
