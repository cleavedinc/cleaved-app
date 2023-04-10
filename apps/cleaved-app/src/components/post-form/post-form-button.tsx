import styled from "styled-components";
import { BORDERS, COLORS, FONT_SIZES, SPACING } from "@cleaved/ui";

export const StyledPostFormButton = styled.button`
  align-items: center;
  background-color: ${COLORS.WHITE};
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: 32px;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  font-size: ${FONT_SIZES.MEDIUM};
  padding: ${SPACING.MEDIUM};
  text-align: left;

  &:hover {
    background: ${COLORS.GRAY_50};
  }
`;

export const StyledPostFormButtonText = styled.span`
  margin-left: 10px;
`;
