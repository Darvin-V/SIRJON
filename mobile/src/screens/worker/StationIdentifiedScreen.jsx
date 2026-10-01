/**
 * @file StationIdentifiedScreen.jsx
 * @description Station confirmation screen matching station_identified_conveyor_01.
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

export function StationIdentifiedScreen() {
  const { theme, selectedStation, selectedModule, navigateTo } = useApp();

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
      <Header title="Station Matched" subtitle="Spatial Synchronization" showBack />

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
        {/* Verification Success Hero */}
        <Card
          level={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            backgroundColor: `${theme.tertiary}14`,
            border: `1.5px solid ${theme.tertiary}40`,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              backgroundColor: theme.tertiary,
              color: theme.onTertiary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(0, 133, 91, 0.3)',
            }}
          >
            <Icon name="check_circle" size={32} fill />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: theme.tertiary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Optical Beacon Validated
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: theme.onSurface,
              }}
            >
              Spatial Context Synchronized
            </h2>
            <p style={{ fontSize: 12, color: theme.onSurfaceVariant, marginTop: 4 }}>
              Device camera successfully locked onto local station marker. Ready to establish 6DoF tracking reference plane.
            </p>
          </div>
        </Card>

        {/* Station Telemetry Specs */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Station Reference Profile
          </span>

          <Card level={1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, color: theme.onSurfaceVariant }}>Station Identity</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: theme.onSurface, fontFamily: 'monospace' }}>
                  {selectedStation.id}
                </span>
              </div>
              <div style={{ height: 1, backgroundColor: `${theme.outlineVariant}30` }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, color: theme.onSurfaceVariant }}>Training Facility</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: theme.onSurface }}>
                  {selectedStation.sector} • {selectedStation.bayId}
                </span>
              </div>
              <div style={{ height: 1, backgroundColor: `${theme.outlineVariant}30` }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, color: theme.onSurfaceVariant }}>AR Plane Confidence</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: theme.tertiary }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: theme.tertiary }}>
                    {Math.round(selectedStation.trackingConfidence * 100)}% Locked
                  </span>
                </div>
              </div>
              <div style={{ height: 1, backgroundColor: `${theme.outlineVariant}30` }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, color: theme.onSurfaceVariant }}>Mapped Physical Anchors</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: theme.primary }}>
                  {selectedStation.physicalElements.length} Physical Points
                </span>
              </div>
            </div>
          </Card>
        </section>

        {/* Physical Anchors Checklist */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Registered Physical Points
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {selectedStation.physicalElements.map(elem => (
              <div
                key={elem.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: 10,
                  backgroundColor: theme.surfaceContainer,
                  border: `1px solid ${theme.outlineVariant}30`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon name="pin_drop" size={18} color={theme.primary} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: theme.onSurface }}>
                    {elem.name}
                  </span>
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: theme.onSurfaceVariant, padding: '2px 8px', borderRadius: 4, backgroundColor: theme.surfaceContainerHigh }}>
                  {elem.anchor}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Action Button */}
        <Button
          onClick={() => navigateTo('ar_setup')}
          variant="primary"
          fullWidth
          icon="view_in_ar"
          style={{ marginTop: 10 }}
        >
          Initialize 6DoF AR Tracking
        </Button>
      </main>

      <BottomNav />
    </div>
  );
}
