import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { v4 as uuidv4 } from "uuid";

import { logError, logQueryError, RollbarLogLevels } from "@cleaved/helpers";
import { BORDERS, ButtonPrimary, FONT_SIZES, RADIUS, SPACING, SPACING_PX, Spinner } from "@cleaved/ui";

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

export const OnboardingOrganizationRegisterForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { setPreferredOrgIdOnContext } = useContext(authTokenContext);
  const logEvent = useProductEngagementLogEvent();
  const [newOrganizationGuid, setNewOrganizationGuid] = useState<string | null>();

  const [registerOrganization, { loading, error }] = useMutation(REGISTER_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      logEvent("REGISTER_ORGANIZATION");
      setPreferredOrgIdOnContext(newOrganizationGuid);
      navigate(
        `${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingCreateFirstProject.route}`
      );
    },
  });

  useEffect(() => {
    if (loading) {
      return;
    }

    if (error) {
      logQueryError(error);
      return;
    }
  }, [loading, error]);

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
                    autoFocus={true}
                    id="organization"
                    name="organization"
                    placeholder={t("organizations.organizationNamePlaceholder")}
                  />
                </StyledProjectFormWrapper>

                <StyledButtonPrimaryWrapper>
                  <StyledPostButton disabled={!(isValid && dirty) || isSubmitting} type="submit">
                    {isSubmitting ? t("pleaseWaitDots") : t("organizations.organizationRegister")}
                    <Spinner visible={isSubmitting} />
                  </StyledPostButton>
                </StyledButtonPrimaryWrapper>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};
