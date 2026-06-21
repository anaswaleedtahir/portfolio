import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Mono, Montserrat } from "next/font/google";
import { identityMetadata } from "./identity/identity-view";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = identityMetadata;

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ebe7dc",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${montserrat.variable} ${ibmPlexMono.variable}`} lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
