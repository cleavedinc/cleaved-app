import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";

import { SPACING } from "@cleaved/ui";

import { StyledRouterButtonLink } from "../../components";
import { authTokenContext, PostsContext } from "../../contexts";
import { OrgPermissionLevel, PostProjectSeekQuery } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

import { Post } from "./post";

const StyledWaypointTriggerMessage = styled.div`
  margin: ${SPACING.MEDIUM};
  text-align: center;
`;

const StyledEndTimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${SPACING.XLARGE} 0;
  text-align: center;
`;

const StyledAddPeopleText = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

const StyledPostListWrapper = styled.div`
  &:last-child {
    margin-bottom: ${SPACING.XXXLARGE};
  }
`;

export const PostProjectList: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { preferredOrgId } = useContext(authTokenContext);
  const pageSize = 20;
  const { postProjectSeekData, postProjectSeekDataLoading, postProjectSeekFetchMore } = useContext(PostsContext);
  const lastPostId = postProjectSeekData && postProjectSeekData[postProjectSeekData.length - 1]?.id;
  const { t } = useTranslator();

  const handleLoadMoreData = () => {
    postProjectSeekFetchMore({
      variables: { seekKey: lastPostId },

      updateQuery: (
        previousResult: PostProjectSeekQuery,
        { fetchMoreResult }: { [key: string]: PostProjectSeekQuery }
      ) => {
        const newEntries = fetchMoreResult.postProjectSeek;

        return {
          postProjectSeek: [...previousResult.postProjectSeek, ...newEntries],
        };
      },
    });
  };

  return (
    <>
      {!postProjectSeekDataLoading && postProjectSeekData && postProjectSeekData.length > 0 && (
        <>
          {postProjectSeekData.map((post) => {
            return (
              <StyledPostListWrapper key={post.id}>
                <Post post={post} />
              </StyledPostListWrapper>
            );
          })}

          {!postProjectSeekDataLoading && postProjectSeekData.length >= pageSize && (
            <Waypoint onEnter={() => handleLoadMoreData()}>
              <StyledWaypointTriggerMessage />
            </Waypoint>
          )}
        </>
      )}

      {hasPermission && !postProjectSeekDataLoading && postProjectSeekData && postProjectSeekData.length >= 3 && (
        <StyledEndTimelineWrapper>
          <StyledAddPeopleText>{t("teams.addNewTeamMemberHelperText")}</StyledAddPeopleText>

          <StyledRouterButtonLink
            to={`/${preferredOrgId}${routeConstantsCleavedApp.professionalInvite.route}`}
            title={routeConstantsCleavedApp.professionalInvite.name}
          >
            {t("teams.addNewTeamMember")}
          </StyledRouterButtonLink>
        </StyledEndTimelineWrapper>
      )}
    </>
  );
};
