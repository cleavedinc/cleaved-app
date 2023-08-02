import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { routeConstantsShared } from "@cleaved/helpers";
import { Box } from "@cleaved/ui";

const StyledAgreementLink = styled(Link)``;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const AccountLegalLinks: FunctionComponent = () => {
  return (
    <StyledBox>
      <StyledAgreementLink
        to={routeConstantsShared.privacyPolicy.route}
        title={routeConstantsShared.privacyPolicy.name}
      >
        {routeConstantsShared.privacyPolicy.name}
      </StyledAgreementLink>
      <StyledAgreementLink
        to={routeConstantsShared.termsOfService.route}
        title={routeConstantsShared.termsOfService.name}
      >
        {routeConstantsShared.termsOfService.name}
      </StyledAgreementLink>
    </StyledBox>
  );
};
