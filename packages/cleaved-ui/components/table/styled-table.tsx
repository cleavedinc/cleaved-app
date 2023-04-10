import styled from "styled-components";
import { mediaQueries } from "../../theme";

export const StyledTable = styled.table`
  width: 100%;

  ${mediaQueries.RESPONSIVE_TABLE} {
    display: block;
  }
`;
