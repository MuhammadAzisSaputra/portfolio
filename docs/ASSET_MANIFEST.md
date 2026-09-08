# ASSET_MANIFEST.md

## 1. Document Purpose

This document defines the asset structure, naming rules, recommended formats, intended usage, and preparation checklist for the professional portfolio of **Muhammad Azis Saputra**.

It serves as the central reference for all visual and downloadable assets used by the website, including:

- Personal photos
- Resume and professional documents
- Branding assets
- Project screenshots
- Project cover images
- Database design / ERD images
- System architecture diagrams
- Application workflow diagrams
- Machine-learning diagrams and visualizations
- Technology stack logos
- Organization / institution logos
- Publication / research assets
- Social and platform icons
- Open Graph / social-preview images
- Future optional assets

The implementation agent must not assume that an asset exists unless it is registered in this file or later added to an approved revision.

---

# 2. Asset Principles

All assets should follow these principles.

## 2.1 Real Assets First

Prefer:

- Real screenshots
- Real diagrams
- Real project outputs
- Real publication links
- Real professional portraits
- Real logos from official or reputable sources

Avoid:

- Random stock images
- Fake dashboards
- AI-generated project screenshots
- Fake charts
- Decorative mockups that misrepresent the project

---

## 2.2 Consistency

Assets should follow consistent:

- File naming
- Aspect ratios
- Cropping
- Visual framing
- Resolution
- Background treatment

---

## 2.3 Web Optimization

Images should be optimized before deployment.

Recommended formats:

```text
SVG   → logos, icons, diagrams when vector is available
WebP  → screenshots, project covers, portraits
AVIF  → optional optimized raster images
PNG   → transparency or source asset when WebP conversion is not appropriate
JPG   → only when necessary
PDF   → resume / downloadable documents
```

---

## 2.4 No Broken Asset References

If an asset has not yet been prepared:

- Keep the path documented as `TBD`
- Do not reference the file in production code
- Do not display broken image placeholders

---

# 3. Root Asset Structure

Recommended structure:

```text
public/
└── assets/
    ├── personal/
    ├── branding/
    ├── documents/
    ├── tech/
    ├── organizations/
    ├── research/
    ├── social/
    └── projects/
```

Full recommended structure:

```text
public/
└── assets/
    ├── personal/
    │   ├── portrait/
    │   └── optional/
    │
    ├── branding/
    │   ├── logo/
    │   ├── favicon/
    │   └── social-preview/
    │
    ├── documents/
    │   ├── resume/
    │   └── optional/
    │
    ├── tech/
    │   ├── programming/
    │   ├── frameworks/
    │   ├── data/
    │   ├── ai/
    │   ├── databases/
    │   ├── tools/
    │   └── cloud/
    │
    ├── organizations/
    │
    ├── research/
    │
    ├── social/
    │
    └── projects/
        ├── super-soybean/
        ├── graha-raya/
        ├── sibuku/
        ├── brofin/
        ├── bike-sharing/
        └── etomac/
```

---

# 4. File Naming Convention

Use:

```text
lowercase-kebab-case.extension
```

Examples:

```text
profile-semi-formal.webp
super-soybean-cover.webp
sibuku-dashboard.webp
graha-raya-database-design.webp
python.svg
laravel.svg
postgresql.svg
linkedin.svg
```

Avoid:

```text
IMG_9384.PNG
Screenshot (23).png
new project final final.png
logo_python2.svg
```

---

# 5. Personal Assets

## 5.1 Semi-Formal Portrait

### Status

```text
Available — user already has a semi-formal photo
```

### Recommended Path

```text
public/assets/personal/portrait/profile-semi-formal.webp
```

### Source Backup

Optional:

```text
public/assets/personal/portrait/profile-semi-formal-original.jpg
```

### Recommended Usage

- Hero section
- About section
- Optional Open Graph image composition

### Recommended Preparation

Preferred crop:

```text
Portrait / half-body
```

Recommended ratios:

```text
4:5
3:4
```

Recommended source size:

```text
1600 × 2000 px or equivalent
```

Web version may be smaller after optimization.

### Visual Direction

Prefer:

- Clean background
- Professional but approachable
- Natural lighting
- Consistent skin tone
- Minimal distractions

Avoid:

- Full formal passport-style framing for hero
- Heavy beauty retouching
- AI-altered facial features
- Overly dramatic background

---

## 5.2 Optional Alternate Portrait

Status:

```text
Optional
```

Recommended path:

```text
public/assets/personal/portrait/profile-alternate.webp
```

Possible use:

- About page
- Social preview
- Secondary section

Do not prepare this unless useful.

---

# 6. Resume & Professional Documents

## 6.1 Resume PDF

### Status

```text
Available
```

### Recommended Path

```text
public/assets/documents/resume/muhammad-azis-saputra-resume.pdf
```

### Usage

- Hero CTA
- Navbar Resume button
- Contact section
- Footer optional link

### Accessible Label

```text
Download Muhammad Azis Saputra Resume
```

---

## 6.2 Optional Certificates

Status:

```text
Optional
```

Recommended directory:

```text
public/assets/documents/certificates/
```

Do not place many certificate PDFs in the initial homepage.

Use only if a dedicated credentials page is added later.

---

# 7. Branding Assets

## 7.1 Wordmark / Personal Logo

Status:

```text
TBD
```

Recommended folder:

```text
public/assets/branding/logo/
```

Possible filenames:

```text
wordmark.svg
monogram.svg
logo-dark.svg
logo-light.svg
```

Possible concepts:

```text
Muhammad Azis Saputra
AZIS.
MAS.
```

Keep branding minimal.

---

## 7.2 Favicon

Status:

```text
TBD
```

Recommended files:

```text
public/assets/branding/favicon/favicon.svg
public/assets/branding/favicon/favicon-32x32.png
public/assets/branding/favicon/apple-touch-icon.png
```

Preferred primary format:

```text
SVG
```

---

## 7.3 Open Graph / Social Preview

Status:

```text
TBD
```

Recommended path:

```text
public/assets/branding/social-preview/og-image.webp
```

Recommended source size:

```text
1200 × 630 px
```

Suggested content:

```text
Muhammad Azis Saputra
Software • Data • AI

Professional portrait
Minimal background
Portfolio identity
```

Usage:

- LinkedIn previews
- WhatsApp previews
- Social sharing
- Open Graph metadata

---

# 8. Technology Stack Logo Library

This directory is intentionally prepared even if all logos are not used initially.

Root:

```text
public/assets/tech/
```

Preferred format:

```text
SVG
```

Fallback:

```text
PNG
```

SVG is preferred because it scales cleanly and is usually lightweight.

---

## 8.1 Programming Languages

Directory:

```text
public/assets/tech/programming/
```

Suggested placeholders:

```text
javascript.svg
python.svg
php.svg
sql.svg
kotlin.svg
```

Potential future additions:

```text
typescript.svg
java.svg
go.svg
```

Only display technologies that are actually relevant.

---

## 8.2 Frontend Frameworks / Libraries

Directory:

```text
public/assets/tech/frameworks/
```

Suggested placeholders:

```text
react.svg
nextjs.svg
bootstrap.svg
vite.svg
```

Potential future additions:

```text
tailwindcss.svg
vue.svg
```

Do not show future technologies unless used.

---

## 8.3 Backend Frameworks

Directory:

```text
public/assets/tech/frameworks/
```

Suggested placeholders:

```text
laravel.svg
yii.svg
flask.svg
express.svg
nodejs.svg
```

Optional:

```text
django.svg
```

---

## 8.4 Data & Analytics

Directory:

```text
public/assets/tech/data/
```

Suggested placeholders:

```text
pandas.svg
numpy.svg
plotly.svg
streamlit.svg
matplotlib.svg
seaborn.svg
excel.svg
google-sheets.svg
```

---

## 8.5 Artificial Intelligence / Machine Learning

Directory:

```text
public/assets/tech/ai/
```

Suggested placeholders:

```text
tensorflow.svg
pytorch.svg
yolo.svg
opencv.svg
scikit-learn.svg
ultralytics.svg
```

Notes:

- Some brands may not provide official SVG assets in the same style.
- Keep visual treatment consistent.
- Do not force every technology to appear as a logo if an official asset is weak or unavailable.

---

## 8.6 Databases

Directory:

```text
public/assets/tech/databases/
```

Suggested placeholders:

```text
mysql.svg
postgresql.svg
mariadb.svg
firestore.svg
```

Potential future additions:

```text
mongodb.svg
sqlite.svg
```

---

## 8.7 Tools & Version Control

Directory:

```text
public/assets/tech/tools/
```

Suggested placeholders:

```text
git.svg
github.svg
composer.svg
xampp.svg
jupyter.svg
google-colab.svg
android-studio.svg
figma.svg
```

Optional development portfolio tools:

```text
antigravity.svg
vercel.svg
```

Only use the Antigravity logo if an appropriate official / permitted asset is available.

---

## 8.8 Cloud / Deployment

Directory:

```text
public/assets/tech/cloud/
```

Suggested placeholders:

```text
vercel.svg
google-cloud.svg
cloud-run.svg
app-engine.svg
cloud-storage.svg
neon.svg
```

Use only what is supported by the associated project or by the portfolio itself.

---

# 9. Tech Logo Usage Rules

Tech logos should:

- Support quick scanning
- Not become the main visual content
- Use consistent sizing
- Have accessible labels
- Avoid visually implying equal proficiency

Recommended icon size range:

```text
20–32 px in compact UI
32–48 px in feature sections
```

Avoid a giant uncontrolled logo wall.

Preferred layout:

```text
Category
Logo + Technology Name
Logo + Technology Name
Logo + Technology Name
```

or text-first with subtle icons.

---

# 10. Organization / Institution Logos

Directory:

```text
public/assets/organizations/
```

Possible assets:

```text
usu.svg
plant-biotechnology-lab.png
io-pri.png
bangkit-academy.png
sgc-usu.png
mpmf-fasilkom-ti.png
data-in-brief.svg
elsevier.svg
```

Status:

```text
TBD / optional
```

Recommended usage:

- Experience section
- Research / publication section
- Education section

Do not use logos if:

- Quality is poor
- Usage rights are unclear
- They add visual clutter

Text-only presentation is acceptable.

---

# 11. Social Icons

Directory:

```text
public/assets/social/
```

Suggested placeholders:

```text
linkedin.svg
github.svg
email.svg
```

Preferred alternative:

Use an icon library such as Lucide React for interface icons and reserve local brand SVGs for official platform logos.

---

# 12. Research Assets

Directory:

```text
public/assets/research/
```

Potential assets:

```text
publication-cover.webp
publication-preview.webp
soybean-dataset-sample.webp
model-comparison-chart.webp
research-workflow.webp
```

Do not include private research material without approval.

---

# 13. Project Asset Structure — Super Soybean

Directory:

```text
public/assets/projects/super-soybean/
```

Recommended manifest:

```text
cover.webp
dashboard.webp
seed-counting.webp
real-time-detection.webp
batch-detection.webp
model-result.webp
architecture.webp
workflow.webp
```

Optional:

```text
dataset-sample.webp
training-result.webp
model-comparison.webp
mobile-view.webp
```

---

## Super Soybean — Asset Usage

### `cover.webp`

Usage:

- Homepage featured project
- Projects page
- Project hero

Recommended ratio:

```text
16:9
```

---

### `dashboard.webp`

Usage:

- Case-study interface overview

---

### `seed-counting.webp`

Usage:

- Key Feature section

---

### `real-time-detection.webp`

Usage:

- Real-time inference section

---

### `model-result.webp`

Usage:

- Model performance section

---

### `architecture.webp`

Usage:

- System Architecture section

---

### `workflow.webp`

Usage:

- Application / ML workflow section

---

# 14. Project Asset Structure — Graha Raya Consultant

Directory:

```text
public/assets/projects/graha-raya/
```

Recommended manifest:

```text
cover.webp
admin-dashboard.webp
project-manager-dashboard.webp
mandor-dashboard.webp
project-management.webp
payment-management.webp
progress-report.webp
progress-approval.webp
notification.webp
database-design.webp
architecture.webp
workflow.webp
```

Optional:

```text
mobile-view.webp
project-detail.webp
schedule.webp
```

Primary visual strengths:

- Multi-role dashboards
- Project workflow
- Approval system
- Database design

---

# 15. Project Asset Structure — SIBUKU

Directory:

```text
public/assets/projects/sibuku/
```

Recommended manifest:

```text
cover.webp
dashboard.webp
book-management.webp
inventory.webp
transaction.webp
payment.webp
courier.webp
reporting.webp
database-design.webp
architecture.webp
workflow.webp
```

Optional:

```text
pdf-report.webp
excel-report.webp
mobile-view.webp
```

Primary visual strengths:

- Inventory
- Transactions
- Reporting
- Relational data structure

---

# 16. Project Asset Structure — Brofin

Directory:

```text
public/assets/projects/brofin/
```

Recommended manifest:

```text
cover.webp
dashboard.webp
budgeting.webp
income-expense.webp
financial-goal.webp
prediction.webp
recommendation.webp
ml-architecture.webp
system-architecture.webp
workflow.webp
```

Optional:

```text
android-home.webp
presentation.webp
team.webp
```

Primary visual strengths:

- Android product UI
- Financial planning workflow
- ML architecture
- Cross-functional product structure

---

# 17. Project Asset Structure — Bike-Sharing Dashboard

Directory:

```text
public/assets/projects/bike-sharing/
```

Recommended manifest:

```text
cover.webp
dashboard-overview.webp
summary-metrics.webp
seasonal-analysis.webp
hourly-analysis.webp
date-filter.webp
architecture.webp
```

Optional:

```text
data-cleaning.webp
eda-chart.webp
```

Primary visual strengths:

- Interactive dashboard
- Seasonal analysis
- Hourly patterns
- User comparison

---

# 18. Project Asset Structure — Etomac

Directory:

```text
public/assets/projects/etomac/
```

Recommended manifest:

```text
cover.webp
home.webp
product-catalog.webp
product-detail.webp
cart.webp
checkout.webp
payment-proof.webp
order-history.webp
admin-dashboard.webp
database-design.webp
architecture.webp
workflow.webp
```

Optional:

```text
mobile-view.webp
category-filter.webp
```

Primary visual strengths:

- E-commerce flow
- Product catalog
- Checkout
- Admin workflow
- Database structure

---

# 19. Database Design Assets

The user already has MySQL database-design assets for some projects.

Recommended naming:

```text
database-design.webp
database-erd.webp
schema.webp
```

Preferred format:

```text
SVG if exported as vector
WebP if exported as raster image
```

Preferred usage:

- Dedicated case-study section
- Zoomable image / lightbox if implementation supports it

Do not crop relationship labels or table names.

---

# 20. Architecture Diagram Assets

The user already has system architecture images.

Recommended naming:

```text
architecture.webp
system-architecture.webp
ml-architecture.webp
```

If the source is editable/vector:

```text
architecture.svg
```

Preferred usage:

- Case-study Architecture section
- Technical discussion
- Interview preparation reference

---

# 21. Workflow Diagram Assets

Recommended naming:

```text
workflow.webp
application-workflow.webp
ml-workflow.webp
data-workflow.webp
```

Use consistent visual styling where possible.

---

# 22. Screenshot Preparation Rules

All screenshots should:

- Show relevant content
- Hide personal or sensitive data
- Avoid browser bookmarks / personal tabs
- Avoid Windows notifications
- Avoid private filenames
- Avoid localhost credentials
- Avoid database passwords
- Avoid API keys

Recommended cleanup:

```text
Crop unnecessary browser UI
Blur sensitive data if needed
Remove personal account details
Use consistent framing
```

---

# 23. Screenshot Resolution

Recommended source resolution:

```text
Desktop:
1440 × 900 or higher

Mobile:
390 × 844 or similar modern mobile viewport
```

Project covers:

```text
1600 × 900
```

Do not upscale heavily if the source is low resolution.

---

# 24. Responsive Project Assets

Optional future structure:

```text
desktop/
tablet/
mobile/
```

Example:

```text
public/assets/projects/sibuku/
├── desktop/
├── mobile/
└── diagrams/
```

This deeper structure is optional.

Use only if the number of assets becomes large.

---

# 25. Asset Priority Levels

Each asset may be categorized as:

```text
P0 — Required for initial release
P1 — Strongly recommended
P2 — Optional enhancement
P3 — Future / archive
```

---

# 26. Initial P0 Assets

Prepare these first:

## Personal

```text
[P0] Semi-formal portrait
[P0] Resume PDF
```

## Branding

```text
[P0] Favicon
[P0] Open Graph image
```

## Featured Projects

For each featured project:

```text
[P0] Project cover
[P0] 2–4 key screenshots
[P0] Architecture diagram if available
[P0] Database design if relevant
```

Featured:

```text
Super Soybean
Graha Raya Consultant
SIBUKU
Brofin
```

---

# 27. Initial P1 Assets

```text
[P1] Bike-Sharing cover
[P1] Bike-Sharing dashboard screenshots
[P1] Etomac cover
[P1] Etomac screenshots
[P1] Technology logos
[P1] Publication visual
[P1] Institution logos where useful
```

---

# 28. Initial P2 Assets

```text
[P2] Alternate portrait
[P2] Mobile screenshots for every project
[P2] Full technology logo library
[P2] Achievement logos
[P2] Certificate previews
[P2] Team images
[P2] Presentation previews
```

---

# 29. Asset Registration Table Template

When assets are actually added, register them using this table format.

| Asset ID | Project / Group | File Path | Type | Status | Usage | Priority |
|---|---|---|---|---|---|---|
| `personal-profile` | Personal | `assets/personal/portrait/profile-semi-formal.webp` | WebP | Available / TBD | Hero | P0 |
| `resume-main` | Documents | `assets/documents/resume/muhammad-azis-saputra-resume.pdf` | PDF | Available / TBD | Resume CTA | P0 |

Continue this table as assets are prepared.

---

# 30. Recommended Initial Asset Inventory

## Personal

```text
[ ] profile-semi-formal.webp
[ ] muhammad-azis-saputra-resume.pdf
```

## Branding

```text
[ ] wordmark.svg
[ ] favicon.svg
[ ] favicon-32x32.png
[ ] apple-touch-icon.png
[ ] og-image.webp
```

## Social

```text
[ ] linkedin.svg
[ ] github.svg
[ ] email.svg
```

## Tech — Core Portfolio Stack

```text
[ ] react.svg
[ ] vite.svg
[ ] nodejs.svg
[ ] express.svg
[ ] postgresql.svg
[ ] git.svg
[ ] github.svg
[ ] vercel.svg
[ ] neon.svg
```

## Tech — Existing Experience

```text
[ ] python.svg
[ ] javascript.svg
[ ] php.svg
[ ] laravel.svg
[ ] yii.svg
[ ] flask.svg
[ ] mysql.svg
[ ] bootstrap.svg
[ ] tensorflow.svg
[ ] pytorch.svg
[ ] yolo.svg
[ ] opencv.svg
[ ] pandas.svg
[ ] numpy.svg
[ ] plotly.svg
[ ] streamlit.svg
[ ] scikit-learn.svg
```

---

# 31. Technology Logo Sourcing Rules

When collecting logos:

Prefer:

1. Official brand asset
2. Simple Icons
3. Devicon
4. Official project repository assets

Avoid:

- Random Google Images
- Watermarked logos
- Low-resolution screenshots
- Unofficial altered brand colors

If using third-party logo libraries, maintain consistent treatment.

---

# 32. SVG Handling Rules

SVG files should:

- Be clean
- Avoid embedded scripts
- Avoid unnecessary metadata
- Avoid excessive path complexity
- Preserve brand geometry
- Use `currentColor` only when appropriate

Do not manually recolor trademarked logos unless visual treatment permits it.

---

# 33. Asset Color Treatment

Preferred strategy:

- Keep official tech-brand colors where useful
- Or use monochrome treatment consistently

Do not mix:

- Random full-color logos
- Some grayscale
- Some outlined
- Some filled

without a design-system rule.

Final decision belongs in:

```text
DESIGN_SYSTEM.md
```

---

# 34. Icon Library Strategy

Not every UI icon needs a local asset.

Recommended:

```text
Lucide React
```

for interface icons such as:

```text
Arrow
External Link
Mail
Download
Menu
Close
Chevron
Search
```

Use local SVGs mainly for:

- Brand logos
- Tech logos
- Organization logos

---

# 35. Asset Accessibility Rules

Every meaningful image must have:

```text
alt text
```

Examples:

```text
"Super Soybean seed detection interface"
"SIBUKU transaction management screen"
"Graha Raya project approval workflow"
```

Decorative images should use:

```text
alt=""
```

Do not use filenames as alt text.

---

# 36. Lightbox / Zoom Recommendation

Recommended for:

- Database diagrams
- Architecture diagrams
- Detailed dashboard screenshots

Possible behavior:

```text
Click / tap image
→ open larger preview
```

This is optional and should only be implemented if accessible.

---

# 37. Asset Loading Strategy

Hero image:

```text
Eager load
```

Above-the-fold featured project cover:

```text
May be eager or high priority
```

Below-the-fold screenshots:

```text
Lazy load
```

Use responsive image sizing where appropriate.

---

# 38. Asset Security / Privacy

Never include:

- Database passwords
- API keys
- Tokens
- Private email inbox
- Private phone contacts
- Client secrets
- Personal customer data
- Private company documents
- Internal project credentials

Before publishing a screenshot, inspect it carefully.

---

# 39. Future Asset Containers

The following directories may be prepared even if currently empty:

```text
public/assets/achievements/
public/assets/certificates/
public/assets/testimonials/
public/assets/blog/
public/assets/speaking/
public/assets/press/
```

Do not use these sections unless actual content exists.

---

# 40. Suggested Expanded Asset Structure

If the project becomes large, the structure may evolve to:

```text
public/
└── assets/
    ├── personal/
    ├── branding/
    ├── documents/
    ├── social/
    ├── tech/
    ├── organizations/
    ├── achievements/
    ├── research/
    └── projects/
        ├── super-soybean/
        │   ├── cover/
        │   ├── ui/
        │   ├── diagrams/
        │   └── results/
        │
        ├── graha-raya/
        │   ├── cover/
        │   ├── ui/
        │   └── diagrams/
        │
        ├── sibuku/
        │   ├── cover/
        │   ├── ui/
        │   └── diagrams/
        │
        ├── brofin/
        │   ├── cover/
        │   ├── ui/
        │   └── diagrams/
        │
        ├── bike-sharing/
        │   ├── cover/
        │   ├── dashboard/
        │   └── diagrams/
        │
        └── etomac/
            ├── cover/
            ├── ui/
            └── diagrams/
```

Do not introduce this deeper structure unless needed.

---

# 41. Asset Preparation Workflow

Recommended workflow:

```text
1. Collect original files

2. Rename consistently

3. Remove sensitive information

4. Crop / clean screenshots

5. Export project cover

6. Convert appropriate images to WebP

7. Keep SVG where vector is available

8. Place into correct asset folder

9. Register file in ASSET_MANIFEST.md

10. Reference asset in implementation
```

---

# 42. Initial Asset Preparation Checklist

## Personal

```text
[ ] Export semi-formal portrait
[ ] Prepare web-optimized portrait
[ ] Rename resume PDF
```

## Featured Projects

### Super Soybean

```text
[ ] Cover
[ ] Main dashboard
[ ] Seed detection
[ ] Real-time detection
[ ] Model result
[ ] Architecture
[ ] Workflow
```

### Graha Raya

```text
[ ] Cover
[ ] Admin dashboard
[ ] Project Manager dashboard
[ ] Mandor dashboard
[ ] Progress approval
[ ] Payment management
[ ] Database design
[ ] Architecture
[ ] Workflow
```

### SIBUKU

```text
[ ] Cover
[ ] Dashboard
[ ] Inventory
[ ] Transaction
[ ] Reporting
[ ] Database design
[ ] Architecture
[ ] Workflow
```

### Brofin

```text
[ ] Cover
[ ] Dashboard
[ ] Budgeting
[ ] Financial goals
[ ] Recommendation
[ ] ML architecture
[ ] System architecture
[ ] Workflow
```

## Secondary Projects

### Bike-Sharing

```text
[ ] Cover
[ ] Dashboard
[ ] Seasonal analysis
[ ] Hourly analysis
[ ] Summary metrics
```

### Etomac

```text
[ ] Cover
[ ] Product catalog
[ ] Product detail
[ ] Cart
[ ] Checkout
[ ] Admin dashboard
[ ] Database design
[ ] Architecture
```

---

# 43. Tech Logo Preparation Checklist

## Core Web Portfolio

```text
[ ] React
[ ] Vite
[ ] Node.js
[ ] Express
[ ] PostgreSQL
[ ] Git
[ ] GitHub
[ ] Vercel
[ ] Neon
```

## Software Experience

```text
[ ] JavaScript
[ ] PHP
[ ] Laravel
[ ] Yii
[ ] Flask
[ ] Bootstrap
[ ] MySQL
```

## Data

```text
[ ] Python
[ ] Pandas
[ ] NumPy
[ ] Plotly
[ ] Streamlit
[ ] Excel
```

## AI

```text
[ ] TensorFlow
[ ] PyTorch
[ ] YOLO
[ ] OpenCV
[ ] Scikit-learn
```

---

# 44. Current Known Asset Status

Already available according to project preparation:

```text
[✓] Semi-formal personal photo
[✓] Resume PDF
[✓] Project UI / interface screenshots
[✓] MySQL database design images
[✓] System architecture images
[✓] Project documentation Markdown files
```

Still to prepare / organize:

```text
[ ] Final naming
[ ] Final folder placement
[ ] Optimized WebP versions
[ ] Project covers
[ ] Tech stack logo library
[ ] Favicon
[ ] Personal wordmark / logo
[ ] Open Graph image
[ ] Organization logos where needed
```

---

# 45. Relationship to Other Documents

This manifest should be used with:

```text
PROJECT_SPEC.md
CONTENT_SPEC.md
PROJECTS_INDEX.md
DESIGN_SYSTEM.md
TECHNICAL_SPEC.md
AGENT_RULES.md
IMPLEMENTATION_PLAN.md
```

Responsibilities:

- `PROJECT_SPEC.md` — overall project definition
- `CONTENT_SPEC.md` — website text and content
- `PROJECTS_INDEX.md` — project registry
- `ASSET_MANIFEST.md` — visual / downloadable asset registry
- `DESIGN_SYSTEM.md` — visual rules
- `TECHNICAL_SPEC.md` — technical implementation
- `AGENT_RULES.md` — coding-agent restrictions
- `IMPLEMENTATION_PLAN.md` — development sequence

---

# 46. Agent Rules for Assets

Any implementation agent must:

1. Read this manifest before referencing assets.
2. Never invent an asset path.
3. Never generate fake project screenshots.
4. Never replace real project screenshots with stock images.
5. Never modify the user's face or portrait without explicit instruction.
6. Never expose sensitive information contained in screenshots.
7. Use optimized web formats.
8. Preserve meaningful aspect ratios.
9. Use accessible alt text.
10. Avoid broken image states.
11. Do not download random third-party logos without approval.
12. Prefer official or reputable SVG sources.
13. Do not add unnecessary asset dependencies.
14. Preserve original source files when possible.
15. Keep project asset naming consistent with this document.

---

# 47. Document Status

**Document:** `ASSET_MANIFEST.md`  
**Project:** Muhammad Azis Saputra Professional Portfolio  
**Status:** Initial Asset Planning Manifest  
**Asset Strategy:** Real, consistent, web-optimized, evidence-driven  
**Current Priority:** Prepare and register P0 assets before implementation
