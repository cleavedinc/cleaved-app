import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { mediaQueries, SPACING, StyledTd } from "@cleaved/ui";

import { HeaderMenuAvatar, TeamsEditMenu } from "../../components";
import { OrgPermissionLevel, OrganizationSeekMembersQuery } from "../../generated-types/graphql";
import { useFindMyAccount, useNavigateToProfile } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

type TeamsListRowProps = {
  member: OrganizationSeekMembersQuery["organizationSeekMembers"][0];
  organizationSeekMembersDataRefetch?: () => void;
};

const StyledPersonNameLink = styled.a`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  margin-left: ${SPACING.SMALL};
`;

const StyledPersonLinkWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledPermission = styled.div`
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledTdWithMenuContent = styled(StyledTd)`
  vertical-align: middle; /* Fixes a double bottom border in safari */

  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(1):before {
      content: "Name";
    }

    &:nth-of-type(2):before {
      content: "Permissions";
    }
  }

  ${mediaQueries.XS_LANDSCAPE} {
    &:first-child {
      /* width: 50%; */
    }

    &:nth-child(2) {
      padding-right: ${SPACING.MEDIUM};
      text-align: end;
    }
  }
`;

const StyledTdWithMenuContentEdit = styled(StyledTd)`
  width: 100px;

  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(4):before {
      content: "Edit";
    }
  }
`;

export const TeamsListRow: FunctionComponent<TeamsListRowProps> = (props) => {
  const { member, organizationSeekMembersDataRefetch } = props;
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const accountQuery = useFindMyAccount();
  const { profilePath } = useNavigateToProfile(member?.id);

  return (
    <>
      <StyledTdWithMenuContent role="cell">
        <StyledPersonLinkWrapper>
          <HeaderMenuAvatar account={member} />
          <StyledPersonNameLink href={profilePath}>
            {member?.firstName} {member?.lastName}
          </StyledPersonNameLink>
        </StyledPersonLinkWrapper>
      </StyledTdWithMenuContent>
      <StyledTdWithMenuContent role="cell">
        <StyledPermission>{member?.permissionInOrg}</StyledPermission>
      </StyledTdWithMenuContent>
      {hasPermission && (
        <StyledTdWithMenuContentEdit role="cell">
          {accountQuery.data?.findMyAccount.id !== member.id && (
            <TeamsEditMenu member={member} organizationSeekMembersDataRefetch={organizationSeekMembersDataRefetch} />
          )}
        </StyledTdWithMenuContentEdit>
      )}
    </>
  );
};
