import styled from "styled-components";
import { BORDERS, COLORS, mediaQueries, SHADOWS, SPACING } from "../../theme";

export type StickyHeaderProps = {
  hasBoxShadow?: boolean;
};

export const StickyHeader = styled.header<StickyHeaderProps>`
  background-color: ${COLORS.WHITE};
  top: 0;
  border-bottom: ${BORDERS.BORDER_PRIMARY};
  padding: 0 ${SPACING.SMALL};
  position: sticky;
  z-index: 999;

  input[type="text"] {
    display: none;
  }

  ${mediaQueries.SM} {
    border-top: none;
    padding: 0 ${SPACING.MEDIUM};

    input[type="text"] {
      display: block;
    }
  }

  ${mediaQueries.MD} {
    ${(props) => (props.hasBoxShadow ? `box-shadow: ${SHADOWS.LIGHT_INSET}` : null)};
    top: 0;
  }
`;
