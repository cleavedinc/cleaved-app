import { css } from "styled-components";

export const buttonPrimaryBase = css`
  background-color: ${({ theme }) => theme.colors.baseLink_color};
  border: none;
  color: ${({ theme }) => theme.colors.white_always_color};
`;
