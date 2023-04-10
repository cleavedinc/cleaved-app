import { Link } from "@reach/router";
import styled from "styled-components";

import { buttonBase, buttonPrimaryBase, COLORS } from "@cleaved/ui";

export const StyledRouterButton = styled(Link)`
  ${buttonBase}
  ${buttonPrimaryBase}

  :hover {
    color: ${COLORS.WHITE};
  }
`;
