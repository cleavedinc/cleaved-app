import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FONT_SIZES, SPACING } from "@cleaved/ui";

import {
  FindMyAccountQuery,
  OrganizationGetMemberQuery,
  OrganizationSeekMembersQuery,
} from "../../generated-types/graphql";

import { avatartBase, avatarSizeLarge } from "../avatars/avatar-base-styles";

type AsideAvatarProps = {
  account:
    | FindMyAccountQuery["findMyAccount"]
    | OrganizationGetMemberQuery["organizationGetMember"]
    | OrganizationSeekMembersQuery["organizationSeekMembers"][0]
    | undefined;
};

const StyledAvatarImage = styled.img`
  ${avatartBase}
  ${avatarSizeLarge}
  margin: 0 auto ${SPACING.MEDIUM};
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  ${avatarSizeLarge}
  font-size: ${FONT_SIZES.XXLARGE};
  margin: 0 auto ${SPACING.MEDIUM};
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
