import { unitFormat } from "./utils";

export type ThemeFontSizes = {
  XXXSMALL: string;
  XXSMALL: string;
  XSMALL: string;
  SMALL: string;
  MEDIUM: string;
  LARGE: string;
  XLARGE: string;
  XXLARGE: string;
  XXXLARGE: string;
  XXXXLARGE: string;
};

export const FONT_SIZES: ThemeFontSizes = {
  XXXSMALL: unitFormat(8),
  XXSMALL: unitFormat(10),
  XSMALL: unitFormat(12),
  SMALL: unitFormat(14),
  MEDIUM: unitFormat(16),
  LARGE: unitFormat(20),
  XLARGE: unitFormat(24),
  XXLARGE: unitFormat(32),
  XXXLARGE: unitFormat(48),
  XXXXLARGE: unitFormat(72),
};
