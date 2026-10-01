const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration for AR-SAFE Mobile
 * Includes support for 3D model asset extensions used in AR rendering.
 * Strict JavaScript only.
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    assetExts: [
      ...defaultConfig.resolver.assetExts,
      'obj',
      'mtl',
      'gltf',
      'glb',
      'bin',
    ],
  },
};

module.exports = mergeConfig(defaultConfig, config);
