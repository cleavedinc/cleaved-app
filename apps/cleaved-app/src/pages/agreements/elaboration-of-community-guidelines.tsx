import React, { FunctionComponent } from "react";

import { ElaborationOfCommunityGuidelinesInformation } from "@cleaved/helpers";
import { Box, ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

export const ElaborationOfCommunityGuidelines: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <Box>
          <ElaborationOfCommunityGuidelinesInformation />
        </Box>
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
