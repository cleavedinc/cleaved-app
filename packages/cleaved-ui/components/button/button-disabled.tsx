import styled from "styled-components";

import { buttonBase } from "./button-base";

export const ButtonDisabled = styled.button`
  ${buttonBase}
  background-color: ${({ theme }) => theme.colors.baseBordersAndShadows_color};
  border: none;
  color: ${({ theme }) => theme.colors.baseText_color};
  cursor: not-allowed;
  pointer-events: none;
`;
