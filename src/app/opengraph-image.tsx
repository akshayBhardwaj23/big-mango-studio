import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1c1917",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          color: "#faf8f5",
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em" }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            fontWeight: 600,
            color: "#ff5c1a",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          High-converting websites for SaaS &amp; AI. Shipped fast by a focused studio team.
        </div>
      </div>
    ),
    { ...size },
  );
}
