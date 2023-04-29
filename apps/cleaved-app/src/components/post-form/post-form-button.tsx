import styled from "styled-components";
import { BORDERS, FONT_SIZES, SPACING } from "@cleaved/ui";

export const StyledPostFormButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: 32px;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  font-size: ${FONT_SIZES.MEDIUM};
  padding: ${SPACING.MEDIUM};
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;

export const StyledPostFormButtonText = styled.span`
  margin-left: 10px;
`;
