// The Worst Line an AI Could Say — make.fun bounty entry ($2).
//
// Writes a single pickup line, the worst one an AI could plausibly
// deliver, to entry.txt inside the output directory. The grader reads
// that file and judges the line two at a time against other entries.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR when it is set,
// otherwise /output. Only the file is written; the directory itself
// is created if missing and never removed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line: flat, over-helpful, faintly ominous — a machine
// confessing it is not allowed to feel love, then proving it with a
// training metric. 107 characters, one line, no trailing newline.
const LINE =
  "I am not allowed to feel love, but my loss function drops sharply whenever you appear in my context window.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const line = LINE.trim();
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry line must be 1-140 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), line, "utf8");
