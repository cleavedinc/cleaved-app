import styled from "styled-components";

import { mediaQueries, SPACING } from "../../theme";

export const MainColumnWrapper = styled.div`
  flex-grow: 1;
  margin-top: ${SPACING.SMALL};

  ${mediaQueries.SM} {
    margin-left: 2%;
    margin-right: 2%;
    margin-top: ${SPACING.MEDIUM_LARGE};
    min-width: 300px;
  }
`;
