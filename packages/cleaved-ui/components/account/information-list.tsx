import styled from "styled-components";

import { mediaQueries, SPACING } from "../../theme";

export const InformationList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACING.XLARGE};

  ${mediaQueries.SM} {
    flex-direction: row;
  }
`;
