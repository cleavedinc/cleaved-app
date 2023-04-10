import styled from "styled-components";
import { FONT_SIZES, mediaQueries, SPACING } from "../../theme";

export const NavigationButtonWrapper = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;

  *:not(button) {
    cursor: pointer;
    overflow-wrap: anywhere;
  }

  ${mediaQueries.MD} {
    a {
      font-size: ${FONT_SIZES.SMALL};
      margin-right: ${SPACING.MEDIUM_SMALL};
    }
  }
`;
