import styled from "styled-components";

import { BORDERS, mediaQueries, SPACING } from "../../theme";

export const HeadingWrapper = styled.div`
  align-items: center;
  border-bottom: ${BORDERS.BORDER_PRIMARY};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: ${SPACING.LARGE};
  padding-bottom: ${SPACING.SMALL};

  ${mediaQueries.SM} {
    flex-direction: row;
  }
`;
