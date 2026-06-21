import type { Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { identityColors, identityMetadata } from "./identity/identity";
import "./globals.css";

export const metadata = identityMetadata;

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: identityColors.paper,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={GeistSans.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
