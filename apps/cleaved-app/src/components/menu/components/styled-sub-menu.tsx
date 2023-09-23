import { SubMenu } from "@szhsin/react-menu";
import styled from "styled-components";

import { basicItemBase } from "./basic-item-base-styles";

export const StyledSubMenu = styled(SubMenu)`
  ${basicItemBase}

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
      /* display: none; */
    }
  }
`;
