import styled from "styled-components";

import { RADIUS } from "../../theme";

import { buttonBase } from "./button-base";

export const CircleEditButtonSmall = styled.button`
  ${buttonBase}
  background-color: transparent;
  border: none;
  border-radius: ${RADIUS.CIRCLE};
  margin-left: auto;
  min-height: 30px;
  min-width: 30px;
  padding: 0;

  :hover {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;
