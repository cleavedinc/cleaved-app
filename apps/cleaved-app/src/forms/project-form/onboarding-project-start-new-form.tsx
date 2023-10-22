import React, { FunctionComponent, useContext, useEffect } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { Spinner } from "@cleaved/ui";

import {
  inputFieldStyles,
  StyledProjectFormLabel,
  StyledProjectFormWrapper,
  StyledSubmitButton,
} from "../../components";
import { authTokenContext } from "../../contexts";
import { useProductEngagementLogEvent, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { ProjectStartNewFormFormikTextarea } from "./components";
import { PROJECT_CREATE } from "./gql";

type OnboardingProjectStartNewFormProps = {
  projectsInOrgSeekRefetch?: (() => void) | undefined;
};

type OnboardingProjectStartNewFormType = {
  projectDetails: string;
  projectName: string;
};

const StyledButtonPrimaryWrapper = styled.div`
  display: flex;
`;

const StyledField = styled(Field)`
  ${inputFieldStyles}
`;

export const OnboardingProjectStartNewForm: FunctionComponent<OnboardingProjectStartNewFormProps> = (props) => {
  const { projectsInOrgSeekRefetch } = props;
  const logEvent = useProductEngagementLogEvent();
  const { t } = useTranslator();
  const { preferredOrgId } = useContext(authTokenContext);

  const [projectCreate, { loading, error }] = useMutation(PROJECT_CREATE, {
    onCompleted: () => {
      logEvent("PROJECT_CREATE");

      if (projectsInOrgSeekRefetch) {
        projectsInOrgSeekRefetch();
      }

      navigate(
        `${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingInviteUsers.route}`
      );
    },
  });

  useEffect(() => {
    if (loading) {
      return;
    }

    if (error) {
      logQueryError(error);
      return;
    }
  }, [loading, error]);

  return (
    <>
      <Formik
        initialValues={{
          projectName: "",
          projectDetails: "",
        }}
        onSubmit={(values: OnboardingProjectStartNewFormType, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          projectCreate({
            variables: {
              projectName: values.projectName,
              organizationId: preferredOrgId,
              projectDetail: values.projectDetails,
            },
          });

          resetForm({});
        }}
        validateOnChange
        validationSchema={yup.object().shape<Record<keyof OnboardingProjectStartNewFormType, yup.AnySchema>>({
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
