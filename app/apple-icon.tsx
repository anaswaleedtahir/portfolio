import { ImageResponse } from "next/og";
import { identityColors } from "./identity/identity";
import { loadMontserrat900 } from "./og/load-fonts";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function AppleIcon() {
  const montserrat = await loadMontserrat900();

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
              fontFamily: "Montserrat",
              fontSize: 108,
              fontWeight: 900,
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
      fonts: [
        {
          name: "Montserrat",
          data: montserrat,
          style: "normal",
          weight: 900,
        },
      ],
    },
  );
}
