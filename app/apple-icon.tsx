import { ImageResponse } from "next/og";
import { identityColors } from "./identity/identity";
import { loadOxanium800, oxanium } from "./og/load-oxanium";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function AppleIcon() {
  const extraBold = await loadOxanium800();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: identityColors.ink,
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: oxanium,
              fontSize: 108,
              fontWeight: 800,
              color: identityColors.paper,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            A
          </div>
          <div
            style={{
              display: "flex",
              width: 8,
              height: 42,
              marginLeft: 6,
              borderRadius: 999,
              background: identityColors.accent,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: oxanium, data: extraBold, style: "normal", weight: 800 }],
    },
  );
}
