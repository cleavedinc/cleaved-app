import React, { FunctionComponent } from "react";
import { GoogleLoginWrapper } from "../../components/login/google-login";
import styled from "styled-components";

import { Box, H1, SPACING } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

const StyledLoginButtonWrapper = styled.div`
  margin-left: auto;
`;

const StyledButtonText = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

const StyledH1 = styled(H1)`
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledLoginWrapper = styled.div`
  align-items: flex-start;
  display: flex;
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
          <GoogleLoginWrapper />
        </StyledLoginButtonWrapper>
      </StyledLoginWrapper>
    </Box>
  );
};
