import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { mediaQueries, SPACING, StyledTd } from "@cleaved/ui";

import { HeaderMenuAvatar, PeopleEditMenu } from "../../components";
import { OrgPermissionLevel, OrganizationSeekMembersQuery } from "../../generated-types/graphql";
import { useFindMyAccount, useNavigateToProfile, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

type PeopleListRowProps = {
  member: OrganizationSeekMembersQuery["organizationSeekMembers"][0];
  organizationSeekMembersDataRefetch?: () => void;
};

type StyledTdWithMenuContentProps = {
  name?: string;
  jobTitle?: string;
  permissions?: string;
};

type StyledTdWithMenuContentEditProps = {
  edit?: string;
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

const StyledTdWithMenuContent = styled(StyledTd)<StyledTdWithMenuContentProps>`
  vertical-align: middle; /* Fixes a double bottom border in safari */

  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(1):before {
      content: ${(props) => (props.name ? `"${props.name}"` : null)};
    }

    &:nth-of-type(2):before {
      content: ${(props) => (props.jobTitle ? `"${props.jobTitle}"` : null)};
    }

    &:nth-of-type(3):before {
      content: ${(props) => (props.permissions ? `"${props.permissions}"` : null)};
    }
  }

  ${mediaQueries.XS_LANDSCAPE} {
    &:first-child {
      /* width: 50%; */
    }
  }
`;

const StyledTdWithMenuContentEdit = styled(StyledTd)<StyledTdWithMenuContentEditProps>`
  min-height: 50px;
  width: 100px;

  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(4):before {
      content: ${(props) => (props.edit ? `"${props.edit}"` : null)};
    }
  }
`;

export const PeopleListRow: FunctionComponent<PeopleListRowProps> = (props) => {
  const { member, organizationSeekMembersDataRefetch } = props;
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const accountQuery = useFindMyAccount();
  const { profilePath } = useNavigateToProfile(member?.id);
  const { t } = useTranslator();

  const professionalName = t("people.professionalName") ? t("people.professionalName") : undefined;
  const jobTitle = t("people.jobTitle") ? t("people.jobTitle") : undefined;
  const permissions = t("people.professionalPermissions") ? t("people.professionalPermissions") : undefined;
  const edit = t("people.edit") ? t("people.edit") : undefined;

  return (
    <>
      <StyledTdWithMenuContent name={professionalName} role="cell">
        <StyledPersonLinkWrapper>
          <HeaderMenuAvatar account={member} />
          <StyledPersonNameLink href={profilePath}>
            {member?.firstName} {member?.lastName}
          </StyledPersonNameLink>
        </StyledPersonLinkWrapper>
      </StyledTdWithMenuContent>
      <StyledTdWithMenuContent jobTitle={jobTitle} role="cell">
        <StyledPermission>{member?.jobTitle}</StyledPermission>
      </StyledTdWithMenuContent>
      <StyledTdWithMenuContent permissions={permissions} role="cell">
        <StyledPermission>{member?.permissionInOrg}</StyledPermission>
      </StyledTdWithMenuContent>
      {hasPermission && (
        <StyledTdWithMenuContentEdit edit={edit} role="cell">
          {accountQuery.data?.findMyAccount.id !== member.id && (
            <PeopleEditMenu member={member} organizationSeekMembersDataRefetch={organizationSeekMembersDataRefetch} />
          )}
        </StyledTdWithMenuContentEdit>
      )}
    </>
  );
};
