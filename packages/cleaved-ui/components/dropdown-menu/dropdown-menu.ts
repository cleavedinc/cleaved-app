import styled from "styled-components";
import { BORDERS, RADIUS, SPACING } from "../../theme";

export const DropdownMenu = styled.nav`
  background: ${({ theme }) => theme.colors.baseDropdownMenu_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  display: none;
  position: absolute;
  right: ${SPACING.BASE};
  top: 40px;
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
      border-bottom: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
    }

    a {
      margin-right: 0;
    }
  }
`;
