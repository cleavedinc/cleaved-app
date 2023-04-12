import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

import { ButtonLinkLoadMore, COLORS } from "@cleaved/ui";

import { PostProjectRepliesQuery } from "../../generated-types/graphql";
import { usePostProjectReplies, useTranslator } from "../../hooks";

import { CommentsListItem } from "../comments/comments-list-item";

type CommentsListProps = {
  commentLevel: number;
  commentRepliesCount: string;
  parentPostId: string;
  triggerGetComments?: number;
};

const StyledCommentAndRepliesWrapper = styled.div``;

const StyledCommentListWrapper = styled.div``;

type StyledLoadMoreButtonProps = {
  isHidden: boolean;
};

export const StyledLoadMoreButton = styled(ButtonLinkLoadMore)<StyledLoadMoreButtonProps>`
  color: ${COLORS.GRAY_500};
  display: ${(props) => (props.isHidden ? "none" : "initial")};

  :hover {
    background-color: transparent;
    text-decoration: underline;
  }
`;

// Recursive component for comments and replies
export const CommentsList: FunctionComponent<CommentsListProps> = (props) => {
  const { commentLevel, commentRepliesCount, parentPostId, triggerGetComments } = props;
  const { t } = useTranslator();
  const [hideLoadMoreButton, setHideLoadMoreButton] = useState<boolean>(false);
  const commentPageSize = 3;

  const {
    postProjectRepliesData,
    postProjectRepliesDataLoading,
    postProjectRepliesDataFetchMore,
    postProjectRepliesDataRefetch,
  } = usePostProjectReplies(parentPostId, "", commentPageSize);

  useEffect(() => {
    if (triggerGetComments && triggerGetComments > 0 && postProjectRepliesDataRefetch) {
      postProjectRepliesDataRefetch();
    }
  }, [triggerGetComments]);

  const handleLoadMoreCommentData = (lastCommentIdArg: string | undefined) => {
    postProjectRepliesDataFetchMore({
      variables: { seekKey: lastCommentIdArg },

      updateQuery: (
        previousResult: PostProjectRepliesQuery,
        { fetchMoreResult }: { [key: string]: PostProjectRepliesQuery }
      ) => {
        const newEntries = fetchMoreResult.postProjectReplies;

        if (newEntries.length < commentPageSize) {
          setHideLoadMoreButton(true);
        }

        return {
          postProjectReplies: [...previousResult.postProjectReplies, ...newEntries],
        };
      },
    });
  };

  const lastCommentId = postProjectRepliesData && postProjectRepliesData[postProjectRepliesData.length - 1]?.id;

  return (
    <StyledCommentListWrapper>
      {!postProjectRepliesDataLoading &&
        postProjectRepliesData &&
        commentLevel < 3 &&
        postProjectRepliesData.map((postReply) => {
          return (
            <StyledCommentAndRepliesWrapper key={postReply.id}>
              <CommentsListItem
                commentLevel={commentLevel}
                postProjectRepliesDataRefetch={postProjectRepliesDataRefetch}
                postReply={postReply}
              />
            </StyledCommentAndRepliesWrapper>
          );
        })}

      {!postProjectRepliesDataLoading &&
        postProjectRepliesData &&
        postProjectRepliesData.length !== Number(commentRepliesCount) && (
          <StyledLoadMoreButton
            isHidden={hideLoadMoreButton}
            type="button"
            onClick={() => {
              handleLoadMoreCommentData(lastCommentId);
            }}
          >
            {t("data.loadMoreComments")}
          </StyledLoadMoreButton>
        )}
    </StyledCommentListWrapper>
  );
};
