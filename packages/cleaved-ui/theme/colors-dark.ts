export type ThemeColorsDark = {
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

export const COLORS_DARK: ThemeColorsDark = {
  BLACK: "#F9F9F9", // base font
  BLACK_ALPHA_6: "rgba(255,255,255,0.6)", // overlays

  BLUE_500: "#3BA1E5", // primary CTAs // original: #0059FF
  BLUE_500_HOVER: "#5CB5F5", // original: #337AFF

  GRAY_50: "#1A1A1A", // background colors
  GRAY_100: "#333333", // borders, shadows, disabled buttons
  GRAY_500: "#9B9B9B", // sub-text, placeholder text, icons was #808080
  GRAY_900: "#FFFFFF", // cleaved logo, tooltip background

  GREEN_500: "#31D8A5", // auto-save text

  HONEY_YELLOW_100: "#FFD166", // NOT USED YET
  HONEY_YELLOW_300: "#FFC233", // NOT USED YET
  HONEY_YELLOW_500: "#FFB300", // NOT USED YET: stars / rating

  RED_500: "#FF4D4D", // errors, private

  TAN_300: "#594F4F", // Help text boxes

  WHITE: "#050505", // backgrounds, text
};
