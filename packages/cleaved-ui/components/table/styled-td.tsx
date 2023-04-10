import styled from "styled-components";
import { mediaQueries, SPACING } from "../../theme";

export const StyledTd = styled.td`
  padding: ${SPACING.MEDIUM} 0 ${SPACING.MEDIUM} ${SPACING.SMALL};
  position: relative;

  &:before {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  ${mediaQueries.RESPONSIVE_TABLE} {
    display: block;
    border: none;
    position: relative;
    padding-left: 50%;

    :not(:last-child) {
      border-bottom: 1px solid #eee;
    }

    &:before {
      top: 15px;
      left: 10px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }
  }
`;
