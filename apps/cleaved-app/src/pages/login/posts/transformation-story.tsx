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

export const TransformationStory: FunctionComponent = () => {
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
            <StyledAvatarImage src={"/helper-info/avatars/avatar-male-3.svg"} alt="profile avatar" />
          </StyledAvatarImageLink>

          <StyledMemberNameWrapper>
            <PostProfessionalName>Chris Campbell</PostProfessionalName>
            <StyledJobTitle>Founder</StyledJobTitle>
          </StyledMemberNameWrapper>
        </PostHeaderWrapper>

        <StyledMessage>
          <p>I was taught that if you work hard and do the right things, people will notice.</p>

          <p>But this approach really doesn't work in a busy company, especially in a hybrid environment.</p>

          <p>
            I have struggled for years making connections, build products customers love and growing my career. It's
            taken me a long time to figure out that it takes a village to build a great product, and that if key people
            are not staying informed, it can lead to all kinds of problems and missed opportunities.
          </p>

          <p>
            I use many best in class tools with my teams every day to solve customer problems. Because we are moving so
            fast and we are mostly remote, I find it challenging to keep up to date as my teams pivot, make decisions or
            ask for feedback.
          </p>

          <p>
            I also find it challenging to give feedback to people. Yes, there are a lot of feedback tools out there that
            are great, but I need something closer to the project, where I am with my team, and not have to load up
            another app.
          </p>

          <p>I knew it was possible to create something better.</p>

          <p>
            Feeling stuck and unable to find a way forward, I took a step back and was surprised to find the solution to
            my problem had been right in front of me.
          </p>
        </StyledMessage>

        <StyledPostImageWrapper>
          <PhotoView src={"/helper-info/placeholder.png"}>
            <StyledPostImage src={"/helper-info/placeholder.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>
        </StyledPostImageWrapper>

        <StyledPostInfoBar>
          <ReactionTypesAndTotalCount
            reactionsExpressed={[
              PostReactionType.Like,
              PostReactionType.Thanks,
              PostReactionType.Celebrate,
              PostReactionType.Reviewed,
            ]}
            reactionTotalCount={"6"}
          />

          <StyledPostInfoBarCommentCount onClick={() => {}}>
            3 <StyledPostComments>{t("post.comment")}</StyledPostComments>
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
                <ActivePostReaction myReaction={PostReactionType.Celebrate} />
              </StyledPostFooterButtonButton>
            </StyledTooltipWhite>
          </StyledTooltipWrapper>

          <PostProjectComment showComments={() => {}} />
        </StyledPostFooter>
      </StyledProjectPostBox>
    </PhotoProvider>
  );
};
