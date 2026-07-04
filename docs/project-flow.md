# KAIZEN - Project Flow

Version: 2.0

=========================================================
PROJECT OVERVIEW
=========================================================

KAIZEN consists of two independent parts.

1. Landing Page

A premium marketing website that introduces the product.

2. Application

The authenticated productivity application where users manage Habits, Goals and Expenses.

Both parts must share the same visual identity.

=========================================================
SOURCE OF TRUTH
=========================================================

The approved reference images are the single source of truth.

Do NOT:

• Redesign
• Reinterpret
• Modernize
• Simplify
• Improve visually

Your responsibility is implementation only.

=========================================================
IMPLEMENTATION PRIORITY
=========================================================

1. Pixel-perfect recreation
2. Clean React architecture
3. Reusable components
4. Responsive behaviour
5. Smooth Framer Motion animations

=========================================================
LANDING PAGE
=========================================================

Landing Page Structure

Hero

↓

Dashboard Showcase

↓

Core Features

↓

Why Kaizen

↓

Footer

Status

Completed.

Unless explicitly instructed,

do not modify any Landing Page section.

=========================================================
APPLICATION STRUCTURE
=========================================================

Application Structure

Habits

↓

Today

↓

All Habits

↓

Calendar

↓

Achievements

↓

Notes

↓

Settings

Goals

(To be implemented)

Expenses

(To be implemented)

=========================================================
SETTINGS
=========================================================

Settings contains

• Profile

• Appearance

• Notifications

• Preferences

• About

Each page is independent.

Only one settings page is visible at a time.

=========================================================
PROJECT STRUCTURE
=========================================================

Landing Page

src/components/LandingPage/

Habits

src/components/Habits/

Goals

src/components/Goals/

Expenses

src/components/Expenses/

Reusable UI

src/components/Shared/

Design References

src/assets/

Never place components into incorrect folders.

=========================================================
WORKFLOW
=========================================================

Implement only ONE section at a time.

Never continue implementing additional sections.

Never modify completed sections unless explicitly instructed.

Each approved section becomes locked.

=========================================================
DESIGN REQUIREMENTS
=========================================================

Preserve

• Layout
• Visual hierarchy
• Typography
• Spacing
• Glassmorphism
• Gradients
• Glow
• Shadows
• Border Radius
• Component Positions
• Colors
• Premium Aesthetic

=========================================================
TECH STACK
=========================================================

Use only

• React

• TypeScript

• Tailwind CSS

• Framer Motion

• Lucide React

Do not introduce additional libraries unless requested.

=========================================================
CUSTOM ASSETS
=========================================================

Always use provided assets.

Never regenerate approved illustrations.

Never replace custom assets.

When reference images are provided,

recreate them as faithfully as possible.

=========================================================
IMPLEMENTATION RULES
=========================================================

Do not invent

• New layouts
• New spacing
• New typography
• New color palettes
• New animations

If an effect cannot be recreated perfectly,

match the overall appearance as closely as possible.

=========================================================
FINAL GOAL
=========================================================

Every completed section should be visually indistinguishable from its approved reference image while maintaining a clean, modular and scalable React architecture.