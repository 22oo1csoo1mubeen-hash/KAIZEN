# KAIZEN — Design System

Version: 2.0

---

# DESIGN PHILOSOPHY

KAIZEN is a premium productivity platform.

The visual language is inspired by:

- Apple
- Linear
- Arc Browser
- Raycast
- Modern SaaS dashboards

The interface should feel:

- Premium
- Calm
- Minimal
- Elegant
- Disciplined
- Spacious
- High-end

Avoid generic AI-generated styling.

Every screen should feel handcrafted.

---

# DESIGN SOURCE OF TRUTH

The approved design reference images are the single source of truth.

Never redesign.

Never reinterpret.

Never modernize.

Always recreate the approved design as accurately as possible.

If an exact implementation is not possible using CSS, reproduce it as closely as possible.

---

# PRIMARY VIEWPORT

Until the application is fully completed, all UI must be designed for the primary desktop viewport.

Browser Zoom:

100%

Desktop is the design baseline.

Responsive layouts will be implemented after desktop development is complete.

Do not introduce responsive breakpoints unless explicitly instructed.

---

# LAYOUT PRINCIPLES

Maintain:

- Consistent margins
- Consistent spacing
- Clear visual hierarchy
- Large breathing space
- Balanced composition

Avoid cramped layouts.

Avoid oversized layouts.

Every section should feel naturally balanced.

---

# PAGE STRUCTURE

Landing Page

1. Hero
2. Dashboard Showcase
3. Core Features
4. Why Kaizen
5. Footer

Habits Module

1. Today
2. All Habits
3. Calendar
4. Achievements
5. Notes
6. Settings

Maintain this structure.

---

# COLOR SYSTEM

Primary Background

Pure Black

#000000

Secondary Background

Very Dark Gray

Cards

Transparent Black

Glass surface

Primary Text

White

Secondary Text

Soft Gray

Muted Text

Gray

---

# ACCENT COLORS

Habits

Emerald Green

Goals

Coral / Red

Expenses

Amber / Orange

Use accent colors consistently.

Do not introduce additional accent colors.

---

# GLASSMORPHISM

All major containers should use:

- Backdrop Blur
- Transparent dark background
- Thin border
- Soft reflections
- Slight transparency

Cards should appear like premium glass.

Avoid completely flat containers.

---

# BORDERS

Use subtle borders.

Never use thick borders.

Border opacity should remain low.

Borders should separate surfaces without becoming distracting.

---

# GLOW

Glow is one of KAIZEN's strongest visual identities.

Glow should always be:

- Soft
- Elegant
- Diffused
- Natural

Never use neon gaming-style glow.

---

## Green Glow

Used for:

- Habits
- Success
- Progress
- Completion

---

## Orange Glow

Used for:

- Fire
- Streaks
- XP
- Motivation

Fire icons should always use orange glow.

---

## White Glow

Used sparingly for:

- Hero image
- Important highlights

---

# SHADOWS

Soft

Wide

Natural

Low opacity.

Never use harsh shadows.

---

# BACKGROUND

Background is never plain black.

Large blurred decorative icons should appear throughout supported pages.

Characteristics:

- Low opacity
- Strong blur
- Large scale
- Random placement
- Different sizes
- Some partially cropped
- Fade naturally into background

They provide atmosphere without distracting from content.

---

# ICONOGRAPHY

Use Lucide React.

Maintain consistent stroke weight.

Do not mix icon libraries.

Icons inside cards should use soft glow matching their accent color.

---

# TYPOGRAPHY

Headings

Large

Bold

Premium

Readable

Body

Soft white

Comfortable line spacing

Never use pure white paragraphs.

---

# BUTTONS

Rounded

Glass appearance

Soft glow

Elegant hover animation

Consistent padding

No oversized buttons.

---

# INPUTS

Dark background

Thin borders

Rounded corners

Subtle focus glow

Consistent height

---

# CARDS

Every card should have:

- Glassmorphism
- Rounded corners
- Thin borders
- Soft glow
- Consistent padding

Maintain identical corner radius throughout the application.

---

# SPACING

Spacing should feel intentional.

Maintain consistent spacing between:

- headings
- paragraphs
- cards
- grids
- buttons
- sections

Avoid random spacing values.

---

# GRIDS

Cards should align cleanly.

Equal spacing.

Balanced proportions.

No irregular layouts.

---

# ANIMATIONS

Use Framer Motion.

Animations should feel:

- Smooth
- Slow
- Elegant
- Premium

Never use:

- Bounce
- Overshoot
- Aggressive easing

Prefer subtle fade, slide and scale animations.

---

# MICRO INTERACTIONS

Hover states should be subtle.

Examples:

- Slight glow increase
- Slight lift
- Slight brightness
- Smooth transitions

Avoid excessive movement.

---

# SCROLLING

Use internal scrolling where appropriate.

Avoid unnecessary page scrolling.

Large data sections should scroll internally.

The overall page should remain stable.

---

# DYNAMIC CONTENT

Current implementations use placeholder data.

Future backend integration will replace:

- Habits
- Goals
- Expenses
- Heatmaps
- Calendars
- Achievements
- Insights

UI should already be prepared for dynamic content.

---

# REUSABILITY

Build reusable components whenever possible.

Examples:

- Cards
- Buttons
- Inputs
- Badges
- Search Bars
- Progress Components
- Empty States
- Modals

Avoid duplicated implementations.

---

# VISUAL QUALITY CHECKLIST

Before considering a section complete, verify:

✓ Layout matches the reference

✓ Spacing matches the reference

✓ Proportions match the reference

✓ Glassmorphism matches the reference

✓ Glow matches the reference

✓ Shadows match the reference

✓ Blur matches the reference

✓ Typography matches the reference

✓ Animations feel premium

✓ Browser zoom is 100%

✓ Desktop layout is polished

If any item fails, continue refining until the implementation is visually indistinguishable from the approved design.

---

# FINAL OBJECTIVE

Every visitor should feel:

"This looks like software built by a top-tier startup."

Every implemented screen should be nearly indistinguishable from its approved design while maintaining clean, scalable, production-quality React architecture.