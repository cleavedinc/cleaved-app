import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FONT_SIZES, FONT_WEIGHTS, SPACING_PX } from "@cleaved/ui";

import { OrganizationSeekMembersQuery, PostProjectAccountSeekQuery } from "../../generated-types/graphql";
import { useNavigateToProfile } from "../../hooks";

import { avatartBase, avatarSmall } from "../avatars/avatar-base-styles";

type AsidePeopleListAvatarProps = {
  account:
    | PostProjectAccountSeekQuery["postProjectAccountSeek"][0]
    | OrganizationSeekMembersQuery["organizationSeekMembers"][0];
};

const StyledAvatarImage = styled.img`
  ${avatartBase}
  ${avatarSmall}
  margin-right: ${SPACING_PX.TWO};
`;

const StyledAvatarImageLink = styled.a`
  color: ${({ theme }) => theme.colors.baseText_color};
  height: max-content;
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  ${avatarSmall}
  font-size: ${FONT_SIZES.XXSMALL};
  margin-right: ${SPACING_PX.TWO};
`;

const StyledJobTitle = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledPostProfessionalName = styled.a`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  &:hover {
    color: ${({ theme }) => theme.colors.baseTextLink_colorHover};
    text-decoration: underline;
  }
`;

const StyledPostProfessionalInfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AsidePeopleListAvatarLink: FunctionComponent<AsidePeopleListAvatarProps> = (props) => {
  const { account } = props;
  const { profilePath } = useNavigateToProfile(account.id);
  const firstNameInitial = account?.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account?.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      {account && account?.currentAvatar && (
        <StyledAvatarImageLink href={profilePath}>
          <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
        </StyledAvatarImageLink>
      )}

      {account && !account?.currentAvatar && (
        <StyledAvatarInitials>
          {firstNameInitial}
          {lastNameInitial}
        </StyledAvatarInitials>
      )}

      <StyledPostProfessionalInfoWrapper>
        <StyledPostProfessionalName href={profilePath}>
          {account.firstName} {account.lastName}
        </StyledPostProfessionalName>

        {account && account?.jobTitle && <StyledJobTitle>{account?.jobTitle}</StyledJobTitle>}
      </StyledPostProfessionalInfoWrapper>
    </>
  );
};
