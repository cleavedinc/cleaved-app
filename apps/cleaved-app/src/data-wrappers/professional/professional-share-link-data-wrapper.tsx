import React, { FunctionComponent } from "react";
import { GoogleLoginWrapper } from "../../components/login/google-login";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { debounce } from "ts-debounce";
import styled from "styled-components";

import { alertCopied } from "@cleaved/helpers";
import { Box, ButtonPrimary, FONT_SIZES, H1, SPACING } from "@cleaved/ui";

import { useRouteParams, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

const StyledButtonPrimary = styled(ButtonPrimary)`
  font-size: ${FONT_SIZES.MEDIUM};
`;

const StyledLoginButtonWrapper = styled.div`
  margin-left: auto;
`;

const StyledShareButtonWrapper = styled.div``;

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
  const routeParams = useRouteParams();
  const shareLink = routeParams.shareLink;

  const handleAlertCopied = debounce(
    (message: string) => {
      alertCopied(message);
    },
    1000,
    { isImmediate: true }
  );

  return (
    <Box>
      <StyledH1>{t("professionalShareLinkRegistration.header")}</StyledH1>

      <StyledParagraph>{t("professionalShareLinkRegistration.shareLinkText")}</StyledParagraph>

      <StyledLoginWrapper>
        <StyledShareButtonWrapper>
          <StyledButtonText>{t("professionalShareLinkRegistration.shareLinkButtonLabel")}</StyledButtonText>

          <CopyToClipboard
            text={`${process.env.DOMAIN}${routeConstantsCleavedApp.professionalShareLinkRegistration.route}/${shareLink}`}
            onCopy={() => handleAlertCopied(t("alerts.copiedTextToClipboard"))}
          >
            <StyledButtonPrimary type="button">
              {t("professionalShareLinkRegistration.shareLinkButtonText")}
            </StyledButtonPrimary>
          </CopyToClipboard>
        </StyledShareButtonWrapper>

        <StyledLoginButtonWrapper>
          <StyledButtonText>{t("professionalShareLinkRegistration.logInButtonLabel")}</StyledButtonText>
          <GoogleLoginWrapper />
        </StyledLoginButtonWrapper>
      </StyledLoginWrapper>
    </Box>
  );
};
