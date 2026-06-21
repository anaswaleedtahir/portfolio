import { ImageResponse } from "next/og";
import { identity, identityColors } from "./identity/identity";
import { loadIbmPlexMono600, loadMontserrat900 } from "./og/load-fonts";

export const alt = `${identity.fullName} — ${identity.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpenGraphImage() {
  const [montserrat, mono] = await Promise.all([loadMontserrat900(), loadIbmPlexMono600()]);

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
          fontFamily: "IBM Plex Mono",
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
              fontFamily: "Montserrat",
              fontSize: 168,
              fontWeight: 900,
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
        {
          name: "Montserrat",
          data: montserrat,
          style: "normal",
          weight: 900,
        },
        {
          name: "IBM Plex Mono",
          data: mono,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
