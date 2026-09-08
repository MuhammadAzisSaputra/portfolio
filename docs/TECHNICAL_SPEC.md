# TECHNICAL_SPEC.md

## 1. Document Purpose

This document defines the approved technical architecture and implementation rules for the professional portfolio of **Muhammad Azis Saputra**.

It is the primary technical reference for:

- Frontend architecture
- Backend architecture
- REST API design
- PostgreSQL usage
- Local development
- Vercel deployment
- Project folder structure
- Routing
- State management
- Content architecture
- Styling architecture
- Environment variables
- Security
- Validation
- Error handling
- Performance
- Accessibility implementation
- SEO implementation
- Testing
- Dependency management
- Build and deployment behavior

This document must be read together with:

```text
PROJECT_SPEC.md
docs/CONTENT_SPEC.md
docs/PROJECTS_INDEX.md
docs/ASSET_MANIFEST.md
docs/DESIGN_SYSTEM.md
docs/AGENT_RULES.md
docs/IMPLEMENTATION_PLAN.md
docs/projects/*.md
```

The implementation agent must not silently replace the architecture described here with another framework or stack.

---

# 2. Technical Goals

The portfolio itself should demonstrate a clean and understandable full-stack workflow:

```text
Browser
   ↓
React
   ↓
HTTP / JSON
   ↓
Node.js + Express
   ↓
PostgreSQL
```

The system should be simple enough that the project owner can explain:

- How React renders the interface
- How React routing works
- How the contact form sends a request
- How Express receives and validates the request
- How parameterized SQL is executed
- How PostgreSQL stores the contact message
- How secrets are stored through environment variables
- How Git and GitHub fit into the workflow
- How Vercel serves the production application

Technical sophistication must not come from unnecessary complexity.

---

# 3. Approved Technology Stack

## 3.1 Frontend

```text
React
Vite
JavaScript
React Router
CSS Modules + Global CSS Tokens
Lucide React
```

---

## 3.2 Backend

```text
Node.js
Express.js
```

---

## 3.3 Database

```text
PostgreSQL
```

Planned managed provider:

```text
Neon
```

A different managed PostgreSQL provider may be used later only if explicitly approved.

---

## 3.4 Version Control

```text
Git
GitHub
```

---

## 3.5 Deployment

```text
Vercel
```

Architecture target:

```text
Vercel
├── React static build
└── Serverless API entry for Express

Managed PostgreSQL
└── Neon
```

---

# 4. Explicitly Excluded Technologies

Do not introduce these in the initial release unless the specification is intentionally revised:

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
Redis
Docker
Kubernetes
Microservices
tRPC
CMS platforms
Authentication frameworks
Admin dashboards
WebSockets
```

These are not prohibited forever. They are intentionally excluded from the MVP to preserve clarity and learning value.

---

# 5. Local Development Environment

Current development environment:

```text
OS: Windows
IDE: Google Antigravity
Node.js: 24.20.0
npm: 11.19.0
Git: 2.55.0.windows.5
Default Git branch: main
```

Local repository:

```text
D:\Projects\muhammad-azis-saputra-portfolio
```

---

# 6. Package Manager

Use:

```text
npm
```

Do not introduce:

```text
pnpm
yarn
bun
```

unless explicitly approved later.

One package manager must be used consistently.

Commit:

```text
package-lock.json
```

Do not commit:

```text
node_modules/
```

---

# 7. Repository Architecture

The portfolio should remain a **single Git repository**.

Recommended structure:

```text
muhammad-azis-saputra-portfolio/
│
├── api/
│   └── index.js
│
├── server/
│   └── src/
│       ├── app.js
│       ├── server.js
│       │
│       ├── config/
│       │   └── env.js
│       │
│       ├── db/
│       │   └── pool.js
│       │
│       ├── routes/
│       │   └── contact.routes.js
│       │
│       ├── controllers/
│       │   └── contact.controller.js
│       │
│       ├── services/
│       │   └── contact.service.js
│       │
│       ├── validators/
│       │   └── contact.validator.js
│       │
│       └── middleware/
│           ├── not-found.middleware.js
│           └── error.middleware.js
│
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   └── router.jsx
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── project/
│   │   └── ui/
│   │
│   ├── sections/
│   │   ├── hero/
│   │   ├── highlights/
│   │   ├── projects/
│   │   ├── experience/
│   │   ├── research/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── leadership/
│   │   └── contact/
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── content/
│   │   ├── portfolio.js
│   │   ├── experience.js
│   │   ├── skills.js
│   │   └── projects/
│   │       ├── index.js
│   │       ├── super-soybean.js
│   │       ├── graha-raya.js
│   │       ├── sibuku.js
│   │       ├── brofin.js
│   │       ├── bike-sharing.js
│   │       └── etomac.js
│   │
│   ├── hooks/
│   │
│   ├── services/
│   │   └── contactApi.js
│   │
│   ├── utils/
│   │
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── reset.css
│   │   ├── globals.css
│   │   └── utilities.css
│   │
│   └── main.jsx
│
├── public/
│   └── assets/
│       └── ...
│
├── database/
│   ├── schema.sql
│   └── README.md
│
├── docs/
│   ├── CONTENT_SPEC.md
│   ├── PROJECTS_INDEX.md
│   ├── ASSET_MANIFEST.md
│   ├── DESIGN_SYSTEM.md
│   ├── TECHNICAL_SPEC.md
│   ├── AGENT_RULES.md
│   ├── IMPLEMENTATION_PLAN.md
│   └── projects/
│       └── ...
│
├── PROJECT_SPEC.md
├── README.md
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── vercel.json
```

This structure may be simplified if a directory remains unnecessary, but it must not be made more complex without a clear need.

---

# 8. Single-Repository Rationale

A single repository is preferred because it allows the owner to understand the complete application in one place:

```text
Frontend
Backend
Database schema
Assets
Documentation
Deployment configuration
```

This also supports a clear Git history and portfolio presentation.

Do not split the frontend and backend into separate GitHub repositories for the MVP.

---

# 9. Frontend Architecture

The frontend should use standard React functional components.

Required principles:

```text
Functional components
Hooks
Composition
Reusable UI primitives
Route-based pages
Content-driven rendering
Mobile-first CSS
```

Avoid:

```text
Class components
Global mutable state
Large monolithic components
Premature abstraction
```

---

# 10. Frontend Entry Flow

Expected browser flow:

```text
index.html
   ↓
src/main.jsx
   ↓
App / Router
   ↓
Page
   ↓
Sections
   ↓
Reusable components
```

---

# 11. Routing

Use:

```text
react-router-dom
```

Approved initial routes:

```text
/
```

Homepage.

```text
/projects
```

All projects.

```text
/projects/super-soybean
/projects/graha-raya-project-management
/projects/sibuku
/projects/brofin
/projects/bike-sharing-dashboard
/projects/etomac
```

Project detail routes may be implemented using one parameterized route:

```text
/projects/:slug
```

Preferred implementation:

```text
ProjectDetailPage
↓
read :slug
↓
resolve project from local project registry
↓
render case study
```

Unknown project slugs must return the project-not-found state or 404 page.

---

# 12. Homepage Anchor Navigation

Navbar items may navigate to homepage sections:

```text
/#about
/#experience
/#projects
/#skills
/#contact
```

When already on `/`, smooth scrolling may be used.

When on a project page, navigation should return to the relevant homepage section.

Scrolling must respect:

```text
prefers-reduced-motion
```

---

# 13. Content Architecture

Professional content should remain **source controlled** for the MVP.

Do not place project case-study content in PostgreSQL merely to make the application appear more complex.

Runtime content structure:

```text
src/content/
```

Documentation source of truth:

```text
docs/
```

Relationship:

```text
Approved Markdown Specifications
            ↓
Web-ready JavaScript content objects
            ↓
React components
```

The implementation agent must manually preserve consistency with the approved specification.

---

# 14. Project Content Model

Recommended conceptual project object:

```js
{
  name,
  shortName,
  slug,
  route,
  category,
  type,
  role,
  teamSize,
  timeline,
  duration,
  platform,
  status,
  featured,
  featuredOrder,
  summary,
  evidence,
  technologies,
  assets,
  links,
  sections
}
```

Not every property is required for every project.

Unsupported values must be omitted.

---

# 15. Project Registry

Central project registry should exist at:

```text
src/content/projects/index.js
```

Responsibilities:

- Project ordering
- Slug resolution
- Featured filtering
- Category filtering
- Previous / next project navigation

Do not duplicate project ordering across multiple files.

---

# 16. State Management

The initial portfolio does not require Redux or another global state library.

Use:

```text
Local component state
React hooks
Derived data
```

React Context may be used only if a genuine cross-tree requirement appears, such as:

```text
Theme preference
```

Do not create global state for static content.

---

# 17. Data Fetching

The homepage and project case studies should not require API calls for static portfolio content.

The main network interaction in the MVP is:

```text
Contact Form
    ↓
POST /api/contact
```

This keeps the site resilient and fast while still demonstrating full-stack integration.

---

# 18. Styling Architecture

Use:

```text
Global CSS design tokens
+
CSS Modules for component-level styling
```

Global files:

```text
src/styles/tokens.css
src/styles/reset.css
src/styles/globals.css
src/styles/utilities.css
```

Component styles:

```text
ComponentName.module.css
```

Example:

```text
src/components/ui/Button/
├── Button.jsx
└── Button.module.css
```

---

# 19. CSS Design Tokens

Design values must come from:

```text
docs/DESIGN_SYSTEM.md
```

Core token groups:

```text
colors
spacing
radius
shadow
typography
container
transition
z-index
```

Do not hardcode inconsistent colors and spacing throughout components when a token exists.

---

# 20. UI Component Strategy

Recommended reusable UI components:

```text
Button
IconButton
Container
SectionHeader
Badge
TechTag
GlassSurface
MetricCard
ProjectPreview
ProjectMeta
ExternalLink
FormField
TextareaField
SocialLink
```

Layout components:

```text
SiteHeader
MobileMenu
SiteFooter
PageShell
```

Do not create a generic component abstraction before at least two real use cases exist.

---

# 21. Image Handling

Static images should come from:

```text
public/assets/
```

Paths should follow:

```text
docs/ASSET_MANIFEST.md
```

Preferred production formats:

```text
WebP
SVG
AVIF where appropriate
```

Rules:

- Hero portrait may load eagerly
- Below-the-fold project images should lazy load
- Width and height should be defined where possible
- Avoid layout shift
- Use descriptive alt text
- Do not expose sensitive screenshot information

---

# 22. Technology Logos

Technology logos may live in:

```text
public/assets/tech/
```

The UI should consume them through a small registry rather than embedding hardcoded paths everywhere.

Conceptual example:

```js
const technologies = {
  python: {
    label: "Python",
    icon: "/assets/tech/programming/python.svg"
  }
}
```

Do not render logos that have not been prepared.

---

# 23. Backend Architecture

Express should be separated into:

```text
app creation
local server entry
Vercel entry
```

Conceptual flow:

```text
server/src/app.js
        ↓
creates Express application
        ↓
routes + middleware
       ↙ ↘
local    Vercel
server   function
```

`app.js` must not call `listen()`.

---

# 24. Local Express Entry

File:

```text
server/src/server.js
```

Responsibility:

```text
import app
read PORT
app.listen(PORT)
```

Recommended local port:

```text
3000
```

---

# 25. Vercel API Entry

File:

```text
api/index.js
```

Responsibility:

- Import the Express application
- Export / expose it in the form expected by Vercel
- Avoid calling `app.listen()`

Exact Vercel adapter syntax must be implemented according to the deployment runtime used at implementation time.

The important architecture rule is:

```text
same Express application
local server entry + Vercel serverless entry
```

Do not maintain two different backend implementations.

---

# 26. Express Middleware

Minimum middleware:

```text
express.json()
```

Request body limit should be constrained.

Recommended:

```text
32kb or lower
```

The application does not need large JSON bodies.

Optional:

```text
security headers
```

Any additional middleware must have a clear purpose.

---

# 27. CORS Strategy

Preferred local architecture:

```text
React dev server
    ↓
Vite proxy /api
    ↓
localhost:3000
```

This avoids unnecessary CORS complexity.

Frontend code should call:

```text
/api/contact
```

not:

```text
http://localhost:3000/api/contact
```

In production, React and the API should use the same site origin through Vercel.

Therefore, a CORS package should not be added unless the final architecture genuinely requires cross-origin requests.

---

# 28. Vite Development Proxy

Recommended conceptual configuration:

```text
/api/*
   ↓
http://localhost:3000
```

The exact proxy configuration belongs in:

```text
vite.config.js
```

This provides the same frontend API path in local and production environments.

---

# 29. API Design

Initial API:

```text
GET  /api/health
POST /api/contact
```

No additional API should be created without a real use case.

---

# 30. GET /api/health

Purpose:

- Confirm API availability
- Simplify deployment smoke testing

Response:

```json
{
  "ok": true,
  "service": "portfolio-api"
}
```

Recommended status:

```text
200
```

Do not expose:

- Environment variables
- Database credentials
- Internal paths
- Package versions
- Stack traces

---

# 31. POST /api/contact

Purpose:

Store valid portfolio contact messages.

Request:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Job Opportunity",
  "message": "I'd like to discuss..."
}
```

---

# 32. Contact Validation Rules

Recommended server-side rules:

## Name

```text
Required
Trimmed
2–120 characters
```

## Email

```text
Required
Trimmed
Valid basic email structure
Maximum 254 characters
```

## Subject

```text
Required
Trimmed
3–160 characters
```

## Message

```text
Required
Trimmed
10–4000 characters
```

Client-side validation improves UX.

Server-side validation remains mandatory.

---

# 33. Contact Success Response

Recommended status:

```text
201 Created
```

Response:

```json
{
  "ok": true,
  "message": "Message sent successfully."
}
```

Do not return the full stored database row unless needed.

---

# 34. Contact Validation Error Response

Recommended status:

```text
400 Bad Request
```

Example:

```json
{
  "ok": false,
  "message": "Please check the submitted fields.",
  "errors": {
    "email": "Please enter a valid email address."
  }
}
```

---

# 35. Server Error Response

Recommended status:

```text
500 Internal Server Error
```

Production response:

```json
{
  "ok": false,
  "message": "Something went wrong. Please try again later."
}
```

Never send stack traces to the browser in production.

---

# 36. API Error Shape

Keep a consistent response contract:

Success:

```js
{
  ok: true,
  ...
}
```

Failure:

```js
{
  ok: false,
  message,
  errors?
}
```

Do not create a different error shape for every endpoint.

---

# 37. Backend Layer Responsibilities

## Route

```text
HTTP method + URL
↓
controller
```

## Controller

Responsible for:

- Reading request
- Calling validation / service
- Selecting HTTP status
- Returning response

## Validator

Responsible for:

- Field requirements
- Length constraints
- Email format
- Normalization / trimming rules

## Service

Responsible for:

- Business action
- Database call
- Returning domain result

## Database Module

Responsible for:

- PostgreSQL pool
- Query execution support

This separation should remain lightweight.

---

# 38. PostgreSQL Scope

PostgreSQL should support a justified feature rather than becoming a fake CMS.

Initial database scope:

```text
contact_messages
```

Portfolio project content remains source-controlled.

---

# 39. Database Schema

Initial SQL:

```sql
CREATE TABLE IF NOT EXISTS contact_messages (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(254) NOT NULL,
    subject VARCHAR(160) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT contact_messages_name_length
        CHECK (char_length(trim(name)) BETWEEN 2 AND 120),

    CONSTRAINT contact_messages_subject_length
        CHECK (char_length(trim(subject)) BETWEEN 3 AND 160),

    CONSTRAINT contact_messages_message_length
        CHECK (char_length(trim(message)) BETWEEN 10 AND 4000)
);
```

Recommended index:

```sql
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
ON contact_messages (created_at DESC);
```

---

# 40. Database Schema File

Store database creation SQL at:

```text
database/schema.sql
```

Do not execute destructive schema commands automatically during application startup.

Database migrations are intentionally not introduced in the MVP.

If the schema becomes more complex later, migration tooling can be evaluated.

---

# 41. SQL Rules

All queries must be parameterized.

Correct conceptual approach:

```sql
INSERT INTO contact_messages
(name, email, subject, message)
VALUES ($1, $2, $3, $4);
```

Never build SQL by concatenating user input.

Do not write:

```text
"... VALUES ('" + req.body.name + "')"
```

---

# 42. PostgreSQL Driver

Use:

```text
pg
```

Do not introduce an ORM for the MVP.

Reason:

- Keeps SQL visible
- Helps the owner understand PostgreSQL directly
- Avoids unnecessary abstraction
- Portfolio scope is small

---

# 43. Connection Pool

Use:

```text
pg.Pool
```

Configuration source:

```text
DATABASE_URL
```

For a serverless deployment, use the managed PostgreSQL provider's pooled connection string when available.

The pool must not be created separately for every request inside the controller.

It should live in the database module.

---

# 44. Database Environment Variable

Required:

```text
DATABASE_URL
```

Example placeholder only:

```text
postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require
```

Never place a real connection string in:

- Source code
- Markdown documentation committed publicly
- Screenshots
- Client-side variables

---

# 45. Environment Variables

Recommended local `.env`:

```text
PORT=3000
DATABASE_URL=...
NODE_ENV=development
```

Production variables:

```text
DATABASE_URL
NODE_ENV=production
```

Do not expose the database connection through a Vite variable.

---

# 46. Vite Environment Variable Rules

Only variables intentionally exposed to the browser may use:

```text
VITE_*
```

Database secrets must never use:

```text
VITE_DATABASE_URL
```

That would expose them in the frontend bundle.

---

# 47. Environment Files

Repository should contain:

```text
.env.example
```

Example:

```text
PORT=3000
DATABASE_URL=postgresql://username:password@host/database
NODE_ENV=development
```

Repository must ignore:

```text
.env
.env.local
.env.*.local
```

Production values belong in Vercel environment settings.

---

# 48. .gitignore Requirements

Minimum:

```gitignore
node_modules/
dist/
.env
.env.local
.env.*.local
.DS_Store
*.log
```

Optional Windows / IDE entries may be added if genuinely generated.

Do not ignore documentation or project assets.

---

# 49. Security — Input Handling

The backend must:

- Parse JSON with a small body limit
- Validate every contact field
- Trim string input
- Enforce maximum lengths
- Use parameterized SQL
- Avoid returning raw database errors
- Avoid reflecting arbitrary user input in HTML responses

---

# 50. Security — Contact Abuse

The initial release should include at least a lightweight anti-bot strategy.

Preferred low-complexity approach:

```text
Hidden honeypot field
+
minimum submission timing check if implemented cleanly
+
strict validation
```

Optional future enhancement:

```text
Cloudflare Turnstile
```

Do not implement an in-memory serverless rate limiter and claim it is globally reliable.

---

# 51. Security — Secrets

Never commit:

```text
DATABASE_URL
API keys
Tokens
Private credentials
```

Never log secrets.

Do not print environment variables during debugging in screenshots intended for public use.

---

# 52. Security — Error Logging

Local development:

```text
Detailed logs permitted
```

Production:

```text
Log enough context to diagnose failures
Do not log secrets
Do not expose stack traces to users
```

---

# 53. Backend Logging

Initial logs may use:

```text
console.error
```

for true server failures.

Do not add a logging framework unless the project needs structured production logging.

---

# 54. Frontend Contact Service

File:

```text
src/services/contactApi.js
```

Responsibility:

```text
submitContactMessage(payload)
```

It should:

- Call `/api/contact`
- Send JSON
- Parse response
- Convert network/API failures into predictable frontend errors

Components should not duplicate `fetch()` logic.

---

# 55. Contact Form State

Recommended state:

```text
idle
submitting
success
error
```

Form should prevent duplicate submissions while:

```text
submitting
```

Success should:

- Show success message
- Optionally clear fields

Failure should:

- Preserve user-entered values
- Show helpful message

---

# 56. Form Accessibility

Required:

- Visible label for every field
- `name` attributes
- Appropriate `type="email"`
- `aria-invalid` when invalid
- Error message associated with field
- Accessible submit state
- Keyboard submission support

Placeholder text is not a label.

---

# 57. SEO Architecture

Use semantic HTML and page-specific metadata.

Homepage:

```text
title
meta description
Open Graph title
Open Graph description
Open Graph image
canonical URL
```

Project pages:

```text
Unique title
Unique description
```

If a lightweight metadata helper is required, choose the smallest justified solution.

Do not add a heavy SEO framework.

---

# 58. Dynamic Document Metadata

React project pages should update:

```text
document.title
meta description
```

based on project data.

Implementation may use a small custom hook such as:

```text
usePageMetadata()
```

Avoid adding a dependency solely for two metadata fields unless it provides clear value.

---

# 59. Structured Data

Optional enhancement:

```text
Person JSON-LD
```

May include:

- Name
- Professional description
- LinkedIn
- GitHub when verified
- Website URL

Only include public verified information.

Project schema may be added later if useful.

---

# 60. Accessibility Implementation

Target:

```text
WCAG 2.2 AA where practical
```

Required:

- Semantic landmarks
- Correct heading hierarchy
- Keyboard navigation
- Visible focus styles
- Form labels
- Alt text
- Sufficient contrast
- Reduced motion
- 44px touch targets where practical

---

# 61. Semantic Page Structure

Recommended:

```html
<header>
<nav>

<main>
  <section>
  ...
</main>

<footer>
```

Project detail:

```html
<article>
```

where appropriate.

Do not build the entire site from nested `<div>` elements without semantic structure.

---

# 62. Performance Goals

The portfolio should remain lightweight.

Targets:

- Fast first render
- Minimal JavaScript
- Responsive images
- No unnecessary API dependency for static content
- No heavy animation package unless approved
- No large background video
- No unoptimized multi-megabyte screenshots

---

# 63. Code Splitting

Route-level lazy loading may be used for:

```text
ProjectDetailPage
ProjectsPage
```

if it improves bundle size without adding complexity.

Do not aggressively split tiny components.

---

# 64. Lazy Loading Images

Use:

```html
loading="lazy"
```

for below-the-fold images.

Hero portrait should not be lazy loaded.

A top featured project image may be prioritized if it appears near the initial viewport.

---

# 65. Motion Implementation

Prefer:

```text
CSS transitions
IntersectionObserver
small custom hooks
```

Do not add Framer Motion or GSAP unless explicitly approved.

Approved animation behavior comes from:

```text
DESIGN_SYSTEM.md
```

---

# 66. Reduced Motion

Any reveal logic must honor:

```text
prefers-reduced-motion: reduce
```

The site must remain fully usable with animation disabled.

---

# 67. Responsive Implementation

Mobile-first CSS is mandatory.

Default styles:

```text
mobile
```

Enhancement:

```text
@media (min-width: ...)
```

Do not write desktop-first CSS and then override everything for mobile.

---

# 68. Browser Support

Target current evergreen browsers:

```text
Chrome
Edge
Firefox
Safari
```

The site does not need to support Internet Explorer.

Glass effects must degrade gracefully if `backdrop-filter` is unsupported.

---

# 69. Project Filtering

Projects page may support:

```text
All
Software
Data
AI
```

Implementation should be client-side using local project data.

No API or database query is needed for filtering.

---

# 70. Project Navigation

Previous / next project navigation should derive from the central project registry.

Do not manually hardcode neighboring links inside every project file.

---

# 71. External Links

External professional links should use:

```text
target="_blank"
rel="noopener noreferrer"
```

where opening a new tab is intentional.

Internal links must use React Router navigation.

---

# 72. Resume Download

Resume should live under:

```text
public/assets/documents/resume/
```

CTA may use:

```html
<a href="..." download>
```

or open the PDF depending final UX.

Accessible text must identify the document.

---

# 73. GitHub Link

GitHub profile URL is currently a known content gap.

Do not invent the URL.

The UI should omit the link until a verified value is added to the approved content source.

---

# 74. API Health Testing

Local:

```text
GET http://localhost:3000/api/health
```

Through Vite proxy:

```text
GET http://localhost:5173/api/health
```

Production:

```text
GET https://<domain>/api/health
```

Expected:

```text
200
```

---

# 75. Local Development Workflow

Use two Antigravity terminals initially.

Terminal 1:

```bash
npm run dev
```

React / Vite.

Terminal 2:

```bash
npm run dev:server
```

Express.

The exact script names should be defined consistently in `package.json`.

---

# 76. Recommended npm Scripts

Conceptual root scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "dev:server": "node --watch server/src/server.js",
    "build": "vite build",
    "preview": "vite preview",
    "start:server": "node server/src/server.js"
  }
}
```

Testing scripts may be added later.

Do not install a concurrency package merely to combine the two dev terminals.

Using two terminals is acceptable and educational.

---

# 77. Recommended Dependencies

Initial runtime dependencies:

```text
react
react-dom
react-router-dom
lucide-react
express
pg
dotenv
```

`dotenv` is primarily for local backend environment loading.

Any additional runtime dependency requires a reason.

---

# 78. Recommended Dev Dependencies

Expected:

```text
vite
@vitejs/plugin-react
eslint
```

Additional quality tooling may be introduced during implementation if justified.

Do not install large toolchains by default.

---

# 79. ESLint

Use ESLint for:

- Unused variables
- Basic JavaScript / React issues
- Common mistakes

The configuration should remain understandable.

Do not introduce an overly strict enterprise lint configuration.

---

# 80. Formatting

A formatter such as Prettier is optional.

If used:

- Add it intentionally
- Use one project-wide configuration
- Avoid formatting churn unrelated to functionality

It is acceptable to rely on Antigravity/editor formatting during the initial setup.

---

# 81. Testing Strategy

The MVP must be manually tested thoroughly.

Recommended automated tests should focus on important logic rather than achieving arbitrary coverage.

Priority:

```text
1. Contact validation
2. Contact API
3. Project slug resolution
```

A test framework may be added when these features are implemented.

Do not add a complex testing stack before there is behavior worth testing.

---

# 82. Manual Frontend Test Checklist

Test:

```text
360px
390px
768px
1024px
1440px
```

Verify:

- Navigation
- Hero
- Project layouts
- Project detail
- Images
- Experience
- Skills
- Contact form
- Footer
- 404
- Keyboard behavior

---

# 83. Manual Backend Test Checklist

Verify:

```text
GET /api/health → 200

POST valid /api/contact → 201

POST missing field → 400

POST invalid email → 400

POST oversized message → 400

Database unavailable → safe 500 response
```

---

# 84. Database Verification

After a valid contact submission:

```sql
SELECT
    id,
    name,
    email,
    subject,
    created_at
FROM contact_messages
ORDER BY created_at DESC
LIMIT 10;
```

Do not expose this query through a public API.

---

# 85. Vercel Deployment Strategy

Production flow:

```text
Antigravity
   ↓
Git commit
   ↓
GitHub push
   ↓
Vercel deployment
```

Vercel should build the Vite frontend and expose the API entry for Express.

Exact Vercel routing configuration must be validated during implementation.

---

# 86. vercel.json Responsibilities

Use `vercel.json` only if required for:

- SPA route fallback
- API rewrites
- Express entry routing
- Build output routing

Do not add complicated route rules before deployment behavior is understood.

Project routes such as:

```text
/projects/sibuku
```

must survive direct browser refresh in production.

This must be explicitly tested.

---

# 87. Vite Production Build

Production frontend command:

```bash
npm run build
```

Expected output:

```text
dist/
```

The production build must complete without errors before deployment.

---

# 88. Production Environment Variables

Configure through Vercel:

```text
DATABASE_URL
NODE_ENV
```

Do not upload `.env` to Vercel as a public project file.

---

# 89. Neon Setup

Initial database setup process:

```text
Create Neon project
↓
Create / select database
↓
Obtain pooled PostgreSQL connection string
↓
Set DATABASE_URL locally
↓
Run database/schema.sql
↓
Test contact insertion locally
↓
Add DATABASE_URL to Vercel environment
```

Do not create unnecessary additional databases.

---

# 90. Database Connection Failure Behavior

If PostgreSQL is unavailable:

- Contact form request must fail safely
- The rest of the portfolio must continue working
- Static project content must remain visible

This is one reason project content should not depend on PostgreSQL in the MVP.

---

# 91. Deployment Smoke Test

After production deployment verify:

```text
[ ] Homepage loads
[ ] Direct /projects/:slug refresh works
[ ] Assets load
[ ] Resume link works
[ ] LinkedIn works
[ ] GitHub works when configured
[ ] /api/health works
[ ] Contact submission works
[ ] PostgreSQL receives message
[ ] No secrets appear in client bundle
[ ] No console errors
[ ] Mobile navigation works
```

---

# 92. Dependency Policy

Before installing a package, ask:

```text
Can this be done clearly with the platform / React / CSS already available?
```

Install only if the library:

- Solves a real problem
- Reduces significant complexity
- Is maintainable
- Does not conflict with the specification

Do not install libraries because an AI agent prefers them.

---

# 93. Security Package Policy

Do not blindly install security middleware.

Evaluate based on deployment architecture.

Potential future package:

```text
helmet
```

may be considered if useful for the final Express runtime.

Rate limiting should not rely on process-local memory in a serverless environment if global enforcement is required.

---

# 94. No Authentication in MVP

The portfolio has no:

```text
Login
Admin account
User account
Session
Role
CMS dashboard
```

Therefore do not add:

- JWT
- OAuth
- Password hashing
- Session database

Contact messages can be viewed directly in the database provider dashboard during the MVP.

---

# 95. No Public Contact Message API

Do not implement:

```text
GET /api/contact
GET /api/messages
```

These would expose private submissions.

The public API supports write-only contact submission.

---

# 96. Privacy Principle

Collect only what the contact form needs:

```text
Name
Email
Subject
Message
Created time
```

Do not collect:

- IP address
- Geolocation
- Device fingerprint
- Tracking identifiers

unless a future approved requirement justifies them.

---

# 97. Analytics

Web analytics are not required for MVP.

If analytics are added later:

- Choose a privacy-conscious solution
- Document the tool
- Update privacy disclosures if necessary

Do not add tracking silently.

---

# 98. Error Boundaries

A lightweight React error boundary may be added if useful.

At minimum:

- Route errors should not leave a blank screen
- Unknown projects should render a controlled state
- Failed contact requests should not crash the page

---

# 99. Loading Strategy

Since portfolio content is local:

- Most content should render immediately
- Avoid unnecessary skeleton loaders
- Only contact submission needs an obvious async loading state

---

# 100. Code Quality Rules

Implementation should prioritize:

```text
Readable names
Small focused functions
Clear file responsibility
Minimal duplication
Comments only when logic needs explanation
```

Avoid:

```text
Huge JSX files
Magic numbers
Massive utility files
Dead code
Console logs left everywhere
Over-abstraction
```

---

# 101. Comment Policy

Comments should explain:

```text
Why
```

not narrate obvious code.

Good:

```text
// Reuse the same Express app for local Node and Vercel serverless runtime.
```

Avoid:

```text
// Set loading to true
setLoading(true);
```

---

# 102. File Size Guideline

There is no strict line-count rule.

However, consider refactoring when one component mixes:

- Data
- Layout
- Form logic
- API logic
- Multiple unrelated sections

Do not split files simply to satisfy a number.

---

# 103. Git Commit Strategy

Recommended development commits:

```text
docs: add technical specification

chore: initialize React and Vite

feat: add global design tokens

feat: implement responsive site navigation

feat: build homepage hero

feat: add featured project section

feat: add project detail routing

feat: implement Express contact API

feat: connect PostgreSQL contact storage

fix: handle direct project routes on Vercel

perf: optimize project images

docs: add deployment instructions
```

Commits should remain understandable during an interview.

---

# 104. Branch Strategy

For a solo portfolio MVP:

```text
main
```

is sufficient.

Optional short-lived feature branches may be used later.

Do not introduce Git Flow complexity.

---

# 105. Documentation Synchronization

If implementation changes a technical decision, update:

```text
TECHNICAL_SPEC.md
```

If it changes project behavior, also update:

```text
PROJECT_SPEC.md
```

If it changes visual behavior:

```text
DESIGN_SYSTEM.md
```

If it changes content:

```text
CONTENT_SPEC.md
PROJECTS_INDEX.md
```

Specifications should not knowingly drift from production behavior.

---

# 106. Implementation Sequence

Recommended technical sequence:

```text
1. Initialize Vite + React
2. Create base folder architecture
3. Configure design tokens
4. Configure React Router
5. Build layout and navigation
6. Implement homepage sections
7. Add project content model
8. Implement project detail routing
9. Integrate real assets
10. Add Express app
11. Add /api/health
12. Add contact validation
13. Add PostgreSQL connection
14. Add contact insert
15. Connect React contact form
16. Add production routing
17. Test responsive behavior
18. Test accessibility
19. Optimize images
20. Deploy to Vercel
```

Do not connect PostgreSQL before the frontend and Express API can run independently.

---

# 107. Definition of Technical Done

The MVP technical implementation is complete when:

```text
[ ] React application builds successfully
[ ] Mobile-first layout works
[ ] React Router project pages work
[ ] Direct project URL refresh works in production
[ ] Project content comes from approved local content sources
[ ] Real assets are used
[ ] Express API runs locally
[ ] Vite proxy works
[ ] /api/health returns 200
[ ] Contact form validates client-side
[ ] Contact endpoint validates server-side
[ ] PostgreSQL stores valid contact messages
[ ] Parameterized SQL is used
[ ] .env is ignored
[ ] No secrets exist in frontend bundle
[ ] Production errors do not expose stack traces
[ ] Vercel deployment succeeds
[ ] Contact works in production
[ ] No broken links or images
[ ] No major console errors
[ ] Keyboard navigation works
[ ] Reduced motion is respected
[ ] Resume download works
[ ] Git history remains understandable
```

---

# 108. Interview Explainability Requirement

An important project requirement is that the owner must be able to explain the architecture.

The final application should make it possible to explain:

```text
1. Vite starts the React development server.

2. React Router controls client-side routes.

3. Static portfolio content is stored locally in JavaScript content modules.

4. The contact form sends JSON to /api/contact.

5. Vite proxies /api requests to Express during local development.

6. Express validates the request.

7. The service inserts the message into PostgreSQL using a parameterized query.

8. The PostgreSQL connection string is stored in DATABASE_URL.

9. Git tracks the source code and documentation.

10. GitHub hosts the repository.

11. Vercel builds the React application and hosts the API entry.

12. Neon hosts PostgreSQL separately.
```

If an implementation choice cannot be explained clearly by the owner, the agent should prefer a simpler solution.

---

# 109. Anti-Patterns

The implementation agent must not introduce:

```text
❌ Next.js because "React apps should use Next.js"
❌ Tailwind because it is faster for the agent
❌ Prisma for one small table
❌ Redux for static content
❌ PostgreSQL-backed CMS for project text
❌ Separate frontend/backend repositories
❌ Hardcoded localhost API URLs
❌ Client-side database credentials
❌ SQL string concatenation
❌ Public GET endpoint for contact messages
❌ Fake authentication
❌ Large animation libraries
❌ Unnecessary API calls for local content
❌ Secret values committed to Git
❌ Massive single React component
❌ Framework migrations without approval
```

---

# 110. Future Expansion Possibilities

These are explicitly **future**, not MVP requirements.

Possible later additions:

```text
Dark mode
Project search
Additional case studies
SIMAGANG case study
Blog / notes
Email notification for contact submissions
Turnstile anti-spam
Automated testing
Analytics
Custom domain
Internationalized content
CMS
Admin interface
```

Each future feature must be evaluated independently.

---

# 111. Current Technical Decisions Summary

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

Database Provider:
Neon

Database Driver:
pg

Portfolio Content:
Source-controlled JavaScript objects derived from approved docs

Database-backed Feature:
Contact form only

Local API:
Express on port 3000

Frontend Development:
Vite on port 5173

Local API Integration:
Vite /api proxy

Version Control:
Git + GitHub

Deployment:
Vercel

Architecture:
Single repository

Authentication:
None

CMS:
None

Primary Design:
Mobile-first, minimal modern, Precision Glass
```

---

# 112. Current Technical Status

Already completed:

```text
[✓] Node.js installed
[✓] npm installed
[✓] Git installed and updated
[✓] Git global identity configured
[✓] Git default branch configured as main
[✓] Git Credential Manager available
[✓] Antigravity installed
[✓] Local Git repository initialized
```

Repository:

```text
D:\Projects\muhammad-azis-saputra-portfolio
```

Not yet implemented:

```text
[ ] React / Vite
[ ] Folder structure
[ ] Router
[ ] CSS architecture
[ ] Express
[ ] PostgreSQL
[ ] Neon
[ ] GitHub remote
[ ] Vercel deployment
```

This is expected.

Implementation should begin only after `AGENT_RULES.md` and `IMPLEMENTATION_PLAN.md` are ready.

---

# 113. Document Status

**Document:** `TECHNICAL_SPEC.md`  
**Project:** Muhammad Azis Saputra Professional Portfolio  
**Status:** Initial Approved Technical Specification  
**Architecture:** React + Express + PostgreSQL  
**Deployment:** Vercel + Managed PostgreSQL  
**Development Philosophy:** Simple, explicit, secure, understandable
