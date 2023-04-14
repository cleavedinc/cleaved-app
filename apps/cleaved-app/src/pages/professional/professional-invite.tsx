import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { TeamslistProfessionalInviteDataWrapper } from "../../data-wrappers";

export const TeamsListProfessionalInvite: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <TeamslistProfessionalInviteDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
