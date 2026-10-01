/**
 * @file ManagerSyncScreen.jsx
 * @description Site Manager offline configuration sync screen matching Batch 3.
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
import { STATIONS } from '../../data/mockData.js';

export function ManagerSyncScreen() {
  const { theme, isOffline, navigateTo } = useApp();
  const [synced, setSynced] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  function handleSync() {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSynced(true);
    }, 1500);
  }

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
      <Header title="Station Sync" subtitle="Site Manager Configuration Push" showBack />

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
        {/* Offline Manager Status */}
        <Card
          level={1}
          style={{
            backgroundColor: `${theme.secondary}12`,
            border: `1.5px solid ${theme.secondary}35`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name="offline_bolt" size={24} color={theme.secondary} />
              <h2 style={{ fontSize: 18, fontWeight: 700, color: theme.onSurface }}>
                Station Config Ready to Sync
              </h2>
            </div>
            <StatusBadge variant={synced ? 'pass' : 'warning'} label={synced ? 'SYNCED' : 'PENDING'} />
          </div>

          <p style={{ fontSize: 13, color: theme.onSurfaceVariant, lineHeight: '18px' }}>
            Station 6DoF anchor matrices and virtual hazard transforms configured on this device are stored in local SQLite. Push them to the Central Database so all workers can download updated spatial meshes.
          </p>
        </Card>

        {/* Station Configs List */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Local Station Profiles (2)
          </span>

          {STATIONS.map(st => (
            <Card key={st.id} level={1} style={{ padding: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: theme.onSurface, display: 'block' }}>
                    {st.name}
                  </span>
                  <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>
                    {st.physicalElements.length} Physical Anchors • {st.virtualHazards.length} Virtual Hazards
                  </span>
                </div>
                <StatusBadge variant={synced ? 'pass' : 'info'} label={synced ? 'PUSHED' : 'READY'} size="sm" />
              </div>
            </Card>
          ))}
        </section>

        {/* Action Button */}
        <Button
          onClick={handleSync}
          disabled={isSyncing || synced}
          variant="primary"
          fullWidth
          icon={isSyncing ? 'refresh' : 'cloud_upload'}
          style={{ marginTop: 10 }}
        >
          {isSyncing ? 'Uploading Station Meshes...' : synced ? 'All Configurations Synced' : 'Upload All Station Configurations'}
        </Button>

        <Button
          onClick={() => navigateTo('site_manager_stations')}
          variant="secondary"
          fullWidth
          icon="home"
        >
          Return to Station Hub
        </Button>
      </main>

      <BottomNav />
    </div>
  );
}
