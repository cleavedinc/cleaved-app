import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, ButtonPrimary, FONT_SIZES, mediaQueries, RADIUS, SPACING, SPACING_PX, Spinner } from "@cleaved/ui";

import { EditAccountAvatar } from "../../components";
import { useFindMyAccount, useTranslator } from "../../hooks";

import { UPDATE_ACCOUNT_MUTATION } from "./gql";

type PersonalInformationFormType = {
  firstName?: string;
  lastName?: string;
};

const StyledAvatarNameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.XS_LANDSCAPE} {
    flex-direction: row;
  }
`;

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

const StyledFirstLastNameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.XS_LANDSCAPE} {
    width: 100%;
  }
`;

const StyledFormWrapper = styled.div``;

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

export const PersonalInformationForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { findMyAccountData, findMyAccountDataRefetch } = useFindMyAccount();

  const firstNameIsRequired = t("formValidationMessages.firstNameIsRequired")
    ? t("formValidationMessages.firstNameIsRequired")
    : undefined;

  const lastNameIsRequired = t("formValidationMessages.lastNameIsRequired")
    ? t("formValidationMessages.lastNameIsRequired")
    : undefined;

  const firstNamePlaceholder = t("formLabels.firstNamePlaceholder") ? t("formLabels.firstNamePlaceholder") : undefined;

  const lastNamePlaceholder = t("formLabels.lastNamePlaceholder") ? t("formLabels.lastNamePlaceholder") : undefined;

  const [updateAccount] = useMutation(UPDATE_ACCOUNT_MUTATION, {
    onCompleted: () => {
      if (findMyAccountDataRefetch) {
        findMyAccountDataRefetch();
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
        firstName: findMyAccountData?.firstName ?? "",
        lastName: findMyAccountData?.lastName ?? "",
      }}
      onSubmit={(values: PersonalInformationFormType, { resetForm, setSubmitting }) => {
        setSubmitting(false);
        updateAccount({
          variables: {
            firstName: values.firstName,
            lastName: values.lastName,
          },
        });
        resetForm({ values });
      }}
      validationSchema={yup.object().shape<Record<keyof PersonalInformationFormType, yup.AnySchema>>({
        firstName: yup.string().required(firstNameIsRequired),
        lastName: yup.string().required(lastNameIsRequired),
      })}
    >
      {({ dirty, isSubmitting, isValid }) => {
        return (
          <>
            <StyledFormWrapper>
              <StyledAvatarNameWrapper>
                <EditAccountAvatar account={findMyAccountData} refetchAccountData={findMyAccountDataRefetch} />

                {/* Only add form elements within the Form wrapper, or it will break safari form submission */}
                <Form>
                  <StyledFirstLastNameWrapper>
                    <StyledProjectFormWrapper>
                      <StyledProjectFormLabel htmlFor="firstName">{t("formLabels.firstName")}</StyledProjectFormLabel>

                      <StyledField id="firstName" name="firstName" placeholder={firstNamePlaceholder} />
                    </StyledProjectFormWrapper>

                    <StyledProjectFormWrapper>
                      <StyledProjectFormLabel htmlFor="lastName">{t("formLabels.lastName")}</StyledProjectFormLabel>

                      <StyledField id="lastName" name="lastName" placeholder={lastNamePlaceholder} />
                    </StyledProjectFormWrapper>

                    <StyledSubmitButton disabled={!(isValid && dirty) || isSubmitting} type="submit">
                      {isSubmitting ? t("pleaseWaitDots") : t("account.save")}
                      <Spinner visible={isSubmitting} />
                    </StyledSubmitButton>
                  </StyledFirstLastNameWrapper>
                </Form>
              </StyledAvatarNameWrapper>
            </StyledFormWrapper>
          </>
        );
      }}
    </Formik>
  );
};
