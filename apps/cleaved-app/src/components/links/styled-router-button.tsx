import { Link } from "@reach/router";
import styled from "styled-components";

import { buttonBase, buttonPrimaryBase } from "@cleaved/ui";

export const StyledRouterButton = styled(Link)`
  ${buttonBase}
  ${buttonPrimaryBase}

  :hover {
    color: ${({ theme }) => theme.colors.baseTextAlt_color};
  }
`;
