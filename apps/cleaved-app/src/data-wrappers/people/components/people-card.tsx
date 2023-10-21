import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, FONT_SIZES, SPACING } from "@cleaved/ui";

import { PeopleCardAvatar, PeopleEditMenu } from "../../../components";
import { OrgPermissionLevel, OrganizationSeekMembersQuery } from "../../../generated-types/graphql";
import { useNavigateToProfile, useTranslator } from "../../../hooks";
import { convertPermissionInOrgReadable, useOrganizationPermission } from "../../../permissions";

type PeopleCardProps = {
  member: OrganizationSeekMembersQuery["organizationSeekMembers"][0];
  refetchData: (() => void) | undefined;
};

const StyledEmailAddress = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  margin-bottom: ${SPACING.BASE};
`;

const StyledMenuContentEdit = styled.div`
  margin-left: auto;
`;

const StyledPermissionLabel = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  margin-top: auto;
`;

const StyledPeopleInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${SPACING.BASE};
`;

const StyledPeopleCardBox = styled(Box)`
  display: flex;
  width: 100%;
`;

const StyledProfessionalJobTitle = styled.div`
  align-items: center;
  display: flex;
`;

const StyledProfessionalLink = styled(Link)`
  font-size: ${FONT_SIZES.LARGE};
`;

export const PeopleCard: FunctionComponent<PeopleCardProps> = (props) => {
  const { member, refetchData } = props;
  const { profilePath } = useNavigateToProfile(member?.id);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { t } = useTranslator();

  return (
    <StyledPeopleCardBox>
      <PeopleCardAvatar account={member} />

      <StyledPeopleInfoWrapper>
        <StyledHeadingWrapper>
          <StyledProfessionalLink to={profilePath} title={`${member?.firstName} ${member?.lastName}`}>
            {member?.firstName} {member?.lastName}
          </StyledProfessionalLink>

          {hasPermission && (
            <StyledMenuContentEdit>
              <PeopleEditMenu member={member} refetchData={refetchData} />
            </StyledMenuContentEdit>
          )}
        </StyledHeadingWrapper>

        {member && member?.jobTitle && (
          <StyledProfessionalJobTitle>
            <div>{member?.jobTitle}</div>
          </StyledProfessionalJobTitle>
        )}

        {member && member?.jobTitle && <StyledEmailAddress>{member?.emailAddress}</StyledEmailAddress>}

        {member && member?.permissionInOrg && (
          <StyledPermissionLabel>{convertPermissionInOrgReadable(member?.permissionInOrg, t)}</StyledPermissionLabel>
        )}
      </StyledPeopleInfoWrapper>
    </StyledPeopleCardBox>
  );
};
