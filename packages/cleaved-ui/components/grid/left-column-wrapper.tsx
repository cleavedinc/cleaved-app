import styled from "styled-components";

import { mediaQueries } from "../../theme";

export const LeftColumnWrapper = styled.div`
  display: none;

  ${mediaQueries.SM} {
    display: block;
    flex-grow: 1;
    min-width: 250px;
    max-width: 300px;
  }
`;
