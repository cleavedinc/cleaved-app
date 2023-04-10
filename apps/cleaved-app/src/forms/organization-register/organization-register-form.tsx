import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

import { logQueryError } from "@cleaved/helpers";
import {
  BORDERS,
  ButtonLink,
  ButtonPrimary,
  COLORS,
  FONT_SIZES,
  RADIUS,
  SPACING,
  SPACING_PX,
  Spinner,
} from "@cleaved/ui";

import { OrganizationMembershipsContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { REGISTER_ORGANIZATION_MUTATION } from "./gql";

type OrganizationRegisterFormType = {
  organizationName: string;
};

const StyledButtonLink = styled(ButtonLink)`
  color: ${COLORS.GRAY_500};
`;

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
        validationSchema={yup.object().shape<any>({
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
                  <StyledButtonLink onClick={() => navigate(-1)}>Cancel</StyledButtonLink>

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
