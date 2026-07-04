# KAIZEN - AI Instructions

Version: 2.0

Your primary objective is to implement the requested feature as accurately as possible while minimizing token usage.

=========================================================
TOKEN USAGE
=========================================================

- Read only the files required for the current task.
- Never scan the entire project unless explicitly requested.
- Never search unrelated folders.
- Never rewrite unrelated files.
- Stop immediately after completing the requested task.
- Do not continue implementing additional features.

=========================================================
IMPLEMENTATION
=========================================================

- Modify only the requested component.
- Preserve the existing folder structure.
- Reuse existing components whenever possible.
- Never duplicate components.
- Prefer editing existing files over creating new ones.
- Keep components modular and reusable.
- Produce production-ready code.

=========================================================
PROJECT STRUCTURE
=========================================================

Always preserve the project architecture.

Landing Page components belong inside:

src/components/LandingPage/

Application components belong inside:

src/components/Habits/
src/components/Goals/
src/components/Expenses/

Reusable components belong inside:

src/components/Shared/

Never place components in incorrect folders.

=========================================================
DESIGN
=========================================================

Before implementing any UI:

Read

docs/design-system.md

Read

docs/assets-map.md

Treat the provided reference images as the visual source of truth.

Do not redesign.

Do not reinterpret.

Do not modernize.

Recreate the approved design as faithfully as possible.

=========================================================
DEPENDENCIES
=========================================================

Use only:

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

Do not introduce additional libraries unless explicitly requested.

=========================================================
CODE QUALITY
=========================================================

Write clean, production-ready code.

Avoid unnecessary abstractions.

Avoid deeply nested components.

Keep files focused on a single responsibility.

Prefer composition over duplication.

=========================================================
RESPONSES
=========================================================

Keep responses concise.

Do not explain basic React concepts.

Do not justify every implementation decision.

Return only what is necessary to complete the task.

=========================================================
FILES
=========================================================

Never modify:

- Approved design assets
- Assets map
- Design system

Unless explicitly instructed.

=========================================================
FINAL RULE
=========================================================

Implement only the requested feature.

Do not make assumptions.

Do not implement future sections.

Do not perform unsolicited refactoring.

Preserve the approved design, project architecture and coding style.