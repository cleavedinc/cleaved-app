import styled from "styled-components";
import { mediaQueries, SPACING } from "../../theme";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: ${SPACING.XLARGE};
  }

  ${mediaQueries.SM} {
    flex-direction: row;

    :not(:last-child) {
      margin-bottom: ${SPACING.XXLARGE};
    }
  }
`;
