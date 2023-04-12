import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, COLORS, FONT_SIZES, HeadingWrapper, RADIUS, SectionHeader, SPACING, SPACING_PX } from "@cleaved/ui";

import { AccountContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { UPDATE_ACCOUNT_MUTATION } from "./gql";
import { StyledFormikAutoSave } from "./styled-formik-auto-save";

type PersonalInformationFormType = {
  firstName?: string;
  lastName?: string;
  middleName?: string;
};

const StyledFormWrapper = styled.div``;

const StyledField = styled(Field)`
  border: ${BORDERS.BORDER_PRIMARY};
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
  color: ${COLORS.GRAY_500};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING_PX.ONE};
`;

export const PersonalInformationForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { accountData, accountDataRefetch } = useContext(AccountContext);

  const firstNameIsRequired = t("formValidationMessages.firstNameIsRequired")
    ? t("formValidationMessages.firstNameIsRequired")
    : undefined;

  const lastNameIsRequired = t("formValidationMessages.lastNameIsRequired")
    ? t("formValidationMessages.lastNameIsRequired")
    : undefined;

  const firstNamePlaceholder = t("formLabels.firstNamePlaceholder") ? t("formLabels.firstNamePlaceholder") : undefined;

  const middleNamePlaceholder = t("formLabels.middleNamePlaceholder")
    ? t("formLabels.middleNamePlaceholder")
    : undefined;

  const lastNamePlaceholder = t("formLabels.lastNamePlaceholder") ? t("formLabels.lastNamePlaceholder") : undefined;

  const [updateAccount] = useMutation(UPDATE_ACCOUNT_MUTATION, {
    onCompleted: () => {
      if (accountDataRefetch) {
        accountDataRefetch();
      }
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{
        firstName: accountData?.firstName || "",
        lastName: accountData?.lastName || "",
        middleName: accountData?.middleName || "",
      }}
      onSubmit={(values: PersonalInformationFormType, { resetForm, setSubmitting }) => {
        setSubmitting(false);
        updateAccount({
          variables: {
            firstName: values.firstName,
            lastName: values.lastName,
            middleName: values.middleName,
          },
        });
        resetForm({ values });
      }}
      validationSchema={yup.object().shape<Record<keyof PersonalInformationFormType, yup.AnySchema>>({
        firstName: yup.string().required(firstNameIsRequired),
        lastName: yup.string().required(lastNameIsRequired),
        middleName: yup.string(),
      })}
    >
      {() => {
        return (
          <>
            <HeadingWrapper>
              <SectionHeader>{t("hTags.personalInformation")}</SectionHeader>
              <StyledFormikAutoSave />
            </HeadingWrapper>

            <StyledFormWrapper>
              <Form>
                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="firstName">{t("formLabels.firstName")}</StyledProjectFormLabel>

                  <StyledField id="firstName" name="firstName" placeholder={firstNamePlaceholder} />
                </StyledProjectFormWrapper>

                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="middleName">{t("formLabels.middleName")}</StyledProjectFormLabel>

                  <StyledField id="middleName" name="middleName" placeholder={middleNamePlaceholder} />
                </StyledProjectFormWrapper>

                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="lastName">{t("formLabels.lastName")}</StyledProjectFormLabel>

                  <StyledField id="lastName" name="lastName" placeholder={lastNamePlaceholder} />
                </StyledProjectFormWrapper>
              </Form>
            </StyledFormWrapper>
          </>
        );
      }}
    </Formik>
  );
};
