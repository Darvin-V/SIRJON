/**
 * @file ARLiveDrillScreen.jsx
 * @description Live AR drill scenario incorporating all Batch 2 Stitch AR live screens.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { useTraining } from '../../context/TrainingContext.jsx';
import { ARViewContainer } from '../../components/ar/ARViewContainer.jsx';
import { Reticle } from '../../components/ar/Reticle.jsx';
import { HazardIndicator } from '../../components/ar/HazardIndicator.jsx';
import { DangerZoneDecal } from '../../components/ar/DangerZoneDecal.jsx';
import { Button } from '../../components/common/Button.jsx';
import { Card } from '../../components/common/Card.jsx';
import { Icon } from '../../components/common/Icon.jsx';

export function ARLiveDrillScreen() {
  const { selectedModule, selectedStation } = useApp();
  const {
    currentStepIndex,
    currentStep,
    advanceStep,
    reticleDistance,
    hazardTemp,
    isLocked,
    submitDecision,
    selectedDecision,
    decisionFeedback,
  } = useTraining();

  const isFire = selectedModule.id === 'MOD-FIRE-01';

  // Determine HUD labels based on current step
  const stepTarget = {
    0: {
      label: isFire ? 'CONV-MOTOR-4B' : 'ATMOS-SENSOR-09',
      warning: isFire ? 'VAPOR IGNITION' : 'H2S GAS DETECTED',
      distance: '3.4M',
      status: 'HAZARD LOCKED',
      banner: isFire ? 'HAZARD IDENTIFIED • CLASS B FLAMMABLE SOLVENT' : 'HAZARD IDENTIFIED • H2S COMBUSTIBLE VAPOR',
      directiveTitle: 'Identify the Nearest Safe Action',
      directiveBody: isFire
        ? 'Volatile chemical fire detected on active drive line. Do not attempt direct liquid suppression. Locate suppression station or trip emergency cut-off.'
        : 'Toxic gas leak in confined chamber. Verify atmospheric reading exceeds 40% LEL and locate protective SCBA gear.',
    },
    1: {
      label: isFire ? 'EXTINGUISHER-RIG-04' : 'SCBA-HARNESS-STATION',
      warning: isFire ? 'EQUIPMENT LOCKED' : 'PPE STATION LOCKED',
      distance: '2.2M',
      status: 'VERIFIED',
      banner: isFire ? 'EQUIPMENT IDENTIFIED • 10KG CO2 / DRY CHEM RIG' : 'EQUIPMENT IDENTIFIED • POSITIVE PRESSURE SCBA',
      directiveTitle: isFire ? 'Verify Extinguisher Type & PASS Readiness' : 'Verify SCBA Cylinder Pressure & Seal',
      directiveBody: isFire
        ? 'Target verified: Class B CO2 Extinguisher. Minimum safe standoff 2.0m. Ensure pressure gauge is in the green arc.'
        : 'Target verified: Positive-pressure SCBA respirator. Verify cylinder gauge indicates 300 bar.',
    },
    2: {
      label: isFire ? 'EMERGENCY-EXIT-NORTH' : 'VENTILATION-CUTOFF-SWITCH',
      warning: isFire ? 'EGRESS VECTOR' : 'VENTILATION SWITCH',
      distance: '4.5M',
      status: 'EGRESS CLEAR',
      banner: isFire ? 'SAFE EGRESS VECTOR IDENTIFIED • PATH CLEAR' : 'EXHAUST VENTILATION CONTROL LOCKED',
      directiveTitle: isFire ? 'Confirm Evacuation Corridor' : 'Engage Forced Ventilation Protocol',
      directiveBody: isFire
        ? 'Emergency exit corridor confirmed unobstructed. Sound local horn and proceed toward assembly point if fire escalates.'
        : 'Atmospheric purge control located. Engage explosion-proof ventilation fan to evacuate volatile vapors.',
    },
    3: {
      label: isFire ? 'E-STOP-CONSOLE-04' : 'EVACUATION-HATCH',
      warning: 'TACTICAL RESPONSE',
      distance: '1.2M',
      status: 'DECISION PENDING',
      banner: 'TACTICAL ACTION REQUIRED • OSHA 1910 PROTOCOL',
      directiveTitle: 'Select Primary Operational Action',
      directiveBody: 'Select the immediate critical response for this industrial emergency scenario.',
    },
  }[currentStepIndex] || {};

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#090d16',
        color: '#f8fafc',
        paddingBottom: 24,
      }}
    >
      {/* Upper Section: AR Viewport & Live Plant Scene Container */}
      <ARViewContainer statusBannerText={stepTarget.banner}>
        {/* Ground level safety perimeter ring */}
        <DangerZoneDecal
          label={isFire ? '2.5M HAZARD ZONE' : '3.0M EXCLUSION ZONE'}
          color={isFire ? '#ba1a1a' : '#fea619'}
        />

        {/* In-world virtual hazard overlay */}
        <HazardIndicator type={isFire ? 'fire' : 'gas'} />

        {/* Centered AR Reticle Target Box */}
        <Reticle
          targetLabel={stepTarget.label}
          statusText={stepTarget.status}
          distance={stepTarget.distance}
          temperature={currentStepIndex === 0 ? hazardTemp : null}
          warningTitle={stepTarget.warning}
          isLocked={isLocked}
        />
      </ARViewContainer>

      {/* Lower Interactive Tactical Response Drawer (Ergonomic Thumb Reach Zone) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          padding: '16px',
          maxWidth: 600,
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Active Directive Banner */}
        <div
          style={{
            backgroundColor: '#162032',
            borderRadius: 14,
            padding: 14,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="assignment" size={18} color="#38bdf8" />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Standard Operating Procedure
              </span>
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: 999,
                backgroundColor: '#fea619',
                color: '#000000',
                textTransform: 'uppercase',
              }}
            >
              Step {currentStepIndex + 1} of 4
            </span>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f8fafc' }}>
            {stepTarget.directiveTitle}
          </h3>
          <p style={{ fontSize: 12, color: '#94a3b8', lineHeight: '18px' }}>
            {stepTarget.directiveBody}
          </p>
        </div>

        {/* Steps 1, 2, 3: Next target verification action */}
        {currentStepIndex < 3 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Button
              onClick={advanceStep}
              variant="primary"
              fullWidth
              icon="verified"
              style={{ height: 52 }}
            >
              Confirm Target Lock & Proceed
            </Button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 11, color: '#64748b' }}>
              <Icon name="info" size={14} />
              <span>Camera reticle locks onto physical elements in the field</span>
            </div>
          </div>
        ) : (
          /* Step 4: Tactical Decision Action Grid (Min 48px touch targets for gloved fingers) */
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {decisionFeedback && (
              <div
                style={{
                  padding: 12,
                  borderRadius: 10,
                  backgroundColor: decisionFeedback.isCorrect ? 'rgba(6, 78, 59, 0.9)' : 'rgba(127, 29, 29, 0.9)',
                  color: decisionFeedback.isCorrect ? '#6ee7b7' : '#fca5a5',
                  fontSize: 12,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <Icon name={decisionFeedback.isCorrect ? 'check_circle' : 'error'} size={20} />
                <span>{decisionFeedback.reason}</span>
              </div>
            )}

            {/* Tactical Options */}
            <button
              type="button"
              onClick={() => submitDecision('opt-estop')}
              disabled={Boolean(selectedDecision)}
              style={{
                width: '100%',
                backgroundColor: '#ba1a1a',
                color: '#ffffff',
                padding: 14,
                borderRadius: 12,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(186, 26, 26, 0.4)',
                cursor: 'pointer',
                textAlign: 'left',
                opacity: selectedDecision && selectedDecision !== 'opt-estop' ? 0.4 : 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="pan_tool" size={26} color="#ffffff" fill />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 14, fontWeight: 800, textTransform: 'uppercase' }}>
                    Trip Emergency E-Stop #04
                  </span>
                  <span style={{ fontSize: 11, opacity: 0.85 }}>
                    Cut conveyor electrical power immediately (Safety Rail 1.2m left)
                  </span>
                </div>
              </div>
              <Icon name="chevron_right" size={22} color="#ffffff" />
            </button>

            <button
              type="button"
              onClick={() => submitDecision('opt-water')}
              disabled={Boolean(selectedDecision)}
              style={{
                width: '100%',
                backgroundColor: '#1e293b',
                color: '#f8fafc',
                padding: 14,
                borderRadius: 12,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                textAlign: 'left',
                opacity: selectedDecision && selectedDecision !== 'opt-water' ? 0.4 : 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="local_fire_department" size={24} color="#fea619" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 14, fontWeight: 700 }}>
                    Attempt Direct Liquid Water Suppression
                  </span>
                  <span style={{ fontSize: 11, color: '#94a3b8' }}>
                    Apply plant washdown water hose to motor bay
                  </span>
                </div>
              </div>
              <Icon name="chevron_right" size={20} color="#94a3b8" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
