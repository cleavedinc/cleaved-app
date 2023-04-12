import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import {
  BORDERS,
  ButtonPrimary,
  ButtonLink,
  COLORS,
  FONT_SIZES,
  RADIUS,
  SPACING,
  SPACING_PX,
  Spinner,
} from "@cleaved/ui";

import { authTokenContext, ProjectsContext } from "../../contexts";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { ProjectStartNewFormFormikTextarea } from "./components";
import { PROJECT_START_NEW } from "./gql";

type ProjectStartNewFormType = {
  projectName: string;
  projectDetails: string;
};

const StyledButtonLink = styled(ButtonLink)`
  color: ${COLORS.GRAY_500};
`;

const StyledButtonPrimaryWrapper = styled.div`
  display: flex;
`;

const StyledField = styled(Field)`
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.MEDIUM};
  font-size: ${FONT_SIZES.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
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
  color: ${COLORS.GRAY_500};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING_PX.ONE};
`;

export const ProjectStartNewForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { preferredOrgId } = useContext(authTokenContext);
  const { projectsInOrgSeekRefetch } = useContext(ProjectsContext);

  const [projectStart] = useMutation(PROJECT_START_NEW, {
    onCompleted: () => {
      if (projectsInOrgSeekRefetch) {
        projectsInOrgSeekRefetch();
      }

      navigate(`/${preferredOrgId}${routeConstantsCleavedApp.projectList.route}`);
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  return (
    <>
      <Formik
        initialValues={{
          projectName: "",
          projectDetails: "",
        }}
        onSubmit={(values: ProjectStartNewFormType, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          projectStart({
            variables: {
              projectName: values.projectName,
              organizationId: preferredOrgId,
              // projectDetails: values.projectDetails,
            },
          });

          resetForm({});
        }}
        validateOnChange
        validationSchema={yup.object().shape<any>({
          projectName: yup.string().required(),
        })}
      >
        {({ dirty, isSubmitting, isValid }) => {
          return (
            <Form>
              <StyledProjectFormWrapper>
                <StyledProjectFormLabel htmlFor="projectName">
                  {t("projectStartNew.projectName")}
                </StyledProjectFormLabel>

                <StyledField
                  autoFocus={true}
                  id="projectName"
                  name="projectName"
                  placeholder={t("projectStartNew.projectNamePlaceholder")}
                />
              </StyledProjectFormWrapper>

              <StyledProjectFormWrapper>
                <StyledProjectFormLabel htmlFor="projectDetails">
                  {t("projectStartNew.projectDetails")}
                </StyledProjectFormLabel>

                <ProjectStartNewFormFormikTextarea
                  name="projectDetails"
                  placeholder={t("projectStartNew.projectDetailsPlaceholder")}
                />
              </StyledProjectFormWrapper>

              <StyledButtonPrimaryWrapper>
                <StyledButtonLink onClick={() => navigate(-1)} type="button">
                  Cancel
                </StyledButtonLink>

                <StyledPostButton disabled={!(isValid && dirty) || isSubmitting} type="submit">
                  {isSubmitting ? t("pleaseWaitDots") : t("projectStartNew.startNewProject")}
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
