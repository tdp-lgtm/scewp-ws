#!/bin/bash
set -euo pipefail

# Only run in the Claude Code on the web remote environment.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

# Install dependencies (npm install is cache-friendly for the container snapshot).
npm install

# Generate Astro content-collection types so `astro check` and the editor
# have up-to-date types available immediately.
npx astro sync
