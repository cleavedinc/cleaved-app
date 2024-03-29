import React, { FunctionComponent, useContext, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";

import { logQueryError } from "@cleaved/helpers";
import { ButtonPrimary, SPACING_PX } from "@cleaved/ui";

import { navigate } from "@reach/router";
import { useTranslator } from "../../hooks";

import { ACCEPT_TERMS_MUTATION } from "./gql/accept-terms";
import { authTokenContext } from "../../contexts";
import { routeConstantsCleavedApp } from "../../router";

const StyledButtonPrimary = styled(ButtonPrimary)`
  margin-left: auto;
`;

const StyledButtonPrimaryWrapper = styled.div`
  display: flex;
  margin-top: ${SPACING_PX.TWO};
`;

const StyledTermsOfServiceForm = styled.div`
  width: 100%;
`;

const StyledCheckboxField = styled(Field)`
  margin-right: ${SPACING_PX.TWO};
`;

const StyledCheckboxLabel = styled.label``;

export const TermsOfServiceAgreementForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { preferredOrgId, saveAccessToken } = useContext(authTokenContext);

  const [acceptTerms, { data, loading, error }] = useMutation(ACCEPT_TERMS_MUTATION);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (error) {
      logQueryError(error);
      return;
    }

    if (data) {
      saveAccessToken(data.acceptTerms, () => navigate(routeConstantsCleavedApp.homeRouting.route));
    }
  }, [data, error, loading, preferredOrgId, saveAccessToken]);

  const acceptTermsOfServiceIsRequired = t("termsOfService.acceptTermsOfServiceIsRequired")
    ? t("termsOfService.acceptTermsOfServiceIsRequired")
    : undefined;

  return (
    <StyledTermsOfServiceForm>
      <Formik
        initialValues={{
          acceptTerms: false,
        }}
        validationSchema={yup.object().shape({
          acceptTerms: yup.bool().oneOf([true], acceptTermsOfServiceIsRequired),
        })}
        onSubmit={() => {
          acceptTerms();
        }}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form>
            {/* eslint-disable-next-line */}
            <StyledCheckboxLabel htmlFor="acceptTerms">
              <StyledCheckboxField type="checkbox" name="acceptTerms" id="acceptTerms" />
              {t("termsOfService.acceptTermsOfService")}
            </StyledCheckboxLabel>

            <StyledButtonPrimaryWrapper>
              <StyledButtonPrimary disabled={!(isValid && dirty) || isSubmitting} type="submit">
                {t("submit")}
              </StyledButtonPrimary>
            </StyledButtonPrimaryWrapper>
          </Form>
        )}
      </Formik>
    </StyledTermsOfServiceForm>
  );
};
