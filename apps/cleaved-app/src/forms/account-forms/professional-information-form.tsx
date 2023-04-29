import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, FONT_SIZES, HeadingWrapper, RADIUS, SectionHeader, SPACING, SPACING_PX } from "@cleaved/ui";

import { AccountContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { ProfessionalInformationFormFormikTextarea } from "./components";
import { SET_ACCOUNT_EMAIL_MUTATION, SET_JOB_TITLE_MUTATION, SET_PROFESSIONAL_ABOUT_MUTATION } from "./gql";
import { StyledFormikAutoSave } from "./styled-formik-auto-save";

type ProfesionalInformationFormType = {
  about?: string;
  accountEmail?: string;
  jobTitle?: string;
};

const StyledFormWrapper = styled.div``;

const StyledField = styled(Field)`
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  font-size: ${FONT_SIZES.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
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

export const ProfesionalInformationForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { accountData, accountDataRefetch } = useContext(AccountContext);

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
      if (accountDataRefetch) {
        accountDataRefetch();
      }
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  const [setProfessionalAbout] = useMutation(SET_PROFESSIONAL_ABOUT_MUTATION, {
    onError: (error) => {
      logQueryError(error);
    },
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{
        about: accountData?.professionals[0].about || "",
        accountEmail: accountData?.emailAddress || "",
        jobTitle: accountData?.professionals[0].jobTitle || "",
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
            newTitle: values.jobTitle ? values.jobTitle : "",
            professionalId: accountData?.professionals[0].id ? accountData?.professionals[0].id : "",
          },
        });

        setProfessionalAbout({
          variables: {
            newAbout: values.about ? values.about : "",
            professionalId: accountData?.professionals[0].id ? accountData?.professionals[0].id : "",
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
      {() => {
        return (
          <>
            <HeadingWrapper>
              <SectionHeader>{t("hTags.professionalInformation")}</SectionHeader>
              <StyledFormikAutoSave />
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
              </Form>
            </StyledFormWrapper>
          </>
        );
      }}
    </Formik>
  );
};
