import styled from "styled-components";

import { buttonBase, buttonPrimaryBase } from "../button";

export const LinkButtonPrimary = styled.a`
  ${buttonBase}
  ${buttonPrimaryBase}

  &:hover {
    color: ${({ theme }) => theme.colors.white_always_color};
  }
`;
