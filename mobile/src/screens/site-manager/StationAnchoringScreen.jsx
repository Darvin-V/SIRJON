/**
 * @file StationAnchoringScreen.jsx
 * @description Station spatial anchor calibration screen matching station_confirmed_ar_setup.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Header } from '../../components/common/Header.jsx';
import { BottomNav } from '../../components/common/BottomNav.jsx';
import { Card } from '../../components/common/Card.jsx';
import { Button } from '../../components/common/Button.jsx';
import { StatusBadge } from '../../components/common/StatusBadge.jsx';
import { Icon } from '../../components/common/Icon.jsx';

export function StationAnchoringScreen() {
  const { theme, selectedStation, navigateTo } = useApp();
  const [anchored, setAnchored] = useState(true);

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
      <Header title="Station Setup" subtitle="Spatial Anchoring • Step 1 of 4" showBack />

      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          padding: '16px',
          maxWidth: 600,
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Progress Tracker */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase' }}>
            <span>Step 1 of 4 • Ground Plane & Origin</span>
            <span style={{ color: theme.primary }}>25% Complete</span>
          </div>
          <div style={{ width: '100%', height: 6, borderRadius: 999, backgroundColor: theme.surfaceContainerHighest, overflow: 'hidden' }}>
            <div style={{ width: '25%', height: '100%', backgroundColor: theme.primary }} />
          </div>
        </div>

        {/* Viewport Calibration Box */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 280,
            borderRadius: 16,
            overflow: 'hidden',
            backgroundColor: '#090d16',
            backgroundImage: "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 14,
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          }}
        >
          {/* Scrim */}
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.65)' }} />

          {/* Top Status */}
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ padding: '3px 10px', borderRadius: 999, backgroundColor: 'rgba(15, 23, 42, 0.9)', color: '#ffffff', fontSize: 11, fontWeight: 700 }}>
              {selectedStation.name}
            </span>
            <StatusBadge variant="pass" label="Plane Locked (98%)" size="sm" />
          </div>

          {/* Center Crosshair Marker */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              alignSelf: 'center',
              width: 90,
              height: 90,
              border: '2px dashed #38bdf8',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)',
            }}
          >
            <Icon name="filter_center_focus" size={36} color="#38bdf8" />
          </div>

          {/* Bottom telemetry */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(8px)',
              padding: '6px 12px',
              borderRadius: 8,
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 11,
              color: '#94a3b8',
            }}
          >
            <span>Origin: (0.0, 0.0, 0.0)</span>
            <span style={{ color: '#6ee7b7', fontWeight: 600 }}>Floor Surface Calibrated</span>
          </div>
        </div>

        {/* Anchor Instructions Card */}
        <Card level={1}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: theme.onSurface }}>
            Spatial Reference Origin Locked
          </h3>
          <p style={{ fontSize: 13, color: theme.onSurfaceVariant, marginTop: 4, lineHeight: '18px' }}>
            The physical floor plane around <strong>{selectedStation.bayId}</strong> is verified. All virtual hazards will anchor to this coordinate frame.
          </p>
        </Card>

        {/* Action Button */}
        <Button
          onClick={() => navigateTo('hazard_config')}
          variant="primary"
          fullWidth
          icon="arrow_forward"
          style={{ marginTop: 10 }}
        >
          Next: Configure Hazards & Physical Elements
        </Button>
      </main>

      <BottomNav />
    </div>
  );
}
