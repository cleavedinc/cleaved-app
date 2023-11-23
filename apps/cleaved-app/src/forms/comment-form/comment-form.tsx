import React, { Dispatch, FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { ButtonPrimary, FONT_SIZES, SPACING_PX, Spinner } from "@cleaved/ui";

import { PostsContext } from "../../contexts";
import { POST_PROJECT_REPLY } from "../../gql-mutations";
import { useProductEngagementLogEvent, useRouteParams, useTranslator } from "../../hooks";

import { markdownStylesBase, MarkdownEditorLexical } from "../markdown";

type CommentFormType = {
  organizationId: string;
  postOrPostReplyId: string;
  body: string;
};

export type CommentFormProps = {
  postOrPostReplyId: string;
  postProjectRepliesDataRefetch?: () => void;
  onCommentPostedTriggerGetComments?: () => void;
  setIsCommentRepliesVisible?: Dispatch<React.SetStateAction<boolean>>;
};

const StyledAdditionalActionButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-top: ${SPACING_PX.ONE};
`;

const StyledCommentForm = styled.div`
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  width: 100%;
`;

const StyledMarkdownEditorLexicalWrapper = styled.div`
  ${markdownStylesBase}

  .editor-input {
    max-height: 20vh;
  }
`;

const StyledPostButton = styled(ButtonPrimary)`
  font-size: ${FONT_SIZES.MEDIUM};
  margin-left: auto;
`;

export const CommentForm: FunctionComponent<CommentFormProps> = (props) => {
  const {
    postOrPostReplyId,
    postProjectRepliesDataRefetch,
    onCommentPostedTriggerGetComments,
    setIsCommentRepliesVisible,
  } = props;
  const { postProjectSeekRefetch } = useContext(PostsContext);
  const { t } = useTranslator();
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const logEvent = useProductEngagementLogEvent();

  const leaveCommentPlaceholder = t("comment.leaveCommentPlaceholder")
    ? t("comment.leaveCommentPlaceholder")
    : undefined;

  const [postProjectReply] = useMutation(POST_PROJECT_REPLY, {
    onCompleted: () => {
      logEvent("POST_PROJECT_REPLY");

      if (postProjectSeekRefetch) {
        postProjectSeekRefetch();
      }

      if (postProjectRepliesDataRefetch) {
        postProjectRepliesDataRefetch();
      }

      if (onCommentPostedTriggerGetComments) {
        onCommentPostedTriggerGetComments();
      }

      if (setIsCommentRepliesVisible) {
        setIsCommentRepliesVisible(false);
      }
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  return (
    <StyledCommentForm>
      <Formik
        enableReinitialize
        initialValues={{
          organizationId,
          postOrPostReplyId: postOrPostReplyId,
          body: "",
        }}
        onSubmit={(values: CommentFormType, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          postProjectReply({
            variables: {
              organizationId: values.organizationId,
              postOrPostReplyId: values.postOrPostReplyId,
              body: values.body,
            },
          });

          resetForm();
        }}
        validateOnChange
        validationSchema={yup.object().shape<Record<keyof { body: string }, yup.AnySchema>>({
          body: yup.string().when("imageUrls", {
            is: (imageUrls: string[]) => !imageUrls || imageUrls.length === 0,
            then: yup
              .string()
              .test("empty-body", "Body cannot be empty", (value) => {
                if (value && value.trim().length === 0) {
                  return false;
                }
                return true;
              })
              .required(),
            otherwise: yup.string().notRequired(),
          }),
        })}
      >
        {({ dirty, isSubmitting, isValid }) => {
          return (
            <Form>
              <StyledMarkdownEditorLexicalWrapper>
                <MarkdownEditorLexical name="body" placeholder={leaveCommentPlaceholder} />
              </StyledMarkdownEditorLexicalWrapper>

              <StyledAdditionalActionButtonWrapper>
                <StyledPostButton disabled={!(isValid && dirty) || isSubmitting} type="submit">
                  {isSubmitting ? t("pleaseWaitDots") : t("post.submitPost")}
                  <Spinner visible={isSubmitting} />
                </StyledPostButton>
              </StyledAdditionalActionButtonWrapper>
            </Form>
          );
        }}
      </Formik>
    </StyledCommentForm>
  );
};
