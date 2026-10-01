/**
 * @file AppNavigator.jsx
 * @description Central Screen Router for Worker and Site Manager flows.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { useApp } from '../context/AppContext.jsx';

// Auth / Role screens
import { LoginScreen } from '../screens/auth/LoginScreen.jsx';
import { RoleSelectionScreen } from '../screens/auth/RoleSelectionScreen.jsx';

// Worker screens
import { DashboardScreen } from '../screens/worker/DashboardScreen.jsx';
import { ModulesListScreen } from '../screens/worker/ModulesListScreen.jsx';
import { ModuleDetailsScreen } from '../screens/worker/ModuleDetailsScreen.jsx';
import { QRScannerScreen } from '../screens/worker/QRScannerScreen.jsx';
import { StationIdentifiedScreen } from '../screens/worker/StationIdentifiedScreen.jsx';
import { ARTrackingSetupScreen } from '../screens/worker/ARTrackingSetupScreen.jsx';
import { ARLiveDrillScreen } from '../screens/worker/ARLiveDrillScreen.jsx';
import { ARProofScreen } from '../screens/ar/ARProofScreen.jsx';
import { AssessmentResultsScreen } from '../screens/worker/AssessmentResultsScreen.jsx';
import { CertificateScreen } from '../screens/worker/CertificateScreen.jsx';
import { OfflineSyncScreen } from '../screens/worker/OfflineSyncScreen.jsx';
import { SyncStatesScreen } from '../screens/worker/SyncStatesScreen.jsx';

// Site Manager screens
import { StationsListScreen } from '../screens/site-manager/StationsListScreen.jsx';
import { StationAnchoringScreen } from '../screens/site-manager/StationAnchoringScreen.jsx';
import { HazardConfigScreen } from '../screens/site-manager/HazardConfigScreen.jsx';
import { ARPreviewSaveScreen } from '../screens/site-manager/ARPreviewSaveScreen.jsx';
import { ManagerSyncScreen } from '../screens/site-manager/ManagerSyncScreen.jsx';

export function AppNavigator() {
  const { currentScreen } = useApp();

  switch (currentScreen) {
    case 'login':
      return <LoginScreen />;
    case 'role_selection':
      return <RoleSelectionScreen />;

    // Worker mode screens
    case 'dashboard':
    case 'clean_light':
    case 'refined_dark':
      return <DashboardScreen />;
    case 'modules':
      return <ModulesListScreen />;
    case 'module_details':
      return <ModuleDetailsScreen />;
    case 'qr_scanner':
      return <QRScannerScreen />;
    case 'station_identified':
      return <StationIdentifiedScreen />;
    case 'ar_setup':
      return <ARTrackingSetupScreen />;
    case 'ar_live':
      return <ARLiveDrillScreen />;
    case 'ar_proof':
      return <ARProofScreen />;
    case 'assessment_results':
      return <AssessmentResultsScreen />;
    case 'certificate':
      return <CertificateScreen />;
    case 'offline_sync':
      return <OfflineSyncScreen />;
    case 'sync_states':
      return <SyncStatesScreen />;

    // Site manager mode screens
    case 'site_manager_stations':
      return <StationsListScreen />;
    case 'station_anchoring':
      return <StationAnchoringScreen />;
    case 'hazard_config':
      return <HazardConfigScreen />;
    case 'ar_preview':
      return <ARPreviewSaveScreen />;
    case 'manager_sync':
      return <ManagerSyncScreen />;

    default:
      return <DashboardScreen />;
  }
}
