export type ThemeColors = {
  ALWAYS_WHITE: string;
  ALWAYS_GREEN: string;
  BLACK_ALPHA_DARK: string;
  BLACK_ALPHA_MEDIUM: string;
  BLACK_ALPHA_LIGHT: string;
  BLUE_500: string;
  BLUE_500_HOVER: string;
  GREEN_500: string;
  RED_500: string;
  WHITE_ALPHA: string;
};

export const COLORS_BASE: ThemeColors = {
  ALWAYS_WHITE: "#FFFFFF",
  ALWAYS_GREEN: "#3d801e",

  BLACK_ALPHA_DARK: "rgba(0,0,0,0.9)", // overlays
  BLACK_ALPHA_MEDIUM: "rgba(0,0,0,0.5)", // overlays
  BLACK_ALPHA_LIGHT: "rgba(0,0,0,0.2)", // overlays

  BLUE_500: "#0074c2", // primary CTAs // original: #0059FF
  BLUE_500_HOVER: "#0062a3", // original: #337AFF

  GREEN_500: "#3d801e", // auto-save text

  RED_500: "#db2427", // errors, private

  WHITE_ALPHA: "rgba(255,255,255,0.9)", // overlays
};
