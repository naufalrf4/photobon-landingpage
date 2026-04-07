## Maintenance

### Ownership signals from the repository

- No explicit team ownership file, CODEOWNERS file, or CI-maintained release process exists yet.
- The repository is in an early stage with no commits and no configured remote.

### Practical maintenance expectations

- Treat `src/content/` as a high-change area for copy and business details.
- Treat `src/layouts/`, `src/components/layout/`, and `src/styles/global.css` as shared surfaces that affect all routes.
- When a durable command, workflow, or architectural rule becomes clearer, update `.context/base/*` first and then project the change into `AGENTS.md`.

### Documentation refresh triggers

- New routes or major section folders are added.
- The package manager, build process, linting, or verification commands change.
- A deployment target, CI system, or branching rule becomes official.
- A new external integration, backend, or persistent data flow is introduced.

### Dependency posture

- Use versions from repository manifests and lockfiles as the source of truth.
- Do not invent package versions in docs or implementation planning.
