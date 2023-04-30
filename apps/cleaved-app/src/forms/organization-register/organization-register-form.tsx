import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, ButtonLink, ButtonPrimary, FONT_SIZES, RADIUS, SPACING, SPACING_PX, Spinner } from "@cleaved/ui";

import { OrganizationMembershipsContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { REGISTER_ORGANIZATION_MUTATION } from "./gql";

type OrganizationRegisterFormType = {
  organizationName: string;
};

const StyledButtonLink = styled(ButtonLink)`
  color: ${({ theme }) => theme.colors.baseButtonLink_color};
`;

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

export const OrganizationRegisterForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { organizationMembershipsDataRefetch } = useContext(OrganizationMembershipsContext);

  const [registerOrganization] = useMutation(REGISTER_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      if (organizationMembershipsDataRefetch) {
        organizationMembershipsDataRefetch();
      }

      navigate(-1);
    },

    onError: (error) => {
      logQueryError(error);
    },
  });

  return (
    <>
      <Formik
        initialValues={{
          organizationName: "",
        }}
        onSubmit={(values: OrganizationRegisterFormType, { resetForm, setSubmitting }) => {
          setSubmitting(false);

          registerOrganization({
            variables: {
              organizationId: uuidv4(),
              name: values.organizationName,
            },
          });

          resetForm({});
        }}
        validateOnChange
        validationSchema={yup.object().shape<Record<keyof OrganizationRegisterFormType, yup.AnySchema>>({
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
                  <StyledButtonLink onClick={() => navigate(-1)} type="button">
                    {t("cancel")}
                  </StyledButtonLink>

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
