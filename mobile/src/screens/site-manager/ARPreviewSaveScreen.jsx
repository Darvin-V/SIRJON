/**
 * @file ARPreviewSaveScreen.jsx
 * @description 6DoF AR Preview & Save screen matching ar_scenario_preview_save.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Button } from '../../components/common/Button.jsx';
import { Icon } from '../../components/common/Icon.jsx';

export function ARPreviewSaveScreen() {
  const { selectedStation, navigateTo, goBack } = useApp();

  function handleSave() {
    alert(`Configuration for ${selectedStation.name} saved to local SQLite database and ready for backend sync.`);
    navigateTo('manager_sync');
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#090d16',
        color: '#f8fafc',
        overflow: 'hidden',
      }}
    >
      {/* Background Camera Feed Viewport */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.85,
        }}
      />

      {/* Scrim Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.9) 0%, transparent 35%, transparent 65%, rgba(15, 23, 42, 0.95) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* TOP HUD BAR */}
      <div
        style={{
          position: 'relative',
          zIndex: 30,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            type="button"
            onClick={goBack}
            style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              border: 'none',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Icon name="arrow_back" size={22} />
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 12px',
              borderRadius: 999,
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#6ee7b7', animation: 'pulse 1.5s infinite' }} />
            <span>AR PREVIEW MODE • {selectedStation.name}</span>
          </div>

          <div
            style={{
              padding: '4px 10px',
              borderRadius: 999,
              backgroundColor: '#fea619',
              color: '#000000',
              fontSize: 10,
              fontWeight: 800,
              textTransform: 'uppercase',
            }}
          >
            ADMIN CONFIG
          </div>
        </div>

        {/* Telemetry Bar */}
        <div
          style={{
            alignSelf: 'flex-start',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '6px 12px',
            borderRadius: 8,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(12px)',
            fontSize: 11,
            color: '#94a3b8',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#38bdf8' }}>
            <Icon name="sensors" size={14} /> 6DoF Anchors Synced
          </span>
          <span>•</span>
          <span>Drift: <strong style={{ color: '#6ee7b7' }}>0.2cm</strong></span>
          <span>•</span>
          <span>Latency: <strong style={{ color: '#ffffff' }}>3.1ms</strong></span>
        </div>
      </div>

      {/* SPATIAL IN-WORLD AR ANCHORED ELEMENTS */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        {/* Virtual Hazard Overlay */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ position: 'relative', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: 70, height: 70, borderRadius: '50%', backgroundColor: 'rgba(254, 166, 25, 0.4)', filter: 'blur(12px)', animation: 'ping 2s infinite' }} />
            <Icon name="local_fire_department" size={40} color="#fea619" fill />
          </div>
          <span style={{ padding: '3px 8px', borderRadius: 999, backgroundColor: '#ba1a1a', color: '#ffffff', fontSize: 10, fontWeight: 800, textTransform: 'uppercase' }}>
            HAZARD SIM: MOTOR 4B IGNITION
          </span>
        </div>

        {/* Floor Radius Indicator */}
        <div style={{ width: 220, height: 80, border: '2px dashed #fea619', borderRadius: '50%', backgroundColor: 'rgba(254, 166, 25, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ padding: '2px 8px', borderRadius: 4, backgroundColor: 'rgba(15, 23, 42, 0.9)', color: '#fea619', fontSize: 9, fontWeight: 700 }}>
            SAFE STANDOFF ZONE: 2.5M
          </span>
        </div>
      </div>

      {/* LOWER SECTION: TRAINEE PREVIEW CARD & ACTIONS */}
      <div
        style={{
          position: 'relative',
          zIndex: 30,
          padding: '16px 16px 36px',
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div
          style={{
            padding: 12,
            borderRadius: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 12,
            color: '#94a3b8',
          }}
        >
          <span>Active Station Coordinates:</span>
          <strong style={{ color: '#38bdf8' }}>Sector 4 • ST-04</strong>
        </div>

        <Button
          onClick={handleSave}
          variant="primary"
          fullWidth
          icon="save"
        >
          Save Configuration to Station
        </Button>
      </div>
    </div>
  );
}
