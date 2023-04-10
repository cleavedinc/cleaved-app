import { BREAKPOINTS } from "./breakpoints";

export const GRID = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: "only screen",
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: BREAKPOINTS.XS, // em
      sm: BREAKPOINTS.SM, // em
      md: BREAKPOINTS.MD, // em
      lg: BREAKPOINTS.LG, // em
    },
  },
};
