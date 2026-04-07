## Architecture

### Style

Static Astro site with React islands and typed local content modules.

### Execution model

- Astro handles file-based routing and page shells in `src/pages/`.
- Shared document structure and metadata live in `src/layouts/main.astro`.
- React components are hydrated with `client:load` where interactivity is needed, including global navigation/footer and page-level sections.
- Build output is static `dist/`; no SSR adapter is configured.

### Main boundaries

1. `src/pages/`
   - Thin route shells only.
   - Import the shared layout and mount page-level React compositions.

2. `src/layouts/`
   - Shared Astro document wrapper.
   - Owns global metadata, global styles import, navbar/footer mounting, and page slot placement.

3. `src/sections/`
   - Page-scoped React compositions and section components.
   - `home/` is implemented; `contact/`, `how-it-works/`, and `placement/` are scaffolded only.

4. `src/components/layout/`
   - Reusable structural primitives such as `Container`, `Section`, `SectionHeader`, `PageIntro`, `Navbar`, and `Footer`.

5. `src/components/ui/`
   - shadcn-style UI primitives such as `button`, `badge`, and `card`.

6. `src/content/`
   - Typed static content and brand data.
   - Acts as the source for page copy, navigation, WhatsApp links, and placement/how-it-works/contact data.

7. `src/styles/global.css`
   - Global design tokens, Tailwind theme mapping, and base utility classes.

### Data flow

- Content originates in `src/content/*.ts`.
- React sections consume typed content objects as props or direct imports.
- Astro pages compose those sections into routed pages.
- User conversion exits the app through WhatsApp deep links stored in shared content.

### Current architectural invariants

- Keep `.astro` route files thin; page composition belongs in `src/sections/`.
- Treat `src/content/` as the authoritative source for brand copy and static business content.
- Preserve the existing alias convention (`@/` -> `src/`).
- Do not introduce backend/API assumptions unless the repository and user explicitly expand scope.
