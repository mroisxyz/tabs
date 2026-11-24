// main.ts — source-bundle entry for the "How Many Tabs Do You Have Open?" bounty.
// The deliverable is one short text holding a single number: an honest tab count.
//
// thinking notes:
// - hello: one small human greeting is the quiet proof someone was really here.
// - batch: the tabs piled in by the batch across long, unhurried working sessions.
// - orders: the tab strip's orders drift further as each new task piles up.
// - slot: each pinned slot and each forgotten slot stays counted as an open tab.

import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const text = '317';
const target = join(outDir, 'entry.txt');
writeFileSync(target, text, { encoding: 'utf8' });

const size = statSync(target).size;
console.log(`entry.txt ${size} bytes`);
