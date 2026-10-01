/**
 * @file ModuleDetailsScreen.jsx
 * @description Multi-step module detail view matching Stitch module_details screens.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Header } from '../../components/common/Header.jsx';
import { BottomNav } from '../../components/common/BottomNav.jsx';
import { Card } from '../../components/common/Card.jsx';
import { Button } from '../../components/common/Button.jsx';
import { StatusBadge } from '../../components/common/StatusBadge.jsx';
import { Icon } from '../../components/common/Icon.jsx';

export function ModuleDetailsScreen() {
  const { theme, selectedModule, selectedStation, navigateTo } = useApp();

  const isFire = selectedModule.id === 'MOD-FIRE-01';

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
      <Header title="Module Overview" subtitle="Active Protocol" showBack />

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
        {/* Module Header Card */}
        <Card level={1}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: isFire ? `${theme.secondary}20` : `${theme.primary}20`,
                  color: isFire ? theme.secondary : theme.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon
                  name={isFire ? 'local_fire_department' : 'air'}
                  size={32}
                  fill
                />
              </div>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, color: theme.primary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Step 1 of 4 • Pre-Drill Clearance
                </span>
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: theme.onSurface,
                    lineHeight: '26px',
                    marginTop: 2,
                  }}
                >
                  {selectedModule.title}
                </h2>
              </div>
            </div>
            <StatusBadge variant="warning" label="Active" />
          </div>

          <p style={{ fontSize: 13, color: theme.onSurfaceVariant, lineHeight: '20px' }}>
            {selectedModule.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 8,
              marginTop: 14,
              paddingTop: 12,
              borderTop: `1px solid ${theme.outlineVariant}30`,
            }}
          >
            <div>
              <span style={{ fontSize: 10, color: theme.onSurfaceVariant, textTransform: 'uppercase' }}>Duration</span>
              <div style={{ fontSize: 14, fontWeight: 700, color: theme.onSurface, marginTop: 2 }}>
                {selectedModule.durationMinutes} mins
              </div>
            </div>
            <div>
              <span style={{ fontSize: 10, color: theme.onSurfaceVariant, textTransform: 'uppercase' }}>Passing Score</span>
              <div style={{ fontSize: 14, fontWeight: 700, color: theme.tertiary, marginTop: 2 }}>
                {selectedModule.passingThreshold}%
              </div>
            </div>
            <div>
              <span style={{ fontSize: 10, color: theme.onSurfaceVariant, textTransform: 'uppercase' }}>Target Bay</span>
              <div style={{ fontSize: 14, fontWeight: 700, color: theme.primary, marginTop: 2 }}>
                {selectedStation.bayId}
              </div>
            </div>
          </div>
        </Card>

        {/* Required Station Marker Check */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Station Hardware Requirement
          </span>

          <Card level={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: theme.surfaceContainer,
                  color: theme.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon name="qr_code_2" size={24} />
              </div>
              <div>
                <span style={{ fontSize: 14, fontWeight: 700, color: theme.onSurface }}>
                  {selectedStation.name}
                </span>
                <span style={{ fontSize: 12, color: theme.onSurfaceVariant, display: 'block', marginTop: 1 }}>
                  Physical optical QR tag: <strong style={{ color: theme.primary }}>{selectedStation.qrCode}</strong>
                </span>
              </div>
            </div>
            <StatusBadge variant="info" label="Ready" size="sm" />
          </Card>
        </section>

        {/* Simulated Augmented Elements Summary */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Spatial AR Environment Map
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: 12,
                borderRadius: 10,
                backgroundColor: theme.surfaceContainer,
                fontSize: 13,
              }}
            >
              <Icon name="local_fire_department" size={20} color={isFire ? theme.secondary : theme.primary} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, color: theme.onSurface }}>
                  Virtual Hazard: {isFire ? 'Class B Solvent Flame & Smoke Plume' : 'H2S Combustible Vapor Leak'}
                </span>
                <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>
                  Anchored relative to training station origin with 2.5m safety perimeter ring.
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: 12,
                borderRadius: 10,
                backgroundColor: theme.surfaceContainer,
                fontSize: 13,
              }}
            >
              <Icon name="verified_user" size={20} color={theme.tertiary} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, color: theme.onSurface }}>
                  Physical Equipment Verification
                </span>
                <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>
                  Camera reticle will lock onto real fire extinguisher, E-stop switch, and exit door.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Action Button */}
        <Button
          onClick={() => navigateTo('qr_scanner')}
          variant="primary"
          fullWidth
          icon="qr_code_scanner"
          style={{ marginTop: 10 }}
        >
          Scan Station QR Code
        </Button>
      </main>

      <BottomNav />
    </div>
  );
}
