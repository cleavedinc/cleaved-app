import styled from "styled-components";
import { BORDERS, mediaQueries } from "../../theme";

export const StyledTr = styled.tr`
  :not(:last-child) {
    border-bottom: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  }

  ${mediaQueries.RESPONSIVE_TABLE} {
    background: ${({ theme }) => theme.colors.baseBox_backgroundColor};
    display: block;
    margin: 0;
  }
`;
