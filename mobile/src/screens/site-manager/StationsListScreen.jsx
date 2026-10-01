/**
 * @file StationsListScreen.jsx
 * @description Site Manager Training Stations catalog from Stitch site_manager_training_stations.
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

export function StationsListScreen() {
  const { theme, navigateTo, setSelectedStationId } = useApp();
  const [selectedSector, setSelectedSector] = useState('all');

  function openStationConfig(stationId) {
    setSelectedStationId(stationId);
    navigateTo('hazard_config', { stationId });
  }

  function openStationAnchoring(stationId) {
    setSelectedStationId(stationId);
    navigateTo('station_anchoring', { stationId });
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
      <Header title="Training Stations" subtitle="Site Manager Station Hub" />

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
        {/* Site Header Bento Card */}
        <Card
          level={1}
          style={{
            backgroundColor: `${theme.secondary}12`,
            border: `1.5px solid ${theme.secondary}35`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, color: theme.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Facility Spatial Registry
              </span>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: theme.onSurface,
                  marginTop: 2,
                }}
              >
                Sector 4 Processing Plant
              </h2>
            </div>
            <StatusBadge variant="info" label="Manager Mode" />
          </div>

          <p style={{ fontSize: 13, color: theme.onSurfaceVariant, lineHeight: '18px' }}>
            Configure real equipment anchors, calibrate optical QR reference markers, and place virtual hazards for worker drills.
          </p>

          <div style={{ display: 'flex', gap: 16, marginTop: 12, fontSize: 12, color: theme.onSurfaceVariant }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="pin_drop" size={15} color={theme.primary} />
              2 Active Stations
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: theme.tertiary, fontWeight: 600 }}>
              <Icon name="sensors" size={15} color={theme.tertiary} />
              6DoF Anchors Synced
            </span>
          </div>
        </Card>

        {/* Stations Inventory */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Configured Training Stations
            </span>
            <Button
              onClick={() => navigateTo('manager_sync')}
              variant="secondary"
              size="md"
              icon="cloud_sync"
            >
              Sync Configs
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {STATIONS.map(station => (
              <Card key={station.id} level={1} style={{ padding: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          backgroundColor: `${theme.primary}18`,
                          color: theme.primary,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon name="precision_manufacturing" size={24} fill />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: theme.primary }}>
                            {station.bayId}
                          </span>
                          <span style={{ fontSize: 10, color: theme.onSurfaceVariant, fontFamily: 'monospace' }}>
                            {station.id}
                          </span>
                        </div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: theme.onSurface }}>
                          {station.name}
                        </h3>
                      </div>
                    </div>
                    <StatusBadge variant="pass" label="Mesh Locked" size="sm" />
                  </div>

                  {/* Telemetry metadata */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderRadius: 8, backgroundColor: theme.surfaceLow, fontSize: 12, color: theme.onSurfaceVariant }}>
                    <span>Anchors: <strong>{station.physicalElements.length} physical</strong></span>
                    <span>Confidence: <strong style={{ color: theme.tertiary }}>{Math.round(station.trackingConfidence * 100)}%</strong></span>
                    <span>Module: <strong style={{ color: theme.onSurface }}>{station.moduleTitle.split(' ')[0]}</strong></span>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                    <Button
                      onClick={() => openStationConfig(station.id)}
                      variant="primary"
                      fullWidth
                      size="md"
                      icon="tune"
                    >
                      Configure Hazards
                    </Button>
                    <Button
                      onClick={() => openStationAnchoring(station.id)}
                      variant="secondary"
                      size="md"
                      icon="view_in_ar"
                    >
                      Anchors
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
