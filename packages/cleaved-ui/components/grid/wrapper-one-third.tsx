import styled from "styled-components";
import { mediaQueries, SPACING } from "../../theme";

export const WrapperOneThird = styled.div`
  display: flex;
  flex: 0 0 33%;
  margin-bottom: ${SPACING.MEDIUM};
  padding-left: ${SPACING.MEDIUM};
  padding-right: ${SPACING.MEDIUM};

  ${mediaQueries.SM} {
    margin-bottom: 0;
  }
`;
