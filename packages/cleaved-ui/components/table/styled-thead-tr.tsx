import styled from "styled-components";
import { BORDERS, COLORS, FONT_SIZES, mediaQueries } from "../../theme";

export const StyledTHeadTr = styled.tr`
  border-bottom: ${BORDERS.BORDER_PRIMARY};
  color: ${COLORS.GRAY_500};
  font-size: ${FONT_SIZES.XSMALL};
  text-align: left;

  ${mediaQueries.RESPONSIVE_TABLE} {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`;
