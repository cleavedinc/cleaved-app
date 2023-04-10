import React, { FunctionComponent } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { StyledTooltipWhite } from "@cleaved/ui";

import { ReactionTypesAndTotalCount } from "../../../components";
import { ReactionSelections } from "../../../components/reactions/reaction-selections";
import { ActivePostReaction } from "../../../components/reactions/active-post-reaction";
import { PostProjectComment } from "../../../components/post/post-project-comment";
import { PostReactionType } from "../../../generated-types/graphql";
import { useTranslator } from "../../../hooks";

import {
  StyledAvatarImage,
  StyledAvatarImageLink,
  PostHeaderWrapper,
  StyledJobTitle,
  StyledMemberNameWrapper,
  StyledMessage,
  StyledPostComments,
  StyledPostInfoBar,
  StyledPostFooter,
  StyledPostFooterButtonButton,
  StyledPostImage,
  StyledPostImageMultiple,
  StyledPostImageWrapper,
  StyledPostInfoBarCommentCount,
  PostProfessionalName,
  StyledProjectPostBox,
  StyledToolbarPostInfo,
  StyledTooltipWrapper,
} from "./shared-styles";

export const Consequences: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <PhotoProvider
      maskOpacity={0.6}
      toolbarRender={() => {
        return (
          <StyledToolbarPostInfo>
            {t("post.photoViewerToolbarMessage", {
              firstName: "SOME FIRST NAME",
              lastName: "SOME LAST NAME",
            })}
            {new Date().toLocaleDateString()}
          </StyledToolbarPostInfo>
        );
      }}
    >
      <StyledProjectPostBox>
        <PostHeaderWrapper>
          <StyledAvatarImageLink href="#">
            <StyledAvatarImage src={"/helper-info/avatars/avatar-female-1.svg"} alt="profile avatar" />
          </StyledAvatarImageLink>

          <StyledMemberNameWrapper>
            <PostProfessionalName>Samantha Kim</PostProfessionalName>
            <StyledJobTitle>Vice President of Product</StyledJobTitle>
          </StyledMemberNameWrapper>
        </PostHeaderWrapper>

        <StyledMessage>
          <p>And if decisions get buried, feedback is scattered and leadership is not on the same page...</p>

          <ul>
            <li>- Customer solutions fall short, leading to a higher churn rate.</li>
            <li>- Product delivery takes longer, costing your company more money.</li>
            <li>- Employees leave due to the lack of good feedback and growth opportunities.</li>
          </ul>
        </StyledMessage>

        <StyledPostImageWrapper>
          <PhotoView src={"/helper-info/placeholder.png"}>
            <StyledPostImage src={"/helper-info/placeholder.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>

          <PhotoView src={"/helper-info/placeholder-2.png"}>
            <StyledPostImageMultiple src={"/helper-info/placeholder-2.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>

          <PhotoView src={"/helper-info/placeholder-3.png"}>
            <StyledPostImageMultiple src={"/helper-info/placeholder-3.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>
        </StyledPostImageWrapper>

        <StyledPostInfoBar>
          <ReactionTypesAndTotalCount
            reactionsExpressed={[PostReactionType.Like, PostReactionType.Reviewed]}
            reactionTotalCount={"4"}
          />

          <StyledPostInfoBarCommentCount onClick={() => {}}>
            1 <StyledPostComments>{t("post.comment")}</StyledPostComments>
          </StyledPostInfoBarCommentCount>
        </StyledPostInfoBar>

        <StyledPostFooter>
          <StyledTooltipWrapper>
            <StyledTooltipWhite
              allowHTML
              delay={[500, 300]}
              interactive
              tooltip={<ReactionSelections postId={"123"} postProjectSetReaction={() => {}} />}
            >
              <StyledPostFooterButtonButton onClick={() => {}} type="button">
                <ActivePostReaction myReaction={PostReactionType.Like} />
              </StyledPostFooterButtonButton>
            </StyledTooltipWhite>
          </StyledTooltipWrapper>

          <PostProjectComment showComments={() => {}} />
        </StyledPostFooter>
      </StyledProjectPostBox>
    </PhotoProvider>
  );
};
