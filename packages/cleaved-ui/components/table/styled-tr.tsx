import styled from "styled-components";
import { BORDERS, COLORS, mediaQueries } from "../../theme";

export const StyledTr = styled.tr`
  :not(:last-child) {
    border-bottom: ${BORDERS.BORDER_PRIMARY};
  }

  :hover {
    background-color: ${COLORS.WHITE};
  }

  ${mediaQueries.RESPONSIVE_TABLE} {
    display: block;

    margin: 0;

    &:nth-child(odd) {
      background: ${COLORS.WHITE};
    }
  }
`;
