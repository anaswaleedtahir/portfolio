import { readFile } from "node:fs/promises";
import { join } from "node:path";

const dir = join(process.cwd(), "node_modules/@fontsource/oxanium/files");

export const oxanium = "Oxanium" as const;

export function loadOxanium800() {
  return readFile(join(dir, "oxanium-latin-800-normal.woff"));
}

export function loadOxanium600() {
  return readFile(join(dir, "oxanium-latin-600-normal.woff"));
}
