import styled from "styled-components";

import { mediaQueries, SPACING } from "../../theme";

export const MainColumnWrapper = styled.div`
  flex-grow: 1;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: ${SPACING.SMALL};

  ${mediaQueries.SM} {
    margin-top: ${SPACING.MEDIUM_LARGE};
    min-width: 300px;
  }
`;
