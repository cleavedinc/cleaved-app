import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import {
  BORDERS,
  ButtonPrimary,
  FONT_SIZES,
  HeadingWrapper,
  RADIUS,
  SectionHeader,
  SPACING,
  SPACING_PX,
  Spinner,
} from "@cleaved/ui";

import { useFindMyAccount, useTranslator } from "../../hooks";

import { ProfessionalInformationFormFormikTextarea } from "./components";
import { SET_ACCOUNT_EMAIL_MUTATION, SET_JOB_TITLE_MUTATION, SET_ABOUT_MUTATION } from "./gql";

type ProfesionalInformationFormType = {
  about?: string;
  accountEmail?: string;
  jobTitle?: string;
};

const StyledFormWrapper = styled.div``;

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

const StyledProjectFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledProjectFormLabel = styled.label`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING_PX.ONE};
`;

const StyledSubmitButton = styled(ButtonPrimary)`
  font-size: ${FONT_SIZES.MEDIUM};
  margin-left: auto;
  margin-top: ${SPACING_PX.ONE};
`;

export const ProfesionalInformationForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const accountQuery = useFindMyAccount();

  const professionalTitlePlaceholder = t("formLabels.professionalTitlePlaceholder")
    ? t("formLabels.professionalTitlePlaceholder")
    : undefined;

  const professionalEmailPlaceholder = t("formLabels.professionalEmailPlaceholder")
    ? t("formLabels.professionalEmailPlaceholder")
    : undefined;

  const aboutProfessionalCharactorLimit = t("formValidationMessages.aboutProfessionalCharactorLimit")
    ? t("formValidationMessages.aboutProfessionalCharactorLimit")
    : undefined;

  const youMustHaveAValidEmailAddress = t("formValidationMessages.youMustHaveAValidEmailAddress")
    ? t("formValidationMessages.youMustHaveAValidEmailAddress")
    : undefined;

  const [setAccountEmail] = useMutation(SET_ACCOUNT_EMAIL_MUTATION, {
    onError: (error) => {
      logQueryError(error);
    },
  });

  const [setJobTitle] = useMutation(SET_JOB_TITLE_MUTATION, {
    onCompleted: () => {
      accountQuery.refetch();
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

  return (
    <Formik
      enableReinitialize
      initialValues={{
        about: accountQuery.data?.findMyAccount.about || "",
        accountEmail: accountQuery.data?.findMyAccount.emailAddress || "",
        jobTitle: accountQuery.data?.findMyAccount.jobTitle || "",
      }}
      onSubmit={(values: ProfesionalInformationFormType, { resetForm, setSubmitting }) => {
        setSubmitting(false);

        setAccountEmail({
          variables: {
            newEmail: values.accountEmail ? values.accountEmail : "",
          },
        });

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

        resetForm({ values });
      }}
      validationSchema={yup.object().shape<Record<keyof ProfesionalInformationFormType, yup.AnySchema>>({
        about: yup.string().max(250, aboutProfessionalCharactorLimit),
        accountEmail: yup.string().email(youMustHaveAValidEmailAddress),
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
                  <StyledProjectFormLabel htmlFor="accountEmail">
                    {t("formLabels.professionalEmail")}
                  </StyledProjectFormLabel>

                  <StyledField id="accountEmail" name="accountEmail" placeholder={professionalEmailPlaceholder} />
                </StyledProjectFormWrapper>

                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="about">{t("formLabels.about")}</StyledProjectFormLabel>

                  <ProfessionalInformationFormFormikTextarea
                    name="about"
                    placeholder={t("formLabels.aboutPlaceholder")}
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
