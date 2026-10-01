/**
 * @file AssessmentResultsScreen.jsx
 * @description Assessment results screen matching Stitch evaluation exports.
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

export function AssessmentResultsScreen() {
  const { theme, currentResult, navigateTo } = useApp();
  const [expandedCategory, setExpandedCategory] = useState(null);

  const result = currentResult || {
    score: 80,
    passingScore: 75,
    workerName: 'Mark Daniels',
    workerId: 'WK-4092',
    bayName: 'Bay ST-04 (Conveyor 01)',
    moduleTitle: 'Fire & Explosion Emergency Response',
    categories: [
      { name: 'Hazard Identification', score: 100, max: 100, passed: true },
      { name: 'Equipment Target Lock', score: 100, max: 100, passed: true },
      { name: 'Suppression Procedure', score: 75, max: 100, passed: true },
      { name: 'Safe Egress Protocol', score: 100, max: 100, passed: true },
    ],
  };

  const isPassed = result.score >= result.passingScore;

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
      <Header title="Assessment Results" subtitle="Official Evaluation" showBack />

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
        {/* Top Celebration & Metadata Card */}
        <Card
          level={1}
          style={{
            backgroundColor: `${theme.tertiary}12`,
            border: `1.5px solid ${theme.tertiary}40`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                <StatusBadge variant="pass" label="Official Evaluation" icon="verified" size="sm" />
              </div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: theme.onSurface,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                }}
              >
                TRAINING COMPLETED
              </h2>
              <span style={{ fontSize: 13, color: theme.onSurfaceVariant, marginTop: 2 }}>
                {result.moduleTitle}
              </span>
            </div>

            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                backgroundColor: theme.surfaceLowest,
                color: theme.tertiary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                flexShrink: 0,
              }}
            >
              <Icon name="celebration" size={24} fill />
            </div>
          </div>

          {/* Worker Capsule Meta */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 8,
              padding: 10,
              borderRadius: 10,
              backgroundColor: theme.surfaceLowest,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 10, color: theme.onSurfaceVariant, textTransform: 'uppercase' }}>Assigned Worker</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: theme.onSurface, marginTop: 2 }}>
                {result.workerName} ({result.workerId})
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 10, color: theme.onSurfaceVariant, textTransform: 'uppercase' }}>Training Station</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: theme.onSurface, marginTop: 2 }}>
                {result.bayName}
              </span>
            </div>
          </div>
        </Card>

        {/* Primary Deterministic Scoring Hero Card */}
        <Card level={1}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10, borderBottom: `1px solid ${theme.outlineVariant}30` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="fact_check" size={20} color={theme.primary} />
              <span style={{ fontSize: 12, fontWeight: 700, color: theme.onSurface, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Deterministic Scoring Engine
              </span>
            </div>
            <StatusBadge variant={isPassed ? 'pass' : 'error'} label={isPassed ? 'PASSED' : 'RETRY REQUIRED'} />
          </div>

          {/* Big Score Layout with Radial Visualization */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 44,
                    fontWeight: 800,
                    color: theme.onSurface,
                  }}
                >
                  {result.score}
                </span>
                <span style={{ fontSize: 20, fontWeight: 700, color: theme.onSurfaceVariant }}>/ 100</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: theme.tertiary, marginTop: 2 }}>
                <Icon name="task_alt" size={16} color={theme.tertiary} />
                <span style={{ fontSize: 13, fontWeight: 700 }}>
                  Exceeds {result.passingScore}% Passing Threshold
                </span>
              </div>
            </div>

            {/* Radial score ring */}
            <div
              style={{
                position: 'relative',
                width: 76,
                height: 76,
                borderRadius: '50%',
                backgroundColor: theme.surfaceContainerHigh,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: `4px solid ${theme.tertiary}`,
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 800, color: theme.onSurface }}>{result.score}%</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: theme.onSurfaceVariant }}>SCORE</span>
            </div>
          </div>

          {/* Zero-AI Rule Stamp */}
          <div
            style={{
              padding: '10px 12px',
              borderRadius: 10,
              backgroundColor: theme.surfaceContainer,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
              fontSize: 11,
              color: theme.onSurfaceVariant,
              lineHeight: '16px',
            }}
          >
            <Icon name="gavel" size={18} color={theme.primary} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 700, color: theme.onSurface }}>
                Deterministic Rule-Based Evaluation
              </span>
              <span>Strict logic verification derived from optical switch telemetry and reticle bounding timers. Zero probabilistic AI inference.</span>
            </div>
          </div>
        </Card>

        {/* Objective Breakdown List */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: theme.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Practical Competency Criteria
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {result.categories.map((cat, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: 12,
                  backgroundColor: theme.surfaceContainer,
                  border: `1px solid ${theme.outlineVariant}30`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon name="check_circle" size={18} color={theme.tertiary} fill />
                  <span style={{ fontSize: 13, fontWeight: 600, color: theme.onSurface }}>
                    {cat.name}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: cat.score >= 80 ? theme.tertiary : theme.secondary }}>
                    {cat.score}%
                  </span>
                  <StatusBadge variant="pass" label="CLEARED" size="sm" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
          <Button
            onClick={() => navigateTo('certificate', { result })}
            variant="primary"
            fullWidth
            icon="workspace_premium"
            style={{ height: 52 }}
          >
            View Digital Safety Certificate
          </Button>

          <Button
            onClick={() => navigateTo('offline_sync')}
            variant="secondary"
            fullWidth
            icon="sync"
          >
            Save to Local SQLite & Sync
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
