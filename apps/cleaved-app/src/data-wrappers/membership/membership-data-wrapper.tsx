import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, HeadingWrapper, SectionHeader } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { routeConstantsCleavedApp } from "../../router";
import { useTranslator } from "../../hooks";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const MembershipDataWrapper: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const { t } = useTranslator();

  return (
    <StyledBox>
      <HeadingWrapper>
        <SectionHeader>{t("membership.membershipDetails")}</SectionHeader>
      </HeadingWrapper>
      temp: organizations current subscription. last payment, other data that may be useful???
      <Link
        to={`/${preferredOrgId}${routeConstantsCleavedApp.membershipPlans.route}`}
        title={t("membership.changeMembership")}
      >
        {t("membership.changeMembership")}
      </Link>
    </StyledBox>
  );
};
