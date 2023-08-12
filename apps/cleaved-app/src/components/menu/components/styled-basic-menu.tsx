import { Menu } from "@szhsin/react-menu";
import styled from "styled-components";

import { BORDERS, RADIUS } from "@cleaved/ui";

export const StyledBasicMenu = styled(Menu)`
  ul {
    background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
    border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
    border-radius: ${RADIUS.SMALL};
    color: ${({ theme }) => theme.colors.baseText_color};
    padding: 0;

    .szh-menu__arrow {
      background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
      border-left-color: ${({ theme }) => theme.borders.primary_color};
      border-top-color: ${({ theme }) => theme.borders.primary_color};
    }
  }
`;
