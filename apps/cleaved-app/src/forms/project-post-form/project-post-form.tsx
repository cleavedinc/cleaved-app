import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { ButtonPrimary, ImageIcon, FONT_SIZES, SPACING_PX, Spinner, StyledTooltipDark } from "@cleaved/ui";

import { AccountContext, PostsContext } from "../../contexts";
import { PostProjectCreateMutationVariables } from "../../generated-types/graphql";
import { usePostProjectGetById, useRouteParams, useTranslator } from "../../hooks";

import { ImageUploadAndPreviewForm } from "../image-upload-and-preview-form";

import { POST_PROJECT_CREATE, POST_PROJECT_UPDATE } from "./gql";
import { PostFormFormikTextarea } from "./components";

type ProjectPostFormProps = {
  closeForm: () => void;
  recipientProfessionalId?: string | undefined;
  postId?: string;
};

type PostProjectCreateMutationVariablesValidation = {
  body: string;
  imageUrls: [string];
};

const StyledAdditionalActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledAdditionalActionsIconButton = styled.button`
  background: none;
  color: inherit;
  display: flex;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const StyledPostButton = styled(ButtonPrimary)`
  font-size: ${FONT_SIZES.MEDIUM};
  margin-left: auto;
  margin-top: ${SPACING_PX.ONE};
`;

const StyledAdditionalActionButtonWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledProjectPostForm = styled.div``;

export const ProjectPostForm: FunctionComponent<ProjectPostFormProps> = (props) => {
  const { closeForm, postId } = props;
  const { accountData } = useContext(AccountContext);
  const { postProjectSeekRefetch } = useContext(PostsContext);
  const { postProjectGetByIdData, postProjectGetByIdDataLoading } = usePostProjectGetById(postId);
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const projectId = routeParams.projectId;
  const [isImageUploadWrapperActive, setImageUploadWrapperActive] = useState(false);
  const theme = useTheme();
  const { t } = useTranslator();

  const notContainOnlyBlankSpaces = t("post.notContainOnlyBlankSpaces")
    ? t("post.notContainOnlyBlankSpaces")
    : undefined;

  const [submitPost] = useMutation(POST_PROJECT_CREATE, {
    onCompleted: () => postProjectSeekRefetch(),
    onError: (error) => {
      logQueryError(error);
    },
  });

  const [updatePost] = useMutation(POST_PROJECT_UPDATE, {
    onCompleted: () => postProjectSeekRefetch(),
    onError: (error) => {
      logQueryError(error);
    },
  });

  useEffect(() => {
    if (postId && postProjectGetByIdData && postProjectGetByIdData?.images.length > 0) {
      setImageUploadWrapperActive(true);
    }
  }, [postId, postProjectGetByIdData]);

  return (
    <StyledProjectPostForm>
      <Formik
        enableReinitialize
        initialValues={{
          organizationId,
          projectId: projectId,
          body: (!postProjectGetByIdDataLoading && postProjectGetByIdData?.body) || "",
          imageUrls: (!postProjectGetByIdDataLoading && postProjectGetByIdData?.images) || null,
        }}
        onSubmit={(values: PostProjectCreateMutationVariables, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          if (postId) {
            updatePost({
              variables: {
                organizationId: values.organizationId,
                postId: postId,
                body: values.body,
                imageUrls: values.imageUrls,
              },
            });
          } else {
            submitPost({
              variables: {
                organizationId: values.organizationId,
                projectId: values.projectId,
                body: values.body,
                imageUrls: values.imageUrls,
              },
            });
          }

          resetForm({});
          closeForm();
        }}
        validateOnChange
        validationSchema={yup
          .object()
          .shape<Record<keyof PostProjectCreateMutationVariablesValidation, yup.AnySchema>>({
            body: yup
              .string()
              .matches(/^\s*\S[\s\S]*$/, notContainOnlyBlankSpaces)
              .required(),
            imageUrls: yup.array().nullable().of(yup.string()),
          })}
      >
        {({ dirty, isSubmitting, isValid, setFieldValue }) => {
          return (
            <Form>
              <PostFormFormikTextarea
                name="body"
                placeholder={t("post.createProjectPostWithNamePlaceholder", { name: accountData?.firstName })}
              />

              <StyledAdditionalActionsWrapper>
                {isImageUploadWrapperActive && (
                  <ImageUploadAndPreviewForm
                    images={postProjectGetByIdData?.images}
                    setFieldValue={setFieldValue}
                    setImageUploadWrapperActive={setImageUploadWrapperActive}
                  />
                )}
              </StyledAdditionalActionsWrapper>

              <StyledAdditionalActionButtonWrapper>
                <StyledTooltipDark allowHTML tooltip={t("post.imageUploadTooltip")} zIndex={999999}>
                  <StyledAdditionalActionsIconButton
                    onClick={() => setImageUploadWrapperActive(!isImageUploadWrapperActive)}
                    type="button"
                  >
                    <ImageIcon color={theme.colors.baseIcon_color} iconSize="30px" />
                  </StyledAdditionalActionsIconButton>
                </StyledTooltipDark>

                <StyledPostButton disabled={!(isValid && dirty) || isSubmitting} type="submit">
                  {isSubmitting ? t("pleaseWaitDots") : t("post.submitPost")}
                  <Spinner visible={isSubmitting} />
                </StyledPostButton>
              </StyledAdditionalActionButtonWrapper>
            </Form>
          );
        }}
      </Formik>
    </StyledProjectPostForm>
  );
};
