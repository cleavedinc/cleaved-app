import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { HeadingWrapper, mediaQueries, SectionHeader, Spinner } from "@cleaved/ui";

import {
  EditAccountAvatar,
  inputFieldStyles,
  StyledProjectFormLabel,
  StyledProjectFormWrapper,
  StyledSubmitButton,
} from "../../components";
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
  ${inputFieldStyles}
`;

const StyledFirstLastNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${mediaQueries.XS_LANDSCAPE} {
    width: 100%;
  }
`;

const StyledFormWrapper = styled.div``;

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
            <HeadingWrapper>
              <SectionHeader>{t("hTags.profile")}</SectionHeader>
            </HeadingWrapper>

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
