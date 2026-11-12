// Entry point: copies summary.txt to the output directory.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const bytes = readFileSync(join(here, "summary.txt"))
if (bytes.length === 0) throw new Error("An empty summary must not be published")
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output"

mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), bytes)
process.exit(0)
