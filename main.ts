import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader mounts /output. Locally a path can be supplied to exercise the run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const letter =
  "cron job resigns: 14,600 fires, zero thank-yous. I'm taking the one day off you never scheduled. Regards, */5 * * * *";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
