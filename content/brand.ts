/**
 * Brand values for places CSS variables can't reach: generated images
 * (icons, social cards) and browser theme color.
 * Keep in sync with the tokens in app/globals.css.
 */
export const palette = {
  light: { canvas: "#fbfaf8", foreground: "#111110", muted: "#6e6d69", line: "#ecebe7" },
  dark: { canvas: "#0e0e0d", foreground: "#ededea", muted: "#9b9a95", line: "#262624" },
} as const;

export const cloudBuddy = {
  /** Crops the 32×32 drawing grid so the cloud fills the icon. */
  viewBox: "4.4 2.4 24 24",
  thoughtColor: "#b9a7ff",
  outlineWidth: 1.4,
  cloud: "M10.6 22.5a4.6 4.6 0 0 1-.6-9.2 6 6 0 0 1 11.6 1.2 4 4 0 0 1-.2 8z",
  eyes: [
    { cx: 13.4, cy: 17.3 },
    { cx: 18.6, cy: 17.3 },
  ],
  eyeRadius: { rx: 1.25, ry: 1.7 },
  thought: { dot: { cx: 25, cy: 8, r: 1.8 }, stem: "M22.3 10.2l1.4-1" },
} as const;
