/**
 * @file scenario.js
 * @description AR-SAFE AR Scenario state, rules, and interaction contract.
 * Strict JavaScript only - no TypeScript syntax.
 */

export const SCENARIO_STAGES = {
  STATION_SCAN: 'STATION_SCAN',
  TRACKING_CALIBRATION: 'TRACKING_CALIBRATION',
  HAZARD_IDENTIFIED: 'HAZARD_IDENTIFIED',
  EQUIPMENT_LOCK: 'EQUIPMENT_LOCK',
  EGRESS_IDENTIFIED: 'EGRESS_IDENTIFIED',
  DECISION_SELECTION: 'DECISION_SELECTION',
  EVALUATION_COMPLETE: 'EVALUATION_COMPLETE',
};

export const SCENARIOS = {
  'MOD-FIRE-01': {
    id: 'SCEN-FIRE-01',
    moduleId: 'MOD-FIRE-01',
    title: 'Conveyor Drive Motor Solvent Fire',
    initialTimeRemainingSeconds: 900, // 15 mins
    dangerZoneRadiusMeters: 2.5,
    steps: [
      {
        stepNumber: 1,
        title: 'Identify Hazard Source',
        directive: 'Locate thermal plume and solvent fire on Conveyor Drive Motor 4B.',
        expectedTargetId: 'elem-1',
        timeLimitSeconds: 60,
        points: 25,
      },
      {
        stepNumber: 2,
        title: 'Locate Suppression Equipment',
        directive: 'Find and lock onto the nearest Class B CO2 Fire Extinguisher.',
        expectedTargetId: 'elem-3',
        timeLimitSeconds: 60,
        points: 25,
      },
      {
        stepNumber: 3,
        title: 'Emergency Egress Vector',
        directive: 'Identify unblocked emergency egress doorway and maintain 2.5m standoff.',
        expectedTargetId: 'elem-4',
        timeLimitSeconds: 60,
        points: 25,
      },
      {
        stepNumber: 4,
        title: 'Tactical Decision',
        directive: 'Select immediate SOP response according to OSHA 1910 standards.',
        options: [
          { id: 'opt-estop', label: 'Trip Emergency E-Stop #04 to halt conveyor momentum', correct: true, points: 25 },
          { id: 'opt-water', label: 'Apply water hose directly to solvent fire', correct: false, points: 0, penaltyReason: 'Water spreads volatile hydrocarbon fires' },
          { id: 'opt-ignore', label: 'Continue operations and report at shift change', correct: false, points: 0, penaltyReason: 'Immediate flashover danger' },
        ],
      },
    ],
    deterministicRuleSet: 'ARSAFE-RULE-FIRE-V1',
  },
  'MOD-GAS-02': {
    id: 'SCEN-GAS-02',
    moduleId: 'MOD-GAS-02',
    title: 'Confined Space Chamber H2S Vapor Leak',
    initialTimeRemainingSeconds: 1200, // 20 mins
    dangerZoneRadiusMeters: 3.0,
    steps: [
      {
        stepNumber: 1,
        title: 'Atmospheric Gas Leak Detection',
        directive: 'Recognize combustible vapor concentration (LEL > 40%) in Chamber 09.',
        expectedTargetId: 'elem-c4',
        timeLimitSeconds: 60,
        points: 25,
      },
      {
        stepNumber: 2,
        title: 'Breathing PPE Protocol',
        directive: 'Locate and verify SCBA positive-pressure respirator harness.',
        expectedTargetId: 'elem-c2',
        timeLimitSeconds: 60,
        points: 25,
      },
      {
        stepNumber: 3,
        title: 'Exhaust Ventilation Activation',
        directive: 'Engage explosion-proof forced ventilation system switch.',
        expectedTargetId: 'elem-c3',
        timeLimitSeconds: 60,
        points: 25,
      },
      {
        stepNumber: 4,
        title: 'Safe Evacuation',
        directive: 'Follow marked green emergency escape route to fresh air refuge bay.',
        expectedTargetId: 'elem-c1',
        timeLimitSeconds: 60,
        points: 25,
      },
    ],
    deterministicRuleSet: 'ARSAFE-RULE-GAS-V1',
  },
};
