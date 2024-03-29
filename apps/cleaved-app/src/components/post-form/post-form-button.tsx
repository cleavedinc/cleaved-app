import styled from "styled-components";
import { BORDERS, FONT_SIZES } from "@cleaved/ui";

export const StyledPostFormButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: 32px;
  color: ${({ theme }) => theme.colors.baseText_color};
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  font-size: ${FONT_SIZES.MEDIUM};
  height: 48px;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;

export const StyledPostFormButtonText = styled.span`
  margin-left: 10px;
`;
