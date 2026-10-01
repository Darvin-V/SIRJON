/**
 * @file main.jsx
 * @description Application bootstrap entry point.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
