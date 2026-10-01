/**
 * @file ARTrackingSetupScreen.jsx
 * @description AR tracking calibration ready screen matching ar_tracking_setup_ready.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { useTraining } from '../../context/TrainingContext.jsx';
import { Button } from '../../components/common/Button.jsx';
import { Icon } from '../../components/common/Icon.jsx';

export function ARTrackingSetupScreen() {
  const { selectedStation, selectedModule, navigateTo, goBack } = useApp();
  const { startDrill } = useTraining();

  function handleStartDrill() {
    startDrill();
    navigateTo('ar_live');
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
      {/* Background Camera Viewport */}
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

      {/* Top Scrim */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.9) 0%, transparent 40%, transparent 70%, rgba(15, 23, 42, 0.95) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Header */}
      <div
        style={{
          position: 'relative',
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
        }}
      >
        <button
          type="button"
          onClick={goBack}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            border: 'none',
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Icon name="arrow_back" size={24} />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase' }}>
            {selectedStation.name}
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#f8fafc' }}>
            SECTOR 4A • ASSET #9102
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 10px',
            borderRadius: 999,
            backgroundColor: 'rgba(6, 78, 59, 0.9)',
            color: '#6ee7b7',
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#6ee7b7' }} />
          <span>Tracking Ready</span>
        </div>
      </div>

      {/* Center Reticle Tracking Target */}
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
        <div
          style={{
            position: 'relative',
            width: 220,
            height: 120,
            border: '2px solid rgba(56, 189, 248, 0.8)',
            borderRadius: 12,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#38bdf8' }}>
              ARCore 6DoF Anchors Locked
            </span>
            <Icon name="verified" size={16} color="#6ee7b7" fill />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, backgroundColor: 'rgba(255,255,255,0.08)', padding: '4px 8px', borderRadius: 6 }}>
            <Icon name="view_in_ar" size={16} color="#fea619" />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff' }}>
              MOTOR_DRIVE_01 [LOCKED]
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 10, color: '#94a3b8' }}>
            <span>Drift: &lt; 0.2cm</span>
            <span style={{ color: '#6ee7b7', fontWeight: 600 }}>Confidence: 98%</span>
          </div>
        </div>
      </div>

      {/* Bottom Guidance Drawer */}
      <div
        style={{
          position: 'relative',
          zIndex: 30,
          padding: '20px 16px 36px',
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              color: '#38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name="sensors" size={20} />
          </div>
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#ffffff' }}>
              Spatial Surface Ground Locked
            </span>
            <p style={{ fontSize: 11, color: '#94a3b8', marginTop: 1 }}>
              Virtual hazard coordinate frame is now spatially tied to the training bay.
            </p>
          </div>
        </div>

        <Button
          onClick={handleStartDrill}
          variant="primary"
          fullWidth
          icon="play_arrow"
        >
          Start Training Scenario ({selectedModule.title})
        </Button>
      </div>
    </div>
  );
}
