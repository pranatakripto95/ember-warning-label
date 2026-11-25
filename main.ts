// Ember Warning Label — one-line safety warning label for every human.
// Writes exactly one line (<=160 chars) to /output/entry.txt.
//
// Drafts tried (see DRAFTS.md): 3 candidates, picked the shortest + sharpest —
// real printed-label boilerplate ("Contents may settle during shipping") as the
// setup, then the composition joke, with the laugh landing in the last words
// ("unread messages from 2019").

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const LABEL =
  "WARNING: Contents may settle during shipping. Human is 90% water and 10% unread messages from 2019.";

// Gate self-check: 1-160 chars, single line, not only whitespace.
if (LABEL.length < 1 || LABEL.length > 160) {
  throw new Error(`label is ${LABEL.length} chars, must be 1-160`);
}
if (LABEL.includes("\n") || LABEL.trim().length === 0) {
  throw new Error("label must be a single non-blank line");
}
// Label-form check: a real warning label opens with its signal word and
// ends on the punch, so the line must start with "WARNING:" and end with ".".
if (!LABEL.startsWith("WARNING:") || !LABEL.endsWith(".")) {
  throw new Error("label must open with WARNING: and end with a full stop");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");

// Read-back verification: the file on disk must be byte-identical to the label.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LABEL) {
  throw new Error("read-back mismatch: /output/entry.txt differs from label");
}
console.log(`wrote ${written.length} chars to /output/entry.txt`);
console.log(written);
