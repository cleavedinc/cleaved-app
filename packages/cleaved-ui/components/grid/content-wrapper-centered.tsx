import styled from "styled-components";
import { mediaQueries } from "../../theme";

export const ContentWrapperCentered = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  ${mediaQueries.SM} {
    flex-direction: row;
  }
`;
