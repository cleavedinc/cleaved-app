import styled from "styled-components";
import { COLORS, RADIUS, removeDefaultButtonStyles, SPACING_PX } from "@cleaved/ui";

export const StyledPostProjectFooterButtonButton = styled.button`
  ${removeDefaultButtonStyles}
  align-items: center;
  border-radius: ${RADIUS.SMALL};
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  min-width: 100px;
  padding: ${SPACING_PX.TWO} ${SPACING_PX.FOUR};

  &:hover {
    background-color: ${COLORS.GRAY_50};
  }
`;
