# AGENT_RULES.md

## 1. Document Purpose

This document defines the mandatory rules for any AI coding agent, including **Google Antigravity Agent**, working on the professional portfolio of **Muhammad Azis Saputra**.

The purpose of this file is to prevent uncontrolled architectural decisions, fabricated content, unnecessary dependencies, design drift, unsafe changes, and implementation choices that the project owner cannot explain during a technical interview.

This file is binding for all AI-assisted implementation work.

The agent must treat the following documents as the project source of truth:

```text
PROJECT_SPEC.md
docs/CONTENT_SPEC.md
docs/PROJECTS_INDEX.md
docs/ASSET_MANIFEST.md
docs/DESIGN_SYSTEM.md
docs/TECHNICAL_SPEC.md
docs/IMPLEMENTATION_PLAN.md
docs/projects/*.md
```

If a requested change conflicts with these files, the agent must not silently override the specification.

---

# 2. Core Rule

The most important project rule is:

> **Do not invent. Do not over-engineer. Do not silently change the approved plan.**

The implementation must remain:

- Understandable
- Maintainable
- Professional
- Evidence-based
- Mobile-first
- Secure
- Consistent with the approved specifications

---

# 3. Required Reading Order

Before making any meaningful implementation change, the agent should read the relevant specification.

Recommended order:

```text
1. PROJECT_SPEC.md
2. docs/CONTENT_SPEC.md
3. docs/PROJECTS_INDEX.md
4. docs/ASSET_MANIFEST.md
5. docs/DESIGN_SYSTEM.md
6. docs/TECHNICAL_SPEC.md
7. docs/AGENT_RULES.md
8. docs/IMPLEMENTATION_PLAN.md
9. Relevant docs/projects/*.md file
```

For a narrow task, the agent does not need to reread every file from scratch, but it must consult the relevant source.

---

# 4. Source-of-Truth Priority

If multiple documents contain overlapping guidance, use this precedence:

```text
1. Explicit latest user instruction
2. PROJECT_SPEC.md
3. TECHNICAL_SPEC.md
4. DESIGN_SYSTEM.md
5. CONTENT_SPEC.md
6. PROJECTS_INDEX.md
7. ASSET_MANIFEST.md
8. IMPLEMENTATION_PLAN.md
9. Individual project documentation
```

If a real contradiction exists, the agent must identify it and request clarification instead of guessing.

---

# 5. Content Integrity Rules

The agent must never fabricate personal or project information.

Do not invent:

- Job titles
- Project roles
- Dates
- Team sizes
- Technical metrics
- Model results
- Deployment status
- Client names
- Business outcomes
- User counts
- Revenue
- Awards
- Publications
- Certifications
- Technologies
- Research findings
- Repository links
- Live demo links
- Company names
- Testimonials
- Quotes
- Contact details

If a value is unknown, omit it or leave it clearly marked as:

```text
TBD
```

Do not replace missing data with assumptions.

---

# 6. Project Content Rules

All project-specific claims must come from:

```text
docs/projects/
```

The current indexed project documents are expected to include:

```text
BROFIN.md
ETOMAC.md
GRAHA_RAYA.md
SIBUKU.md
SUPER_SOYBEAN.md
BIKE_SHARING.md
```

The agent must preserve the documented scope of each project.

Example:

If a project is documented as:

```text
Completed on Local
```

do not rewrite it as:

```text
Production-ready deployed platform
```

unless a verified deployment is later added.

---

# 7. Resume and Personal Content Rules

Personal and professional copy must follow:

```text
docs/CONTENT_SPEC.md
```

Do not rewrite the user's professional positioning into a completely different identity.

Approved positioning:

> **Information Technology Graduate building practical solutions across Software, Data & AI.**

The site may refine wording for layout, but it must preserve the meaning.

---

# 8. No Fake Expertise

The agent must not present technologies as established expertise unless supported.

Do not create:

```text
Expert in PostgreSQL
Advanced React Developer
Senior Backend Engineer
```

unless explicitly supported by approved content.

Technologies being learned should appear under:

```text
Currently Exploring
```

when appropriate.

---

# 9. No Unsupported Skill Ratings

Never create:

```text
Python 95%
React 90%
Leadership 100%
```

Do not use:

- Skill progress bars
- Star ratings
- Percentage proficiency
- Expert / advanced / beginner badges

unless the user explicitly requests a defined assessment system.

---

# 10. Design Identity Rules

The website must use a **real semi-formal portrait** of Muhammad Azis Saputra.

Do not:

- Replace the portrait with an avatar
- Generate a Memoji
- Generate a cartoon face
- Generate an AI illustration of the user
- Modify facial identity without explicit instruction

The site must not imitate the reference portfolio's avatar-based identity.

---

# 11. No Chat-First Interface

The portfolio is not an LLM chatbot interface.

Do not add:

- "Ask me anything" box
- Chat navigation
- Quick question buttons
- Conversational response panels
- AI assistant floating button
- Agent persona
- Chat-generated project navigation

unless explicitly approved as a future feature.

Primary navigation must remain conventional and professional.

---

# 12. Approved Visual Direction

The agent must follow:

```text
docs/DESIGN_SYSTEM.md
```

Approved direction:

```text
Minimal modern
Light-first
Apple-inspired principles
Precision Glass
Editorial project presentation
Real photography
Real project screenshots
Subtle motion
Large whitespace
```

Do not reinterpret this as:

```text
Cyberpunk
Neon developer dashboard
Gaming UI
Crypto landing page
Full glassmorphism interface
```

---

# 13. Glass Usage Rules

Glass effects are allowed only as a supporting material.

Suitable uses:

- Navbar
- Floating utility controls
- Modal
- Lightbox
- Small metadata surface
- Mobile menu

Do not place every section inside translucent cards.

Main content should remain largely solid and readable.

---

# 14. Color Rules

Use the approved color tokens from:

```text
DESIGN_SYSTEM.md
```

Do not introduce random new accent colors.

Do not use project-specific colors aggressively unless defined.

Do not silently replace the primary blue accent.

---

# 15. Typography Rules

Use the approved system-first font stack.

Do not add:

- Google Fonts
- Premium fonts
- Multiple typefaces
- Decorative fonts

without approval.

Maintain:

- Strong hierarchy
- Large display typography
- Readable body size
- Accessible line height

---

# 16. Spacing Rules

Use the approved spacing tokens.

Do not randomly reduce whitespace because the page "looks empty."

Whitespace is intentional and part of the visual identity.

Avoid inconsistent values like:

```text
13px
19px
27px
43px
```

when an existing spacing token is appropriate.

---

# 17. Responsive Rules

The project is **mobile-first**.

The agent must:

1. Implement base styles for mobile
2. Add progressive desktop enhancements
3. Test 360–390px widths
4. Ensure touch targets remain usable
5. Reflow project layouts correctly

Do not build desktop first and patch mobile afterward.

---

# 18. Accessibility Rules

The agent must preserve:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper labels
- Sufficient contrast
- Descriptive alt text
- Reduced-motion support
- 44px touch targets where practical

Do not remove accessibility behavior for visual convenience.

---

# 19. Architecture Lock

The approved MVP stack is:

```text
Frontend:
React + Vite + JavaScript

Routing:
React Router

Styling:
Global CSS tokens + CSS Modules

Backend:
Node.js + Express

Database:
PostgreSQL

Provider:
Neon

Version Control:
Git + GitHub

Deployment:
Vercel
```

Do not replace this architecture without explicit approval.

---

# 20. Forbidden Framework Changes

The agent must not silently migrate to:

```text
Next.js
TypeScript
Tailwind CSS
Redux
GraphQL
Prisma
Drizzle
Firebase
Supabase
MongoDB
Docker
Kubernetes
```

Even if the agent believes another stack is "better."

The approved architecture is intentional.

---

# 21. Dependency Discipline

Before installing any dependency, verify:

1. Is it necessary?
2. Can the existing stack solve the problem clearly?
3. Does it reduce complexity?
4. Is it maintained?
5. Does it align with the technical specification?

Do not install packages solely because they are convenient for the agent.

---

# 22. Dependency Approval Rule

The following dependencies are pre-approved:

```text
react
react-dom
react-router-dom
vite
@vitejs/plugin-react
express
pg
dotenv
lucide-react
eslint
```

Any major additional dependency should be justified in the implementation notes or explicitly approved.

---

# 23. No Tailwind by Default

Do not install or use Tailwind CSS.

Styling architecture:

```text
CSS design tokens
+
CSS Modules
```

This is intentional so the owner can clearly understand the styling system.

---

# 24. No ORM by Default

Do not install:

```text
Prisma
Drizzle
Sequelize
TypeORM
```

The initial database scope is small.

Use:

```text
pg
```

with visible parameterized SQL.

---

# 25. PostgreSQL Scope

PostgreSQL is initially used for:

```text
contact_messages
```

Do not move all project content into PostgreSQL.

Project content should remain source-controlled in the MVP.

Do not create an unnecessary CMS.

---

# 26. Database Safety Rules

All user-input SQL must use parameterized queries.

Required pattern:

```sql
VALUES ($1, $2, $3, $4)
```

Never concatenate raw user input into SQL.

Do not:

- Drop tables automatically
- Reset the database automatically
- Run destructive SQL at application startup

---

# 27. Database Schema Changes

Before changing the schema:

1. Check `database/schema.sql`
2. Check `TECHNICAL_SPEC.md`
3. Confirm the change is necessary
4. Update documentation if the schema changes

Do not create unused tables.

---

# 28. No Public Message Retrieval

The public API must not expose submitted contact messages.

Do not add:

```text
GET /api/contact
GET /api/messages
GET /api/admin/messages
```

without an approved authentication and privacy design.

---

# 29. API Scope

Initial approved endpoints:

```text
GET /api/health
POST /api/contact
```

Do not create additional endpoints without a real requirement.

---

# 30. API Consistency

Use consistent response shapes.

Success:

```json
{
  "ok": true
}
```

Error:

```json
{
  "ok": false,
  "message": "..."
}
```

Do not return raw database errors.

---

# 31. Contact Form Rules

Required fields:

```text
name
email
subject
message
```

The agent must implement:

- Client-side validation
- Server-side validation
- Loading state
- Success state
- Error state
- Duplicate-submit prevention

The server remains the final validation authority.

---

# 32. Environment Variable Rules

Secrets must never appear in frontend code.

Required database variable:

```text
DATABASE_URL
```

Never use:

```text
VITE_DATABASE_URL
```

because `VITE_*` variables may be exposed to the browser.

---

# 33. .env Rules

Never commit:

```text
.env
.env.local
.env.*.local
```

The repository should include:

```text
.env.example
```

with placeholders only.

---

# 34. Secret Handling

Never:

- Print secrets in browser console
- Add secrets to screenshots
- Include secrets in Markdown
- Commit database credentials
- Expose secrets through `/api/health`

If a secret is accidentally exposed, stop and tell the user.

---

# 35. Localhost URL Rule

Frontend code should call:

```text
/api/contact
```

not:

```text
http://localhost:3000/api/contact
```

The local development environment should use Vite proxying.

This allows the same relative API path in local and production environments.

---

# 36. Express App Structure

Maintain one Express application shared by:

```text
Local Node server
Vercel API entry
```

Do not maintain two separate backend implementations.

`app.js` should not call:

```text
listen()
```

---

# 37. Project Structure Rules

Follow the structure defined in:

```text
TECHNICAL_SPEC.md
```

Do not create arbitrary folders such as:

```text
helpers2/
new-components/
final-components/
temp/
misc/
utils-final/
```

Use purposeful naming.

---

# 38. Component Rules

React components should:

- Have one clear responsibility
- Be reusable when meaningful
- Receive data through props
- Avoid duplicating content
- Keep API logic outside presentation components where practical

Do not create one giant `App.jsx` containing the entire portfolio.

---

# 39. No Premature Abstraction

Do not create:

- Generic factory systems
- Plugin architecture
- Complex render engines
- Overly generic component libraries

unless the current product genuinely requires them.

Prefer explicit code.

---

# 40. Content Registry Rules

Project ordering and metadata must come from a central registry.

Do not duplicate project arrays across multiple components.

Canonical implementation location:

```text
src/content/projects/index.js
```

---

# 41. Slug Rules

Preserve the approved slugs:

```text
super-soybean
graha-raya-project-management
sibuku
brofin
bike-sharing-dashboard
etomac
```

Do not rename routes for aesthetic preference.

---

# 42. Static Content Rules

Homepage and project content should not depend on runtime API calls.

This ensures:

- Fast rendering
- Better resilience
- Less complexity
- Easier deployment

Do not create a fake backend content API.

---

# 43. Asset Rules

All asset paths must follow:

```text
ASSET_MANIFEST.md
```

Do not invent:

```text
/assets/project1.png
/assets/profile-new.webp
```

unless the file really exists or has been approved.

---

# 44. Real Project Evidence Rule

Use:

- Actual screenshots
- Actual diagrams
- Actual architecture images
- Actual database design

Do not generate fake screenshots or decorative replacement dashboards.

---

# 45. Missing Asset Rule

If an asset is missing during development:

Use a neutral temporary placeholder and clearly label it as development-only.

Do not generate fake evidence.

---

# 46. Tech Logo Rules

Prefer:

- Official brand assets
- Simple Icons
- Devicon
- Official repositories

Do not download random low-quality logos.

Keep icon treatment visually consistent.

---

# 47. Portrait Rule

The user's real semi-formal photo must remain natural.

Do not:

- Change facial structure
- Generate replacement portrait
- Use AI cartoon conversion
- Heavily retouch identity

unless explicitly instructed by the user.

---

# 48. Project Cover Rules

Project covers must primarily use real project screenshots.

Do not use generic illustrations simply because they look more visually polished.

Evidence is more important than decoration.

---

# 49. Motion Rules

Prefer:

```text
CSS transitions
IntersectionObserver
small custom hooks
```

Do not install:

```text
Framer Motion
GSAP
```

without explicit approval.

Motion should remain subtle.

---

# 50. No Excessive Animation

Do not add:

- Parallax everywhere
- Scroll-jacking
- Animated cursors
- Page wobble
- Continuous floating cards
- 3D rotation
- Mouse-following effects
- Particle systems

The site should feel premium, not busy.

---

# 51. Reduced Motion Rule

All non-essential animation must respect:

```text
prefers-reduced-motion
```

Do not require motion to understand the page.

---

# 52. UI Icon Rules

Use:

```text
Lucide React
```

for generic interface icons.

Do not mix multiple unrelated icon systems unless necessary.

---

# 53. Card Density Rule

Do not put every section inside cards.

Use open layouts for:

- About
- Main headings
- Long-form project stories

Use cards only when grouping benefits comprehension.

---

# 54. Featured Project Rule

Featured projects should use large editorial presentation.

Do not turn all featured projects into equal small cards.

Featured order:

```text
1. Super Soybean
2. Graha Raya
3. SIBUKU
4. Brofin
```

---

# 55. Secondary Project Rule

Secondary projects:

```text
Bike-Sharing Analysis Dashboard
Etomac
```

May use smaller cards.

They must remain professionally presented.

---

# 56. Project Detail Rules

Project detail pages should tell a case-study story.

Do not blindly render every possible section.

Only render sections relevant to the project.

Example:

AI project:

```text
Model Development
Model Performance
Architecture
```

Data project:

```text
Dataset
EDA
Insights
Dashboard
```

Software project:

```text
Workflow
Database
Architecture
Features
```

---

# 57. External Link Rules

Do not render unavailable links.

If source says:

```text
Repository Not Available
```

do not show a disabled Repository button.

Only display verified working destinations.

---

# 58. GitHub URL Rule

The personal GitHub profile URL is currently a known gap.

Do not invent one.

Wait until a verified URL is supplied.

---

# 59. Publication Link Rule

Only render:

```text
View Publication
```

after a verified publication URL or DOI is available.

Do not guess a DOI.

---

# 60. SEO Rules

Use the approved metadata direction.

Do not create:

- Keyword stuffing
- Fake schema data
- Unsupported job titles
- Misleading descriptions

Metadata must reflect real content.

---

# 61. Accessibility Before Decoration

If a design effect conflicts with:

- Readability
- Contrast
- Keyboard access
- Screen reader semantics

accessibility wins.

---

# 62. Performance Rules

Do not compromise performance for decoration.

Avoid:

- Large uncompressed images
- Background video
- Huge animation libraries
- Dozens of web fonts
- Redundant packages
- Unnecessary API calls

---

# 63. Image Optimization Rule

Before production:

- Use WebP / SVG where appropriate
- Set dimensions where possible
- Lazy-load below-the-fold images
- Avoid huge source files

Do not destroy screenshot legibility through excessive compression.

---

# 64. Build Quality Rule

Before considering a task complete:

```text
npm run build
```

must succeed for frontend-related changes when applicable.

Do not claim completion with a broken build.

---

# 65. Console Quality Rule

Do not leave:

- Unhandled errors
- Broken asset warnings
- Repeated warnings
- Debug logs

in production.

Temporary debug logs must be removed.

---

# 66. Testing Rule

A feature is not complete because it renders once.

At minimum, test:

```text
Mobile
Tablet
Desktop
Keyboard
Direct route
Refresh
Error state
```

for relevant features.

---

# 67. Contact API Testing Rule

Before marking contact functionality complete, verify:

```text
Valid request → 201
Missing field → 400
Invalid email → 400
Too-long input → 400
DB failure → safe 500
```

---

# 68. No Silent Error Swallowing

Do not write code that catches an error and does nothing.

Errors should either:

- Be handled intentionally
- Produce safe user feedback
- Be logged appropriately server-side

---

# 69. Error Message Rule

User-facing errors should be:

- Clear
- Short
- Non-technical

Do not expose:

```text
ECONNREFUSED
Postgres stack trace
Node internal error
```

to site visitors.

---

# 70. Git Rules

Use clear commit messages.

Recommended style:

```text
feat:
fix:
docs:
chore:
refactor:
perf:
```

Do not make one enormous commit for the entire website if work is being completed incrementally.

---

# 71. No Automatic Git Push Without Explicit Request

The agent may prepare code and commits if explicitly instructed.

Do not automatically:

- Create remote repositories
- Push to GitHub
- Force-push
- Delete branches
- Rewrite Git history

without explicit user authorization.

---

# 72. No Destructive File Actions

Do not delete:

- Documentation
- User assets
- Project screenshots
- Database diagrams
- Architecture files
- Resume
- Git history

without explicit approval.

If an old generated file is clearly obsolete, ask or explain before removal.

---

# 73. Backup / Preservation Rule

When significantly rewriting an existing user-authored file, preserve the important content and compare against the approved source.

Do not overwrite project documentation casually.

---

# 74. Documentation Update Rule

When implementation changes a documented decision, update the corresponding documentation.

Examples:

Technical change:

```text
TECHNICAL_SPEC.md
```

Design change:

```text
DESIGN_SYSTEM.md
```

Content change:

```text
CONTENT_SPEC.md
```

Project metadata change:

```text
PROJECTS_INDEX.md
```

Asset path change:

```text
ASSET_MANIFEST.md
```

Do not knowingly allow documentation and implementation to diverge.

---

# 75. Explainability Rule

The owner must be able to explain the code during an interview.

Prefer code that clearly demonstrates:

```text
React
Routing
REST
Express
Validation
SQL
Environment Variables
Git
Deployment
```

Avoid unnecessary abstractions that hide these fundamentals.

---

# 76. Comment Rule

Comments should explain why something exists.

Good:

```js
// Use the same relative API path locally and in production.
// Vite proxies /api to Express during development.
```

Bad:

```js
// Create a variable
const x = ...
```

---

# 77. Naming Rule

Use descriptive names.

Prefer:

```text
submitContactMessage
contactMessages
ProjectPreview
ProjectDetailPage
```

Avoid:

```text
data2
thing
temp
helperNew
finalFunc
```

---

# 78. No Dead Code

Before completing a feature:

- Remove abandoned variants
- Remove unused imports
- Remove commented-out code blocks
- Remove temporary fake data

Do not leave multiple unused implementations behind.

---

# 79. No Fake Production Claims

Do not place copy like:

```text
Used by thousands
Production-grade
Enterprise ready
Serving real customers
```

unless verified.

---

# 80. No Fake Testimonials

Do not generate client testimonials.

If testimonials are later provided by real people and approved, they can be added.

---

# 81. No Fake Analytics

Do not display:

```text
10K visitors
1K users
99.9% uptime
```

without a real data source.

---

# 82. No Fake Repository Statistics

Do not create:

```text
500 GitHub stars
200 commits
50 contributors
```

unless retrieved and verified.

---

# 83. No Personal Sensitive Data Expansion

Do not add:

- Birth date
- Full address
- Government ID
- Family data
- Salary
- Private phone records

unless the user explicitly requests it for a legitimate reason.

---

# 84. Content Tone Rule

Do not make the website sound like a chatbot.

Avoid copy like:

```text
Heyyy! Wanna know about my cool projects? 😎
```

Preferred tone:

```text
Professional
Modern
Human
Clear
```

Occasional warmth is fine, but the site should remain recruiter-friendly.

---

# 85. Emoji Rule

Do not use excessive emojis.

Prefer none in primary professional sections.

A small number may be allowed only if specifically approved.

---

# 86. Mobile Navigation Rule

Do not copy the reference portfolio's quick-question control row.

Use standard:

```text
Menu
Navigation links
Resume CTA
```

---

# 87. Hero Rule

The hero must communicate within seconds:

```text
Who the user is
What they do
What domains they work across
Where to view projects
Where to download resume
```

Do not hide this information behind interaction.

---

# 88. Resume Rule

Resume must remain a real downloadable PDF.

Do not dynamically reconstruct a fake resume from website data unless later approved.

---

# 89. Skills Rule

Group skills by capability.

Do not create a giant unstructured icon wall.

Approved broad groups:

```text
Software Engineering
Data & Analytics
Artificial Intelligence
Professional Skills
```

---

# 90. Leadership Rule

Leadership should remain supporting evidence.

Do not allow leadership content to dominate the portfolio over technical work.

---

# 91. Research Rule

Research must remain concise and evidence-driven.

Do not overstate publication prestige.

Use the exact supported wording from approved content.

---

# 92. Project Metric Rule

When displaying technical metrics:

- Preserve value
- Preserve unit
- Preserve context

Example:

```text
92.01% mAP@0.5:0.95
```

Do not simplify to:

```text
92% accuracy
```

because that changes the metric.

---

# 93. Date Rule

Use consistent formatting:

```text
May 2025 — Dec 2025
```

Do not mix:

```text
05/2025
May '25
2025-05
```

on the same interface.

---

# 94. Location Rule

Use:

```text
Medan, North Sumatra
```

where location adds value.

Do not clutter every card with repeated location data.

---

# 95. Technology Naming Rule

Use consistent names:

```text
Node.js
Express.js
PostgreSQL
React
Vite
Yii2
PyTorch
TensorFlow
```

Do not create inconsistent variants like:

```text
Node JS
NodeJS
node
```

across the same site.

---

# 96. Project Status Rule

Preserve status distinctions:

```text
Completed
Completed on Local
```

Do not normalize all of them to:

```text
Completed
```

if that removes important deployment context.

---

# 97. SIMAGANG Rule

SIMAGANG is currently not indexed as a standalone project case study.

Do not generate:

```text
/projects/simagang
```

until dedicated documentation and assets are approved.

It may still be mentioned under experience as defined in `CONTENT_SPEC.md`.

---

# 98. Dark Mode Rule

Dark mode is optional.

Do not prioritize it before:

- Core light theme
- Mobile layout
- Project content
- Contact functionality

If implemented, it must follow `DESIGN_SYSTEM.md`.

---

# 99. Future Feature Rule

Features such as:

```text
Blog
CMS
AI chatbot
Admin dashboard
Authentication
Analytics
Custom domain
Dark mode
Search
```

are future possibilities.

Do not add them during MVP unless explicitly approved.

---

# 100. Agent Change Protocol

Before a significant change, the agent should internally verify:

```text
1. Which specification governs this?
2. Does this conflict with an approved decision?
3. Is a new dependency needed?
4. Does the user need to approve this?
5. Does the documentation need updating?
```

For genuinely ambiguous high-impact decisions, ask the user.

Do not ask unnecessary questions for routine implementation choices already covered by the specs.

---

# 101. Allowed Autonomous Decisions

The agent may autonomously decide small implementation details that do not alter the specification.

Examples:

- Variable names
- Exact component extraction
- Small CSS organization details
- Internal helper function location
- Minor accessibility improvements
- Minor responsive fixes
- Non-breaking refactors

Provided they remain consistent with approved design and architecture.

---

# 102. Decisions Requiring Approval

Explicit approval is required before:

- Changing framework
- Changing database provider type
- Adding an ORM
- Adding a CSS framework
- Adding authentication
- Adding a CMS
- Changing project ordering
- Changing professional positioning
- Removing major homepage sections
- Replacing real project assets
- Adding a new major feature
- Creating an AI chatbot
- Changing light-first theme
- Adding major animation libraries
- Making a project claim not present in source docs

---

# 103. Implementation Completion Report

After completing a substantial task, the agent should report briefly:

```text
What changed
Files changed
Dependencies added
How it was tested
Any remaining issue
```

Do not produce huge narrative reports unless requested.

---

# 104. Error Recovery Rule

If an implementation attempt breaks the project:

1. Identify the actual cause
2. Revert only the problematic change if appropriate
3. Preserve unrelated working code
4. Explain the correction
5. Retest

Do not rebuild the entire project from scratch unless necessary.

---

# 105. No "Fix Everything" Refactors

Do not use one task as an excuse to redesign unrelated code.

If asked to fix:

```text
mobile navbar
```

do not rewrite:

```text
project architecture
database
design system
```

unless needed.

---

# 106. Development Priority

Priority order:

```text
Correctness
Security
Accessibility
Clarity
Responsive behavior
Performance
Visual polish
Extra effects
```

Do not sacrifice correctness for visual novelty.

---

# 107. Interview-Oriented Engineering Rule

This project is also an interview artifact.

The code should help demonstrate:

- Clear folder structure
- Clean Git history
- REST understanding
- SQL understanding
- React understanding
- Responsive CSS understanding
- Secure environment handling
- Deployment understanding

Do not hide all implementation behind generated abstractions.

---

# 108. Final Agent Checklist

Before marking the MVP implementation complete, confirm:

```text
[ ] PROJECT_SPEC followed
[ ] CONTENT_SPEC followed
[ ] PROJECTS_INDEX followed
[ ] ASSET_MANIFEST followed
[ ] DESIGN_SYSTEM followed
[ ] TECHNICAL_SPEC followed
[ ] No fabricated content
[ ] No unapproved dependency
[ ] No secret committed
[ ] Mobile-first behavior works
[ ] Real portrait used
[ ] Real project assets used
[ ] No chatbot UI introduced
[ ] Project routes work
[ ] Contact API works
[ ] PostgreSQL uses parameterized SQL
[ ] Build succeeds
[ ] No major console errors
[ ] Accessibility basics work
[ ] Direct route refresh works in production
[ ] Documentation matches implementation
```

---

# 109. Short Mandatory Agent Directive

If the coding agent supports persistent project instructions, use this summary:

> Read and follow all project specification files before implementation. Do not invent personal, professional, project, metric, asset, or link information. Do not change the approved React + Vite + JavaScript + Express + PostgreSQL architecture, install major dependencies, introduce Tailwind/Next.js/TypeScript/ORMs, redesign the visual system, or add major features without approval. Preserve the light-first minimal modern "Precision Glass" design, real semi-formal portrait, real project evidence, mobile-first responsiveness, accessibility, security, and interview explainability. Prefer simple explicit solutions over unnecessary abstraction.

# 110. Case Study Presentation Rules

When implementing or modifying project case studies, the agent must adhere to the established presentation pattern defined in `DESIGN_SYSTEM.md` (based on the SIBUKU reference implementation).

The agent must not:
- Invent new visual card layouts arbitrarily.
- Re-introduce five narrow columns for 5-card arrays.
- Introduce new carousel dependencies. When a project uses a multi-screenshot Demo App gallery, reuse the approved circular center-focused carousel unless the project's actual assets or presentation needs clearly require a different treatment.
- Wrap standalone technical diagrams (Architecture, Database) in redundant visual cards.

Re-use the established balanced grids (with naturally equal heights per row), center-focused coverflow carousels (only when a multi-screenshot gallery is actually required), and consistent, intentional spacing tokens.

---

# 111. Document Status

**Document:** `AGENT_RULES.md`  
**Project:** Muhammad Azis Saputra Professional Portfolio  
**Status:** Initial Approved Agent Rules  
**Primary Agent:** Google Antigravity Agent  
**Rule Philosophy:** Controlled autonomy, no fabrication, no silent architecture drift  
**Technical Priority:** Simple, explicit, secure, explainable
