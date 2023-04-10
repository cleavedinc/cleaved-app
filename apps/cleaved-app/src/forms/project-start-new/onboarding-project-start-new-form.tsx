import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, ButtonPrimary, COLORS, FONT_SIZES, RADIUS, SPACING, SPACING_PX, Spinner } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { ProjectStartNewFormFormikTextarea } from "./components";
import { PROJECT_START_NEW } from "./gql";

type OnboardingProjectStartNewFormProps = {
  projectsInOrgSeekRefetch?: (() => void) | undefined;
};

type OnboardingProjectStartNewFormType = {
  projectName: string;
  projectDetails: string;
};

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

export const OnboardingProjectStartNewForm: FunctionComponent<OnboardingProjectStartNewFormProps> = (props) => {
  const { projectsInOrgSeekRefetch } = props;
  const { t } = useTranslator();
  const { preferredOrgId } = useContext(authTokenContext);

  const [projectStart] = useMutation(PROJECT_START_NEW, {
    onCompleted: () => {
      if (projectsInOrgSeekRefetch) {
        projectsInOrgSeekRefetch();
      }
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
        onSubmit={(values: OnboardingProjectStartNewFormType, { resetForm, setSubmitting }) => {
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
