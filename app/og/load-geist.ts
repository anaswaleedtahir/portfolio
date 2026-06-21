import { readFile } from "node:fs/promises";
import { join } from "node:path";

const dir = join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans");

export const geistSans = "Geist Sans" as const;

export function loadGeistBlack() {
  return readFile(join(dir, "Geist-Black.ttf"));
}

export function loadGeistSemiBold() {
  return readFile(join(dir, "Geist-SemiBold.ttf"));
}
