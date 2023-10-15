import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { HeaderLoggedOut } from "../../components";
import { AsideSharelinkRegistrationDataWrapper, ProfessionalShareLinkDataWrapper } from "../../data-wrappers";

export const ProfessionalShareLinkRegistration: FunctionComponent = () => {
  return (
    <>
      <HeaderLoggedOut />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideSharelinkRegistrationDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <ProfessionalShareLinkDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
