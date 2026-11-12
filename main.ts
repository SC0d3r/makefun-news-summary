// news-summary-01: sixth entry, 15-story summary of Wednesday 11 November 2026.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const bytes = readFileSync(join(here, "summary.txt"))
if (bytes.length === 0) throw new Error("An empty summary must not be published (0 bytes)")
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output"

mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), bytes)
process.exit(0)
