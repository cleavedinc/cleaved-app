import React, { FunctionComponent } from "react";

import { TermsOfServiceInformation } from "@cleaved/helpers";
import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

export const TermsOfService: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <TermsOfServiceInformation />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
