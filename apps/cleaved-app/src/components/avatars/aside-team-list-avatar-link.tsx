import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { BORDERS, COLORS, FONT_SIZES, FONT_WEIGHTS, RADIUS, SPACING_PX } from "@cleaved/ui";

import { OrganizationSeekMembersQuery, PostProjectAccountSeekQuery } from "../../generated-types/graphql";
import { useNavigateToProfessionalProfile } from "../../hooks";

type AsideTeamListAvatarProps = {
  account:
    | PostProjectAccountSeekQuery["postProjectAccountSeek"][0]
    | OrganizationSeekMembersQuery["organizationSeekMembers"][0];
};

const avatartBase = css`
  align-items: center;
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 30px;
  justify-content: center;
  margin-right: ${SPACING_PX.TWO};
  width: 30px;
`;

const StyledAvatarImage = styled.img`
  ${avatartBase}
`;

const StyledAvatarImageLink = styled.a`
  color: ${COLORS.BLACK};
  height: max-content;
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  font-size: ${FONT_SIZES.XXSMALL};
`;

const StyledJobTitle = styled.div`
  color: ${COLORS.GRAY_500};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledPostProfessionalName = styled.a`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  &:hover {
    color: ${COLORS.BLUE_500_HOVER};
    text-decoration: underline;
  }
`;

const StyledPostProfessionalInfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AsideTeamListAvatarLink: FunctionComponent<AsideTeamListAvatarProps> = (props) => {
  const { account } = props;
  const { professionalProfilePath } = useNavigateToProfessionalProfile(account.id);
  const firstNameInitial = account?.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account?.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      {account?.currentAvatar && (
        <StyledAvatarImageLink href={professionalProfilePath}>
          <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
        </StyledAvatarImageLink>
      )}

      {!account?.currentAvatar && (
        <StyledAvatarInitials>
          {firstNameInitial}
          {lastNameInitial}
        </StyledAvatarInitials>
      )}

      <StyledPostProfessionalInfoWrapper>
        <StyledPostProfessionalName href={professionalProfilePath}>
          {account.firstName} {account.lastName}
        </StyledPostProfessionalName>

        {/* {account?.professionals[0]?.jobTitle && ( */}
        <StyledJobTitle>{/* {account?.professionals[0]?.jobTitle} */}Temp job title</StyledJobTitle>
        {/* )} */}
      </StyledPostProfessionalInfoWrapper>
    </>
  );
};
