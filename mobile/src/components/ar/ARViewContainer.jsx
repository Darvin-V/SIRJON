/**
 * @file ARViewContainer.jsx
 * @description Camera viewport container and HUD layer from Stitch live AR screens.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useTraining } from '../../context/TrainingContext.jsx';
import { useApp } from '../../context/AppContext.jsx';
import { Icon } from '../common/Icon.jsx';
import { formatTimer } from '../../utils/formatters.js';

export function ARViewContainer({ children, statusBannerText = 'HAZARD IDENTIFIED • CLASS B FLAMMABLE SOLVENT' }) {
  const {
    timeRemaining,
    currentStepIndex,
    isTorchOn,
    setIsTorchOn,
    isAudioPromptOn,
    setIsAudioPromptOn,
  } = useTraining();

  const { selectedModule, goBack } = useApp();

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 520,
        height: '68vh',
        maxHeight: 700,
        backgroundColor: '#090d16',
        borderRadius: '0 0 20px 20px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Background Simulated Plant Camera Feed */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isTorchOn ? 1.0 : 0.85,
          filter: isTorchOn ? 'brightness(1.2)' : 'none',
          transition: 'filter 0.3s ease',
        }}
      />

      {/* Top & Bottom ambient HUD gradients for text contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.85) 0%, transparent 35%, transparent 65%, rgba(15, 23, 42, 0.95) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top HUD Telemetry Bar */}
      <div
        style={{
          position: 'absolute',
          top: 12,
          left: 12,
          right: 12,
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: '8px 12px',
            borderRadius: 12,
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#f8fafc',
          }}
        >
          {/* Module details */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            <button
              type="button"
              onClick={goBack}
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                border: 'none',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Icon name="arrow_back" size={20} />
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Module Drill • Live AR
              </span>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#f8fafc', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {selectedModule?.title || 'Fire Response'}
              </span>
            </div>
          </div>

          {/* Drill timer and step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: 9, color: '#94a3b8', letterSpacing: '0.02em' }}>DRILL CLOCK</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: '#f87171', fontFamily: 'monospace' }}>
                {formatTimer(timeRemaining)}
              </span>
            </div>
            <div style={{ width: 1, height: 24, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            <span
              style={{
                padding: '3px 8px',
                borderRadius: 6,
                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                color: '#38bdf8',
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              Step {currentStepIndex + 1}/4
            </span>
          </div>
        </div>

        {/* Priority Status Alert Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ba1a1a',
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(186, 26, 26, 0.4)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                animation: 'ping 1.2s cubic-bezier(0, 0, 0.2, 1) infinite',
              }}
            />
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.03em', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {statusBannerText}
            </span>
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 4, backgroundColor: 'rgba(0,0,0,0.3)', textTransform: 'uppercase' }}>
            Priority 1
          </span>
        </div>
      </div>

      {/* Floating Action Controls on Right side */}
      <div
        style={{
          position: 'absolute',
          right: 12,
          top: 130,
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {/* Flashlight toggle */}
        <button
          type="button"
          onClick={() => setIsTorchOn(prev => !prev)}
          title="Toggle Flashlight / Torch"
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backgroundColor: isTorchOn ? '#fea619' : 'rgba(15, 23, 42, 0.85)',
            color: isTorchOn ? '#000000' : '#ffffff',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Icon name={isTorchOn ? 'flashlight_on' : 'flashlight_off'} size={20} fill={isTorchOn} />
        </button>

        {/* Audio cues toggle */}
        <button
          type="button"
          onClick={() => setIsAudioPromptOn(prev => !prev)}
          title="Toggle Audio Cues"
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            color: isAudioPromptOn ? '#38bdf8' : '#94a3b8',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Icon name={isAudioPromptOn ? 'volume_up' : 'volume_off'} size={20} />
        </button>

        {/* Center / Calibrate reticle */}
        <button
          type="button"
          title="Recalibrate Center Target"
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            color: '#ffffff',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Icon name="center_focus_strong" size={20} />
        </button>
      </div>

      {/* Children: In-world virtual reticle and hazard overlays */}
      {children}
    </div>
  );
}
