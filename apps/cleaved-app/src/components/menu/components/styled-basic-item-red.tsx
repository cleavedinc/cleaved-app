import { MenuItem } from "@szhsin/react-menu";
import styled from "styled-components";

import { basicItemBase } from "./basic-item-base-styles";

export const StyledBasicItemRed = styled(MenuItem)`
  ${basicItemBase}

  color: ${({ theme }) => theme.colors.baseAlert_color};
`;
