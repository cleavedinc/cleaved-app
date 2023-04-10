import React, { FunctionComponent } from "react";

import { PrivacyPolicyInformation } from "@cleaved/helpers";
import { Box, ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

export const PrivacyPolicy: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <Box>
          <PrivacyPolicyInformation />
        </Box>
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
