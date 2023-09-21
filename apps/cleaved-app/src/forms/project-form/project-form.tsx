import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { v4 as uuidv4 } from "uuid";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, ButtonPrimary, ButtonLink, FONT_SIZES, RADIUS, SPACING, SPACING_PX, Spinner } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useProjectById, useProductEngagementLogEvent, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { ProjectStartNewFormFormikTextarea } from "./components";
import { PROJECT_CREATE, PROJECT_UPDATE } from "./gql";

type ProjectFormType = {
  projectDetails: string;
  projectName: string;
};

type ProjectFormProps = {
  projectId?: string;
};

const StyledButtonLink = styled(ButtonLink)`
  color: ${({ theme }) => theme.colors.baseButtonLink_color};
`;

const StyledButtonPrimaryWrapper = styled.div`
  display: flex;
`;

const StyledField = styled(Field)`
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
  outline: none;
  padding: ${SPACING.MEDIUM_SMALL} ${SPACING.MEDIUM};
  width: 100%;
`;

const StyledPostButton = styled(ButtonPrimary)`
  font-size: ${FONT_SIZES.MEDIUM};
  margin-left: auto;
  margin-top: ${SPACING_PX.ONE};
`;

const StyledProjectFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledProjectFormLabel = styled.label`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING_PX.ONE};
`;

export const ProjectForm: FunctionComponent<ProjectFormProps> = (props) => {
  const { projectId } = props;
  const { t } = useTranslator();
  const { preferredOrgId } = useContext(authTokenContext);
  const logEvent = useProductEngagementLogEvent();
  const projectData = useProjectById(projectId);
  const [newProjectGuid, setNewProjectGuid] = useState<string | null>();

  const [projectCreate] = useMutation(PROJECT_CREATE, {
    onCompleted: () => {
      logEvent("PROJECT_CREATE");
      navigate(
        `/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${newProjectGuid}${routeConstantsCleavedApp.projectBoard.route}`
      );
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  const [projectUpdate] = useMutation(PROJECT_UPDATE, {
    onCompleted: () => {
      if (projectData && projectData.projectByIdDataRefetch) {
        projectData.projectByIdDataRefetch();
      }

      navigate(
        `/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${projectId}${routeConstantsCleavedApp.projectBoard.route}`
      );
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  useEffect(() => {
    const newGuid = uuidv4();
    setNewProjectGuid(newGuid);
  }, []);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          projectName: projectData.projectByIdData?.name ?? "",
          projectDetails: projectData.projectByIdData?.projectDetails ?? "",
        }}
        onSubmit={(values: ProjectFormType, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          if (projectId) {
            projectUpdate({
              variables: {
                organizationId: preferredOrgId,
                projectId,
                projectDetail: values.projectDetails,
                projectName: values.projectName,
              },
            });
          } else {
            projectCreate({
              variables: {
                projectName: values.projectName,
                organizationId: preferredOrgId,
                projectId: newProjectGuid,
                projectDetail: values.projectDetails,
              },
            });
          }

          resetForm({});
        }}
        validateOnChange
        validationSchema={yup.object().shape<Record<keyof ProjectFormType, yup.AnySchema>>({
          projectName: yup.string().required(),
          projectDetails: yup.string(),
        })}
      >
        {({ dirty, isSubmitting, isValid }) => {
          return (
            <Form>
              <StyledProjectFormWrapper>
                <StyledProjectFormLabel htmlFor="projectName">{t("projectForm.projectName")}</StyledProjectFormLabel>

                <StyledField
                  id="projectName"
                  name="projectName"
                  placeholder={t("projectForm.projectNamePlaceholder")}
                />
              </StyledProjectFormWrapper>

              <StyledProjectFormWrapper>
                <StyledProjectFormLabel htmlFor="projectDetails">
                  {t("projectForm.projectDetails")}
                </StyledProjectFormLabel>

                <ProjectStartNewFormFormikTextarea
                  name="projectDetails"
                  placeholder={t("projectForm.projectDetailsPlaceholder")}
                />
              </StyledProjectFormWrapper>

              <StyledButtonPrimaryWrapper>
                <StyledButtonLink onClick={() => navigate(-1)} type="button">
                  {t("cancel")}
                </StyledButtonLink>

                <StyledPostButton disabled={!(isValid && dirty) || isSubmitting} type="submit">
                  {isSubmitting ? t("pleaseWaitDots") : t("projectForm.projectFormSubmitButton")}
                  <Spinner visible={isSubmitting} />
                </StyledPostButton>
              </StyledButtonPrimaryWrapper>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
