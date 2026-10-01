/**
 * @file ModulesListScreen.jsx
 * @description Training Modules catalog from Stitch ar_safe_training_modules.
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
import { MODULES } from '../../data/mockData.js';

export function ModulesListScreen() {
  const { theme, navigateTo, setSelectedModuleId } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'required' | 'progress' | 'cleared'
  const [isAudioOn, setIsAudioOn] = useState(true);

  const filteredModules = MODULES.filter(mod => {
    const matchesSearch = mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.stationType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (activeFilter === 'required') return mod.required;
    if (activeFilter === 'progress') return mod.progressPercentage > 0 && mod.progressPercentage < 100;
    if (activeFilter === 'cleared') return mod.progressPercentage === 100;
    return true;
  });

  function selectModule(moduleId) {
    setSelectedModuleId(moduleId);
    navigateTo('module_details', { moduleId });
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
      <Header title="Training Modules" subtitle="Field Preparedness" />

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
        {/* Top Hero & Audio Toggle */}
        <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, color: theme.primary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Field Preparedness
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: theme.onSurface,
              }}
            >
              Interactive Drill Modules
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsAudioOn(prev => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              height: 36,
              padding: '0 12px',
              borderRadius: 999,
              backgroundColor: theme.surfaceContainerHigh,
              border: `1px solid ${theme.outlineVariant}40`,
              color: isAudioOn ? theme.primary : theme.onSurfaceVariant,
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Icon name={isAudioOn ? 'spatial_audio' : 'volume_off'} size={18} fill={isAudioOn} />
            <span>{isAudioOn ? 'AR Audio On' : 'Muted'}</span>
          </button>
        </section>

        {/* Quick Stats Bento Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          <div style={{ padding: 12, borderRadius: 12, backgroundColor: theme.surfaceContainer, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>Mandatory</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: theme.onSurface }}>1</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: theme.secondary }}>Active</span>
            </div>
          </div>
          <div style={{ padding: 12, borderRadius: 12, backgroundColor: theme.surfaceContainer, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>Available</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: theme.onSurface }}>4</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: theme.primary }}>In Bay</span>
            </div>
          </div>
          <div style={{ padding: 12, borderRadius: 12, backgroundColor: theme.surfaceContainer, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>Cleared</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: theme.tertiary }}>8</span>
              <span style={{ fontSize: 11, color: theme.tertiary }}>98% Avg</span>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Filter by station, hazard, or protocol..."
            style={{
              width: '100%',
              height: 48,
              paddingLeft: 44,
              paddingRight: 16,
              borderRadius: 12,
              backgroundColor: theme.surfaceContainer,
              border: `1px solid ${theme.outlineVariant}40`,
              color: theme.onSurface,
              fontSize: 14,
              outline: 'none',
              fontFamily: "'Inter', sans-serif",
            }}
          />
          <div style={{ position: 'absolute', left: 14, top: 14, color: theme.outline, pointerEvents: 'none' }}>
            <Icon name="search" size={20} />
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
          {[
            { id: 'all', label: 'All Modules', count: MODULES.length },
            { id: 'required', label: 'Required', count: 2 },
            { id: 'progress', label: 'In Progress', count: 2 },
            { id: 'cleared', label: 'Cleared', count: 2 },
          ].map(filter => {
            const isSelected = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  height: 36,
                  padding: '0 14px',
                  borderRadius: 999,
                  border: 'none',
                  backgroundColor: isSelected ? theme.primary : theme.surfaceContainerHigh,
                  color: isSelected ? theme.onPrimary : theme.onSurfaceVariant,
                  fontSize: 12,
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.15s ease',
                }}
              >
                <span>{filter.label}</span>
                <span
                  style={{
                    fontSize: 10,
                    padding: '1px 6px',
                    borderRadius: 999,
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.25)' : theme.surfaceContainerHighest,
                    color: isSelected ? '#ffffff' : theme.onSurfaceVariant,
                  }}
                >
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Modules List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {filteredModules.map(mod => {
            const isRequired = mod.required;
            return (
              <div
                key={mod.id}
                onClick={() => selectModule(mod.id)}
                style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  backgroundColor: theme.surfaceContainer,
                  border: `1px solid ${theme.outlineVariant}50`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.15s ease',
                }}
              >
                {/* Accent top stripe */}
                <div
                  style={{
                    height: 5,
                    width: '100%',
                    backgroundColor: isRequired ? theme.secondary : theme.tertiary,
                  }}
                />

                <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          backgroundColor: isRequired ? `${theme.secondary}20` : `${theme.tertiary}20`,
                          color: isRequired ? theme.secondary : theme.tertiary,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon
                          name={mod.id === 'MOD-FIRE-01' ? 'local_fire_department' : mod.id === 'MOD-GAS-02' ? 'air' : 'engineering'}
                          size={28}
                          fill={isRequired}
                        />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                          <StatusBadge
                            variant={isRequired ? 'warning' : 'pass'}
                            label={isRequired ? `Required • Step ${mod.currentStep}/${mod.stepCount}` : 'Cleared'}
                            size="sm"
                          />
                          <span style={{ fontSize: 11, color: theme.onSurfaceVariant }}>{mod.code}</span>
                        </div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: theme.onSurface }}>
                          {mod.title}
                        </h3>
                      </div>
                    </div>

                    {/* Progress percentage indicator */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: isRequired ? theme.secondary : theme.tertiary }}>
                        {mod.progressPercentage}%
                      </span>
                      <span style={{ fontSize: 9, color: theme.onSurfaceVariant }}>PROGRESS</span>
                    </div>
                  </div>

                  <p style={{ fontSize: 12, color: theme.onSurfaceVariant, lineHeight: '18px' }}>
                    {mod.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${theme.outlineVariant}25`, paddingTop: 10, fontSize: 11, color: theme.onSurfaceVariant }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Icon name="location_on" size={14} color={theme.primary} />
                      {mod.stationType}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Icon name="schedule" size={14} />
                      {mod.durationMinutes} mins
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 2, color: theme.primary, fontWeight: 700 }}>
                      Enter Drill <Icon name="arrow_forward" size={14} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
