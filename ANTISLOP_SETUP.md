# Install Antislop for this OpenCode project

The source repository is https://github.com/miqdadbadjuber/anti-slop

The repository currently documents six skills:
1. `antislop` — core rules and Delivery Gate.
2. `antislop-ui` — UI, visual design, components and motion.
3. `antislop-copywriting` — marketing and interface copy.
4. `antislop-human` — accessibility, contrast, keyboard, focus and interaction states.
5. `antislop-layoutmobile` — responsive/mobile layout.
6. `antislop-code` — code-comment hygiene.

The repository describes Antislop as a filter, not a style guide. `DESIGN.md` in this project supplies the actual visual direction.

## Install

1. Open PowerShell in this project folder.
2. Check Node.js: `node -v`. The upstream guide currently requires Node.js 20.12 or newer for its installer.
3. Run:

   ```powershell
   npx antislop-ai
   ```

4. In the interactive installer choose:
   - Scope: **this project**
   - Agent: **OpenCode**
   - Skills: **all six skills**
5. Let the installer write the project skill files and OpenCode instruction pointer.
6. Verify these paths exist:

   ```text
   .opencode/skills/antislop/SKILL.md
   .opencode/skills/antislop-ui/SKILL.md
   .opencode/skills/antislop-copywriting/SKILL.md
   .opencode/skills/antislop-human/SKILL.md
   .opencode/skills/antislop-layoutmobile/SKILL.md
   .opencode/skills/antislop-code/SKILL.md
   ```

7. Start a fresh OpenCode session in this project folder so the skills and `AGENTS.md` instructions load.

Do not ask the coding agent to download or execute skill instructions at runtime. The user runs the official installer. Do not install the same skill into multiple OpenCode-readable folders (`.opencode/skills`, `.claude/skills`, `.agents/skills`) unless you have a specific reason; duplicate names can create ambiguous skill loading.

## Upstream reference

- Repository: https://github.com/miqdadbadjuber/anti-slop
- Guide: https://github.com/miqdadbadjuber/anti-slop/blob/main/GUIDE.md
- README: https://github.com/miqdadbadjuber/anti-slop/blob/main/README.md

The repository version checked while preparing this handoff was **3.2.26**. Use the installer’s displayed version as the final authority at install time.
