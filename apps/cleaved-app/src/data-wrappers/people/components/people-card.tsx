import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, FONT_SIZES, SPACING } from "@cleaved/ui";

import { PeopleCardAvatar } from "../../../components";
import { OrganizationSeekMembersQuery } from "../../../generated-types/graphql";
import { useNavigateToProfile } from "../../../hooks";

type PeopleCardProps = {
  member: OrganizationSeekMembersQuery["organizationSeekMembers"][0];
};
const StyledProfessionalJobTitle = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.MEDIUM};
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

const StyledProfessionalLink = styled(Link)`
  font-size: ${FONT_SIZES.LARGE};
`;
export const PeopleCard: FunctionComponent<PeopleCardProps> = (props) => {
  const { member } = props;
  const { profilePath } = useNavigateToProfile(member?.id);

  return (
    <StyledPeopleCardBox>
      <PeopleCardAvatar account={member} />

      <StyledPeopleInfoWrapper>
        <StyledProfessionalLink to={profilePath} title={`${member?.firstName} ${member?.lastName}`}>
          {member?.firstName} {member?.lastName}
        </StyledProfessionalLink>

        <StyledProfessionalJobTitle>
          {member && member?.jobTitle && <div>{member?.jobTitle}</div>}
        </StyledProfessionalJobTitle>
      </StyledPeopleInfoWrapper>
    </StyledPeopleCardBox>
  );
};
