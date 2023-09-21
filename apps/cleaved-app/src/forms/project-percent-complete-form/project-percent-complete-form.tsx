import React, { FunctionComponent, useContext, useState } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { ButtonPrimary, ButtonLink, FONT_SIZES, SPACING_PX, Spinner } from "@cleaved/ui";

import { RangeSlider } from "../../components";
import { authTokenContext } from "../../contexts";
import { useProjectById, useTranslator } from "../../hooks";

import { PROJECT_SET_PROGRESS } from "./gql";

type ProjectProgressFormType = {
  percentComplete: number;
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

export const ProjectPercentCompleteForm: FunctionComponent<ProjectFormProps> = (props) => {
  const { projectId } = props;
  const { t } = useTranslator();
  const { preferredOrgId } = useContext(authTokenContext);
  // const logEvent = useProductEngagementLogEvent();
  const projectData = useProjectById(projectId);
  const [percentCompleteState, setPercentCompleteState] = useState(75);

  const [setPercentComplete] = useMutation(PROJECT_SET_PROGRESS, {
    onCompleted: (data2) => {
      console.log("data2", data2);

      if (projectData && projectData.projectByIdDataRefetch) {
        projectData.projectByIdDataRefetch();
      }
    },
    onError: (error) => {
      console.log("error", error);
      logQueryError(error);
    },
  });

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          percentComplete: projectData.projectByIdData?.percentComplete ?? 0,
        }}
        onSubmit={(values: ProjectProgressFormType, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          if (projectId) {
            setPercentComplete({
              variables: {
                projectId,
                organizationId: preferredOrgId,
                percentComplete: values.percentComplete,
              },
            });
          }

          resetForm({});
        }}
        validateOnChange
        validationSchema={yup.object().shape<Record<keyof ProjectProgressFormType, yup.AnySchema>>({
          percentComplete: yup.number().required(),
        })}
      >
        {({ dirty, isSubmitting, isValid }) => {
          return (
            <Form>
              <StyledProjectFormWrapper>
                <StyledProjectFormLabel htmlFor="percentComplete">{"percentComplete label"}</StyledProjectFormLabel>

                <RangeSlider
                  defaultValue={percentCompleteState}
                  name="percentComplete"
                  onChange={(newValue) => setPercentCompleteState(newValue)}
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
