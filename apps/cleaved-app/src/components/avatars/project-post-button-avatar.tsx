import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { BORDERS, FONT_SIZES, RADIUS } from "@cleaved/ui";

import { FindMyAccountQuery } from "../../generated-types/graphql";

type HeaderMenuAvatarProps = {
  account: FindMyAccountQuery["findMyAccount"] | undefined;
};

const avatartBase = css`
  align-items: center;
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 56px;
  justify-content: center;
  margin-right: 10px;
  width: 56px;
`;

const StyledAvatarImage = styled.img`
  ${avatartBase}
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  font-size: ${FONT_SIZES.MEDIUM};
`;

export const ProjectPostButtonAvatar: FunctionComponent<HeaderMenuAvatarProps> = (props) => {
  const { account } = props;
  const firstNameInitial = account?.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account?.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      {account?.currentAvatar && (
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
