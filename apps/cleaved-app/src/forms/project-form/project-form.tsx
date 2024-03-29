import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import Select from "react-select";
import styled, { useTheme } from "styled-components";
import { format } from "date-fns";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { v4 as uuidv4 } from "uuid";

import { logQueryError } from "@cleaved/helpers";
import { ButtonLink, SPACING, Spinner } from "@cleaved/ui";

import {
  inputFieldStyles,
  StyledProjectFormLabel,
  StyledProjectFormWrapper,
  StyledSubmitButton,
} from "../../components";
import { ProjectProgressOptions } from "../../constants";
import { authTokenContext } from "../../contexts";
import { useProjectById, useProductEngagementLogEvent, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { DateRangePicker, ProjectStartNewFormFormikTextarea } from "./components";
import { ProjectFormType } from "./types";
import { PROJECT_CREATE, PROJECT_UPDATE } from "./gql";

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
  ${inputFieldStyles}
`;

const StyledFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACING.MEDIUM};
`;

export const ProjectForm: FunctionComponent<ProjectFormProps> = (props) => {
  const { projectId } = props;
  const { t } = useTranslator();
  const { preferredOrgId } = useContext(authTokenContext);
  const logEvent = useProductEngagementLogEvent();
  const projectData = useProjectById(projectId);
  const [newProjectGuid, setNewProjectGuid] = useState<string | null>();
  const projectProgressOptions = ProjectProgressOptions();
  const colorTheme = useTheme();

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

      navigate(-1);
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  useEffect(() => {
    const newGuid = uuidv4();
    setNewProjectGuid(newGuid);
  }, []);

  const projectProgress = t("project.progress") ? t("project.progress") : "";

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          projectName: projectData.projectByIdData?.name ?? "",
          projectDetails: projectData.projectByIdData?.projectDetails ?? "",
          projectProgress: projectData.projectByIdData?.projectProgress ?? "",
          projectDates: {
            from: projectData.projectByIdData?.projectDates.startDate
              ? new Date(projectData.projectByIdData?.projectDates.startDate)
              : null,
            to: projectData.projectByIdData?.projectDates.endDate
              ? new Date(projectData.projectByIdData?.projectDates.endDate)
              : null,
          },
        }}
        onSubmit={(values: ProjectFormType, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          const projectStartDate =
            values?.projectDates?.from && format(Number(values?.projectDates?.from), "MM/dd/yyyy");
          const projectEndDate = values?.projectDates?.to && format(Number(values?.projectDates?.to), "MM/dd/yyyy");

          if (projectId) {
            projectUpdate({
              variables: {
                organizationId: preferredOrgId,
                projectId,
                projectDetail: values.projectDetails,
                projectName: values.projectName,
                projectProgress: values.projectProgress,
                projectStartDate,
                projectEndDate,
              },
            });
          } else {
            projectCreate({
              variables: {
                projectName: values.projectName,
                organizationId: preferredOrgId,
                projectId: newProjectGuid,
                projectDetail: values.projectDetails,
                projectProgress: values.projectProgress,
                projectStartDate,
                projectEndDate,
              },
            });
          }

          resetForm({});
        }}
        validateOnChange
        validationSchema={yup.object().shape<Record<keyof ProjectFormType, yup.AnySchema>>({
          projectName: yup.string().required(),
          projectDetails: yup.string(),
          projectProgress: yup.string(),
          projectDates: yup.mixed(),
        })}
      >
        {({ dirty, isSubmitting, isValid, values, setFieldTouched, setFieldValue }) => {
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

              <StyledFormInputWrapper>
                <StyledProjectFormLabel htmlFor="projectName">{t("projectForm.projectDate")}</StyledProjectFormLabel>

                <DateRangePicker name="projectDates" />
              </StyledFormInputWrapper>

              <StyledProjectFormWrapper>
                <StyledProjectFormLabel htmlFor="projectDetails">
                  {t("projectForm.projectDetails")}
                </StyledProjectFormLabel>

                <ProjectStartNewFormFormikTextarea
                  name="projectDetails"
                  placeholder={t("projectForm.projectDetailsPlaceholder")}
                />
              </StyledProjectFormWrapper>

              <StyledFormInputWrapper>
                <StyledProjectFormLabel htmlFor="projectProgress">{projectProgress}</StyledProjectFormLabel>

                <Select
                  aria-label={projectProgress}
                  isSearchable={true}
                  value={projectProgressOptions.find((option) => option.value === values.projectProgress) || null}
                  options={projectProgressOptions}
                  onChange={(selectedOption) => {
                    setFieldValue("projectProgress", selectedOption ? selectedOption.value : "");
                    setFieldTouched("projectProgress", true);
                  }}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      neutral0: colorTheme.colors.baseBox_backgroundColor,
                      neutral80: colorTheme.colors.baseText_color,
                      primary: colorTheme.colors.baseLink_color,
                      primary25: colorTheme.colors.baseButtonAndIcon_backgroundColorHover,
                    },
                  })}
                />
              </StyledFormInputWrapper>

              <StyledButtonPrimaryWrapper>
                <StyledButtonLink onClick={() => navigate(-1)} type="button">
                  {t("cancel")}
                </StyledButtonLink>

                <StyledSubmitButton disabled={!(isValid && dirty) || isSubmitting} type="submit">
                  {isSubmitting ? t("pleaseWaitDots") : t("projectForm.projectFormSubmitButton")}
                  <Spinner visible={isSubmitting} />
                </StyledSubmitButton>
              </StyledButtonPrimaryWrapper>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
