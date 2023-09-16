import React, { FunctionComponent } from "react";

import { PrivacyPolicyInformation } from "@cleaved/helpers";
import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { HeaderLoggedOut } from "../../components";

export const PrivacyPolicy: FunctionComponent = () => {
  return (
    <>
      <HeaderLoggedOut />

      <ContentWrapper>
        <MainColumnWrapper>
          <PrivacyPolicyInformation />
        </MainColumnWrapper>
      </ContentWrapper>
    </>
  );
};
