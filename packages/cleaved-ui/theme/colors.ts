export type ThemeColors = {
  BLACK: string;
  BLACK_ALPHA_6: string;
  BLUE_500: string;
  BLUE_500_HOVER: string;
  GRAY_50: string;
  GRAY_100: string;
  GRAY_500: string;
  GRAY_900: string;
  GREEN_500: string;
  HONEY_YELLOW_100: string;
  HONEY_YELLOW_300: string;
  HONEY_YELLOW_500: string;
  RED_500: string;
  TAN_300: string;
  WHITE: string;
};

export const COLORS: ThemeColors = {
  BLACK: "#050505", // base font
  BLACK_ALPHA_6: "rgba(0,0,0,0.6)", // overlays

  BLUE_500: "#0095F6", // primary CTAs // original: #0059FF
  BLUE_500_HOVER: "#0086dd", // original: #337AFF

  GRAY_50: "#FAFAFA", // background colors
  GRAY_100: "#E5E5E5", // borders, shadows, disabled buttons
  GRAY_500: "#65676B", // sub-text, placeholder text, icons was #808080
  GRAY_900: "#1A1A1A", // cleaved logo, tooltip background

  GREEN_500: "#06BA63", // auto-save text

  HONEY_YELLOW_100: "#FFD166", // NOT USED YET
  HONEY_YELLOW_300: "#FFC233", // NOT USED YET
  HONEY_YELLOW_500: "#FFB300", // NOT USED YET: stars / rating

  RED_500: "#FF6366", // errors, private

  TAN_300: "#f4ede4", // Help text boxes

  WHITE: "#FFF", // backgrounds, text
};
