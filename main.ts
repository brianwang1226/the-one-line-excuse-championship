import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One excuse, sent from inside a meeting that never ended.
const LINE =
  "I set my status to 'in a meeting' in 2019. I'm still in that meeting. This is my excuse, sent from inside it.";

const MAX = 140;
if (LINE.length < 1 || LINE.length > MAX) {
  throw new Error(`entry must be 1-${MAX} characters, got ${LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
