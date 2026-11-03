import { ImageResponse } from "next/og";

import { cloudBuddy, palette } from "@/content/brand";

// Route handler at /apple-touch-icon.png so the static export keeps the .png extension.
export const dynamic = "force-static";

const size = 180;
const { cloud, eyes, eyeRadius, thought, thoughtColor, outlineWidth } = cloudBuddy;
const colors = palette.light;

export function GET() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: colors.canvas }}>
        <svg viewBox="0.4 -1.6 32 32" width={size} height={size}>
          <path
            d={cloud}
            fill={colors.canvas}
            stroke={colors.foreground}
            strokeWidth={outlineWidth}
            strokeLinejoin="round"
          />
          {eyes.map((eye) => (
            <ellipse key={eye.cx} {...eye} {...eyeRadius} fill={colors.foreground} />
          ))}
          <circle {...thought.dot} fill={thoughtColor} />
          <path d={thought.stem} stroke={thoughtColor} strokeWidth={1.2} strokeLinecap="round" />
        </svg>
      </div>
    ),
    { width: size, height: size },
  );
}
