import React, { FunctionComponent, useContext, useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { BORDERS, BoxNoPadding, FONT_SIZES, FONT_WEIGHTS, PhotoCollage, SPACING } from "@cleaved/ui";

import { PostReactions, ReactionTypesAndTotalCount } from "../../components";
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
};

const StyledProjectPostBox = styled(BoxNoPadding)``;

const StyledMessage = styled.div`
  margin-bottom: ${SPACING.SMALL};
  overflow-wrap: anywhere;
  margin: 0 ${SPACING.SMALL};
  white-space: pre-line;
`;

const StyledPostComments = styled.span`
  text-transform: lowercase;
`;

const StyledPostInfoBar = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  display: flex;
  font-size: ${FONT_SIZES.SMALL};
  margin: ${SPACING.SMALL};
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
  margin-left: auto;

  :hover {
    text-decoration: underline;
  }
`;

const StyledProjectNameLink = styled(Link)`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  display: inline-block;
  font-size: ${FONT_SIZES.XXSMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  margin: ${SPACING.XLARGE} ${SPACING.SMALL} ${SPACING.SMALL};
  text-transform: uppercase;
`;

const StyledReactPhotoCollage = styled(PhotoCollage)`
  & > div {
    border: none !important;
  }
`;

export const Post: FunctionComponent<PostProps> = (props) => {
  const { post } = props;
  const { preferredOrgId } = useContext(authTokenContext);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [triggerGetComments, setTriggerGetComments] = useState(0);
  const { t } = useTranslator();

  const handleShowCommentsmodal = () => {
    setIsCommentsVisible(true);
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
          <PostProjectHeader
            account={post.account}
            accountId={post.accountId}
            date={post.date}
            isPostOpenInModal={isCommentsVisible}
            postId={post.id}
          />
        )}

        <StyledMessage>{post.body}</StyledMessage>

        <StyledProjectNameLink
          to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${post.project.id}${routeConstantsCleavedApp.projectBoard.route}`}
          title={post.project.name}
        >
          {post.project.name}
        </StyledProjectNameLink>

        {post.images && post.images.length > 0 && (
          <StyledReactPhotoCollage
            width={"100%"}
            height={["250px", "100px"]}
            photoLayout={[1, 3]}
            photos={photoArray}
            showTotalPhotosNotSeenNumber={true}
          />
        )}

        {post.reactionTotalCount !== "0" && post.repliesCount !== "0" && (
          <StyledPostInfoBar>
            {post.reactionTotalCount !== "0" && (
              <ReactionTypesAndTotalCount
                reactionsExpressed={post.reactionsExpressed}
                reactionTotalCount={post.reactionTotalCount}
              />
            )}
            {post.repliesCount !== "0" && (
              <StyledPostInfoBarCommentCount onClick={() => handleShowCommentsmodal()}>
                {post.repliesCount}{" "}
                <StyledPostComments>
                  {post.repliesCount === "1" ? t("post.comment") : t("post.comments")}
                </StyledPostComments>
              </StyledPostInfoBarCommentCount>
            )}
          </StyledPostInfoBar>
        )}
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
        postOrPostReplyId={post.id}
        title={`${post?.account?.firstName} ${post?.account?.lastName}`}
      >
        <>
          {postContent()}

          {hasPermission && (
            <StyledmodalPostFooter postRepliesCount={post.repliesCount}>{postFooterContent}</StyledmodalPostFooter>
          )}

          <CommentsList
            commentLevel={1}
            commentRepliesCount={post.repliesCount}
            parentPostId={post.id}
            triggerGetComments={triggerGetComments}
          />
        </>
      </ModalPostComments>
    </StyledProjectPostBox>
  );
};
