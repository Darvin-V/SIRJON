/**
 * @file mockData.js
 * @description Comprehensive mock data aligning Stitch exports with shared contracts.
 * Strict JavaScript only - no TypeScript syntax.
 */

import { DEFAULT_WORKER, DEFAULT_SITE_MANAGER } from '@shared/types/worker.js';
import { SITES } from '@shared/types/site.js';
import { STATIONS } from '@shared/types/station.js';
import { MODULES } from '@shared/types/module.js';
import { SCENARIOS } from '@shared/types/scenario.js';
import { SAMPLE_RESULT_FIRE } from '@shared/types/training-result.js';
import { SAMPLE_CERTIFICATE_FIRE } from '@shared/types/certificate.js';

export {
  DEFAULT_WORKER,
  DEFAULT_SITE_MANAGER,
  SITES,
  STATIONS,
  MODULES,
  SCENARIOS,
  SAMPLE_RESULT_FIRE,
  SAMPLE_CERTIFICATE_FIRE,
};

export const MOCK_QUEUED_RECORDS = [
  {
    id: 'SYNC-001',
    moduleId: 'MOD-FIRE-01',
    moduleTitle: 'Fire & Explosion Response',
    stationName: 'Conveyor Safety Station 01',
    score: 80,
    timestamp: 'Today, 10:14 AM',
    cacheSize: '1.2 MB',
    status: 'QUEUED',
  },
  {
    id: 'SYNC-002',
    moduleId: 'MOD-GAS-02',
    moduleTitle: 'Gas Leak / Confined Space',
    stationName: 'Chamber ST-09 Module',
    score: 95,
    timestamp: 'Today, 09:30 AM',
    cacheSize: '1.8 MB',
    status: 'QUEUED',
  },
  {
    id: 'SYNC-003',
    moduleId: 'MOD-LOTO-01',
    moduleTitle: 'Electrical Lockout / Tagout',
    stationName: 'Substation Bay 02',
    score: 92,
    timestamp: 'Yesterday, 04:15 PM',
    cacheSize: '950 KB',
    status: 'SYNCED',
  },
];
