# DESIGN_SYSTEM.md

## 1. Document Purpose

This document defines the visual design system for the professional portfolio of **Muhammad Azis Saputra**.

It translates the approved portfolio direction into a consistent UI system covering:

- Visual identity
- Layout
- Typography
- Color
- Spacing
- Grid
- Glass surfaces
- Radius
- Shadows
- Buttons
- Navigation
- Project cards
- Experience cards
- Skill presentation
- Forms
- Images
- Responsive behavior
- Motion
- Accessibility
- Dark mode direction
- Implementation constraints

This document is the visual source of truth for Antigravity and any implementation agent.

If a visual decision conflicts with this file, the agent must not silently invent a new system.

---

# 2. Design Vision

The portfolio should feel:

- Minimal
- Modern
- Premium
- Calm
- Precise
- Professional
- Spacious
- Technical without looking "developer-template"
- Editorial without becoming magazine-like
- Inspired by contemporary Apple-like product design principles
- Clearly personal to Muhammad Azis Saputra

The visual language should rely on:

- Strong typography
- Large whitespace
- Clear hierarchy
- Real project imagery
- Soft glass surfaces
- Subtle depth
- Restrained gradients
- Clean geometry
- Refined motion
- High-quality photography

The site should not attempt to copy Apple's website literally.

The goal is to adopt similar principles:

> Clarity, hierarchy, restraint, quality of spacing, subtle material depth, and confidence in simple layouts.

---

# 3. Reference Interpretation

The supplied reference portfolio provides useful visual ideas, but its interaction model is not appropriate for this portfolio.

## 3.1 Elements Worth Adapting

The following characteristics are useful references:

- Large amounts of whitespace
- Minimal white interface
- Rounded surfaces
- Clean typography
- Compact navigation controls
- Soft borders
- Restrained shadows
- Small accent colors
- Simple iconography
- Visually calm layouts
- Strong visual separation between content groups

---

## 3.2 Elements That Must NOT Be Copied

The following reference characteristics should not be used:

- Memoji / avatar as the primary identity
- Chat-first navigation
- "Ask me anything" input as the main interaction model
- LLM-style conversational page transitions
- Quick-question navigation
- Personal profile presented like chatbot output
- Fun / gimmick sections as primary navigation
- Cartoon project artwork replacing real project evidence
- Informal conversational copy as the dominant content style

This portfolio is not an AI-chat portfolio.

The interface must communicate:

```text
Professional Portfolio
not
Personal AI Assistant
```

---

# 4. Personal Visual Identity

Muhammad Azis Saputra should be represented using a **real semi-formal portrait**.

Preferred personal image direction:

- Real photograph
- Semi-formal clothing
- Natural expression
- Clean composition
- Professional but approachable
- Neutral or carefully separated background
- No artificial facial modification
- No avatar transformation

Recommended hero crop:

```text
4:5
```

Preferred display:

```text
Rounded rectangle / portrait stage
```

Avoid making the main portrait a circular profile image.

Circular images may be used only for small secondary UI contexts if necessary.

---

# 5. Core Visual Concept

Working visual concept:

> **Precision Glass**

The design combines:

```text
Apple-inspired minimalism
+
editorial portfolio hierarchy
+
subtle glass material
+
real project evidence
```

The design must not become a full glassmorphism website.

Glass should be used strategically for:

- Navbar
- Floating controls
- Small information cards
- Modal / lightbox
- Selected overlays
- Sticky mobile navigation where needed

Main content surfaces should remain largely clean and solid.

---

# 6. Theme Strategy

## 6.1 Primary Theme

The initial design should be **light-first**.

Primary background:

```text
Warm / neutral near-white
```

Reason:

- Fits minimal Apple-like direction
- Gives screenshots more visual prominence
- Improves readability
- Supports subtle glass effects
- Feels professional and editorial

---

## 6.2 Dark Mode

Dark mode may be implemented later or in the initial release if implementation remains clean.

It is optional, not mandatory.

If included:

- Use deep neutral backgrounds
- Do not use blue-black cyberpunk colors
- Maintain the same hierarchy
- Preserve readable project screenshots
- Adjust glass transparency carefully

---

# 7. Color System

## 7.1 Light Theme — Core Colors

### Background

```css
--color-bg: #F7F7F5;
--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F2F2F0;
--color-bg-tertiary: #EDEDEC;
```

### Text

```css
--color-text-primary: #111111;
--color-text-secondary: #5F6368;
--color-text-tertiary: #8A8A8E;
--color-text-inverse: #FFFFFF;
```

### Border

```css
--color-border-soft: rgba(17, 17, 17, 0.08);
--color-border-medium: rgba(17, 17, 17, 0.14);
--color-border-strong: rgba(17, 17, 17, 0.22);
```

---

# 8. Accent Color

Primary accent recommendation:

```css
--color-accent: #0071E3;
--color-accent-hover: #0064CC;
--color-accent-soft: rgba(0, 113, 227, 0.10);
```

This blue is intended to create a restrained premium technology feel.

It should be used sparingly.

Recommended usage:

- Primary CTA
- Links
- Focus state
- Small project metadata
- Active navigation
- Selected highlights

Do not color large parts of the interface blue.

---

# 9. Secondary Accent Colors

Projects may use restrained category accents.

Recommended:

```css
--accent-software: #5E5CE6;
--accent-data: #30A46C;
--accent-ai: #BF5AF2;
```

These colors should primarily appear in:

- Small badges
- Category markers
- Tiny icon accents
- Optional project indicator lines

Do not turn every project into a strongly colored card.

---

# 10. Status Colors

```css
--color-success: #22A447;
--color-warning: #B7791F;
--color-error: #D92D20;
--color-info: #0071E3;
```

Use status colors only for true semantic states.

---

# 11. Dark Theme Direction

If dark mode is implemented:

```css
--color-bg: #0F0F10;
--color-bg-primary: #161617;
--color-bg-secondary: #1D1D1F;
--color-bg-tertiary: #252527;

--color-text-primary: #F5F5F7;
--color-text-secondary: #A1A1A6;
--color-text-tertiary: #77777C;

--color-border-soft: rgba(255, 255, 255, 0.08);
--color-border-medium: rgba(255, 255, 255, 0.14);
```

Accent remains close to:

```text
#2997FF
```

for better dark-theme visibility.

---

# 12. Typography Strategy

Typography must create a premium, quiet visual hierarchy.

Preferred approach:

```text
System-first typography
```

Recommended font stack:

```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Inter,
  Helvetica,
  Arial,
  sans-serif;
```

Advantages:

- Clean
- Fast
- Familiar
- Apple-like on Apple devices
- Excellent readability
- No mandatory font download

If a dedicated typeface is introduced later, it must not compromise performance.

---

# 13. Font Weight System

Approved weights:

```text
400 — Regular
500 — Medium
600 — Semibold
700 — Bold
```

Avoid:

```text
800
900
```

except for rare display use if visually justified.

---

# 14. Typography Scale

Use responsive typography with `clamp()` where appropriate.

## Display / Hero

```css
font-size: clamp(2.75rem, 7vw, 6.5rem);
line-height: 0.95;
font-weight: 600;
letter-spacing: -0.045em;
```

Use only for short headline blocks.

---

## H1

```css
font-size: clamp(2.5rem, 5vw, 5rem);
line-height: 1.00;
font-weight: 600;
letter-spacing: -0.04em;
```

---

## H2

```css
font-size: clamp(2rem, 3.8vw, 3.75rem);
line-height: 1.05;
font-weight: 600;
letter-spacing: -0.035em;
```

---

## H3

```css
font-size: clamp(1.5rem, 2.5vw, 2.25rem);
line-height: 1.15;
font-weight: 600;
letter-spacing: -0.025em;
```

---

## H4

```css
font-size: 1.25rem;
line-height: 1.3;
font-weight: 600;
```

---

## Large Body

```css
font-size: clamp(1.125rem, 1.4vw, 1.375rem);
line-height: 1.55;
font-weight: 400;
```

---

## Body

```css
font-size: 1rem;
line-height: 1.65;
font-weight: 400;
```

---

## Small Body

```css
font-size: 0.875rem;
line-height: 1.55;
font-weight: 400;
```

---

## Caption

```css
font-size: 0.75rem;
line-height: 1.4;
font-weight: 500;
letter-spacing: 0.01em;
```

---

# 15. Text Width

Readable body content should generally use:

```css
max-width: 65ch;
```

Hero supporting text:

```css
max-width: 54ch;
```

Long project case-study paragraphs:

```css
max-width: 68ch;
```

Avoid full-width text lines on desktop.

---

# 16. Spacing System

Use an 8-point-based spacing system with smaller supporting increments.

Approved tokens:

```text
4
8
12
16
24
32
40
48
64
80
96
120
160
```

CSS direction:

```css
--space-1: 0.25rem;  /* 4 */
--space-2: 0.5rem;   /* 8 */
--space-3: 0.75rem;  /* 12 */
--space-4: 1rem;     /* 16 */
--space-5: 1.5rem;   /* 24 */
--space-6: 2rem;     /* 32 */
--space-7: 2.5rem;   /* 40 */
--space-8: 3rem;     /* 48 */
--space-9: 4rem;     /* 64 */
--space-10: 5rem;    /* 80 */
--space-11: 6rem;    /* 96 */
--space-12: 7.5rem;  /* 120 */
--space-13: 10rem;   /* 160 */
```

---

# 17. Section Spacing

Mobile:

```text
64–80 px vertical section padding
```

Tablet:

```text
80–96 px
```

Desktop:

```text
120–160 px
```

Important showcase sections may use more whitespace.

Whitespace is part of the visual design and should not automatically be "fixed" by reducing spacing.

---

# 18. Layout Container

Primary content container:

```css
width: min(100% - 32px, 1200px);
margin-inline: auto;
```

Desktop wide showcase:

```css
max-width: 1440px;
```

Long-form case study:

```css
max-width: 1120px;
```

Reading column:

```css
max-width: 760px;
```

---

# 19. Responsive Breakpoints

Mobile-first.

```text
Base            0+
Small mobile    375+
Large mobile    480+
Tablet          768+
Desktop         1024+
Large desktop   1280+
Wide            1440+
```

Suggested CSS breakpoints:

```css
@media (min-width: 480px) {}
@media (min-width: 768px) {}
@media (min-width: 1024px) {}
@media (min-width: 1280px) {}
@media (min-width: 1440px) {}
```

Do not create excessive device-specific breakpoints.

---

# 20. Grid System

## Mobile

```text
4-column conceptual grid
16 px side padding
16 px gap
```

## Tablet

```text
8 columns
24–32 px side padding
20–24 px gap
```

## Desktop

```text
12 columns
32–48 px outer spacing
24–32 px gap
```

The implementation does not need literal CSS grid columns everywhere.

This is a composition guideline.

---

# 21. Border Radius System

Apple-like softness without cartoonish roundness.

```css
--radius-xs: 8px;
--radius-sm: 12px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
--radius-pill: 999px;
```

Usage:

```text
8 px    → small controls
12 px   → inputs / small tags
16 px   → small cards
24 px   → project images / medium cards
32 px   → hero surfaces / large visual panels
pill    → badges / compact CTA
```

Avoid applying `32px` radius to every element.

---

# 22. Glass Material System

Glass is a supporting visual material, not the entire UI.

## Glass Level 1 — Navigation

```css
background: rgba(255, 255, 255, 0.72);
backdrop-filter: blur(20px) saturate(160%);
-webkit-backdrop-filter: blur(20px) saturate(160%);
border: 1px solid rgba(255, 255, 255, 0.55);
```

Optional shadow:

```css
box-shadow:
  0 1px 2px rgba(0, 0, 0, 0.03),
  0 8px 30px rgba(0, 0, 0, 0.05);
```

---

## Glass Level 2 — Floating Information Surface

```css
background: rgba(255, 255, 255, 0.62);
backdrop-filter: blur(28px) saturate(170%);
border: 1px solid rgba(255, 255, 255, 0.48);
```

Use sparingly.

---

## Glass Level 3 — Dark Overlay

For image overlays:

```css
background: rgba(20, 20, 20, 0.42);
backdrop-filter: blur(18px);
border: 1px solid rgba(255, 255, 255, 0.12);
```

---

# 23. Glass Rules

Do:

- Use over backgrounds with subtle visual variation
- Maintain clear contrast
- Pair with soft border
- Keep text highly readable
- Provide fallback background where `backdrop-filter` is unavailable

Do not:

- Put every section inside translucent glass
- Place glass over highly detailed screenshots
- Use strong neon outlines
- Stack many transparent cards on top of one another
- Sacrifice text contrast

---

# 24. Shadow System

Shadows should feel almost invisible.

```css
--shadow-xs:
  0 1px 2px rgba(0, 0, 0, 0.04);

--shadow-sm:
  0 4px 16px rgba(0, 0, 0, 0.05);

--shadow-md:
  0 12px 32px rgba(0, 0, 0, 0.07);

--shadow-lg:
  0 24px 64px rgba(0, 0, 0, 0.10);
```

Avoid strong black drop shadows.

---

# 25. Background Treatment

Primary background should remain clean.

Optional ambient decoration:

```text
Very soft radial gradient
Blurred accent glow
Low-opacity neutral texture
```

Example:

```css
background:
  radial-gradient(
    circle at 80% 10%,
    rgba(0, 113, 227, 0.08),
    transparent 30%
  ),
  #F7F7F5;
```

Do not create obvious rainbow gradients.

---

# 26. Navigation

## Desktop Direction

Recommended:

```text
Floating centered glass navigation
```

Possible structure:

```text
[AZIS.]     About  Experience  Projects  Skills  Contact     [Resume]
```

Alternative:

```text
Full-width minimal sticky navbar
```

Preferred final direction:

**Floating glass navbar on desktop and tablet.**

---

## Desktop Navbar Styling

Recommended:

```text
Height: 56–64 px
Radius: pill or 20–24 px
Glass Level 1
Compact horizontal padding
```

Maximum width should not stretch unnecessarily across the screen.

---

# 27. Mobile Navigation

Recommended behavior:

```text
Compact glass header
Logo / name
Menu button
```

Menu opens as:

```text
Full-width floating glass panel
or
clean modal sheet
```

Menu items:

```text
About
Experience
Projects
Skills
Contact
Resume
```

Do not use chat-like quick buttons.

---

# 28. Logo / Wordmark

Preferred direction:

```text
AZIS.
```

or:

```text
Muhammad Azis
```

The wordmark should be typography-first.

Avoid complicated symbols.

---

# 29. Hero Section

The hero should feel editorial and premium rather than like a developer dashboard.

## Mobile Composition

Recommended:

```text
Eyebrow
Name / Headline
Supporting text
CTAs
Portrait
Optional short proof strip
```

Portrait may move before the headline if visual testing shows better balance.

---

## Desktop Composition

Recommended:

```text
LEFT
Large headline
Supporting copy
CTA

RIGHT
Real semi-formal portrait
```

Ratio:

```text
55 / 45
or
60 / 40
```

---

# 30. Hero Portrait Stage

The portrait should not simply float without structure.

Recommended visual:

```text
Large rounded portrait stage
+
soft neutral gradient
+
subtle glass badge / metadata
```

Example direction:

```text
┌─────────────────────────────┐
│ soft gradient backdrop      │
│                             │
│       real portrait         │
│                             │
│   [Medan, Indonesia]        │
└─────────────────────────────┘
```

Optional small floating labels:

```text
Software
Data
AI
```

Use maximum 1–2 floating elements.

---

# 31. Hero CTA System

Primary:

```text
View My Work
```

Style:

```text
Black / dark solid button
```

Secondary:

```text
Download Resume
```

Style:

```text
Soft glass or outlined button
```

This creates a more timeless premium appearance than using blue for every primary CTA.

Accent blue may be used for links and interactive details.

---

# 32. Button System

## Primary Button

```text
Background: #111111
Text: #FFFFFF
Radius: pill
Height: 44–48 px
Padding: 16–22 px
```

Hover:

```text
Slight lift
background to #2A2A2A
```

---

## Secondary Button

```text
Background: rgba(255,255,255,.6)
Border: soft
Backdrop blur optional
Text: primary
```

---

## Text Link

```text
Color: accent blue
Arrow / external icon optional
```

---

# 33. Button Interaction

Hover:

```text
translateY(-1px)
```

Active:

```text
translateY(0)
scale(0.99)
```

Transition:

```text
160–220 ms
```

Do not create exaggerated scale animations.

---

# 34. Highlight / Metric Cards

Recommended layout:

```text
4 compact cards on desktop
2 × 2 on mobile/tablet
```

Style:

- Light solid card or mild glass
- Large metric
- Small description
- Minimal icon optional

Example:

```text
3.86 / 4.00
GPA
```

Keep visual emphasis on the number.

---

# 35. Project Presentation Strategy

Featured projects should not use a generic developer-card grid as the primary visual treatment.

Recommended pattern:

```text
Large visual case-study blocks
```

Desktop:

```text
Image                  Text
Text                   Image
Image                  Text
```

Mobile:

```text
Image
Text
```

---

# 36. Featured Project Surface

Preferred:

- Large screenshot / cover
- Radius 24–32 px
- Clean background
- No strong border
- Optional subtle shadow
- Real project imagery

Text block:

```text
Category
Project title
Summary
Role
Tech tags
Metric
View Case Study →
```

---

# 37. Secondary Project Cards

Bike-Sharing and Etomac may use smaller cards.

Recommended:

```text
2-column desktop
1-column mobile
```

Card:

- Image on top
- Category
- Title
- Brief summary
- CTA

Do not make them visually compete with featured projects.

---

# 38. Project Image Treatment

Screenshots should be the hero.

Possible presentation:

```text
Screenshot inside clean browser frame
```

or:

```text
Screenshot floating directly on soft neutral background
```

Avoid excessive mockup-device frames.

Prefer real UI detail over decorative illustration.

---

# 39. Browser Frame Style

If used:

```text
Simple top bar
3 subtle dots
No fake URL text unless useful
Rounded 20–24 px
```

Do not imitate Safari interface in excessive detail.

---

# 40. Project Tags

Use compact pills.

Example:

```text
React
Computer Vision
Yii2
Data Analytics
```

Style:

```text
Background: #F0F0EE
Text: secondary
Radius: pill
Font: caption / small body
```

Do not use black pills for all skills like the reference website.

The visual should feel softer and less dense.

---

# 41. Experience Section

Recommended structure:

```text
Editorial vertical timeline
```

Desktop:

```text
Period / Organization | Role + description
```

Mobile:

```text
Role
Organization
Period
Description
```

Alternative:

Soft cards may be used, but timeline is preferred.

---

# 42. Experience Timeline Styling

Use:

- Thin neutral line
- Small accent marker
- Strong role typography
- Secondary organization text
- 2–4 concise bullets maximum

Avoid tiny text.

---

# 43. Research Section

Research should feel differentiated but not academically heavy.

Recommended layout:

```text
Text / publication info
+
Research visual / result
```

Possible surface:

```text
Large soft-gray card
```

Content:

- Research context
- Publication
- Key model result
- Link to publication when available

---

# 44. About Section

Recommended composition:

Desktop:

```text
Heading           Text column
```

or:

```text
Small portrait / detail    Narrative
```

Do not repeat a large portrait if the hero already uses the same image prominently.

Optional:

- Small secondary photo
- Personal working style notes

---

# 45. Skills Section

Skills should feel curated.

Recommended structure:

```text
Software Engineering
Data & Analytics
Artificial Intelligence
Professional
```

Each category:

```text
Short heading
Tech list / icon rows
```

---

# 46. Tech Skill Item

Recommended:

```text
[logo] Python
```

or:

```text
Python
```

Do not use:

```text
100%
95%
Expert
Advanced
```

unless there is a legitimate assessment method.

No progress bars.

---

# 47. Technology Logo Visual Rule

Default:

```text
24 × 24 px
```

or:

```text
28 × 28 px
```

A skill card may use:

```text
32 px
```

Icons should not dominate.

---

# 48. Leadership Section

Use a quieter supporting design.

Possible:

```text
Two large cards
```

Each card:

```text
Role
Organization
Team size / evidence
Short impact text
```

Avoid creating a long organizational-history timeline.

---

# 49. Contact Section

The contact section should feel like a strong ending.

Recommended design:

```text
Large rounded dark panel
```

Example:

```text
Background: #111111
Text: white
Large heading
Contact copy
Form or CTA
```

This creates contrast with the otherwise light portfolio.

---

# 50. Contact Form Surface

Inside dark panel:

```text
Inputs may use translucent white glass
```

Example:

```css
background: rgba(255,255,255,0.08);
border: 1px solid rgba(255,255,255,0.14);
```

Focus:

```text
Accent-blue ring
```

---

# 51. Form Inputs

Height:

```text
48–52 px
```

Textarea:

```text
min-height: 140 px
```

Radius:

```text
12–16 px
```

Labels must remain visible.

Do not rely only on placeholders.

---

# 52. Footer

Minimal.

Recommended:

```text
Muhammad Azis Saputra
Software • Data • AI

LinkedIn
GitHub
Email

© YEAR
```

No large sitemap required.

---

# 53. Project Detail Page Design

Case studies should feel like editorial product stories.

Recommended flow:

```text
Project Hero
↓
Overview
↓
Large Project Visual
↓
Problem + Solution
↓
My Role
↓
Features / Workflow
↓
Architecture
↓
Database / ML / Data
↓
Challenges
↓
Outcome
↓
Learnings
↓
Project Navigation
```

---

# 54. Project Hero

Project hero should contain:

```text
Category
Large title
Summary
Metadata
Hero screenshot
```

Metadata may use a glass row:

```text
Role
Timeline
Team
Status
```

Do not overcrowd hero with technology logos.

---

# 55. Case Study Text Layout

Long reading content:

```text
760 px max width
```

Large diagrams:

```text
1120–1200 px max
```

Full-bleed project visuals may exceed reading width.

---

# 56. Architecture / ERD Presentation

Use dedicated visual blocks.

Recommended:

```text
Soft neutral background
24 px radius
Diagram centered
Padding 24–48 px
```

Provide zoom / open larger if useful.

---

# 57. Glass Modal / Lightbox

If implemented:

```text
Backdrop:
rgba(0,0,0,.45)

Panel:
glass + near-white

Radius:
24–32 px
```

Must support:

- Escape key
- Close button
- Focus management

---

# 58. Iconography

Recommended UI icon system:

```text
Lucide React
```

Visual characteristics:

```text
Stroke-based
Minimal
Consistent
```

Recommended stroke:

```text
1.75–2 px
```

Use icons where helpful, not everywhere.

---

# 59. Illustration Policy

The website should not rely on cartoon illustrations.

Allowed:

- Subtle abstract shapes
- Minimal line graphic
- Data visualization
- Architecture diagram
- Real project imagery

Avoid:

- Cartoon developer avatar
- Robot mascots
- Generic AI artwork
- Stock programmer illustrations

---

# 60. Motion Philosophy

Motion should communicate refinement, not spectacle.

Principles:

- Short
- Soft
- Directional
- Functional
- Optional

---

# 61. Motion Duration

Micro interaction:

```text
140–180 ms
```

Standard:

```text
180–240 ms
```

Section reveal:

```text
350–500 ms
```

Avoid transitions over:

```text
700 ms
```

unless explicitly justified.

---

# 62. Motion Easing

Recommended:

```css
cubic-bezier(0.2, 0.8, 0.2, 1)
```

or standard:

```css
ease-out
```

---

# 63. Scroll Animation

Allowed:

```text
Subtle fade
8–16 px translate
```

Example:

```text
opacity 0 → 1
translateY 12px → 0
```

Do not animate every paragraph individually.

---

# 64. Hover Effects

Project visual:

```text
scale 1 → 1.01
```

Card:

```text
translateY 0 → -2px
```

Image:

```text
scale 1 → 1.015
```

Transitions should remain subtle.

---

# 65. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable:

- Section reveal
- Scale effects
- Non-essential smooth movement

---

# 66. Mobile-First Rules

Mobile is not a scaled-down desktop design.

Mobile should prioritize:

1. Name / positioning
2. Main CTA
3. Project evidence
4. Experience
5. Research
6. About
7. Skills
8. Contact

---

# 67. Mobile Typography

Do not shrink headings excessively.

Hero headline should remain visually strong.

Recommended mobile hero:

```text
44–56 px
```

depending on viewport.

Body:

```text
16 px minimum
```

---

# 68. Mobile Touch Targets

Interactive controls:

```text
minimum 44 × 44 px
```

Navigation button:

```text
44–48 px
```

---

# 69. Mobile Project Layout

Never force desktop side-by-side project layout.

Use:

```text
Project image
Category
Title
Description
Tags
CTA
```

---

# 70. Mobile Glass

Reduce blur intensity if needed for performance.

Recommended:

```text
12–18 px blur
```

Avoid large full-screen blur effects.

---

# 71. Tablet Behavior

Tablet may use:

- Two-column highlights
- Split hero
- 2-column project secondary grid
- Wider content cards

Do not automatically use full desktop layout at 768 px.

---

# 72. Accessibility — Color

Target:

```text
WCAG AA contrast
```

Text should not use very light gray on white.

Secondary text must remain readable.

---

# 73. Accessibility — Focus

Every interactive item requires visible focus.

Recommended:

```css
outline: 3px solid rgba(0,113,227,.35);
outline-offset: 3px;
```

Do not remove browser focus styling without replacement.

---

# 74. Accessibility — Typography

Minimum body:

```text
16 px
```

Avoid very small portfolio text like many visual-design sites use.

Caption text:

```text
12 px minimum
```

Use only for supporting metadata.

---

# 75. Accessibility — Images

Real project screenshots need descriptive alt text where meaningful.

Decorative gradients:

```text
No alt / CSS background
```

---

# 76. Accessibility — Glass

Glass transparency must never reduce readability.

Fallback surfaces must provide sufficient contrast.

---

# 77. Desktop Homepage Recommended Composition

```text
Floating Glass Navigation

Large Hero
├── Headline
├── Supporting Copy
├── CTA
└── Real Portrait

Selected Highlights

Featured Projects
├── Super Soybean
├── Graha Raya
├── SIBUKU
└── Brofin

Experience

Research & Publication

About

Skills

Leadership

Dark Contact Panel

Minimal Footer
```

---

# 78. Mobile Homepage Recommended Composition

```text
Compact Glass Navigation

Hero
├── Eyebrow
├── Headline
├── Copy
├── CTA
└── Portrait

Highlights 2 × 2

Featured Project
Featured Project
Featured Project
Featured Project

Other Projects

Experience

Research

About

Skills

Leadership

Contact

Footer
```

---

# 79. Visual Density Rules

Avoid:

- Too many badges
- Too many icons
- Too many cards
- Excessive metadata
- All content boxed into surfaces

Preferred rhythm:

```text
Open whitespace
→ focused content
→ visual project block
→ open whitespace
```

---

# 80. Cards vs Open Layout

Use cards only when they clarify grouping.

Use open layouts for:

- About
- Section headings
- Long-form project text

Use cards for:

- Highlights
- Selected experience blocks
- Secondary projects
- Contact panel
- Supporting metadata

---

# 81. Divider System

Preferred:

```css
border-top: 1px solid rgba(17,17,17,.08);
```

Use sparingly.

Whitespace is preferred over many divider lines.

---

# 82. Section Heading Pattern

Recommended:

```text
Small eyebrow
Large H2
Optional supporting sentence
```

Example:

```text
PROJECTS

Selected work across
Software, Data & AI.

A selection of...
```

Eyebrow:

- uppercase optional
- subtle
- 12–13 px
- medium weight
- slight letter spacing

---

# 83. Category Badge Style

Example:

```text
AI / COMPUTER VISION
```

Style:

```text
Small text
No oversized capsule
Accent dot optional
```

Minimal badge alternative:

```text
● AI / Computer Vision
```

---

# 84. Empty / Loading States

Use clean neutral text.

Avoid illustrations unless genuinely useful.

Loading:

```text
Loading...
```

Project loading:

```text
Loading project...
```

---

# 85. Error State Design

Simple:

```text
Something went wrong.
Please try again.
```

Use restrained error color.

No playful error mascot.

---

# 86. 404 Design

Recommended:

```text
404

Page not found.

[Back to Home]
```

Large typography, generous whitespace.

---

# 87. Image Loading

Use:

- Eager for hero portrait
- Lazy for below-the-fold project screenshots
- Responsive `srcset` if needed

Background placeholders may use:

```text
neutral #ECECEA
```

Avoid shimmer skeletons unless loading actually takes meaningful time.

---

# 88. Design Token Naming

Recommended CSS variable structure:

```text
--color-*
--space-*
--radius-*
--shadow-*
--font-*
--container-*
--transition-*
```

Example:

```css
:root {
  --color-bg: #F7F7F5;
  --color-text-primary: #111111;
  --color-accent: #0071E3;

  --radius-md: 16px;
  --radius-lg: 24px;

  --space-4: 1rem;
  --space-8: 3rem;

  --transition-fast: 160ms;
  --transition-base: 220ms;
}
```

---

# 89. Component Styling Philosophy

Components should be:

- Reusable
- Visually simple
- Flexible
- Content-driven

Avoid component APIs with excessive visual variants.

Preferred variants:

```text
Button:
primary
secondary
ghost

Card:
solid
glass
dark
```

---

# 90. Design Consistency Checklist

Every page should verify:

```text
[ ] Same typography hierarchy
[ ] Same spacing rhythm
[ ] Same radius family
[ ] Same button shapes
[ ] Same tech tag treatment
[ ] Same image framing
[ ] Same accent logic
[ ] Same focus state
[ ] Same mobile padding
[ ] Same content width rules
```

---

# 91. Anti-Patterns

Antigravity must not introduce:

```text
❌ Memoji / avatar replacement
❌ Chat-first interface
❌ Floating AI input
❌ Quick-question buttons
❌ Generic dark developer dashboard
❌ Neon cyberpunk theme
❌ Huge tech-logo wall
❌ Skill percentage bars
❌ Uncontrolled glassmorphism
❌ Heavy gradient backgrounds
❌ Giant shadows
❌ Fake browser mockups everywhere
❌ Random stock imagery
❌ Excessive emojis
❌ Bento-grid everywhere
❌ Auto-generated illustrations for real projects
❌ Constant parallax
❌ Custom cursor
```

---

# 92. Allowed Inspiration from Apple-Like Design

Allowed principles:

```text
✓ Large whitespace
✓ Strong product-style typography
✓ High-resolution imagery
✓ Minimal navigation
✓ Soft material effects
✓ Rounded geometry
✓ Clear hierarchy
✓ Restrained motion
✓ Neutral surfaces
✓ Premium details
```

Not allowed:

```text
✗ Direct page cloning
✗ Apple logos
✗ Apple proprietary imagery
✗ Copying Apple marketing text
✗ Pretending to be an Apple property
```

---

# 93. Proposed Visual Signature

To give the portfolio its own identity:

### Signature 1 — Real Portrait

A high-quality real portrait differentiates the site from avatar-based developer portfolios.

### Signature 2 — Project Evidence

Large real screenshots become the main visual language.

### Signature 3 — Soft Glass Navigation

A floating glass navigation provides the modern material quality the user likes.

### Signature 4 — Editorial Case Studies

Projects are presented as stories rather than simple tech cards.

### Signature 5 — Software / Data / AI Accent Logic

Small restrained category color accents help structure a broad technical profile.

---

# 94. Recommended First Visual Prototype

Before implementing every section, Antigravity should first prototype:

```text
1. Navbar
2. Hero
3. One highlight card
4. One featured project block
5. One button set
```

Evaluate:

- Typography
- White space
- Glass
- Portrait treatment
- Accent usage
- Responsive behavior

Only after this visual direction is satisfactory should the full site be expanded.

---

# 95. Initial Design Acceptance Criteria

The initial visual implementation is acceptable if:

- It feels professional within five seconds
- The real portrait looks natural
- The hero is easy to understand
- Whitespace feels intentional
- Glass is subtle rather than decorative
- Project screenshots dominate project visuals
- Typography is strong and readable
- Mobile view is fully considered
- No reference-specific chatbot behavior appears
- The UI does not look like a generic portfolio template
- The visual hierarchy supports recruiter scanning

---

# 96. Asset Dependencies

This design expects assets defined in:

```text
ASSET_MANIFEST.md
```

Especially:

```text
profile-semi-formal.webp
project cover images
project screenshots
architecture diagrams
database diagrams
tech logos
favicon
OG image
```

If an asset is unavailable, Antigravity must use a temporary neutral placeholder only during development.

Do not generate fake evidence.

---

# 97. Relationship to Other Specifications

This document must be interpreted together with:

```text
PROJECT_SPEC.md
CONTENT_SPEC.md
PROJECTS_INDEX.md
ASSET_MANIFEST.md
TECHNICAL_SPEC.md
AGENT_RULES.md
IMPLEMENTATION_PLAN.md
```

Priority:

```text
PROJECT_SPEC
    ↓
CONTENT + PROJECT INDEX
    ↓
DESIGN SYSTEM
    ↓
TECHNICAL SPEC
    ↓
IMPLEMENTATION
```

---

# 98. Agent Rules for Design

Any implementation agent must:

1. Read this file before styling the website.
2. Use the real portrait rather than generating an avatar.
3. Use normal website navigation rather than chat navigation.
4. Maintain light-first minimal visual direction.
5. Use glass strategically, not globally.
6. Preserve whitespace.
7. Preserve mobile-first behavior.
8. Avoid unapproved animation libraries.
9. Avoid changing the color system without approval.
10. Avoid adding new fonts without approval.
11. Avoid introducing Tailwind solely for styling convenience unless the technical specification changes.
12. Avoid inventing project imagery.
13. Maintain accessible contrast.
14. Respect reduced-motion preferences.
15. Keep visual effects subtle.
16. Prefer real screenshots and diagrams over illustrations.
17. Avoid visually presenting every content section as a card.
18. Maintain a premium, calm, professional tone.

---

# 99. Project Case Study Presentation Pattern

The approved presentation pattern for project case studies was established by the **SIBUKU** implementation. Future case studies must adhere to these reusable decisions:

## 99.1 Overall Composition
- **Recruiter-Friendly:** Keep presentation compact.
- **Mobile-First:** Ensure case-study layouts scale up cleanly.
- **Content Width:** Use readable prose widths (max 68ch) alongside wider visual/grid containers to balance text and visuals.
- **Major-Section Spacing:** Maintain consistent, intentional spacing that clearly separates topics without excessive whitespace.

## 99.2 Card Compositions
- **Balanced Grids:** Use dynamic CSS Grid structures to balance card counts.
- **Equal Dimensions:** Cards within the same card family/row must naturally align to equal heights and widths (e.g., using `grid-auto-rows: 1fr`) without brittle fixed heights, and without forcing equal heights on stacked mobile cards.
- **Centering:** For 5-card arrays, naturally center the bottom two cards to maintain exact widths.

## 99.3 Technical Visuals
- **Standalone Images:** Present architecture diagrams and workflow visuals natively without placing them inside redundant outer visual cards or colored backgrounds.
- **Controlled Sizing:** Preserve actual aspect ratios and rely on a restrained border-radius, optional subtle border, and subtle shadow when useful.

## 99.4 Demo App Carousel
The circular center-focused Demo App carousel is the approved pattern when a project has a multi-screenshot demo gallery. Do not force a carousel onto projects that do not need one. When used:
- **Circular Center-Focused:** Exactly three positions are visible—Previous (left), Active (center), Next (right). This pattern applies to galleries with three or more screenshots. Smaller galleries should use the simplest appropriate presentation rather than duplicating assets merely to satisfy the pattern.
- **Depth:** Active screenshot is dominant (opacity 1, scale 1). Neighbors are faded, scaled down, and layered behind.
- **Touch-First Swipe:** On touch devices (`@media (hover: none) and (pointer: coarse)`), make swipe the primary visible interaction and hide arrows, while preserving other accessible navigation methods where applicable.
- **Overlay Arrows:** On precise-pointer desktop/laptop devices, overlay Previous/Next arrows directly on top of the carousel edge (e.g., inset 16px).
- **Asset Integrity:** Include all relevant real demo screenshots and preserve their native aspect ratios (e.g., landscape ~16:9, portrait ~9:16) without aggressive cropping.
- **Minimal UI:** Do not display visible slide numbers or text captions inside the gallery unless functionally required by the project.

---

# 100. Design Status

**Document:** `DESIGN_SYSTEM.md`  
**Project:** Muhammad Azis Saputra Professional Portfolio  
**Design Direction:** Minimal Modern / Precision Glass  
**Theme:** Light-first  
**Identity Treatment:** Real semi-formal portrait  
**Primary Accent:** Blue  
**Typography:** System-first  
**Visual Inspiration:** Apple-like principles, not direct imitation  
**Interaction Model:** Traditional professional portfolio, not chatbot  
**Responsive Strategy:** Mobile-first  
**Status:** Initial Approved Design System
