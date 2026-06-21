import type { Viewport } from "next";
import { Oxanium } from "next/font/google";
import { identityColors, identityMetadata } from "./identity/identity";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-oxanium",
  display: "swap",
});

export const metadata = identityMetadata;

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: identityColors.paper,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={oxanium.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
