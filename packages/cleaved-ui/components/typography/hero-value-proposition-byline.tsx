import styled from "styled-components";
import { FONT_SIZES, mediaQueries, ResponsiveSizes, SPACING } from "../../theme";

type HeroValuePropositionBylineProps = {
  bylineWidth?: ResponsiveSizes;
};

export const HeroValuePropositionByline = styled.div<HeroValuePropositionBylineProps>`
  font-size: ${FONT_SIZES.SMALL};
  margin-bottom: ${SPACING.MEDIUM};
  ${(props) => (props?.bylineWidth?.XS ? `width: ${props.bylineWidth.XS}` : null)};

  ${mediaQueries.SM} {
    font-size: ${FONT_SIZES.MEDIUM};
    margin-bottom: ${SPACING.MEDIUM_LARGE};
  }

  ${mediaQueries.MD} {
    font-size: ${FONT_SIZES.LARGE};
    ${(props) => (props?.bylineWidth?.MD ? `width: ${props.bylineWidth.MD}` : null)};
  }

  ${mediaQueries.LG} {
    font-size: ${FONT_SIZES.XLARGE};
    ${(props) => (props?.bylineWidth?.LG ? `width: ${props.bylineWidth.LG}` : null)};
  }
`;
