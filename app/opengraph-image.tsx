import { ImageResponse } from "next/og";
import { identity, identityColors } from "./identity/identity";
import { loadOxanium600, loadOxanium800, oxanium } from "./og/load-oxanium";

export const alt = `${identity.fullName} — ${identity.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpenGraphImage() {
  const [extraBold, semiBold] = await Promise.all([loadOxanium800(), loadOxanium600()]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          background: identityColors.paper,
          color: identityColors.ink,
          fontFamily: oxanium,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div>[ GitHub ]</div>
          <div>[ LinkedIn ]</div>
          <div>[ Inquiry ]</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 168,
              fontWeight: 800,
              letterSpacing: "0.03em",
              lineHeight: 0.92,
              textTransform: "uppercase",
            }}
          >
            {identity.displayName}
          </div>
          <div
            style={{
              display: "flex",
              width: 48,
              height: 3,
              marginTop: 24,
              borderRadius: 999,
              background: identityColors.accent,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.075em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>{identity.location}</div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.12em",
            }}
          >
            {identity.role}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
            }}
          >
            <div style={{ display: "flex" }}>© {new Date().getUTCFullYear()} All rights reserved.</div>
            <div style={{ display: "flex" }}>{identity.fullName}</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: oxanium, data: extraBold, style: "normal", weight: 800 },
        { name: oxanium, data: semiBold, style: "normal", weight: 600 },
      ],
    },
  );
}
