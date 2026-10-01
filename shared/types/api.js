/**
 * @file api.js
 * @description AR-SAFE REST API client contract & endpoint definitions.
 * Strict JavaScript only - no TypeScript syntax.
 */

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    ME: '/api/auth/me',
  },
  SITES: {
    LIST: '/api/sites',
    DETAIL: (id) => `/api/sites/${id}`,
  },
  STATIONS: {
    LIST: '/api/stations',
    DETAIL: (id) => `/api/stations/${id}`,
    BY_QR: (qr) => `/api/stations/qr/${qr}`,
    UPDATE_CONFIG: (id) => `/api/stations/${id}/config`,
  },
  MODULES: {
    LIST: '/api/modules',
    DETAIL: (id) => `/api/modules/${id}`,
  },
  SCENARIOS: {
    DETAIL: (id) => `/api/scenarios/${id}`,
  },
  RESULTS: {
    SUBMIT: '/api/training-results',
    LIST: '/api/training-results',
    BY_WORKER: (workerId) => `/api/training-results/worker/${workerId}`,
  },
  SYNC: {
    BATCH_UPLOAD: '/api/sync/results',
    PULL_CONFIGS: '/api/sync/stations',
  },
  CERTIFICATES: {
    DETAIL: (id) => `/api/certificates/${id}`,
    VERIFY: (id) => `/api/certificates/${id}/verify`,
  },
};
