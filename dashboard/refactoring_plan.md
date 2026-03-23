# Dashboard Refactoring Plan

## Goals
1. Transition from monolithic `index.html`, `script.js`, and `style.css` to a modular architecture.
2. Implement a sleek sidebar navigation for better scalability as more functions are added.
3. Separate data, logic, and presentation layers.
4. Enhance maintainability by dynamic rendering of redundant sections.

## Progress
- [x] **Phase 1: Sidebar Navigation Transition**
  - Replace horizontal navigation with a sleek sidebar UI.
  - Implement mobile responsive toggle and overlay.
  - Ensure all existing section switching works.
- [/] **Phase 2: JavaScript Module Separation & Dynamic Rendering**
  - [x] Extract "Learn" sections (Portfolio, Bond Guide, Masters) into `js/sections/learn.js`.
  - [x] Remove ~700 lines of static HTML from `index.html`.
  - [ ] Extract remaining logic from `script.js` into dedicated modules.
  - [ ] Implement `app.js` as the main entry point (ES Modules).
- [ ] **Phase 3: CSS & Template Separation**
  - Break down `style.css` into modular CSS files (sidebar.css, dashboard.css, etc.).
  - Use `fetch()` to load static HTML templates for help/guide sections.
- [ ] **Phase 4: Advanced Router & Data Layer**
  - Implement a hash-based router for cleaner SPA-like navigation.
  - Break down `data.js` into smaller chunks or a unified database interface.

## Current Status (2026-03-24)
- Ported "Learn" content to dynamic rendering via `learn.js`.
- Cleaned up `index.html` structure (reduced file size significantly).
- Sidebar navigation validated and functional.
