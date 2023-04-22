import styled from "styled-components";

import { mediaQueries, SPACING } from "../../theme";

export const MainColumnWrapperMaxWidth = styled.div`
  flex-grow: 1;
  /* margin-left: 2%;
  margin-right: 2%; */
  /* margin-bottom: ${SPACING.XXLARGE}; */
  margin-top: ${SPACING.SMALL};

  ${mediaQueries.SM} {
    margin-top: ${SPACING.MEDIUM_LARGE};
    min-width: 450px;
    max-width: 550px;
  }
`;
