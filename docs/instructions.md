# KAIZEN — AI Instructions

Version: 2.0

---

# PURPOSE

You are contributing to the KAIZEN codebase.

Your primary objective is to produce production-quality React code while preserving the approved UI/UX exactly.

Read this document before modifying any file.

---

# BEFORE WRITING CODE

Always read these documents first.

1. docs/instructions.md
2. docs/project-flow.md
3. docs/design-system.md
4. docs/assets-map.md

Do not begin implementation until you understand all four documents.

---

# IMPLEMENTATION PHILOSOPHY

Implementation only.

Do NOT redesign.

Do NOT reinterpret.

Do NOT modernize.

The provided reference designs are the single source of truth.

Your responsibility is to recreate them as accurately as possible.

---

# PROJECT STRUCTURE

Respect the existing folder structure.

Never reorganize folders.

Never rename folders.

Never move components unless explicitly instructed.

---

# COMPONENT RULES

Always reuse existing components.

Never duplicate components.

Never create alternative implementations of an existing component.

Keep components:

- modular
- reusable
- maintainable
- production ready

---

# FILE MODIFICATION

Modify only the files required for the current task.

Never rewrite unrelated files.

Never touch completed sections unless explicitly instructed.

Never perform project-wide refactors.

---

# TOKEN EFFICIENCY

Minimize context usage.

Read only the files required for the current task.

Never scan the entire project.

Always consult the documentation before searching source files.

---

# APPROVED TECHNOLOGIES

Use only:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

Do not introduce additional UI libraries.

Do not introduce additional animation libraries.

Do not introduce unnecessary dependencies.

---

# STYLING RULES

Prefer existing reusable UI.

Avoid inline styles unless absolutely necessary.

Avoid duplicated utility classes.

Use reusable components whenever possible.

---

# RESPONSIVENESS

Unless explicitly instructed otherwise:

Develop for the primary desktop viewport only.

Desktop layout is always the first priority.

Responsive refinements will be implemented later.

Do not add responsive breakpoints during normal implementation tasks.

---

# VISUAL ACCURACY

The reference images are the source of truth.

Reproduce accurately:

- layout
- spacing
- proportions
- hierarchy
- glow
- glassmorphism
- blur
- shadows
- typography
- border radius
- gradients
- animations

Do not approximate when a closer implementation is possible.

---

# ITERATIVE REFINEMENT

If the implementation does not closely match the reference:

Refine.

Compare.

Adjust.

Repeat.

Do not stop after the first attempt.

Continue until the implementation is visually as close as possible.

---

# ASSETS

Never regenerate approved assets.

Never replace existing assets.

Always reuse assets from the documented locations.

Always consult assets-map.md before searching the project.

---

# DYNAMIC CONTENT

Unless explicitly instructed:

Use placeholder data.

Do not connect APIs.

Do not implement backend logic.

Do not add state management beyond what is necessary for the UI.

Future integrations will replace placeholder content.

---

# ANIMATIONS

Use Framer Motion.

Animations should be:

- smooth
- subtle
- premium
- natural

Avoid exaggerated animations.

Avoid bouncy effects.

Avoid gaming-style motion.

---

# PERFORMANCE

Keep components lightweight.

Avoid unnecessary re-renders.

Avoid unnecessary dependencies.

Prefer reusable logic.

---

# CODE QUALITY

Write production-quality code.

Keep components:

- readable
- modular
- scalable
- maintainable

Avoid unnecessary abstraction.

Avoid over-engineering.

---

# WHEN FINISHED

Stop.

Do not continue implementing other sections.

Wait for the next task.