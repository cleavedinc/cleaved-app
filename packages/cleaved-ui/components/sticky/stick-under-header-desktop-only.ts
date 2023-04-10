import styled from "styled-components";

import { mediaQueries, SPACING } from "../../theme";

export const StickUnderHeaderDesktopOnly = styled.div`
  ${mediaQueries.SM} {
    padding: 0 ${SPACING.MEDIUM} ${SPACING.MEDIUM};
    position: sticky;
    top: 75px;
  }
`;
