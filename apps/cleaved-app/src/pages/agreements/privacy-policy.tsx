import React, { FunctionComponent } from "react";

import { PrivacyPolicyInformation } from "@cleaved/helpers";
import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

export const PrivacyPolicy: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <PrivacyPolicyInformation />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
