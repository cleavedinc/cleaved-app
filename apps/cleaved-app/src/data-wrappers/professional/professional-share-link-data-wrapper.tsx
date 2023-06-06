import React, { FunctionComponent, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { Box, H1, SPACING } from "@cleaved/ui";

import { GoogleLoginShareLinkWrapper } from "../../components/login/google-login";
import { JOIN_ORGANIZATION_WITH_SHARE_LINK_MUTATION } from "../../gql-mutations";
import { useRouteParams, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

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
  const [triggerRouteUser, setTriggerRouteUser] = useState(false);
  const routeParams = useRouteParams();
  const shareLink = routeParams.shareLink;

  const [joinOrganizationWithShareLink] = useMutation(JOIN_ORGANIZATION_WITH_SHARE_LINK_MUTATION, {
    variables: {
      shareLink: shareLink,
    },
    onCompleted: (data) => {
      console.log("data1", data);
      const orgId = data.joinOrganizationWithShareLink;
      navigate(`/${orgId}${routeConstantsCleavedApp.home.route}`);
    },
    onError: (error) => {
      console.log("error", error);
      logQueryError(error);
    },
  });

  useEffect(() => {
    if (triggerRouteUser) {
      joinOrganizationWithShareLink();
      setTriggerRouteUser(false);
    }
  }, [triggerRouteUser]);

  return (
    <Box>
      <StyledH1>{t("professionalShareLinkRegistration.header")}</StyledH1>

      <StyledParagraph>{t("professionalShareLinkRegistration.shareLinkText")}</StyledParagraph>

      <StyledLoginWrapper>
        <StyledLoginButtonWrapper>
          <StyledButtonText>{t("professionalShareLinkRegistration.logInButtonLabel")}</StyledButtonText>
          <GoogleLoginShareLinkWrapper shareLink={shareLink} triggerCallback={() => setTriggerRouteUser(true)} />
        </StyledLoginButtonWrapper>
      </StyledLoginWrapper>
    </Box>
  );
};
