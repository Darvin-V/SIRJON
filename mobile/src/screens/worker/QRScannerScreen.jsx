/**
 * @file QRScannerScreen.jsx
 * @description Station optical QR code scanner from Stitch scan_station_qr.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Button } from '../../components/common/Button.jsx';
import { Icon } from '../../components/common/Icon.jsx';

export function QRScannerScreen() {
  const { theme, selectedModule, selectedStation, navigateTo, goBack } = useApp();
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  function handleScanSuccess() {
    navigateTo('station_identified', {
      stationId: selectedStation.id,
      moduleId: selectedModule.id,
    });
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
          backgroundImage: "url('https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.65,
          filter: isTorchOn ? 'brightness(1.3)' : 'none',
        }}
      />

      {/* Dark Scrim overlay with clear center cutout */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(9, 13, 22, 0.75)',
        }}
      />

      {/* Top Bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <button
          type="button"
          onClick={goBack}
          aria-label="Close"
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Icon name="close" size={24} />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Station Setup Protocol
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>
            {selectedModule.title}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button
            type="button"
            onClick={() => setIsTorchOn(prev => !prev)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              border: 'none',
              backgroundColor: isTorchOn ? '#fea619' : 'rgba(255, 255, 255, 0.1)',
              color: isTorchOn ? '#000000' : '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Icon name={isTorchOn ? 'flashlight_on' : 'flashlight_off'} size={20} fill={isTorchOn} />
          </button>
          <button
            type="button"
            onClick={() => setShowInfo(prev => !prev)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Icon name="info" size={20} />
          </button>
        </div>
      </div>

      {/* Info Banner Dropdown */}
      {showInfo && (
        <div
          style={{
            position: 'relative',
            zIndex: 30,
            padding: '12px 16px',
            backgroundColor: 'rgba(0, 97, 148, 0.9)',
            color: '#ffffff',
            fontSize: 12,
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Icon name="help_outline" size={20} />
          <span>Point device camera at the physical training station reference marker (e.g. {selectedStation.qrCode}) to establish local AR coordinate origin.</span>
        </div>
      )}

      {/* Main Viewfinder Section */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        {/* Reticle Target Frame */}
        <div
          onClick={handleScanSuccess}
          style={{
            position: 'relative',
            width: 260,
            height: 260,
            borderRadius: 20,
            border: '2px dashed rgba(56, 189, 248, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 0 40px rgba(0, 97, 148, 0.3)',
          }}
        >
          {/* Corner Guides */}
          <span style={{ position: 'absolute', top: -4, left: -4, width: 24, height: 24, borderTop: '4px solid #38bdf8', borderLeft: '4px solid #38bdf8', borderRadius: '4px 0 0 0' }} />
          <span style={{ position: 'absolute', top: -4, right: -4, width: 24, height: 24, borderTop: '4px solid #38bdf8', borderRight: '4px solid #38bdf8', borderRadius: '0 4px 0 0' }} />
          <span style={{ position: 'absolute', bottom: -4, left: -4, width: 24, height: 24, borderBottom: '4px solid #38bdf8', borderLeft: '4px solid #38bdf8', borderRadius: '0 0 0 4px' }} />
          <span style={{ position: 'absolute', bottom: -4, right: -4, width: 24, height: 24, borderBottom: '4px solid #38bdf8', borderRight: '4px solid #38bdf8', borderRadius: '0 0 4px 0' }} />

          {/* Animated Scanning Laser Line */}
          <div
            style={{
              position: 'absolute',
              width: '90%',
              height: 2,
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 12px #38bdf8',
              animation: 'pulse 1.8s infinite',
            }}
          />

          <Icon name="qr_code_scanner" size={54} color="rgba(255, 255, 255, 0.3)" />
          <span style={{ fontSize: 12, fontWeight: 600, color: '#38bdf8', marginTop: 12, textAlign: 'center' }}>
            Tap Frame to Simulate Scan
          </span>
        </div>

        {/* Searching Status Indicator */}
        <div
          style={{
            marginTop: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 16px',
            borderRadius: 999,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#fea619', animation: 'ping 1.5s infinite' }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: '#f8fafc' }}>
            Target Lock: Active • Searching for Station QR...
          </span>
        </div>
      </div>

      {/* Bottom Simulated Detection Drawer */}
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, color: '#94a3b8' }}>
          <span>Expected Target Beacon:</span>
          <span style={{ color: '#38bdf8', fontWeight: 700, fontFamily: 'monospace' }}>
            {selectedStation.qrCode}
          </span>
        </div>

        <Button
          onClick={handleScanSuccess}
          variant="primary"
          fullWidth
          icon="check_circle"
        >
          Confirm Optical Match ({selectedStation.name})
        </Button>
      </div>
    </div>
  );
}
