import React, { Dispatch, FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { ButtonPrimary, FONT_SIZES, SPACING_PX, Spinner } from "@cleaved/ui";

import { PostsContext } from "../../contexts";
import { POST_PROJECT_REPLY } from "../../gql-mutations";
import { useRouteParams, useTranslator } from "../../hooks";
import { htmlToMarkdown, MarkdownEditor, markdownStylesBase } from "../markdown";

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
`;

const StyledCommentForm = styled.div`
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  width: 100%;
`;

const StyledMarkdownEditorWrapper = styled.div`
  ${markdownStylesBase}

  .ql-container {
    max-height: 20vh;
  }
`;

const StyledPostButton = styled(ButtonPrimary)`
  font-size: ${FONT_SIZES.MEDIUM};
  margin-left: auto;
  margin-top: ${SPACING_PX.ONE};
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

  const notContainOnlyBlankSpaces = t("post.notContainOnlyBlankSpaces")
    ? t("post.notContainOnlyBlankSpaces")
    : undefined;

  const leaveCommentPlaceholder = t("comment.leaveCommentPlaceholder")
    ? t("comment.leaveCommentPlaceholder")
    : undefined;

  const [postProjectReply] = useMutation(POST_PROJECT_REPLY, {
    onCompleted: () => {
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

          // convert editor html to markdown to be saved
          const bodyMarkdown = htmlToMarkdown(values.body);

          postProjectReply({
            variables: {
              organizationId: values.organizationId,
              postOrPostReplyId: values.postOrPostReplyId,
              body: bodyMarkdown,
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
              .matches(/^(?=.*[a-zA-Z0-9]).+$/, notContainOnlyBlankSpaces)
              .test("empty-body", "Body cannot be empty", (value) => {
                if (value && value.replace(/<[^>]+>/g, "").trim().length === 0) {
                  return false; // Invalid if value is present but only contains empty HTML elements
                }
                return true; // Valid if value is empty or contains non-empty text
              })
              .required(),
            otherwise: yup.string().notRequired(),
          }),
        })}
      >
        {({ dirty, isSubmitting, isValid }) => {
          return (
            <Form>
              <StyledMarkdownEditorWrapper>
                <MarkdownEditor name="body" placeholder={leaveCommentPlaceholder} />
              </StyledMarkdownEditorWrapper>

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
