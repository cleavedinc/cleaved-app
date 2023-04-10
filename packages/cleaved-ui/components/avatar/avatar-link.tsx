import styled from "styled-components";
import { FONT_SIZES, FONT_WEIGHTS, mediaQueries, SPACING_PX } from "../../theme";

export const AvatarLink = styled.div`
  display: none;
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  margin: 0 ${SPACING_PX.TWO};
  vertical-align: middle;

  ${mediaQueries.SM} {
    display: block;
  }
`;
