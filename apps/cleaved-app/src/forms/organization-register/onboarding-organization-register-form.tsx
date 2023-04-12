import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { v4 as uuidv4 } from "uuid";

import { logError, logQueryError, RollbarLogLevels } from "@cleaved/helpers";
import { BORDERS, ButtonPrimary, COLORS, FONT_SIZES, RADIUS, SPACING, SPACING_PX, Spinner } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { REGISTER_ORGANIZATION_MUTATION } from "./gql";

type OnboardingOrganizationRegisterFormType = {
  organizationName: string;
};

const StyledButtonPrimaryWrapper = styled.div`
  display: flex;
`;

const StyledField = styled(Field)`
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.MEDIUM};
  font-size: ${FONT_SIZES.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
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
  color: ${COLORS.GRAY_500};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING_PX.ONE};
`;

export const OnboardingOrganizationRegisterForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { refreshLogin } = useContext(authTokenContext);
  const [newOrganizationGuid, setNewOrganizationGuid] = useState<string | null>();

  const [registerOrganization] = useMutation(REGISTER_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      refreshLogin();
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  useEffect(() => {
    const newGuid = uuidv4();
    setNewOrganizationGuid(newGuid);
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          organizationName: "",
        }}
        onSubmit={(values: OnboardingOrganizationRegisterFormType, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          if (newOrganizationGuid) {
            registerOrganization({
              variables: {
                organizationId: newOrganizationGuid,
                name: values.organizationName,
              },
            });
          } else {
            logError(RollbarLogLevels.error, "registerOrganization no GUID present");
          }

          resetForm({});
        }}
        validateOnChange
        validationSchema={yup.object().shape<Record<keyof OnboardingOrganizationRegisterFormType, yup.AnySchema>>({
          organizationName: yup.string().required(),
        })}
      >
        {({ dirty, isSubmitting, isValid }) => {
          return (
            <>
              <Form>
                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="organizationName">
                    {t("organizations.organizationNamePlaceholder")}
                  </StyledProjectFormLabel>

                  <StyledField
                    autoFocus={true}
                    id="organizationName"
                    name="organizationName"
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
