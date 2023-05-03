import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Router } from "@reach/router";

import { routeConstantsShared } from "@cleaved/helpers";
import { mediaQueries } from "@cleaved/ui";

import { AccountOrganizationRegister } from "../pages/account/account-organization-register";
import { AccountPersonalInformation } from "../pages/account/account-personal-information";
import { AccountProfessionalInformation } from "../pages/account/account-professional-information";
import { AccountOrganizations } from "../pages/account/account-organizations";
import { AccountMembership } from "../pages/account/account-membership";
// import { CommunityGuidelines } from "../pages/agreements/community-guidelines";
// import { ElaborationOfCommunityGuidelines } from "../pages/agreements/elaboration-of-community-guidelines";
import { Home } from "../pages/home";
import { ProfessionalShareLinkRegistration } from "../pages/professional/professional-share-link-registration";
import { Login } from "../pages/login/login";
import { NotFound } from "../pages/not-found";
import { PrivacyPolicy } from "../pages/agreements/privacy-policy";
import { Professional } from "../pages/professional/professional";
import { ProfessionalOnboarding } from "../pages/professional/professional-onboarding";
import { ProfessionalOnboardingHasOrganization } from "../pages/professional/professional-onboarding-has-organization";
import { Project } from "../pages/project/project";
import { ProjectList } from "../pages/project/project-list";
import { ProjectStartNew } from "../pages/project/project-start-new";
import { TeamsList } from "../pages/teams/teams-list";
import { TeamsListProfessionalInvite } from "../pages/professional/professional-invite";
import { TermsOfService } from "../pages/agreements/terms-of-service";
import { TermsOfServiceAgreement } from "../pages/agreements/terms-of-service-agreement";
import { routeConstantsCleavedApp } from "../router";

import { PageProtector } from "./page-protector";

const StyledRouter = styled(Router)`
  display: flex;
  flex: 1;

  ${mediaQueries.SM} {
    padding: 0;
  }
`;

export const ApplicationRouter: FunctionComponent = () => (
  <StyledRouter primary={false}>
    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.accountOrganizationRegister.route}`}
      renderedPage={<AccountOrganizationRegister />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.accountPersonalInformation.route}`}
      renderedPage={<AccountPersonalInformation />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.accountProfessionalInformation.route}`}
      renderedPage={<AccountProfessionalInformation />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.accountMembership.route}`}
      renderedPage={<AccountMembership />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.accountOrganizations.route}`}
      renderedPage={<AccountOrganizations />}
    />

    <PageProtector path={`${routeConstantsCleavedApp.account.route}/:professionalId`} renderedPage={<Professional />} />

    <PageProtector path={`/:orgId${routeConstantsCleavedApp.home.route}`} renderedPage={<Home />} />

    <PageProtector
      path={routeConstantsCleavedApp.professionalOnboarding.route}
      renderedPage={<ProfessionalOnboarding />}
    />

    <PageProtector
      path={routeConstantsCleavedApp.professionalOnboardingHasOrganization.route}
      renderedPage={<ProfessionalOnboardingHasOrganization />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.project.route}/:projectId${routeConstantsCleavedApp.projectBoard.route}`}
      renderedPage={<Project />}
    />

    <PageProtector path={`:orgId${routeConstantsCleavedApp.projectList.route}`} renderedPage={<ProjectList />} />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.projectStartNew.route}`}
      renderedPage={<ProjectStartNew />}
    />

    <PageProtector path={`:orgId${routeConstantsCleavedApp.teamsList.route}`} renderedPage={<TeamsList />} />

    {/* -- Non-Protected Pages below -- */}
    {/* <PageProtector
      path={routeConstantsShared.communityGuidelines.route}
      renderedPage={<CommunityGuidelines />}
      isNotProtected
    /> */}

    {/* <PageProtector
      path={routeConstantsShared.elaborationOfCommunityGuidelines.route}
      renderedPage={<ElaborationOfCommunityGuidelines />}
      isNotProtected
    /> */}

    <PageProtector path={routeConstantsCleavedApp.login.route} renderedPage={<Login />} isNotProtected />

    <PageProtector path={routeConstantsShared.privacyPolicy.route} renderedPage={<PrivacyPolicy />} isNotProtected />

    <PageProtector
      path={`${routeConstantsCleavedApp.professionalShareLinkRegistration.route}/:shareLink`}
      renderedPage={<ProfessionalShareLinkRegistration />}
      isNotProtected
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.professionalInvite.route}`}
      renderedPage={<TeamsListProfessionalInvite />}
    />

    <PageProtector path={routeConstantsShared.termsOfService.route} renderedPage={<TermsOfService />} isNotProtected />

    <PageProtector
      path={routeConstantsCleavedApp.termsOfServiceAgreement.route}
      renderedPage={<TermsOfServiceAgreement />}
      isNotProtected
    />

    <NotFound default />
  </StyledRouter>
);
