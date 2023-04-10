import styled from "styled-components";
import { mediaQueries } from "../../theme";

export const StyledTBody = styled.tbody`
  ${mediaQueries.RESPONSIVE_TABLE} {
    display: block;
  }
`;
