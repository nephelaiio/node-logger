import { build } from "esbuild";

build({
  entryPoints: ["src/logger.ts"],
  outdir: `dist/`,
  platform: "neutral",
  format: "esm",
  target: "esnext",
  minify: false,
  bundle: true,
  external: ["winston"],
}).catch(() => process.exit(1));
