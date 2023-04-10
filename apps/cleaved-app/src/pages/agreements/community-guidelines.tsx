import React, { FunctionComponent } from "react";

import { CommunityGuidelinesInformation } from "@cleaved/helpers";
import { Box, ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

export const CommunityGuidelines: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <Box>
          <CommunityGuidelinesInformation />
        </Box>
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
