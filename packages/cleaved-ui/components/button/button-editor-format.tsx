import styled from "styled-components";
import { FONT_SIZES, RADIUS, SPACING, SPACING_PX } from "../../theme";

export const ButtonEditorFormat = styled.button`
  align-items: center;
  background: none;
  border: none;
  border-radius: ${RADIUS.CIRCLE};
  color: ${({ theme }) => theme.colors.baseLink_color};
  cursor: pointer;
  display: flex;
  font-size: ${FONT_SIZES.MEDIUM};
  height: 30px;
  justify-content: center;
  outline: inherit;
  padding: ${SPACING_PX.ONE};
  width: 30px;

  :not(:last-child) {
    margin-right: ${SPACING.BASE};
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;
