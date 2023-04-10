import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { ProfessionalInviteDataWrapper } from "../../data-wrappers";

export const ProfessionalInvite: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <ProfessionalInviteDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
