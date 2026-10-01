/**
 * @file Reticle.jsx
 * @description 1.5px cyan hairline frame with corner brackets and telemetry floating tags.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { Icon } from '../common/Icon.jsx';

export function Reticle({
  targetLabel = 'CONV-MOTOR-4B',
  statusText = 'LOCKED',
  distance = '3.4M',
  temperature = '382°C',
  warningTitle = 'VAPOR IGNITION',
  isLocked = true,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      {/* Reticle Hairline Target Box */}
      <div
        style={{
          position: 'relative',
          width: 200,
          minHeight: 90,
          backgroundColor: 'rgba(15, 23, 42, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: 10,
          padding: 10,
          border: '1px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 6,
        }}
      >
        {/* Corner Reticle Indicators */}
        <span style={{ position: 'absolute', top: -3, left: -3, width: 8, height: 8, borderTop: '2.5px solid #fea619', borderLeft: '2.5px solid #fea619' }} />
        <span style={{ position: 'absolute', top: -3, right: -3, width: 8, height: 8, borderTop: '2.5px solid #fea619', borderRight: '2.5px solid #fea619' }} />
        <span style={{ position: 'absolute', bottom: -3, left: -3, width: 8, height: 8, borderBottom: '2.5px solid #fea619', borderLeft: '2.5px solid #fea619' }} />
        <span style={{ position: 'absolute', bottom: -3, right: -3, width: 8, height: 8, borderBottom: '2.5px solid #fea619', borderRight: '2.5px solid #fea619' }} />

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Icon name="warning" size={14} color="#fca5a5" fill />
            <span style={{ fontSize: 10, fontWeight: 800, color: '#fca5a5', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {warningTitle}
            </span>
          </div>
          {temperature && (
            <span style={{ fontSize: 11, fontWeight: 700, color: '#fcd34d', fontFamily: 'monospace' }}>
              {temperature}
            </span>
          )}
        </div>

        {/* Target Asset ID */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            padding: '3px 6px',
            borderRadius: 4,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 600, color: '#f8fafc', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            ASSET: {targetLabel}
          </span>
        </div>

        {/* Telemetry bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 10, color: '#94a3b8', fontWeight: 600 }}>
          <span>DIST: {distance}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: isLocked ? '#4edea3' : '#fea619' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: isLocked ? '#4edea3' : '#fea619' }} />
            {statusText}
          </span>
        </div>
      </div>
    </div>
  );
}
