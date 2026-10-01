/**
 * @file certificate.js
 * @description AR-SAFE Digital Safety Certificate contract and verification helpers.
 * Strict JavaScript only - no TypeScript syntax.
 */

/**
 * Generates certificate metadata from a passing training result
 * @param {Object} result - TrainingResult object
 */
export function generateCertificate(result) {
  const year = new Date().getFullYear();
  const certCode = result.moduleId === 'MOD-FIRE-01' ? 'CFS' : 'GLC';
  const certId = `ARSAFE-${certCode}-${year}-00124`;

  return {
    id: certId,
    resultId: result.id,
    workerId: result.workerId,
    workerName: result.workerName,
    workerRole: 'Field Operator Level 2',
    moduleTitle: result.moduleTitle,
    facilityName: result.bayName || 'Sector 4 • Conveyor Safety Station 01',
    score: result.score,
    passingThreshold: result.passingScore || 75,
    issueDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    verificationQrPayload: `https://ar-safe.org/verify?cert=${certId}`,
    cryptoSeal: 'VALIDATED-LOCAL-CRYPTOPRINT-SHA256',
    supervisor: 'Sarah Chen (MGR-1044)',
    status: 'ACTIVE_COMPLIANT',
  };
}

export const SAMPLE_CERTIFICATE_FIRE = {
  id: 'ARSAFE-CFS-2026-00124',
  resultId: 'RES-FS-2026-081',
  workerId: 'WK-4092',
  workerName: 'Mark Daniels',
  workerRole: 'Field Operator Level 2',
  moduleTitle: 'Fire & Explosion Response',
  facilityName: 'Sector 4 • Conveyor Safety Station 01 (Bay ST-04)',
  score: 80,
  passingThreshold: 75,
  issueDate: 'Sep 23, 2026',
  expiryDate: 'Sep 23, 2027',
  verificationQrPayload: 'https://ar-safe.org/verify?cert=ARSAFE-CFS-2026-00124',
  cryptoSeal: 'VALIDATED-LOCAL-CRYPTOPRINT-SHA256',
  supervisor: 'Sarah Chen (MGR-1044)',
  status: 'ACTIVE_COMPLIANT',
};
