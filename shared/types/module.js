/**
 * @file module.js
 * @description AR-SAFE Industrial Drill Module definitions and metadata.
 * Strict JavaScript only - no TypeScript syntax.
 */

export const MODULE_CATEGORIES = {
  FIRE_SAFETY: 'FIRE_SAFETY',
  HAZARDOUS_ATMOSPHERE: 'HAZARDOUS_ATMOSPHERE',
  ELECTRICAL_SAFETY: 'ELECTRICAL_SAFETY',
  MECHANICAL_SAFETY: 'MECHANICAL_SAFETY',
};

export const MODULES = [
  {
    id: 'MOD-FIRE-01',
    code: 'FS-202',
    title: 'Fire & Explosion Response',
    category: MODULE_CATEGORIES.FIRE_SAFETY,
    categoryLabel: 'Thermal & Explosion',
    required: true,
    stepCount: 4,
    currentStep: 2,
    progressPercentage: 50,
    durationMinutes: 15,
    stationType: 'Conveyor Drive / ST-04',
    stationId: 'ARSAFE-CONVEYOR-001',
    description: 'Practical scenario training for volatile chemical fire detection on active drive lines, emergency shutdown, CO2 foam suppression, and safe egress protocol.',
    passingThreshold: 75,
    badgeText: 'Mandatory Today',
    tags: ['Class B Solvent', 'E-Stop Cutoff', 'PASS Extinguisher'],
    prerequisites: ['Basic PPE Verification', 'Station QR Scan'],
  },
  {
    id: 'MOD-GAS-02',
    code: 'HA-304',
    title: 'Gas Leak & Confined Space Safety',
    category: MODULE_CATEGORIES.HAZARDOUS_ATMOSPHERE,
    categoryLabel: 'Atmospheric Safety',
    required: true,
    stepCount: 4,
    currentStep: 1,
    progressPercentage: 25,
    durationMinutes: 20,
    stationType: 'Chamber / ST-09',
    stationId: 'ARSAFE-CHAMBER-009',
    description: 'Atmospheric hazard protocol drill addressing combustible vapor leaks, H2S toxicity threshold warnings, SCBA donning, forced ventilation, and confined space egress.',
    passingThreshold: 80,
    badgeText: 'OSHA 1910.146',
    tags: ['H2S Combustible Vapor', 'LEL > 40%', 'SCBA Egress'],
    prerequisites: ['Atmospheric Sensor Check', 'SCBA Seal Check'],
  },
  {
    id: 'MOD-LOTO-01',
    code: 'EL-108',
    title: 'Electrical Lockout / Tagout (LOTO)',
    category: MODULE_CATEGORIES.ELECTRICAL_SAFETY,
    categoryLabel: 'Electrical Hazard',
    required: false,
    stepCount: 3,
    currentStep: 3,
    progressPercentage: 100,
    durationMinutes: 12,
    stationType: 'Substation Bay 02',
    stationId: 'ARSAFE-ELEC-002',
    description: 'Isolation and zero-energy state verification procedures before mechanical maintenance operations.',
    passingThreshold: 85,
    badgeText: 'Cleared',
    tags: ['Padlock Placement', 'Zero Voltage Probe', 'Energy Isolation'],
    prerequisites: [],
  },
  {
    id: 'MOD-FALL-01',
    code: 'ME-401',
    title: 'High-Altitude Conveyor Inspection',
    category: MODULE_CATEGORIES.MECHANICAL_SAFETY,
    categoryLabel: 'Fall Protection',
    required: false,
    stepCount: 4,
    currentStep: 4,
    progressPercentage: 100,
    durationMinutes: 18,
    stationType: 'Overhead Gantry ST-12',
    stationId: 'ARSAFE-FALL-004',
    description: 'Harness anchoring, lifeline tension verification, and inspection of overhead material conveyance mechanisms.',
    passingThreshold: 80,
    badgeText: 'Cleared',
    tags: ['Dual Lanyard', 'Anchor Rigging', 'Edge Restraint'],
    prerequisites: [],
  },
];

export function isValidModule(mod) {
  return Boolean(
    mod &&
    typeof mod.id === 'string' &&
    typeof mod.title === 'string' &&
    typeof mod.durationMinutes === 'number'
  );
}
