import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { BORDERS, FONT_SIZES, RADIUS } from "@cleaved/ui";

type HeaderMenuAvatarProps = {
  account:
    | {
        id: string;
        firstName?: string | null | undefined;
        lastName?: string | null | undefined;
        currentAvatar?: string | null | undefined;
      }
    | undefined;
};

const avatartBase = css`
  align-items: center;
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
`;

const StyledAvatarImage = styled.img`
  ${avatartBase}
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  font-size: ${FONT_SIZES.SMALL};
`;

export const HeaderMenuAvatar: FunctionComponent<HeaderMenuAvatarProps> = (props) => {
  const { account } = props;
  const firstNameInitial = account?.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account?.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      {account && account?.currentAvatar && (
        <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
      )}

      {!account?.currentAvatar && (
        <StyledAvatarInitials>
          {firstNameInitial}
          {lastNameInitial}
        </StyledAvatarInitials>
      )}
    </>
  );
};
