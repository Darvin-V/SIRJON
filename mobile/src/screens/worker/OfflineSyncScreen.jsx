/**
 * @file OfflineSyncScreen.jsx
 * @description Offline SQLite cache & Sync Manager screen matching ar_safe_offline_sync_manager.
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
import { MOCK_QUEUED_RECORDS } from '../../data/mockData.js';

export function OfflineSyncScreen() {
  const { theme, isOffline, toggleOffline, navigateTo } = useApp();
  const [records, setRecords] = useState(MOCK_QUEUED_RECORDS);
  const [isSyncing, setIsSyncing] = useState(false);

  function triggerSync() {
    setIsSyncing(true);
    setTimeout(() => {
      setRecords(prev =>
        prev.map(r => ({ ...r, status: 'SYNCED' }))
      );
      setIsSyncing(false);
    }, 1500);
  }

  const queuedCount = records.filter(r => r.status === 'QUEUED').length;

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
      <Header title="Offline & Sync" subtitle="SQLite Cache Manager" showBack />

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
        {/* Network & Storage Status Card */}
        <Card level={1}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  backgroundColor: isOffline ? theme.secondary : theme.tertiary,
                  animation: 'pulse 1.5s infinite',
                }}
              />
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: theme.onSurface,
                }}
              >
                {isOffline ? 'Offline Mode Active' : 'Online • Connected'}
              </span>
            </div>
            <StatusBadge
              variant={isOffline ? 'warning' : 'pass'}
              label={isOffline ? 'NO LINK' : 'LIVE'}
              icon={isOffline ? 'wifi_off' : 'wifi'}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: theme.onSurfaceVariant }}>
            <Icon name="database" size={16} color={theme.secondary} />
            <span>Local SQLite Cache Enabled • 100% Operational</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 14,
              paddingTop: 10,
              borderTop: `1px solid ${theme.outlineVariant}30`,
              fontSize: 12,
              color: theme.onSurfaceVariant,
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="hard_drive" size={16} />
              <span>Storage: 24.8 MB / 512 MB</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: theme.tertiary, fontWeight: 600 }}>
              <Icon name="verified_user" size={16} />
              <span>SHA-256 Vault Intact</span>
            </span>
          </div>
        </Card>

        {/* Operational Awareness Notice */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
            padding: 14,
            borderRadius: 12,
            backgroundColor: theme.surfaceContainerHighest,
            color: theme.onSurface,
          }}
        >
          <Icon name="info" size={22} color={theme.primary} />
          <div>
            <span style={{ fontSize: 14, fontWeight: 700, display: 'block' }}>
              Field Drills Operable Without Internet
            </span>
            <span style={{ fontSize: 12, color: theme.onSurfaceVariant, marginTop: 2, display: 'block', lineHeight: '18px' }}>
              Mining shafts and processing chambers with zero wireless connectivity function seamlessly. Completed records are cryptographically sealed locally.
            </span>
          </div>
        </div>

        {/* Pending Sync Queue */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Pending Training Upload Queue
            </span>
            <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 999, backgroundColor: theme.surfaceContainerHigh, color: theme.onSurfaceVariant }}>
              {queuedCount} Queued Records
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {records.map(rec => (
              <Card key={rec.id} level={1} style={{ padding: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        backgroundColor: theme.surfaceContainerHigh,
                        color: theme.primary,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="fact_check" size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: 14, fontWeight: 700, color: theme.onSurface, display: 'block' }}>
                        {rec.moduleTitle}
                      </span>
                      <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>
                        {rec.stationName} • {rec.timestamp}
                      </span>
                    </div>
                  </div>

                  <StatusBadge
                    variant={rec.status === 'SYNCED' ? 'pass' : 'warning'}
                    label={rec.status === 'SYNCED' ? 'SYNCED' : 'QUEUED'}
                    size="sm"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Sync Trigger Button */}
          <Button
            onClick={triggerSync}
            disabled={isSyncing || queuedCount === 0}
            variant="primary"
            fullWidth
            icon={isSyncing ? 'refresh' : 'cloud_upload'}
            style={{ marginTop: 8 }}
          >
            {isSyncing ? 'Synchronizing with Central Server...' : queuedCount > 0 ? `Upload & Synchronize (${queuedCount} Items)` : 'All Records Synced'}
          </Button>

          <Button
            onClick={() => navigateTo('sync_states')}
            variant="secondary"
            fullWidth
            icon="network_ping"
          >
            Demo Offline & Sync State Machine
          </Button>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
