/**
 * @file AppContext.jsx
 * @description Global App state provider for AR-SAFE Mobile.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React, { createContext, useContext, useState } from 'react';
import { getTheme } from '../theme/index.js';
import {
  DEFAULT_WORKER,
  DEFAULT_SITE_MANAGER,
  MODULES,
  STATIONS,
  SAMPLE_RESULT_FIRE,
} from '../data/mockData.js';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Operational role: 'WORKER' or 'SITE_MANAGER'
  const [activeRole, setActiveRole] = useState('WORKER');

  // Display mode: dark (Obsidian) or light (Clean Slate)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Network simulation state: online vs offline SQLite cache
  const [isOffline, setIsOffline] = useState(false);

  // Active locale: English ('en'), Hindi ('hi'), Santali ('sat')
  const [language, setLanguage] = useState('en');

  // Navigation state
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [screenHistory, setScreenHistory] = useState(['dashboard']);

  // Active training and station state
  const [selectedModuleId, setSelectedModuleId] = useState('MOD-FIRE-01');
  const [selectedStationId, setSelectedStationId] = useState('ARSAFE-CONVEYOR-001');

  // Active assessment and certificate
  const [currentResult, setCurrentResult] = useState(SAMPLE_RESULT_FIRE);

  // Theme object
  const theme = getTheme(isDarkMode);

  // Active user profile according to role
  const currentUser = activeRole === 'WORKER' ? DEFAULT_WORKER : DEFAULT_SITE_MANAGER;

  // Selected module and station objects
  const selectedModule = MODULES.find(m => m.id === selectedModuleId) || MODULES[0];
  const selectedStation = STATIONS.find(s => s.id === selectedStationId) || STATIONS[0];

  function toggleTheme() {
    setIsDarkMode(prev => !prev);
  }

  function toggleRole() {
    setActiveRole(prev => {
      const nextRole = prev === 'WORKER' ? 'SITE_MANAGER' : 'WORKER';
      setCurrentScreen(nextRole === 'WORKER' ? 'dashboard' : 'site_manager_stations');
      return nextRole;
    });
  }

  function toggleOffline() {
    setIsOffline(prev => !prev);
  }

  function navigateTo(screen, params = {}) {
    if (params.moduleId) setSelectedModuleId(params.moduleId);
    if (params.stationId) setSelectedStationId(params.stationId);
    if (params.result) setCurrentResult(params.result);

    setScreenHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goBack() {
    setScreenHistory(prev => {
      if (prev.length <= 1) {
        setCurrentScreen(activeRole === 'WORKER' ? 'dashboard' : 'site_manager_stations');
        return prev;
      }
      const nextHistory = [...prev];
      nextHistory.pop();
      const lastScreen = nextHistory[nextHistory.length - 1];
      setCurrentScreen(lastScreen);
      return nextHistory;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const value = {
    activeRole,
    setActiveRole,
    currentUser,
    isDarkMode,
    toggleTheme,
    theme,
    isOffline,
    toggleOffline,
    language,
    setLanguage,
    currentScreen,
    navigateTo,
    goBack,
    toggleRole,
    selectedModule,
    selectedModuleId,
    setSelectedModuleId,
    selectedStation,
    selectedStationId,
    setSelectedStationId,
    currentResult,
    setCurrentResult,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
