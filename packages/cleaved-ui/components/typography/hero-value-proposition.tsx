import styled from "styled-components";
import { FONT_SIZES, FONT_WEIGHTS, mediaQueries, SPACING } from "../../theme";

export const HeroValueProposition = styled.div`
  font-size: ${FONT_SIZES.XLARGE};
  font-weight: ${FONT_WEIGHTS.BOLD};
  margin-bottom: ${SPACING.SMALL};

  ${mediaQueries.SM} {
    font-size: ${FONT_SIZES.XXLARGE};
    margin-bottom: ${SPACING.MEDIUM_LARGE};
  }

  ${mediaQueries.MD} {
    font-size: ${FONT_SIZES.XXLARGE};
  }

  ${mediaQueries.LG} {
    font-size: ${FONT_SIZES.XXXLARGE};
  }
`;
