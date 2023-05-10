import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { BORDERS, FONT_SIZES, RADIUS, SPACING } from "@cleaved/ui";

import { FindMyAccountQuery } from "../../generated-types/graphql";

type AsideAvatarProps = {
  account: FindMyAccountQuery["findMyAccount"] | undefined;
};

const avatartBase = css`
  align-items: center;
  border-radius: ${RADIUS.CIRCLE};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  display: flex;
  height: 100px;
  justify-content: center;
  margin: 0 auto ${SPACING.MEDIUM};
  width: 100px;
`;

const StyledAvatarImage = styled.img`
  ${avatartBase}
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  font-size: ${FONT_SIZES.XXLARGE};
`;

export const AsideAvatar: FunctionComponent<AsideAvatarProps> = (props) => {
  const { account } = props;
  const firstNameInitial = account?.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account?.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      {account && account?.currentAvatar && (
        <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
      )}

      {account && !account?.currentAvatar && (
        <StyledAvatarInitials>
          {firstNameInitial}
          {lastNameInitial}
        </StyledAvatarInitials>
      )}
    </>
  );
};
