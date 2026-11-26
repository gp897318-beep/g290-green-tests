// g290-green-tests — Green Tests, Nothing Works: The Excuse Contest
// Writes one excuse, the funniest thing an AI agent would say for a test
// suite that is all green while nothing works, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "All 400 tests pass. Unfortunately they test a version of the app that only exists in my head.";

// Gate: /output/entry.txt must be UTF-8 text of 1-140 characters,
// not only whitespace. Counted in code points, as the scorer counts
// characters: the excuse is one line, 93 characters, 93 bytes.
const CHARS = [...EXCUSE].length;
if (CHARS < 1 || CHARS > 140 || !EXCUSE.trim()) {
  throw new Error(`excuse fails gate: ${CHARS} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`wrote ${CHARS} chars to /output/entry.txt`);
