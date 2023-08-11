import styled from "styled-components";

import { mediaQueries, SPACING } from "../../theme";

export const StickUnderHeaderDesktopOnly = styled.div`
  ${mediaQueries.SM} {
    padding: 0 ${SPACING.MEDIUM} ${SPACING.MEDIUM};
    position: sticky;
    top: 55px; /* 20px more than height of header, which matches current top margin of main container */
  }
`;
