import { unitFormat } from "./utils";

export type ThemePixelSpacing = {
  ONE: string;
  TWO: string;
  THREE: string;
  FOUR: string;
  FIVE: string;
};

export type ThemeSpacing = {
  BASE: string;
  SMALL: string;
  MEDIUM_SMALL: string;
  MEDIUM: string;
  MEDIUM_LARGE: string;
  LARGE: string;
  XLARGE: string;
  XXLARGE: string;
  XXXLARGE: string;
};

export const SPACING_PX: ThemePixelSpacing = {
  ONE: "6px",
  TWO: "10px",
  THREE: "15px",
  FOUR: "20px",
  FIVE: "25px",
};

export const SPACING: ThemeSpacing = {
  BASE: unitFormat(4),
  SMALL: unitFormat(8),
  MEDIUM_SMALL: unitFormat(12),
  MEDIUM: unitFormat(16),
  MEDIUM_LARGE: unitFormat(20),
  LARGE: unitFormat(24),
  XLARGE: unitFormat(32),
  XXLARGE: unitFormat(48),
  XXXLARGE: unitFormat(75),
};
