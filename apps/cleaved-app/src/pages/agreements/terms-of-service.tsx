import React, { FunctionComponent } from "react";

import { TermsOfServiceInformation } from "@cleaved/helpers";
import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { HeaderLoggedOut } from "../../components";

export const TermsOfService: FunctionComponent = () => {
  return (
    <>
      <HeaderLoggedOut />

      <ContentWrapper>
        <MainColumnWrapper>
          <TermsOfServiceInformation />
        </MainColumnWrapper>
      </ContentWrapper>
    </>
  );
};
