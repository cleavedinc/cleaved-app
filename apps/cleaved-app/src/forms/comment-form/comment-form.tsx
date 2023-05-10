import React, { Dispatch, FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { FormikTextareaNoErrorFields, logQueryError } from "@cleaved/helpers";

import { PostsContext } from "../../contexts";
import { POST_PROJECT_REPLY } from "../../gql-mutations";
import { useRouteParams, useTranslator } from "../../hooks";

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

const StyledCommentForm = styled.div`
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  width: 100%;
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
          body: yup.string(),
        })}
      >
        {({ submitForm, values }) => {
          return (
            <Form>
              <FormikTextareaNoErrorFields
                autoFocus
                hasBorder
                minHeight="60px"
                name="body"
                onKeyPress={(e: React.KeyboardEvent) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                  }
                }}
                onKeyUp={(e: React.KeyboardEvent): false | undefined => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey &&
                    values.body.trim() !== "" &&
                    values.body.trim() !== undefined &&
                    values.body.trim() !== null
                  ) {
                    e.preventDefault();
                    submitForm();
                    return false;
                  }

                  return false;
                }}
                placeholder={t("comment.leaveCommentPlaceholder")}
                type="textarea"
              />
            </Form>
          );
        }}
      </Formik>
    </StyledCommentForm>
  );
};
