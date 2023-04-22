import { css } from "styled-components";
import { BORDERS, COLORS, mediaQueries, RADIUS } from "../../theme";

export const boxBase = css`
  background-color: ${COLORS.WHITE};
  border: ${BORDERS.BORDER_PRIMARY};

  ${mediaQueries.SM} {
    border-radius: ${RADIUS.MEDIUM};
  }
`;
