export type ThemeColors = {
  BLACK_ALPHA_DARK: string;
  BLACK_ALPHA_MEDIUM: string;
  BLACK_ALPHA_LIGHT: string;
  BLUE_500: string;
  BLUE_500_HOVER: string;
  GREEN_500: string;
  HONEY_YELLOW_100: string;
  HONEY_YELLOW_300: string;
  HONEY_YELLOW_500: string;
  RED_500: string;
  WHITE_ALPHA: string;
  WHITE_ALWAYS: string;
};

export const COLORS_BASE: ThemeColors = {
  BLACK_ALPHA_DARK: "rgba(0,0,0,0.9)", // overlays
  BLACK_ALPHA_MEDIUM: "rgba(0,0,0,0.5)", // overlays
  BLACK_ALPHA_LIGHT: "rgba(0,0,0,0.2)", // overlays

  BLUE_500: "#0095F6", // primary CTAs // original: #0059FF
  BLUE_500_HOVER: "#0086dd", // original: #337AFF

  GREEN_500: "#6DC246", // auto-save text

  HONEY_YELLOW_100: "#FFD166", // NOT USED YET
  HONEY_YELLOW_300: "#FFC233", // NOT USED YET
  HONEY_YELLOW_500: "#FFB300", // Celebrate icon

  RED_500: "#FF6366", // errors, private

  WHITE_ALPHA: "rgba(255,255,255,0.8)", // overlays
  WHITE_ALWAYS: "#FFFFFF",
};
