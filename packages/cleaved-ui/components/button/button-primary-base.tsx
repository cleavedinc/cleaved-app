import { css } from "styled-components";

export const buttonPrimaryBase = css`
  background-color: ${({ theme }) => theme.colors.baseLink_color};
  border: none;
  color: ${({ theme }) => theme.colors.always_white_color};

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.baseLink_colorHover};
    color: ${({ theme }) => theme.colors.always_white_color};
  }
`;
