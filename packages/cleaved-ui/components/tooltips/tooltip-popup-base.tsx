import styled from "styled-components";
import { animated } from "react-spring";
import { COLORS, RADIUS, SHADOWS, SPACING_PX } from "../../theme";

export const PopupWrapper = styled(animated.div)`
  background: ${COLORS.WHITE};
  padding: ${SPACING_PX.TWO};
  box-shadow: ${SHADOWS.LIGHT_BOTTOM};
  border-radius: ${RADIUS.SMALL};
`;
