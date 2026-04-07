# AGENTS.md

Authoritative AI control contract for this repository.

## 1. Project Context

- **Name:** photobon-landing
- **Purpose:** Static Indonesian marketing site for the Photobon portable mini photobooth offering, designed to educate prospects and drive WhatsApp-based contact.
- **Architecture:** Astro file-based routing with React islands and typed local content modules.
- **Execution Model:** Static build to `dist/`; `.astro` route shells mount React sections with `client:load` where interactivity is required.
- **Critical Domains:** Brand copy in `src/content/`, shared layout/navigation surfaces, route composition for `/`, `/cara-kerja`, `/penempatan`, and `/kontak`.

## 2. Technology Baseline

- **Framework:** Astro 6.1.4 with `@astrojs/react` 5.0.3
- **Runtime:** Node-compatible toolchain with Bun as the canonical package manager evidenced by `bun.lock`
- **Language:** TypeScript 5.9 in strict Astro config, plus `.astro` components
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`, global design tokens in `src/styles/global.css`, shadcn-style UI primitives
- **Package Manager:** Bun
- **Version Policy:** use versions resolved from repository manifests and lockfiles; do not invent versions
- **State Management:** Local component state only; no client data store configured
- **Database / ORM:** None
- **Testing Stack:** No automated test framework configured; rely on lint, typecheck, and build checks

## 3. Architecture and Structure Rules

- Keep `src/pages/` thin. Route shells should compose the shared layout and page-level sections rather than owning large blocks of page logic.
- Keep reusable page copy and static business data in `src/content/`; avoid scattering brand text across presentation components.
- Preserve the current separation between `src/components/layout/` structural primitives, `src/components/ui/` UI primitives, and `src/sections/` page-scoped compositions.
- Respect the `@/` alias to `src/`, and keep generated/build directories like `dist/` and `.astro/` out of authored source changes.
- The repo is currently static-only: do not introduce backend, CMS, auth, or persistence assumptions without explicit direction.

## 4. Operational Command Set

- **Install:** `bun install`
- **Dev:** `bun run dev`
- **Build:** `bun run build`
- **Test:** no test command is configured
- **Lint:** `bun run lint`
- **Typecheck:** `bun run typecheck`
- **Format:** `bun run format`

## 5. Git Workflow Rules

- **Branch Strategy:** unknown from repo evidence; current repo is on `master`
- **Review Flow:** unknown from repo evidence; no remote or PR config exists yet
- **Auto-Commit:** forbidden by default
- **Auto-Push:** forbidden by default
- **Push Identity:** use only the user's identity
- **Co-Authors:** forbidden unless the user explicitly asks otherwise
- **Ignored Local Agent Artifacts:** `.sisyphus/`, `.agent-workspace/`, `.reviewer/`, `.evals/`, `*.skill`

## 6. Agent Behavior

- Read `AGENTS.md` first, then the relevant `.context/` files before planning or coding.
- Read `PROGRESS.md` before starting work to understand current milestones and known unknowns.
- Do not guess workflow, deploy, or product decisions that the repo does not define.
- Preserve existing public routes and the current static marketing-site model unless the user changes scope.
- When editing copy-backed features, update `src/content/` first and keep section components presentation-focused.
- Update `.context/` first when a durable command, architecture rule, testing rule, or security rule changes, then reflect that change here.
- Append a factual `PROGRESS.md` entry after meaningful initialization, refresh, repair, or implementation milestones.
- Do not add co-author trailers, assistant attribution, or alternate authorship metadata on the user's behalf.

## 7. Authority Order

1. explicit user instruction
2. `AGENTS.md`
3. `.context/`
4. repository code and configs

When user instruction and repository reality diverge, clarify in docs and preserve verified codebase truth.

## 8. Learned Rules

- This repo has moved beyond the generic Astro README; trust `src/content/`, routed pages, and `.context/` over template boilerplate.
- The home page is implemented, while `/cara-kerja`, `/penempatan`, and `/kontak` still have page shells plus typed content but no section implementations.
- No test harness, CI pipeline, remote, or deploy target is configured yet; do not imply they exist.
