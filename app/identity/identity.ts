import type { Metadata } from "next";

export const identity = {
  displayName: "Anas",
  fullName: "Anas Waleed Tahir",
  role: "Backend & Platform Engineer",
  location: "Lahore, Pakistan",
} as const;

// ponytail: CSS :root vars in globals.css mirror these hex values manually.
export const identityColors = {
  paper: "#ebe7dc",
  ink: "#192333",
  accent: "#08b9e8",
} as const;

export function inkRgba(alpha: number) {
  return `rgba(25, 35, 51, ${alpha})`;
}

export const accentRgba42 = "rgba(8, 185, 232, 0.42)";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const title = `${identity.fullName} — ${identity.role}`;
const description = `${identity.fullName} is a ${identity.role} based in ${identity.location}.`;

export const identityMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: identity.fullName }],
  creator: identity.fullName,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};
