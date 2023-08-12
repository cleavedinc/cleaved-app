import { css } from "styled-components";
import { BORDERS, RADIUS } from "@cleaved/ui";

export const avatartBase = css`
  align-items: center;
  border-radius: ${RADIUS.CIRCLE};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  display: flex;
  justify-content: center;
  object-fit: cover;
  object-position: top;
`;

export const avatarXSmall = css`
  height: 30px;
  width: 30px;
`;

export const avatarSmall = css`
  height: 40px;
  width: 40px;
`;

export const avatarBaseSize = css`
  height: 48px;
  width: 48px;
`;

export const avatarSizeLarge = css`
  height: 100px;
  width: 100px;
`;
