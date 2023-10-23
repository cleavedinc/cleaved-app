import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, FONT_SIZES, SPACING } from "@cleaved/ui";

// import { GoogleLoginWrapper } from "../../components/login/google-login";

const StyledCompanyName = styled.h1`
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
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${SPACING.XXLARGE};
`;

export const LoginDataWrapper: FunctionComponent = () => {
  return (
    <StyledLogInWrapper>
      <StyledCompanyName>Sign in to the Admin Portal for cleaved</StyledCompanyName>

      <StyledSignInMessage>Let's help some people</StyledSignInMessage>

      {/* <GoogleLoginWrapper /> */}
    </StyledLogInWrapper>
  );
};
