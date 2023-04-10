import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FONT_SIZES, SPACING, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideTeamListAvatarLink, MembersListMenu } from "../../components";
import { useOrganizationSeekMembers, useTranslator } from "../../hooks";

const PostHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.MEDIUM};
  padding-right: ${SPACING.LARGE};
`;

const PeopleList = styled.ul``;

const PeopleListItem = styled.li``;

const StyledPeopleListHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.SMALL};
`;

const StyledPeopleListHeader = styled.div``;

export const AsideOrganizationMembersDataWrapper: FunctionComponent = () => {
  const { organizationSeekMembersData, organizationSeekMembersDataLoading } = useOrganizationSeekMembers(null, 20);
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <StyledPeopleListHeaderWrapper>
        <StyledPeopleListHeader>{t("people.teamListHeader")}</StyledPeopleListHeader>
        <MembersListMenu />
      </StyledPeopleListHeaderWrapper>

      <PeopleList>
        <PeopleListItem>
          {!organizationSeekMembersDataLoading &&
            organizationSeekMembersData &&
            organizationSeekMembersData?.length > 0 &&
            organizationSeekMembersData.map((member) => {
              // TODO: make the guts of this into a component, pass in member, share around as I can
              return (
                <PostHeaderWrapper key={member.id}>
                  <AsideTeamListAvatarLink account={member} />
                </PostHeaderWrapper>
              );
            })}
        </PeopleListItem>
      </PeopleList>
    </StickUnderHeaderDesktopOnly>
  );
};
