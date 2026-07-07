# KAIZEN — Assets Map

Version: 2.0

---

# PURPOSE

This document defines the location and purpose of every approved design asset used throughout the project.

Always consult this document before searching the project for assets.

Never regenerate an approved asset unless explicitly instructed.

Always use the existing asset.

---

# ASSET STRUCTURE

```
src/assets
├── LandingPage
└── Habits
```

Every future module (Goals, Expenses, etc.) should follow the same organization.

---

# LANDING PAGE

## Hero

Location

```
src/assets/LandingPage/Hero/
```

Assets

- Hero.jpg
- Object.jpg

Purpose

Hero.jpg

Reference implementation for:

- Layout
- Typography
- Spacing
- Hero composition
- Buttons
- Shadows
- Glow
- Glassmorphism

Object.jpg

Runner illustration used in:

- Hero
- Dashboard Showcase
- Features (background)

Rules

- Never replace
- Never regenerate
- Preserve proportions
- Preserve lighting
- Preserve glow
- Preserve shadows

---

## Dashboard Showcase

Location

```
src/assets/LandingPage/Dashboard/
```

Asset

- Dashboard.jpg

Purpose

Reference implementation for:

- Dashboard layout
- Statistics cards
- Charts
- Glassmorphism
- Glow
- Shadows
- Spacing

Rules

Implement as closely as possible.

---

## Core Features

Location

```
src/assets/LandingPage/Features/
```

Asset

- Cards.jpg

Purpose

Reference for:

- Habits card
- Goals card
- Expenses card

Preserve:

- Layout
- Card spacing
- Glow
- Shadows
- Border radius
- Glassmorphism

---

## Why Kaizen

Location

```
src/assets/LandingPage/Why/
```

Asset

- Why.jpg

Purpose

Reference implementation for:

- Heading
- Description
- Feature cards
- Quote section
- Layout
- Spacing

---

## Footer

Location

```
src/assets/LandingPage/Footer/
```

Assets

- Footer.jpg
- Logo.png

Purpose

Footer.jpg

Reference for:

- Footer layout
- Contact section
- Links
- Glass container
- Typography
- Spacing

Logo.png

Official KAIZEN logo.

Use wherever required.

Do not regenerate.

---

# HABITS MODULE

---

## Today

Location

```
src/assets/Habits/Today/
```

Assets

- Today.png
- icons.png

Purpose

Today.png

Primary reference for:

- Sidebar
- Top Navigation
- Statistics cards
- Today's Habits
- Heatmap
- Calendar
- Insights
- Achievements
- Glassmorphism
- Glow
- Layout
- Spacing
- Component sizing
- Premium UI

icons.png

Background decorative icons.

Used behind the Today page.

Rules

- Preserve icon placement style
- Preserve glow
- Preserve opacity
- Preserve blur
- Preserve color palette
- Do not regenerate

---

## All Habits

Location

```
src/assets/Habits/AllHabits/
```

Asset

- AllHabits.png

Purpose

Reference implementation for the All Habits page.

Future implementation should preserve:

- Layout
- Search
- Filters
- Habit cards
- Spacing
- Glassmorphism
- Glow

---

## Calendar

Location

```
src/assets/Habits/Calendar/
```

Asset

- Calendar.png

Purpose

Reference implementation for the Calendar page.

Preserve:

- Calendar layout
- Cards
- Statistics
- Heatmaps
- Glass effects
- Typography

---

## Achievements

Location

```
src/assets/Habits/Achievements/
```

Asset

- Achievements.png

Purpose

Reference implementation for the Achievements page.

Preserve:

- Achievement cards
- Progress
- XP
- Layout
- Glow
- Glassmorphism

---

## Notes

Location

```
src/assets/Habits/Notes/
```

Asset

- Notes.png

Purpose

Reference implementation for the Notes page.

Preserve:

- Layout
- Cards
- Typography
- Spacing
- Glass styling

---

## Settings

Location

```
src/assets/Habits/Settings/
```

Assets

- Settings_Profile.png
- Settings_Appearance.png
- Settings_Preferences.png
- Settings_Notifications.png
- Settings_About.png

Purpose

Each asset is the approved design reference for its respective Settings subsection.

Implement each screen individually while preserving:

- Layout
- Forms
- Cards
- Buttons
- Spacing
- Glassmorphism
- Glow

---

# ICONS

Library

Lucide React

Rules

- Never use PNG icons for UI.
- Never mix icon libraries.
- Maintain consistent stroke width.

---

# SUPPORTED IMAGE FORMATS

Always use the existing file extension.

Supported formats include:

- .png
- .jpg
- .jpeg
- .webp
- .svg
- .avif

Do not rename assets.

Do not convert formats unless explicitly instructed.

---

# GENERAL RULES

- Always read this document before searching the project.
- Reuse existing assets.
- Never regenerate approved assets.
- Never replace approved assets.
- Preserve layouts exactly.
- Preserve spacing.
- Preserve proportions.
- Preserve glow.
- Preserve glassmorphism.
- Preserve shadows.
- Ask before replacing any missing asset.