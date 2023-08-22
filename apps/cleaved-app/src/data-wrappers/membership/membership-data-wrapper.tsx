import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, HeadingWrapper, SectionHeader } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { routeConstantsCleavedApp } from "../../router";
// import { useTranslator } from "../../hooks";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const MembershipDataWrapper: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  //   const { t } = useTranslator();

  return (
    <StyledBox>
      <HeadingWrapper>
        <SectionHeader>TEMP: membership plans listed here (with organization plan highlighted)</SectionHeader>
      </HeadingWrapper>

      <div> Free forever plan (selected if org has no membership plan</div>

      <div>-</div>

      <Link
        to={`/${preferredOrgId}${routeConstantsCleavedApp.checkout.route}/:tempStarterProductId`}
        title={"temp link to checkout with starter plan productId querystring param"}
      >
        temp link to checkout with starter plan productId querystring param
      </Link>
    </StyledBox>
  );
};
