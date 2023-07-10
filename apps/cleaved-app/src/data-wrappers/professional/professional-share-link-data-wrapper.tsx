import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, H1, SPACING } from "@cleaved/ui";

import { GoogleLoginShareLinkWrapper } from "../../components/login/google-login";
import { useTranslator } from "../../hooks";

const StyledLoginButtonWrapper = styled.div``;

const StyledButtonText = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

const StyledH1 = styled(H1)`
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledParagraph = styled.div`
  margin-bottom: ${SPACING.XXLARGE};
`;

export const ProfessionalShareLinkDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <Box>
      <StyledH1>{t("professionalShareLinkRegistration.header")}</StyledH1>

      <StyledParagraph>{t("professionalShareLinkRegistration.shareLinkText")}</StyledParagraph>

      <StyledLoginWrapper>
        <StyledLoginButtonWrapper>
          <StyledButtonText>{t("professionalShareLinkRegistration.logInButtonLabel")}</StyledButtonText>
          <GoogleLoginShareLinkWrapper />
        </StyledLoginButtonWrapper>
      </StyledLoginWrapper>
    </Box>
  );
};
