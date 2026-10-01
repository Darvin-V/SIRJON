/**
 * @file react-native.js
 * @description Web shim for React Native primitives when running in Vite preview.
 * When compiled for Android, Metro resolves the real native React Native engine.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';

export const View = ({ style, children, ...props }) => {
  const flatStyle = Array.isArray(style)
    ? Object.assign({}, ...style.filter(Boolean))
    : style || {};
  return (
    <div style={{ display: 'flex', boxSizing: 'border-box', ...flatStyle }} {...props}>
      {children}
    </div>
  );
};

export const Text = ({ style, children, ...props }) => {
  const flatStyle = Array.isArray(style)
    ? Object.assign({}, ...style.filter(Boolean))
    : style || {};
  return (
    <span style={{ fontFamily: 'Inter, sans-serif', ...flatStyle }} {...props}>
      {children}
    </span>
  );
};

export const TouchableOpacity = ({ style, children, onPress, activeOpacity, ...props }) => {
  const flatStyle = Array.isArray(style)
    ? Object.assign({}, ...style.filter(Boolean))
    : style || {};
  return (
    <button
      type="button"
      onClick={onPress}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        boxSizing: 'border-box',
        ...flatStyle,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export const StyleSheet = {
  create: (styles) => styles,
};

export const Platform = {
  OS: 'web',
  select: (obj) => obj.web || obj.default,
};

export const PermissionsAndroid = {
  PERMISSIONS: {
    CAMERA: 'android.permission.CAMERA',
  },
  RESULTS: {
    GRANTED: 'granted',
    DENIED: 'denied',
    NEVER_ASK_AGAIN: 'never_ask_again',
  },
  request: async () => 'granted',
  check: async () => true,
};

export const ActivityIndicator = ({ size, color }) => (
  <div
    style={{
      width: size === 'large' ? 36 : 20,
      height: size === 'large' ? 36 : 20,
      borderRadius: '50%',
      border: `3px solid ${color || '#FF6B00'}30`,
      borderTopColor: color || '#FF6B00',
      animation: 'spin 1s linear infinite',
    }}
  />
);

export const AppRegistry = {
  registerComponent: () => {},
};

export default {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
  AppRegistry,
};
