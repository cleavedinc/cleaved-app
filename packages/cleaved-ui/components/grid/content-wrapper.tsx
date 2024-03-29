import styled from "styled-components";
import { mediaQueries } from "../../theme";

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
  width: 100%;

  ${mediaQueries.SM} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;
