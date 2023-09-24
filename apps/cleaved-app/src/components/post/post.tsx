import React, { FunctionComponent, useContext, useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { BORDERS, BoxNoPadding, FONT_SIZES, PhotoCollage, SPACING } from "@cleaved/ui";

import { DisplayMarkdown, PostReactions, ReactionTypesAndTotalCount } from "../../components";
import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel, PostProjectSeekQuery } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

import { CommentsList } from "../comments/comments-list";

import { ModalPostComments } from "./modal-post-comments";
import { PostProjectComment } from "./post-project-comment";
import { PostProjectHeader } from "./post-project-header";

type PostProps = {
  post: PostProjectSeekQuery["postProjectSeek"][0];
  showPinnedMenuButton?: boolean;
  showPinnedStatus?: boolean;
};

const StyledCommentListWrapper = styled.div`
  padding: 0 ${SPACING.MEDIUM};
`;

const StyledProjectPostBox = styled(BoxNoPadding)``;

const StyledPostComments = styled.span`
  margin-left: 3px;
  text-transform: lowercase;
`;

const StyledPostProjectLink = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  padding: 0 ${SPACING.MEDIUM} ${SPACING.SMALL} ${SPACING.MEDIUM};

  &:hover {
    color: ${({ theme }) => theme.colors.baseTextLink_colorHover};
    text-decoration: underline;
  }
`;

const StyledPostInfoBar = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  display: flex;
  font-size: ${FONT_SIZES.SMALL};
`;

const StyledmodalPostFooter = styled.div<{ postRepliesCount: string }>`
  align-items: flex-start;
  border-top: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  display: flex;
  padding: 5px 0;
  margin-bottom: ${(props) => (props.postRepliesCount !== "0" ? SPACING.LARGE : "0")};
`;

const StyledPostFooter = styled.div`
  align-items: flex-start;
  border-top: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  display: flex;
`;

const StyledPostInfoBarCommentCount = styled.div`
  cursor: pointer;
  display: flex;
  margin: ${SPACING.SMALL} ${SPACING.MEDIUM} ${SPACING.SMALL} auto;

  :hover {
    text-decoration: underline;
  }
`;

const StyledReactPhotoCollage = styled(PhotoCollage)`
  & > div {
    border: none !important;
  }
`;

const StyledReactReactionTypesAndTotalCountWrapper = styled.div`
  margin: ${SPACING.SMALL} ${SPACING.MEDIUM};
`;

export const Post: FunctionComponent<PostProps> = (props) => {
  const { post, showPinnedMenuButton, showPinnedStatus } = props;
  const { preferredOrgId } = useContext(authTokenContext);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [triggerGetComments, setTriggerGetComments] = useState(0);
  const [postOrPostReplyId, setPostOrPostReplyId] = useState(post.id);
  const { t } = useTranslator();

  const handleShowCommentsmodal = () => {
    setIsCommentsVisible(true);
    setPostOrPostReplyId(post.id); // reset the postId state to top level postId
  };

  const handleCommentReply = (replyId: string) => {
    setPostOrPostReplyId(replyId);
  };

  const postFooterContent = (
    <>
      <PostReactions myReaction={post.myReaction} postId={post.id} />

      <PostProjectComment
        showComments={() => {
          handleShowCommentsmodal();
        }}
      />
    </>
  );

  const postContent = () => {
    const photoArray = post.images.map((value) => ({ source: `${process.env.MEDIA_ENDPOINT}/${value}` }));

    return (
      <>
        {post && (
          <>
            <PostProjectHeader
              account={post.account}
              accountId={post.accountId}
              date={post.date}
              isPinned={post.isPinned}
              isPostOpenInModal={isCommentsVisible}
              postId={post.id}
              showPinnedMenuButton={showPinnedMenuButton}
              showPinnedStatus={showPinnedStatus}
            />
          </>
        )}

        <DisplayMarkdown message={post.body} />

        {post && post?.project && post?.project?.name && post?.project?.id && (
          <StyledPostProjectLink
            to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${post.project.id}${routeConstantsCleavedApp.projectBoard.route}`}
            title={post.project.name}
          >
            {post.project.name}
          </StyledPostProjectLink>
        )}

        {post.images && post.images.length > 0 && (
          <StyledReactPhotoCollage
            width={"100%"}
            height={["auto", "100px"]}
            photoLayout={[1, 3]}
            photos={photoArray}
            showTotalPhotosNotSeenNumber={true}
          />
        )}

        <StyledPostInfoBar>
          {post.reactionTotalCount !== "0" && (
            <StyledReactReactionTypesAndTotalCountWrapper>
              <ReactionTypesAndTotalCount
                reactionsExpressed={post.reactionsExpressed}
                reactionTotalCount={post.reactionTotalCount}
              />
            </StyledReactReactionTypesAndTotalCountWrapper>
          )}

          {post.repliesCount !== "0" && (
            <StyledPostInfoBarCommentCount onClick={() => handleShowCommentsmodal()}>
              <StyledPostComments>
                {post.repliesCount} {post.repliesCount === "1" ? t("post.comment") : t("post.comments")}
              </StyledPostComments>
            </StyledPostInfoBarCommentCount>
          )}
        </StyledPostInfoBar>
      </>
    );
  };

  return (
    <StyledProjectPostBox key={post.id}>
      {postContent()}
      {hasPermission && <StyledPostFooter>{postFooterContent}</StyledPostFooter>}

      <ModalPostComments
        onCommentPostedTriggerGetComments={() => {
          setTriggerGetComments(triggerGetComments + 1);
        }}
        open={isCommentsVisible}
        onCloseRequested={() => setIsCommentsVisible(false)}
        postOrPostReplyId={postOrPostReplyId}
        title={`${post?.account?.firstName} ${post?.account?.lastName}`}
      >
        <>
          {postContent()}

          {hasPermission && (
            <StyledmodalPostFooter postRepliesCount={post.repliesCount}>{postFooterContent}</StyledmodalPostFooter>
          )}

          <StyledCommentListWrapper>
            <CommentsList
              commentLevel={1}
              commentRepliesCount={post.repliesCount}
              handleCommentReply={handleCommentReply}
              parentPostId={post.id}
              triggerGetComments={triggerGetComments}
            />
          </StyledCommentListWrapper>
        </>
      </ModalPostComments>
    </StyledProjectPostBox>
  );
};
