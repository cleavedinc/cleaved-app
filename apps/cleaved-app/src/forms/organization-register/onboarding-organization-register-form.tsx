import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { v4 as uuidv4 } from "uuid";

import { logError, logQueryError, RollbarLogLevels } from "@cleaved/helpers";
import { Spinner } from "@cleaved/ui";

import {
  inputFieldStyles,
  StyledProjectFormLabel,
  StyledProjectFormWrapper,
  StyledSubmitButton,
} from "../../components";
import { authTokenContext } from "../../contexts";
import { useProductEngagementLogEvent, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { REGISTER_ORGANIZATION_MUTATION } from "./gql";

type OnboardingOrganizationRegisterFormType = {
  organization: string;
};

const StyledButtonPrimaryWrapper = styled.div`
  display: flex;
`;

const StyledField = styled(Field)`
  ${inputFieldStyles}
`;

export const OnboardingOrganizationRegisterForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { setPreferredOrgIdOnContext, saveAccessToken } = useContext(authTokenContext);
  const logEvent = useProductEngagementLogEvent();
  const [newOrganizationGuid, setNewOrganizationGuid] = useState<string | null>();

  const [registerOrganization, { loading, error, called, data }] = useMutation(REGISTER_ORGANIZATION_MUTATION, {});

  useEffect(() => {
    if (loading || !called) {
      return;
    }

    if (error) {
      logQueryError(error);
      return;
    }

    if (data?.registerOrganization) {
      logEvent("REGISTER_ORGANIZATION");
      setPreferredOrgIdOnContext(newOrganizationGuid);
      saveAccessToken(data.registerOrganization, () =>
        navigate(
          `${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingCreateFirstProject.route}`
        )
      );
    }
  }, [loading, error, called, data, saveAccessToken, newOrganizationGuid, logEvent, setPreferredOrgIdOnContext]);

  useEffect(() => {
    const newGuid = uuidv4();
    setNewOrganizationGuid(newGuid);
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          organization: "",
        }}
        onSubmit={(values: OnboardingOrganizationRegisterFormType, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          if (newOrganizationGuid) {
            registerOrganization({
              variables: {
                organizationId: newOrganizationGuid,
                name: values.organization,
              },
            });
          } else {
            logError(RollbarLogLevels.error, "registerOrganization no GUID present");
          }

          resetForm({});
        }}
        validateOnChange
        validationSchema={yup.object().shape<Record<keyof OnboardingOrganizationRegisterFormType, yup.AnySchema>>({
          organization: yup.string().required(),
        })}
      >
        {({ dirty, isSubmitting, isValid }) => {
          return (
            <>
              <Form>
                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="organization">
                    {t("organizations.organizationNamePlaceholder")}
                  </StyledProjectFormLabel>

                  <StyledField
                    id="organization"
                    name="organization"
                    placeholder={t("organizations.organizationNamePlaceholder")}
                  />
                </StyledProjectFormWrapper>

                <StyledButtonPrimaryWrapper>
                  <StyledSubmitButton disabled={!(isValid && dirty) || isSubmitting} type="submit">
                    {isSubmitting ? t("pleaseWaitDots") : t("organizations.organizationRegister")}
                    <Spinner visible={isSubmitting} />
                  </StyledSubmitButton>
                </StyledButtonPrimaryWrapper>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};
