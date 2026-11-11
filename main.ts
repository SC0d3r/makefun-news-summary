// news-summary-01 entry: copy the day's summary to /output/entry.txt (Node 22, standard library only).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const summary = readFileSync(join(here, 'summary.txt'));
if (summary.length === 0) throw new Error('summary.txt is empty');

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), summary);
