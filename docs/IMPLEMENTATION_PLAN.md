# IMPLEMENTATION_PLAN.md

## 1. Document Purpose

This document defines the execution plan for building, testing, and deploying the professional portfolio of **Muhammad Azis Saputra**.

It translates the approved specifications into an ordered implementation workflow for **Google Antigravity Agent** and manual development.

This plan must be used together with:

```text
PROJECT_SPEC.md
docs/CONTENT_SPEC.md
docs/PROJECTS_INDEX.md
docs/ASSET_MANIFEST.md
docs/DESIGN_SYSTEM.md
docs/TECHNICAL_SPEC.md
docs/AGENT_RULES.md
docs/projects/*.md
```

The project must be built incrementally.

Do not skip directly to deployment or database integration before the earlier phases are stable.

---

# 2. Overall Delivery Strategy

The portfolio should be built in the following order:

```text
Phase 0   Documentation & Workspace Verification
Phase 1   React + Vite Initialization
Phase 2   Project Structure & Design Foundations
Phase 3   Routing & Global Layout
Phase 4   Homepage Core
Phase 5   Featured Projects
Phase 6   Project Case Study System
Phase 7   Experience / Research / About / Skills / Leadership
Phase 8   Asset Integration & Visual Refinement
Phase 9   Express Backend
Phase 10  PostgreSQL / Neon
Phase 11  Contact Form Integration
Phase 12  Accessibility / SEO / Performance
Phase 13  Testing & Quality Assurance
Phase 14  GitHub Repository & Remote Workflow
Phase 15  Vercel Deployment
Phase 16  Production Verification
Phase 17  Final Documentation & Interview Preparation
```

---

# 3. Execution Philosophy

The implementation should follow these principles:

```text
Small steps
↓
Test
↓
Commit
↓
Continue
```

Avoid:

```text
Generate entire website
↓
Hope everything works
```

Each phase should have:

- Scope
- Tasks
- Verification
- Exit criteria
- Suggested Git commit

---

# 4. Current Starting State

Already completed:

```text
[✓] Node.js installed
[✓] npm installed
[✓] Git installed
[✓] Git default branch = main
[✓] Git Credential Manager configured
[✓] Antigravity installed
[✓] Local repository initialized
[✓] PROJECT_SPEC.md prepared
[✓] CONTENT_SPEC.md prepared
[✓] PROJECTS_INDEX.md prepared
[✓] ASSET_MANIFEST.md prepared
[✓] DESIGN_SYSTEM.md prepared
[✓] TECHNICAL_SPEC.md prepared
[✓] AGENT_RULES.md prepared
```

Repository:

```text
D:\Projects\muhammad-azis-saputra-portfolio
```

Current implementation status:

```text
React: Not initialized
Express: Not initialized
PostgreSQL: Not connected
GitHub remote: Not created
Vercel deployment: Not created
```

This is the expected starting point.

---

# 5. Phase 0 — Documentation & Workspace Verification

## Goal

Ensure the repository contains the approved specification files and project source documents before coding begins.

---

## Tasks

Create / verify:

```text
PROJECT_SPEC.md

docs/
├── CONTENT_SPEC.md
├── PROJECTS_INDEX.md
├── ASSET_MANIFEST.md
├── DESIGN_SYSTEM.md
├── TECHNICAL_SPEC.md
├── AGENT_RULES.md
├── IMPLEMENTATION_PLAN.md
└── projects/
    ├── BROFIN.md
    ├── ETOMAC.md
    ├── GRAHA_RAYA.md
    ├── SIBUKU.md
    ├── SUPER_SOYBEAN.md
    └── BIKE_SHARING.md
```

Verify:

```text
git status
```

Review:

- Filenames
- Folder paths
- No accidental duplicate files
- No secret values
- No project documentation missing

---

## Verification

Expected:

```text
Repository readable
Specifications consistent
No source code yet required
```

---

## Suggested Commit

```text
docs: add portfolio specifications and project documentation
```

---

## Exit Criteria

```text
[ ] All required Markdown files are present
[ ] Project documentation is organized under docs/projects
[ ] Git shows only intended documentation changes
[ ] No secrets exist in tracked files
```

---

# 6. Phase 1 — React + Vite Initialization

## Goal

Create the minimal frontend application without styling or feature complexity.

---

## Tasks

From repository root:

```bash
npm create vite@latest . -- --template react
```

If Vite refuses because the directory is not empty, do not delete documentation.

Instead initialize in a temporary safe way or manually merge the generated Vite files into the existing repository.

The agent must preserve all existing specification files.

Install dependencies:

```bash
npm install
```

Install approved runtime dependencies:

```bash
npm install react-router-dom lucide-react
```

Do not install backend dependencies yet unless needed by the setup order.

---

## Remove Default Demo Content

Remove or replace:

- Vite logo demo
- React counter
- Default demo CSS
- Unused starter assets

Do not remove specification files.

---

## Initial Run

```bash
npm run dev
```

Verify local frontend:

```text
http://localhost:5173
```

---

## Verification

Check:

```text
[ ] Vite starts successfully
[ ] React page loads
[ ] No critical console errors
[ ] No starter counter remains
[ ] Documentation remains intact
```

---

## Suggested Commit

```text
chore: initialize React and Vite
```

---

## Exit Criteria

```text
[ ] React application runs locally
[ ] npm install completes successfully
[ ] package-lock.json exists
[ ] Initial build can be attempted
```

---

# 7. Phase 2 — Project Structure & Design Foundations

## Goal

Create the planned folder architecture and global design system before building pages.

---

## Tasks

Create core frontend structure:

```text
src/
├── app/
├── components/
├── sections/
├── pages/
├── content/
├── hooks/
├── services/
├── utils/
├── styles/
└── main.jsx
```

Create:

```text
src/styles/tokens.css
src/styles/reset.css
src/styles/globals.css
src/styles/utilities.css
```

Implement approved tokens from:

```text
docs/DESIGN_SYSTEM.md
```

Include:

- Colors
- Spacing
- Typography
- Radius
- Shadows
- Containers
- Transitions

---

## Base CSS Requirements

Implement:

```text
box-sizing
body background
body typography
link reset
button reset
image defaults
container utility
focus styles
reduced-motion behavior
```

---

## Verification

Test:

- Body typography
- Background
- Focus state
- Container width
- Mobile padding

---

## Suggested Commit

```text
feat: add global design tokens and base styles
```

---

## Exit Criteria

```text
[ ] Design tokens exist
[ ] Global styles reflect DESIGN_SYSTEM.md
[ ] No random styling values dominate
[ ] Mobile base layout works
```

---

# 8. Phase 3 — Routing & Global Layout

## Goal

Establish application routing and reusable site shell.

---

## Tasks

Install / configure:

```text
React Router
```

Create routes:

```text
/
/projects
/projects/:slug
*
```

Create:

```text
HomePage.jsx
ProjectsPage.jsx
ProjectDetailPage.jsx
NotFoundPage.jsx
```

Create layout components:

```text
SiteHeader
MobileMenu
SiteFooter
PageShell
Container
```

---

## Navigation

Implement:

```text
Home
About
Experience
Projects
Skills
Contact
Resume
```

Rules:

- Mobile-first
- Conventional navigation
- No chat UI
- Glass navbar
- Keyboard accessible
- Escape-to-close mobile menu if applicable
- Focus management when practical

---

## Verification

Test routes:

```text
/
 /projects
 /projects/sibuku
 /unknown
```

At this stage project detail content may still be temporary.

---

## Suggested Commit

```text
feat: add application routing and responsive site layout
```

---

## Exit Criteria

```text
[ ] Navbar works
[ ] Mobile menu works
[ ] React Router works
[ ] 404 route works
[ ] Resume CTA placeholder exists
```

---

# 9. Phase 4 — Homepage Core

## Goal

Implement the main professional identity and page hierarchy.

---

## Build in This Order

```text
1. Hero
2. Selected Highlights
3. Section shell components
4. Footer
```

Do not attempt all homepage sections at once.

---

# 10. Phase 4A — Hero

## Tasks

Build:

```text
HeroSection
```

Use content from:

```text
CONTENT_SPEC.md
```

Include:

- Eyebrow
- Name
- Headline
- Supporting copy
- View My Work CTA
- Download Resume CTA
- Real portrait placeholder / actual image
- Optional small location / focus metadata

---

## Visual Direction

Use:

- Real semi-formal portrait
- Editorial layout
- Precision Glass accents
- Strong typography
- Large whitespace

Do not use:

- Avatar
- Memoji
- Chat input
- Quick-question buttons

---

## Responsive Verification

Test:

```text
360px
390px
768px
1024px
1440px
```

---

## Suggested Commit

```text
feat: build responsive portfolio hero
```

---

## Exit Criteria

```text
[ ] Professional identity is clear
[ ] Primary CTA works
[ ] Resume CTA points to expected path
[ ] Portrait remains natural
[ ] Mobile layout is clean
```

---

# 11. Phase 4B — Selected Highlights

## Goal

Introduce concise credibility evidence.

---

## Candidate Highlights

Use maximum 3–4:

```text
3.86 / 4.00 GPA
Scopus-Indexed Publication
Top 50 Bangkit Elevator Pitch Team
92.01% mAP@0.5:0.95
```

Use exact supported wording.

---

## Layout

Desktop:

```text
4 columns
```

Tablet:

```text
2 × 2
```

Mobile:

```text
2 × 2 or stacked depending width
```

---

## Suggested Commit

```text
feat: add selected professional highlights
```

---

# 12. Phase 5 — Featured Projects

## Goal

Build the strongest evidence section of the homepage.

---

## First Create Project Content Model

Create:

```text
src/content/projects/index.js
```

Then individual project content files:

```text
super-soybean.js
graha-raya.js
sibuku.js
brofin.js
bike-sharing.js
etomac.js
```

Use only approved data.

---

## Featured Order

```text
1. Super Soybean
2. Graha Raya Consultant
3. SIBUKU
4. Brofin
```

---

## Tasks

Create components such as:

```text
FeaturedProject
ProjectMeta
TechTag
MetricHighlight
ProjectImage
```

Homepage featured projects should use:

```text
Large visual + text
alternating desktop layout
stacked mobile layout
```

---

## Secondary Projects

Add:

```text
Bike-Sharing
Etomac
```

as smaller cards if included on homepage.

---

## Verification

Check:

- Correct order
- Correct category
- Correct role
- Correct metric
- Correct CTA
- No unavailable repository link shown

---

## Suggested Commit

```text
feat: add featured and secondary project previews
```

---

## Exit Criteria

```text
[ ] All six indexed projects represented correctly
[ ] Four featured projects visually emphasized
[ ] No fabricated project data
[ ] Links route to /projects/:slug
```

---

# 13. Phase 6 — Project Case Study System

## Goal

Create reusable project detail pages without duplicating page structure manually.

---

## Tasks

Build:

```text
ProjectDetailPage
ProjectHero
ProjectOverview
ProjectSection
ProjectGallery
ProjectArchitecture
ProjectTechStack
ProjectOutcome
ProjectNavigation
```

Use project registry to resolve:

```text
slug
```

---

## Project-Specific Section Logic

Do not force identical sections.

### Super Soybean

Priority:

```text
Overview
Problem
Solution
My Role
Model Development
Model Performance
Architecture
Workflow
Challenges
Outcome
Learnings
```

### Graha Raya

Priority:

```text
Overview
Problem
Solution
Roles
RBAC
Workflow
Database
Architecture
Challenges
Outcome
Learnings
```

### SIBUKU

Priority:

```text
Overview
Problem
Solution
Inventory
Transactions
Reporting
Database
Architecture
Challenges
Outcome
Learnings
```

### Brofin

Priority:

```text
Overview
Problem
Solution
My Role
ML Workflow
Product Context
Architecture
Trade-offs
Challenges
Outcome
Learnings
```

### Bike-Sharing

Priority:

```text
Business Objective
Dataset
Data Preparation
EDA
Seasonal Analysis
Hourly Analysis
Dashboard
Insights
Outcome
```

### Etomac

Priority:

```text
Overview
Problem
Solution
E-Commerce Workflow
Database
Architecture
Challenges
Outcome
Learnings
```

---

## Project Navigation

Add:

```text
Previous Project
Next Project
Back to Projects
```

Derived from central registry.

---

## Suggested Commit

```text
feat: add reusable project case study pages
```

---

## Exit Criteria

```text
[ ] All project routes render
[ ] Unknown slug handled safely
[ ] Relevant sections vary by project
[ ] Previous / next navigation works
[ ] Direct project route works locally
```

---

# 14. Phase 7 — Remaining Homepage Sections

Build one section at a time.

Recommended order:

```text
1. Experience
2. Research & Publication
3. About
4. Skills
5. Leadership
6. Contact UI shell
```

---

# 15. Phase 7A — Experience

Use:

```text
Plant Biotechnology Laboratory
Self-Employed
Bangkit Academy
IOPRI
```

Create an editorial timeline.

Do not copy every CV bullet.

Use concise evidence.

---

## Suggested Commit

```text
feat: add professional experience timeline
```

---

# 16. Phase 7B — Research & Publication

Implement:

- Research context
- Data in Brief mention
- Publication CTA only if verified link exists
- Research project connection

Do not invent DOI.

---

## Suggested Commit

```text
feat: add research and publication section
```

---

# 17. Phase 7C — About

Use approved `CONTENT_SPEC.md` copy.

Keep:

```text
2–3 short paragraphs
```

Optional:

- Compact education details
- Location

Do not repeat the full Hero copy.

---

## Suggested Commit

```text
feat: add about section
```

---

# 18. Phase 7D — Skills

Groups:

```text
Software Engineering
Data & Analytics
Artificial Intelligence
Professional Skills
```

Optional:

```text
Currently Exploring
```

Use:

- Text
- Small tech logos
- No percentages
- No progress bars

---

## Suggested Commit

```text
feat: add categorized skills section
```

---

# 19. Phase 7E — Leadership

Priority:

```text
SGC USU — Head of Innovate Hub Division
MPMF Fasilkom-TI — Chairperson
```

Use concise evidence.

Do not over-expand organizational history.

---

## Suggested Commit

```text
feat: add leadership experience section
```

---

# 20. Phase 7F — Contact UI Shell

At this stage:

- Build the form UI
- Add frontend validation shape
- Do not connect to backend yet

Fields:

```text
Name
Email
Subject
Message
```

States:

```text
idle
submitting
success
error
```

Backend integration happens later.

---

## Suggested Commit

```text
feat: add accessible contact form interface
```

---

# 21. Phase 8 — Asset Integration & Visual Refinement

## Goal

Replace development placeholders with real assets.

---

## Tasks

Organize:

```text
public/assets/
```

according to:

```text
ASSET_MANIFEST.md
```

Priority:

```text
P0 assets first
```

---

## P0 Personal

```text
Semi-formal portrait
Resume PDF
Favicon
OG image
```

---

## P0 Featured Project Assets

### Super Soybean

```text
Cover
Main screenshots
Model result
Architecture
Workflow
```

### Graha Raya

```text
Cover
Role dashboards
Progress approval
Database
Architecture
Workflow
```

### SIBUKU

```text
Cover
Inventory
Transaction
Reporting
Database
Architecture
```

### Brofin

```text
Cover
App screenshots
ML architecture
System architecture
Workflow
```

---

## Tech Logos

Prepare and integrate only relevant logos.

Avoid giant logo wall.

---

## Verification

Check:

- No broken image
- Correct alt text
- No sensitive data in screenshot
- Consistent image crop
- Reasonable file size
- Correct case-sensitive paths

---

## Suggested Commit

```text
feat: integrate portfolio assets and project visuals
```

---

# 22. Phase 9 — Express Backend

## Goal

Introduce the backend separately before PostgreSQL.

---

## Install Dependencies

```bash
npm install express dotenv
```

If not yet installed.

Create:

```text
server/src/app.js
server/src/server.js
server/src/routes/
server/src/controllers/
server/src/services/
server/src/validators/
server/src/middleware/
```

---

## Implement First Endpoint

```text
GET /api/health
```

Expected:

```json
{
  "ok": true,
  "service": "portfolio-api"
}
```

---

## Configure Local Port

Recommended:

```text
3000
```

---

## Add npm Script

```text
dev:server
```

Then run in second Antigravity terminal.

---

## Suggested Commit

```text
feat: initialize Express API and health endpoint
```

---

## Exit Criteria

```text
[ ] Express starts locally
[ ] /api/health returns 200
[ ] No PostgreSQL dependency yet
[ ] Safe error middleware exists
```

---

# 23. Phase 9B — Vite API Proxy

## Goal

Use the same API path locally and in production.

Configure:

```text
/api → http://localhost:3000
```

Frontend test:

```text
http://localhost:5173/api/health
```

Expected:

```text
200
```

---

## Suggested Commit

```text
chore: configure Vite API development proxy
```

---

# 24. Phase 10 — Contact Validation Backend

## Goal

Implement API behavior before database connection.

---

## Create

```text
POST /api/contact
```

Validate:

```text
name
email
subject
message
```

Use rules from:

```text
TECHNICAL_SPEC.md
```

Initially, controller may return a temporary validated success without database insertion.

This isolates validation from database setup.

---

## Test

```text
Valid request
Missing name
Invalid email
Short message
Oversized fields
```

---

## Suggested Commit

```text
feat: add contact API validation
```

---

# 25. Phase 11 — PostgreSQL / Neon

## Goal

Add real PostgreSQL usage after the API works.

---

## Setup Order

```text
1. Create Neon account / project
2. Create database
3. Obtain pooled connection string
4. Create local .env
5. Add DATABASE_URL
6. Create database/schema.sql
7. Execute schema
8. Test connection
```

---

## Database Table

Create:

```text
contact_messages
```

using the approved schema from:

```text
TECHNICAL_SPEC.md
```

---

## Install Driver

```bash
npm install pg
```

---

## Create

```text
server/src/db/pool.js
```

Use:

```text
pg.Pool
```

Do not create a new connection pool per request.

---

## Suggested Commit

```text
feat: add PostgreSQL contact message storage
```

---

## Exit Criteria

```text
[ ] DATABASE_URL works locally
[ ] schema exists
[ ] table exists
[ ] parameterized insert works
[ ] valid message stored
[ ] DB error returns safe response
```

---

# 26. Phase 12 — Contact Frontend Integration

## Goal

Connect React contact form to Express + PostgreSQL.

---

## Create

```text
src/services/contactApi.js
```

Flow:

```text
React Form
↓
POST /api/contact
↓
Express validation
↓
PostgreSQL insert
↓
201 response
↓
Success UI
```

---

## Frontend Behavior

Required:

```text
Loading state
Disabled submit while sending
Success feedback
Error feedback
Preserve values on failure
Clear on success if desired
```

---

## Suggested Commit

```text
feat: connect contact form to Express and PostgreSQL
```

---

# 27. Phase 13 — Accessibility

## Goal

Audit the complete application.

---

## Checklist

```text
[ ] Semantic landmarks
[ ] Heading order
[ ] Keyboard navigation
[ ] Mobile menu keyboard support
[ ] Focus visible
[ ] Buttons have accessible labels
[ ] Form labels exist
[ ] Error messages are associated
[ ] Images have alt text
[ ] Decorative images have empty alt
[ ] Contrast is sufficient
[ ] 44px touch targets
[ ] Reduced motion supported
```

---

## Suggested Commit

```text
fix: improve portfolio accessibility
```

---

# 28. Phase 14 — SEO

## Implement

Homepage:

```text
Title
Meta description
OG title
OG description
OG image
Canonical URL when known
```

Project pages:

```text
Unique title
Unique description
```

Optional:

```text
Person JSON-LD
```

only with verified information.

---

## Suggested Commit

```text
feat: add portfolio SEO metadata
```

---

# 29. Phase 15 — Performance Optimization

## Tasks

Review:

- Hero portrait
- Project covers
- Screenshots
- Tech logos
- JS bundle
- Animation behavior

Optimize:

```text
WebP
SVG
lazy loading
dimensions
route-level lazy loading if useful
```

---

## Avoid

```text
Over-compressing diagrams
Huge image files
Unnecessary libraries
```

---

## Suggested Commit

```text
perf: optimize images and frontend loading
```

---

# 30. Phase 16 — Comprehensive Local QA

## Goal

Do not deploy until local behavior is stable.

---

## Test Viewports

```text
360px
390px
480px
768px
1024px
1280px
1440px
```

---

## Browsers

At minimum:

```text
Chrome / Edge
```

If possible:

```text
Firefox
```

Production Safari testing may occur later if available.

---

## Page Tests

```text
/
 /projects
 /projects/super-soybean
 /projects/graha-raya-project-management
 /projects/sibuku
 /projects/brofin
 /projects/bike-sharing-dashboard
 /projects/etomac
 /unknown
```

---

## Functional Tests

```text
Navbar
Mobile menu
Anchor navigation
Project links
Previous / next project
Resume
External links
Contact validation
Contact success
Contact error
404
```

---

## Suggested Commit

```text
fix: resolve pre-deployment quality issues
```

---

# 31. Phase 17 — Production Build Verification

Run:

```bash
npm run build
```

Expected:

```text
dist/
```

Then:

```bash
npm run preview
```

Test production-like frontend.

---

## Exit Criteria

```text
[ ] Build succeeds
[ ] No major warnings
[ ] Preview works
[ ] Assets resolve
[ ] Project routes are understood for deployment
```

---

# 32. Phase 18 — GitHub Repository

## Goal

Connect local Git repository to a professional GitHub remote.

---

## Recommended Repository Name

```text
muhammad-azis-saputra-portfolio
```

Recommended visibility:

```text
Public
```

if the user wants the code visible to recruiters.

When creating the GitHub repository:

Do **not** initialize with:

```text
README
.gitignore
license
```

if the local repository already contains those files.

This avoids merge conflicts.

---

## Connect Remote

Conceptual commands:

```bash
git remote add origin <verified-repository-url>
git push -u origin main
```

Git Credential Manager should handle browser authentication.

---

## Verify

```bash
git remote -v
git status
```

---

## Suggested Commit Before First Push

```text
chore: prepare portfolio repository for remote
```

---

# 33. Phase 19 — README

README should be written after implementation is sufficiently real.

Include:

```text
Project overview
Screenshot
Tech stack
Architecture
Local setup
Environment variables
Available routes
API
Database
Deployment
Project structure
Credits
```

Do not let README claim features that are unfinished.

---

## Suggested Commit

```text
docs: add portfolio repository README
```

---

# 34. Phase 20 — Vercel Initial Deployment

## Goal

Deploy the application from GitHub.

---

## Workflow

```text
GitHub
↓
Vercel
↓
Import repository
↓
Configure build
↓
Deploy
```

---

## Expected Frontend Build

```text
npm run build
```

Output:

```text
dist
```

---

## Environment Variables

Add:

```text
DATABASE_URL
NODE_ENV=production
```

through Vercel settings.

Do not commit production secrets.

---

# 35. Phase 20B — Express on Vercel

Use:

```text
api/index.js
```

to expose the same Express application.

Do not create a second API implementation.

Verify:

```text
/api/health
```

in production.

---

# 36. Phase 20C — SPA Route Fallback

Direct route refresh must work:

```text
/projects/sibuku
```

If Vercel returns 404 on refresh, configure SPA rewrite/fallback appropriately.

Do not consider deployment complete until direct URLs work.

---

# 37. Production Smoke Test

Verify:

```text
[ ] Homepage
[ ] Projects page
[ ] Each project route
[ ] Direct page refresh
[ ] Resume
[ ] Portrait
[ ] Project screenshots
[ ] Favicon
[ ] Open Graph metadata
[ ] /api/health
[ ] Contact form
[ ] PostgreSQL insert
[ ] Mobile menu
[ ] External links
```

---

# 38. Database Production Verification

Submit one controlled test contact message.

Then verify in Neon:

```sql
SELECT
    id,
    name,
    email,
    subject,
    created_at
FROM contact_messages
ORDER BY created_at DESC
LIMIT 5;
```

Remove test data if desired.

---

# 39. Security Production Verification

Verify:

```text
[ ] DATABASE_URL absent from browser source
[ ] .env absent from GitHub
[ ] No stack trace shown to visitor
[ ] Contact input validated
[ ] Parameterized SQL used
[ ] No public contact-message read API
[ ] Screenshots contain no secrets
```

---

# 40. Phase 21 — Visual Production QA

Review on actual deployed URL.

Check:

- Typography rendering
- Glass effect
- Hero portrait
- Project screenshots
- Mobile layout
- Long project diagrams
- Form spacing
- Footer
- Project navigation

Real deployment can expose differences from local rendering.

---

# 41. Phase 22 — Performance / Lighthouse Review

Run a browser audit.

Focus on:

```text
Performance
Accessibility
Best Practices
SEO
```

Do not optimize only for a perfect score.

Fix meaningful issues such as:

- Huge images
- Missing labels
- Layout shift
- Missing metadata
- Blocking resources
- Contrast problems

---

# 42. Phase 23 — Final Content Audit

Compare production against:

```text
CONTENT_SPEC.md
PROJECTS_INDEX.md
docs/projects/*.md
```

Verify:

```text
[ ] Names correct
[ ] Dates correct
[ ] Roles correct
[ ] Team sizes correct
[ ] Metrics correct
[ ] Project statuses correct
[ ] Links verified
[ ] No invented facts
```

---

# 43. Phase 24 — Final Documentation Sync

Update:

```text
PROJECT_SPEC.md
CONTENT_SPEC.md
PROJECTS_INDEX.md
ASSET_MANIFEST.md
DESIGN_SYSTEM.md
TECHNICAL_SPEC.md
AGENT_RULES.md
IMPLEMENTATION_PLAN.md
README.md
```

only where actual implementation decisions changed.

Do not rewrite documentation unnecessarily.

---

# 44. Phase 25 — Interview Preparation

The portfolio must not only work; the owner should be able to explain it.

Prepare explanations for:

```text
Why React?
Why Vite?
Why Express?
Why PostgreSQL?
Why Neon?
Why Vercel?
Why project content is not stored in database?
What is REST API?
What happens when the contact form is submitted?
What is parameterized SQL?
What is DATABASE_URL?
What is Vite proxy?
What is Git?
What is GitHub?
What happens during Vercel deployment?
```

---

# 45. Architecture Explanation Practice

Expected concise explanation:

> The frontend is built with React and Vite. Most portfolio content is stored locally because it is static professional content and does not need a database. The contact form sends a POST request to an Express API. Express validates the input and inserts the message into PostgreSQL hosted on Neon using a parameterized query. Locally, Vite proxies `/api` requests to Express, while production is deployed through Vercel. Git tracks the code locally and GitHub serves as the remote repository connected to Vercel.

---

# 46. Suggested Milestone Commit History

A clean history may look like:

```text
docs: add portfolio specifications and project documentation

chore: initialize React and Vite

feat: add global design tokens and base styles

feat: add application routing and responsive site layout

feat: build responsive portfolio hero

feat: add selected professional highlights

feat: add featured and secondary project previews

feat: add reusable project case study pages

feat: add professional experience timeline

feat: add research and publication section

feat: add about section

feat: add categorized skills section

feat: add leadership experience section

feat: add accessible contact form interface

feat: integrate portfolio assets and project visuals

feat: initialize Express API and health endpoint

chore: configure Vite API development proxy

feat: add contact API validation

feat: add PostgreSQL contact message storage

feat: connect contact form to Express and PostgreSQL

fix: improve portfolio accessibility

feat: add portfolio SEO metadata

perf: optimize images and frontend loading

fix: resolve pre-deployment quality issues

docs: add portfolio repository README

fix: configure Vercel production routing
```

Exact history may differ.

Do not create meaningless commits solely to match this list.

---

# 47. Agent Work Unit Rule

Antigravity should receive manageable tasks.

Good task:

```text
Implement Phase 4A Hero according to DESIGN_SYSTEM.md and CONTENT_SPEC.md.
Do not modify other homepage sections.
```

Bad task:

```text
Build my whole portfolio.
```

---

# 48. Recommended Agent Prompt Pattern

Use:

```text
Read:
- PROJECT_SPEC.md
- docs/DESIGN_SYSTEM.md
- docs/CONTENT_SPEC.md
- docs/TECHNICAL_SPEC.md
- docs/AGENT_RULES.md
- docs/IMPLEMENTATION_PLAN.md

Implement only:
[PHASE / TASK]

Constraints:
- Do not change stack
- Do not add unapproved dependencies
- Do not modify unrelated sections
- Keep mobile-first
- Report files changed and tests performed
```

This keeps agent behavior controlled.

---

# 49. Phase Exit Rule

Do not move to the next major phase if the current phase has:

```text
Build error
Broken mobile layout
Major console error
Broken route
Unresolved secret leak
```

Fix foundational problems first.

---

# 50. Rollback Rule

If a phase introduces a major regression:

```text
1. Identify changed files
2. Determine root cause
3. Revert only problematic work
4. Preserve working unrelated changes
5. Retest
```

Do not restart the entire portfolio.

---

# 51. Dependency Change Rule

If a new dependency is required during implementation:

Document:

```text
Package
Reason
Where used
Why existing tools were insufficient
```

Then ensure it does not violate:

```text
AGENT_RULES.md
```

---

# 52. Design Review Checkpoints

Perform explicit visual reviews after:

```text
Hero
Featured project block
Full homepage
First project detail
Contact panel
```

Do not wait until the whole site is complete before reviewing design quality.

---

# 53. Content Review Checkpoints

Review content after:

```text
Homepage copy
Project registry implementation
Experience
Research
Each case study
```

Correct factual errors early.

---

# 54. Asset Review Checkpoints

Before production verify:

```text
Portrait
Resume
Project covers
Project screenshots
Architecture diagrams
Database diagrams
Tech logos
Favicon
OG image
```

---

# 55. Mobile Review Checkpoints

At minimum after each major visual phase test:

```text
360px
390px
```

Do not postpone mobile testing until the end.

---

# 56. API Review Checkpoints

Backend should be reviewed in stages:

```text
Health endpoint
↓
Validation
↓
Database connection
↓
Insert
↓
Frontend integration
↓
Production
```

This isolates problems.

---

# 57. Database Review Checkpoints

Before production:

```text
[ ] Correct table name
[ ] Correct field names
[ ] Correct constraints
[ ] Parameterized queries
[ ] Correct timezone handling
[ ] No unnecessary table
```

---

# 58. Git Review Checkpoints

Regularly run:

```bash
git status
git diff
```

before commits.

Do not accidentally commit:

```text
.env
node_modules
dist
private files
```

---

# 59. Definition of MVP

The MVP includes:

```text
Professional homepage
Real portrait
Featured projects
All indexed project pages
Experience
Research
About
Skills
Leadership
Contact form
Express API
PostgreSQL
Responsive design
Accessibility basics
SEO basics
GitHub
Vercel deployment
```

---

# 60. Non-MVP Features

Do not delay launch for:

```text
Dark mode
AI chatbot
CMS
Blog
Admin dashboard
Authentication
Advanced analytics
Email automation
Complex animation
Custom domain
Search
SIMAGANG standalone case study
```

These may be added after MVP.

---

# 61. MVP Definition of Done

The project is ready for initial public use when:

```text
[ ] Professional identity is clear
[ ] Hero is polished
[ ] Real portrait is used
[ ] Featured projects show evidence
[ ] Project detail routes work
[ ] All six indexed projects are represented
[ ] Experience is accurate
[ ] Research section is accurate
[ ] Skills are grouped
[ ] Leadership is concise
[ ] Resume works
[ ] Contact form works
[ ] Express validation works
[ ] PostgreSQL receives messages
[ ] Database secret is protected
[ ] Mobile layout works
[ ] Keyboard navigation works
[ ] Reduced motion is respected
[ ] Images are optimized
[ ] SEO metadata exists
[ ] Production build succeeds
[ ] GitHub repository exists
[ ] Vercel deployment works
[ ] Direct project route refresh works
[ ] No major console errors
[ ] No fabricated content exists
```

---

# 62. Final Release Checklist

## Code

```text
[ ] npm install clean
[ ] npm run build
[ ] no critical lint issue
[ ] no dead debug code
```

## Git

```text
[ ] git status clean
[ ] .env ignored
[ ] remote correct
[ ] latest main pushed
```

## Content

```text
[ ] Resume latest
[ ] LinkedIn correct
[ ] GitHub verified
[ ] Publication link verified if used
[ ] Project metrics verified
```

## Assets

```text
[ ] No broken image
[ ] No sensitive screenshot
[ ] Favicon works
[ ] OG image works
```

## Backend

```text
[ ] /api/health
[ ] /api/contact
[ ] safe error handling
[ ] parameterized SQL
```

## Database

```text
[ ] Neon connection
[ ] contact table
[ ] production insert
```

## UX

```text
[ ] 360px
[ ] 390px
[ ] 768px
[ ] 1024px
[ ] 1440px
[ ] keyboard
[ ] form validation
```

## Deployment

```text
[ ] Production homepage
[ ] Project route direct refresh
[ ] Resume
[ ] Contact
[ ] API
```

---

# 63. Post-Launch Backlog

After the MVP is stable, potential improvements may be evaluated individually.

Suggested future backlog:

```text
P1
- Custom domain
- Dark mode
- Cloudflare Turnstile
- Email notification for contact messages
- Additional project screenshots
- SIMAGANG case study

P2
- Project search/filter refinement
- More automated tests
- Analytics
- Blog / notes

P3
- CMS
- Admin dashboard
- AI portfolio assistant
```

No future feature is automatically approved.

---

# 64. Current Next Action

The specifications are now sufficiently complete to begin implementation.

The immediate next action should be:

```text
PHASE 0
Place all approved Markdown files into the local repository
and organize docs/projects.
```

Then:

```text
PHASE 1
Initialize React + Vite without deleting existing documentation.
```

Do not begin PostgreSQL or Vercel setup yet.

---

# 65. Document Status

**Document:** `IMPLEMENTATION_PLAN.md`  
**Project:** Muhammad Azis Saputra Professional Portfolio  
**Status:** Initial Approved Implementation Plan  
**Execution Style:** Incremental, test-driven by phase, controlled AI assistance  
**Primary Agent:** Google Antigravity Agent  
**Current Next Phase:** Phase 0 — Documentation & Workspace Verification
