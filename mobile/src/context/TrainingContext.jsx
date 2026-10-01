/**
 * @file TrainingContext.jsx
 * @description Context provider for active AR scenario drill session.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SCENARIOS } from '../data/mockData.js';
import { createTrainingResult } from '@shared/types/training-result.js';
import { useApp } from './AppContext.jsx';

const TrainingContext = createContext(null);

export function TrainingProvider({ children }) {
  const { selectedModule, selectedStation, navigateTo } = useApp();

  // Active scenario definition
  const scenarioKey = selectedModule?.id || 'MOD-FIRE-01';
  const scenario = SCENARIOS[scenarioKey] || SCENARIOS['MOD-FIRE-01'];

  // Current drill step (0: Hazard, 1: Equipment, 2: Egress, 3: Tactical decision)
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Drill clock countdown
  const [timeRemaining, setTimeRemaining] = useState(scenario.initialTimeRemainingSeconds || 900);
  const [isDrillActive, setIsDrillActive] = useState(false);

  // Target lock telemetry
  const [lockedTarget, setLockedTarget] = useState('elem-1');
  const [isLocked, setIsLocked] = useState(true);
  const [reticleDistance, setReticleDistance] = useState('3.4M');
  const [hazardTemp, setHazardTemp] = useState('382°C');

  // Flashlight and audio toggles
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [isAudioPromptOn, setIsAudioPromptOn] = useState(true);

  // User decisions
  const [completedSteps, setCompletedSteps] = useState([]);
  const [selectedDecision, setSelectedDecision] = useState(null);
  const [decisionFeedback, setDecisionFeedback] = useState(null);

  // Reset drill state when module changes
  useEffect(() => {
    resetDrill();
  }, [selectedModule?.id]);

  // Drill clock ticker
  useEffect(() => {
    let interval = null;
    if (isDrillActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDrillActive, timeRemaining]);

  function startDrill() {
    setIsDrillActive(true);
    setCurrentStepIndex(0);
    setCompletedSteps([]);
    setSelectedDecision(null);
    setDecisionFeedback(null);
  }

  function resetDrill() {
    setIsDrillActive(false);
    setCurrentStepIndex(0);
    setTimeRemaining(scenario.initialTimeRemainingSeconds || 900);
    setCompletedSteps([]);
    setSelectedDecision(null);
    setDecisionFeedback(null);
    setLockedTarget('elem-1');
    setIsLocked(true);
  }

  function advanceStep() {
    if (currentStepIndex < scenario.steps.length - 1) {
      setCompletedSteps(prev => [...prev, currentStepIndex]);
      setCurrentStepIndex(prev => prev + 1);

      // Update target lock based on next step
      if (currentStepIndex === 0) {
        setLockedTarget('elem-3'); // Extinguisher
        setReticleDistance('2.2M');
      } else if (currentStepIndex === 1) {
        setLockedTarget('elem-4'); // Exit
        setReticleDistance('4.5M');
      }
    } else {
      finishDrill();
    }
  }

  function submitDecision(optionId) {
    setSelectedDecision(optionId);
    const step4 = scenario.steps[3];
    const option = step4?.options?.find(o => o.id === optionId);

    if (option) {
      setDecisionFeedback({
        isCorrect: option.correct,
        points: option.points,
        reason: option.penaltyReason || 'Correct action executed according to OSHA protocol.',
      });
    }

    setTimeout(() => {
      finishDrill();
    }, 1200);
  }

  function finishDrill() {
    setIsDrillActive(false);

    // Compute deterministic score
    const isFire = selectedModule.id === 'MOD-FIRE-01';
    const score = isFire ? 80 : 95;

    const result = createTrainingResult({
      moduleId: selectedModule.id,
      moduleTitle: selectedModule.title,
      stationId: selectedStation.id,
      bayName: `${selectedStation.bayId} (${selectedStation.name})`,
      score,
      passingScore: selectedModule.passingThreshold || 75,
      categories: isFire
        ? [
            { name: 'Hazard Identification', score: 100, max: 100, passed: true },
            { name: 'Equipment Target Lock', score: 100, max: 100, passed: true },
            { name: 'Suppression Procedure', score: 75, max: 100, passed: true },
            { name: 'Evacuation Protocol', score: 100, max: 100, passed: true },
          ]
        : [
            { name: 'Atmospheric Vapor Recognition', score: 100, max: 100, passed: true },
            { name: 'SCBA Respirator Donning', score: 100, max: 100, passed: true },
            { name: 'Forced Ventilation Engagement', score: 100, max: 100, passed: true },
            { name: 'Refuge Egress Route', score: 80, max: 100, passed: true },
          ],
      durationSeconds: (scenario.initialTimeRemainingSeconds || 900) - timeRemaining,
    });

    navigateTo('assessment_results', { result });
  }

  const value = {
    scenario,
    currentStepIndex,
    currentStep: scenario.steps[currentStepIndex] || scenario.steps[0],
    timeRemaining,
    isDrillActive,
    startDrill,
    resetDrill,
    advanceStep,
    lockedTarget,
    isLocked,
    reticleDistance,
    hazardTemp,
    isTorchOn,
    setIsTorchOn,
    isAudioPromptOn,
    setIsAudioPromptOn,
    completedSteps,
    selectedDecision,
    decisionFeedback,
    submitDecision,
    finishDrill,
  };

  return (
    <TrainingContext.Provider value={value}>
      {children}
    </TrainingContext.Provider>
  );
}

export function useTraining() {
  const context = useContext(TrainingContext);
  if (!context) {
    throw new Error('useTraining must be used within a TrainingProvider');
  }
  return context;
}
