import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { HeadingWrapper, SectionHeader, Spinner } from "@cleaved/ui";

import {
  inputFieldStyles,
  StyledProjectFormLabel,
  StyledProjectFormWrapper,
  StyledSubmitButton,
} from "../../components";
import { useFindMyAccount, useTranslator } from "../../hooks";

import { ProfessionalInformationFormFormikTextarea } from "./components";
import { SET_JOB_TITLE_MUTATION, SET_ABOUT_MUTATION, SET_GOALS_MUTATION } from "./gql";

type ProfesionalInformationFormType = {
  about?: string;
  goals?: string;
  jobTitle?: string;
};

const StyledFormWrapper = styled.div``;

const StyledField = styled(Field)`
  ${inputFieldStyles}
`;

export const ProfesionalInformationForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { findMyAccountData, findMyAccountDataRefetch } = useFindMyAccount();

  const professionalTitlePlaceholder = t("formLabels.professionalTitlePlaceholder")
    ? t("formLabels.professionalTitlePlaceholder")
    : undefined;

  const [setJobTitle] = useMutation(SET_JOB_TITLE_MUTATION, {
    onCompleted: () => {
      if (findMyAccountDataRefetch) {
        findMyAccountDataRefetch();
      }
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  const [setAbout] = useMutation(SET_ABOUT_MUTATION, {
    onError: (error) => {
      logQueryError(error);
    },
  });

  const [setGoals] = useMutation(SET_GOALS_MUTATION, {
    onError: (error) => {
      logQueryError(error);
    },
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{
        about: findMyAccountData?.about || "",
        goals: findMyAccountData?.goals || "",
        jobTitle: findMyAccountData?.jobTitle || "",
      }}
      onSubmit={(values: ProfesionalInformationFormType, { resetForm, setSubmitting }) => {
        setSubmitting(false);

        setJobTitle({
          variables: {
            jobTitle: values.jobTitle ? values.jobTitle : "",
          },
        });

        setAbout({
          variables: {
            about: values.about ? values.about : "",
          },
        });

        setGoals({
          variables: {
            goals: values.goals ? values.goals : "",
          },
        });

        resetForm({ values });
      }}
      validationSchema={yup.object().shape<Record<keyof ProfesionalInformationFormType, yup.AnySchema>>({
        about: yup.string(),
        goals: yup.string(),
        jobTitle: yup.string(),
      })}
    >
      {({ dirty, isSubmitting, isValid }) => {
        return (
          <>
            <HeadingWrapper>
              <SectionHeader>{t("hTags.professionalInformation")}</SectionHeader>
            </HeadingWrapper>

            <StyledFormWrapper>
              <Form>
                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="jobTitle">
                    {t("formLabels.professionalTitle")}
                  </StyledProjectFormLabel>

                  <StyledField id="jobTitle" name="jobTitle" placeholder={professionalTitlePlaceholder} />
                </StyledProjectFormWrapper>

                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="about">{t("formLabels.about")}</StyledProjectFormLabel>

                  <ProfessionalInformationFormFormikTextarea
                    name="about"
                    placeholder={t("formLabels.aboutPlaceholder")}
                  />
                </StyledProjectFormWrapper>

                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="goals">{t("formLabels.goals")}</StyledProjectFormLabel>

                  <ProfessionalInformationFormFormikTextarea
                    name="goals"
                    placeholder={t("formLabels.goalsPlaceholder")}
                  />
                </StyledProjectFormWrapper>

                <StyledProjectFormWrapper>
                  <StyledSubmitButton disabled={!(isValid && dirty) || isSubmitting} type="submit">
                    {isSubmitting ? t("pleaseWaitDots") : t("account.save")}
                    <Spinner visible={isSubmitting} />
                  </StyledSubmitButton>
                </StyledProjectFormWrapper>
              </Form>
            </StyledFormWrapper>
          </>
        );
      }}
    </Formik>
  );
};
