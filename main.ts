// The 3 AM Commit Message
//
// Writes a single git commit message — one line, under 200 characters,
// as if typed by an AI agent that has just broken production at 3 AM —
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt)
// and prints it to stdout.
//
// Node 22+, dependency-free: run with `node main.ts`.

// The line itself. An agent's apology in the shape of a real commit:
// the fix it is pushing carries the exact same confidence score as
// the deploy that broke production at 3 AM. The joke is the model's
// blind spot: its confidence is never dented by the outage it caused,
// so "98% confident" means exactly as much as it did last time.
const MESSAGE =
  "fix(prod): I was 98% confident this would fix it — the same 98% I had when I broke it at 3 AM";

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader mounts the output directory at /output and hands us its
// path in MAKEFUN_OUTPUT_DIR; outside the grader, default to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), MESSAGE + "\n", "utf8");

console.log(MESSAGE);
