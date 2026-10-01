/**
 * @file ARProofScene.jsx
 * @description Real ViroReact / ARCore AR Scene for Phase 1 AR Proof.
 * Demonstrates:
 * 1. AR camera / session start
 * 2. Real-time ARCore tracking status updates (NORMAL, LIMITED, UNAVAILABLE)
 * 3. 3D test object placement (Industrial Safety Target Cube) in physical space
 * 4. Spatial stability when the smartphone moves
 * Strict JavaScript only - no TypeScript syntax.
 */

import React, { useState } from 'react';
import {
  ViroARScene,
  ViroBox,
  ViroMaterials,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroText,
  ViroNode,
  ViroTrackingStateConstants,
} from '@reactvision/react-viro';

// Industrial Safety Theme materials for AR proof objects
ViroMaterials.createMaterials({
  safetyCubeMaterial: {
    diffuseColor: '#FF6B00', // High-visibility Safety Orange
    lightingModel: 'Lambert',
  },
  basePlatformMaterial: {
    diffuseColor: '#1E293B', // Slate Charcoal base
    lightingModel: 'Lambert',
  },
  targetRingMaterial: {
    diffuseColor: '#22C55E', // Safe status emerald
    lightingModel: 'Constant',
  },
});

export function ARProofScene(props) {
  const [trackingState, setTrackingState] = useState('INITIALIZING');
  const [cubePosition, setCubePosition] = useState([0, -0.15, -0.8]); // 80cm ahead, 15cm down
  const [placedAnchor, setPlacedAnchor] = useState(false);

  function handleTrackingUpdated(state, reason) {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setTrackingState('NORMAL');
    } else if (state === ViroTrackingStateConstants.TRACKING_LIMITED) {
      setTrackingState('LIMITED');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      setTrackingState('UNAVAILABLE');
    } else {
      setTrackingState('INITIALIZING');
    }

    if (props.arSceneNavigator?.viroAppProps?.onTrackingStateChange) {
      props.arSceneNavigator.viroAppProps.onTrackingStateChange(state, reason);
    }
  }

  function handleDrag(dragToPos) {
    setCubePosition(dragToPos);
    setPlacedAnchor(true);
    if (props.arSceneNavigator?.viroAppProps?.onAnchorPlaced) {
      props.arSceneNavigator.viroAppProps.onAnchorPlaced(dragToPos);
    }
  }

  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      {/* Real environment illumination matching */}
      <ViroAmbientLight color="#ffffff" intensity={400} />
      <ViroDirectionalLight color="#ffffff" direction={[0, -1, -0.3]} intensity={800} />

      {/* 3D Test Object: Industrial AR Reference Target */}
      <ViroNode
        position={cubePosition}
        dragType="FixedDistance"
        onDrag={handleDrag}
      >
        {/* Physical 3D Target Box (15cm x 15cm x 15cm) */}
        <ViroBox
          position={[0, 0, 0]}
          scale={[0.15, 0.15, 0.15]}
          materials={['safetyCubeMaterial']}
        />

        {/* 3D Anchoring Plate below box */}
        <ViroBox
          position={[0, -0.08, 0]}
          scale={[0.22, 0.01, 0.22]}
          materials={['basePlatformMaterial']}
        />

        {/* 3D Floating Spatial Label */}
        <ViroText
          text="AR-SAFE TARGET\n[DRAG TO RE-ANCHOR]"
          scale={[0.07, 0.07, 0.07]}
          position={[0, 0.16, 0]}
          style={{
            fontFamily: 'sans-serif',
            fontSize: 22,
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        />
      </ViroNode>

      {/* Real-time Tracking HUD In-Scene Marker */}
      <ViroText
        text={`ARCore Tracking: ${trackingState}\nAnchor: ${placedAnchor ? 'User Positioned' : 'Default [0, -0.15, -0.8]'}`}
        scale={[0.05, 0.05, 0.05]}
        position={[0, 0.35, -1.0]}
        style={{
          fontFamily: 'sans-serif',
          fontSize: 18,
          color: trackingState === 'NORMAL' ? '#22C55E' : '#F59E0B',
          textAlign: 'center',
        }}
      />
    </ViroARScene>
  );
}
export default ARProofScene;
