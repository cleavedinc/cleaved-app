import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { routeConstantsCleavedApp } from "../../router";

const StyledMembershipLink = styled(Link)``;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const AccountMembershipPlan: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);

  return (
    <StyledBox>
      Here is your plan (or) go sign up for a membership.{" "}
      <StyledMembershipLink
        to={`/${preferredOrgId}${routeConstantsCleavedApp.accountMembership.route}`}
        title={"Membership Plans"}
      >
        Membership plans
      </StyledMembershipLink>
    </StyledBox>
  );
};
