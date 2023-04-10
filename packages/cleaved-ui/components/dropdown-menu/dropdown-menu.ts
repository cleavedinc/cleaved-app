import styled from "styled-components";
import { BORDERS, COLORS, RADIUS, SHADOWS, SPACING } from "../../theme";

export const DropdownMenu = styled.nav`
  background: ${COLORS.WHITE};
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.MEDIUM};
  box-shadow: ${SHADOWS.LIGHT_BOTTOM};
  display: none;
  position: absolute;
  right: ${SPACING.MEDIUM};
  top: 48px;
  width: 300px;
  z-index: 999;

  &.active {
    display: block;
  }

  &.pinned {
    right: 0;
    top: 0;
    width: auto;
  }

  ul li {
    :not(:last-child) {
      border-bottom: ${BORDERS.BORDER_PRIMARY};
    }

    a {
      margin-right: 0;
    }
  }
`;
