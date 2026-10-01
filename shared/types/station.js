/**
 * @file station.js
 * @description AR-SAFE Training Station and Spatial Anchor shared model.
 * Strict JavaScript only - no TypeScript syntax.
 */

export const REFERENCE_TYPES = {
  VISUAL_MARKER: 'VISUAL_MARKER',
  QR_CODE: 'QR_CODE',
  SPATIAL_ANCHOR: 'SPATIAL_ANCHOR',
};

/**
 * Standard training stations matching Stitch UI exports
 */
export const STATIONS = [
  {
    id: 'ARSAFE-CONVEYOR-001',
    qrCode: 'ARSAFE-CONVEYOR-001',
    name: 'Conveyor Safety Station 01',
    bayId: 'Bay ST-04',
    siteId: 'MINE-A',
    sector: 'Sector 4 Plant',
    moduleId: 'MOD-FIRE-01',
    moduleTitle: 'Fire & Explosion Response',
    referenceType: REFERENCE_TYPES.QR_CODE,
    trackingConfidence: 0.98,
    status: 'ACTIVE',
    physicalElements: [
      { id: 'elem-1', name: 'Conveyor Belt Bed & Rollers', type: 'MACHINE', anchor: 'Anchor #01' },
      { id: 'elem-2', name: 'Emergency E-Stop Pull-Cord', type: 'E_STOP', anchor: 'Anchor #02' },
      { id: 'elem-3', name: 'Fire Extinguisher Rig (#04 Dry Chem)', type: 'TOOL', anchor: 'Anchor #03' },
      { id: 'elem-4', name: 'Emergency Exit Doorway', type: 'EGRESS', anchor: 'Anchor #04' },
    ],
    virtualHazards: [
      { id: 'haz-1', name: 'Class B Solvent Flame Source', targetAsset: 'CONV-MOTOR-4B', temp: '382°C' },
      { id: 'haz-2', name: 'Dense Toxic Smoke Plume', opacity: 0.75, height: '2.4m' },
      { id: 'haz-3', name: 'Thermal Radiance Danger Ring', radius: '2.5m' },
    ],
  },
  {
    id: 'ARSAFE-CHAMBER-009',
    qrCode: 'ARSAFE-CHAMBER-009',
    name: 'Chamber ST-09 Atmospheric Enclosure',
    bayId: 'Chamber Bay 09',
    siteId: 'MINE-A',
    sector: 'Sector 4 Plant',
    moduleId: 'MOD-GAS-02',
    moduleTitle: 'Gas Leak / Confined Space Safety',
    referenceType: REFERENCE_TYPES.QR_CODE,
    trackingConfidence: 0.96,
    status: 'ACTIVE',
    physicalElements: [
      { id: 'elem-c1', name: 'Confined Space Access Hatch', type: 'ENTRY', anchor: 'Anchor #01' },
      { id: 'elem-c2', name: 'SCBA Breathing Apparatus Station', type: 'PPE', anchor: 'Anchor #02' },
      { id: 'elem-c3', name: 'Exhaust Ventilation Fan Control', type: 'VENTILATION', anchor: 'Anchor #03' },
      { id: 'elem-c4', name: 'Atmospheric Gas Monitor Sensor', type: 'SENSOR', anchor: 'Anchor #04' },
    ],
    virtualHazards: [
      { id: 'haz-g1', name: 'Hydrogen Sulfide (H2S) Combustible Vapor', lel: '42%', priority: 1 },
      { id: 'haz-g2', name: 'Low Oxygen Displacement Pocket', o2Level: '16.5%' },
    ],
  },
];

export function isValidStation(station) {
  return Boolean(
    station &&
    typeof station.id === 'string' &&
    typeof station.name === 'string' &&
    typeof station.siteId === 'string'
  );
}
