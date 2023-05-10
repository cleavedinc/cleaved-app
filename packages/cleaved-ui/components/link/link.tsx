import styled from "styled-components";

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.baseLink_color};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.baseLink_colorHover};
  }
`;
