/**
 * @file HazardIndicator.jsx
 * @description Virtual AR Hazard overlay (Volumetric flame / gas plume) from Stitch.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { Icon } from '../common/Icon.jsx';

export function HazardIndicator({ type = 'fire' }) {
  if (type === 'gas') {
    return (
      <div
        style={{
          position: 'absolute',
          top: '32%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        <div style={{ position: 'relative', width: 140, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              position: 'absolute',
              width: 120,
              height: 120,
              borderRadius: '50%',
              backgroundColor: 'rgba(254, 166, 25, 0.25)',
              filter: 'blur(20px)',
              animation: 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
            }}
          />
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(245, 158, 11, 0.2) 70%, transparent 100%)',
              filter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name="air" size={40} color="#fea619" />
          </div>
        </div>
        <span
          style={{
            marginTop: 4,
            padding: '3px 8px',
            borderRadius: 999,
            backgroundColor: '#ba1a1a',
            color: '#ffffff',
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          H2S Vapor Plume (LEL 42%)
        </span>
      </div>
    );
  }

  // Default: Fire
  return (
    <div
      style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      <div style={{ position: 'relative', width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            position: 'absolute',
            width: 100,
            height: 100,
            borderRadius: '50%',
            backgroundColor: 'rgba(254, 166, 25, 0.3)',
            filter: 'blur(16px)',
            animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
          }}
        />
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            backgroundColor: 'rgba(239, 68, 68, 0.35)',
            filter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="local_fire_department" size={44} color="#fea619" fill />
        </div>
      </div>
    </div>
  );
}
