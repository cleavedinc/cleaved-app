import React, { FunctionComponent } from "react";

import { TermsOfServiceInformation } from "@cleaved/helpers";
import { Box, ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

export const TermsOfService: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <Box>
          <TermsOfServiceInformation />
        </Box>
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
