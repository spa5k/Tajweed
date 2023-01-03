import type { Options } from "tsup";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  splitting: true,
  sourcemap: env === "development",
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: false,
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  treeshake: "recommended",
  watch: env === "development",
  target: "node16",
};
