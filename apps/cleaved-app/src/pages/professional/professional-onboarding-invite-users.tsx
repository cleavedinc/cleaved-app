import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { ProgressBar, InviteUsers } from "../../components";
import { AsideProfessionalOnboardingInviteUsersDataWrapper } from "../../data-wrappers";

export const ProfessionalOnboardingInviteUsers: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideProfessionalOnboardingInviteUsersDataWrapper />
      </LeftColumnWrapper>

      <MainColumnMaxWidthWrapper>
        <ProgressBar activeStep={3} />

        <InviteUsers />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
