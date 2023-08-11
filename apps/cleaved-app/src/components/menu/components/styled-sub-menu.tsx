import { SubMenu } from "@szhsin/react-menu";
import styled from "styled-components";

import { FONT_SIZES, SPACING } from "@cleaved/ui";

export const StyledSubMenu = styled(SubMenu)`
  font-size: ${FONT_SIZES.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};

  :hover,
  &.szh-menu__item--hover {
    background-color: ${({ theme }) => theme.colors.body_backgroundColor};
  }

  .szh-menu__item--submenu {
    background-color: transparent;
  }

  .szh-menu__item--submenu {
    padding-bottom: 0;
    padding-left: 0;
    padding-top: 0;

    &:after {
      display: none;
    }
  }
`;
