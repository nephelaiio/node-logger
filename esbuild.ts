import { build } from "esbuild";
import { readFileSync } from "fs";
import { resolve } from "path";

const project = JSON.parse(readFileSync(resolve("./package.json"), "utf-8"));

build({
  entryPoints: ["src/logger.ts"],
  outfile: `dist/${project.main}`,
  platform: "neutral",
  format: "esm",
  target: "esnext",
  minify: false,
  bundle: true,
  external: ["winston"],
}).catch(() => process.exit(1));
