import { css } from "styled-components";
import { BORDERS, mediaQueries, RADIUS } from "../../theme";

export const boxBase = css`
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};

  ${mediaQueries.SM} {
    border-radius: ${RADIUS.MEDIUM};
  }
`;
