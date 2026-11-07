# Project instructions for OpenCode

## Required context before implementation

Read these files before making changes:

1. `DESIGN.md` — visual direction and brand system.
2. `PROJECT_CONTEXT.md` — business facts, products, services, contacts and accuracy limits.
3. `WEBSITE_BUILD_PROMPT.md` — full implementation brief and acceptance criteria.
4. `.opencode/skills/master-ui-skill/SKILL.md` — supplied UI/UX engineering workflow.
5. If installed, read the Antislop core and relevant skills from `.opencode/skills/`:
   - `antislop/SKILL.md`
   - `antislop-ui/SKILL.md`
   - `antislop-copywriting/SKILL.md`
   - `antislop-human/SKILL.md`
   - `antislop-layoutmobile/SKILL.md`
   - `antislop-code/SKILL.md`

The Antislop skills are installed separately using the official installer. If these paths are missing, stop before implementation and ask the user to complete the project-level OpenCode installation described in `ANTISLOP_SETUP.md`. Do not invent replacement rules or silently claim Antislop is active.

## Working rules

- Work in this project directory only.
- Inspect the existing files and assets before creating anything.
- Preserve the supplied video and logo; do not overwrite or recompress the originals.
- Build a real, working website, not a static mockup.
- Keep the implementation maintainable and intentionally small. Target 30–45 app-authored files; hard cap 50 app-authored source/config files unless a concrete requirement justifies more. Exclude dependencies, generated build output, public media, and installed skill files from this count.
- Avoid premature abstractions, one-component-per-line patterns, duplicated components and unnecessary libraries.
- Do not fabricate business claims, reviews, prices, hours, certifications, exact map pins, email addresses or stock availability.
- Do not expose secrets or add an unnecessary backend.
- Test the actual interactions and responsive layouts before reporting completion.
- Do not say something passed unless it was run and observed.

## Antislop pointer

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read these installed skill files directly (use these paths even if a same-named global skill exists):
- Core filter, always on: `antislop`: `.opencode/skills/antislop/SKILL.md`
Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. A session instruction always wins. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source. Acknowledging the user's request without naming the source does not replace this notice.
Only an explicit choice of antislop during or after selects a session mode. A request to review, audit, or avoid file edits does not select a mode; read the global preference in that case. Another skill's mode does not select antislop's mode.
If the mode is unresolved, ask during/after and end the response; wait for the answer before any UI review, planning, or concept. For read-only tasks, put the active-mode notice only at the start of the final answer, never in progress messages. For editing tasks, announce before the first edit and omit it from the final answer.
To update antislop later: `npx antislop-ai --update`, or run `npx antislop-ai` and pick Overwrite them.
<!-- antislop:end -->
