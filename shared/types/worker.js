/**
 * @file worker.js
 * @description AR-SAFE Worker and Operator shared data model.
 * Strict JavaScript only - no TypeScript syntax.
 */

/**
 * @typedef {Object} WorkerProfile
 * @property {string} id - Unique worker ID (e.g., 'WK-4092')
 * @property {string} name - Full worker name (e.g., 'Mark Daniels')
 * @property {string} role - Role identifier ('WORKER' | 'SITE_MANAGER' | 'ADMIN')
 * @property {string} designation - Operational title (e.g., 'Field Operator Level 2')
 * @property {string} siteId - Assigned industrial facility ID (e.g., 'MINE-A')
 * @property {string} plantSector - Operational bay / sector (e.g., 'Sector 4 Plant')
 * @property {string} avatarUrl - Worker photo or avatar URL
 * @property {number} complianceScore - Overall safety compliance percentage (0-100)
 * @property {number} modulesCompleted - Number of completed drill modules
 * @property {number} modulesTotal - Total mandatory modules assigned
 * @property {Array<string>} completedModuleIds - List of completed module IDs
 * @property {string} shift - Active shift (e.g., 'Shift 01 • North Facility')
 */

export const WORKER_ROLES = {
  WORKER: 'WORKER',
  SITE_MANAGER: 'SITE_MANAGER',
  ADMIN: 'ADMIN',
};

/**
 * Validates a worker profile object
 * @param {any} worker
 * @returns {boolean}
 */
export function isValidWorker(worker) {
  return Boolean(
    worker &&
    typeof worker.id === 'string' &&
    typeof worker.name === 'string' &&
    typeof worker.role === 'string' &&
    Object.values(WORKER_ROLES).includes(worker.role)
  );
}

/**
 * Default sample worker for development and offline testing
 */
export const DEFAULT_WORKER = {
  id: 'WK-4092',
  name: 'Mark Daniels',
  role: WORKER_ROLES.WORKER,
  designation: 'Field Operator Level 2',
  siteId: 'MINE-A',
  plantSector: 'Sector 4 Plant',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  complianceScore: 78,
  modulesCompleted: 7,
  modulesTotal: 9,
  completedModuleIds: ['MOD-LOTO-01', 'MOD-FALL-01'],
  shift: 'Shift 01 • North Facility',
};

/**
 * Default sample site manager
 */
export const DEFAULT_SITE_MANAGER = {
  id: 'MGR-1044',
  name: 'Sarah Chen',
  role: WORKER_ROLES.SITE_MANAGER,
  designation: 'Senior Safety Supervisor',
  siteId: 'MINE-A',
  plantSector: 'Sector 4 Plant',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
  complianceScore: 100,
  modulesCompleted: 9,
  modulesTotal: 9,
  completedModuleIds: ['MOD-FIRE-01', 'MOD-GAS-02', 'MOD-LOTO-01', 'MOD-FALL-01'],
  shift: 'Supervisory Shift A',
};
