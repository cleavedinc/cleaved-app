import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapperMaxWidth } from "@cleaved/ui";

import { AsideSharelinkRegistrationDataWrapper, ProfessionalShareLinkDataWrapper } from "../../data-wrappers";

export const ProfessionalShareLinkRegistration: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideSharelinkRegistrationDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapperMaxWidth>
        <ProfessionalShareLinkDataWrapper />
      </MainColumnWrapperMaxWidth>
    </ContentWrapper>
  );
};
