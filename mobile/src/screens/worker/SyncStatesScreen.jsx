/**
 * @file SyncStatesScreen.jsx
 * @description Interactive Offline State Machine screen from Batch 3.
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

export function SyncStatesScreen() {
  const { theme, navigateTo } = useApp();
  const [activeState, setActiveState] = useState('QUEUED'); // 'QUEUED' | 'SYNCING' | 'SYNCED'

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
      <Header title="Sync States" subtitle="Offline State Machine" showBack />

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
        {/* Interactive State Selector */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { id: 'QUEUED', label: '1. Local Saved', icon: 'save' },
            { id: 'SYNCING', label: '2. Syncing', icon: 'sync' },
            { id: 'SYNCED', label: '3. Synced', icon: 'cloud_done' },
          ].map(s => {
            const isSelected = activeState === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveState(s.id)}
                style={{
                  height: 48,
                  borderRadius: 10,
                  border: `1.5px solid ${isSelected ? theme.primary : theme.outlineVariant + '40'}`,
                  backgroundColor: isSelected ? `${theme.primary}20` : theme.surfaceContainer,
                  color: isSelected ? theme.primary : theme.onSurfaceVariant,
                  fontSize: 12,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  cursor: 'pointer',
                }}
              >
                <Icon name={s.icon} size={16} />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* State Visual Card */}
        <Card level={1}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase' }}>
              State Representation
            </span>
            <StatusBadge
              variant={activeState === 'SYNCED' ? 'pass' : activeState === 'SYNCING' ? 'warning' : 'info'}
              label={activeState}
              pulse={activeState === 'SYNCING'}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                backgroundColor:
                  activeState === 'SYNCED'
                    ? `${theme.tertiary}20`
                    : activeState === 'SYNCING'
                    ? `${theme.secondary}20`
                    : `${theme.primary}20`,
                color:
                  activeState === 'SYNCED'
                    ? theme.tertiary
                    : activeState === 'SYNCING'
                    ? theme.secondary
                    : theme.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon
                name={
                  activeState === 'SYNCED'
                    ? 'cloud_done'
                    : activeState === 'SYNCING'
                    ? 'autorenew'
                    : 'database'
                }
                size={30}
              />
            </div>

            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: theme.onSurface }}>
                {activeState === 'QUEUED' && 'Locally Cached in Device SQLite'}
                {activeState === 'SYNCING' && 'Pushing Record to Backend REST API'}
                {activeState === 'SYNCED' && 'Confirmed by Central PostgreSQL Server'}
              </h3>
              <p style={{ fontSize: 12, color: theme.onSurfaceVariant, marginTop: 4, lineHeight: '18px' }}>
                {activeState === 'QUEUED' &&
                  'The assessment result is securely signed with a local SHA-256 hash and queued in local SQLite table. The worker can review their certificate offline.'}
                {activeState === 'SYNCING' &&
                  'Network connectivity was detected. Background worker executes batch sync with exponential backoff retry.'}
                {activeState === 'SYNCED' &&
                  'Backend acknowledged transaction with verification code. Admin dashboard can immediately view drill evaluation.'}
              </p>
            </div>
          </div>
        </Card>

        {/* Technical Specification Summary */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Integration Architecture Rule
          </span>
          <div
            style={{
              padding: 14,
              borderRadius: 12,
              backgroundColor: theme.surfaceContainer,
              fontSize: 12,
              color: theme.onSurfaceVariant,
              lineHeight: '18px',
            }}
          >
            <strong style={{ color: theme.onSurface }}>Idempotent Sync Design:</strong> Each local record generates a client-side UUID (e.g., <code>RES-FS-2026-081</code>). Duplicate uploads will safely update existing records without creating phantom attempts.
          </div>
        </section>

        <Button
          onClick={() => navigateTo('offline_sync')}
          variant="primary"
          fullWidth
          icon="arrow_back"
          style={{ marginTop: 10 }}
        >
          Return to Offline Manager
        </Button>
      </main>

      <BottomNav />
    </div>
  );
}
