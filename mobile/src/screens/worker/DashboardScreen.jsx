/**
 * @file DashboardScreen.jsx
 * @description Worker Dashboard matching Stitch clean_light & refined_dark exports.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Header } from '../../components/common/Header.jsx';
import { BottomNav } from '../../components/common/BottomNav.jsx';
import { Card } from '../../components/common/Card.jsx';
import { Button } from '../../components/common/Button.jsx';
import { StatusBadge } from '../../components/common/StatusBadge.jsx';
import { MetricBar } from '../../components/common/MetricBar.jsx';
import { Icon } from '../../components/common/Icon.jsx';
import { MODULES } from '../../data/mockData.js';

export function DashboardScreen() {
  const {
    theme,
    currentUser,
    isOffline,
    navigateTo,
    setSelectedModuleId,
  } = useApp();

  function startModule(moduleId) {
    setSelectedModuleId(moduleId);
    navigateTo('module_details', { moduleId });
  }

  const fireModule = MODULES.find(m => m.id === 'MOD-FIRE-01') || MODULES[0];
  const gasModule = MODULES.find(m => m.id === 'MOD-GAS-02') || MODULES[1];
  const clearedModules = MODULES.filter(m => !m.required);

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
      <Header />

      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          padding: '16px',
          maxWidth: 600,
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Top Shift Greeting & Status Overview */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: theme.surfaceContainerHigh,
                  color: theme.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name="badge" size={24} fill />
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: theme.onSurface,
                    lineHeight: '24px',
                  }}
                >
                  Good morning, {currentUser.name.split(' ')[0]}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2, fontSize: 12, color: theme.onSurfaceVariant }}>
                  <span>{currentUser.id}</span>
                  <span>•</span>
                  <span style={{ color: theme.primary, fontWeight: 600 }}>{currentUser.designation}</span>
                </div>
              </div>
            </div>

            <StatusBadge variant="info" label="Worker Mode" />
          </div>

          {/* Device & Database Synced Status Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderRadius: 10,
              backgroundColor: theme.surfaceLow,
              border: `1px solid ${theme.outlineVariant}30`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  backgroundColor: isOffline ? theme.secondary : theme.tertiary,
                  animation: 'pulse 2s infinite',
                }}
              />
              <span style={{ fontSize: 12, fontWeight: 600, color: theme.onSurface }}>
                {isOffline ? 'Offline Active (SQLite v3.45 Synced)' : 'Connected • Local SQLite Cache Ready'}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: theme.onSurfaceVariant, fontSize: 11 }}>
              <Icon name={isOffline ? 'sensors_off' : 'cloud_done'} size={15} />
              <span>Cached</span>
            </div>
          </div>
        </section>

        {/* Annual Safety Compliance Card */}
        <Card
          level={1}
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: theme.surfaceContainer,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Safety Record 2026
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 28,
                  fontWeight: 800,
                  color: theme.onSurface,
                  marginTop: 2,
                }}
              >
                78%
              </span>
            </div>
            <StatusBadge variant="pass" label="OSHA Compliant" icon="verified" />
          </div>

          {/* Metric Bar */}
          <div style={{ marginBottom: 12 }}>
            <MetricBar value={78} max={100} color={theme.primary} height={10} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, color: theme.onSurfaceVariant }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: theme.onSurface }}>
              <Icon name="task_alt" size={16} color={theme.tertiary} fill />
              7 of 9 modules cleared
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: theme.secondary, fontWeight: 600 }}>
              <Icon name="timer" size={16} color={theme.secondary} />
              Refresher in 14 days
            </span>
          </div>
        </Card>

        {/* Real Android ARCore / ViroReact Technical Proof Gate */}
        <Card
          level={2}
          style={{
            backgroundColor: theme.surfaceContainerHigh,
            border: `1px solid ${theme.primary}60`,
            padding: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', animation: 'pulse 1.5s infinite' }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: theme.onSurface }}>
                Real Android AR Runtime Proof
              </span>
            </div>
            <StatusBadge variant="pass" label="Phase 1 Ready" />
          </div>
          <p style={{ fontSize: 12, color: theme.onSurfaceVariant, marginBottom: 12, lineHeight: '18px' }}>
            Direct hardware camera pass-through, Google ARCore plane tracking, and 3D industrial test target placement with ViroReact.
          </p>
          <Button
            variant="primary"
            fullWidth
            onClick={() => navigateTo('ar_proof')}
            icon="view_in_ar"
          >
            Launch Real AR Session
          </Button>
        </Card>

        {/* Priority Required Drill Hero: Fire & Explosion Response */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Priority Required Drill
            </span>
            <StatusBadge variant="warning" label="Mandatory Today" icon="warning" />
          </div>

          <div
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              backgroundColor: theme.surfaceLow,
              border: `1px solid ${theme.outlineVariant}50`,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Visual Industrial Scene Header */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 160,
                backgroundImage: "url('https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.3) 60%, transparent 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  borderRadius: 999,
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#fea619', animation: 'pulse 1.5s infinite' }} />
                <span>Stage 2: PASS & Cutoff</span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 10,
                  left: 12,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  color: '#f8fafc',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                <Icon name="location_on" size={16} color={theme.primary} />
                <span>Physical Bay ST-04 (Sector 4)</span>
              </div>
            </div>

            {/* Drill Info & Action */}
            <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: theme.onSurface,
                    }}
                  >
                    {fireModule.title}
                  </h3>
                  <p style={{ fontSize: 13, color: theme.onSurfaceVariant, marginTop: 4, lineHeight: '18px' }}>
                    Volatile chemical fire simulated on conveyor drive. Identify equipment, verify safe distance, and apply cutoff.
                  </p>
                </div>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: `${theme.secondary}20`,
                    color: theme.secondary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon name="local_fire_department" size={26} fill />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: theme.onSurfaceVariant }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Icon name="schedule" size={15} /> 15 mins
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Icon name="pin_drop" size={15} /> Station 01 Required
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: theme.primary, fontWeight: 600 }}>
                  <Icon name="verified" size={15} /> Step 2 of 4
                </span>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                <Button
                  onClick={() => startModule('MOD-FIRE-01')}
                  variant="primary"
                  fullWidth
                  icon="play_arrow"
                >
                  Start Practical AR Drill
                </Button>
                <Button
                  onClick={() => navigateTo('qr_scanner')}
                  variant="secondary"
                  icon="qr_code_scanner"
                  style={{ flexShrink: 0 }}
                >
                  Scan QR
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Modules Grid */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Available Drills in Sector 4
            </span>
            <button
              type="button"
              onClick={() => navigateTo('modules')}
              style={{
                background: 'none',
                border: 'none',
                color: theme.primary,
                fontSize: 12,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              View All (4)
            </button>
          </div>

          {/* Gas Leak Card */}
          <Card
            level={1}
            onClick={() => startModule(gasModule.id)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: `${theme.primary}20`,
                  color: theme.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon name="air" size={24} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 4, backgroundColor: theme.surfaceContainerHighest, color: theme.onSurfaceVariant }}>
                    Chamber ST-09
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: theme.secondary }}>LEL &gt; 40%</span>
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: theme.onSurface, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {gasModule.title}
                </h4>
                <span style={{ fontSize: 12, color: theme.onSurfaceVariant }}>
                  Step 1 of 4 • 20 mins practical
                </span>
              </div>
            </div>
            <Icon name="chevron_right" size={22} color={theme.outline} />
          </Card>

          {/* Cleared LOTO Card */}
          {clearedModules.map(mod => (
            <Card
              key={mod.id}
              level={1}
              onClick={() => startModule(mod.id)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, opacity: 0.9 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: `${theme.tertiary}18`,
                    color: theme.tertiary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon name="check_circle" size={24} fill />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: theme.tertiary }}>
                      Cleared • 100% Score
                    </span>
                  </div>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: theme.onSurface, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {mod.title}
                  </h4>
                  <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>
                    {mod.stationType}
                  </span>
                </div>
              </div>
              <Icon name="chevron_right" size={20} color={theme.outline} />
            </Card>
          ))}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
