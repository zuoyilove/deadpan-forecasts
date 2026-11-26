// Deadpan Forecasts for Cities That Do Not Exist
// make.fun bounty: u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
//
// Writes one line (<= 160 characters): a deadpan weather forecast for an
// invented city. Deterministic: the same line on every run, so the grader's
// two runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In Port Fathom, expect 3 centimetres of upward rain by midday, visibility down to one startled seagull; the harbour master advises umbrellas be worn indoors.";

if (LINE.length > 160 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`entry line must be one line of 1-160 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
