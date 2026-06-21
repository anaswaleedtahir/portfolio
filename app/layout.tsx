import type { Metadata, Viewport } from "next";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/montserrat/900.css";
import { identityMetadata } from "./identity/identity-view";
import "./globals.css";

export const metadata: Metadata = identityMetadata;

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ebe7dc",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
