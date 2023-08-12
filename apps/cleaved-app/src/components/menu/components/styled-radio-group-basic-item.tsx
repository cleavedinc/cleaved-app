import { MenuItem } from "@szhsin/react-menu";
import styled from "styled-components";

import { FONT_SIZES } from "@cleaved/ui";

export const StyledRadioGroupBasicItem = styled(MenuItem)`
  font-size: ${FONT_SIZES.SMALL};

  :hover,
  &.szh-menu__item--hover {
    background-color: ${({ theme }) => theme.colors.body_backgroundColor};
  }
`;
