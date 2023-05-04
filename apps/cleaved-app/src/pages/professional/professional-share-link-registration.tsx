import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { AsideSharelinkRegistrationDataWrapper, ProfessionalShareLinkDataWrapper } from "../../data-wrappers";

export const ProfessionalShareLinkRegistration: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideSharelinkRegistrationDataWrapper />
      </LeftColumnWrapper>

      <MainColumnMaxWidthWrapper>
        <ProfessionalShareLinkDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
