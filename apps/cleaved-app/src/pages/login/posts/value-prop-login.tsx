import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, COLORS, FONT_SIZES, HeroValuePropositionByline, mediaQueries, SPACING } from "@cleaved/ui";

import { GoogleLoginWrapper } from "../../../components/login/google-login";
import { useTranslator } from "../../../hooks";

const StyledCompanyName = styled(HeroValuePropositionByline)`
  font-size: 1.8rem;
  margin-bottom: ${SPACING.MEDIUM};
  text-align: center;

  ${mediaQueries.SM} {
    font-size: 2.3rem;
  }
`;

const StyledSignInMessage = styled(HeroValuePropositionByline)`
  font-size: ${FONT_SIZES.MEDIUM};
  margin-bottom: ${SPACING.XXLARGE};
  text-align: center;

  ${mediaQueries.SM} {
    font-size: ${FONT_SIZES.LARGE};
  }
`;

const StyledLogInWrapper = styled(Box)`
  align-items: center;
  background: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${SPACING.XXLARGE};
`;

export const ValuePropLogin: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StyledLogInWrapper>
      <StyledCompanyName>{t("companyName")}</StyledCompanyName>

      <StyledSignInMessage>{t("loginPage.signInMessage")}</StyledSignInMessage>

      <GoogleLoginWrapper />
    </StyledLogInWrapper>
  );
};
