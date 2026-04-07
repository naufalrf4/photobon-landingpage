# Context README

This directory is the durable source of truth for project-level agent memory in `photobon-landing`.

## Included in this initialization

- `base/overview.md` — product purpose, audience, scope, and non-goals
- `base/architecture.md` — real boundaries and data flow
- `base/requirements.yaml` — verified functional requirements and guardrails
- `base/tech-stack.yaml` — locked stack choices sourced from manifests/configs
- `base/workflow.yaml` — canonical commands and git/process defaults
- `base/testing.yaml` — current verification model and quality gates
- `base/development-plan.yaml` — current baseline and pending milestones visible in the repo
- `base/maintenance.md` — refresh triggers and upkeep expectations
- `base/security.yaml` — current security posture and secrets handling notes

## Intentionally omitted for now

- `ui-design/`
- `copywriting/`
- `domain/`
- `integrations/`
- `data-model/`
- `operations/`
- `product/`

Those optional groups were not created during this init because the base files already capture the verified repository truth, and no explicit user-approved durable scope was provided yet for additional context groups.

## How future agents should use this

1. Read `AGENTS.md` first for the projected working contract.
2. Read the relevant `.context/base/*` files for deeper source-of-truth detail.
3. Read `PROGRESS.md` for the latest durable milestones and known unknowns.

## Known gaps at initialization time

- Official branch/PR workflow is not defined in repo evidence.
- Deployment target is not defined in repo evidence.
- Automated tests are not configured yet.
