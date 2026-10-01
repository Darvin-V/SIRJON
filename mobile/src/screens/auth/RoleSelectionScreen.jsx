/**
 * @file RoleSelectionScreen.jsx
 * @description Operational Role Switcher & Localization Settings screen.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Header } from '../../components/common/Header.jsx';
import { BottomNav } from '../../components/common/BottomNav.jsx';
import { Card } from '../../components/common/Card.jsx';
import { Button } from '../../components/common/Button.jsx';
import { Icon } from '../../components/common/Icon.jsx';

export function RoleSelectionScreen() {
  const {
    theme,
    activeRole,
    setActiveRole,
    language,
    setLanguage,
    isOffline,
    toggleOffline,
    navigateTo,
  } = useApp();

  function selectRole(role) {
    setActiveRole(role);
    navigateTo(role === 'WORKER' ? 'dashboard' : 'site_manager_stations');
  }

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'sat', label: 'Santali', native: 'ᱥᱟᱱᱛᱟᱲᱤ' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.background,
        color: theme.onSurface,
        paddingBottom: 80,
      }}
    >
      <Header title="System & Roles" subtitle="Operational Mode Selection" showBack />

      <main style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 600, width: '100%', margin: '0 auto' }}>
        {/* Role Selection Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Operational Role
          </span>

          {/* Worker Mode Card */}
          <Card
            level={1}
            onClick={() => selectRole('WORKER')}
            style={{
              border: `2px solid ${activeRole === 'WORKER' ? theme.primary : theme.outlineVariant + '40'}`,
              backgroundColor: activeRole === 'WORKER' ? `${theme.primary}12` : theme.surfaceContainer,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: theme.primary,
                    color: theme.onPrimary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="person" size={26} fill />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: theme.onSurface }}>
                    Worker Mode
                  </span>
                  <span style={{ fontSize: 12, color: theme.onSurfaceVariant, marginTop: 2 }}>
                    Module selection • QR station scan • Live AR drill • Assessment
                  </span>
                </div>
              </div>
              {activeRole === 'WORKER' && (
                <Icon name="check_circle" size={24} color={theme.primary} fill />
              )}
            </div>
          </Card>

          {/* Site Manager Mode Card */}
          <Card
            level={1}
            onClick={() => selectRole('SITE_MANAGER')}
            style={{
              border: `2px solid ${activeRole === 'SITE_MANAGER' ? theme.secondary : theme.outlineVariant + '40'}`,
              backgroundColor: activeRole === 'SITE_MANAGER' ? `${theme.secondary}12` : theme.surfaceContainer,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: theme.secondary,
                    color: theme.onSecondary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="admin_panel_settings" size={26} fill />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: theme.onSurface }}>
                    Site Manager Mode
                  </span>
                  <span style={{ fontSize: 12, color: theme.onSurfaceVariant, marginTop: 2 }}>
                    Station setup • Physical element anchors • Virtual hazard placement
                  </span>
                </div>
              </div>
              {activeRole === 'SITE_MANAGER' && (
                <Icon name="check_circle" size={24} color={theme.secondary} fill />
              )}
            </div>
          </Card>
        </section>

        {/* Language Selection */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Language / भाषा / ᱯᱟᱹᱨᱥᱤ
          </span>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {languages.map(lang => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  style={{
                    height: 52,
                    borderRadius: 12,
                    border: `1.5px solid ${isSelected ? theme.primary : theme.outlineVariant + '40'}`,
                    backgroundColor: isSelected ? `${theme.primary}18` : theme.surfaceContainer,
                    color: isSelected ? theme.primary : theme.onSurface,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{lang.native}</span>
                  <span style={{ fontSize: 10, color: theme.onSurfaceVariant }}>{lang.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Offline Simulation Toggle */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Connectivity State
          </span>

          <Card level={1}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: isOffline ? `${theme.secondary}20` : `${theme.tertiary}20`,
                    color: isOffline ? theme.secondary : theme.tertiary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name={isOffline ? 'cloud_off' : 'cloud_done'} size={22} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: theme.onSurface }}>
                    {isOffline ? 'Offline Mode (Underground Tunnel)' : 'Online Mode (Connected)'}
                  </span>
                  <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>
                    {isOffline ? 'Results saved to local SQLite database' : 'Automatic sync with Central Server'}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={toggleOffline}
                style={{
                  height: 36,
                  padding: '0 12px',
                  borderRadius: 8,
                  border: `1px solid ${theme.outlineVariant}60`,
                  backgroundColor: isOffline ? theme.secondary : theme.surfaceContainerHigh,
                  color: isOffline ? '#ffffff' : theme.onSurface,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {isOffline ? 'Reconnect' : 'Go Offline'}
              </button>
            </div>
          </Card>
        </section>

        {/* Switch Session CTA */}
        <Button
          onClick={() => navigateTo(activeRole === 'WORKER' ? 'dashboard' : 'site_manager_stations')}
          variant="primary"
          fullWidth
          icon="arrow_forward"
          style={{ marginTop: 12 }}
        >
          Confirm & Enter {activeRole === 'WORKER' ? 'Worker Dashboard' : 'Site Manager Station Hub'}
        </Button>
      </main>

      <BottomNav />
    </div>
  );
}
