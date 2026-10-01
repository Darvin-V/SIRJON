/**
 * @file react-viro.js
 * @description Web shim for ViroReact / ReactVision components when running in Vite preview.
 * When compiled for Android, Metro resolves the real native @reactvision/react-viro library.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';

export const ViroTrackingStateConstants = {
  TRACKING_UNAVAILABLE: 1,
  TRACKING_LIMITED: 2,
  TRACKING_NORMAL: 3,
};

export const ViroMaterials = {
  createMaterials: (materials) => materials,
};

export const ViroAnimations = {
  registerAnimations: (animations) => animations,
};

export const isARSupportedOnDevice = async () => ({ isARSupported: true });

export const ViroARSceneNavigator = ({ initialScene, viroAppProps, style }) => {
  const SceneComponent = initialScene?.scene;
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#090d16',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "radial-gradient(circle at center, #1e293b 0%, #090d16 100%)",
        ...style,
      }}
    >
      {/* 3D Grid Mock representation for browser preview */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* 3D Test Cube Simulation */}
      <div
        style={{
          width: 90,
          height: 90,
          backgroundColor: '#FF6B00',
          borderRadius: 8,
          boxShadow: '0 0 30px rgba(255, 107, 0, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: 10,
          textAlign: 'center',
          border: '2px solid #ffffff',
          animation: 'pulse 2s infinite ease-in-out',
          zIndex: 2,
        }}
      >
        <span>AR TARGET</span>
        <span style={{ fontSize: 8, opacity: 0.8 }}>[0, -0.15, -0.8]</span>
      </div>

      {SceneComponent && (
        <SceneComponent
          arSceneNavigator={{
            viroAppProps,
          }}
        />
      )}
    </div>
  );
};

export const ViroARScene = ({ children }) => <>{children}</>;
export const ViroBox = () => null;
export const ViroSphere = () => null;
export const ViroNode = ({ children }) => <>{children}</>;
export const ViroText = () => null;
export const ViroAmbientLight = () => null;
export const ViroDirectionalLight = () => null;
export const ViroSpotLight = () => null;
export const ViroARPlane = ({ children }) => <>{children}</>;
export const ViroARPlaneSelector = ({ children }) => <>{children}</>;

export default {
  ViroTrackingStateConstants,
  ViroMaterials,
  ViroAnimations,
  isARSupportedOnDevice,
  ViroARSceneNavigator,
  ViroARScene,
  ViroBox,
  ViroSphere,
  ViroNode,
  ViroText,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroSpotLight,
  ViroARPlane,
  ViroARPlaneSelector,
};
