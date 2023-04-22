import styled from "styled-components";
import { mediaQueries, RADIUS, SPACING } from "../../theme";

export const BoxHelperInfo = styled.div`
  padding: ${SPACING.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};

  ${mediaQueries.SM} {
    border-radius: ${RADIUS.MEDIUM};
  }
`;
