# AR-SAFE

## SIH Problem Statement 26041

AR-SAFE is a site-configurable smartphone-based Augmented Reality safety-training platform for mining and manufacturing environments.

The platform uses the worker's real physical training environment and overlays controlled virtual hazards and safety events onto it.

## Core Principle

> Don't replace the real environment with a virtual world. Use the real environment and augment it with what is unsafe, invisible, expensive, or impossible to reproduce physically.

## Core Training Modules

1. Fire & Explosion Response
2. Gas Leak / Confined Space Safety

## Technology Stack

### Mobile

- React Native
- TypeScript
- ViroReact / ReactVision
- Google ARCore
- Android
- QR scanning
- SQLite / local storage

### Backend

- Node.js
- TypeScript
- Express
- PostgreSQL
- REST API

### Admin

- React
- TypeScript
- Vite

## Project Structure

```text
AR-SAFE/
├── mobile/       # Worker Android application and AR
├── backend/      # REST API, database and synchronization
├── admin/        # Web administration dashboard
├── shared/       # Shared types and scenario contracts
└── docs/         # Project specifications and documentation