# Domain docs

How engineering skills should consume this repository's domain documentation when exploring the codebase.

## Before exploring

- Read `CONTEXT.md` at the repository root.
- Read ADRs in `docs/adr/` that touch the area under review.
- If either location does not exist, proceed silently; domain documentation is created lazily as terms and decisions are resolved.

## Layout

This is a single-context repository:

```text
/
├── CONTEXT.md
├── docs/adr/
└── app/
```

## Use the glossary's vocabulary

Use terms as defined in `CONTEXT.md` when naming domain concepts. Do not drift to synonyms the glossary explicitly avoids.

If a necessary concept is absent, reconsider whether it belongs to the domain language or note the gap for a later documentation discussion.

## Flag ADR conflicts

Explicitly identify suggestions that contradict an existing ADR instead of silently overriding the decision.
