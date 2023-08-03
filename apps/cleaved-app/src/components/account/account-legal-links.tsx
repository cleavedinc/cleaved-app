import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { routeConstantsShared } from "@cleaved/helpers";
import { Box } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

const StyledAgreementLink = styled(Link)``;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const AccountLegalLinks: FunctionComponent = () => {
  const { t } = useTranslator();

  const privacyPolicy = t("privacyPolicy") ? t("privacyPolicy") : "";
  const termsOfService = t("termsOfService.termsOfService") ? t("termsOfService.termsOfService") : "";

  return (
    <StyledBox>
      <StyledAgreementLink to={routeConstantsShared.privacyPolicy.route} title={privacyPolicy}>
        {privacyPolicy}
      </StyledAgreementLink>
      <StyledAgreementLink to={routeConstantsShared.termsOfService.route} title={termsOfService}>
        {termsOfService}
      </StyledAgreementLink>
    </StyledBox>
  );
};
