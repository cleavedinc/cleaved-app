import styled from "styled-components";

import { BORDERS } from "../../theme";

export const NavigationLinksWrapper = styled.div`
  a {
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom: ${BORDERS.SOLID_2PX} ${({ theme }) => theme.borders.baseLink_color};

      li label {
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
      border-bottom: ${BORDERS.SOLID_2PX} ${({ theme }) => theme.borders.baseLink_color};
    }
  }
`;
