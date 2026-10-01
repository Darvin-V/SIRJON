/**
 * @file HazardConfigScreen.jsx
 * @description Site Manager Hazard Configuration screen matching configure_hazards_instructions.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { Header } from '../../components/common/Header.jsx';
import { BottomNav } from '../../components/common/BottomNav.jsx';
import { Card } from '../../components/common/Card.jsx';
import { Button } from '../../components/common/Button.jsx';
import { Icon } from '../../components/common/Icon.jsx';

export function HazardConfigScreen() {
  const { theme, selectedStation, navigateTo } = useApp();
  const [selectedElements, setSelectedElements] = useState(['elem-1', 'elem-2', 'elem-3', 'elem-4']);
  const [flameIntensity, setFlameIntensity] = useState(85);
  const [standoffRadius, setStandoffRadius] = useState(2.5);

  function toggleElement(id) {
    setSelectedElements(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
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
      <Header title="Hazard Configuration" subtitle="Zone Config / SQLite • Step 2 of 4" showBack />

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
        {/* Step Progress Tracker */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase' }}>
            <span>Step 2 of 4 • Element & Hazard Setup</span>
            <span style={{ color: theme.primary }}>50% Complete</span>
          </div>
          <div style={{ width: '100%', height: 6, borderRadius: 999, backgroundColor: theme.surfaceContainerHighest, overflow: 'hidden' }}>
            <div style={{ width: '50%', height: '100%', backgroundColor: theme.primary }} />
          </div>
        </div>

        {/* Station Target Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 12,
            borderRadius: 12,
            backgroundColor: theme.surfaceContainerHigh,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="precision_manufacturing" size={22} color={theme.primary} fill />
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, color: theme.onSurface, display: 'block' }}>
                {selectedStation.name}
              </span>
              <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>
                {selectedStation.bayId} • Spatial Mesh Ready
              </span>
            </div>
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999, backgroundColor: theme.surfaceLowest, color: theme.tertiary }}>
            Anchors Locked
          </span>
        </div>

        {/* SECTION 1: Select Relevant Physical Elements */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 16, borderRadius: 4, backgroundColor: theme.primary }} />
              <h3 style={{ fontSize: 16, fontWeight: 700, color: theme.onSurface }}>
                1. Select Relevant Physical Elements
              </h3>
            </div>
            <p style={{ fontSize: 12, color: theme.onSurfaceVariant, marginTop: 4 }}>
              Select physical equipment in the station view that workers will interact with or identify during drills.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {selectedStation.physicalElements.map(elem => {
              const isSelected = selectedElements.includes(elem.id);
              return (
                <div
                  key={elem.id}
                  onClick={() => toggleElement(elem.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 12,
                    borderRadius: 12,
                    backgroundColor: isSelected ? `${theme.primary}12` : theme.surfaceLow,
                    border: `1.5px solid ${isSelected ? theme.primary : theme.outlineVariant + '30'}`,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        backgroundColor: isSelected ? theme.primary : theme.surfaceContainer,
                        color: isSelected ? theme.onPrimary : theme.onSurfaceVariant,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon name={isSelected ? 'check' : 'radio_button_unchecked'} size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: theme.onSurface, display: 'block' }}>
                        {elem.name}
                      </span>
                      <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>
                        {elem.type} • {elem.anchor}
                      </span>
                    </div>
                  </div>
                  <Icon name="view_in_ar" size={20} color={theme.outline} />
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: Virtual AR Hazards Configuration */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 8, height: 16, borderRadius: 4, backgroundColor: theme.secondary }} />
            <h3 style={{ fontSize: 16, fontWeight: 700, color: theme.onSurface }}>
              2. Configure Virtual Hazards
            </h3>
          </div>

          <Card level={1} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Flame intensity slider */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                <span style={{ fontWeight: 600, color: theme.onSurface }}>Volumetric Flame Intensity</span>
                <span style={{ fontWeight: 700, color: theme.secondary }}>{flameIntensity}% (382°C)</span>
              </div>
              <input
                type="range"
                min="40"
                max="100"
                value={flameIntensity}
                onChange={e => setFlameIntensity(Number(e.target.value))}
                style={{ width: '100%', accentColor: theme.secondary }}
              />
            </div>

            {/* Standoff radius adjustment */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                <span style={{ fontWeight: 600, color: theme.onSurface }}>Floor Danger Zone Standoff</span>
                <span style={{ fontWeight: 700, color: theme.primary }}>{standoffRadius}m Radius</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[1.5, 2.0, 2.5, 3.0].map(r => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setStandoffRadius(r)}
                    style={{
                      flex: 1,
                      height: 38,
                      borderRadius: 8,
                      border: `1px solid ${standoffRadius === r ? theme.primary : theme.outlineVariant + '40'}`,
                      backgroundColor: standoffRadius === r ? theme.primary : theme.surfaceContainer,
                      color: standoffRadius === r ? theme.onPrimary : theme.onSurface,
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {r}m
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Action Button */}
        <Button
          onClick={() => navigateTo('ar_preview')}
          variant="primary"
          fullWidth
          icon="visibility"
          style={{ marginTop: 10 }}
        >
          Preview 6DoF AR Scene (Admin Mode)
        </Button>
      </main>

      <BottomNav />
    </div>
  );
}
