/**
 * @file training-result.js
 * @description AR-SAFE Deterministic Assessment Results shared contract.
 * Strict JavaScript only - no TypeScript syntax.
 */

export const RESULT_STATUS = {
  PASSED: 'PASSED',
  FAILED: 'FAILED',
  INCOMPLETE: 'INCOMPLETE',
};

export const SYNC_STATUS = {
  QUEUED: 'QUEUED',
  SYNCING: 'SYNCING',
  SYNCED: 'SYNCED',
};

/**
 * Creates a deterministic evaluation record
 * @param {Object} params
 */
export function createTrainingResult({
  workerId = 'WK-4092',
  workerName = 'Mark Daniels',
  moduleId = 'MOD-FIRE-01',
  moduleTitle = 'Fire & Explosion Response',
  stationId = 'ARSAFE-CONVEYOR-001',
  bayName = 'Bay ST-04 (Conveyor 01)',
  score = 80,
  passingScore = 75,
  categories = [
    { name: 'Hazard Identification', score: 100, max: 100, passed: true },
    { name: 'Equipment Target Lock', score: 100, max: 100, passed: true },
    { name: 'Tactical Decision Procedure', score: 75, max: 100, passed: true },
    { name: 'Safe Egress Protocol', score: 100, max: 100, passed: true },
  ],
  durationSeconds = 144,
}) {
  const passed = score >= passingScore;
  const timestamp = new Date().toISOString();
  const id = 'RES-' + Date.now().toString(36).toUpperCase();

  return {
    id,
    workerId,
    workerName,
    moduleId,
    moduleTitle,
    stationId,
    bayName,
    score,
    passingScore,
    status: passed ? RESULT_STATUS.PASSED : RESULT_STATUS.FAILED,
    categories,
    durationSeconds,
    timestamp,
    syncStatus: SYNC_STATUS.QUEUED,
    cryptoHash: 'sha256:' + Math.random().toString(36).substring(2, 15),
  };
}

export const SAMPLE_RESULT_FIRE = {
  id: 'RES-FS-2026-081',
  workerId: 'WK-4092',
  workerName: 'Mark Daniels',
  moduleId: 'MOD-FIRE-01',
  moduleTitle: 'Fire & Explosion Response',
  stationId: 'ARSAFE-CONVEYOR-001',
  bayName: 'Bay ST-04 (Conveyor 01)',
  score: 80,
  passingScore: 75,
  status: RESULT_STATUS.PASSED,
  categories: [
    { name: 'Hazard Identification', score: 100, max: 100, passed: true },
    { name: 'Equipment Target Lock', score: 100, max: 100, passed: true },
    { name: 'Suppression Procedure', score: 75, max: 100, passed: true },
    { name: 'Evacuation Protocol', score: 100, max: 100, passed: true },
  ],
  durationSeconds: 144,
  timestamp: '2026-09-23T10:14:00Z',
  syncStatus: SYNC_STATUS.SYNCED,
  cryptoHash: 'sha256:d834a9b2ef10c78a01',
};
