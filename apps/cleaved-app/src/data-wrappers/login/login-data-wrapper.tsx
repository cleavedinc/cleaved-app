import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, COLORS, FONT_SIZES, SPACING } from "@cleaved/ui";

import { GoogleLoginWrapper } from "../../components/login/google-login";
import { useTranslator } from "../../hooks";

const StyledCompanyName = styled.div`
  font-size: ${FONT_SIZES.XLARGE};
  margin-bottom: ${SPACING.MEDIUM};
  text-align: center;
`;

const StyledSignInMessage = styled.div`
  margin-bottom: ${SPACING.XXLARGE};
  text-align: center;
`;

const StyledLogInWrapper = styled(Box)`
  align-items: center;
  background: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${SPACING.XXLARGE};
`;

export const LoginDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StyledLogInWrapper>
      <StyledCompanyName>{t("loginPage.signInHeader")}</StyledCompanyName>

      <StyledSignInMessage>{t("loginPage.signInMessage")}</StyledSignInMessage>

      <GoogleLoginWrapper />
    </StyledLogInWrapper>
  );
};
