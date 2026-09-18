# AR-SAFE — SIH 26041

## Master Project Context, Product Specification, Architecture & 3-Member Antigravity Development Plan

---

# 1. PROJECT IDENTITY

**Project Name:** AR-SAFE

**SIH Problem Statement:** 26041

**Domain:** Industrial/Vocational Safety Training

**Target Context:** Mining and manufacturing sectors in Jharkhand, especially workers/trainees who need practical safety training.

### One-line definition

> AR-SAFE is a site-configurable smartphone-based Augmented Reality safety-training platform that overlays controlled virtual hazards and safety events onto workers' actual physical training environments, allowing them to practice hazard recognition and safety decision-making before facing similar situations in real industrial work.

---

# 2. CORE PROJECT PHILOSOPHY

The central principle of AR-SAFE is:

> **“Don't replace the real environment with a virtual world. Use the real environment and augment it with what is unsafe, invisible, expensive, or impossible to reproduce physically.”**

AR-SAFE should NOT feel like:

* A video game
* A conventional 3D simulator
* A completely virtual mine
* A digital twin of every mine
* A VR experience
* A live emergency-response system

Instead:

> **The worker stands in a real physical training environment, uses a smartphone camera, observes real equipment and surroundings, and sees virtual hazards/events overlaid onto the real environment.**

---

# 3. REAL ENVIRONMENT + AR

The physical training environment remains visible.

### Real elements

* Conveyor
* Fire extinguisher
* Emergency exit
* Floor
* Machine
* Control panel
* PPE
* Safety signs
* Training equipment

### Virtual elements

* Fire
* Smoke
* Sparks
* Gas-leak visualization
* Invisible danger zones
* Warning indicators
* Simulated unsafe events
* Contextual AR instructions

Example:

```text
             REAL CONVEYOR
          ┌─────────────────┐
          │                 │
          │       🔥        │
          │      💨💨       │
          └─────────────────┘

              🧯
        REAL EXTINGUISHER

                         🚪
                      REAL EXIT
```

The fire and smoke are virtual.

The extinguisher and exit are real.

---

# 4. WHY AR?

AR is not being used just because it is visually impressive.

The justification is:

Some industrial hazards are unsafe, expensive, disruptive, or impossible to reproduce physically during routine training.

Examples:

* Fire
* Smoke
* Gas leaks
* Sparks
* Dangerous zones
* Simulated equipment failures
* Emergency events

AR allows these events to be added to a real training environment without actually creating the dangerous condition.

Therefore:

```text
REAL TRAINING ENVIRONMENT
             +
      VIRTUAL HAZARD
             +
       WORKER ACTION
             ↓
    CONTEXTUAL SAFETY TRAINING
```

---

# 5. SITE-CONFIGURABLE DESIGN

AR-SAFE must NOT assume every mine or plant has the same layout.

The same application should work with different configured training locations.

Example:

```text
AR-SAFE
│
├── Mine A
│   ├── Conveyor Training Area
│   └── Emergency Training Area
│
├── Mine B
│   ├── Conveyor Training Area
│   └── Gas Safety Area
│
└── Manufacturing Plant
    └── Machine Safety Area
```

The software engine remains the same.

The configuration changes.

---

# 6. ADMIN CONFIGURATION

Before workers use a training station, an authorized administrator configures it.

### Admin flow

```text
Admin Login
    ↓
Register Site
    ↓
Create Training Area
    ↓
Create Training Station
    ↓
Place/scan fixed QR or visual reference
    ↓
Establish local AR reference
    ↓
Configure relevant physical elements
    ↓
Create scenario
    ↓
Place virtual AR elements
    ↓
Configure scenario rules
    ↓
Save configuration
    ↓
Generate/assign unique station QR
```

The administrator should NOT manually type complicated X/Y/Z coordinates.

Instead, the UI should provide:

```text
Scan Reference
      ↓
Open AR Configuration Mode
      ↓
Place Virtual Fire
      ↓
Adjust Position/Scale
      ↓
Place Smoke
      ↓
Place Danger Zone
      ↓
Save
```

Internally, transforms/poses can be stored as configuration data.

---

# 7. QR CODE ROLE

QR should NOT magically map the entire physical environment.

The distinction is:

### QR

Identifies the training station.

Example:

```text
ARSAFE-CONVEYOR-001
```

Meaning:

> “The worker is at Conveyor Training Station 001.”

### AR reference/tracking

Establishes the local spatial reference.

Therefore:

```text
QR
 ↓
Identify Station
 ↓
Load Configuration
 ↓
AR Reference
 ↓
Local Spatial Tracking
 ↓
Place AR Content
```

This distinction must be preserved in the technical explanation and jury presentation.

---

# 8. AR SPATIAL CONFIGURATION

Example:

```text
REAL CONVEYOR
       |
       |
  AR REFERENCE
       |
       |
REAL EXTINGUISHER
       |
       |
REAL EXIT
```

The virtual fire is stored relative to the AR reference.

Conceptually:

```text
Reference = local origin

Fire = relative pose
Smoke = relative pose
Danger Zone = relative pose
Warning = relative pose
```

The admin does not need to understand numerical coordinates.

The application stores the resulting transforms.

---

# 9. WORKER EXPERIENCE

## Step 1 — Open AR-SAFE

Worker opens the Android application.

## Step 2 — Login

Worker logs in or selects assigned training.

## Step 3 — Select training module

Example:

**Conveyor Fire Safety**

## Step 4 — Scan station QR

Worker scans the QR at the actual training station.

```text
QR
 ↓
Station ID
 ↓
Load configuration
```

## Step 5 — Establish AR tracking

The application uses camera-based AR tracking/reference detection.

## Step 6 — Start scenario

Real environment remains visible.

Virtual hazards appear at configured positions.

## Step 7 — Worker physically moves

The worker can:

* Walk around
* Look toward equipment
* Identify hazards
* Find extinguisher
* Find exit
* Inspect the area
* Make decisions

The virtual hazard should remain spatially associated with the configured location while tracking is reliable.

## Step 8 — Assessment

The system evaluates predefined actions/decisions.

## Step 9 — Result

Show:

* Score
* Correct actions
* Incorrect actions
* Feedback
* Completion status

## Step 10 — Save

Result is stored locally first.

## Step 11 — Synchronize

When internet becomes available, the result is synchronized with the backend.

## Step 12 — Certificate

Generate/display a training completion certificate.

---

# 10. PRIMARY SCENARIO 1

# FIRE & EXPLOSION RESPONSE

This should be the main demonstration scenario.

### Environment

A real conveyor/training area.

### Virtual elements

* Fire
* Smoke
* Danger zone
* Warning indicator

### Worker task

The worker is told:

> “A fire has been detected near the conveyor. Identify the hazard and follow the appropriate safety procedure.”

The worker must:

1. Identify the fire.
2. Identify the danger area.
3. Identify the emergency equipment.
4. Identify the emergency exit.
5. Select the appropriate safety response.
6. Follow the predefined response sequence.

### Example assessment

```text
Hazard Identification       ✓
Danger Zone Recognition     ✓
Emergency Equipment         ✓
Exit Identification         ✓
Correct Procedure           ✗

Score: 80%
```

The assessment is deterministic/rule-based.

No ML is required.

---

# 11. PRIMARY SCENARIO 2

# GAS LEAK / CONFINED SPACE SAFETY

Second complete AR module.

### Virtual elements

* Gas leak visualization
* Hazard zone
* Warning indicators
* Safety instructions

### Worker tasks

* Identify unsafe area
* Recognize gas-leak indication
* Identify appropriate PPE
* Identify safe response
* Select correct evacuation/safety procedure

Again, the assessment is deterministic.

---

# 12. ASSESSMENT MODEL

AR-SAFE does NOT need AI to determine whether the worker passed.

Use a rule-based scenario engine.

```text
Scenario State
      ↓
Worker Action
      ↓
Predefined Rule
      ↓
Correct / Incorrect
      ↓
Score
      ↓
Feedback
```

Possible assessment categories:

* Hazard identification
* Hazard-zone recognition
* Equipment identification
* Safety decision
* Procedure sequence
* Route/exit selection
* Scenario completion
* Response time

---

# 13. IMPORTANT ASSESSMENT LIMITATION

AR-SAFE should NOT claim that a smartphone can completely verify physical competence.

The application cannot reliably prove that a worker:

* Correctly fitted PPE
* Physically operated an extinguisher correctly
* Performed a physical rescue correctly
* Performed every real industrial procedure correctly

Those still require:

* Instructor supervision
* Practical drills
* Physical training
* Authorized certification

Therefore:

> AR-SAFE is a training and assessment aid, not a replacement for all practical industrial safety training.

---

# 14. LOCATION STRATEGY

GPS must NOT be responsible for precise AR placement.

### GPS/location can help with:

* Approximate site identification
* Determining which registered site the worker is near
* Optional site validation

### QR/reference + AR tracking handles local positioning.

Conceptually:

```text
OUTDOOR / OPEN AREA

GPS
 +
Camera
 +
Local AR Reference
 ↓
Site + Local AR Context
```

For indoor/underground environments:

```text
QR / Visual Reference
 +
Camera / AR Tracking
 +
Local Reference
 ↓
Local AR Position
```

If GPS is unavailable, the core training should still work.

This is particularly important for underground mining.

---

# 15. OFFLINE-FIRST DESIGN

Mining environments can have unreliable connectivity.

The core training must therefore work offline.

Local device storage should contain:

* Scenario configuration
* AR assets
* Training content
* Rules
* Language content
* Temporary worker results

Workflow:

```text
Worker starts training
       ↓
Load local configuration/assets
       ↓
Complete training
       ↓
Save result locally
       ↓
Internet available?
    /          \
   NO          YES
   |            |
Keep local     Sync
                ↓
             Backend
```

---

# 16. TRAINING RECORD

Each result should contain:

```text
Worker ID
Module ID
Station ID
Site ID
Score
Attempt
Completion Status
Date/Time
```

Example:

```text
Worker ID: W1024
Module: Conveyor Fire Safety
Site: Mine A
Score: 88%
Status: Completed
Attempt: 1
```

---

# 17. DIGITAL CERTIFICATE

After completing the required module:

```text
AR-SAFE
Safety Training Completion Certificate

Worker: [Name]
Module: Conveyor Fire Safety
Site: Mine A
Score: 88%
Status: Completed
Date: [Date]

Certificate ID:
ARSAFE-CFS-2026-00124

[Verification QR]
```

Important:

The certificate represents completion of an AR-SAFE training/assessment module.

Do NOT claim it is a government-approved industrial qualification unless an authorized organization officially recognizes it.

---

# 18. CERTIFICATE VERIFICATION

QR verification flow:

```text
Certificate QR
      ↓
Verification URL
      ↓
Certificate ID
      ↓
Backend
      ↓
Verify record
      ↓
Show:
    Worker
    Module
    Site
    Score
    Completion
    Certificate status
```

---

# 19. ADMIN DASHBOARD

Admin should be able to:

### Site management

* Register sites
* Edit sites
* Disable sites

### Station management

* Create training station
* Generate station ID
* Generate/assign QR
* Configure reference

### Scenario management

* Select module
* Configure hazards
* Configure AR elements
* Configure scenario rules
* Configure language content

### Worker management

* Add workers
* Assign training modules
* View workers

### Training records

* View scores
* View attempts
* View completion
* Filter by site/module

### Certificate

* View certificates
* Verify certificates

---

# 20. FINAL TECHNOLOGY STACK

Use technologies that are practical for the team's existing constraints.

## Mobile

* React Native
* TypeScript
* ViroReact / ReactVision
* Google ARCore
* Android
* QR scanning
* SQLite/local storage

## Backend

* Node.js
* TypeScript
* Express
* PostgreSQL
* REST API

## Admin

* React
* TypeScript
* Vite

## Development

* Google Antigravity
* Git
* GitHub

---

# 21. TECHNOLOGIES WE ARE NOT USING

Do NOT introduce these into the MVP:

* Python
* Machine learning training
* Custom computer-vision model
* Large datasets
* Unity
* Blender
* VR headset
* Blockchain
* Complex AI assessment
* Expensive APIs
* Unnecessary cloud infrastructure

AI can be considered a future enhancement, but it is NOT required for the core product.

---

# 22. MAJOR TECHNICAL RISK

The largest technical risk is:

# AR implementation and tracking

Not:

* Login
* Dashboard
* Database
* REST API

AR must be validated first on a real Android device.

Before building the complete application, prove:

```text
React Native
      +
ViroReact
      +
ARCore
      +
Android device
      ↓
Camera works
      ↓
AR reference works
      ↓
3D object appears
      ↓
Object remains spatially anchored
```

If this proof fails, STOP and solve AR before building the rest.

---

# 23. THREE-MEMBER TEAM STRUCTURE

There are three developers.

All three use Google Antigravity.

They should NOT independently create three complete applications.

Create ONE GitHub repository.

```text
AR-SAFE/
│
├── mobile/
├── backend/
├── admin/
├── shared/
├── docs/
├── README.md
└── .gitignore
```

---

# 24. MEMBER 1 — MOBILE + AR

Member 1 owns:

```text
/mobile
```

Responsibilities:

* Android application
* Worker login
* Module selection
* QR scanning
* AR reference
* AR camera
* AR scene
* Fire scenario
* Gas scenario
* Virtual fire
* Smoke
* Danger zones
* AR interaction
* Scenario state machine
* Assessment
* Score
* Offline storage
* Sync client
* Certificate screen
* Language switching

Main deliverable:

> A worker can use an Android phone to scan a training station, enter an AR scenario, interact with hazards, complete an assessment, and save the result offline.

---

# 25. MEMBER 2 — BACKEND

Member 2 owns:

```text
/backend
```

Responsibilities:

* Authentication
* Sites
* Stations
* Modules
* Scenario configuration
* Workers
* Training results
* Certificates
* Certificate verification
* Synchronization
* REST APIs
* PostgreSQL database

Suggested API:

```text
POST /api/auth/login

GET /api/sites

GET /api/sites/:id

GET /api/stations/:id

GET /api/modules

GET /api/modules/:id

GET /api/scenarios/:id

POST /api/training-results

GET /api/training-results

POST /api/sync

GET /api/certificates/:id

GET /api/certificates/:id/verify
```

---

# 26. MEMBER 3 — ADMIN DASHBOARD

Member 3 owns:

```text
/admin
```

Responsibilities:

* Admin login
* Dashboard
* Sites
* Training stations
* Modules
* Scenario configuration
* Workers
* Results
* Certificates
* QR verification

The dashboard must consume backend APIs.

It should NOT create a separate database.

---

# 27. SHARED CONTRACT

This is the most important integration mechanism.

Create:

```text
/shared
│
├── types/
│   ├── site.ts
│   ├── station.ts
│   ├── module.ts
│   ├── scenario.ts
│   ├── worker.ts
│   ├── training-result.ts
│   └── certificate.ts
│
└── scenario-config/
    ├── fire.json
    └── gas.json
```

All three developers follow these contracts.

Nobody invents their own format.

---

# 28. EXAMPLE SHARED STATION MODEL

Conceptually:

```json
{
  "id": "ARSAFE-CONVEYOR-001",
  "siteId": "MINE-A",
  "name": "Conveyor Training Station",
  "moduleId": "FIRE-001",
  "referenceType": "VISUAL_MARKER",
  "configuration": {},
  "active": true
}
```

---

# 29. EXAMPLE SCENARIO MODEL

Conceptually:

```json
{
  "id": "FIRE-001",
  "name": "Conveyor Fire Safety",
  "version": 1,
  "hazards": [],
  "actions": [],
  "assessment": {},
  "languages": {
    "en": {},
    "hi": {},
    "sat": {}
  }
}
```

Exact implementation can be refined during architecture work.

---

# 30. GIT STRATEGY

Repository:

```text
main
│
├── mobile-dev
├── backend-dev
└── admin-dev
```

Each developer primarily works on their own area.

### Member 1

```text
mobile-dev
```

### Member 2

```text
backend-dev
```

### Member 3

```text
admin-dev
```

Never directly push unfinished work into `main`.

---

# 31. INTEGRATION RULE

The three members must NOT wait until the end to integrate.

Use staged integration.

## Integration 1

Basic connection:

```text
Mobile
 ↓
Backend
```

and:

```text
Admin
 ↓
Backend
```

## Integration 2

Station configuration:

```text
Admin
 ↓
Backend
 ↓
Mobile
 ↓
Station appears
```

## Integration 3

Scenario:

```text
Admin
 ↓
Configure scenario
 ↓
Backend
 ↓
Mobile
 ↓
AR scenario loads
```

## Integration 4

Complete flow:

```text
Worker
 ↓
Mobile
 ↓
Offline result
 ↓
Sync
 ↓
Backend
 ↓
Admin
 ↓
Certificate
 ↓
QR verification
```

---

# 32. DEVELOPMENT PHASES

# PHASE 0 — Architecture Freeze

Before coding:

Finalize:

* folder structure
* API contracts
* database schema
* shared types
* scenario structure
* Git strategy
* technology versions

Do not start major feature development before this.

---

# PHASE 1 — AR TECHNICAL PROOF

Member 1:

```text
React Native
 ↓
ViroReact
 ↓
ARCore
 ↓
Android phone
 ↓
Camera
 ↓
Reference
 ↓
3D object
 ↓
Stable placement
```

Member 2 simultaneously:

```text
PostgreSQL
 ↓
Database schema
 ↓
Basic Express API
```

Member 3:

```text
React
 ↓
Vite
 ↓
Admin shell
 ↓
Dashboard UI
```

---

# PHASE 2 — BASIC SYSTEM

Mobile:

* Login
* Module selection
* QR scanner

Backend:

* Authentication
* Sites
* Stations
* Modules

Admin:

* Login
* Sites
* Stations
* Workers

---

# PHASE 3 — AR FIRE MODULE

Mobile:

```text
QR
 ↓
Load station
 ↓
AR reference
 ↓
Fire
 ↓
Smoke
 ↓
Danger zone
 ↓
Worker interaction
```

Backend:

* Fire scenario configuration

Admin:

* Create/configure fire station

---

# PHASE 4 — ASSESSMENT

Implement deterministic rules.

Example:

```text
Identify Fire
Correct → +20

Identify Danger Zone
Correct → +20

Identify Extinguisher
Correct → +20

Identify Exit
Correct → +20

Correct Procedure
Correct → +20
```

Score:

```text
100%
```

---

# PHASE 5 — SECOND MODULE

Build:

**Gas Leak / Confined Space Safety**

Reuse the same scenario engine.

Do NOT create a separate architecture for every module.

---

# PHASE 6 — OFFLINE

Store locally:

* Scenario
* AR configuration
* Assets
* Rules
* Results

Test with internet disabled.

The worker must still be able to complete training.

---

# PHASE 7 — SYNC

```text
Local Result
 ↓
Check connectivity
 ↓
If online → upload
 ↓
Backend stores
 ↓
Mark synced
```

Avoid duplicate result submission.

Use a unique local result ID.

---

# PHASE 8 — CERTIFICATE

After successful completion:

```text
Training Result
 ↓
Certificate ID
 ↓
Certificate
 ↓
QR
```

Verification:

```text
QR
 ↓
Backend
 ↓
Certificate record
 ↓
Verified
```

---

# PHASE 9 — LOCALIZATION

Minimum target:

* English
* Hindi
* Santali

The language selector should be visible.

Example:

```text
Language

English
हिन्दी
ᱥᱟᱱᱛᱟᱲᱤ
```

Do not leave localization until the final day.

Test font/script rendering early.

---

# PHASE 10 — FINAL INTEGRATION

Complete:

```text
ADMIN
 ↓
Create site
 ↓
Create station
 ↓
Configure scenario
 ↓
BACKEND
 ↓
MOBILE
 ↓
Scan QR
 ↓
AR
 ↓
Scenario
 ↓
Assessment
 ↓
Offline result
 ↓
Sync
 ↓
Certificate
 ↓
ADMIN
 ↓
Verification
```

---

# 33. ANTIGRAVITY WORKFLOW

All three members should use the same principle:

> **Ask Antigravity to plan first, implement second, test third.**

Do NOT simply say:

> “Build AR-SAFE completely.”

Instead:

```text
Analyze
 ↓
Create implementation plan
 ↓
Confirm architecture
 ↓
Implement small module
 ↓
Test
 ↓
Review
 ↓
Continue
```

---

# 34. MASTER CONTEXT FOR ALL THREE ANTIGRAVITY PROJECTS

Every developer should give Antigravity the same project context:

```text
PROJECT:
AR-SAFE

SIH:
26041

PURPOSE:
Smartphone-based AR safety-training platform for mining and manufacturing safety training.

CORE PRINCIPLE:
Use the real physical environment as the training environment.
AR overlays virtual hazards/events onto the real environment.

REAL:
Conveyor
Extinguisher
Exit
Floor
Machine
PPE

VIRTUAL:
Fire
Smoke
Sparks
Gas visualization
Danger zones
Warning indicators

CORE MODULES:
1. Fire & Explosion Response
2. Gas Leak / Confined Space Safety

TECHNOLOGY:
React Native
TypeScript
ViroReact
ARCore
Android
SQLite
Node.js
Express
PostgreSQL
React
Vite

CONSTRAINTS:
No Python.
No ML training.
No custom ML model.
No large dataset.
No Unity.
No Blender.
No VR headset.
No blockchain.
No unnecessary paid services.

ARCHITECTURE:
mobile/
backend/
admin/
shared/
docs/

DESIGN:
QR identifies the training station.
AR reference/tracking establishes local spatial context.
GPS is optional for site-level location and is NOT used for precise AR placement.
Offline-first.
Rule-based assessment.
Certificate represents training-module completion, not universal industrial qualification.

DO NOT redesign the architecture without explicit approval.
Do not invent API endpoints.
Do not invent data structures that conflict with shared contracts.
Do not add unnecessary technologies.
```

---

# 35. MEMBER 1 ANTIGRAVITY MASTER ROLE PROMPT

```text
You are Member 1 of the AR-SAFE SIH26041 development team.

Your responsibility is ONLY the mobile Android application and AR functionality.

Repository:
AR-SAFE

Your primary folder:
mobile/

You may use:
React Native
TypeScript
ViroReact
ARCore
SQLite
QR scanning

You are responsible for:

1. Worker authentication UI
2. Module selection
3. QR station scanning
4. AR reference initialization
5. AR camera
6. AR scene
7. Virtual fire
8. Virtual smoke
9. Danger zones
10. Worker interactions
11. Scenario state machine
12. Assessment
13. Score
14. Offline storage
15. Synchronization client
16. Certificate display
17. English/Hindi/Santali localization

Do NOT implement:
Backend
Admin dashboard
Database server
ML
Python
Unity
Blockchain

Follow the shared contracts.

Do not invent backend APIs.

FIRST TASK:
Before implementing the application, verify that React Native + ViroReact + ARCore can successfully run on a real Android device.

Create an implementation plan first.

Do not generate the whole application at once.

Implement one module at a time.

After each major change:
- run validation
- check Android build
- check TypeScript
- document what changed
- identify remaining issues

The AR proof is the first technical gate.
```

---

# 36. MEMBER 2 ANTIGRAVITY MASTER ROLE PROMPT

```text
You are Member 2 of the AR-SAFE SIH26041 development team.

Your responsibility is ONLY backend, database, APIs and synchronization.

Primary folder:
backend/

Technology:
Node.js
TypeScript
Express
PostgreSQL

Implement:

1. Authentication
2. Sites
3. Training stations
4. Modules
5. Scenario configuration
6. Workers
7. Training results
8. Synchronization
9. Certificates
10. Certificate verification

Follow the shared contracts.

Do NOT implement:
AR rendering
Mobile UI
Admin UI
Python
ML
Blockchain

Create REST APIs for both mobile and admin.

First:
1. Create database schema.
2. Create TypeScript models/types.
3. Create API contract.
4. Create seed data.
5. Implement endpoints.
6. Test endpoints.

Seed data should include:

Site:
Mine A

Station:
ARSAFE-CONVEYOR-001

Module:
Conveyor Fire Safety

Second station/module:
Gas Safety

Do not invent conflicting field names.

Document every API.
```

---

# 37. MEMBER 3 ANTIGRAVITY MASTER ROLE PROMPT

```text
You are Member 3 of the AR-SAFE SIH26041 development team.

Your responsibility is ONLY the web admin dashboard.

Primary folder:
admin/

Technology:
React
TypeScript
Vite

Implement:

1. Admin login
2. Dashboard
3. Site management
4. Station management
5. Module management
6. Scenario configuration
7. Worker management
8. Training results
9. Certificate management
10. Certificate verification

Consume the backend API.

Do NOT:
Create a separate database.
Implement AR.
Implement mobile functionality.
Implement ML.
Implement Python.
Invent APIs.

Use mock data only until the backend contract is ready.

Once the backend API is available, replace mock data with API calls.

The dashboard must be suitable for an SIH demonstration.
```

---

# 38. HOW TO COMMUNICATE BETWEEN MEMBERS

Each member should maintain a small integration document:

```text
docs/
├── API.md
├── DATA_MODEL.md
├── INTEGRATION.md
└── SETUP.md
```

Whenever an API changes:

```text
STOP
 ↓
Update API documentation
 ↓
Update shared types
 ↓
Notify other members
 ↓
Test integration
```

Never silently change an API.

---

# 39. ACCEPTANCE TESTS

The project should not be considered complete until these work.

## Test 1

Worker can log in.

## Test 2

Worker can scan station QR.

## Test 3

Correct station configuration loads.

## Test 4

AR reference initializes.

## Test 5

Virtual fire appears at configured location.

## Test 6

Worker can move around and view the scenario.

## Test 7

Hazard interaction works.

## Test 8

Assessment calculates deterministic score.

## Test 9

Gas scenario works.

## Test 10

Training works without internet.

## Test 11

Result is stored locally.

## Test 12

Result synchronizes when internet returns.

## Test 13

Admin can see result.

## Test 14

Certificate is generated.

## Test 15

Certificate QR verifies successfully.

## Test 16

Hindi content works.

## Test 17

Santali content renders correctly.

---

# 40. JURY DEMONSTRATION

The ideal demo should take approximately 3–5 minutes.

### Scene

A real physical training setup.

Use:

* Real conveyor/training object
* Real extinguisher
* Real exit/sign
* QR station marker

### Demo

1. Show the real environment.
2. Open AR-SAFE.
3. Select Fire Safety.
4. Scan QR.
5. Start AR.
6. Show virtual fire/smoke appearing near the real conveyor.
7. Move around the environment.
8. Identify the hazard.
9. Identify the extinguisher.
10. Identify the exit.
11. Make safety decisions.
12. Complete assessment.
13. Show score.
14. Show offline capability.
15. Synchronize result.
16. Show admin dashboard.
17. Show certificate.
18. Scan certificate QR.
19. Show verification.

The jury should immediately understand:

> “The real environment is being used as the training environment.”

---

# 41. JURY EXPLANATION

Use this explanation:

> “AR-SAFE does not replace the workplace with a virtual world. Instead, it uses the worker's actual physical training environment and augments it with hazards that are difficult or unsafe to reproduce physically, such as fire, smoke and gas leaks. The worker moves through the real environment using a smartphone camera, observes real equipment, makes safety decisions, and receives a rule-based assessment. Because mining environments may have unreliable connectivity, the core training works offline and synchronizes results when connectivity becomes available.”

---

# 42. WHY NOT AUTOMATIC MACHINE RECOGNITION?

Do NOT initially claim:

> “The AI recognizes every machine automatically.”

That would require:

* Dataset
* Computer vision
* Annotation
* Training
* Validation
* Testing across different machines/environments

Instead:

Use:

* Configured training stations
* QR
* Visual reference
* AR tracking
* Admin-created configuration

Machine recognition can be a future enhancement.

---

# 43. WHY NOT BLOCKCHAIN?

Blockchain is not necessary for the core problem.

A secure backend certificate record + unique certificate ID + verification QR is sufficient for the MVP.

Do not sacrifice AR reliability to add blockchain.

---

# 44. WHY NOT AI?

AI is not required for the core safety-training workflow.

The system's intelligence can come from:

* Configured scenarios
* Rule-based assessment
* Contextual AR
* Site-specific configuration
* Offline functionality

AI can be a future enhancement, but it should not create unnecessary technical risk.

---

# 45. LIMITATIONS TO PRESENT HONESTLY

AR-SAFE has these limitations:

1. AR tracking can be affected by lighting, dust and repetitive surfaces.
2. GPS may be unavailable underground.
3. AR alignment can degrade if tracking is lost.
4. Different Android devices have different AR capabilities.
5. Smartphone AR is less immersive than specialized headsets.
6. Each training station requires initial configuration.
7. AR cannot replace physical safety drills.
8. A smartphone cannot completely assess physical industrial competence.
9. Safety procedures must be validated by qualified safety professionals.
10. AR-SAFE should not be used as a live emergency-response system.

Being transparent about these limitations increases technical credibility.

---

# 46. FUTURE ENHANCEMENTS

Do not build these into the MVP unless there is enough time:

* Automatic machine recognition
* Computer vision
* AI Safety Coach
* Voice interaction
* Advanced analytics
* More industrial modules
* Digital twin
* Advanced spatial mapping
* Wearable integration
* Instructor live monitoring
* More sophisticated certification workflows

These can be shown as future scope.

---

# 47. FINAL PRODUCT DEFINITION

AR-SAFE is:

> **A configurable smartphone AR safety-training platform that uses the worker's actual physical training environment as the training environment and overlays controlled virtual hazards and safety events onto it. Workers physically move through the environment, identify hazards, interact with real and virtual safety elements, make safety decisions, complete assessments, and receive training records and completion certificates.**

---

# 48. FINAL END-TO-END SYSTEM

```text
                         AR-SAFE
                            │
             ┌──────────────┴──────────────┐
             │                             │
           ADMIN                         WORKER
             │                             │
             ▼                             ▼
        Admin Login                   Worker Login
             │                             │
             ▼                             ▼
        Register Site                Select Module
             │                             │
             ▼                             ▼
       Create Training Area            Scan QR
             │                             │
             ▼                             ▼
       Create Station              Identify Station
             │                             │
             ▼                             ▼
       Configure Scenario            Load Config
             │                             │
             ▼                             ▼
       Configure AR                  Start AR
             │                             │
             │                             ▼
             │                     AR Reference
             │                             │
             │                             ▼
             │                     Real Environment
             │                            +
             │                     Virtual Hazard
             │                             │
             │                             ▼
             │                    Worker Movement
             │                             │
             │                             ▼
             │                    Worker Decisions
             │                             │
             │                             ▼
             │                       Assessment
             │                             │
             │                             ▼
             │                      Score + Feedback
             │                             │
             │                             ▼
             │                       Local Storage
             │                             │
             │                      Internet available?
             │                        /             \
             │                       NO              YES
             │                       │                │
             │                   Keep local          Sync
             │                                        │
             │                                        ▼
             │                                    Backend
             │                                        │
             ▼                                        ▼
       Backend Database ←─────────────── Training Result
             │
             ├── Sites
             ├── Stations
             ├── Scenarios
             ├── Workers
             ├── Results
             └── Certificates
             │
             ▼
       Admin Dashboard
             │
             ├── Monitor Training
             ├── View Scores
             ├── View Workers
             └── Verify Certificates
```

---

# 49. DEVELOPMENT GOLDEN RULES

### Rule 1

Do not build everything at once.

### Rule 2

Prove AR first.

### Rule 3

Use one GitHub repository.

### Rule 4

Use shared contracts.

### Rule 5

Do not silently change APIs.

### Rule 6

Integrate continuously.

### Rule 7

Do not add technology just to make the project sound advanced.

### Rule 8

Prioritize reliable AR scenarios over flashy features.

### Rule 9

The MVP must work offline.

### Rule 10

Build exactly two excellent AR modules before expanding scope.

### Rule 11

Every feature must have a reason connected to safety training.

### Rule 12

Antigravity generates/assists with implementation; humans decide architecture and verify the output.

---

# 50. CURRENT NEXT ACTION

The project is now considered:

**SIH26041 — AR-SAFE — CONCEPT LOCKED**

Do NOT redesign the core concept.

The next task is:

> **Create AR-SAFE Master Specification v1 with the exact folder structure, database schema, API contracts, shared TypeScript interfaces, mobile screens, AR state machine, Fire module specification, Gas module specification, admin screens, offline-sync design, certificate design, Git workflow, and exact step-by-step Antigravity prompts for all three members.**

After that, start with:

**Member 1 → AR technical proof on a real Android device.**

Only after AR is proven should the team proceed into full feature development.
