import { css } from "styled-components";

export const scrollbarThumbHover = css`
  box-shadow: inset 0 0 50px ${({ theme }) => theme.colors.baseIcon_color};
`;
