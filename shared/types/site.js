/**
 * @file site.js
 * @description AR-SAFE Registered Industrial Site / Facility model.
 * Strict JavaScript only - no TypeScript syntax.
 */

/**
 * @typedef {Object} Site
 * @property {string} id - Unique site ID (e.g., 'MINE-A')
 * @property {string} name - Site name (e.g., 'Mine A - Dhanbad Operations')
 * @property {string} location - City / District (e.g., 'Dhanbad, Jharkhand')
 * @property {string} facilityType - Industrial category ('MINING' | 'MANUFACTURING' | 'PROCESSING')
 * @property {Array<string>} sectors - Facility bays or sectors
 * @property {boolean} active - Active operational status
 */

export const FACILITY_TYPES = {
  MINING: 'MINING',
  MANUFACTURING: 'MANUFACTURING',
  PROCESSING: 'PROCESSING',
};

export const SITES = [
  {
    id: 'MINE-A',
    name: 'Sector 4 Plant - Dhanbad Coal Complex',
    location: 'Dhanbad, Jharkhand',
    facilityType: FACILITY_TYPES.MINING,
    sectors: ['Sector 4 Plant', 'Conveyor Gallery B', 'Processing Pit 01'],
    active: true,
  },
  {
    id: 'PLANT-B',
    name: 'Jamshedpur Heavy Processing Facility',
    location: 'Jamshedpur, Jharkhand',
    facilityType: FACILITY_TYPES.MANUFACTURING,
    sectors: ['Blast Furnace 02', 'Rolling Mill ST-04', 'Chemical Store'],
    active: true,
  },
];

export function isValidSite(site) {
  return Boolean(
    site &&
    typeof site.id === 'string' &&
    typeof site.name === 'string' &&
    typeof site.location === 'string'
  );
}
