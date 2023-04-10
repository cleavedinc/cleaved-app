import styled from "styled-components";

import { BORDERS, COLORS } from "../../theme";

export const NavigationLinksWrapper = styled.div`
  a {
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom: ${BORDERS.BORDER_BLUE500_2PX};

      li label {
      }
    }

    &:hover {
      background-color: ${COLORS.GRAY_50};
      border-bottom: ${BORDERS.BORDER_BLUE500_2PX};
    }
  }
`;
