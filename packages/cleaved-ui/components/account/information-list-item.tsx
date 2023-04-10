import styled from "styled-components";

import { mediaQueries, SPACING } from "../../theme";

export const InformationListItem = styled.li`
  margin-bottom: ${SPACING.MEDIUM};

  ${mediaQueries.SM} {
    margin-right: ${SPACING.XXLARGE};
  }
`;
