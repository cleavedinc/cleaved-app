import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { MembersListMenu, PostHeaderAvatarLink } from "../../components";
import { usePostProjectAccountSeek, useRouteParams, useTranslator } from "../../hooks";

const PostHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.MEDIUM};
  padding-right: ${SPACING.LARGE};
`;

// const StyledJobTitle = styled.p`
//   color: ${COLORS.GRAY_500};
// `;

const PeopleList = styled.ul``;

const PeopleListItem = styled.li``;

const PostProfessionalName = styled.a`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  &:hover {
    color: ${COLORS.BLUE_500_HOVER};
    text-decoration: underline;
  }
`;

const StyledPeopleListHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.SMALL};
`;

const StyledPeopleListHeader = styled.div``;

export const AsideProjectOrganizationMembersDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();
  const routeParams = useRouteParams();
  const projectId = routeParams.projectId;

  const { postProjectAccountSeekData, postProjectAccountSeekDataLoading } = usePostProjectAccountSeek(
    projectId,
    null,
    20
  );

  return (
    <StickUnderHeaderDesktopOnly>
      <StyledPeopleListHeaderWrapper>
        <StyledPeopleListHeader>{t("people.teamListHeader")}</StyledPeopleListHeader>
        <MembersListMenu />
      </StyledPeopleListHeaderWrapper>

      <PeopleList>
        <PeopleListItem>
          {!postProjectAccountSeekDataLoading &&
            postProjectAccountSeekData &&
            postProjectAccountSeekData?.length > 0 &&
            postProjectAccountSeekData.map((member) => {
              return (
                <PostHeaderWrapper key={member.id}>
                  <PostHeaderAvatarLink account={member} />

                  <PostProfessionalName href={member.id}>
                    {member.firstName} {member.lastName}
                  </PostProfessionalName>
                  {/* {member?.professionals[0]?.jobTitle && (
                <StyledJobTitle>{member?.professionals[0]?.jobTitle}</StyledJobTitle>
              )} */}
                </PostHeaderWrapper>
              );
            })}
        </PeopleListItem>
      </PeopleList>
    </StickUnderHeaderDesktopOnly>
  );
};
