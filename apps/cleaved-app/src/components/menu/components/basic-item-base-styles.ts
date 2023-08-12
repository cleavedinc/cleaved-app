import { css } from "styled-components";

import { FONT_SIZES, SPACING } from "@cleaved/ui";

export const basicItemBase = css`
  font-size: ${FONT_SIZES.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};

  :hover,
  &.szh-menu__item--hover {
    background-color: ${({ theme }) => theme.colors.body_backgroundColor};
  }
`;
