import styled from "styled-components";
import { mediaQueries } from "../../theme";

export const StyledTHead = styled.thead`
  ${mediaQueries.RESPONSIVE_TABLE} {
    display: block;
  }
`;
