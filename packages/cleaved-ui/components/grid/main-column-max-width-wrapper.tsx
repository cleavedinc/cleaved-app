import styled from "styled-components";

import { mediaQueries, SPACING } from "../../theme";

export const MainColumnMaxWidthWrapper = styled.div`
  flex-grow: 1;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: ${SPACING.XXLARGE};
  margin-top: ${SPACING.SMALL};

  ${mediaQueries.SM} {
    margin-top: ${SPACING.MEDIUM_LARGE};
    min-width: 400px;
    max-width: 450px;
    min-height: 400px;
  }
`;
