import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, FONT_SIZES, mediaQueries, SPACING } from "@cleaved/ui";

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

  ${mediaQueries.SM} {
    flex-basis: calc(50% - 10px);
    margin-right: 10px;
    width: 50%;
  }

  ${mediaQueries.MD} {
    flex-basis: calc(33% - 10px);
    width: 33%;
  }

  ${mediaQueries.LG} {
    flex-basis: calc(25% - 10px);
    width: 25%;
  }
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
