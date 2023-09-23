import styled from "styled-components";
import { BORDERS, mediaQueries, SPACING } from "../../theme";

export const StickyHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  top: 0;
  border-bottom: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  padding: 0 ${SPACING.SMALL};
  position: sticky;
  z-index: 999;

  input[type="text"] {
    display: none;
  }

  ${mediaQueries.SM} {
    border-top: none;
    padding: 0 ${SPACING.MEDIUM};

    input[type="text"] {
      display: block;
    }
  }
`;
