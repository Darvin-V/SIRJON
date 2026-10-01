/**
 * @file App.jsx
 * @description Main application root for AR-SAFE Mobile.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import { AppProvider } from './context/AppContext.jsx';
import { TrainingProvider } from './context/TrainingContext.jsx';
import { AppNavigator } from './navigation/AppNavigator.jsx';

export default function App() {
  return (
    <AppProvider>
      <TrainingProvider>
        <AppNavigator />
      </TrainingProvider>
    </AppProvider>
  );
}
