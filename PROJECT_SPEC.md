# PROJECT_SPEC.md

## 1. Project Identity

**Project Name:** Muhammad Azis Saputra — Professional Portfolio  
**Project Type:** Personal Professional Portfolio Website  
**Owner:** Muhammad Azis Saputra  
**Primary Platform:** Web  
**Design Approach:** Mobile-first, responsive, professional, evidence-driven  
**Primary Language:** English  
**Secondary Language:** None for initial release  
**Repository Name:** `muhammad-azis-saputra-portfolio`  
**Local Workspace:** `D:\Projects\muhammad-azis-saputra-portfolio`

---

## 2. Project Purpose

This portfolio is designed to present Muhammad Azis Saputra as an Information Technology graduate with practical experience across:

- Software Engineering
- Data Analytics
- Artificial Intelligence
- Computer Vision
- Research
- Cross-functional project collaboration
- Leadership and project coordination

The portfolio must not behave like a visually extended CV. It should present professional experience and projects as evidence-based case studies that make it easy for recruiters, hiring managers, technical interviewers, engineering teams, data teams, and research collaborators to understand:

1. Who Muhammad Azis Saputra is
2. What kinds of problems he has worked on
3. What his role was in each project
4. What technologies he used
5. How the systems or analytical workflows were designed
6. What outcomes were achieved
7. What he learned from the work
8. How to contact him

The site should demonstrate capability through real work rather than through unsupported claims.

---

## 3. Primary Goals

### 3.1 Professional Positioning

Position Muhammad Azis Saputra as:

> **Information Technology Graduate building practical solutions across Software, Data & AI.**

Core professional themes:

- Software Engineering
- Data
- Artificial Intelligence

Supporting themes:

- Research
- Product Thinking
- Business Workflow Understanding
- Cross-functional Collaboration
- Leadership

### 3.2 Recruitment Support

The site should support applications for roles such as:

- Software Engineer
- Web Developer
- Backend Developer
- Full Stack Developer
- IT Staff / IT Officer
- Data Analyst
- Junior Data Engineer
- Junior AI / Machine Learning Engineer
- Technical Project / Product roles
- Research-oriented technology roles

The website should allow recruiters to evaluate the portfolio quickly without requiring them to read every project in full.

### 3.3 Technical Demonstration

The portfolio itself should serve as a technical project demonstrating:

- React-based frontend development
- Mobile-first responsive design
- REST API integration
- Node.js / Express backend
- PostgreSQL database usage
- Git-based version control
- GitHub repository workflow
- Deployment on Vercel
- Managed PostgreSQL hosting
- Environment-variable management
- Basic accessibility and SEO practices

### 3.4 Evidence Over Claims

The portfolio should prioritize proof.

Examples:

Instead of:

> Machine Learning

Prefer:

> YOLO26s achieved approximately 0.92005 mAP@0.5:0.95 with 16.63 ms inference speed and 60.13 FPS in the Super Soybean project.

Instead of:

> Leadership

Prefer:

> Led a 10-member Innovate Hub division.

Instead of:

> Web Development

Prefer:

> Designed and delivered two web-based information systems during the IOPRI internship.

---

## 4. Target Audience

### 4.1 Primary Audience

- Recruiters
- HR professionals
- Hiring managers
- Technical interviewers
- Engineering teams
- Data teams
- IT teams

### 4.2 Secondary Audience

- Research collaborators
- Potential freelance clients
- Professional connections
- University / academic collaborators

### 4.3 User Expectations

Primary visitors should be able to find the following within a short time:

- Name
- Professional positioning
- Main areas of expertise
- Featured projects
- Work / research experience
- Technical skills
- Resume
- LinkedIn
- GitHub
- Contact information

The experience must not require users to understand experimental navigation, gimmicks, hidden interactions, or excessive animation.

---

## 5. Portfolio Principles

The project must follow these principles.

### 5.1 Professional First

The site may have personality, but professional information must always be easy to discover.

### 5.2 Content Before Decoration

Visual design should strengthen content hierarchy rather than compete with it.

### 5.3 Evidence-Driven

Claims must be supported by project documentation, CV content, real metrics, real screenshots, real diagrams, or verifiable links.

### 5.4 No Fabrication

The website must not invent:

- Project metrics
- Technologies
- Job titles
- Responsibilities
- Team sizes
- Dates
- Awards
- Research findings
- Production deployment claims
- User numbers
- Business outcomes

If information is unavailable, omit it or clearly state that it is unavailable.

### 5.5 Mobile-First

All page structures, components, typography, navigation, cards, image layouts, and interactive elements must be designed for small screens first, then progressively enhanced for larger screens.

### 5.6 Accessible

The site must maintain:

- Clear heading hierarchy
- Meaningful alt text
- Good color contrast
- Keyboard-accessible interactive elements
- Visible focus states
- Readable line lengths
- Responsive typography
- Descriptive links

### 5.7 Fast and Lightweight

Avoid unnecessary:

- Heavy animation libraries
- Large videos
- 3D assets
- Excessive JavaScript
- Huge image payloads
- Decorative effects that harm performance

---

## 6. Professional Identity

### 6.1 Name

**Muhammad Azis Saputra**

### 6.2 Core Positioning

**Information Technology Graduate building practical solutions across Software, Data & AI.**

### 6.3 Supporting Statement

Recommended direction:

> I build practical digital solutions through software engineering, data, and artificial intelligence, with experience across web applications, data-driven projects, computer vision research, and cross-functional product development.

Final wording may be refined in `CONTENT_SPEC.md`.

### 6.4 Brand Keywords

The website should visually and verbally communicate:

- Clear
- Professional
- Modern
- Analytical
- Technical
- Practical
- Structured
- Evidence-based
- Trustworthy
- Curious
- Growth-oriented

Avoid branding that feels:

- Childish
- Overly futuristic
- Gamer-oriented
- Crypto-oriented
- Excessively corporate
- Visually noisy

---

## 7. Information Architecture

The initial production website should use the following information architecture:

```text
/
├── Home
├── About
├── Experience
├── Projects
│   └── /projects/:slug
├── Research
├── Skills
└── Contact
```

The primary navbar may visually present:

- Home
- About
- Experience
- Projects
- Skills
- Contact

Research may be presented as a homepage section and/or as a distinct page depending on final content volume.

Resume should be accessible through a clear CTA rather than as a primary navigation page.

---

## 8. Homepage Structure

The homepage should use the following hierarchy.

### 8.1 Navigation

Required elements:

- Personal wordmark / name
- Home
- About
- Experience
- Projects
- Skills
- Contact
- Resume CTA

Optional:

- Theme toggle, only if dark mode is approved in the design system

Navigation behavior:

- Sticky or semi-sticky may be considered
- Mobile navigation must use an accessible menu
- Navigation should not dominate the viewport

---

### 8.2 Hero Section

Required content:

- Name
- Professional positioning
- Short supporting description
- Primary CTA: **View My Work**
- Secondary CTA: **Download Resume**
- Professional portrait or profile visual
- Optional availability indicator

Desktop direction:

```text
Text / CTA              Portrait
```

Mobile direction:

```text
Portrait
Name
Headline
Description
Primary CTA
Secondary CTA
```

The hero should immediately communicate:

> Software • Data • AI

without using that phrase as the only explanation of the user's profile.

---

### 8.3 Credibility / Highlights Strip

Purpose:

Provide concise evidence before long-form content.

Candidate highlights:

- GPA 3.86 / 4.00
- Scopus-indexed publication
- Bangkit Academy
- Top 50 Bangkit Elevator Pitch Challenge
- Research / deployed AI project
- Independent web projects

Only verified highlights should be shown.

Do not overcrowd this section.

Recommended maximum: 3–4 items.

---

### 8.4 Featured Projects

This should be one of the most visually prominent homepage sections.

Featured projects should represent the three portfolio pillars:

- Software
- Data
- AI

Recommended initial featured order:

1. Super Soybean
2. Manajemen Proyek CV Graha Raya Consultant
3. SIBUKU
4. Brofin

Secondary / additional projects:

5. Bike-Sharing Analysis Dashboard
6. Etomac

Final order may be changed in `PROJECTS_INDEX.md`.

Each featured project card / block should contain:

- Project name
- Category
- Role
- Short problem / solution summary
- Relevant technologies
- Key metric or outcome, where supported
- Project cover image
- Link to case study

Avoid generic equal-sized card grids when possible.

Preferred visual pattern:

```text
Large Project Visual + Supporting Text
```

Alternating image/text direction may be used on desktop.

---

### 8.5 Experience

Show the strongest professional and project-based experience.

Initial priorities:

1. Plant Biotechnology Laboratory — Research Assistant
2. Freelance Web Developer
3. Bangkit Academy — Machine Learning Cohort
4. Indonesian Oil Palm Research Institute — Web Developer

Each experience item should include:

- Organization
- Role
- Location where relevant
- Date range
- Short outcome-focused summary
- Link to related project where applicable

Do not copy all CV bullet points directly.

---

### 8.6 Research & Publication

This section should emphasize research credibility.

Content may include:

- Computer vision research
- Soybean analysis
- Peer-reviewed publication
- Data in Brief
- Scopus-indexed publication
- Link to publication / DOI if available

The section should remain concise and evidence-based.

---

### 8.7 About

The About section should not repeat the CV summary.

Recommended narrative structure:

1. Who I am
2. What I work on
3. How I approach problems
4. What I am currently interested in learning / building

Possible themes:

- Information Technology background
- Software, data, and AI intersection
- Practical problem solving
- Interest in business and technical workflows
- Continuous learning

---

### 8.8 Skills

Skills should be grouped by capability, not presented as an uncontrolled icon wall.

Recommended groups:

#### Software Engineering
- JavaScript
- React
- Next.js
- PHP
- Laravel
- Yii
- Flask
- REST API
- Git
- MVC
- OOP

#### Data & Analytics
- Python
- SQL
- Data Cleaning
- Data Preprocessing
- Exploratory Data Analysis
- Data Visualization
- Excel
- Google Sheets

#### AI / Machine Learning
- TensorFlow
- PyTorch
- Computer Vision
- YOLO
- Model Evaluation

#### Collaboration / Professional
- Leadership
- Analytical Thinking
- Problem Solving
- Cross-functional Collaboration
- Project Management
- Communication

If some technologies are currently being explored rather than already demonstrated professionally, they should be labeled appropriately.

---

### 8.9 Leadership

Leadership may be a dedicated homepage section or a smaller supporting section.

Priority experiences:

- Head of Innovate Hub Division — SGC USU
- Chairperson — MPMF Fasilkom-TI USU

Use concise evidence such as team size and scope of responsibility.

Other organizational experiences may remain in the downloadable resume.

---

### 8.10 Contact

Required content:

- Contact heading
- Short invitation copy
- Email
- LinkedIn
- GitHub
- Contact form

Suggested fields:

- Name
- Email
- Subject
- Message

Expected application flow:

```text
React Form
    ↓
POST /api/contact
    ↓
Express API
    ↓
Validation
    ↓
PostgreSQL
```

The form must provide:

- Validation
- Loading state
- Success state
- Failure state
- Accessible error messages

---

### 8.11 Footer

Recommended content:

- Muhammad Azis Saputra
- Short professional tagline
- LinkedIn
- GitHub
- Email
- Copyright
- Build stack credit

Example direction:

> Built with React, Express & PostgreSQL.

Do not overfill the footer.

---

## 9. Project Case Study Strategy

Each project should have its own route:

```text
/projects/super-soybean
/projects/graha-raya-project-management
/projects/sibuku
/projects/brofin
/projects/bike-sharing-dashboard
/projects/etomac
```

Case studies should use only sections relevant to the specific project.

Possible case study structure:

1. Project Hero
2. Project Overview
3. Problem
4. Solution
5. My Role
6. Key Features
7. System / Data / ML Architecture
8. Workflow
9. Database Design
10. Technology Stack
11. Challenges & Solutions
12. Results / Outcome
13. What I Learned
14. Screenshots
15. Project Resources
16. Credits / Team

No project is required to include every section.

---

## 10. Project Portfolio Inventory

### 10.1 Super Soybean

**Category:** AI / Computer Vision / Smart Agriculture  
**Type:** Product-based Research Project  
**Role:** AI Engineer, UI/UX Designer, Backend Developer  
**Status:** Completed  
**Featured:** Yes  

Primary value:

- Strongest AI / computer vision case study
- Real model metrics
- Flask backend integration
- Real-time inference
- Research context

Key supported metrics:

- mAP@0.5:0.95: approximately 0.92005
- Precision: approximately 0.99735
- Inference speed: 16.63 ms
- FPS: 60.13

Source:
`docs/projects/SUPER_SOYBEAN.md`

---

### 10.2 Manajemen Proyek CV Graha Raya Consultant

**Category:** Software Engineering / Business Information System  
**Type:** Freelance Project  
**Role:** Full Stack Web Developer  
**Status:** Completed on Local  
**Featured:** Yes  

Primary value:

- Business workflow implementation
- Role-Based Access Control
- Project progress approval workflow
- Notifications
- Relational database design
- Custom MVC

Source:
`docs/projects/GRAHA_RAYA.md`

---

### 10.3 SIBUKU

**Category:** Software Engineering / Information System  
**Type:** Intern Project  
**Role:** Full Stack Web Developer  
**Status:** Completed on Local  
**Featured:** Yes  

Primary value:

- Yii2 MVC
- Inventory management
- Transactions
- Payments
- Reporting
- Relational database
- PDF and Excel generation

Source:
`docs/projects/SIBUKU.md`

---

### 10.4 Brofin

**Category:** Machine Learning / Product Development  
**Type:** Product-based Capstone  
**Role:** Machine Learning Engineer  
**Status:** Completed  
**Featured:** Yes  

Primary value:

- ML in product context
- Financial prediction
- Product recommendation
- Mobile + Cloud + ML collaboration
- Cross-functional teamwork
- Architecture trade-off from Cloud SQL to Firestore

Source:
`docs/projects/BROFIN.md`

---

### 10.5 Bike-Sharing Analysis Dashboard

**Category:** Data Analytics  
**Type:** Data Analytics Project  
**Role:** Data Analyst  
**Status:** Completed  
**Featured:** Secondary / optional homepage feature  

Primary value:

- Data cleaning
- EDA
- User behavior analysis
- Seasonal analysis
- Hourly analysis
- Streamlit dashboard
- Plotly visualizations

Source:
`docs/projects/BIKE_SHARING.md`

---

### 10.6 Etomac

**Category:** Software Engineering / E-Commerce  
**Type:** Freelance Project  
**Role:** Full Stack Web Developer  
**Status:** Completed  
**Featured:** Secondary  

Primary value:

- E-commerce business flow
- Authentication
- Cart
- Checkout
- Payment proof
- Admin validation
- Relational database

Source:
`docs/projects/ETOMAC.md`

---

## 11. Asset Strategy

Project assets will be catalogued in `ASSET_MANIFEST.md`.

Expected asset groups:

```text
assets/
├── personal/
├── documents/
├── branding/
└── projects/
```

Recommended structure:

```text
assets/
├── personal/
│   └── profile.webp
│
├── documents/
│   └── resume.pdf
│
├── branding/
│   ├── favicon.svg
│   ├── logo.svg
│   └── og-image.webp
│
└── projects/
    ├── super-soybean/
    ├── graha-raya/
    ├── sibuku/
    ├── brofin/
    ├── bike-sharing/
    └── etomac/
```

Each project folder may contain:

- `cover.webp`
- UI screenshots
- architecture diagram
- database design / ERD
- application workflow
- ML architecture
- charts
- supporting images

Project cover images should use a consistent aspect ratio.

Recommended:

```text
16:9
```

Example source size:

```text
1600 × 900
```

Screenshots should be optimized for web before production deployment.

---

## 12. Visual Direction

The final design system will be defined in `DESIGN_SYSTEM.md`.

Current approved direction:

- Professional
- Minimal
- Modern
- Content-focused
- Technical without being overly futuristic
- Editorial influence is acceptable
- Strong use of whitespace
- Clear typographic hierarchy
- Project visuals should be prominent
- Restrained use of accent colors
- Subtle interactions
- Mobile-first

Avoid:

- Heavy gradients everywhere
- Neon cyberpunk styling
- Excessive glassmorphism
- 3D avatars
- Overuse of floating cards
- Infinite marquees
- Particle effects
- Custom cursors
- Excessive parallax
- Overly animated project cards

---

## 13. Functional Requirements

### 13.1 General

The application must:

- Be responsive
- Work on modern desktop and mobile browsers
- Support direct routing to project pages
- Support resume download
- Link correctly to LinkedIn and GitHub
- Display optimized project images
- Provide a working contact form
- Handle API errors gracefully
- Provide accessible navigation

### 13.2 Project Navigation

Users must be able to:

- Open project detail pages
- Return to Projects / Home easily
- Navigate to next / previous project where appropriate
- View relevant images without broken paths

### 13.3 Contact Form

The form must:

- Validate required fields
- Validate email format
- Prevent empty submissions
- Show loading state
- Show success response
- Show failure response
- Store accepted submissions through backend logic

---

## 14. Technical Direction

Detailed technical decisions belong in `TECHNICAL_SPEC.md`.

Current approved stack:

### Frontend

- React
- Vite
- JavaScript
- CSS or CSS Modules
- Lucide React for interface icons if needed

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL

### Database Hosting

- Managed PostgreSQL, currently planned with Neon

### Version Control

- Git
- GitHub

### Deployment

- Vercel

### Development Environment

- Google Antigravity
- Node.js 24 LTS
- npm
- Git for Windows

---

## 15. Application Architecture

High-level architecture:

```text
Browser
   ↓
React Frontend
   ↓
REST API / JSON
   ↓
Node.js + Express
   ↓
PostgreSQL
```

The frontend must never expose database credentials.

Database credentials must be accessed only through backend environment variables.

---

## 16. Database Scope

The portfolio should not use a database merely to make the project look complex.

Database usage should be justified.

Initial approved database scope:

### Contact Messages

Possible table:

```text
contact_messages
----------------
id
name
email
subject
message
created_at
```

Project content may initially remain source-controlled unless there is a clear reason to make it database-driven.

Do not create unnecessary tables such as:

- users
- roles
- permissions
- sessions
- certificates
- education
- achievements

unless the product requirement changes later.

---

## 17. Content Source Rules

The application must treat project documentation as the source of truth for project claims.

Expected source files:

```text
docs/projects/
├── BROFIN.md
├── ETOMAC.md
├── GRAHA_RAYA.md
├── SIBUKU.md
├── SUPER_SOYBEAN.md
└── BIKE_SHARING.md
```

If a statement is not supported by those documents, the Agent must not invent it.

Additional professional content should come from:

- Resume
- Confirmed personal information
- Approved `CONTENT_SPEC.md`

---

## 18. SEO Requirements

Initial release should include:

- Unique page title
- Meta description
- Open Graph metadata
- Favicon
- Semantic heading structure
- Descriptive project URLs
- Image alt text
- Canonical URL after production domain is known

Suggested homepage title direction:

> Muhammad Azis Saputra | Software, Data & AI Portfolio

Final title should be approved in `CONTENT_SPEC.md`.

---

## 19. Accessibility Requirements

Minimum accessibility expectations:

- Semantic HTML
- Keyboard-accessible navigation
- Visible focus states
- Sufficient contrast
- Meaningful link labels
- Form labels
- Form error messages
- Descriptive image alt text
- Respect `prefers-reduced-motion` for non-essential animation
- No critical information communicated through color alone

---

## 20. Responsive Requirements

The site must be developed mobile-first.

Suggested breakpoint direction:

```text
Base / Mobile : 360px+
Tablet        : 768px+
Desktop       : 1024px+
Large Desktop : 1440px+
```

These values may be adjusted in `DESIGN_SYSTEM.md`.

No desktop layout should simply be scaled down to mobile.

Components must reflow appropriately.

Example:

```text
Desktop Featured Project
Image | Text

Mobile Featured Project
Image
Text
```

---

## 21. Performance Requirements

The portfolio should aim for:

- Optimized responsive images
- WebP / AVIF where appropriate
- Lazy loading below-the-fold images
- Minimal unused JavaScript
- No unnecessary animation packages
- Limited external font usage
- Good Core Web Vitals
- No console errors in production

Performance should be tested before final deployment.

---

## 22. Security Requirements

Mandatory:

- Never commit `.env`
- Never expose database passwords
- Never expose API secrets to client-side JavaScript
- Validate backend inputs
- Sanitize / constrain contact form data
- Use environment variables
- Use HTTPS in production
- Do not store sensitive personal data unnecessarily

Contact form implementation should consider abuse prevention before production release.

---

## 23. Git Requirements

The project is already initialized with Git.

Primary branch:

```text
main
```

Recommended commit style:

```text
chore: initialize portfolio project
docs: add project specification
feat: add mobile navigation
feat: add featured projects section
fix: correct project card responsiveness
refactor: extract reusable project component
docs: update project case study content
```

Commits should represent understandable development milestones.

Do not commit:

- `.env`
- secret credentials
- unnecessary local build files
- `node_modules`

---

## 24. Deployment Requirements

Deployment target:

**Vercel**

Planned workflow:

```text
Antigravity
   ↓
Git
   ↓
GitHub
   ↓
Vercel
```

Database:

```text
Express API
   ↓
Managed PostgreSQL
```

Environment variables must be configured separately for:

- Local development
- Vercel production

Deployment must not happen until the local application is stable.

---

## 25. Development Process

The project should be built incrementally.

Recommended high-level order:

### Phase 1 — Documentation
- PROJECT_SPEC.md
- CONTENT_SPEC.md
- PROJECTS_INDEX.md
- ASSET_MANIFEST.md
- DESIGN_SYSTEM.md
- TECHNICAL_SPEC.md
- AGENT_RULES.md
- IMPLEMENTATION_PLAN.md

### Phase 2 — Frontend Initialization
- React
- Vite
- CSS structure
- Router
- Base layout

### Phase 3 — Design Foundation
- Typography
- Color tokens
- Spacing
- Grid
- Buttons
- Navigation

### Phase 4 — Homepage
- Hero
- Highlights
- Featured Projects
- Experience
- Research
- About
- Skills
- Contact
- Footer

### Phase 5 — Project Case Studies
- Project routes
- Project hero
- Architecture images
- Screenshots
- Case study content

### Phase 6 — Backend
- Express API
- Contact endpoint
- Validation
- Error handling

### Phase 7 — PostgreSQL
- Database setup
- Contact message table
- Connection handling
- Environment configuration

### Phase 8 — Quality
- Responsive testing
- Accessibility
- SEO
- Performance
- Error testing

### Phase 9 — GitHub & Deployment
- Repository push
- Vercel
- Production environment variables
- Final smoke testing

---

## 26. Non-Goals for Initial Release

Do not add these unless explicitly approved later:

- Next.js migration
- TypeScript migration
- Tailwind CSS
- Redux
- GraphQL
- Prisma
- Docker
- Redis
- Microservices
- Firebase
- Supabase
- Authentication system
- Admin dashboard
- CMS
- Blog
- User accounts
- Comment system
- AI chatbot
- Complex 3D graphics
- WebGL scenes
- Background music
- Custom cursor
- Particle animation
- Game mechanics

These are outside the current MVP.

---

## 27. Required Supporting Documents

This project specification must be accompanied by:

```text
docs/
├── CONTENT_SPEC.md
├── PROJECTS_INDEX.md
├── ASSET_MANIFEST.md
├── DESIGN_SYSTEM.md
├── TECHNICAL_SPEC.md
├── AGENT_RULES.md
├── IMPLEMENTATION_PLAN.md
└── projects/
```

Purpose:

- `CONTENT_SPEC.md` — final website copy
- `PROJECTS_INDEX.md` — project registry and display priority
- `ASSET_MANIFEST.md` — image and file inventory
- `DESIGN_SYSTEM.md` — visual rules
- `TECHNICAL_SPEC.md` — implementation architecture
- `AGENT_RULES.md` — coding-agent constraints
- `IMPLEMENTATION_PLAN.md` — task sequence and definition of done
- `projects/*.md` — source documentation for each project

---

## 28. Agent Guidance

Any coding agent working on this project must:

1. Read this file before beginning implementation.
2. Read the relevant supporting specification before changing that area.
3. Use project documentation as the source of truth.
4. Never invent project facts.
5. Never silently change the approved technology stack.
6. Avoid unnecessary dependencies.
7. Preserve mobile-first design.
8. Prefer reusable components.
9. Keep the application accessible.
10. Protect secrets and environment variables.
11. Ask for clarification when a requirement is genuinely ambiguous.
12. Do not redesign the project outside the approved visual direction without approval.
13. Do not convert the project to another framework without approval.
14. Do not remove existing project assets without approval.
15. Keep implementation understandable enough that the project owner can explain it during technical interviews.

Detailed rules will be defined in `AGENT_RULES.md`.

---

## 29. Definition of Success

The initial portfolio release is considered successful when:

- The portfolio clearly communicates Muhammad Azis Saputra's professional identity.
- Software, Data, and AI work are all represented by real evidence.
- Featured projects have strong, readable case studies.
- Recruiters can understand the portfolio quickly.
- Mobile and desktop experiences are both polished.
- The site is deployed publicly.
- Resume, LinkedIn, GitHub, and contact paths work.
- The contact form functions correctly.
- No project information is fabricated.
- The user can explain the frontend, backend, database, Git, and deployment flow used by the portfolio itself.
- The codebase remains understandable, maintainable, and suitable as an interview discussion artifact.

---

## 30. Current Status

### Completed

- Node.js development environment prepared
- npm prepared
- Git installed and updated
- Git default branch configured as `main`
- Git Credential Manager available
- Antigravity IDE and Agent installed
- Local repository initialized at:

```text
D:\Projects\muhammad-azis-saputra-portfolio
```

- Existing project documentation collected
- Existing project screenshots available
- Database design assets available
- System architecture assets available

### Next Documentation Steps

1. `CONTENT_SPEC.md`
2. `PROJECTS_INDEX.md`
3. `ASSET_MANIFEST.md`
4. `DESIGN_SYSTEM.md`
5. `TECHNICAL_SPEC.md`
6. `AGENT_RULES.md`
7. `IMPLEMENTATION_PLAN.md`

Coding should begin only after the core specifications are sufficiently defined.

---

**Document Status:** Initial Approved Project Blueprint  
**Owner:** Muhammad Azis Saputra  
**Project:** Professional Portfolio Website
