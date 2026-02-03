# Interactive Dark-Themed Portfolio Website

## TL;DR

> **Quick Summary**: Build a dark-themed portfolio website at the root level that auto-discovers and showcases 11 projects from the `web/` folder, featuring scroll-triggered GSAP animations, side navigation, and Korean UI with English project names.
> 
> **Deliverables**:
> - Portfolio website at `/Users/chulheewon/development/main_project/web_portpolio/` (root level)
> - c_readme.md files for 10 complete projects (using tech-readme skill)
> - Dark charcoal/slate theme with cyan/amber accents
> - Side index navigation (Hero, Projects, About, Contact)
> - Scroll-triggered animations using existing GSAP patterns
> - Auto-discovery of projects from `web/` folder
> - Project cards with run commands and status badges
> 
> **Estimated Effort**: Large (multiple days)
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Wave 1 (c_readme.md generation) -> Wave 2 (Portfolio scaffold + core components) -> Wave 3 (Integration + Polish)

---

## Context

### Original Request
Build an interactive dark-themed portfolio website that auto-discovers projects from the `web/` subfolder, features scroll-triggered animations, side navigation, and displays project information with run commands.

### Interview Summary
**Key Discussions**:
- **Project Discovery**: Show incomplete projects (noir) with "미완성" badge; complete projects show normally
- **c_readme.md**: Generate BEFORE portfolio build using tech-readme skill (10 projects, exclude noir)
- **Run Commands**: Display commands for user to copy (e.g., `cd web/atlas && npm run dev`)
- **Side Navigation**: Main sections only (Hero, Projects, About, Contact)
- **Language**: Korean UI with English project names preserved
- **Visual Style**: Charcoal/slate dark theme, cyan/amber accent, subtle/elegant animations, grid cards

**Research Findings**:
- Existing projects use `@gsap/react` with `useGSAP` hook for clean GSAP integration
- `FadeInSection`, `MagneticButton`, `SidebarNav` components available as reference patterns
- Tailwind CSS 4 with `@theme inline` for CSS variables
- All projects use identical scripts: `npm run dev`, `npm run build`, `npm start`
- Next.js 16 supports synchronous `fs.readFileSync()` for build-time file reading

### Gap Analysis (Self-Review)
**Identified Gaps** (addressed):
- **c_readme.md skill reference**: User mentioned "client-readme" but system has "tech-readme" skill -> Use `tech-readme` skill
- **Project status detection**: How to detect incomplete projects -> Check for `src/` directory existence
- **Port information**: User wanted port info -> Parse from package.json or use default (3000)
- **About/Contact sections**: Content not specified -> Apply sensible defaults (developer portfolio structure)

---

## Work Objectives

### Core Objective
Create a visually distinct, dark-themed portfolio website that dynamically discovers and showcases web projects with scroll-triggered animations and intuitive navigation.

### Concrete Deliverables
1. Next.js 16 portfolio app at root level (`/Users/chulheewon/development/main_project/web_portpolio/`)
2. 10 c_readme.md files (one per complete project in `web/`)
3. Side navigation component with scroll-spy
4. Project discovery utility (reads `web/` folder)
5. Project card components with status badges
6. Responsive grid layout (mobile/tablet/desktop)
7. GSAP scroll-triggered animations throughout

### Definition of Done
- [ ] `npm run dev` at root starts portfolio on localhost:3000
- [ ] Portfolio displays all 11 projects from `web/` folder
- [ ] `noir` shows "미완성" badge; others show normally
- [ ] Each project card shows: name, description (from c_readme.md), run command
- [ ] Side navigation highlights current section on scroll
- [ ] Animations trigger on scroll (FadeIn, TextReveal patterns)
- [ ] Responsive on mobile (375px), tablet (768px), desktop (1440px)
- [ ] All UI text in Korean; project names in English

### Must Have
- Dark charcoal/slate color palette (distinct from onyx's navy theme)
- GSAP ScrollTrigger animations using `useGSAP` pattern
- Side index navigation (4 sections: Hero, Projects, About, Contact)
- Auto-discovery of `web/` subfolders
- c_readme.md for each complete project
- "미완성" badge for projects without `src/` folder
- Run command display per project

### Must NOT Have (Guardrails)
- Do NOT modify any existing project in `web/` folder (except adding c_readme.md)
- Do NOT create database or backend functionality
- Do NOT implement actual project launching (just display commands)
- Do NOT add authentication or user accounts
- Do NOT use different animation library (GSAP only)
- Do NOT create multiple portfolio pages (single page with sections)
- Do NOT over-engineer project detection (simple `fs.existsSync` check)

---

## Verification Strategy (MANDATORY)

### Test Decision
- **Infrastructure exists**: NO (new project at root level)
- **User wants tests**: NO (not discussed, apply manual verification)
- **Framework**: N/A
- **QA approach**: Manual verification with specific commands

### Automated Verification (Manual QA Procedures)

Each TODO includes EXECUTABLE verification procedures:

**For Frontend/UI changes** (using playwright skill):
```
# Agent executes via playwright browser automation:
1. Navigate to specified URL
2. Verify elements exist and are visible
3. Test interactions (clicks, scrolls)
4. Capture screenshots for evidence
```

**For Build/Config changes** (using Bash):
```bash
# Agent runs:
npm run build  # Should complete without errors
npm run dev &  # Start dev server
curl -s http://localhost:3000 | grep "<title>"  # Verify page loads
```

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately - c_readme.md generation):
├── Task 1: Generate c_readme.md for atlas
├── Task 2: Generate c_readme.md for aurora
├── Task 3: Generate c_readme.md for cook
├── Task 4: Generate c_readme.md for dc
├── Task 5: Generate c_readme.md for energy_solution
├── Task 6: Generate c_readme.md for erection
├── Task 7: Generate c_readme.md for luxe
├── Task 8: Generate c_readme.md for onyx
├── Task 9: Generate c_readme.md for vertex
└── Task 10: Generate c_readme.md for zenith

Wave 2 (After Wave 1 - Portfolio Foundation):
├── Task 11: Initialize Next.js portfolio project at root
├── Task 12: Create project discovery utility
├── Task 13: Create dark theme globals.css
├── Task 14: Create animation components (copy from onyx, adapt)
└── Task 15: Create SideNav component

Wave 3 (After Wave 2 - Sections & Integration):
├── Task 16: Create Hero section
├── Task 17: Create Projects section with grid
├── Task 18: Create About section
├── Task 19: Create Contact section
└── Task 20: Create main page layout with all sections

Wave 4 (After Wave 3 - Polish):
├── Task 21: Add responsive breakpoints
├── Task 22: Final integration testing
└── Task 23: Commit all changes

Critical Path: Wave 1 → Wave 2 → Wave 3 → Wave 4
Parallel Speedup: ~60% faster than sequential (Wave 1: 10 parallel tasks)
```

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
|------|------------|--------|---------------------|
| 1-10 | None | 17 (Projects section) | Each other (Wave 1) |
| 11 | None | 12-20 | 1-10 (different scope) |
| 12 | 11 | 17 | 13, 14, 15 |
| 13 | 11 | 16-20 | 12, 14, 15 |
| 14 | 11 | 16-20 | 12, 13, 15 |
| 15 | 11 | 20 | 12, 13, 14 |
| 16 | 13, 14 | 20 | 17, 18, 19 |
| 17 | 1-10, 12, 14 | 20 | 16, 18, 19 |
| 18 | 13, 14 | 20 | 16, 17, 19 |
| 19 | 13, 14 | 20 | 16, 17, 18 |
| 20 | 15, 16-19 | 21 | None |
| 21 | 20 | 22 | None |
| 22 | 21 | 23 | None |
| 23 | 22 | None | None |

### Agent Dispatch Summary

| Wave | Tasks | Recommended Agents |
|------|-------|-------------------|
| 1 | 1-10 | 10x delegate_task(category="writing", load_skills=["tech-readme"], run_in_background=true) |
| 2 | 11-15 | 5x delegate_task(category="quick", load_skills=["frontend-ui-ux"], run_in_background=true) |
| 3 | 16-20 | 5x delegate_task(category="visual-engineering", load_skills=["frontend-ui-ux"], run_in_background=true) |
| 4 | 21-23 | Sequential, category="quick" |

---

## TODOs

### Wave 1: c_readme.md Generation (Parallel - 10 tasks)

> **IMPORTANT**: These 10 tasks can ALL run in parallel. Each generates a c_readme.md for one project.
> Use `tech-readme` skill for consistent technical documentation format.

---

- [ ] 1. Generate c_readme.md for atlas

  **What to do**:
  - Load tech-readme skill
  - Analyze `web/atlas/` project structure
  - Generate `web/atlas/c_readme.md` with technical overview
  - Focus on: architecture, components, tech stack, run commands

  **Must NOT do**:
  - Do NOT modify any source code in atlas
  - Do NOT delete existing files
  - Do NOT create additional documentation files

  **Recommended Agent Profile**:
  - **Category**: `writing`
    - Reason: Documentation generation is a writing-focused task
  - **Skills**: [`tech-readme`]
    - `tech-readme`: Generates technical README format - exact skill match

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2-10)
  - **Blocks**: Task 17 (Projects section needs c_readme content)
  - **Blocked By**: None (can start immediately)

  **References**:
  - `web/atlas/` - Target project directory
  - `web/atlas/package.json` - Package info and scripts
  - `web/atlas/src/` - Source code to analyze

  **Acceptance Criteria**:
  - [ ] File exists: `web/atlas/c_readme.md`
  - [ ] Contains: Project name, description, tech stack
  - [ ] Contains: Run commands section

  **Commit**: NO (groups with Task 23)

---

- [ ] 2. Generate c_readme.md for aurora

  **What to do**:
  - Same as Task 1, for `web/aurora/`

  **Must NOT do**:
  - Same constraints as Task 1

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`tech-readme`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3-10)
  - **Blocks**: Task 17
  - **Blocked By**: None

  **References**:
  - `web/aurora/` - Target project

  **Acceptance Criteria**:
  - [ ] File exists: `web/aurora/c_readme.md`

  **Commit**: NO (groups with Task 23)

---

- [ ] 3. Generate c_readme.md for cook

  **What to do**:
  - Same as Task 1, for `web/cook/`

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`tech-readme`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1
  - **Blocked By**: None

  **References**:
  - `web/cook/`

  **Acceptance Criteria**:
  - [ ] File exists: `web/cook/c_readme.md`

  **Commit**: NO (groups with Task 23)

---

- [ ] 4. Generate c_readme.md for dc

  **What to do**:
  - Same as Task 1, for `web/dc/`

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`tech-readme`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1
  - **Blocked By**: None

  **References**:
  - `web/dc/`

  **Acceptance Criteria**:
  - [ ] File exists: `web/dc/c_readme.md`

  **Commit**: NO (groups with Task 23)

---

- [ ] 5. Generate c_readme.md for energy_solution

  **What to do**:
  - Same as Task 1, for `web/energy_solution/`
  - Note: This project has description "태양광/신재생에너지"

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`tech-readme`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1
  - **Blocked By**: None

  **References**:
  - `web/energy_solution/`
  - Package name: `energy-solution`

  **Acceptance Criteria**:
  - [ ] File exists: `web/energy_solution/c_readme.md`

  **Commit**: NO (groups with Task 23)

---

- [ ] 6. Generate c_readme.md for erection

  **What to do**:
  - Same as Task 1, for `web/erection/`
  - Note: Package name is `lotus-construction`, description "로터스건설"

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`tech-readme`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1
  - **Blocked By**: None

  **References**:
  - `web/erection/`

  **Acceptance Criteria**:
  - [ ] File exists: `web/erection/c_readme.md`

  **Commit**: NO (groups with Task 23)

---

- [ ] 7. Generate c_readme.md for luxe

  **What to do**:
  - Same as Task 1, for `web/luxe/`
  - Note: Needs `npm install` but has src (show normally)

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`tech-readme`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1
  - **Blocked By**: None

  **References**:
  - `web/luxe/`

  **Acceptance Criteria**:
  - [ ] File exists: `web/luxe/c_readme.md`

  **Commit**: NO (groups with Task 23)

---

- [ ] 8. Generate c_readme.md for onyx

  **What to do**:
  - Same as Task 1, for `web/onyx/`
  - Note: Private Banking theme, most complete project

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`tech-readme`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1
  - **Blocked By**: None

  **References**:
  - `web/onyx/`
  - `web/onyx/src/components/` - Rich component library

  **Acceptance Criteria**:
  - [ ] File exists: `web/onyx/c_readme.md`

  **Commit**: NO (groups with Task 23)

---

- [ ] 9. Generate c_readme.md for vertex

  **What to do**:
  - Same as Task 1, for `web/vertex/`

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`tech-readme`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1
  - **Blocked By**: None

  **References**:
  - `web/vertex/`

  **Acceptance Criteria**:
  - [ ] File exists: `web/vertex/c_readme.md`

  **Commit**: NO (groups with Task 23)

---

- [ ] 10. Generate c_readme.md for zenith

  **What to do**:
  - Same as Task 1, for `web/zenith/`

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`tech-readme`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1
  - **Blocked By**: None

  **References**:
  - `web/zenith/`

  **Acceptance Criteria**:
  - [ ] File exists: `web/zenith/c_readme.md`

  **Commit**: NO (groups with Task 23)

---

### Wave 2: Portfolio Foundation (After Wave 1)

---

- [ ] 11. Initialize Next.js portfolio project at root

  **What to do**:
  - Create Next.js 16 project structure at ROOT level (NOT inside web/)
  - Copy package.json pattern from `web/onyx/package.json`
  - Set package name to `portfolio`
  - Include same dependencies: next 16, react 19, gsap, tailwindcss 4, lucide-react
  - Create basic app structure: `src/app/`, `src/components/`
  - Create `postcss.config.mjs` for Tailwind 4
  - DO NOT run npm install (let next task handle)

  **Must NOT do**:
  - Do NOT put portfolio inside `web/` folder
  - Do NOT use create-next-app (copy structure manually)
  - Do NOT add unnecessary dependencies

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple file creation, no complex logic
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Understands Next.js project structure

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Wave 1 tasks, different scope)
  - **Parallel Group**: Wave 2 start
  - **Blocks**: Tasks 12-20
  - **Blocked By**: None (can start with Wave 1)

  **References**:
  - `web/onyx/package.json` - Copy dependency versions
  - `web/onyx/postcss.config.mjs` - PostCSS config pattern
  - `web/onyx/tsconfig.json` - TypeScript config pattern
  - `web/onyx/next.config.ts` - Next.js config pattern

  **Acceptance Criteria**:
  ```bash
  # Agent runs:
  ls -la /Users/chulheewon/development/main_project/web_portpolio/
  # Assert: package.json exists at root
  # Assert: src/app/ directory exists
  # Assert: postcss.config.mjs exists

  cat package.json | grep '"name"'
  # Assert: Contains "portfolio"
  ```

  **Commit**: NO (groups with Task 23)

---

- [ ] 12. Create project discovery utility

  **What to do**:
  - Create `src/lib/projects.ts`
  - Implement `getProjects()` function that:
    - Reads `web/` directory using `fs.readdirSync()`
    - For each subfolder, checks if `src/` exists (complete vs incomplete)
    - Reads `c_readme.md` if exists, extracts title/description
    - Reads `package.json` for scripts
    - Returns array of project objects with: name, description, isComplete, runCommand
  - Define TypeScript interface `Project`
  - Use synchronous fs operations (build-time)

  **Must NOT do**:
  - Do NOT use async fs operations (not needed for build-time)
  - Do NOT cache results in database
  - Do NOT add external dependencies for file reading

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Utility function, straightforward logic
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Understands Next.js data fetching patterns

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 13, 14, 15)
  - **Blocks**: Task 17 (Projects section)
  - **Blocked By**: Task 11 (needs project structure)

  **References**:
  - `web/` - Directory to scan
  - `web/onyx/package.json:6-10` - Scripts structure pattern
  - Librarian finding: Use `fs.readdirSync()` and `path.join(process.cwd(), 'web')` for build-time reading

  **Acceptance Criteria**:
  ```bash
  # Agent runs:
  cat src/lib/projects.ts | grep "export interface Project"
  # Assert: Interface defined

  cat src/lib/projects.ts | grep "getProjects"
  # Assert: Function exported

  cat src/lib/projects.ts | grep "readdirSync"
  # Assert: Uses synchronous fs
  ```

  **Commit**: NO (groups with Task 23)

---

- [ ] 13. Create dark theme globals.css

  **What to do**:
  - Create `src/app/globals.css`
  - Define CSS variables for charcoal/slate dark theme:
    - `--background`: #0D0D0D (charcoal black)
    - `--surface`: #1A1A1A (dark gray)
    - `--surface-light`: #262626
    - `--border`: #333333
    - `--primary`: #22D3EE (cyan accent)
    - `--secondary`: #F59E0B (amber accent)
    - `--text-primary`: #F5F5F5
    - `--text-secondary`: #A3A3A3
    - `--text-muted`: #737373
  - Use `@theme inline` for Tailwind 4 integration
  - Include base styles, scrollbar styling, utility classes
  - Make it VISUALLY DISTINCT from onyx's navy/gold theme

  **Must NOT do**:
  - Do NOT copy onyx's color scheme directly
  - Do NOT use external CSS frameworks
  - Do NOT add complex animations here (separate component)

  **Recommended Agent Profile**:
  - **Category**: `artistry`
    - Reason: Color palette design requires aesthetic judgment
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Tailwind CSS expertise, dark theme design

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 12, 14, 15)
  - **Blocks**: Tasks 16-20 (all sections need theme)
  - **Blocked By**: Task 11

  **References**:
  - `web/onyx/src/app/globals.css:1-38` - CSS structure pattern (DO NOT copy colors)
  - `web/onyx/src/app/globals.css:84-110` - Utility classes pattern

  **Acceptance Criteria**:
  ```bash
  # Agent runs:
  cat src/app/globals.css | grep -E "background.*#0D0D0D|background.*#1"
  # Assert: Charcoal background defined (NOT navy #0F1B2E)

  cat src/app/globals.css | grep "@theme inline"
  # Assert: Tailwind 4 theme integration

  cat src/app/globals.css | grep -E "22D3EE|F59E0B"
  # Assert: Cyan/amber accents defined
  ```

  **Commit**: NO (groups with Task 23)

---

- [ ] 14. Create animation components

  **What to do**:
  - Create `src/components/animations/` directory
  - Copy and adapt from onyx:
    - `FadeInSection.tsx` - Scroll-triggered fade in
    - `TextReveal.tsx` - Character/word reveal animation
    - `MagneticButton.tsx` - Magnetic hover effect
  - Ensure all use `'use client'` directive
  - Ensure all use `useGSAP` hook pattern
  - Ensure proper cleanup with `gsap.context()`

  **Must NOT do**:
  - Do NOT change animation logic (proven patterns)
  - Do NOT add new animation libraries
  - Do NOT make server components

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Copy and adapt existing code
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: GSAP + React integration knowledge

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 12, 13, 15)
  - **Blocks**: Tasks 16-20 (sections use animations)
  - **Blocked By**: Task 11

  **References**:
  - `web/onyx/src/components/animations/FadeInSection.tsx:1-67` - Full implementation to copy
  - `web/onyx/src/components/animations/MagneticButton.tsx:1-47` - Full implementation to copy
  - `web/onyx/src/components/animations/TextReveal.tsx` - Copy this as well

  **Acceptance Criteria**:
  ```bash
  # Agent runs:
  ls src/components/animations/
  # Assert: FadeInSection.tsx, TextReveal.tsx, MagneticButton.tsx exist

  grep -l "useGSAP" src/components/animations/*.tsx | wc -l
  # Assert: At least 2 files use useGSAP

  grep -l "'use client'" src/components/animations/*.tsx | wc -l
  # Assert: All files have 'use client'
  ```

  **Commit**: NO (groups with Task 23)

---

- [ ] 15. Create SideNav component

  **What to do**:
  - Create `src/components/ui/SideNav.tsx`
  - Adapt from `web/onyx/src/components/ui/SidebarNav.tsx`
  - Configure for 4 sections: Hero, Projects, About, Contact
  - Korean labels: 홈, 프로젝트, 소개, 연락처
  - Use scroll-spy pattern (IntersectionObserver or scroll listener)
  - Position: fixed left side, vertically centered
  - Style: dots with labels on hover, cyan accent for active

  **Must NOT do**:
  - Do NOT add project-level navigation (main sections only)
  - Do NOT make it collapsible (simple static nav)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Adapt existing component
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Navigation UX patterns

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 12, 13, 14)
  - **Blocks**: Task 20 (main layout)
  - **Blocked By**: Task 11

  **References**:
  - `web/onyx/src/components/ui/SidebarNav.tsx:1-96` - Full implementation to adapt
  - Change navItems to: `[{id: 'hero', label: '홈'}, {id: 'projects', label: '프로젝트'}, {id: 'about', label: '소개'}, {id: 'contact', label: '연락처'}]`

  **Acceptance Criteria**:
  ```bash
  # Agent runs:
  cat src/components/ui/SideNav.tsx | grep "프로젝트"
  # Assert: Korean labels present

  cat src/components/ui/SideNav.tsx | grep "hero.*projects.*about.*contact"
  # Assert: 4 section IDs defined (or check separately)

  grep "'use client'" src/components/ui/SideNav.tsx
  # Assert: Client component
  ```

  **Commit**: NO (groups with Task 23)

---

### Wave 3: Sections & Integration (After Wave 2)

---

- [ ] 16. Create Hero section

  **What to do**:
  - Create `src/components/sections/Hero.tsx`
  - Full-viewport hero section with:
    - Main heading: "웹 프로젝트 포트폴리오" (or similar)
    - Subheading with project count (dynamic from getProjects)
    - Subtle animated background (gradient shift or particles)
    - Scroll indicator at bottom
  - Use FadeInSection and TextReveal for animations
  - Section id: `hero`

  **Must NOT do**:
  - Do NOT add heavy background video
  - Do NOT add complex 3D effects
  - Keep animations subtle/elegant

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Hero section requires visual design + animation integration
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Landing page hero design expertise

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 17, 18, 19)
  - **Blocks**: Task 20
  - **Blocked By**: Tasks 13, 14

  **References**:
  - `web/onyx/src/components/sections/Hero.tsx` - Structure reference
  - `src/components/animations/TextReveal.tsx` - For heading animation
  - `src/components/animations/FadeInSection.tsx` - For content reveal

  **Acceptance Criteria**:

  **Playwright browser verification:**
  ```
  1. Navigate to: http://localhost:3000
  2. Wait for: selector "#hero" to be visible
  3. Assert: text "포트폴리오" appears in hero section
  4. Assert: hero takes full viewport height (100vh)
  5. Screenshot: .sisyphus/evidence/task-16-hero.png
  ```

  **Commit**: NO (groups with Task 23)

---

- [ ] 17. Create Projects section with grid

  **What to do**:
  - Create `src/components/sections/Projects.tsx`
  - Create `src/components/ui/ProjectCard.tsx`
  - Section heading: "프로젝트" with TextReveal
  - Fetch projects using `getProjects()` from lib
  - Display in responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
  - Each ProjectCard shows:
    - Project name (English)
    - Description (from c_readme.md or "설명 없음")
    - Status badge: "완료" (green) or "미완성" (amber) for noir
    - Run command in copyable code block
    - Hover: lift effect, glow
  - Section id: `projects`

  **Must NOT do**:
  - Do NOT add filtering or search
  - Do NOT add pagination (show all)
  - Do NOT add click-to-expand (cards show all info)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Grid layout + card design + status badges
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Card design, responsive grids

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 16, 18, 19)
  - **Blocks**: Task 20
  - **Blocked By**: Tasks 1-10 (c_readme.md), 12 (discovery util), 14 (animations)

  **References**:
  - `src/lib/projects.ts` - getProjects() function
  - `src/components/animations/FadeInSection.tsx` - Card reveal
  - `src/components/animations/MagneticButton.tsx` - Optional for CTA

  **Acceptance Criteria**:

  **Playwright browser verification:**
  ```
  1. Navigate to: http://localhost:3000/#projects
  2. Wait for: selector "#projects" to be visible
  3. Assert: At least 11 project cards visible
  4. Assert: "noir" card has "미완성" badge
  5. Assert: "atlas" card has run command "cd web/atlas && npm run dev"
  6. Screenshot: .sisyphus/evidence/task-17-projects.png
  ```

  **Commit**: NO (groups with Task 23)

---

- [ ] 18. Create About section

  **What to do**:
  - Create `src/components/sections/About.tsx`
  - Section heading: "소개"
  - Content:
    - Brief intro about the portfolio collection
    - Tech stack badges: Next.js, React, GSAP, Tailwind
    - Optional: developer profile placeholder
  - Use FadeInSection for reveal
  - Section id: `about`

  **Must NOT do**:
  - Do NOT add long biography
  - Do NOT add contact form here (separate Contact section)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Visual layout with tech stack badges
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 16, 17, 19)
  - **Blocks**: Task 20
  - **Blocked By**: Tasks 13, 14

  **References**:
  - `src/components/animations/FadeInSection.tsx`
  - Lucide React icons for tech stack badges

  **Acceptance Criteria**:

  **Playwright browser verification:**
  ```
  1. Navigate to: http://localhost:3000/#about
  2. Wait for: selector "#about" to be visible
  3. Assert: text "소개" appears
  4. Assert: tech stack badges visible (Next.js, React, etc.)
  5. Screenshot: .sisyphus/evidence/task-18-about.png
  ```

  **Commit**: NO (groups with Task 23)

---

- [ ] 19. Create Contact section

  **What to do**:
  - Create `src/components/sections/Contact.tsx`
  - Section heading: "연락처"
  - Content:
    - Email link (placeholder: contact@example.com)
    - Social links (GitHub, LinkedIn placeholders)
    - Simple footer with copyright
  - Use FadeInSection and MagneticButton for links
  - Section id: `contact`

  **Must NOT do**:
  - Do NOT add contact form (just links)
  - Do NOT add real personal info (placeholders only)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Footer/contact design
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 16, 17, 18)
  - **Blocks**: Task 20
  - **Blocked By**: Tasks 13, 14

  **References**:
  - `web/onyx/src/components/sections/Footer.tsx` - Footer pattern
  - `src/components/animations/MagneticButton.tsx` - For social links

  **Acceptance Criteria**:

  **Playwright browser verification:**
  ```
  1. Navigate to: http://localhost:3000/#contact
  2. Wait for: selector "#contact" to be visible
  3. Assert: text "연락처" appears
  4. Assert: email link visible
  5. Screenshot: .sisyphus/evidence/task-19-contact.png
  ```

  **Commit**: NO (groups with Task 23)

---

- [ ] 20. Create main page layout with all sections

  **What to do**:
  - Create/update `src/app/page.tsx`
  - Create `src/app/layout.tsx` with:
    - Metadata: title "웹 포트폴리오", description
    - Font setup (Geist or similar)
    - globals.css import
  - Assemble all sections in order:
    - SideNav (fixed position)
    - Hero section
    - Projects section
    - About section
    - Contact section
  - Ensure smooth scroll behavior
  - Add Preloader component (optional, copy from onyx)

  **Must NOT do**:
  - Do NOT add routing (single page only)
  - Do NOT add complex state management

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Full page assembly with layout considerations
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (after Wave 3 parallel tasks)
  - **Blocks**: Task 21
  - **Blocked By**: Tasks 15, 16, 17, 18, 19

  **References**:
  - `web/onyx/src/app/layout.tsx` - Layout pattern
  - `web/onyx/src/app/page.tsx` - Page assembly pattern
  - All section components created in Tasks 16-19

  **Acceptance Criteria**:

  **Playwright browser verification:**
  ```
  1. Start dev server: npm run dev (in portfolio root)
  2. Navigate to: http://localhost:3000
  3. Assert: All 4 sections visible when scrolling
  4. Assert: SideNav visible on left (desktop)
  5. Assert: SideNav highlights change when scrolling between sections
  6. Full page screenshot: .sisyphus/evidence/task-20-full-page.png
  ```

  **Commit**: NO (groups with Task 23)

---

### Wave 4: Polish & Finalize (After Wave 3)

---

- [ ] 21. Add responsive breakpoints

  **What to do**:
  - Review all components for mobile/tablet/desktop breakpoints
  - Ensure:
    - Mobile (375px): single column, no SideNav, smaller text
    - Tablet (768px): 2-column grid, SideNav hidden or minimal
    - Desktop (1440px): 3-column grid, full SideNav
  - Test hamburger menu or hidden SideNav on mobile
  - Adjust font sizes, padding, margins

  **Must NOT do**:
  - Do NOT add separate mobile pages
  - Do NOT break existing desktop layout

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: CSS adjustments, straightforward
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Responsive design expertise

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: Task 22
  - **Blocked By**: Task 20

  **References**:
  - All component files in `src/components/`
  - Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

  **Acceptance Criteria**:

  **Playwright browser verification (multi-viewport):**
  ```
  Mobile (375x667):
  1. Set viewport: 375x667
  2. Navigate to: http://localhost:3000
  3. Assert: Projects grid shows 1 column
  4. Assert: SideNav not visible (or hamburger shown)
  5. Screenshot: .sisyphus/evidence/task-21-mobile.png

  Tablet (768x1024):
  1. Set viewport: 768x1024
  2. Assert: Projects grid shows 2 columns
  3. Screenshot: .sisyphus/evidence/task-21-tablet.png

  Desktop (1440x900):
  1. Set viewport: 1440x900
  2. Assert: Projects grid shows 3 columns
  3. Assert: SideNav visible on left
  4. Screenshot: .sisyphus/evidence/task-21-desktop.png
  ```

  **Commit**: NO (groups with Task 23)

---

- [ ] 22. Final integration testing

  **What to do**:
  - Run `npm run build` to ensure no build errors
  - Run `npm run dev` and manually verify:
    - All sections load
    - Animations trigger on scroll
    - SideNav scroll-spy works
    - All 11 projects display
    - noir shows "미완성" badge
    - Run commands are correct
  - Fix any issues found

  **Must NOT do**:
  - Do NOT add new features
  - Do NOT refactor working code

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Testing and verification
  - **Skills**: [`playwright`]
    - `playwright`: Browser automation for verification

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: Task 23
  - **Blocked By**: Task 21

  **References**:
  - All acceptance criteria from previous tasks

  **Acceptance Criteria**:
  ```bash
  # Build test:
  npm run build
  # Assert: Exit code 0, no errors

  # Dev server test:
  npm run dev &
  sleep 5
  curl -s http://localhost:3000 | grep "웹 포트폴리오"
  # Assert: Page title present
  ```

  **Playwright full verification:**
  ```
  1. Navigate to: http://localhost:3000
  2. Scroll through entire page
  3. Verify all animations trigger
  4. Click each SideNav item, verify scroll
  5. Verify all 11 project cards render
  6. Verify noir has "미완성" badge
  7. Full test screenshot: .sisyphus/evidence/task-22-final.png
  ```

  **Commit**: NO (next task commits all)

---

- [ ] 23. Commit all changes

  **What to do**:
  - Stage all new files
  - Create meaningful commit message
  - Include: portfolio app, c_readme.md files, all components

  **Must NOT do**:
  - Do NOT push to remote (just local commit)
  - Do NOT include node_modules or .next

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple git operations
  - **Skills**: [`git-master`]
    - `git-master`: Git commit expertise

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Final
  - **Blocks**: None
  - **Blocked By**: Task 22

  **References**:
  - Git commit conventions

  **Acceptance Criteria**:
  ```bash
  git status
  # Assert: Working tree clean after commit

  git log -1 --oneline
  # Assert: Commit message describes portfolio creation
  ```

  **Commit**: YES
  - Message: `feat(portfolio): add dark-themed portfolio website with project auto-discovery`
  - Files: All new portfolio files + c_readme.md files
  - Pre-commit: `npm run build`

---

## Commit Strategy

| After Task | Message | Files | Verification |
|------------|---------|-------|--------------|
| 23 | `feat(portfolio): add dark-themed portfolio website with project auto-discovery` | All portfolio + c_readme.md | npm run build |

---

## Success Criteria

### Verification Commands
```bash
# Build succeeds
npm run build  # Expected: exit 0

# Dev server starts
npm run dev &  # Expected: Server on localhost:3000

# All c_readme.md exist
ls web/*/c_readme.md | wc -l  # Expected: 10 (noir excluded)

# Portfolio structure correct
ls src/components/sections/  # Expected: Hero, Projects, About, Contact
ls src/components/animations/  # Expected: FadeInSection, TextReveal, MagneticButton
ls src/components/ui/  # Expected: SideNav, ProjectCard
```

### Final Checklist
- [ ] Portfolio runs at root level with `npm run dev`
- [ ] Dark charcoal/slate theme (NOT navy like onyx)
- [ ] Cyan/amber accent colors
- [ ] 4-section SideNav: 홈, 프로젝트, 소개, 연락처
- [ ] All 11 projects displayed in grid
- [ ] noir shows "미완성" badge
- [ ] Run commands displayed per project
- [ ] c_readme.md exists for 10 complete projects
- [ ] Scroll-triggered GSAP animations work
- [ ] Responsive on mobile, tablet, desktop
- [ ] Korean UI text, English project names
- [ ] No modifications to existing web/ projects (except c_readme.md)
