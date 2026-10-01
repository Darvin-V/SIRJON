/**
 * @file ARProofScreen.jsx
 * @description Native Android AR Proof Screen for AR-SAFE SIH 26041.
 * Integrates:
 * - Runtime Android Camera Permission (PermissionsAndroid)
 * - Google ARCore Availability Detection (isARSupportedOnDevice)
 * - ViroReact AR Scene Navigator with ARProofScene
 * - Stitch UI Approved Visual Overlay (Gloved buttons, HUD badges, tracking status)
 * - Clean AR session exit back to Dashboard
 * Strict JavaScript only - no TypeScript syntax.
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {
  ViroARSceneNavigator,
  isARSupportedOnDevice,
  ViroTrackingStateConstants,
} from '@reactvision/react-viro';
import { ARProofScene } from '../../components/ar/ARProofScene.jsx';
import { useApp } from '../../context/AppContext.jsx';

export function ARProofScreen() {
  const { navigateTo, theme, isDarkMode } = useApp();

  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [arCoreStatus, setArCoreStatus] = useState('CHECKING'); // 'CHECKING' | 'SUPPORTED' | 'UNSUPPORTED'
  const [trackingStateName, setTrackingStateName] = useState('INITIALIZING');
  const [anchorCoords, setAnchorCoords] = useState('[0.00, -0.15, -0.80]');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function initARSession() {
      try {
        // 1. Check & Request Android Camera Permission
        if (Platform.OS === 'android') {
          const cameraGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'AR-SAFE Camera Permission',
              message: 'AR-SAFE requires camera access to overlay virtual safety hazards onto the physical training environment.',
              buttonPositive: 'Grant Permission',
              buttonNegative: 'Cancel',
            }
          );

          if (cameraGranted === PermissionsAndroid.RESULTS.GRANTED) {
            if (isMounted) setHasCameraPermission(true);
          } else {
            if (isMounted) {
              setHasCameraPermission(false);
              setErrorMessage('Camera permission denied. AR cannot run without camera access.');
              return;
            }
          }
        } else {
          // iOS or other platform
          if (isMounted) setHasCameraPermission(true);
        }

        // 2. Detect Google ARCore Support on Device
        try {
          const supportResult = await isARSupportedOnDevice();
          if (isMounted) {
            setArCoreStatus(supportResult?.isARSupported ? 'SUPPORTED' : 'UNSUPPORTED');
          }
        } catch (arErr) {
          console.warn('ARCore support check result:', arErr);
          if (isMounted) {
            // Note: ARCore check might reject on emulators or uncertified hardware
            setArCoreStatus('UNSUPPORTED');
            setErrorMessage(String(arErr?.message || arErr));
          }
        }
      } catch (err) {
        console.error('AR session initialization error:', err);
        if (isMounted) setErrorMessage(err.message || 'Failed to initialize AR session');
      }
    }

    initARSession();
    return () => {
      isMounted = false;
    };
  }, []);

  function handleTrackingStateChange(state) {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setTrackingStateName('NORMAL');
    } else if (state === ViroTrackingStateConstants.TRACKING_LIMITED) {
      setTrackingStateName('LIMITED');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      setTrackingStateName('UNAVAILABLE');
    } else {
      setTrackingStateName('INITIALIZING');
    }
  }

  function handleAnchorPlaced(coords) {
    if (Array.isArray(coords)) {
      setAnchorCoords(
        `[${coords[0].toFixed(2)}, ${coords[1].toFixed(2)}, ${coords[2].toFixed(2)}]`
      );
    }
  }

  function handleExitAR() {
    navigateTo('dashboard');
  }

  return (
    <View style={styles.container}>
      {/* Real Viro AR Camera / Scene Layer */}
      {hasCameraPermission ? (
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{ scene: ARProofScene }}
          viroAppProps={{
            onTrackingStateChange: handleTrackingStateChange,
            onAnchorPlaced: handleAnchorPlaced,
          }}
          style={styles.arView}
        />
      ) : (
        <View style={styles.permissionFallback}>
          <ActivityIndicator size="large" color="#FF6B00" />
          <Text style={styles.permissionText}>
            {errorMessage || 'Requesting camera permission for AR session...'}
          </Text>
        </View>
      )}

      {/* Stitch Approved AR HUD Top Bar */}
      <View style={styles.topHud}>
        <View style={styles.headerRow}>
          <View style={styles.titleBadge}>
            <View style={[styles.statusDot, { backgroundColor: trackingStateName === 'NORMAL' ? '#22C55E' : '#F59E0B' }]} />
            <Text style={styles.titleText}>AR-SAFE PROOF</Text>
          </View>

          <View style={[styles.arcoreBadge, { backgroundColor: arCoreStatus === 'SUPPORTED' ? '#166534' : '#854D0E' }]}>
            <Text style={styles.arcoreText}>
              ARCore: {arCoreStatus}
            </Text>
          </View>
        </View>

        {/* Tracking metrics readout */}
        <View style={styles.metricsCard}>
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>TRACKING</Text>
            <Text style={[styles.metricVal, { color: trackingStateName === 'NORMAL' ? '#22C55E' : '#F59E0B' }]}>
              {trackingStateName}
            </Text>
          </View>
          <View style={styles.metricDivider} />
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>3D ANCHOR</Text>
            <Text style={styles.metricVal}>{anchorCoords}</Text>
          </View>
        </View>

        {errorMessage && (
          <View style={styles.warningBanner}>
            <Text style={styles.warningText}>{errorMessage}</Text>
          </View>
        )}
      </View>

      {/* Stitch Approved AR HUD Bottom Controls */}
      <View style={styles.bottomHud}>
        <View style={styles.hintCard}>
          <Text style={styles.hintText}>
            Point camera at surface. Touch and drag the 3D orange marker to re-anchor in real space.
          </Text>
        </View>

        {/* Safe Exit Button - min 48px height gloved compliance */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleExitAR}
          style={styles.exitButton}
        >
          <Text style={styles.exitButtonText}>EXIT AR PROOF</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  arView: {
    flex: 1,
  },
  permissionFallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#0F172A',
  },
  permissionText: {
    color: '#E2E8F0',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
  },
  topHud: {
    position: 'absolute',
    top: 40,
    left: 16,
    right: 16,
    gap: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  titleText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  arcoreBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  arcoreText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  metricsCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(15, 23, 42, 0.88)',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'space-around',
  },
  metricItem: {
    alignItems: 'center',
  },
  metricDivider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  metricLabel: {
    color: '#94A3B8',
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 2,
  },
  metricVal: {
    color: '#F8FAFC',
    fontSize: 12,
    fontWeight: '700',
  },
  warningBanner: {
    backgroundColor: 'rgba(185, 28, 28, 0.9)',
    borderRadius: 8,
    padding: 8,
  },
  warningText: {
    color: '#FFFFFF',
    fontSize: 11,
    textAlign: 'center',
  },
  bottomHud: {
    position: 'absolute',
    bottom: 30,
    left: 16,
    right: 16,
    gap: 12,
  },
  hintCard: {
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  hintText: {
    color: '#CBD5E1',
    fontSize: 12,
    textAlign: 'center',
  },
  exitButton: {
    backgroundColor: '#DC2626',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  exitButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default ARProofScreen;
