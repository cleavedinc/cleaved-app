import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { routeConstantsShared } from "@cleaved/helpers";
import { Box } from "@cleaved/ui";

const StyledAgreementLink = styled(Link)``;

export const AccountMembershipDataWrapper: FunctionComponent = () => {
  return (
    <Box>
      membership
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
    </Box>
  );
};
