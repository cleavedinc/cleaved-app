import styled from "styled-components";
import { animated } from "react-spring";
import { RADIUS, SPACING_PX } from "../../theme";

export const PopupWrapper = styled(animated.div)`
  background: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  padding: ${SPACING_PX.TWO};
  border-radius: ${RADIUS.SMALL};
`;
