import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared'),
      'react-native': path.resolve(__dirname, './src/shims/react-native.jsx'),
      '@reactvision/react-viro': path.resolve(__dirname, './src/shims/react-viro.jsx'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
