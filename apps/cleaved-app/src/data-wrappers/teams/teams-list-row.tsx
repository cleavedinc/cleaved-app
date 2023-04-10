import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { mediaQueries, SPACING, StyledTd } from "@cleaved/ui";

import { HeaderMenuAvatar, TeamsEditMenu } from "../../components";
import { useNavigateToProfessionalProfile } from "../../hooks";

const StyledPersonNameLink = styled.a`
  margin-left: ${SPACING.SMALL};
`;

const StyledPersonLinkWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledTdWithMenuContent = styled(StyledTd)`
  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(1):before {
      content: "Name";
    }

    &:nth-of-type(2):before {
      content: "Job Title";
    }

    &:nth-of-type(3):before {
      content: "Company";
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

type TeamsListRowProps = {
  member: {
    id: string;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    currentAvatar?: string | null | undefined;
  };
  organizationSeekMembersDataRefetch?: () => void;
};

export const TeamsListRow: FunctionComponent<TeamsListRowProps> = (props) => {
  const { member, organizationSeekMembersDataRefetch } = props;
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
      <StyledTdWithMenuContent role="cell">Temp Title</StyledTdWithMenuContent>
      <StyledTdWithMenuContent role="cell">Temp Company</StyledTdWithMenuContent>
      <StyledTdWithMenuContentEdit role="cell">
        <TeamsEditMenu member={member} organizationSeekMembersDataRefetch={organizationSeekMembersDataRefetch} />
      </StyledTdWithMenuContentEdit>
    </>
  );
};
