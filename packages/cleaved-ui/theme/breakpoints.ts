import { unitFormat } from "./utils";

export type ThemeBreakpoints = {
  XS: string;
  XS_LANDSCAPE: string;
  SM: string;
  SM_MD: string;
  MD: string;
  LG: string;
};

export type ThemeBreakpointMediaQueries = {
  XS: string;
  XS_LANDSCAPE: string;
  SM: string;
  SM_MD: string;
  MD: string;
  LG: string;
  RESPONSIVE_TABLE: string;
};

// used on the client to handle different sizes of things per breakpoint
export type ResponsiveSizesTopRightBottomLeft = {
  XS?: { TOP?: string; RIGHT?: string; BOTTOM?: string; LEFT?: string };
  XS_LANDSCAPE?: { TOP?: string; RIGHT?: string; BOTTOM?: string; LEFT?: string };
  SM?: { TOP?: string; RIGHT?: string; BOTTOM?: string; LEFT?: string };
  SM_MD?: { TOP?: string; RIGHT?: string; BOTTOM?: string; LEFT?: string };
  MD?: { TOP?: string; RIGHT?: string; BOTTOM?: string; LEFT?: string };
  LG?: { TOP?: string; RIGHT?: string; BOTTOM?: string; LEFT?: string };
};

// used on the client to handle different sizes of things per breakpoint
export type ResponsiveSizes = {
  XS?: string;
  XS_LANDSCAPE?: string;
  SM?: string;
  SM_MD?: string;
  MD?: string;
  LG?: string;
};

export const BREAKPOINTS: ThemeBreakpoints = {
  XS: unitFormat(0),
  XS_LANDSCAPE: unitFormat(480),
  SM: unitFormat(768), // 48 em/rem
  SM_MD: unitFormat(900), // 56.25 em/rem
  MD: unitFormat(1024), // 64 em/rem
  LG: unitFormat(1200), // 81.25 em/rem
};

export const mediaQueries: ThemeBreakpointMediaQueries = {
  XS: `@media (min-width: ${BREAKPOINTS.XS})`,
  XS_LANDSCAPE: `@media (min-width: ${BREAKPOINTS.XS_LANDSCAPE})`,
  SM: `@media (min-width: ${BREAKPOINTS.SM})`,
  SM_MD: `@media (min-width: ${BREAKPOINTS.SM_MD})`,
  MD: `@media (min-width: ${BREAKPOINTS.MD})`,
  LG: `@media (min-width: ${BREAKPOINTS.LG})`,
  RESPONSIVE_TABLE: `@media only screen and (max-width: ${BREAKPOINTS.XS_LANDSCAPE}), (min-device-width: ${BREAKPOINTS.XS_LANDSCAPE}) and (max-device-width: ${BREAKPOINTS.LG})`,
};
