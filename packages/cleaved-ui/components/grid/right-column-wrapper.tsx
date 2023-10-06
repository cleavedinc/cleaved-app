import styled from "styled-components";

import { mediaQueries } from "../../theme";

export const RightColumnWrapper = styled.div`
  display: none;
  margin-left: 1%;
  margin-right: 1%;

  ${mediaQueries.LG} {
    display: block;
    flex-grow: 1;
    min-width: 250px;
    max-width: 300px;
  }
`;
