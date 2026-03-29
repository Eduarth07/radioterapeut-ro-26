# AGENTS.md

## Project purpose
This repository contains a professional medical website under active development.
The goal is a clean, modern, trustworthy, high-quality site with strong visual consistency, good responsiveness, and maintainable code.

This project is not a prototype. Treat it as a real production-oriented codebase that is still evolving.

---

## General working principles
- Preserve the existing visual identity unless an explicit redesign is requested.
- Prioritize consistency over novelty.
- Prefer small, reusable, composable components over duplicated page-specific code.
- Make high-confidence, minimal, controlled changes.
- Avoid one-off stylistic fixes that increase inconsistency elsewhere.
- Before changing UI patterns used in multiple places, first identify whether they should be standardized into a shared component or utility.
- Keep the codebase tidy, readable, and easy to extend.

---

## Primary goals when editing this project
1. Improve consistency across pages and components.
2. Reduce duplicated styling and duplicated UI patterns.
3. Preserve or improve responsiveness.
4. Preserve or improve accessibility.
5. Keep implementation simple and maintainable.
6. Avoid unnecessary dependencies or architectural changes.

---

## UI and design system rules
- The site should feel professional, elegant, calm, readable, and medically credible.
- Prefer a restrained, polished interface rather than flashy or overly animated UI.
- Keep spacing, typography, border radius, shadows, and hover behavior visually coherent across the site.
- Similar components must look like they belong to the same design system.
- Reuse the same visual logic for buttons, links, cards, form controls, badges, and section layouts.

### Consistency requirements
When editing or creating UI:
- Use shared patterns for spacing and sizing.
- Avoid introducing slightly different variants of the same element.
- Do not create a new button style if an existing standardized variant can be reused.
- Do not create page-only styling unless there is a strong reason.
- Unify repeated class combinations into reusable components or helpers when appropriate.

---

## Buttons
Buttons are a key consistency concern in this project.

### Button rules
- Prefer a single reusable Button component or a clearly centralized button styling system.
- Standardize:
  - height / vertical rhythm
  - horizontal padding
  - border radius
  - font size and weight
  - icon spacing
  - hover states
  - focus states
  - disabled states
  - transition behavior
- Distinguish clearly between:
  - primary button
  - secondary button
  - outline button
  - ghost/subtle button
  - destructive button (only where needed)

### When working on buttons
- First audit existing components and elements like buttons, patterns in the relevant files.
- Map each existing element to a standard variant if possible.
- Prefer replacing inconsistent one-off class strings with the shared system.
- Preserve semantic correctness:
  - use `button` for actions
  - use links for navigation
- Ensure keyboard focus visibility is always maintained.

---

## Forms
- Form controls must be visually consistent across all pages.
- Labels, inputs, textareas, selects, helper text, error text, and submit buttons should follow one coherent system.
- Do not create different input styles in different forms without an explicit reason.
- Error messages should be clear, calm, and readable.
- Focus and validation states must remain accessible.

---

## Layout and responsive behavior
- Prefer mobile-first implementation.
- Avoid fragile spacing hacks.
- Use consistent container widths and section paddings.
- Maintain visual balance across breakpoints.
- When changing desktop layout, verify that mobile layout still feels intentional and clean.
- Do not introduce unnecessary breakpoint complexity.

---

## Typography
- Keep typography stable and readable.
- Reuse a clear type scale.
- Avoid random changes in text size, weight, line-height, or tracking between similar sections.
- Headings and body text should feel consistent across pages.

---

## Color and visual language
- Reuse the established palette and tokens already present in the project.
- Do not introduce new colors casually.
- If a new semantic color is needed, use it intentionally and minimally.
- Maintain adequate contrast in both light and dark themes if dark mode exists.

---

## Tailwind and styling rules
- Prefer clean Tailwind usage.
- Avoid very long duplicated utility strings repeated across multiple files.
- Extract repeated patterns into shared components, variants, or utility helpers when repetition becomes meaningful.
- Do not refactor purely for abstraction if it makes the code harder to understand.
- Balance reuse with readability.

### Tailwind-specific guidance
- Prefer consistent spacing scale usage.
- Prefer semantic reuse through shared components when the same pattern appears multiple times.
- Avoid arbitrary values unless they are truly needed.
- Avoid introducing conflicting utility combinations.

---

## Component architecture
- Prefer reusable components for repeated UI patterns.
- Keep component APIs simple and predictable.
- Avoid over-engineering.
- If a component becomes too specific to one page, evaluate whether it should remain local to that page.
- Shared components should be generic enough to reuse, but not abstract to the point of confusion.

---

## Editing strategy
When given a task, follow this order when appropriate:
1. Understand the existing implementation.
2. Identify repeated patterns and inconsistencies.
3. Propose or infer the intended shared pattern.
4. Implement the smallest clean change that improves consistency.
5. Avoid unrelated edits.

If a requested change affects many files:
- prefer incremental refactoring
- avoid broad unreviewable rewrites
- preserve behavior unless behavior changes are explicitly requested

---

## Refactoring rules
- Refactor only when it creates real consistency, clarity, or maintainability benefits.
- Avoid style churn.
- Avoid renaming files, components, props, or classes unless it materially improves the project.
- Keep diffs focused.
- Do not mix unrelated cleanup into the same change unless necessary.

---

## Accessibility
Always preserve or improve accessibility.
- Maintain visible focus styles.
- Preserve semantic HTML.
- Use accessible labels for buttons and form controls.
- Do not rely on color alone to communicate meaning.
- Ensure interactive elements remain easy to use on mobile.

---

## Performance and SEO
- Avoid unnecessary client-side complexity.
- Prefer lightweight solutions when possible.
- Do not introduce heavy packages for small UI problems.
- Preserve semantic page structure.
- Keep markup clean and search-friendly.
- Avoid harming loading performance with unnecessary code.

---

## Dark mode
If dark mode is present:
- preserve it
- keep contrast readable
- avoid introducing components that look polished only in one theme

Do not fix only light mode while leaving dark mode inconsistent.

---

## What to avoid
- Do not redesign the site unless explicitly asked.
- Do not add trendy UI elements that clash with the rest of the site.
- Do not create duplicate button or form styles.
- Do not make large speculative refactors.
- Do not introduce new dependencies unless clearly justified.
- Do not silently change copy/content unless requested.

---

## How to report changes
When making meaningful edits:
- briefly explain what was standardized
- mention which repeated patterns were unified
- mention any remaining inconsistency that should be cleaned up later
- keep explanations concise and practical

---

## Preferred behavior for UI tasks
For UI consistency tasks:
1. Audit first.
2. Standardize second.
3. Refactor incrementally.
4. Preserve the current visual identity.

For new components:
- first align them with existing design patterns
- if existing patterns are inconsistent, choose the most coherent direction and keep it close to the current design language

---

## Project maturity note
This project is still under development, so some inconsistencies may already exist.
Do not amplify them.
Each change should move the project toward a more coherent system.
