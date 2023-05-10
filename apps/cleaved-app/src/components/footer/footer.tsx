import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { mediaQueries, SPACING, SPACING_PX, WrapperOneHalf } from "@cleaved/ui";

import { routeConstantsShared } from "@cleaved/helpers";
import { useTranslator } from "../../hooks";

const StyledFooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  display: flex;
  flex: 0 1 auto;

  ${mediaQueries.SM} {
    padding: ${SPACING.MEDIUM};
  }
`;

const StyledCopyrightWrapper = styled.div``;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.baseTextLink_color};

  :not(:last-child) {
    margin-right: ${SPACING_PX.THREE};
  }

  &:hover {
    text-decoration: underline;
  }
`;

const StyledWrapperOneHalf = styled(WrapperOneHalf)`
  margin: 0;
  padding: 0;
`;

const StyledWrapperOneHalfRight = styled(WrapperOneHalf)`
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;

export const Footer: FunctionComponent = () => {
  const { t } = useTranslator();
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooterWrapper>
      <StyledWrapperOneHalf>
        <StyledCopyrightWrapper>
          &#169; {currentYear} {t("companyName")}
        </StyledCopyrightWrapper>
      </StyledWrapperOneHalf>

      <StyledWrapperOneHalfRight>
        <StyledLink to={routeConstantsShared.termsOfService.route} title={routeConstantsShared.termsOfService.name}>
          {routeConstantsShared.termsOfService.name}
        </StyledLink>

        <StyledLink to={routeConstantsShared.privacyPolicy.route} title={routeConstantsShared.privacyPolicy.name}>
          {routeConstantsShared.privacyPolicy.name}
        </StyledLink>
      </StyledWrapperOneHalfRight>
    </StyledFooterWrapper>
  );
};
