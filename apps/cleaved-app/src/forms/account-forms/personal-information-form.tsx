import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import {
  BORDERS,
  COLORS,
  FONT_SIZES,
  HeadingWrapper,
  mediaQueries,
  RADIUS,
  SectionHeader,
  SPACING,
  SPACING_PX,
} from "@cleaved/ui";

import { EditAccountAvatar } from "../../components";
import { AccountContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { UPDATE_ACCOUNT_MUTATION } from "./gql";
import { StyledFormikAutoSave } from "./styled-formik-auto-save";

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
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.MEDIUM};
  font-size: ${FONT_SIZES.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
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
      {() => {
        return (
          <>
            <HeadingWrapper>
              <SectionHeader>{t("hTags.personalInformation")}</SectionHeader>
              <StyledFormikAutoSave />
            </HeadingWrapper>

            <StyledFormWrapper>
              <Form>
                <StyledAvatarNameWrapper>
                  <EditAccountAvatar account={accountData} refetchAccountData={accountDataRefetch} />

                  <StyledFirstLastNameWrapper>
                    <StyledProjectFormWrapper>
                      <StyledProjectFormLabel htmlFor="firstName">{t("formLabels.firstName")}</StyledProjectFormLabel>

                      <StyledField id="firstName" name="firstName" placeholder={firstNamePlaceholder} />
                    </StyledProjectFormWrapper>

                    <StyledProjectFormWrapper>
                      <StyledProjectFormLabel htmlFor="lastName">{t("formLabels.lastName")}</StyledProjectFormLabel>

                      <StyledField id="lastName" name="lastName" placeholder={lastNamePlaceholder} />
                    </StyledProjectFormWrapper>
                  </StyledFirstLastNameWrapper>
                </StyledAvatarNameWrapper>
              </Form>
            </StyledFormWrapper>
          </>
        );
      }}
    </Formik>
  );
};
