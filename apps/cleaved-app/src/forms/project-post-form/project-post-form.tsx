import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { ButtonPrimary, FONT_SIZES, SPACING_PX, Spinner } from "@cleaved/ui";

import { PostFormContext, PostsContext } from "../../contexts";
import { PostProjectCreateMutationVariables } from "../../generated-types/graphql";
import {
  useFindMyAccount,
  usePostProjectGetById,
  useProductEngagementLogEvent,
  useRouteParams,
  useTranslator,
} from "../../hooks";

import { ImageUploadAndPreviewForm } from "../image-upload-and-preview-form";

import { ImagesControl } from "../action-controls";
import { htmlToMarkdown, markdownToHtml, MarkdownEditorLexical, markdownStylesBase } from "../markdown";
import { POST_PROJECT_CREATE, POST_PROJECT_UPDATE } from "./gql";

type ProjectPostFormProps = {
  closeForm: () => void;
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

const StyledAdditionalActionButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-top: ${SPACING_PX.ONE};
`;

const StyledMarkdownEditorWrapper = styled.div`
  ${markdownStylesBase}

  .ql-container {
    max-height: 40vh;
  }
`;

const StyledPostButton = styled(ButtonPrimary)`
  font-size: ${FONT_SIZES.MEDIUM};
  margin-left: auto;
`;

const StyledProjectPostForm = styled.div``;

export const ProjectPostForm: FunctionComponent<ProjectPostFormProps> = (props) => {
  const { closeForm, postId } = props;
  const { findMyAccountData } = useFindMyAccount();
  const { postProjectSeekRefetch } = useContext(PostsContext);
  const { setProjectPostFormIsDirty, setProjectPostFormImageUploadIsDirty } = useContext(PostFormContext);
  const { postProjectGetByIdData, postProjectGetByIdDataLoading } = usePostProjectGetById(postId);
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const projectId = routeParams.projectId;
  const [isImageUploadWrapperActive, setImageUploadWrapperActive] = useState(false);
  const logEvent = useProductEngagementLogEvent();
  const { t } = useTranslator();

  const notContainOnlyBlankSpaces = t("post.notContainOnlyBlankSpaces")
    ? t("post.notContainOnlyBlankSpaces")
    : undefined;

  const createProjectPostWithNamePlaceholder = t("post.createProjectPostWithNamePlaceholder", {
    name: findMyAccountData?.firstName,
  })
    ? t("post.createProjectPostWithNamePlaceholder", { name: findMyAccountData?.firstName })
    : undefined;

  const [submitPost] = useMutation(POST_PROJECT_CREATE, {
    onCompleted: () => {
      postProjectSeekRefetch();
      logEvent("POST_PROJECT_CREATE");
    },
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
          body: (!postProjectGetByIdDataLoading && postProjectGetByIdData && postProjectGetByIdData.body) || "",
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
          setProjectPostFormIsDirty(false);
          setProjectPostFormImageUploadIsDirty(false);
          closeForm();
        }}
        validateOnChange
        validationSchema={yup
          .object()
          .shape<Record<keyof PostProjectCreateMutationVariablesValidation, yup.AnySchema>>({
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
            imageUrls: yup.array().nullable().of(yup.string()),
          })}
      >
        {({ dirty, isSubmitting, isValid }) => {
          const handleAddImagesToPost = () => {
            setImageUploadWrapperActive(true);
          };

          return (
            <Form>
              <StyledMarkdownEditorWrapper>
                <MarkdownEditorLexical name="body" placeholder={createProjectPostWithNamePlaceholder} />
              </StyledMarkdownEditorWrapper>

              <StyledAdditionalActionsWrapper>
                {isImageUploadWrapperActive && <ImageUploadAndPreviewForm images={postProjectGetByIdData?.images} />}
              </StyledAdditionalActionsWrapper>

              <StyledAdditionalActionButtonWrapper>
                <ImagesControl handleActionButton={handleAddImagesToPost} />

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
