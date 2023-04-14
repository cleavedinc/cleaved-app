import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { mediaQueries, SPACING, StyledTd } from "@cleaved/ui";

import { HeaderMenuAvatar, TeamsEditMenu } from "../../components";
import { AccountContext } from "../../contexts";
import { OrganizationSeekMembersQuery } from "../../generated-types/graphql";
import { useNavigateToProfessionalProfile } from "../../hooks";

type TeamsListRowProps = {
  member: OrganizationSeekMembersQuery["organizationSeekMembers"][0];
  organizationSeekMembersDataRefetch?: () => void;
};

const StyledPersonNameLink = styled.a`
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
      width: 30%;
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
  const { accountData } = useContext(AccountContext);
  const { professionalProfilePath } = useNavigateToProfessionalProfile(member?.id);

  return (
    <>
      <StyledTdWithMenuContent role="cell">
        <StyledPersonLinkWrapper>
          <HeaderMenuAvatar account={member} />
          <StyledPersonNameLink href={professionalProfilePath}>
            {member?.firstName} {member?.lastName}
          </StyledPersonNameLink>
        </StyledPersonLinkWrapper>
      </StyledTdWithMenuContent>
      <StyledTdWithMenuContent role="cell">
        <StyledPermission>{member?.permissionInOrg}</StyledPermission>
      </StyledTdWithMenuContent>
      <StyledTdWithMenuContentEdit role="cell">
        {accountData?.id !== member.id && (
          <TeamsEditMenu member={member} organizationSeekMembersDataRefetch={organizationSeekMembersDataRefetch} />
        )}
      </StyledTdWithMenuContentEdit>
    </>
  );
};
