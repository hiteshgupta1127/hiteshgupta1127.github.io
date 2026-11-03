import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { palette } from "@/content/brand";
import { profile } from "@/content/profile";
import { shareImage } from "@/content/seo";

/*
 * A route handler at /og.png (rather than the opengraph-image convention) so the
 * static export writes a file with a .png extension; static hosts derive the
 * content type from it. Generated once at build time.
 */
export const dynamic = "force-static";

const colors = palette.light;

// The image renderer only accepts static fonts, so the card uses Instrument Serif;
// the domain line uses the renderer's built-in sans.
const fontsDir = join(process.cwd(), "assets/fonts");
const [serifRegular, serifItalic] = await Promise.all([
  readFile(join(fontsDir, "InstrumentSerif-Regular.woff")),
  readFile(join(fontsDir, "InstrumentSerif-Italic.woff")),
]);

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 56,
          width: "100%",
          height: "100%",
          padding: 88,
          background: colors.canvas,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "Instrument Serif" }}>
          <div style={{ fontSize: 128, lineHeight: 1, letterSpacing: "-0.02em", color: colors.foreground }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 56, fontStyle: "italic", color: colors.muted }}>{`${profile.role}.`}</div>
        </div>

        <div
          style={{
            display: "flex",
            paddingTop: 28,
            borderTop: `1px solid ${colors.line}`,
            fontSize: 24,
            letterSpacing: "0.04em",
            color: colors.muted,
          }}
        >
          {new URL(profile.url).host}
        </div>
      </div>
    ),
    {
      width: shareImage.width,
      height: shareImage.height,
      fonts: [
        { name: "Instrument Serif", data: serifRegular, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
      ],
    },
  );
}
