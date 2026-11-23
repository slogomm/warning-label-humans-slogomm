import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const entryPath = join(outputDir, "entry.txt");
const warning = "WARNING: Surface may be hot. Do not confirm this with your tongue.";
writeFileSync(entryPath, warning, { encoding: "utf8", flag: "w" });
// Revised after local test