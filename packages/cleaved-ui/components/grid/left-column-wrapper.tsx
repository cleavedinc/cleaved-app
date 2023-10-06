import styled from "styled-components";

import { mediaQueries } from "../../theme";

export const LeftColumnWrapper = styled.div`
  flex-grow: 1;
  margin-left: 1%;
  margin-right: 1%;

  ${mediaQueries.SM} {
    min-width: 275px;
    max-width: 300px;
  }
`;
