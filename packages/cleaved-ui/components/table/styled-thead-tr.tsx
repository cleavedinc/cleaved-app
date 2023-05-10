import styled from "styled-components";
import { BORDERS, FONT_SIZES, mediaQueries } from "../../theme";

export const StyledTHeadTr = styled.tr`
  border-bottom: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  text-align: left;

  ${mediaQueries.RESPONSIVE_TABLE} {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`;
