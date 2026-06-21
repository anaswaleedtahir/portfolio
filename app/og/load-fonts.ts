import { readFile } from "node:fs/promises";
import { join } from "node:path";

const fontRoot = join(process.cwd(), "node_modules");

export async function loadMontserrat900() {
  return readFile(
    join(fontRoot, "@fontsource/montserrat/files/montserrat-latin-900-normal.woff"),
  );
}

export async function loadIbmPlexMono600() {
  return readFile(
    join(fontRoot, "@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff"),
  );
}
