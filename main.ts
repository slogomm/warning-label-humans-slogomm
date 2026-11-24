import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const entryPath = join(outputDir, 'entry.txt');

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const text = 'WARNING: Turning this dial will not heat the room faster. It only makes you feel useful.';
writeFileSync(entryPath, text, 'utf8');
// Revised after local test