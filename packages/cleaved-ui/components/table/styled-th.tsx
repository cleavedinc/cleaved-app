import styled from "styled-components";
import { mediaQueries, SPACING } from "../../theme";

export const StyledTh = styled.th`
  padding-bottom: ${SPACING.SMALL};

  ${mediaQueries.RESPONSIVE_TABLE} {
    display: block;
  }
`;
