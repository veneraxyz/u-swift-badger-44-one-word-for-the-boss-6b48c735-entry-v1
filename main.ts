import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// One word for the boss: the boss who never decides, only ever
// says "let's circle back" — and circles back forever.
const WORD = "Circlebacker";

// Entry rules: exactly one word, at most 30 characters, no spaces.
if (!/^[A-Za-z]{1,30}$/.test(WORD)) {
  throw new Error("entry word must be a single word of at most 30 letters");
}

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD + "\n", "utf8");
