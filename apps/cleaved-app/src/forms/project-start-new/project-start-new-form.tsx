import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { v4 as uuidv4 } from "uuid";

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

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { ProjectStartNewFormFormikTextarea } from "./components";
import { PROJECT_START_NEW } from "./gql";

type ProjectNameType = {
  projectName: string;
};

type ProjectDetailsType = {
  projectDetails: string;
};

type ProjectStartNewFormType = ProjectNameType & ProjectDetailsType;

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
  const [newProjectGuid, setNewProjectGuid] = useState<string | null>();

  const [projectStart] = useMutation(PROJECT_START_NEW, {
    onCompleted: () => {
      navigate(
        `/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${newProjectGuid}${routeConstantsCleavedApp.projectBoard.route}`
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
              projectId: newProjectGuid,
              // projectDetails: values.projectDetails,
            },
          });

          resetForm({});
        }}
        validateOnChange
        validationSchema={yup.object().shape<Record<keyof ProjectNameType, yup.AnySchema>>({
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
                  {t("cancel")}
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
