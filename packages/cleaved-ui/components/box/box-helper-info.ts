import styled from "styled-components";
import { mediaQueries, RADIUS, SPACING } from "../../theme";

export const BoxHelperInfo = styled.div`
  padding: ${SPACING.MEDIUM};
  border-radius: ${RADIUS.MEDIUM};

  ${mediaQueries.SM} {
    margin-bottom: ${SPACING.MEDIUM};
  }
`;
