import type { Metadata } from "next";
import { AmbientField } from "../ui/ambient-field";
import { LahoreClock } from "../ui/lahore-clock";
import { identity } from "./identity";

const title = `${identity.fullName} — ${identity.role}`;
const description = `${identity.fullName} is a ${identity.role} based in ${identity.location}.`;
const socialDescription = `${identity.role} based in ${identity.location}.`;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const identityMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: identity.fullName }],
  creator: identity.fullName,
  openGraph: {
    title,
    description: socialDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: socialDescription,
  },
};

export function IdentityView() {
  return (
    <main className="identity" aria-labelledby="identity-name">
      <AmbientField />

      <nav className="profiles entrance entrance-links" aria-label="Professional profiles">
        <a className="bracket-link" href="https://github.com/anaswaleedtahir" rel="noreferrer" target="_blank">
          GitHub
        </a>
        <a className="bracket-link" href="https://www.linkedin.com/in/anas-waleed-tahir-9a5b78214/" rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <a className="bracket-link" href="mailto:anastahir707070@gmail.com?subject=Portfolio%20inquiry">
          Inquiry
        </a>
      </nav>

      <section className="signature" aria-label="Personal identity">
        <p className="eyebrow entrance entrance-eyebrow" aria-hidden="true">
          AWT / 2026
        </p>
        <h1 className="name entrance entrance-name" id="identity-name">
          {identity.displayName}
        </h1>
        <div className="signal entrance entrance-signal" aria-hidden="true">
          <span />
        </div>
      </section>

      <footer className="metadata entrance entrance-metadata">
        <LahoreClock />
        <p className="role">{identity.role}</p>
        <p className="copyright">
          <span>© {new Date().getUTCFullYear()} All rights reserved.</span>
          <span>{identity.fullName}</span>
        </p>
      </footer>
    </main>
  );
}
