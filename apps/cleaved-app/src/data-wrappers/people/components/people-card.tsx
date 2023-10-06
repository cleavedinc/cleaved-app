import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, FONT_SIZES, SPACING } from "@cleaved/ui";

import { PeopleCardAvatar } from "../../../components";
import { OrgPermissionLevel, OrganizationSeekMembersQuery } from "../../../generated-types/graphql";
import { useNavigateToProfile, useTranslator } from "../../../hooks";

type PeopleCardProps = {
  member: OrganizationSeekMembersQuery["organizationSeekMembers"][0];
};

const StyledPermissionLabel = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  margin-top: auto;
`;

const StyledPeopleInfoWrapper = styled.div`
  display: flex;
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
  const { member } = props;
  const { profilePath } = useNavigateToProfile(member?.id);
  const { t } = useTranslator();

  const convertPermissionInOrgReadable = (permission: OrgPermissionLevel, translate: any): string => {
    switch (permission) {
      case OrgPermissionLevel.Admin:
        return translate("permission.admin");
        break;
      case OrgPermissionLevel.Updater:
        return translate("permission.updater");
        break;
      case OrgPermissionLevel.Viewer:
      default:
        return translate("permission.viewer");
    }
  };

  return (
    <StyledPeopleCardBox>
      <PeopleCardAvatar account={member} />

      <StyledPeopleInfoWrapper>
        <StyledProfessionalLink to={profilePath} title={`${member?.firstName} ${member?.lastName}`}>
          {member?.firstName} {member?.lastName}
        </StyledProfessionalLink>

        {member && member?.jobTitle && (
          <StyledProfessionalJobTitle>
            <div>{member?.jobTitle}</div>
          </StyledProfessionalJobTitle>
        )}

        {member && member?.permissionInOrg && (
          <StyledPermissionLabel>{convertPermissionInOrgReadable(member?.permissionInOrg, t)}</StyledPermissionLabel>
        )}
      </StyledPeopleInfoWrapper>
    </StyledPeopleCardBox>
  );
};
