import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FONT_SIZES, SPACING, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsidePeopleListAvatarLink, PeopleListMenu } from "../../components";
import { usePostProjectAccountSeek, useRouteParams, useTranslator } from "../../hooks";

const StyledPeopleListEmptyState = styled.div`
  font-size: ${FONT_SIZES.SMALL};
  font-style: italic;
`;

const PostHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
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
        <StyledPeopleListHeader>{t("people.peopleListHeader")}</StyledPeopleListHeader>
        <PeopleListMenu />
      </StyledPeopleListHeaderWrapper>

      <PeopleList>
        <PeopleListItem>
          {!postProjectAccountSeekDataLoading &&
            postProjectAccountSeekData &&
            postProjectAccountSeekData?.length > 0 &&
            postProjectAccountSeekData.map((member) => {
              return (
                <PostHeaderWrapper key={member.id}>
                  <AsidePeopleListAvatarLink account={member} />
                </PostHeaderWrapper>
              );
            })}
        </PeopleListItem>
      </PeopleList>

      {!postProjectAccountSeekDataLoading && postProjectAccountSeekData && postProjectAccountSeekData.length === 0 && (
        <StyledPeopleListEmptyState>{t("people.peopleListHelperInfoText")}</StyledPeopleListEmptyState>
      )}
    </StickUnderHeaderDesktopOnly>
  );
};
