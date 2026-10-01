/**
 * @file CertificateScreen.jsx
 * @description Digital Safety Certificate screen matching Stitch certificate exports.
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
import { generateCertificate, SAMPLE_CERTIFICATE_FIRE } from '@shared/types/certificate.js';

export function CertificateScreen() {
  const { theme, currentResult, navigateTo } = useApp();

  const cert = currentResult ? generateCertificate(currentResult) : SAMPLE_CERTIFICATE_FIRE;

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
      <Header title="Digital Safety Certificate" subtitle="Assessment Evaluation" showBack />

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
        {/* Verification Success Pill */}
        <div
          style={{
            padding: 14,
            borderRadius: 14,
            backgroundColor: `${theme.tertiary}14`,
            border: `1.5px solid ${theme.tertiary}40`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: theme.tertiary,
              color: theme.onTertiary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Icon name="verified" size={24} fill />
          </div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 700, color: theme.onSurface, display: 'block' }}>
              Practical Competency Cleared
            </span>
            <span style={{ fontSize: 12, color: theme.onSurfaceVariant, marginTop: 2, display: 'block' }}>
              {cert.workerName} passed the simulated hazard protocol. Local cryptoseal has locked this record.
            </span>
          </div>
        </div>

        {/* Main Certificate Frame */}
        <div
          style={{
            position: 'relative',
            borderRadius: 18,
            overflow: 'hidden',
            backgroundColor: theme.surfaceContainer,
            border: `1.5px solid ${theme.outlineVariant}60`,
            padding: '24px 20px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* Watermark Ornament */}
          <div
            style={{
              position: 'absolute',
              right: -30,
              top: -30,
              opacity: 0.04,
              pointerEvents: 'none',
              color: theme.onSurface,
            }}
          >
            <Icon name="shield_with_house" size={240} fill />
          </div>

          {/* Certificate Header */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 12px',
                borderRadius: 999,
                backgroundColor: theme.surfaceContainerHigh,
                marginBottom: 10,
              }}
            >
              <Icon name="token" size={16} color={theme.primary} />
              <span style={{ fontSize: 10, fontWeight: 700, color: theme.primary, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                AR-SAFE Industrial Simulation Platform
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 18,
                fontWeight: 800,
                color: theme.onSurface,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
              }}
            >
              Certificate of Training Completion
            </h2>
            <p style={{ fontSize: 12, color: theme.onSurfaceVariant, marginTop: 4, maxWidth: 300 }}>
              This certifies that the worker has completed the practical simulated AR scenario
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, opacity: 0.7 }}>
              <div style={{ width: 40, height: 2, backgroundColor: theme.primary }} />
              <Icon name="security" size={14} color={theme.primary} />
              <div style={{ width: 40, height: 2, backgroundColor: theme.primary }} />
            </div>
          </div>

          {/* Worker Identity Card */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: 12,
              borderRadius: 12,
              backgroundColor: theme.surfaceLow,
              border: `1px solid ${theme.outlineVariant}30`,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                backgroundColor: theme.primary,
                color: theme.onPrimary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              MD
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: theme.primary, textTransform: 'uppercase' }}>
                Worker Credential
              </span>
              <span style={{ fontSize: 15, fontWeight: 700, color: theme.onSurface }}>
                {cert.workerName}
              </span>
              <span style={{ fontSize: 12, color: theme.onSurfaceVariant, fontFamily: 'monospace' }}>
                {cert.workerId} • {cert.workerRole}
              </span>
            </div>
          </div>

          {/* Training Spec Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 8, backgroundColor: theme.surfaceLow }}>
              <span style={{ fontSize: 12, color: theme.onSurfaceVariant }}>Training Module</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: theme.onSurface }}>{cert.moduleTitle}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 8, backgroundColor: theme.surfaceLow }}>
              <span style={{ fontSize: 12, color: theme.onSurfaceVariant }}>Facility / Station</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: theme.onSurface }}>{cert.facilityName}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 8, backgroundColor: theme.surfaceLow }}>
              <span style={{ fontSize: 12, color: theme.onSurfaceVariant }}>Score Achieved</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: theme.tertiary }}>{cert.score}% PASSED</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 8, backgroundColor: theme.surfaceLow }}>
              <span style={{ fontSize: 12, color: theme.onSurfaceVariant }}>Certificate ID</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: theme.primary, fontFamily: 'monospace' }}>{cert.id}</span>
            </div>
          </div>

          {/* Verification QR Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: 14,
              borderRadius: 12,
              backgroundColor: theme.surfaceLow,
              border: `1px dashed ${theme.primary}60`,
            }}
          >
            {/* Simulated QR Code Graphic */}
            <div
              style={{
                width: 64,
                height: 64,
                backgroundColor: '#ffffff',
                borderRadius: 8,
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon name="qr_code_2" size={56} color="#000000" />
            </div>
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, color: theme.onSurface, display: 'block' }}>
                Cryptographic Audit QR
              </span>
              <span style={{ fontSize: 11, color: theme.onSurfaceVariant, marginTop: 2, display: 'block' }}>
                Scannable by site supervisors to verify compliance against central PostgreSQL ledger.
              </span>
              <span style={{ fontSize: 10, fontWeight: 600, color: theme.tertiary, marginTop: 4, display: 'block' }}>
                ✓ {cert.cryptoSeal}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Button
            onClick={() => alert(`Certificate ${cert.id} generated and ready for PDF export.`)}
            variant="primary"
            fullWidth
            icon="download"
          >
            Download Verified PDF Certificate
          </Button>

          <Button
            onClick={() => navigateTo('dashboard')}
            variant="secondary"
            fullWidth
            icon="home"
          >
            Return to Worker Dashboard
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
