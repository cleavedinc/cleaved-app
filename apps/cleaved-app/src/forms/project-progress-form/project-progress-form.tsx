import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { ButtonPrimary, ButtonLink, FONT_SIZES, SPACING_PX, Spinner } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useProjectById, useTranslator } from "../../hooks";

// import { PROJECT_SET_PROGRESS } from "./gql";

type ProjectProgressFormType = {
  progress: number;
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

export const ProjectProgressForm: FunctionComponent<ProjectFormProps> = (props) => {
  const { projectId } = props;
  const { t } = useTranslator();
  const { preferredOrgId } = useContext(authTokenContext);
  // const logEvent = useProductEngagementLogEvent();
  const projectData = useProjectById(projectId);

  // const [setProgress] = useMutation(PROJECT_SET_PROGRESS, {
  //   onCompleted: (data2) => {
  //     console.log("data2", data2);

  //     if (projectData && projectData.projectByIdDataRefetch) {
  //       projectData.projectByIdDataRefetch();
  //     }
  //   },
  //   onError: (error) => {
  //     console.log("error", error);
  //     logQueryError(error);
  //   },
  // });

  return (
    <>
      {/* <Formik
        enableReinitialize
        initialValues={{
          progress: projectData.projectByIdData?.progress ?? 0,
        }}
        onSubmit={(values: ProjectProgressFormType, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          if (projectId) {
            setProgress({
              variables: {
                projectId,
                organizationId: preferredOrgId,
                progress: values.progress,
              },
            });
          }

          resetForm({});
        }}
        validateOnChange
        validationSchema={yup.object().shape<Record<keyof ProjectProgressFormType, yup.AnySchema>>({
          progress: yup.number().required(),
        })}
      >
        {({ dirty, isSubmitting, isValid }) => {
          return (
            <Form>
              <StyledProjectFormWrapper>
                <StyledProjectFormLabel htmlFor="progress">{"progress label"}</StyledProjectFormLabel>

                <div>range slider</div>
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
      </Formik> */}
    </>
  );
};
